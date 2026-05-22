'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

type Department = { id: string; name: string }

type FormState = {
  name: string
  age: string
  gender: string
  nationalId: string
  departmentId: string
  room: string
  notes: string
}

const REQUIRED_FIELDS: (keyof FormState)[] = ['name', 'age', 'gender', 'nationalId']

const FIELD_LABEL: Partial<Record<keyof FormState, string>> = {
  name: 'Full name',
  age: 'Age',
  gender: 'Gender',
  nationalId: 'National ID',
  departmentId: 'Department',
}

function validate(form: FormState): Record<string, string> {
  const errs: Record<string, string> = {}
  for (const field of REQUIRED_FIELDS) {
    if (!form[field].trim()) {
      errs[field] = `${FIELD_LABEL[field]} is required`
    }
  }
  if (form.age && (isNaN(Number(form.age)) || Number(form.age) <= 0)) {
    errs.age = 'Age must be a positive number'
  }
  return errs
}

export default function NewPatientPage() {
  const router = useRouter()
  const [departments, setDepartments] = useState<Department[]>([])
  const [form, setForm] = useState<FormState>({
    name: '',
    age: '',
    gender: '',
    nationalId: '',
    departmentId: '',
    room: '',
    notes: '',
  })
  const [allergies, setAllergies] = useState<string[]>([])
  const [allergyInput, setAllergyInput] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitError, setSubmitError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    fetch('/api/departments')
      .then(r => r.json())
      .then(data => setDepartments(Array.isArray(data) ? data : []))
      .catch(() => {})
  }, [])

  function set(field: keyof FormState, value: string) {
    setForm(prev => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors(prev => { const next = { ...prev }; delete next[field]; return next })
  }

  function addAllergy() {
    const val = allergyInput.trim()
    if (val && !allergies.includes(val)) {
      setAllergies(prev => [...prev, val])
    }
    setAllergyInput('')
  }

  function removeAllergy(a: string) {
    setAllergies(prev => prev.filter(x => x !== a))
  }

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length > 0) { setErrors(errs); return }

    setSubmitting(true)
    setSubmitError('')

    try {
      const res = await fetch('/api/patients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          age: Number(form.age),
          gender: form.gender,
          nationalId: form.nationalId.trim(),
          departmentId: form.departmentId || null,
          room: form.room.trim() || null,
          allergies,
          notes: form.notes.trim() || null,
        }),
      })

      if (res.status === 409) {
        setSubmitError('A patient with this ID already exists')
        return
      }

      if (!res.ok) {
        setSubmitError('Something went wrong. Please try again.')
        return
      }

      const patient = await res.json()
      router.push(`/patients/${patient.id}`)
    } catch {
      setSubmitError('Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <Link href="/patients" className="text-sm text-gray-500 hover:text-gray-700">
          Patients
        </Link>
        <span className="text-gray-300">/</span>
        <span className="text-sm text-gray-900 font-medium">Register patient</span>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h1 className="text-lg font-semibold text-gray-900 mb-6">Register patient</h1>

        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {/* Full name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={form.name}
              onChange={e => set('name', e.target.value)}
              className={`w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.name ? 'border-red-400' : 'border-gray-300'}`}
            />
            {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
          </div>

          {/* Age + Gender */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Age <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                min={0}
                value={form.age}
                onChange={e => set('age', e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.age ? 'border-red-400' : 'border-gray-300'}`}
              />
              {errors.age && <p className="mt-1 text-xs text-red-600">{errors.age}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Gender <span className="text-red-500">*</span>
              </label>
              <select
                value={form.gender}
                onChange={e => set('gender', e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white ${errors.gender ? 'border-red-400' : 'border-gray-300'}`}
              >
                <option value="">Select gender</option>
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
              </select>
              {errors.gender && <p className="mt-1 text-xs text-red-600">{errors.gender}</p>}
            </div>
          </div>

          {/* National ID */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              National ID <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={form.nationalId}
              onChange={e => set('nationalId', e.target.value)}
              className={`w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.nationalId ? 'border-red-400' : 'border-gray-300'}`}
            />
            {errors.nationalId && <p className="mt-1 text-xs text-red-600">{errors.nationalId}</p>}
          </div>

          {/* Department + Room */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Department
              </label>
              <select
                value={form.departmentId}
                onChange={e => set('departmentId', e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white ${errors.departmentId ? 'border-red-400' : 'border-gray-300'}`}
              >
                <option value="">Select department</option>
                {departments.map(d => (
                  <option key={d.id} value={d.id}>{d.name}</option>
                ))}
              </select>
              {errors.departmentId && <p className="mt-1 text-xs text-red-600">{errors.departmentId}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Room</label>
              <input
                type="text"
                value={form.room}
                onChange={e => set('room', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Allergies */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Allergies</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={allergyInput}
                onChange={e => setAllergyInput(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); addAllergy() } }}
                placeholder="e.g. Penicillin"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="button"
                onClick={addAllergy}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Add
              </button>
            </div>
            {allergies.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {allergies.map(a => (
                  <span
                    key={a}
                    className="flex items-center gap-1 bg-red-100 text-red-700 text-sm px-2.5 py-1 rounded-full font-medium"
                  >
                    {a}
                    <button
                      type="button"
                      onClick={() => removeAllergy(a)}
                      className="text-red-500 hover:text-red-700 leading-none ml-0.5"
                      aria-label={`Remove ${a}`}
                    >
                      &times;
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
            <textarea
              value={form.notes}
              onChange={e => set('notes', e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
          </div>

          {submitError && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
              {submitError}
            </p>
          )}

          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              disabled={submitting}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {submitting ? 'Registering…' : 'Register patient'}
            </button>
            <Link
              href="/patients"
              className="px-5 py-2 rounded-lg text-sm font-medium text-gray-700 border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
