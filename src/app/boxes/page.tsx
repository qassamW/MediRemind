'use client'

import { useState, useEffect } from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────

type Medicine = { id: string; name: string; type: string }

type BoxContent = {
  id: string
  dosage: string | null
  administrationMethod: string | null
  scheduleTimes: string[]
  notes: string | null
  medicine: Medicine
}

type Box = {
  id: string
  boxLabel: string
  location: string | null
  notes: string | null
  patients: { id: string; name: string }[]
  contents: BoxContent[]
}

type AddContentForm = {
  medicineId: string
  dosage: string
  administrationMethod: string
  notes: string
}

const CONTENT_DEFAULT: AddContentForm = {
  medicineId: '', dosage: '', administrationMethod: '', notes: '',
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BoxesPage() {
  const [boxes, setBoxes] = useState<Box[]>([])
  const [medicines, setMedicines] = useState<Medicine[]>([])
  const [loading, setLoading] = useState(true)

  const [showCreate, setShowCreate] = useState(false)
  const [createForm, setCreateForm] = useState({ boxLabel: '', location: '', notes: '' })
  const [createError, setCreateError] = useState('')
  const [creating, setCreating] = useState(false)

  const [editingId, setEditingId] = useState<string | null>(null)
  const [editForm, setEditForm] = useState({ boxLabel: '', location: '', notes: '' })
  const [editSaving, setEditSaving] = useState(false)

  const [expandedId, setExpandedId] = useState<string | null>(null)

  const [addContentFor, setAddContentFor] = useState<string | null>(null)
  const [contentForm, setContentForm] = useState<AddContentForm>(CONTENT_DEFAULT)
  const [addingContent, setAddingContent] = useState(false)
  const [removingContentId, setRemovingContentId] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/boxes')
      .then(r => r.json())
      .then(data => setBoxes(Array.isArray(data) ? data : []))
      .catch(() => {})
      .finally(() => setLoading(false))

    fetch('/api/medicines')
      .then(r => r.json())
      .then(data => setMedicines(Array.isArray(data) ? data : []))
      .catch(() => {})
  }, [])

  // ── Create ────────────────────────────────────────────────────────────────

  async function submitCreate(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!createForm.boxLabel.trim()) { setCreateError('Box label is required'); return }
    setCreating(true); setCreateError('')
    try {
      const res = await fetch('/api/boxes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ boxLabel: createForm.boxLabel.trim(), location: createForm.location.trim() || null, notes: createForm.notes.trim() || null }),
      })
      if (res.status === 409) { setCreateError('Box label already exists'); return }
      if (!res.ok) { setCreateError('Failed to create box'); return }
      const box = await res.json()
      setBoxes(prev => [...prev, box].sort((a, b) => a.boxLabel.localeCompare(b.boxLabel)))
      setShowCreate(false)
      setCreateForm({ boxLabel: '', location: '', notes: '' })
    } catch { setCreateError('Something went wrong') }
    finally { setCreating(false) }
  }

  // ── Edit ──────────────────────────────────────────────────────────────────

  function startEdit(box: Box) {
    setEditingId(box.id)
    setEditForm({ boxLabel: box.boxLabel, location: box.location ?? '', notes: box.notes ?? '' })
  }

  async function saveEdit(boxId: string) {
    setEditSaving(true)
    try {
      const res = await fetch(`/api/boxes/${boxId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ boxLabel: editForm.boxLabel.trim(), location: editForm.location.trim() || null, notes: editForm.notes.trim() || null }),
      })
      if (!res.ok) return
      const updated = await res.json()
      setBoxes(prev => prev.map(b => b.id === boxId ? { ...b, ...updated } : b).sort((a, b) => a.boxLabel.localeCompare(b.boxLabel)))
      setEditingId(null)
    } finally { setEditSaving(false) }
  }

  // ── Add medicine to box ───────────────────────────────────────────────────

  function openAddContent(boxId: string) {
    setAddContentFor(boxId)
    setContentForm(CONTENT_DEFAULT)
  }

  function handleMedicineSelect(medicineId: string) {
    const med = medicines.find(m => m.id === medicineId)
    setContentForm(prev => ({
      ...prev,
      medicineId,
      administrationMethod: med ? '' : prev.administrationMethod,
    }))
  }

  async function submitAddContent(boxId: string) {
    if (!contentForm.medicineId) return
    setAddingContent(true)
    try {
      const res = await fetch(`/api/boxes/${boxId}/contents`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          medicineId: contentForm.medicineId,
          dosage: contentForm.dosage.trim() || null,
          administrationMethod: contentForm.administrationMethod.trim() || null,
          scheduleTimes: [],
          notes: contentForm.notes.trim() || null,
        }),
      })
      if (!res.ok) return
      const content = await res.json()
      setBoxes(prev => prev.map(b => b.id === boxId ? { ...b, contents: [...b.contents, content] } : b))
      setContentForm(CONTENT_DEFAULT)
      setAddContentFor(null)
    } finally { setAddingContent(false) }
  }

  async function removeContent(boxId: string, contentId: string) {
    setRemovingContentId(contentId)
    try {
      const res = await fetch(`/api/boxes/${boxId}/contents/${contentId}`, { method: 'DELETE' })
      if (res.ok) setBoxes(prev => prev.map(b => b.id === boxId ? { ...b, contents: b.contents.filter(c => c.id !== contentId) } : b))
    } finally { setRemovingContentId(null) }
  }

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold text-gray-900">Boxes</h1>
        <button
          onClick={() => { setShowCreate(v => !v); setCreateError('') }}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          {showCreate ? 'Cancel' : 'Create box'}
        </button>
      </div>

      {/* Create form */}
      {showCreate && (
        <div className="bg-white rounded-xl border border-gray-200 p-5 mb-5">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">New box</h2>
          <form onSubmit={submitCreate} noValidate className="grid grid-cols-3 gap-4">
            {[['Box label', 'boxLabel', true], ['Location', 'location', false], ['Notes', 'notes', false]].map(([label, key, required]) => (
              <div key={key as string}>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  {label as string} {required && <span className="text-red-500">*</span>}
                </label>
                <input
                  type="text"
                  value={createForm[key as keyof typeof createForm]}
                  onChange={e => setCreateForm(prev => ({ ...prev, [key as string]: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ))}
            {createError && <p className="col-span-3 text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">{createError}</p>}
            <div className="col-span-3">
              <button type="submit" disabled={creating} className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50 transition-colors">
                {creating ? 'Creating…' : 'Create box'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Box cards */}
      {loading ? (
        <div className="space-y-3">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 p-5 animate-pulse">
              <div className="h-5 bg-gray-200 rounded w-32 mb-2" />
              <div className="h-3.5 bg-gray-100 rounded w-48" />
            </div>
          ))}
        </div>
      ) : boxes.length === 0 ? (
        <p className="text-center text-sm text-gray-400 py-12">No boxes yet</p>
      ) : (
        <div className="space-y-3">
          {boxes.map(box => {
            const isExpanded = expandedId === box.id
            const isEditing = editingId === box.id
            const isAddingContent = addContentFor === box.id

            return (
              <div key={box.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                {isEditing ? (
                  <div className="p-5">
                    <p className="text-sm font-semibold text-gray-900 mb-4">Edit box</p>
                    <div className="grid grid-cols-3 gap-4">
                      {[['Box label', 'boxLabel'], ['Location', 'location'], ['Notes', 'notes']].map(([label, key]) => (
                        <div key={key}>
                          <label className="block text-xs font-medium text-gray-700 mb-1">{label}</label>
                          <input
                            type="text"
                            value={editForm[key as keyof typeof editForm]}
                            onChange={e => setEditForm(prev => ({ ...prev, [key]: e.target.value }))}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-3 mt-4">
                      <button onClick={() => saveEdit(box.id)} disabled={editSaving} className="bg-blue-600 text-white px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50 transition-colors">
                        {editSaving ? 'Saving…' : 'Save'}
                      </button>
                      <button onClick={() => setEditingId(null)} className="text-sm text-gray-500 hover:text-gray-700">Cancel</button>
                    </div>
                  </div>
                ) : (
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h2 className="text-base font-semibold text-gray-900">{box.boxLabel}</h2>
                        {box.location && <p className="text-sm text-gray-500 mt-0.5">{box.location}</p>}
                        <p className="text-xs text-gray-400 mt-1">
                          {box.contents.length} medicine{box.contents.length !== 1 ? 's' : ''}
                          {box.patients.length > 0 && (
                            <> · Assigned to: {box.patients.map(p => p.name).join(', ')}</>
                          )}
                        </p>
                        {box.notes && <p className="text-xs text-gray-400 mt-0.5 italic">{box.notes}</p>}
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <button onClick={() => setExpandedId(isExpanded ? null : box.id)} className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                          {isExpanded ? 'Hide' : 'Manage'}
                        </button>
                        <button onClick={() => startEdit(box)} className="text-sm text-gray-500 hover:text-gray-800 font-medium">Edit</button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Expanded medicine management */}
                {isExpanded && !isEditing && (
                  <div className="border-t border-gray-100 px-5 py-4 bg-gray-50 space-y-4">

                    {/* Medicines list */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Medicines in this box</p>
                        <button
                          onClick={() => isAddingContent ? setAddContentFor(null) : openAddContent(box.id)}
                          className="text-xs text-blue-600 hover:text-blue-700 font-medium"
                        >
                          {isAddingContent ? 'Cancel' : '+ Add medicine'}
                        </button>
                      </div>

                      {box.contents.length === 0 && !isAddingContent ? (
                        <p className="text-sm text-gray-400">No medicines yet</p>
                      ) : (
                        <div className="space-y-2">
                          {box.contents.map(c => (
                            <div key={c.id} className="flex items-start justify-between bg-white rounded-lg border border-gray-200 px-4 py-3">
                              <div>
                                <p className="text-sm font-medium text-gray-900">{c.medicine.name}</p>
                                <p className="text-xs text-gray-500 mt-0.5">
                                  {[c.dosage, c.administrationMethod].filter(Boolean).join(' · ')}
                                </p>
                                {c.scheduleTimes.length > 0 && (
                                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                                    {c.scheduleTimes.map(t => (
                                      <span key={t} className="bg-blue-50 text-blue-700 text-xs px-2 py-0.5 rounded font-medium">{t}</span>
                                    ))}
                                  </div>
                                )}
                              </div>
                              <button
                                onClick={() => removeContent(box.id, c.id)}
                                disabled={removingContentId === c.id}
                                className="text-xs text-red-500 hover:text-red-700 font-medium shrink-0 ml-4 disabled:opacity-50"
                              >
                                {removingContentId === c.id ? 'Removing…' : 'Remove'}
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Add medicine form */}
                    {isAddingContent && (
                      <div className="bg-white rounded-lg border border-gray-200 p-4 space-y-3">
                        <p className="text-xs font-semibold text-gray-700">Add medicine to box</p>

                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1">Medicine <span className="text-red-500">*</span></label>
                          <select
                            value={contentForm.medicineId}
                            onChange={e => handleMedicineSelect(e.target.value)}
                            className="w-full px-2.5 py-1.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                          >
                            <option value="">Select medicine</option>
                            {medicines.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
                          </select>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1">Dosage</label>
                            <input type="text" value={contentForm.dosage} onChange={e => setContentForm(p => ({ ...p, dosage: e.target.value }))}
                              placeholder="e.g. 500mg" className="w-full px-2.5 py-1.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1">Administration method</label>
                            <input type="text" value={contentForm.administrationMethod} onChange={e => setContentForm(p => ({ ...p, administrationMethod: e.target.value }))}
                              className="w-full px-2.5 py-1.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <button
                            onClick={() => submitAddContent(box.id)}
                            disabled={!contentForm.medicineId || addingContent}
                            className="bg-blue-600 text-white px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50 transition-colors"
                          >
                            {addingContent ? 'Adding…' : 'Add medicine'}
                          </button>
                          <button onClick={() => setAddContentFor(null)} className="text-sm text-gray-500 hover:text-gray-700">Cancel</button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}