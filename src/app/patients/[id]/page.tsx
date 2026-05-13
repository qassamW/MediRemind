'use client'

import { use, useState, useEffect, useCallback } from 'react'
import Link from 'next/link'

// ─── Types ───────────────────────────────────────────────────────────────────

type Medicine = {
  id: string
  name: string
  type: string
  administrationMethod: string | null
  defaultDosage: string | null
}

type Assignment = {
  id: string
  medicineId: string
  dosage: string
  administrationMethodOverride: string | null
  scheduleTimes: string[]
  startDate: string
  endDate: string
  durationDays: number
  repeat: boolean
  status: string
  notes: string | null
  medicine: Medicine
}

type Patient = {
  id: string
  name: string
  age: number
  gender: 'MALE' | 'FEMALE' | 'OTHER'
  nationalId: string
  room: string | null
  allergies: string[]
  status: 'ADMITTED' | 'DISCHARGED'
  notes: string | null
  department: { id: string; name: string } | null
  box: { id: string; boxLabel: string } | null
  medicineAssignments: Assignment[]
}

type ModalForm = {
  medicineId: string
  dosage: string
  useBox: boolean
  administrationMethod: string
  scheduleTimeInput: string
  scheduleTimes: string[]
  startDate: string
  durationDays: string
  repeat: boolean
  notes: string
}

const GENDER_LABEL: Record<string, string> = { MALE: 'Male', FEMALE: 'Female', OTHER: 'Other' }

const MODAL_DEFAULT: ModalForm = {
  medicineId: '',
  dosage: '',
  useBox: false,
  administrationMethod: '',
  scheduleTimeInput: '',
  scheduleTimes: [],
  startDate: new Date().toISOString().slice(0, 10),
  durationDays: '',
  repeat: false,
  notes: '',
}

// ─── Add Medicine Modal ───────────────────────────────────────────────────────

