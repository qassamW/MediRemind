'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'
import { UserRole } from '@/app/generated/prisma'
import logoImage from '@/assets/logo.jpeg'

const navLinks = [
  { href: '/schedule', label: 'Schedule', icon: 'Cal' },
  { href: '/dashboard', label: 'Dashboard', icon: 'Dash', adminOnly: true },
  { href: '/patients', label: 'Patients', icon: 'Pat' },
  { href: '/medicines', label: 'Medicines', icon: 'Med' },
  { href: '/boxes', label: 'Boxes', icon: 'Box' },
  { href: '/departments', label: 'Departments', icon: 'Dep', adminOnly: true },
]

export default function Sidebar() {
  const pathname = usePathname()
  const { data: session } = useSession()

  const role = (session?.user as { role?: UserRole } | undefined)?.role
  const isAdmin = role === UserRole.ADMIN

  return (
    <div className="flex h-full flex-col px-3 py-6">
      <div className="px-2 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-[#dce8f4] bg-white shadow-sm">
          <Image
            src={logoImage}
            alt="MediReminder logo"
            className="h-full w-full object-contain p-1.5"
            priority
          />
        </div>
        <div className="mt-3">
          <p className="text-xl font-black leading-none tracking-tight">
            <span className="text-[#061943]">Medi</span>
            <span className="text-[#109b81]">Reminder</span>
          </p>
          <p className="mt-1 text-[11px] font-medium text-[#64748b]">
            Medication Workflow
          </p>
        </div>
      </div>

      <nav className="mt-8 flex-1 space-y-2">
        {navLinks.map(({ href, label, icon, adminOnly }) => {
          if (adminOnly && !isAdmin) return null

          const active = pathname === href || pathname.startsWith(href + '/')

          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-semibold transition-all ${
                active
                  ? 'bg-[#109b81] text-white shadow-[0_12px_28px_rgba(16,155,129,0.24)]'
                  : 'text-[#34425f] hover:bg-[#eff8f7] hover:text-[#109b81]'
              }`}
            >
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border text-[10px] font-black ${
                  active
                    ? 'border-white/25 bg-white/15 text-white'
                    : 'border-[#dce8f4] bg-white text-[#64748b]'
                }`}
              >
                {icon}
              </span>
              {label}
            </Link>
          )
        })}
      </nav>

      <div className="rounded-xl border border-[#e5edf6] bg-white p-3 shadow-sm">
        {session?.user && (
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#109b81] text-xs font-bold text-white">
              MR
            </div>
            <div className="min-w-0">
              <p className="truncate text-xs font-bold text-[#061943]">
                {session.user.name ?? 'MediReminder Staff'}
              </p>
              <p className="truncate text-[11px] text-[#64748b]">
                {session.user.email}
              </p>
            </div>
          </div>
        )}
        <button
          onClick={() => signOut({ callbackUrl: '/auth/login' })}
          className="w-full rounded-lg px-3 py-2 text-left text-xs font-semibold text-[#64748b] transition-colors hover:bg-[#f3f8fc] hover:text-[#061943]"
        >
          Sign out
        </button>
      </div>
    </div>
  )
}
