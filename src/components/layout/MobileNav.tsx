'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const mobileNavItems = [
  { name: 'Discover', href: '/', icon: '📚' },
  { name: 'Categories', href: '/categories', icon: '🗂️' },
  { name: 'Bookmarks', href: '/bookmarks', icon: '🔖' },
  { name: 'Settings', href: '/settings', icon: '⚙️' },
]

export default function MobileNav() {
  const pathname = usePathname()

  return (
    <nav className="mobile-nav">
      {mobileNavItems.map((item) => {
        const isActive = pathname === item.href
        
        return (
          <Link 
            key={item.href} 
            href={item.href}
            className={`flex flex-col items-center justify-center w-full h-full space-y-0.5 transition-all relative ${
              isActive 
                ? 'text-emerald-400 font-bold' 
                : 'text-[var(--text-muted)] hover:text-emerald-300'
            }`}
          >
            {isActive && (
              <span className="absolute top-1 w-6 h-1 rounded-full bg-gradient-to-r from-emerald-500 to-amber-500 shadow-xs" />
            )}
            <div className={`text-xl transition-transform ${isActive ? 'scale-110 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]' : ''}`}>
              {item.icon}
            </div>
            <span className="text-[10px] tracking-tight">{item.name}</span>
          </Link>
        )
      })}
    </nav>
  )
}
