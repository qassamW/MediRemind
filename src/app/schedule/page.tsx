'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import DoseRow, { GroupedDoseRow } from '@/components/DoseRow'
import type { ScheduleItem, ScheduleItemStatus } from '@/types'

type Department = { id: string; name: string }

// ─── Grouping helpers ─────────────────────────────────────────────────────────

function groupPriority(items: ScheduleItem[]): number {
  if (items.some(i => i.status === 'overdue')) return 0
  if (items.some(i => i.status === 'pending')) return 1
  return 2
}

function groupByTime(items: ScheduleItem[]): [string, ScheduleItem[]][] {
  const map = new Map<string, ScheduleItem[]>()
  for (const item of items) {
    const arr = map.get(item.scheduledTime) ?? []
    arr.push(item)
    map.set(item.scheduledTime, arr)
  }
  return [...map.entries()].sort(([tA, iA], [tB, iB]) => {
    const diff = groupPriority(iA) - groupPriority(iB)
    return diff !== 0 ? diff : tA.localeCompare(tB)
  })
}

const rowPriority = (s: ScheduleItemStatus) =>
  s === 'overdue' ? 0 : s === 'pending' ? 1 : 2

// Group box medicines for the same patient+box into one display unit
function mergeBoxRows(items: ScheduleItem[]): (ScheduleItem | ScheduleItem[])[] {
  const groups = new Map<string, ScheduleItem[]>()
  for (const item of items) {
    const key = item.boxLabel
      ? `${item.patientId}::${item.boxLabel}`
      : `solo::${item.assignmentId}`
    const arr = groups.get(key) ?? []
    arr.push(item)
    groups.set(key, arr)
  }
  return [...groups.values()].map(g => (g.length === 1 ? g[0] : g))
}

