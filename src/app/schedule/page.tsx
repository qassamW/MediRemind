'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useSession } from 'next-auth/react'
import DoseRow, { GroupedDoseRow } from '@/components/DoseRow'
import type { ScheduleItem, ScheduleItemStatus } from '@/types'

type Department = { id: string; name: string }
type StatusFilter = 'all' | ScheduleItemStatus
type DisplayRow = ScheduleItem | ScheduleItem[]
type DoseNotification = {
  id: string
  kind: 'due' | 'overdue'
  count: number
  time: string
  patientName: string
  medicineName: string
}
type AudioWindow = Window &
  typeof globalThis & {
    webkitAudioContext?: typeof AudioContext
  }

const STATUS_OPTIONS: { value: StatusFilter; label: string }[] = [
  { value: 'all', label: 'All Status' },
  { value: 'pending', label: 'Pending' },
  { value: 'overdue', label: 'Overdue' },
  { value: 'given', label: 'Given' },
  { value: 'delayed', label: 'Delayed' },
  { value: 'skipped', label: 'Skipped' },
]

const rowPriority = (status: ScheduleItemStatus) => {
  if (status === 'overdue') return 0
  if (status === 'pending') return 1
  if (status === 'delayed') return 2
  if (status === 'skipped') return 3
  return 4
}

function worstStatus(items: ScheduleItem[]): ScheduleItemStatus {
  if (items.some(i => i.status === 'overdue')) return 'overdue'
  if (items.some(i => i.status === 'pending')) return 'pending'
  if (items.some(i => i.status === 'delayed')) return 'delayed'
  if (items.some(i => i.status === 'skipped')) return 'skipped'
  return 'given'
}

function makeDisplayRows(items: ScheduleItem[]): DisplayRow[] {
  const groups = new Map<string, ScheduleItem[]>()

  for (const item of items) {
    const key = item.boxLabel
      ? `${item.scheduledTime}::${item.patientId}::${item.boxLabel}`
      : `solo::${item.assignmentId}::${item.scheduledTime}`
    const group = groups.get(key) ?? []
    group.push(item)
    groups.set(key, group)
  }

  return [...groups.values()]
    .map(group => (group.length === 1 ? group[0] : group))
    .sort((a, b) => {
      const firstA = Array.isArray(a) ? a[0] : a
      const firstB = Array.isArray(b) ? b[0] : b
      const statusA = Array.isArray(a) ? worstStatus(a) : a.status
      const statusB = Array.isArray(b) ? worstStatus(b) : b.status
      const priority = rowPriority(statusA) - rowPriority(statusB)
      return priority !== 0
        ? priority
        : firstA.scheduledTime.localeCompare(firstB.scheduledTime)
    })
}

const formatDate = (d: Date) =>
  d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

function scheduledDateTime(date: string, time: string) {
  return new Date(`${date}T${time}:00`)
}

function notificationKey(kind: DoseNotification['kind'], item: ScheduleItem, date: string) {
  return `${kind}:${date}:${item.assignmentId}:${item.scheduledTime}`
}

function playTone(kind: DoseNotification['kind']) {
  if (typeof window === 'undefined') return

  const audioWindow = window as AudioWindow
  const AudioContextClass = audioWindow.AudioContext || audioWindow.webkitAudioContext
  if (!AudioContextClass) return

  const context = new AudioContextClass()
  const master = context.createGain()
  master.gain.setValueAtTime(0.0001, context.currentTime)
  master.gain.exponentialRampToValueAtTime(0.18, context.currentTime + 0.02)
  master.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 1.1)
  master.connect(context.destination)

  const notes =
    kind === 'due'
      ? [
          { frequency: 740, start: 0, duration: 0.16 },
          { frequency: 980, start: 0.22, duration: 0.2 },
        ]
      : [
          { frequency: 440, start: 0, duration: 0.18 },
          { frequency: 330, start: 0.24, duration: 0.18 },
          { frequency: 220, start: 0.48, duration: 0.28 },
        ]

  notes.forEach(note => {
    const oscillator = context.createOscillator()
    const envelope = context.createGain()
    const start = context.currentTime + note.start
    const end = start + note.duration

    oscillator.type = kind === 'due' ? 'sine' : 'square'
    oscillator.frequency.setValueAtTime(note.frequency, start)
    envelope.gain.setValueAtTime(0.0001, start)
    envelope.gain.exponentialRampToValueAtTime(kind === 'due' ? 0.42 : 0.28, start + 0.02)
    envelope.gain.exponentialRampToValueAtTime(0.0001, end)

    oscillator.connect(envelope)
    envelope.connect(master)
    oscillator.start(start)
    oscillator.stop(end + 0.02)
  })

  window.setTimeout(() => {
    void context.close()
  }, 1400)
}

