'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'
import { UserRole } from '@/app/generated/prisma'

const navLinks = [
  { href: '/schedule', label: 'Schedule' },
  { href: '/patients', label: 'Patients' },
  { href: '/medicines', label: 'Medicines' },
  { href: '/boxes', label: 'Boxes' },
  { href: '/departments', label: 'Departments', adminOnly: true },
  { href: '/dashboard', label: 'Dashboard', adminOnly: true },
]

export default function Sidebar() {
  const pathname = usePathname()
  const { data: session } = useSession()

  const role = (session?.user as { role?: UserRole } | undefined)?.role
  const isAdmin = role === UserRole.ADMIN

  return (
    <div className="flex flex-col h-full">
      <div className="px-5 py-5 border-b border-gray-200">
        <span className="text-lg font-semibold text-gray-900">MediRemind</span>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-0.5">
        {navLinks.map(({ href, label, adminOnly }) => {
          if (adminOnly && !isAdmin) return null

          const active = pathname === href || pathname.startsWith(href + '/')

          return (
            <Link
              key={href}
              href={href}
              className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                active
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              {label}
            </Link>
          )
        })}
      </nav>

      <div className="px-4 py-4 border-t border-gray-200">
        {session?.user && (
          <div className="mb-3">
            <p className="text-sm font-medium text-gray-900 truncate">
              {session.user.name}
            </p>
            <p className="text-xs text-gray-500 uppercase tracking-wide mt-0.5">
              {role}
            </p>
          </div>
        )}
        <button
          onClick={() => signOut({ callbackUrl: '/auth/login' })}
          className="w-full text-left px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
        >
          Sign out
        </button>
      </div>
    </div>
  )
}