const formatDate = (d: Date) =>
  d.toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SchedulePage() {
  const [items, setItems] = useState<ScheduleItem[]>([])
  const [loading, setLoading] = useState(true)
  const [departments, setDepartments] = useState<Department[]>([])
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0, 10))
  const [departmentFilter, setDepartmentFilter] = useState('')
  const [patientSearch, setPatientSearch] = useState('')
  const [secondsAgo, setSecondsAgo] = useState(0)
  const lastFetchedAt = useRef<number>(Date.now())

  // Load departments once (graceful if API not built yet)
  useEffect(() => {
    fetch('/api/departments')
      .then(r => (r.ok ? r.json() : []))
      .then(data => setDepartments(Array.isArray(data) ? data : []))
      .catch(() => {})
  }, [])

  // Fetch schedule; re-runs when department filter changes
  const fetchSchedule = useCallback(async () => {
    try {
      const url = new URL('/api/schedule', window.location.origin)
      url.searchParams.set('date', selectedDate)
      if (departmentFilter) url.searchParams.set('departmentId', departmentFilter)
      const res = await fetch(url.toString())
      if (res.ok) {
        const data = await res.json()
        setItems(Array.isArray(data) ? data : [])
        lastFetchedAt.current = Date.now()
        setSecondsAgo(0)
      }
    } catch {
      /* keep stale data on network error */
    } finally {
      setLoading(false)
    }
  }, [selectedDate, departmentFilter])

  useEffect(() => {
    setLoading(true)
    fetchSchedule()
  }, [fetchSchedule])

  // "Last updated X seconds ago" ticker
  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsAgo(Math.floor((Date.now() - lastFetchedAt.current) / 1000))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  function updateItem(updated: ScheduleItem) {
    setItems(prev =>
      prev.map(i =>
        i.assignmentId === updated.assignmentId && i.scheduledTime === updated.scheduledTime
          ? updated
          : i,
      ),
    )
  }

  // Client-side patient search (departmentId filter happens server-side)
  const visible = patientSearch.trim()
    ? items.filter(i =>
        i.patientName.toLowerCase().includes(patientSearch.toLowerCase()),
      )
    : items

  const groups = groupByTime(visible)

  // Summary counts
  const overdueCount = visible.filter(i => i.status === 'overdue').length
  const pendingCount = visible.filter(i => i.status === 'pending').length

  return (
    <div>
      {/* ── Header ── */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">
            {selectedDate === new Date().toISOString().slice(0, 10) ? "Today's Schedule" : 'Schedule'}
          </h1>
          <p className="text-sm text-gray-500 mt-0.5">{formatDate(new Date(selectedDate + 'T12:00:00'))}</p>
        </div>

        <div className="flex items-center gap-4">
          {/* Summary pills */}
          {!loading && (overdueCount > 0 || pendingCount > 0) && (
            <div className="flex items-center gap-2 text-xs">
              {overdueCount > 0 && (
                <span className="bg-red-100 text-red-700 font-bold px-2.5 py-1 rounded-full">
                  {overdueCount} overdue
                </span>
              )}
              {pendingCount > 0 && (
                <span className="bg-gray-100 text-gray-600 font-medium px-2.5 py-1 rounded-full">
                  {pendingCount} pending
                </span>
              )}
            </div>
          )}

          {/* Last updated */}
          <div className="flex items-center gap-1 text-xs text-gray-400">
            {loading ? (
              <span>Loading…</span>
            ) : (
              <>
                <span>
                  {secondsAgo < 5 ? 'Just updated' : `Updated ${secondsAgo}s ago`}
                </span>
                <button
                  onClick={fetchSchedule}
                  title="Refresh"
                  className="ml-1 text-blue-500 hover:text-blue-700 text-base leading-none"
                >
                  ↻
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* ── Filter bar ── */}
      <div className="flex items-center gap-3 mb-5">
        <input
          type="date"
          value={selectedDate}
          onChange={e => setSelectedDate(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={departmentFilter}
          onChange={e => setDepartmentFilter(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        >
          <option value="">All departments</option>
          {departments.map(d => (
            <option key={d.id} value={d.id}>
              {d.name}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search patient…"
          value={patientSearch}
          onChange={e => setPatientSearch(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-52"
        />
      </div>

      {/* ── Schedule ── */}
      {loading ? (
        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden animate-pulse">
              <div className="bg-gray-50 px-4 py-2.5 border-b border-gray-200">
                <div className="h-4 bg-gray-200 rounded w-28" />
              </div>
              {Array.from({ length: 2 }).map((_, j) => (
                <div key={j} className="flex items-start gap-4 px-4 py-3 border-b border-gray-100 last:border-0">
                  <div className="flex-1 space-y-2">
                    <div className="h-3.5 bg-gray-200 rounded w-36" />
                    <div className="h-3 bg-gray-200 rounded w-28" />
                    <div className="h-2.5 bg-gray-100 rounded w-48" />
                  </div>
                  <div className="h-6 w-16 bg-gray-200 rounded-full mt-0.5" />
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : groups.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-gray-400">
          <p className="text-sm font-medium">No doses scheduled for today</p>
          <p className="text-xs mt-1">Check that patients have active medicine assignments</p>
        </div>
      ) : (
        <div className="space-y-4">
          {groups.map(([time, groupItems]) => {
            const hasOverdue = groupItems.some(i => i.status === 'overdue')
            const actionableCount = groupItems.filter(
              i => i.status === 'pending' || i.status === 'overdue',
            ).length

            const sortedRows = [...groupItems].sort(
              (a, b) => rowPriority(a.status) - rowPriority(b.status),
            )

            return (
              <div
                key={time}
                className={`bg-white rounded-xl border overflow-hidden ${
                  hasOverdue ? 'border-red-300' : 'border-gray-200'
                }`}
              >
                {/* Time slot header */}
                <div
                  className={`flex items-center gap-3 px-4 py-2.5 border-b ${
                    hasOverdue
                      ? 'bg-red-50 border-red-200'
                      : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <span
                    className={`text-sm font-bold tabular-nums ${
                      hasOverdue ? 'text-red-800' : 'text-gray-800'
                    }`}
                  >
                    {time}
                  </span>

                  <span className="text-xs text-gray-500">
                    {groupItems.length} dose{groupItems.length !== 1 ? 's' : ''}
                  </span>

                  {hasOverdue && (
                    <span className="text-xs font-bold text-red-600 uppercase tracking-wide">
                      — Overdue
                    </span>
                  )}

                  {actionableCount > 0 && (
                    <span className="ml-auto text-xs text-gray-400">
                      {actionableCount} action{actionableCount !== 1 ? 's' : ''} needed
                    </span>
                  )}
                </div>

                {/* Dose rows — box medicines for same patient merged into one row */}
                {mergeBoxRows(sortedRows).map((itemOrGroup, idx) =>
                  Array.isArray(itemOrGroup) ? (
                    <GroupedDoseRow
                      key={`group-${itemOrGroup[0].patientId}-${itemOrGroup[0].boxLabel}-${idx}`}
                      items={itemOrGroup}
                      onUpdate={updateItem}
                    />
                  ) : (
                    <DoseRow
                      key={`${itemOrGroup.assignmentId}-${itemOrGroup.scheduledTime}`}
                      item={itemOrGroup}
                      onUpdate={updateItem}
                    />
                  )
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}