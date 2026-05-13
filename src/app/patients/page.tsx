'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

type Patient = {
  id: string
  name: string
  age: number
  gender: 'MALE' | 'FEMALE' | 'OTHER'
  nationalId: string
  room: string | null
  allergies: string[]
  status: 'ADMITTED' | 'DISCHARGED'
  department: { id: string; name: string } | null
  box: { id: string; boxLabel: string } | null
}

const GENDER_LABEL: Record<string, string> = {
  MALE: 'Male',
  FEMALE: 'Female',
  OTHER: 'Other',
}

function SkeletonRow() {
  return (
    <tr className="animate-pulse">
      {Array.from({ length: 8 }).map((_, i) => (
        <td key={i} className="px-4 py-3">
          <div className="h-4 bg-gray-200 rounded w-3/4" />
        </td>
      ))}
    </tr>
  )
}

export default function PatientsPage() {
  const [patients, setPatients] = useState<Patient[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [showDischarged, setShowDischarged] = useState(false)

  useEffect(() => {
    fetch('/api/patients?status=all')
      .then(r => r.json())
      .then(data => setPatients(Array.isArray(data) ? data : []))
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  const filtered = patients.filter(p => {
    if (!showDischarged && p.status === 'DISCHARGED') return false
    if (!search) return true
    const q = search.toLowerCase()
    return p.name.toLowerCase().includes(q) || p.nationalId.toLowerCase().includes(q)
  })

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold text-gray-900">Patients</h1>
        <Link
          href="/patients/new"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          Register patient
        </Link>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by name or national ID…"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="flex-1 max-w-sm px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={showDischarged}
            onChange={e => setShowDischarged(e.target.checked)}
            className="rounded"
          />
          Show discharged
        </label>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              {['Name', 'Age', 'Gender', 'Department', 'Room', 'Allergies', 'Status', 'Actions'].map(col => (
                <th key={col} className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {loading ? (
              Array.from({ length: 6 }).map((_, i) => <SkeletonRow key={i} />)
            ) : filtered.length === 0 ? (
              <tr>
                <td colSpan={8} className="px-4 py-12 text-center text-gray-400 text-sm">
                  No patients found
                </td>
              </tr>
            ) : (
              filtered.map(p => (
                <tr key={p.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 font-medium text-gray-900">{p.name}</td>
                  <td className="px-4 py-3 text-gray-600">{p.age}</td>
                  <td className="px-4 py-3 text-gray-600">{GENDER_LABEL[p.gender] ?? p.gender}</td>
                  <td className="px-4 py-3 text-gray-600">{p.department?.name ?? '—'}</td>
                  <td className="px-4 py-3 text-gray-600">{p.room ?? '—'}</td>
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-1">
                      {p.allergies.length === 0 ? (
                        <span className="text-gray-400">—</span>
                      ) : (
                        p.allergies.map(a => (
                          <span
                            key={a}
                            className="bg-red-100 text-red-700 text-xs px-2 py-0.5 rounded-full font-medium"
                          >
                            {a}
                          </span>
                        ))
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    {p.status === 'ADMITTED' ? (
                      <span className="bg-green-100 text-green-700 text-xs px-2.5 py-1 rounded-full font-medium">
                        Admitted
                      </span>
                    ) : (
                      <span className="bg-gray-100 text-gray-500 text-xs px-2.5 py-1 rounded-full font-medium">
                        Discharged
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <Link
                      href={`/patients/${p.id}`}
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
