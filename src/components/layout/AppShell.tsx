'use client'

import Sidebar from './Sidebar'
import MobileNav from './MobileNav'
import Link from 'next/link'
import Image from 'next/image'

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="app-shell">
      <Sidebar />
      <div className="main-content relative flex flex-col min-h-screen">
        {/* Mobile Top Header */}
        <header className="md:hidden sticky top-0 z-40 bg-[#060A07]/95 backdrop-blur-md border-b border-emerald-900/40 px-4 py-2.5 flex items-center justify-between shadow-sm">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-amber-500/50 shadow-xs shrink-0">
              <Image
                src="/logo.jpg"
                alt="Vinay's World"
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="leading-none">
              <span className="brand-title-font gold-gradient-text font-black text-base block">
                Vinay's World
              </span>
              <span className="text-[9px] text-emerald-400 font-bold uppercase tracking-wider block mt-0.5">
                Digital Library
              </span>
            </div>
          </Link>
          <div className="flex items-center gap-2">
            <span className="badge bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 text-[10px] px-2.5 py-1 font-bold">
              230 Books
            </span>
          </div>
        </header>

        {/* Content Container */}
        <main className="flex-1 pb-[84px] md:pb-8">
          <div className="content-container">
            {children}
          </div>
        </main>

        <MobileNav />
      </div>
    </div>
  )
}
