'use client'

import { useState } from 'react'
import type { ScheduleItem, ScheduleItemStatus } from '@/types'

type Props = {
  item: ScheduleItem
  onUpdate?: (updated: ScheduleItem) => void
  readOnly?: boolean
}

function StatusBadge({ status }: { status: ScheduleItemStatus }) {
  const base = 'text-xs font-semibold px-2.5 py-1 rounded-full'
  const map: Record<ScheduleItemStatus, string> = {
    pending: `${base} bg-gray-100 text-gray-600`,
    given:   `${base} bg-green-100 text-green-700`,
    skipped: `${base} bg-amber-100 text-amber-700`,
    delayed: `${base} bg-orange-100 text-orange-700`,
    overdue: `${base} bg-red-100 text-red-800 font-bold border border-red-300`,
  }
  const label: Record<ScheduleItemStatus, string> = {
    pending: 'Pending',
    given:   'Given',
    skipped: 'Skipped',
    delayed: 'Delayed',
    overdue: 'Overdue',
  }
  return <span className={map[status]}>{label[status]}</span>
}

export default function DoseRow({ item, onUpdate, readOnly = false }: Props) {
  const [showSkip, setShowSkip] = useState(false)
  const [skipReason, setSkipReason] = useState('')
  const [acting, setActing] = useState(false)

  const isOverdue = item.status === 'overdue'
  const isActionable = item.status === 'pending' || item.status === 'overdue'

  async function logDose(status: 'GIVEN' | 'SKIPPED', reason?: string) {
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
        onUpdate?.({
          ...item,
          status: status === 'GIVEN' ? 'given' : 'skipped',
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
    <div
      className={[
        'flex items-start gap-4 px-4 py-3 border-b border-gray-100 last:border-0',
        isOverdue
          ? 'border-l-4 border-l-red-500 bg-red-50/50'
          : 'border-l-4 border-l-transparent',
      ].join(' ')}
    >
      {/* Patient + medicine info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2 flex-wrap">
          <span className="font-semibold text-gray-900 text-sm">{item.patientName}</span>
          {item.room && (
            <span className="text-xs text-gray-400 font-medium">Room {item.room}</span>
          )}
        </div>

        <div className="text-sm text-gray-700 mt-0.5">
          {item.medicineName}
          <span className="text-gray-300 mx-1.5">·</span>
          <span className="font-medium">{item.dosage}</span>
        </div>

        {item.administrationMethod && (
          <div className="text-xs text-gray-400 mt-0.5 leading-relaxed">
            {item.administrationMethod}
          </div>
        )}

        {item.status === 'skipped' && item.skipReason && (
          <div className="text-xs text-amber-600 mt-1 font-medium">
            Reason: {item.skipReason}
          </div>
        )}

        {/* Inline skip form */}
        {showSkip && (
          <div className="flex items-center gap-2 mt-2.5">
            <input
              type="text"
              value={skipReason}
              onChange={e => setSkipReason(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') logDose('SKIPPED', skipReason) }}
              placeholder="Reason (optional)"
              autoFocus
              className="flex-1 max-w-xs px-2.5 py-1.5 text-xs border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <button
              onClick={() => logDose('SKIPPED', skipReason)}
              disabled={acting}
              className="text-xs px-3 py-1.5 bg-amber-500 text-white rounded-lg hover:bg-amber-600 disabled:opacity-50 font-medium transition-colors"
            >
              {acting ? '…' : 'Confirm skip'}
            </button>
            <button
              onClick={() => { setShowSkip(false); setSkipReason('') }}
              className="text-xs text-gray-400 hover:text-gray-600"
            >
              Cancel
            </button>
          </div>
        )}
      </div>

      {/* Badge + action buttons */}
      <div className="flex items-center gap-2 shrink-0 pt-0.5">
        <StatusBadge status={item.status} />

        {isActionable && !showSkip && !readOnly && (
          <>
            <button
              onClick={() => logDose('GIVEN')}
              disabled={acting}
              className="text-xs px-3 py-1.5 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 font-semibold transition-colors"
            >
              {acting ? '…' : 'Mark given'}
            </button>
            <button
              onClick={() => setShowSkip(true)}
              disabled={acting}
              className="text-xs px-3 py-1.5 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 disabled:opacity-50 font-medium transition-colors"
            >
              Skip
            </button>
          </>
        )}
      </div>
    </div>
  )
}