function AddMedicineModal({
  patient,
  onClose,
  onSaved,
}: {
  patient: Patient
  onClose: () => void
  onSaved: () => void
}) {
  const [medicines, setMedicines] = useState<Medicine[]>([])
  const [form, setForm] = useState<ModalForm>(MODAL_DEFAULT)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitError, setSubmitError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    fetch('/api/medicines')
      .then(r => r.json())
      .then(data => setMedicines(Array.isArray(data) ? data : []))
      .catch(() => {})
  }, [])

  function set<K extends keyof ModalForm>(key: K, value: ModalForm[K]) {
    setForm(prev => ({ ...prev, [key]: value }))
    if (errors[key]) setErrors(prev => { const n = { ...prev }; delete n[key]; return n })
  }

  function handleMedicineChange(medicineId: string) {
    const med = medicines.find(m => m.id === medicineId)
    setForm(prev => ({
      ...prev,
      medicineId,
      administrationMethod: med?.administrationMethod ?? prev.administrationMethod,
      dosage: med?.defaultDosage ?? prev.dosage,
    }))
    if (errors.medicineId) setErrors(prev => { const n = { ...prev }; delete n.medicineId; return n })
  }

  function addScheduleTime() {
    const val = form.scheduleTimeInput.trim()
    if (val && !form.scheduleTimes.includes(val)) {
      set('scheduleTimes', [...form.scheduleTimes, val])
    }
    set('scheduleTimeInput', '')
  }

  function removeScheduleTime(t: string) {
    set('scheduleTimes', form.scheduleTimes.filter(x => x !== t))
  }

  function validateModal(): Record<string, string> {
    const errs: Record<string, string> = {}
    if (!form.medicineId) errs.medicineId = 'Select a medicine'
    if (!form.dosage.trim()) errs.dosage = 'Dosage is required'

    if (form.scheduleTimes.length === 0) errs.scheduleTimes = 'Add at least one schedule time'
    if (!form.startDate) errs.startDate = 'Start date is required'
    if (!form.durationDays || Number(form.durationDays) <= 0) errs.durationDays = 'Enter a valid duration'
    return errs
  }

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()
    const errs = validateModal()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }

    setSubmitting(true)
    setSubmitError('')

    const startDate = new Date(form.startDate)
    const endDate = new Date(startDate)
    endDate.setDate(endDate.getDate() + Number(form.durationDays))

    try {
      const res = await fetch('/api/assignments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          patientId: patient.id,
          medicineId: form.medicineId,
          boxId: form.useBox && patient.box ? patient.box.id : null,
          dosage: form.dosage.trim(),
          administrationMethodOverride: form.administrationMethod.trim(),
          scheduleTimes: form.scheduleTimes,
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString(),
          durationDays: Number(form.durationDays),
          repeat: form.repeat,
          notes: form.notes.trim() || null,
        }),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        setSubmitError(body.error ?? 'Something went wrong')
        return
      }

      onSaved()
    } catch {
      setSubmitError('Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="text-base font-semibold text-gray-900">Add medicine</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-xl leading-none"
            aria-label="Close"
          >
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
          {/* Medicine select */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Medicine <span className="text-red-500">*</span>
            </label>
            <select
              value={form.medicineId}
              onChange={e => handleMedicineChange(e.target.value)}
              className={`w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white ${errors.medicineId ? 'border-red-400' : 'border-gray-300'}`}
            >
              <option value="">Select medicine</option>
              {medicines.map(m => (
                <option key={m.id} value={m.id}>{m.name}</option>
              ))}
            </select>
            {errors.medicineId && <p className="mt-1 text-xs text-red-600">{errors.medicineId}</p>}
          </div>

          {/* Dosage */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Dosage <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={form.dosage}
              onChange={e => set('dosage', e.target.value)}
              placeholder="e.g. 500mg"
              className={`w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.dosage ? 'border-red-400' : 'border-gray-300'}`}
            />
            {errors.dosage && <p className="mt-1 text-xs text-red-600">{errors.dosage}</p>}
          </div>

          {/* Use box */}
          {patient.box && (
            <div>
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={form.useBox}
                  onChange={e => set('useBox', e.target.checked)}
                  className="rounded"
                />
                <span className="text-sm text-gray-700">
                  Use patient&apos;s box ({patient.box.boxLabel})
                </span>
              </label>
            </div>
          )}

          {/* Administration method */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Administration method
            </label>
            <textarea
              value={form.administrationMethod}
              onChange={e => set('administrationMethod', e.target.value)}
              rows={2}
              className={`w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${errors.administrationMethod ? 'border-red-400' : 'border-gray-300'}`}
            />
            {errors.administrationMethod && (
              <p className="mt-1 text-xs text-red-600">{errors.administrationMethod}</p>
            )}
          </div>

          {/* Schedule times */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Schedule times <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2">
              <input
                type="time"
                value={form.scheduleTimeInput}
                onChange={e => set('scheduleTimeInput', e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={addScheduleTime}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Add
              </button>
            </div>
            {form.scheduleTimes.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {form.scheduleTimes.map(t => (
                  <span
                    key={t}
                    className="flex items-center gap-1 bg-blue-50 text-blue-700 text-sm px-2.5 py-1 rounded-full font-medium"
                  >
                    {t}
                    <button
                      type="button"
                      onClick={() => removeScheduleTime(t)}
                      className="text-blue-400 hover:text-blue-700 leading-none ml-0.5"
                      aria-label={`Remove ${t}`}
                    >
                      &times;
                    </button>
                  </span>
                ))}
              </div>
            )}
            {errors.scheduleTimes && <p className="mt-1 text-xs text-red-600">{errors.scheduleTimes}</p>}
          </div>

          {/* Start date + Duration */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Start date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                value={form.startDate}
                onChange={e => set('startDate', e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.startDate ? 'border-red-400' : 'border-gray-300'}`}
              />
              {errors.startDate && <p className="mt-1 text-xs text-red-600">{errors.startDate}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Duration (days) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                min={1}
                value={form.durationDays}
                onChange={e => set('durationDays', e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.durationDays ? 'border-red-400' : 'border-gray-300'}`}
              />
              {errors.durationDays && <p className="mt-1 text-xs text-red-600">{errors.durationDays}</p>}
            </div>
          </div>

          {/* Repeat */}
          <div>
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={form.repeat}
                onChange={e => set('repeat', e.target.checked)}
                className="rounded"
              />
              <span className="text-sm text-gray-700">Repeat after duration ends</span>
            </label>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
            <textarea
              value={form.notes}
              onChange={e => set('notes', e.target.value)}
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          {submitError && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
              {submitError}
            </p>
          )}

          <div className="flex gap-3 pt-1">
            <button
              type="submit"
              disabled={submitting}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {submitting ? 'Saving…' : 'Add medicine'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-lg text-sm font-medium text-gray-700 border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

// ─── Patient Profile Page ─────────────────────────────────────────────────────

export default function PatientPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const [patient, setPatient] = useState<Patient | null>(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)
  const [togglingStatus, setTogglingStatus] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const load = useCallback(() => {
    setLoading(true)
    fetch(`/api/patients/${id}`)
      .then(r => {
        if (r.status === 404) { setNotFound(true); return null }
        return r.json()
      })
      .then(data => { if (data) setPatient(data) })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [id])

  useEffect(() => { load() }, [load])

  async function toggleStatus() {
    if (!patient) return

    const newStatus = patient.status === 'ADMITTED' ? 'DISCHARGED' : 'ADMITTED'

    if (newStatus === 'DISCHARGED') {
      if (!window.confirm('Are you sure you want to discharge this patient?')) return
    }

    setTogglingStatus(true)
    try {
      const res = await fetch(`/api/patients/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      })
      if (res.ok) {
        const updated = await res.json()
        setPatient(updated)
      }
    } finally {
      setTogglingStatus(false)
    }
  }

  if (loading) {
    return (
      <div className="animate-pulse space-y-4">
        <div className="h-7 bg-gray-200 rounded w-48" />
        <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-4 bg-gray-200 rounded w-full" />
          ))}
        </div>
      </div>
    )
  }

  if (notFound || !patient) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500 text-sm">Patient not found.</p>
        <Link href="/patients" className="text-blue-600 text-sm hover:underline mt-2 inline-block">
          Back to patients
        </Link>
      </div>
    )
  }

  const activeAssignments = patient.medicineAssignments.filter(a => a.status === 'ACTIVE')

  return (
    <>
      {showModal && (
        <AddMedicineModal
          patient={patient}
          onClose={() => setShowModal(false)}
          onSaved={() => { setShowModal(false); load() }}
        />
      )}

      <div className="space-y-6 max-w-3xl">
        {/* Breadcrumb */}
        <div className="flex items-center gap-3">
          <Link href="/patients" className="text-sm text-gray-500 hover:text-gray-700">
            Patients
          </Link>
          <span className="text-gray-300">/</span>
          <span className="text-sm text-gray-900 font-medium">{patient.name}</span>
        </div>

        {/* Header card */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-xl font-semibold text-gray-900">{patient.name}</h1>
              <p className="text-sm text-gray-500 mt-1">
                {GENDER_LABEL[patient.gender]} · {patient.age} years · National ID:{' '}
                <span className="font-medium text-gray-700">{patient.nationalId}</span>
              </p>
              <p className="text-sm text-gray-500 mt-0.5">
                {patient.department ? patient.department.name : 'No department'} ·{' '}
                Room: {patient.room ?? '—'}
              </p>
              {patient.notes && (
                <p className="text-sm text-gray-600 mt-2 italic">{patient.notes}</p>
              )}
            </div>

            <div className="flex flex-col items-end gap-3 shrink-0">
              {patient.status === 'ADMITTED' ? (
                <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-semibold">
                  Admitted
                </span>
              ) : (
                <span className="bg-gray-100 text-gray-500 text-xs px-3 py-1 rounded-full font-semibold">
                  Discharged
                </span>
              )}
              <button
                onClick={toggleStatus}
                disabled={togglingStatus}
                className={`text-sm px-3 py-1.5 rounded-lg font-medium transition-colors disabled:opacity-50 ${
                  patient.status === 'ADMITTED'
                    ? 'text-red-600 border border-red-200 hover:bg-red-50'
                    : 'text-green-600 border border-green-200 hover:bg-green-50'
                }`}
              >
                {togglingStatus
                  ? 'Updating…'
                  : patient.status === 'ADMITTED'
                  ? 'Discharge patient'
                  : 'Readmit patient'}
              </button>
            </div>
          </div>
        </div>

        {/* Allergy alert */}
        {patient.allergies.length > 0 && (
          <div className="bg-red-50 border-2 border-red-400 rounded-xl p-4">
            <p className="text-sm font-bold text-red-800 uppercase tracking-wide mb-3">
              Allergy Alert
            </p>
            <div className="flex flex-wrap gap-2">
              {patient.allergies.map(a => (
                <span
                  key={a}
                  className="bg-red-100 text-red-800 border border-red-300 px-3 py-1 rounded-full text-sm font-semibold"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Assigned medicines */}
        <div className="bg-white rounded-xl border border-gray-200">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <h2 className="text-base font-semibold text-gray-900">Assigned medicines</h2>
            <button
              onClick={() => setShowModal(true)}
              className="bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Add medicine
            </button>
          </div>

          {activeAssignments.length === 0 ? (
            <p className="px-6 py-10 text-center text-sm text-gray-400">
              No active medicine assignments
            </p>
          ) : (
            <ul className="divide-y divide-gray-100">
              {activeAssignments.map(a => (
                <li key={a.id} className="px-6 py-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{a.medicine.name}</p>
                      <p className="text-sm text-gray-600 mt-0.5">
                        {a.dosage} · {a.administrationMethodOverride}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-2">
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
                      <p>{a.durationDays} days</p>
                      <p className="mt-0.5">
                        {new Date(a.startDate).toLocaleDateString()} –{' '}
                        {new Date(a.endDate).toLocaleDateString()}
                      </p>
                      {a.repeat && (
                        <p className="mt-0.5 text-blue-600 font-medium">Repeating</p>
                      )}
                    </div>
                  </div>
                  {a.notes && (
                    <p className="text-xs text-gray-500 mt-2 italic">{a.notes}</p>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  )
}
