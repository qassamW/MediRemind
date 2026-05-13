'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import DoseRow from '@/components/DoseRow'
import type { ScheduleItem } from '@/types'

type Patient = { id: string; status: string }

function StatCard({
  label,
  value,
  highlight,
}: {
  label: string
  value: number | null
  highlight?: boolean
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5">
      <p className="text-sm text-gray-500 font-medium">{label}</p>
      <p className={`text-3xl font-bold mt-1 tabular-nums ${highlight && (value ?? 0) > 0 ? 'text-red-600' : 'text-gray-900'}`}>
        {value ?? '—'}
      </p>
    </div>
  )
}

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const role = (session?.user as { role?: string })?.role

  useEffect(() => {
    if (status === 'authenticated' && role && role !== 'ADMIN') {
      router.replace('/schedule')
    }
  }, [status, role, router])

  const [scheduleItems, setScheduleItems] = useState<ScheduleItem[]>([])
  const [admittedCount, setAdmittedCount] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)
  const [secondsAgo, setSecondsAgo] = useState(0)
  const lastFetchedAt = useRef<number>(Date.now())

  const fetchData = useCallback(async () => {
    try {
      const [scheduleRes, patientsRes] = await Promise.all([
        fetch('/api/schedule'),
        fetch('/api/patients?status=ADMITTED'),
      ])

      if (scheduleRes.ok) {
        const data: ScheduleItem[] = await scheduleRes.json()
        setScheduleItems(Array.isArray(data) ? data : [])
      }

      if (patientsRes.ok) {
        const patients: Patient[] = await patientsRes.json()
        setAdmittedCount(Array.isArray(patients) ? patients.length : 0)
      }

      lastFetchedAt.current = Date.now()
      setSecondsAgo(0)
    } catch {
      /* keep stale data */
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchData()
    const interval = setInterval(fetchData, 60_000)
    return () => clearInterval(interval)
  }, [fetchData])

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsAgo(Math.floor((Date.now() - lastFetchedAt.current) / 1000))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  if (status === 'loading' || !role) {
    return <div className="flex items-center justify-center h-40 text-sm text-gray-400">Loading…</div>
  }
  if (role !== 'ADMIN') return null

  const overdueItems = scheduleItems.filter(i => i.status === 'overdue')
  const dosesToday = scheduleItems.length

  return (
    <div>
      <div className="flex items-start justify-between mb-6">
        <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
        <div className="flex items-center gap-1 text-xs text-gray-400">
          {loading ? (
            <span>Loading…</span>
          ) : (
            <>
              <span>{secondsAgo < 5 ? 'Just updated' : `Updated ${secondsAgo}s ago`}</span>
              <button
                onClick={fetchData}
                title="Refresh"
                className="ml-1 text-blue-500 hover:text-blue-700 text-base leading-none"
              >
                ↻
              </button>
            </>
          )}
        </div>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <StatCard label="Admitted patients" value={admittedCount} />
        <StatCard label="Doses due today" value={loading ? null : dosesToday} />
        <StatCard
          label="Overdue doses"
          value={loading ? null : overdueItems.length}
          highlight
        />
      </div>

      {/* Overdue doses list */}
      <div>
        <h2 className="text-sm font-semibold text-gray-700 mb-3">
          Overdue right now
          {overdueItems.length > 0 && (
            <span className="ml-2 text-red-600">({overdueItems.length})</span>
          )}
        </h2>

        {loading ? (
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden animate-pulse">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex gap-4 px-4 py-3 border-b border-gray-100 last:border-0">
                <div className="flex-1 space-y-2">
                  <div className="h-3.5 bg-gray-200 rounded w-36" />
                  <div className="h-3 bg-gray-200 rounded w-28" />
                </div>
                <div className="h-6 w-16 bg-gray-200 rounded-full" />
              </div>
            ))}
          </div>
        ) : overdueItems.length === 0 ? (
          <div className="bg-white rounded-xl border border-gray-200 px-5 py-10 text-center text-sm text-gray-400">
            No overdue doses
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-red-300 overflow-hidden">
            {overdueItems.map(item => (
              <DoseRow
                key={`${item.assignmentId}-${item.scheduledTime}`}
                item={item}
                readOnly
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}