'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

interface CategoryCard {
  title: string
  key: string
  icon: string
  description: string
  accentColor: string
  sampleBooks: string[]
}

const CATEGORIES_DATA: CategoryCard[] = [
  {
    title: 'Fiction & Novels',
    key: 'Fiction & Novels',
    icon: '📖',
    accentColor: 'from-purple-900/30 to-violet-950/20',
    description: 'Bestselling novels, thrillers, classics, and fantasy. Includes Harry Potter series, Agatha Christie, Dan Brown, Sherlock Holmes, and romantic fiction.',
    sampleBooks: ['All Harry Potter Books', 'The Da Vinci Code', 'Sherlock Holmes', 'Nicholas Sparks Novels', 'Angels and Demons']
  },
  {
    title: 'Self-Development & Psychology',
    key: 'Self-Development & Psychology',
    icon: '🧠',
    accentColor: 'from-emerald-900/30 to-teal-950/20',
    description: 'Deep human emotions, habit building, mental resilience, real-life psychology, and personal transformation.',
    sampleBooks: ['White Nights (Dostoevsky)', 'Atomic Habits', 'The Metamorphosis (Kafka)', 'Self-Reliance (Emerson)', 'Thinking, Fast and Slow']
  },
  {
    title: 'Communication & Influence',
    key: 'Communication & Influence',
    icon: '🗣️',
    accentColor: 'from-blue-900/30 to-indigo-950/20',
    description: 'Public speaking, persuasion, rhetoric, interpersonal dynamics, and social influence.',
    sampleBooks: ['How to Win Friends and Influence People', 'The Crowd (Gustave Le Bon)', 'The Art of Controversy (Schopenhauer)', 'Influence (Cialdini)', 'Captivate']
  },
  {
    title: 'Business, Leadership & Startups',
    key: 'Business & Leadership',
    icon: '💼',
    accentColor: 'from-amber-900/30 to-orange-950/20',
    description: 'Strategy, executive decision-making, wealth building, and foundational leadership classics.',
    sampleBooks: ['The Art of War (Sun Tzu)', 'Rich Dad Poor Dad', 'Principles (Ray Dalio)', 'Autobiography of Benjamin Franklin', 'The Lean Startup']
  },
  {
    title: 'Philosophy, Wisdom & Stoicism',
    key: 'Philosophy & Wisdom',
    icon: '🏛️',
    accentColor: 'from-stone-800/40 to-neutral-900/20',
    description: 'Timeless reflections on life, peace of mind, mortality, deep spiritual quests, and stoic clarity.',
    sampleBooks: ['Siddhartha (Hesse)', 'Meditations (Marcus Aurelius)', 'A Confession (Tolstoy)', 'On the Shortness of Life (Seneca)', 'The Prophet (Kahlil Gibran)']
  },
  {
    title: 'English Language, Grammar & Vocab',
    key: 'English Language & Vocabulary',
    icon: '📝',
    accentColor: 'from-sky-900/30 to-cyan-950/20',
    description: 'Core English writing style, root words, phrasal verbs, idioms, and vocabulary builder books.',
    sampleBooks: ['The Elements of Style (Strunk)', 'English Grammar in Use (Murphy)', '1100 Root Words', '700 Phrasal Verbs', '900 Idioms']
  }
]

export default function CategoriesPage() {
  const [counts, setCounts] = useState<Record<string, number>>({})

  useEffect(() => {
    fetch('/api/library')
      .then(res => res.json())
      .then(data => {
        if (data.books) {
          const c: Record<string, number> = {}
          data.books.forEach((b: any) => {
            if (b.category) c[b.category] = (c[b.category] || 0) + 1
          })
          setCounts(c)
        }
      })
      .catch(console.error)
  }, [])

  return (
    <div className="animate-fade-in flex flex-col gap-8 pb-16 max-w-6xl mx-auto">
      <header className="border-b border-emerald-900/40 pb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-xs font-bold text-emerald-400 mb-2">
          <span>🗂️</span> Vinay's World • Curated Shelves
        </div>
        <h1 className="brand-title-font gold-gradient-text text-2xl sm:text-4xl font-extrabold mb-2">
          Browse Books by Category
        </h1>
        <p className="text-[var(--text-muted)] text-base sm:text-lg">
          Select any shelf to instantly filter and read books across fiction, psychology, leadership, and wisdom.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CATEGORIES_DATA.map((cat) => {
          const count = counts[cat.key] || 0
          return (
            <Link
              key={cat.key}
              href={`/?category=${encodeURIComponent(cat.key)}`}
              className="card bg-gradient-to-br from-[#07140C] via-[#040B07] to-black border border-emerald-900/40 hover:border-emerald-500/60 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)] transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="text-3xl p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/30 group-hover:scale-110 transition-transform shadow-xs">
                    {cat.icon}
                  </div>
                  <span className="badge bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 font-bold text-xs px-3 py-1">
                    {count} {count === 1 ? 'Book' : 'Books'}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-emerald-300 transition-colors">
                  {cat.title}
                </h2>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                  {cat.description}
                </p>

                {/* Popular Books in Category */}
                <div className="space-y-1.5 mb-6">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-400/90">
                    Featured in this Shelf:
                  </p>
                  <ul className="text-xs text-[var(--text-primary)]/80 space-y-1">
                    {cat.sampleBooks.slice(0, 3).map((title, i) => (
                      <li key={i} className="truncate flex items-center gap-1.5">
                        <span className="text-amber-400">•</span> {title}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-3 border-t border-emerald-900/30 flex items-center justify-between text-xs font-bold text-emerald-400 group-hover:text-amber-400 transition-colors">
                <span>Explore Shelf</span>
                <span>&rarr;</span>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
