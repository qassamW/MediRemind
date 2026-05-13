'use client'

import { useState, useEffect } from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────

type Medicine = {
  id: string
  name: string
  type: string
  administrationMethod: string | null
  defaultDosage: string | null
  notes: string | null
}

type AddForm = {
  name: string
  type: string
  administrationMethod: string
  defaultDosage: string
  notes: string
}

// ─── Constants ────────────────────────────────────────────────────────────────

const MEDICINE_TYPES = [
  'PILL', 'INJECTION', 'LIQUID', 'POWDER', 'CREAM', 'PATCH', 'DROPS', 'OTHER',
] as const

const TYPE_STYLE: Record<string, { bg: string; text: string; label: string }> = {
  PILL:      { bg: 'bg-blue-100',   text: 'text-blue-700',   label: 'Pill' },
  INJECTION: { bg: 'bg-red-100',    text: 'text-red-700',    label: 'Injection' },
  LIQUID:    { bg: 'bg-cyan-100',   text: 'text-cyan-700',   label: 'Liquid' },
  POWDER:    { bg: 'bg-yellow-100', text: 'text-yellow-700', label: 'Powder' },
  CREAM:     { bg: 'bg-orange-100', text: 'text-orange-700', label: 'Cream' },
  PATCH:     { bg: 'bg-purple-100', text: 'text-purple-700', label: 'Patch' },
  DROPS:     { bg: 'bg-teal-100',   text: 'text-teal-700',   label: 'Drops' },
  OTHER:     { bg: 'bg-gray-100',   text: 'text-gray-600',   label: 'Other' },
}

const ADD_FORM_DEFAULT: AddForm = {
  name: '', type: '', administrationMethod: '', defaultDosage: '', notes: '',
}

// ─── Type Badge ───────────────────────────────────────────────────────────────