function DoseNotificationPanel({
  notifications,
  onClose,
}: {
  notifications: DoseNotification[]
  onClose: (id: string) => void
}) {
  return (
    <div className="fixed right-5 top-6 z-50 flex w-[min(380px,calc(100vw-2.5rem))] flex-col gap-3">
      {notifications.map(notification => {
        const isOverdue = notification.kind === 'overdue'

        return (
        <div
          key={notification.id}
          className={`overflow-hidden rounded-2xl border bg-white shadow-[0_24px_65px_rgba(6,25,67,0.22)] ${
            isOverdue ? 'border-[#fecdd3]' : 'border-[#bfeee3]'
          } dose-notification-enter`}
          aria-live="polite"
        >
          <div
            className={`h-1.5 ${
              isOverdue
                ? 'bg-gradient-to-r from-[#dc2626] via-[#f59e0b] to-[#dc2626]'
                : 'bg-gradient-to-r from-[#109b81] via-[#06b6d4] to-[#2563eb]'
            }`}
          />
          <div className="flex gap-4 p-4">
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-xs font-black ${
                isOverdue
                  ? 'bg-[#fff1f2] text-[#dc2626]'
                  : 'bg-[#ecfdf5] text-[#109b81]'
              }`}
            >
              {isOverdue ? '!' : 'Now'}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p
                    className={`text-sm font-black ${
                      isOverdue ? 'text-[#dc2626]' : 'text-[#109b81]'
                    }`}
                  >
                    {isOverdue ? 'Overdue dose alert' : 'Dose due now'}
                  </p>
                  <p className="mt-1 text-base font-black text-[#061943]">
                    {notification.count > 1
                      ? `${notification.count} doses need attention`
                      : notification.medicineName}
                  </p>
                </div>
                <button
                  onClick={() => onClose(notification.id)}
                  className="rounded-full px-2 text-lg leading-none text-[#94a3b8] transition hover:bg-[#f3f8fc] hover:text-[#061943]"
                  aria-label="Dismiss notification"
                >
                  x
                </button>
              </div>
              <p className="mt-2 text-sm font-semibold text-[#34425f]">
                {notification.patientName} at {notification.time}
              </p>
              <p className="mt-1 text-xs font-medium text-[#64748b]">
                {isOverdue
                  ? 'This medication is past its scheduled administration window.'
                  : 'This medication has reached its scheduled time.'}
              </p>
            </div>
          </div>
        </div>
        )
      })}
    </div>
  )
}

export default function SchedulePage() {
  const { data: session } = useSession()
  const [items, setItems] = useState<ScheduleItem[]>([])
  const [loading, setLoading] = useState(true)
  const [departments, setDepartments] = useState<Department[]>([])
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0, 10))
  const [departmentFilter, setDepartmentFilter] = useState('')
  const [patientSearch, setPatientSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all')
  const [secondsAgo, setSecondsAgo] = useState(0)
  const [clockTick, setClockTick] = useState(0)
  const [notifications, setNotifications] = useState<DoseNotification[]>([])
  const lastFetchedAt = useRef<number>(0)
  const notifiedKeys = useRef<Set<string>>(new Set())

  useEffect(() => {
    fetch('/api/departments')
      .then(r => (r.ok ? r.json() : []))
      .then(data => setDepartments(Array.isArray(data) ? data : []))
      .catch(() => {})
  }, [])

  const fetchSchedule = useCallback(async (showLoading = false) => {
    if (showLoading) setLoading(true)
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
    const timeout = window.setTimeout(() => {
      fetchSchedule(true)
    }, 0)
    return () => window.clearTimeout(timeout)
  }, [fetchSchedule])

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsAgo(Math.floor((Date.now() - lastFetchedAt.current) / 1000))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setClockTick(tick => tick + 1)
    }, 30_000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = window.setInterval(() => {
      fetchSchedule()
    }, 30_000)
    return () => window.clearInterval(interval)
  }, [fetchSchedule])

  useEffect(() => {
    if (loading || selectedDate !== new Date().toISOString().slice(0, 10)) return

    const now = Date.now()
    const dueWindowStart = now - 30 * 60 * 1000
    const dueWindowEnd = now + 60 * 1000
    const dueItems = items.filter(item => {
      if (item.status !== 'pending') return false
      const scheduled = scheduledDateTime(selectedDate, item.scheduledTime).getTime()
      return scheduled >= dueWindowStart && scheduled <= dueWindowEnd
    })
    const overdueItems = items.filter(item => item.status === 'overdue')

    const nextNotifications: DoseNotification[] = []

    ;(
      [
        ['due', dueItems],
        ['overdue', overdueItems],
      ] as const
    ).forEach(([kind, candidates]) => {
      const firstUnseen = candidates.find(
        item => !notifiedKeys.current.has(notificationKey(kind, item, selectedDate)),
      )

      if (!firstUnseen) return

      candidates.forEach(item => {
        notifiedKeys.current.add(notificationKey(kind, item, selectedDate))
      })

      nextNotifications.push({
        id: notificationKey(kind, firstUnseen, selectedDate),
        kind,
        count: candidates.length,
        time: firstUnseen.scheduledTime,
        patientName: firstUnseen.patientName,
        medicineName: firstUnseen.medicineName,
      })

      playTone(kind)
    })

    if (nextNotifications.length === 0) return

    setNotifications(current => {
      const currentIds = new Set(current.map(item => item.id))
      return [
        ...nextNotifications.filter(item => !currentIds.has(item.id)),
        ...current,
      ].slice(0, 4)
    })
  }, [clockTick, items, loading, selectedDate])

  function updateItem(updated: ScheduleItem) {
    setItems(prev =>
      prev.map(i =>
        i.assignmentId === updated.assignmentId && i.scheduledTime === updated.scheduledTime
          ? updated
          : i,
      ),
    )
  }

  const filtered = items.filter(item => {
    const query = patientSearch.trim().toLowerCase()
    const matchesSearch = !query || item.patientName.toLowerCase().includes(query)
    const matchesStatus = statusFilter === 'all' || item.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const displayRows = makeDisplayRows(filtered)
  const overdueCount = filtered.filter(i => i.status === 'overdue').length
  const pendingCount = filtered.filter(i => i.status === 'pending').length
  const today = new Date().toISOString().slice(0, 10)

  return (
    <div className="space-y-6">
      <DoseNotificationPanel
        notifications={notifications}
        onClose={id =>
          setNotifications(current => current.filter(item => item.id !== id))
        }
      />

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-[#061943]">Schedule</h1>
          <p className="mt-2 text-sm font-semibold text-[#64748b]">
            {session?.user?.name ?? 'MediReminder Staff'}
            <span className="ml-1 text-[#94a3b8]">
              ({(session?.user as { role?: string } | undefined)?.role?.toLowerCase() ?? 'staff'})
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <label className="flex h-14 min-w-44 items-center gap-3 rounded-xl border border-[#e5edf6] bg-white px-4 shadow-sm">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f0f7ff] text-xs font-black text-[#2563eb]">
              Cal
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-[11px] font-bold uppercase text-[#94a3b8]">
                Date
              </span>
              <input
                type="date"
                value={selectedDate}
                onChange={e => setSelectedDate(e.target.value)}
                className="w-full bg-transparent text-sm font-black text-[#061943] outline-none"
              />
            </span>
          </label>

          <label className="flex h-14 min-w-44 items-center gap-3 rounded-xl border border-[#e5edf6] bg-white px-4 shadow-sm">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#eff8f7] text-xs font-black text-[#109b81]">
              Fil
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-[11px] font-bold uppercase text-[#94a3b8]">
                Status
              </span>
              <select
                value={statusFilter}
                onChange={e => setStatusFilter(e.target.value as StatusFilter)}
                className="w-full bg-transparent text-sm font-black text-[#061943] outline-none"
              >
                {STATUS_OPTIONS.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </span>
          </label>
        </div>
      </div>

      <div className="flex flex-col gap-3 rounded-2xl border border-[#e5edf6] bg-white/75 p-3 shadow-sm lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-3 sm:flex-row">
          <select
            value={departmentFilter}
            onChange={e => setDepartmentFilter(e.target.value)}
            className="h-11 rounded-xl border border-[#dce8f4] bg-white px-4 text-sm font-semibold text-[#34425f] outline-none transition focus:border-[#109b81] focus:ring-2 focus:ring-[#109b81]/15"
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
            placeholder="Search patient"
            value={patientSearch}
            onChange={e => setPatientSearch(e.target.value)}
            className="h-11 rounded-xl border border-[#dce8f4] bg-white px-4 text-sm font-semibold text-[#34425f] outline-none transition placeholder:text-[#94a3b8] focus:border-[#109b81] focus:ring-2 focus:ring-[#109b81]/15 sm:w-64"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
          <span className="rounded-full bg-[#eff8f7] px-3 py-1.5 text-[#109b81]">
            {pendingCount} pending
          </span>
          <span className="rounded-full bg-[#fff1f2] px-3 py-1.5 text-[#dc2626]">
            {overdueCount} overdue
          </span>
          <button
            onClick={() => fetchSchedule()}
            className="rounded-full border border-[#dce8f4] bg-white px-3 py-1.5 text-[#64748b] transition hover:text-[#109b81]"
          >
            {loading ? 'Loading' : secondsAgo < 5 ? 'Just updated' : `Updated ${secondsAgo}s ago`}
          </button>
        </div>
      </div>

      {loading ? (
        <div className="space-y-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-36 animate-pulse rounded-2xl border border-[#e7eef7] bg-white shadow-[0_18px_45px_rgba(6,25,67,0.05)]"
            />
          ))}
        </div>
      ) : displayRows.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-[#cbd8e8] bg-white px-6 py-20 text-center">
          <p className="text-base font-black text-[#061943]">
            No doses scheduled for {selectedDate === today ? 'today' : formatDate(new Date(`${selectedDate}T12:00:00`))}
          </p>
          <p className="mt-2 text-sm font-medium text-[#64748b]">
            Try another date, department, patient, or status filter.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {displayRows.map((row, index) =>
            Array.isArray(row) ? (
              <GroupedDoseRow
                key={`group-${row[0].patientId}-${row[0].boxLabel}-${row[0].scheduledTime}-${index}`}
                items={row}
                onUpdate={updateItem}
              />
            ) : (
              <DoseRow
                key={`${row.assignmentId}-${row.scheduledTime}`}
                item={row}
                onUpdate={updateItem}
              />
            ),
          )}
        </div>
      )}

      <div className="flex items-center justify-between overflow-hidden rounded-2xl border border-[#dbeafe] bg-[#eef6ff] px-5 py-4 text-[#061943]">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-xs font-black text-[#2563eb] shadow-sm">
            Bell
          </span>
          <div>
            <p className="text-sm font-black">Stay on track, every dose matters.</p>
            <p className="mt-1 text-xs font-medium text-[#64748b]">
              MediReminder helps you deliver the right medication at the right time.
            </p>
          </div>
        </div>
        <div className="hidden items-end gap-2 sm:flex">
          <span className="h-8 w-8 rounded-lg bg-[#109b81]/20" />
          <span className="h-12 w-9 rounded-lg bg-[#2563eb]/20" />
          <span className="h-10 w-10 rounded-full border-4 border-white bg-[#f59e0b]/25" />
        </div>
      </div>
    </div>
  )
}
