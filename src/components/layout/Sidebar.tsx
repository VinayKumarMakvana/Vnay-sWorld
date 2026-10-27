'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const bookNavItems = [
  { name: 'Discover Books', href: '/', icon: '📚' },
  { name: 'Browse Categories', href: '/categories', icon: '🗂️' },
  { name: 'Saved Bookmarks', href: '/bookmarks', icon: '🔖' },
  { name: 'Library Settings', href: '/settings', icon: '⚙️' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="sidebar">
      {/* Brand Header */}
      <div className="p-5 border-b border-[var(--border-main)] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group w-full">
          <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-amber-500/50 shadow-md shadow-emerald-950/50 group-hover:scale-105 transition-transform shrink-0">
            <Image
              src="/logo.jpg"
              alt="Vinay's World"
              width={44}
              height={44}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="overflow-hidden">
            <span className="brand-title-font gold-gradient-text font-black text-lg block leading-tight truncate">
              Vinay's World
            </span>
            <span className="text-[10px] text-emerald-400/90 font-bold tracking-widest uppercase block mt-0.5">
              Personal Library
            </span>
          </div>
        </Link>
      </div>
      
      {/* Navigation List */}
      <nav className="flex-1 px-3 py-6 space-y-1.5 overflow-y-auto">
        <p className="px-3 text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)] mb-3">
          Library Navigation
        </p>

        {bookNavItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link 
              key={item.href} 
              href={item.href}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-[var(--radius-md)] text-sm font-semibold transition-all ${
                isActive 
                  ? 'bg-emerald-950/40 text-emerald-300 shadow-xs border border-emerald-500/40 font-bold' 
                  : 'text-[var(--text-muted)] hover:bg-emerald-950/20 hover:text-[var(--text-primary)] hover:border hover:border-emerald-900/30'
              }`}
            >
              <span className="text-lg shrink-0">{item.icon}</span>
              <span className="truncate">{item.name}</span>
            </Link>
          )
        })}
      </nav>
      
      {/* Footer Info */}
      <div className="p-4 border-t border-[var(--border-main)] bg-[var(--bg-main)]/50">
        <div className="p-3.5 rounded-[var(--radius-md)] bg-[var(--bg-surface)] border border-emerald-900/40 text-xs text-[var(--text-muted)]">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <p className="font-bold text-[var(--text-primary)]">Vinay's World • 230 Books</p>
          </div>
          <p className="text-[11px] text-[var(--text-muted)] leading-relaxed">
            Curated offline collection of bestselling fiction, novels, psychology & wisdom.
          </p>
        </div>
      </div>
    </aside>
  )
}
