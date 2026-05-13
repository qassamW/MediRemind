'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import ReauthModal from '@/components/ReauthModal'

// ─── Types ────────────────────────────────────────────────────────────────────

type Room = {
  id: string
  roomNumber: string
  capacity: number
  status: string
}

type Department = {
  id: string
  name: string
  description: string
  head: string
  status: 'ACTIVE' | 'INACTIVE'
  rooms: Room[]
  _count: { patients: number }
}

type DeptForm = { name: string; description: string; head: string }
const FORM_DEFAULT: DeptForm = { name: '', description: '', head: '' }

const ROOM_STATUS_LABEL: Record<string, string> = {
  AVAILABLE: 'Available',
  FULL: 'Full',
  MAINTENANCE: 'Maintenance',
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DepartmentsPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const role = (session?.user as { role?: string })?.role

  useEffect(() => {
    if (status === 'authenticated' && role && role !== 'ADMIN') {
      router.replace('/schedule')
    }
  }, [status, role, router])

  const [departments, setDepartments] = useState<Department[]>([])
  const [loading, setLoading] = useState(true)

  // add form
  const [showAdd, setShowAdd] = useState(false)
  const [addForm, setAddForm] = useState<DeptForm>(FORM_DEFAULT)
  const [addErrors, setAddErrors] = useState<Record<string, string>>({})
  const [adding, setAdding] = useState(false)
  const [addError, setAddError] = useState('')

  // inline edit
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editForm, setEditForm] = useState<DeptForm & { status: string }>(
    { ...FORM_DEFAULT, status: 'ACTIVE' },
  )
  const [saving, setSaving] = useState(false)
  const [editError, setEditError] = useState('')

  // expand
  const [expandedId, setExpandedId] = useState<string | null>(null)

  // delete
  const [deletingId, setDeletingId] = useState<string | null>(null)
  const [deleteErrors, setDeleteErrors] = useState<Record<string, string>>({})

  function load() {
    fetch('/api/departments')
      .then(r => r.json())
      .then(data => setDepartments(Array.isArray(data) ? data : []))
      .catch(() => {})
      .finally(() => setLoading(false))
  }

  useEffect(() => { load() }, [])

  if (status === 'loading' || !role) {
    return <div className="flex items-center justify-center h-40 text-sm text-gray-400">Loading…</div>
  }
  if (role !== 'ADMIN') return null

  // ── Add ───────────────────────────────────────────────────────────────────

  function setAdd(k: keyof DeptForm, v: string) {
    setAddForm(prev => ({ ...prev, [k]: v }))
    if (addErrors[k]) setAddErrors(prev => { const n = { ...prev }; delete n[k]; return n })
  }

  function validateForm(f: DeptForm): Record<string, string> {
    const e: Record<string, string> = {}
    if (!f.name.trim()) e.name = 'Name is required'
    if (!f.description.trim()) e.description = 'Description is required'
    if (!f.head.trim()) e.head = 'Head is required'
    return e
  }

  async function submitAdd(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()
    const errs = validateForm(addForm)
    if (Object.keys(errs).length > 0) { setAddErrors(errs); return }
    setAdding(true); setAddError('')
    try {
      const res = await fetch('/api/departments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(addForm),
      })
      if (!res.ok) { setAddError('Failed to add department'); return }
      const dept = await res.json()
      setDepartments(prev => [...prev, dept].sort((a, b) => a.name.localeCompare(b.name)))
      setShowAdd(false)
      setAddForm(FORM_DEFAULT)
    } catch { setAddError('Something went wrong') }
    finally { setAdding(false) }
  }

  // ── Edit ──────────────────────────────────────────────────────────────────

  function startEdit(dept: Department) {
    setEditingId(dept.id)
    setEditForm({ name: dept.name, description: dept.description, head: dept.head, status: dept.status })
    setEditError('')
  }

  async function submitEdit(id: string) {
    setSaving(true); setEditError('')
    try {
      const res = await fetch(`/api/departments/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editForm),
      })
      if (!res.ok) { setEditError('Failed to save'); return }
      const updated = await res.json()
      setDepartments(prev =>
        prev.map(d => d.id === id ? updated : d).sort((a, b) => a.name.localeCompare(b.name)),
      )
      setEditingId(null)
    } catch { setEditError('Something went wrong') }
    finally { setSaving(false) }
  }

  // ── Delete ────────────────────────────────────────────────────────────────

  async function handleDelete(id: string) {
    setDeleteErrors(prev => { const n = { ...prev }; delete n[id]; return n })
    const res = await fetch(`/api/departments/${id}`, { method: 'DELETE' })
    if (res.ok) {
      setDepartments(prev => prev.filter(d => d.id !== id))
    } else {
      const body = await res.json().catch(() => ({}))
      setDeleteErrors(prev => ({ ...prev, [id]: body.error ?? 'Could not delete department' }))
    }
    setDeletingId(null)
  }

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <div>
      {/* Reauth modal */}
      <ReauthModal
        isOpen={deletingId !== null}
        onConfirm={() => { if (deletingId) handleDelete(deletingId) }}
        onCancel={() => setDeletingId(null)}
      />

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold text-gray-900">Departments</h1>
        <button
          onClick={() => { setShowAdd(v => !v); setAddErrors({}); setAddError('') }}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          {showAdd ? 'Cancel' : 'Add department'}
        </button>
      </div>

      {/* Add form */}
      {showAdd && (
        <div className="bg-white rounded-xl border border-gray-200 p-5 mb-5">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">New department</h2>
          <form onSubmit={submitAdd} noValidate className="grid grid-cols-3 gap-4">
            {(['name', 'description', 'head'] as const).map(field => (
              <div key={field}>
                <label className="block text-xs font-medium text-gray-700 mb-1 capitalize">
                  {field} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={addForm[field]}
                  onChange={e => setAdd(field, e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${addErrors[field] ? 'border-red-400' : 'border-gray-300'}`}
                />
                {addErrors[field] && <p className="mt-1 text-xs text-red-600">{addErrors[field]}</p>}
              </div>
            ))}
            {addError && (
              <p className="col-span-3 text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                {addError}
              </p>
            )}
            <div className="col-span-3">
              <button
                type="submit"
                disabled={adding}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50 transition-colors"
              >
                {adding ? 'Adding…' : 'Add department'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Department cards */}
      {loading ? (
        <div className="space-y-3">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 p-5 animate-pulse">
              <div className="h-5 bg-gray-200 rounded w-40 mb-2" />
              <div className="h-3.5 bg-gray-100 rounded w-64" />
            </div>
          ))}
        </div>
      ) : departments.length === 0 ? (
        <p className="text-center text-sm text-gray-400 py-12">No departments yet</p>
      ) : (
        <div className="space-y-3">
          {departments.map(dept => {
            const isEditing = editingId === dept.id
            const isExpanded = expandedId === dept.id

            return (
              <div
                key={dept.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                {isEditing ? (
                  // ── Edit form ───────────────────────────────────────────
                  <div className="p-5">
                    <p className="text-sm font-semibold text-gray-900 mb-4">Edit department</p>
                    <div className="grid grid-cols-2 gap-4">
                      {(['name', 'description', 'head'] as const).map(field => (
                        <div key={field} className={field === 'description' ? 'col-span-2' : ''}>
                          <label className="block text-xs font-medium text-gray-700 mb-1 capitalize">
                            {field}
                          </label>
                          <input
                            type="text"
                            value={editForm[field]}
                            onChange={e => setEditForm(prev => ({ ...prev, [field]: e.target.value }))}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      ))}
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Status</label>
                        <select
                          value={editForm.status}
                          onChange={e => setEditForm(prev => ({ ...prev, status: e.target.value }))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="ACTIVE">Active</option>
                          <option value="INACTIVE">Inactive</option>
                        </select>
                      </div>
                    </div>
                    {editError && (
                      <p className="mt-3 text-xs text-red-600">{editError}</p>
                    )}
                    <div className="flex gap-3 mt-4">
                      <button
                        onClick={() => submitEdit(dept.id)}
                        disabled={saving}
                        className="bg-blue-600 text-white px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50 transition-colors"
                      >
                        {saving ? 'Saving…' : 'Save'}
                      </button>
                      <button
                        onClick={() => setEditingId(null)}
                        className="text-sm text-gray-500 hover:text-gray-700"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  // ── Card view ───────────────────────────────────────────
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <h2 className="text-base font-semibold text-gray-900">{dept.name}</h2>
                          <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                            dept.status === 'ACTIVE'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-gray-100 text-gray-500'
                          }`}>
                            {dept.status === 'ACTIVE' ? 'Active' : 'Inactive'}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 mt-0.5">{dept.description}</p>
                        <p className="text-xs text-gray-400 mt-1">
                          Head: {dept.head}
                          <span className="mx-2">·</span>
                          {dept.rooms.length} room{dept.rooms.length !== 1 ? 's' : ''}
                          <span className="mx-2">·</span>
                          {dept._count.patients} admitted patient{dept._count.patients !== 1 ? 's' : ''}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => setExpandedId(isExpanded ? null : dept.id)}
                          className="text-sm text-gray-500 hover:text-gray-800 font-medium"
                        >
                          {isExpanded ? 'Hide rooms' : 'Show rooms'}
                        </button>
                        <button
                          onClick={() => startEdit(dept)}
                          className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => setDeletingId(dept.id)}
                          className="text-sm text-red-500 hover:text-red-700 font-medium"
                        >
                          Delete
                        </button>
                      </div>
                    </div>

                    {deleteErrors[dept.id] && (
                      <p className="mt-2 text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                        {deleteErrors[dept.id]}
                      </p>
                    )}
                  </div>
                )}

                {/* Rooms expansion */}
                {isExpanded && !isEditing && (
                  <div className="border-t border-gray-100 px-5 py-4 bg-gray-50">
                    {dept.rooms.length === 0 ? (
                      <p className="text-sm text-gray-400">No rooms in this department</p>
                    ) : (
                      <div className="grid grid-cols-3 gap-2">
                        {dept.rooms.map(room => (
                          <div key={room.id} className="bg-white rounded-lg border border-gray-200 px-3 py-2.5">
                            <p className="text-sm font-medium text-gray-800">Room {room.roomNumber}</p>
                            <p className="text-xs text-gray-400 mt-0.5">
                              Capacity {room.capacity}
                              <span className="mx-1.5">·</span>
                              {ROOM_STATUS_LABEL[room.status] ?? room.status}
                            </p>
                          </div>
                        ))}
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