'use client'

import { usePathname } from 'next/navigation'
import Sidebar from './Sidebar'

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  if (pathname.startsWith('/auth')) {
    return <>{children}</>
  }

  return (
    <div className="flex h-full overflow-hidden bg-[#f7fbff] text-[#061943]">
      <aside className="w-[218px] shrink-0 border-r border-[#e8eef7] bg-white/95 overflow-y-auto shadow-[10px_0_35px_rgba(6,25,67,0.04)]">
        <Sidebar />
      </aside>
      <main className="flex-1 overflow-y-auto px-6 py-8 lg:px-8">
        <div className="mx-auto max-w-6xl">{children}</div>
      </main>
    </div>
  )
}
