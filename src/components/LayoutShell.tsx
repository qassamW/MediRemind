'use client'

import { usePathname } from 'next/navigation'
import Sidebar from './Sidebar'

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  if (pathname.startsWith('/auth')) {
    return <>{children}</>
  }

  return (
    <div className="flex h-full overflow-hidden">
      <aside className="w-60 shrink-0 border-r border-gray-200 bg-white overflow-y-auto">
        <Sidebar />
      </aside>
      <main className="flex-1 overflow-y-auto p-6">{children}</main>
    </div>
  )
}