'use client'

import { useState, useEffect } from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────

type MiniMedicine = { id: string; name: string; type: string }

type BoxAssignment = {
  id: string
  dosage: string
  administrationMethodOverride: string | null
  scheduleTimes: string[]
  startDate: string
  endDate: string
  status: string
  medicine: MiniMedicine
}

type Box = {
  id: string
  boxLabel: string
  location: string | null
  notes: string | null
  patients: { id: string; name: string }[]
  medicineAssignments: BoxAssignment[]
}

type CreateForm = { boxLabel: string; location: string; notes: string }

const CREATE_DEFAULT: CreateForm = { boxLabel: '', location: '', notes: '' }

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BoxesPage() {
  const [boxes, setBoxes] = useState<Box[]>([])
  const [loading, setLoading] = useState(true)

  // create form
  const [showCreate, setShowCreate] = useState(false)
  const [createForm, setCreateForm] = useState<CreateForm>(CREATE_DEFAULT)
  const [createErrors, setCreateErrors] = useState<Record<string, string>>({})
  const [creating, setCreating] = useState(false)
  const [createError, setCreateError] = useState('')

  // expanded row
  const [expandedId, setExpandedId] = useState<string | null>(null)

  // returning

  function load() {
    fetch('/api/boxes')
      .then(r => r.json())
      .then(data => setBoxes(Array.isArray(data) ? data : []))
      .catch(() => {})
      .finally(() => setLoading(false))
  }

  useEffect(() => { load() }, [])

  // ── Create ────────────────────────────────────────────────────────────────

  function setCreate(k: keyof CreateForm, v: string) {
    setCreateForm(prev => ({ ...prev, [k]: v }))
    if (createErrors[k]) setCreateErrors(prev => { const n = { ...prev }; delete n[k]; return n })
  }

  async function submitCreate(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()
    const errs: Record<string, string> = {}
    if (!createForm.boxLabel.trim()) errs.boxLabel = 'Box label is required'
    if (Object.keys(errs).length > 0) { setCreateErrors(errs); return }

    setCreating(true)
    setCreateError('')
    try {
      const res = await fetch('/api/boxes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          boxLabel: createForm.boxLabel.trim(),
          location: createForm.location.trim() || null,
          notes: createForm.notes.trim() || null,
        }),
      })

      if (res.status === 409) { setCreateError('Box label already exists'); return }
      if (!res.ok) { setCreateError('Failed to create box'); return }

      const box = await res.json()
      setBoxes(prev => [...prev, box].sort((a, b) => a.boxLabel.localeCompare(b.boxLabel)))
      setShowCreate(false)
      setCreateForm(CREATE_DEFAULT)
    } catch {
      setCreateError('Something went wrong')
    } finally {
      setCreating(false)
    }
  }

// ── Render ────────────────────────────────────────────────────────────────

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold text-gray-900">Boxes</h1>
        <button
          onClick={() => { setShowCreate(v => !v); setCreateErrors({}); setCreateError('') }}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          {showCreate ? 'Cancel' : 'Create box'}
        </button>
      </div>

      {/* Create form panel */}
      {showCreate && (
        <div className="bg-white rounded-xl border border-gray-200 p-5 mb-5">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">New box</h2>
          <form onSubmit={submitCreate} noValidate className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Box label <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={createForm.boxLabel}
                onChange={e => setCreate('boxLabel', e.target.value)}
                placeholder="e.g. BOX-001"
                className={`w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${createErrors.boxLabel ? 'border-red-400' : 'border-gray-300'}`}
              />
              {createErrors.boxLabel && (
                <p className="mt-1 text-xs text-red-600">{createErrors.boxLabel}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Location</label>
              <input
                type="text"
                value={createForm.location}
                onChange={e => setCreate('location', e.target.value)}
                placeholder="e.g. Ward A shelf 3"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Notes</label>
              <input
                type="text"
                value={createForm.notes}
                onChange={e => setCreate('notes', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {createError && (
              <p className="col-span-3 text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                {createError}
              </p>
            )}

            <div className="col-span-3">
              <button
                type="submit"
                disabled={creating}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50 transition-colors"
              >
                {creating ? 'Creating…' : 'Create box'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              {['Box label', 'Assigned patient', 'Location', 'Medicines', 'Actions'].map(col => (
                <th key={col} className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {loading ? (
              Array.from({ length: 4 }).map((_, i) => (
                <tr key={i} className="animate-pulse">
                  {Array.from({ length: 6 }).map((_, j) => (
                    <td key={j} className="px-4 py-3">
                      <div className="h-4 bg-gray-200 rounded w-3/4" />
                    </td>
                  ))}
                </tr>
              ))
            ) : boxes.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-4 py-10 text-center text-sm text-gray-400">
                  No boxes yet
                </td>
              </tr>
            ) : (
              boxes.flatMap(box => {
                const isExpanded = expandedId === box.id
                return [
                  // ── Main row ───────────────────────────────────────────
                  <tr key={box.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 font-medium text-gray-900">{box.boxLabel}</td>
                    <td className="px-4 py-3 text-gray-600">
                      {box.patients.length > 0
                        ? box.patients.map(p => p.name).join(', ')
                        : <span className="text-gray-400">Unassigned</span>
                      }
                    </td>
                    <td className="px-4 py-3 text-gray-600">{box.location ?? '—'}</td>

                    <td className="px-4 py-3 text-gray-600">{box.medicineAssignments.length}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setExpandedId(isExpanded ? null : box.id)}
                          className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                        >
                          {isExpanded ? 'Hide' : 'View'}
                        </button>
                      </div>
                    </td>
                  </tr>,

                  // ── Expanded detail row ────────────────────────────────
                  isExpanded && (
                    <tr key={`${box.id}-detail`} className="bg-gray-50">
                      <td colSpan={6} className="px-6 py-4">
                        {box.medicineAssignments.length === 0 ? (
                          <p className="text-sm text-gray-400">No medicines in this box</p>
                        ) : (
                          <div>
                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                              Medicines in this box
                            </p>
                            <div className="grid gap-2">
                              {box.medicineAssignments.map(a => (
                                <div
                                  key={a.id}
                                  className="flex items-start justify-between bg-white rounded-lg border border-gray-200 px-4 py-3"
                                >
                                  <div>
                                    <p className="text-sm font-medium text-gray-900">
                                      {a.medicine.name}
                                    </p>
                                    <p className="text-xs text-gray-500 mt-0.5">
                                      {a.dosage} · {a.administrationMethodOverride}
                                    </p>
                                    <div className="flex flex-wrap gap-1.5 mt-1.5">
                                      {a.scheduleTimes.map(t => (
                                        <span
                                          key={t}
                                          className="bg-blue-50 text-blue-700 text-xs px-2 py-0.5 rounded font-medium"
                                        >
                                          {t}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                  <div className="text-right text-xs text-gray-500 shrink-0 ml-4">
                                    <p>
                                      {new Date(a.startDate).toLocaleDateString()} –{' '}
                                      {new Date(a.endDate).toLocaleDateString()}
                                    </p>
                                    <span className={`mt-1 inline-block px-2 py-0.5 rounded-full font-medium ${
                                      a.status === 'ACTIVE'
                                        ? 'bg-green-100 text-green-700'
                                        : 'bg-gray-100 text-gray-500'
                                    }`}>
                                      {a.status.charAt(0) + a.status.slice(1).toLowerCase()}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        {box.notes && (
                          <p className="text-xs text-gray-500 mt-3 italic">Note: {box.notes}</p>
                        )}
                      </td>
                    </tr>
                  ),
                ].filter(Boolean)
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}