import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import SessionProvider from '@/components/SessionProvider'
import LayoutShell from '@/components/LayoutShell'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })

export const metadata: Metadata = {
  title: 'MediRemind',
  description: 'Hospital medication administration tracking',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="h-full bg-[#f7fbff] text-[#061943]">
        <SessionProvider>
          <LayoutShell>{children}</LayoutShell>
        </SessionProvider>
      </body>
    </html>
  )
}