function TypeBadge({ type }: { type: string }) {
  const s = TYPE_STYLE[type] ?? TYPE_STYLE.OTHER
  return (
    <span className={`inline-block text-xs font-medium px-2.5 py-0.5 rounded-full ${s.bg} ${s.text}`}>
      {s.label}
    </span>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function MedicinesPage() {
  const [medicines, setMedicines] = useState<Medicine[]>([])
  const [loading, setLoading] = useState(true)

  // add form
  const [showAdd, setShowAdd] = useState(false)
  const [addForm, setAddForm] = useState<AddForm>(ADD_FORM_DEFAULT)
  const [addErrors, setAddErrors] = useState<Record<string, string>>({})
  const [adding, setAdding] = useState(false)
  const [addError, setAddError] = useState('')

  // inline edit
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editForm, setEditForm] = useState<AddForm>(ADD_FORM_DEFAULT)
  const [saving, setSaving] = useState(false)
  const [editError, setEditError] = useState('')

  // delete
  const [deleteError, setDeleteError] = useState<Record<string, string>>({})

  function load() {
    fetch('/api/medicines')
      .then(r => r.json())
      .then(data => setMedicines(Array.isArray(data) ? data : []))
      .catch(() => {})
      .finally(() => setLoading(false))
  }

  useEffect(() => { load() }, [])

  // ── Add ──────────────────────────────────────────────────────────────────

  function setAdd(k: keyof AddForm, v: string) {
    setAddForm(prev => ({ ...prev, [k]: v }))
    if (addErrors[k]) setAddErrors(prev => { const n = { ...prev }; delete n[k]; return n })
  }

  function validateAdd(): Record<string, string> {
    const e: Record<string, string> = {}
    if (!addForm.name.trim()) e.name = 'Name is required'
    if (!addForm.type) e.type = 'Type is required'
    return e
  }

  async function submitAdd(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()
    const errs = validateAdd()
    if (Object.keys(errs).length > 0) { setAddErrors(errs); return }

    setAdding(true)
    setAddError('')
    try {
      const res = await fetch('/api/medicines', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: addForm.name.trim(),
          type: addForm.type,
          administrationMethod: addForm.administrationMethod.trim(),
          defaultDosage: addForm.defaultDosage.trim() || null,
          notes: addForm.notes.trim() || null,
        }),
      })
      if (!res.ok) { setAddError('Failed to add medicine'); return }
      const med = await res.json()
      setMedicines(prev => [...prev, med].sort((a, b) => a.name.localeCompare(b.name)))
      setShowAdd(false)
      setAddForm(ADD_FORM_DEFAULT)
    } catch {
      setAddError('Something went wrong')
    } finally {
      setAdding(false)
    }
  }

  // ── Edit ─────────────────────────────────────────────────────────────────

  function startEdit(med: Medicine) {
    setEditingId(med.id)
    setEditForm({
      name: med.name,
      type: med.type,
      administrationMethod: med.administrationMethod ?? '',
      defaultDosage: med.defaultDosage ?? '',
      notes: med.notes ?? '',
    })
    setEditError('')
  }

  function setEdit(k: keyof AddForm, v: string) {
    setEditForm(prev => ({ ...prev, [k]: v }))
  }

  async function submitEdit(id: string) {
    setSaving(true)
    setEditError('')
    try {
      const res = await fetch(`/api/medicines/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: editForm.name.trim(),
          type: editForm.type,
          administrationMethod: editForm.administrationMethod.trim(),
          defaultDosage: editForm.defaultDosage.trim() || null,
          notes: editForm.notes.trim() || null,
        }),
      })
      if (!res.ok) { setEditError('Failed to save'); return }
      const updated = await res.json()
      setMedicines(prev =>
        prev.map(m => (m.id === id ? updated : m)).sort((a, b) => a.name.localeCompare(b.name)),
      )
      setEditingId(null)
    } catch {
      setEditError('Something went wrong')
    } finally {
      setSaving(false)
    }
  }

  // ── Delete ────────────────────────────────────────────────────────────────

  async function handleDelete(med: Medicine) {
    if (!window.confirm(`Delete "${med.name}"?`)) return
    setDeleteError(prev => { const n = { ...prev }; delete n[med.id]; return n })

    const res = await fetch(`/api/medicines/${med.id}`, { method: 'DELETE' })
    if (res.ok) {
      setMedicines(prev => prev.filter(m => m.id !== med.id))
    } else {
      const body = await res.json().catch(() => ({}))
      setDeleteError(prev => ({
        ...prev,
        [med.id]: body.error ?? 'Could not delete medicine',
      }))
    }
  }

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold text-gray-900">Medicines</h1>
        <button
          onClick={() => { setShowAdd(v => !v); setAddErrors({}); setAddError('') }}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          {showAdd ? 'Cancel' : 'Add medicine'}
        </button>
      </div>

      {/* Add form panel */}
      {showAdd && (
        <div className="bg-white rounded-xl border border-gray-200 p-5 mb-5">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">New medicine</h2>
          <form onSubmit={submitAdd} noValidate className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={addForm.name}
                onChange={e => setAdd('name', e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${addErrors.name ? 'border-red-400' : 'border-gray-300'}`}
              />
              {addErrors.name && <p className="mt-1 text-xs text-red-600">{addErrors.name}</p>}
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Type <span className="text-red-500">*</span>
              </label>
              <select
                value={addForm.type}
                onChange={e => setAdd('type', e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white ${addErrors.type ? 'border-red-400' : 'border-gray-300'}`}
              >
                <option value="">Select type</option>
                {MEDICINE_TYPES.map(t => (
                  <option key={t} value={t}>{TYPE_STYLE[t].label}</option>
                ))}
              </select>
              {addErrors.type && <p className="mt-1 text-xs text-red-600">{addErrors.type}</p>}
            </div>

            <div className="col-span-2">
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Administration method
              </label>
              <textarea
                value={addForm.administrationMethod}
                onChange={e => setAdd('administrationMethod', e.target.value)}
                rows={2}
                className={`w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${addErrors.administrationMethod ? 'border-red-400' : 'border-gray-300'}`}
              />
              {addErrors.administrationMethod && (
                <p className="mt-1 text-xs text-red-600">{addErrors.administrationMethod}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Default dosage</label>
              <input
                type="text"
                value={addForm.defaultDosage}
                onChange={e => setAdd('defaultDosage', e.target.value)}
                placeholder="e.g. 500mg"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Notes</label>
              <input
                type="text"
                value={addForm.notes}
                onChange={e => setAdd('notes', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {addError && (
              <p className="col-span-2 text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                {addError}
              </p>
            )}

            <div className="col-span-2">
              <button
                type="submit"
                disabled={adding}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50 transition-colors"
              >
                {adding ? 'Adding…' : 'Add medicine'}
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
              {['Name', 'Type', 'Administration method', 'Default dosage', 'Actions'].map(col => (
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
                  {Array.from({ length: 5 }).map((_, j) => (
                    <td key={j} className="px-4 py-3">
                      <div className="h-4 bg-gray-200 rounded w-3/4" />
                    </td>
                  ))}
                </tr>
              ))
            ) : medicines.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-10 text-center text-sm text-gray-400">
                  No medicines yet
                </td>
              </tr>
            ) : (
              medicines.map(med => (
                editingId === med.id ? (
                  // ── Inline edit row ──────────────────────────────────────
                  <tr key={med.id} className="bg-blue-50">
                    <td className="px-4 py-3">
                      <input
                        type="text"
                        value={editForm.name}
                        onChange={e => setEdit('name', e.target.value)}
                        className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </td>
                    <td className="px-4 py-3">
                      <select
                        value={editForm.type}
                        onChange={e => setEdit('type', e.target.value)}
                        className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                      >
                        {MEDICINE_TYPES.map(t => (
                          <option key={t} value={t}>{TYPE_STYLE[t].label}</option>
                        ))}
                      </select>
                    </td>
                    <td className="px-4 py-3">
                      <textarea
                        value={editForm.administrationMethod}
                        onChange={e => setEdit('administrationMethod', e.target.value)}
                        rows={2}
                        className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                      />
                    </td>
                    <td className="px-4 py-3">
                      <input
                        type="text"
                        value={editForm.defaultDosage}
                        onChange={e => setEdit('defaultDosage', e.target.value)}
                        className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex flex-col gap-1.5">
                        <button
                          onClick={() => submitEdit(med.id)}
                          disabled={saving}
                          className="text-sm text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded disabled:opacity-50 transition-colors"
                        >
                          {saving ? 'Saving…' : 'Save'}
                        </button>
                        <button
                          onClick={() => setEditingId(null)}
                          className="text-sm text-gray-600 hover:text-gray-900"
                        >
                          Cancel
                        </button>
                        {editError && (
                          <p className="text-xs text-red-600">{editError}</p>
                        )}
                      </div>
                    </td>
                  </tr>
                ) : (
                  // ── Normal row ───────────────────────────────────────────
                  <tr key={med.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 font-medium text-gray-900">{med.name}</td>
                    <td className="px-4 py-3"><TypeBadge type={med.type} /></td>
                    <td className="px-4 py-3 text-gray-600 max-w-xs">
                      <span className="block truncate">{med.administrationMethod}</span>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{med.defaultDosage ?? '—'}</td>
                    <td className="px-4 py-3">
                      <div className="flex flex-col gap-1">
                        <div className="flex gap-3">
                          <button
                            onClick={() => startEdit(med)}
                            className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(med)}
                            className="text-sm text-red-500 hover:text-red-700 font-medium"
                          >
                            Delete
                          </button>
                        </div>
                        {deleteError[med.id] && (
                          <p className="text-xs text-red-600">{deleteError[med.id]}</p>
                        )}
                      </div>
                    </td>
                  </tr>
                )
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}