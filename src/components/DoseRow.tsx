'use client'

import { useState } from 'react'
import type { ScheduleItem, ScheduleItemStatus } from '@/types'

type Props = {
  item: ScheduleItem
  onUpdate?: (updated: ScheduleItem) => void
  readOnly?: boolean
}

type LogStatus = 'GIVEN' | 'SKIPPED' | 'DELAYED'

const STATUS_META: Record<
  ScheduleItemStatus,
  { label: string; tone: string; rail: string; wash: string }
> = {
  pending: {
    label: 'Pending',
    tone: 'text-[#64748b] bg-[#f3f6fa] border-[#dce6f2]',
    rail: '#109b81',
    wash: 'from-[#e8fbf6] to-white',
  },
  given: {
    label: 'Given',
    tone: 'text-[#109b81] bg-[#ecfdf5] border-[#bfeee3]',
    rail: '#109b81',
    wash: 'from-[#e8fbf6] to-white',
  },
  skipped: {
    label: 'Skipped',
    tone: 'text-[#64748b] bg-[#f8fafc] border-[#d6dde8]',
    rail: '#64748b',
    wash: 'from-[#f2f6fb] to-white',
  },
  delayed: {
    label: 'Delayed',
    tone: 'text-[#f59e0b] bg-[#fff8ed] border-[#f8dfb4]',
    rail: '#f59e0b',
    wash: 'from-[#fff7e8] to-white',
  },
  overdue: {
    label: 'Overdue',
    tone: 'text-[#dc2626] bg-[#fff1f2] border-[#fecdd3]',
    rail: '#dc2626',
    wash: 'from-[#fff1f2] to-white',
  },
}

function timeParts(time: string) {
  const [rawHour = '0', minute = '00'] = time.split(':')
  const hour = Number(rawHour)
  const displayHour = hour % 12 || 12
  return {
    time: `${String(displayHour).padStart(2, '0')}:${minute}`,
    meridiem: hour >= 12 ? 'PM' : 'AM',
  }
}

function StatusBadge({ status }: { status: ScheduleItemStatus }) {
  const meta = STATUS_META[status]
  return (
    <span className={`rounded-lg border px-3 py-1.5 text-xs font-bold ${meta.tone}`}>
      {meta.label}
    </span>
  )
}

function ActionButton({
  label,
  tone,
  onClick,
  disabled,
}: {
  label: string
  tone: 'given' | 'delayed' | 'skipped'
  onClick: () => void
  disabled: boolean
}) {
  const styles = {
    given: 'border-[#bfeee3] bg-[#effdfa] text-[#109b81] hover:bg-[#ddf8f1]',
    delayed: 'border-[#f8dfb4] bg-[#fff8ed] text-[#f59e0b] hover:bg-[#fff1d7]',
    skipped: 'border-[#d6dde8] bg-[#f8fafc] text-[#64748b] hover:bg-[#eef3f8]',
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`min-w-24 rounded-lg border px-3 py-2 text-xs font-bold transition-colors disabled:opacity-50 ${styles[tone]}`}
    >
      {label}
    </button>
  )
}

function TimeRail({
  time,
  status,
  medicineCount = 1,
}: {
  time: string
  status: ScheduleItemStatus
  medicineCount?: number
}) {
  const parts = timeParts(time)
  const meta = STATUS_META[status]

  return (
    <div
      className={`flex w-24 shrink-0 flex-col items-center justify-center gap-1 rounded-l-2xl bg-gradient-to-b px-3 py-5 text-center ${meta.wash}`}
      style={{ color: meta.rail }}
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-current/30 text-[10px] font-black">
        T
      </span>
      <span className="text-xl font-black leading-none tabular-nums">{parts.time}</span>
      <span className="text-xs font-black">{parts.meridiem}</span>
      <span className="mt-1 text-[10px] font-bold opacity-60">
        {medicineCount > 1 ? `${medicineCount} meds` : 'Dose'}
      </span>
    </div>
  )
}

