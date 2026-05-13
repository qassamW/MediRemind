'use client'

import { useState } from 'react'

type Props = {
  isOpen: boolean
  onConfirm: (password: string) => void
  onCancel: () => void
}

export default function ReauthModal({ isOpen, onConfirm, onCancel }: Props) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [verifying, setVerifying] = useState(false)

  if (!isOpen) return null

  async function handleConfirm() {
    if (!password) { setError('Enter your password'); return }
    setVerifying(true)
    setError('')
    try {
      const res = await fetch('/api/auth/verify-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      const { verified } = await res.json()
      if (verified) {
        onConfirm(password)
        setPassword('')
      } else {
        setError('Incorrect password')
      }
    } catch {
      setError('Something went wrong')
    } finally {
      setVerifying(false)
    }
  }

  function handleCancel() {
    setPassword('')
    setError('')
    onCancel()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-sm p-6">
        <h2 className="text-base font-semibold text-gray-900 mb-1">Confirm your password</h2>
        <p className="text-sm text-gray-500 mb-4">Re-enter your password to continue with this action.</p>

        <input
          type="password"
          value={password}
          onChange={e => { setPassword(e.target.value); setError('') }}
          onKeyDown={e => { if (e.key === 'Enter') handleConfirm() }}
          placeholder="Your password"
          autoFocus
          className={`w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${error ? 'border-red-400' : 'border-gray-300'}`}
        />
        {error && <p className="mt-1.5 text-xs text-red-600">{error}</p>}

        <div className="flex gap-3 mt-5">
          <button
            onClick={handleConfirm}
            disabled={verifying}
            className="flex-1 bg-red-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-red-700 disabled:opacity-50 transition-colors"
          >
            {verifying ? 'Verifying…' : 'Confirm'}
          </button>
          <button
            onClick={handleCancel}
            className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}