export default function DoseRow({ item, onUpdate, readOnly = false }: Props) {
  const [showSkip, setShowSkip] = useState(false)
  const [skipReason, setSkipReason] = useState('')
  const [acting, setActing] = useState(false)

  const isActionable = item.status === 'pending' || item.status === 'overdue'
  const meta = STATUS_META[item.status]

  async function logDose(status: LogStatus, reason?: string) {
    setActing(true)
    try {
      const res = await fetch('/api/schedule/log', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          assignmentId: item.assignmentId,
          patientId: item.patientId,
          scheduledTime: item.scheduledTime,
          status,
          skipReason: reason?.trim() || null,
        }),
      })
      if (res.ok) {
        const log = await res.json()
        const nextStatus =
          status === 'GIVEN' ? 'given' : status === 'DELAYED' ? 'delayed' : 'skipped'
        onUpdate?.({
          ...item,
          status: nextStatus,
          logId: log.id,
          skipReason: reason?.trim() || null,
        })
      }
    } finally {
      setActing(false)
      setShowSkip(false)
      setSkipReason('')
    }
  }

  return (
    <div className="flex overflow-hidden rounded-2xl border border-[#e7eef7] bg-white shadow-[0_18px_45px_rgba(6,25,67,0.07)]">
      <TimeRail time={item.scheduledTime} status={item.status} />

      <div className="w-1 shrink-0" style={{ backgroundColor: meta.rail }} />

      <div className="flex min-w-0 flex-1 items-center justify-between gap-5 px-6 py-5">
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-sm font-black"
              style={{ borderColor: `${meta.rail}33`, color: meta.rail, backgroundColor: `${meta.rail}10` }}
            >
              P
            </span>
            <div className="min-w-0">
              <div className="flex flex-wrap items-baseline gap-1.5">
                <span className="font-black text-[#061943]">{item.patientName}</span>
                {item.room && (
                  <span className="text-xs font-semibold text-[#34425f]">
                    (Room {item.room})
                  </span>
                )}
              </div>
              <div className="mt-2 flex flex-wrap items-center gap-2 text-base font-black" style={{ color: meta.rail }}>
                <span>{item.medicineName}</span>
                <span>-</span>
                <span>{item.dosage}</span>
                {item.boxLabel && (
                  <span className="rounded-md border border-[#dce8f4] bg-[#f7fbff] px-2 py-0.5 text-[11px] font-bold text-[#2563eb]">
                    {item.boxLabel}
                  </span>
                )}
              </div>
              {item.administrationMethod && (
                <p className="mt-2 text-sm font-medium text-[#64748b]">
                  {item.administrationMethod}
                </p>
              )}
              {item.status === 'skipped' && item.skipReason && (
                <p className="mt-2 text-xs font-bold text-[#f59e0b]">
                  Reason: {item.skipReason}
                </p>
              )}
              {showSkip && (
                <div className="mt-4 flex max-w-md items-center gap-2">
                  <input
                    type="text"
                    value={skipReason}
                    onChange={e => setSkipReason(e.target.value)}
                    onKeyDown={e => {
                      if (e.key === 'Enter') logDose('SKIPPED', skipReason)
                    }}
                    placeholder="Reason (optional)"
                    autoFocus
                    className="min-w-0 flex-1 rounded-lg border border-[#d8e3ef] px-3 py-2 text-sm outline-none transition focus:border-[#109b81] focus:ring-2 focus:ring-[#109b81]/15"
                  />
                  <button
                    onClick={() => logDose('SKIPPED', skipReason)}
                    disabled={acting}
                    className="rounded-lg bg-[#109b81] px-3 py-2 text-xs font-bold text-white disabled:opacity-50"
                  >
                    Confirm
                  </button>
                  <button
                    onClick={() => {
                      setShowSkip(false)
                      setSkipReason('')
                    }}
                    className="text-xs font-bold text-[#64748b]"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex shrink-0 flex-wrap items-center justify-end gap-3">
          {!isActionable || readOnly ? (
            <StatusBadge status={item.status} />
          ) : !showSkip ? (
            <>
              <ActionButton
                label={acting ? 'Saving' : 'Given'}
                tone="given"
                onClick={() => logDose('GIVEN')}
                disabled={acting}
              />
              <ActionButton
                label={acting ? 'Saving' : 'Delayed'}
                tone="delayed"
                onClick={() => logDose('DELAYED')}
                disabled={acting}
              />
              <ActionButton
                label="Skipped"
                tone="skipped"
                onClick={() => setShowSkip(true)}
                disabled={acting}
              />
            </>
          ) : null}
        </div>
      </div>
    </div>
  )
}

type GroupedProps = {
  items: ScheduleItem[]
  onUpdate?: (updated: ScheduleItem) => void
  readOnly?: boolean
}

function worstStatus(items: ScheduleItem[]): ScheduleItemStatus {
  if (items.some(i => i.status === 'overdue')) return 'overdue'
  if (items.some(i => i.status === 'pending')) return 'pending'
  if (items.some(i => i.status === 'delayed')) return 'delayed'
  if (items.some(i => i.status === 'skipped')) return 'skipped'
  return 'given'
}

export function GroupedDoseRow({ items, onUpdate, readOnly = false }: GroupedProps) {
  const [showSkip, setShowSkip] = useState(false)
  const [skipReason, setSkipReason] = useState('')
  const [acting, setActing] = useState(false)

  const first = items[0]
  const status = worstStatus(items)
  const isActionable = status === 'pending' || status === 'overdue'
  const meta = STATUS_META[status]

  async function logAll(logStatus: LogStatus, reason?: string) {
    setActing(true)
    try {
      const results = await Promise.all(
        items.map(item =>
          fetch('/api/schedule/log', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              assignmentId: item.assignmentId,
              patientId: item.patientId,
              scheduledTime: item.scheduledTime,
              status: logStatus,
              skipReason: reason?.trim() || null,
            }),
          }).then(r => (r.ok ? r.json() : null)),
        ),
      )
      results.forEach((log, i) => {
        if (log) {
          const nextStatus =
            logStatus === 'GIVEN' ? 'given' : logStatus === 'DELAYED' ? 'delayed' : 'skipped'
          onUpdate?.({
            ...items[i],
            status: nextStatus,
            logId: log.id,
            skipReason: reason?.trim() || null,
          })
        }
      })
    } finally {
      setActing(false)
      setShowSkip(false)
      setSkipReason('')
    }
  }

  return (
    <div className="flex overflow-hidden rounded-2xl border border-[#e7eef7] bg-white shadow-[0_18px_45px_rgba(6,25,67,0.07)]">
      <TimeRail time={first.scheduledTime} status={status} medicineCount={items.length} />
      <div className="w-1 shrink-0" style={{ backgroundColor: meta.rail }} />

      <div className="flex min-w-0 flex-1 items-center justify-between gap-5 px-6 py-5">
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-sm font-black"
              style={{ borderColor: `${meta.rail}33`, color: meta.rail, backgroundColor: `${meta.rail}10` }}
            >
              P
            </span>
            <div className="min-w-0">
              <div className="flex flex-wrap items-baseline gap-1.5">
                <span className="font-black text-[#061943]">{first.patientName}</span>
                {first.room && (
                  <span className="text-xs font-semibold text-[#34425f]">
                    (Room {first.room})
                  </span>
                )}
              </div>
              {first.boxLabel && (
                <span className="mt-2 inline-block rounded-md border border-[#dce8f4] bg-[#f7fbff] px-2 py-0.5 text-[11px] font-bold text-[#2563eb]">
                  {first.boxLabel}
                </span>
              )}
              <div className="mt-2 space-y-1">
                {items.map(item => (
                  <p key={item.assignmentId} className="text-base font-black" style={{ color: meta.rail }}>
                    {item.medicineName} - {item.dosage}
                  </p>
                ))}
              </div>
              {first.administrationMethod && (
                <p className="mt-2 text-sm font-medium text-[#64748b]">
                  {first.administrationMethod}
                </p>
              )}
              {showSkip && (
                <div className="mt-4 flex max-w-md items-center gap-2">
                  <input
                    type="text"
                    value={skipReason}
                    onChange={e => setSkipReason(e.target.value)}
                    onKeyDown={e => {
                      if (e.key === 'Enter') logAll('SKIPPED', skipReason)
                    }}
                    placeholder="Reason (optional)"
                    autoFocus
                    className="min-w-0 flex-1 rounded-lg border border-[#d8e3ef] px-3 py-2 text-sm outline-none transition focus:border-[#109b81] focus:ring-2 focus:ring-[#109b81]/15"
                  />
                  <button
                    onClick={() => logAll('SKIPPED', skipReason)}
                    disabled={acting}
                    className="rounded-lg bg-[#109b81] px-3 py-2 text-xs font-bold text-white disabled:opacity-50"
                  >
                    Confirm
                  </button>
                  <button
                    onClick={() => {
                      setShowSkip(false)
                      setSkipReason('')
                    }}
                    className="text-xs font-bold text-[#64748b]"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex shrink-0 flex-wrap items-center justify-end gap-3">
          {!isActionable || readOnly ? (
            <StatusBadge status={status} />
          ) : !showSkip ? (
            <>
              <ActionButton
                label={acting ? 'Saving' : 'Given'}
                tone="given"
                onClick={() => logAll('GIVEN')}
                disabled={acting}
              />
              <ActionButton
                label={acting ? 'Saving' : 'Delayed'}
                tone="delayed"
                onClick={() => logAll('DELAYED')}
                disabled={acting}
              />
              <ActionButton
                label="Skipped"
                tone="skipped"
                onClick={() => setShowSkip(true)}
                disabled={acting}
              />
            </>
          ) : null}
        </div>
      </div>
    </div>
  )
}
