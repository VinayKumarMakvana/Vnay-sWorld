'use client'

import React, { useState, useEffect, useMemo, Suspense } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'

interface Book {
  id: string
  title: string
  author?: string | null
  category?: string | null
  fileType: string
  fileSizeBytes?: number | null
  shortDescription?: string | null
  topics?: string | null
}

const CATEGORIES = [
  { name: 'All Books', key: 'ALL', icon: '📚' },
  { name: 'Fiction & Novels', key: 'Fiction & Novels', icon: '📖' },
  { name: 'Self-Development', key: 'Self-Development & Psychology', icon: '🧠' },
  { name: 'Communication', key: 'Communication & Influence', icon: '🗣️' },
  { name: 'Business & Leadership', key: 'Business & Leadership', icon: '💼' },
  { name: 'Philosophy & Wisdom', key: 'Philosophy & Wisdom', icon: '🏛️' },
  { name: 'English Learning', key: 'English Language & Vocabulary', icon: '📝' },
]

function BookPlatformContent() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get('category') || 'ALL'

  const [books, setBooks] = useState<Book[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState(initialCategory)
  const [bookmarks, setBookmarks] = useState<string[]>([])
  const [sortBy, setSortBy] = useState<'title' | 'author' | 'size'>('title')
  const [viewOnlyBookmarks, setViewOnlyBookmarks] = useState(false)

  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) setActiveCategory(cat)
  }, [searchParams])

  useEffect(() => {
    // Load bookmarks from localStorage
    try {
      const saved = localStorage.getItem('user_book_bookmarks')
      if (saved) setBookmarks(JSON.parse(saved))
    } catch (e) {
      console.error(e)
    }

    // Fetch all books from API
    const fetchBooks = async () => {
      try {
        const res = await fetch('/api/library')
        const data = await res.json()
        if (data.books) {
          setBooks(data.books)
        }
      } catch (err) {
        console.error('Failed to load library', err)
      } finally {
        setLoading(false)
      }
    }
    fetchBooks()
  }, [])

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    let updated: string[]
    if (bookmarks.includes(id)) {
      updated = bookmarks.filter(b => b !== id)
    } else {
      updated = [...bookmarks, id]
    }
    setBookmarks(updated)
    localStorage.setItem('user_book_bookmarks', JSON.stringify(updated))
  }

  // Filter & Search Logic
  const filteredBooks = useMemo(() => {
    return books.filter(b => {
      // Category filter
      if (activeCategory !== 'ALL' && b.category !== activeCategory) {
        return false
      }

      // Bookmarks filter
      if (viewOnlyBookmarks && !bookmarks.includes(b.id)) {
        return false
      }

      // Search query
      if (search.trim()) {
        const query = search.toLowerCase()
        const matchTitle = (b.title || '').toLowerCase().includes(query)
        const matchAuthor = (b.author || '').toLowerCase().includes(query)
        const matchCategory = (b.category || '').toLowerCase().includes(query)
        const matchTopics = (b.topics || '').toLowerCase().includes(query)
        return matchTitle || matchAuthor || matchCategory || matchTopics
      }

      return true
    }).sort((a, b) => {
      if (sortBy === 'author') {
        return (a.author || '').localeCompare(b.author || '')
      }
      if (sortBy === 'size') {
        return (b.fileSizeBytes || 0) - (a.fileSizeBytes || 0)
      }
      return (a.title || '').localeCompare(b.title || '')
    })
  }, [books, search, activeCategory, bookmarks, viewOnlyBookmarks, sortBy])

  // Count per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { ALL: books.length }
    books.forEach(b => {
      if (b.category) {
        counts[b.category] = (counts[b.category] || 0) + 1
      }
    })
    return counts
  }, [books])

  const formatFileSize = (bytes?: number | null) => {
    if (!bytes) return '1.2 MB'
    const mb = bytes / (1024 * 1024)
    return `${mb.toFixed(1)} MB`
  }

  return (
    <div className="animate-fade-in flex flex-col gap-6 pb-16">
      {/* Luxury Hero Banner with Vinay's World Logo */}
      <section className="relative overflow-hidden rounded-[var(--radius-xl)] bg-gradient-to-br from-[#06140C] via-[#030906] to-black border border-emerald-900/40 p-6 sm:p-8 shadow-xl">
        {/* Glow ambient circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-amber-500/5 rounded-full blur-2xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Logo Emblem */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-amber-500/60 shadow-xl shadow-emerald-950/80 shrink-0 group">
            <Image
              src="/logo.jpg"
              alt="Vinay's World Logo"
              width={112}
              height={112}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-xs font-bold text-emerald-400 mb-3 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Vinay's World • {books.length > 0 ? books.length : 230} Books Collection</span>
            </div>

            <h1 className="brand-title-font gold-gradient-text text-3xl sm:text-4xl md:text-5xl font-black mb-3 tracking-wide">
              Vinay's World
            </h1>
            
            <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed max-w-2xl">
              Your personal sanctuary for reading and discovering world-class books. Explore bestselling novels, psychology, leadership, communication guides, and timeless wisdom in distraction-free OLED dark mode.
            </p>

            {/* Quick Stats Chips */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 mt-4 text-xs font-semibold">
              <span className="px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-900/50 text-emerald-300">
                📖 {books.length > 0 ? books.length : 230} Offline PDFs
              </span>
              <span className="px-3 py-1 rounded-full bg-amber-950/30 border border-amber-900/40 text-amber-300">
                🗂️ 6 Curated Shelves
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-900/50 text-emerald-300">
                🌙 Pure OLED Black Reader
              </span>
            </div>
          </div>
        </div>

        {/* Search & Bookmark Action Bar */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 relative z-10 pt-4 border-t border-emerald-900/30">
          <div className="relative flex-1">
            <span className="absolute left-4 top-3.5 text-base text-emerald-400/80">🔍</span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by book name, author (Harry Potter, Dale Carnegie, Robert Greene, Murphy...)"
              className="w-full p-3.5 pl-11 rounded-[var(--radius-md)] border border-emerald-900/50 bg-[#040805] text-[var(--text-primary)] placeholder:text-[#526B5C] focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none text-sm font-medium transition-all"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-4 top-3.5 text-xs text-emerald-400 hover:text-white cursor-pointer"
              >
                ✕ Clear
              </button>
            )}
          </div>

          <button
            onClick={() => setViewOnlyBookmarks(!viewOnlyBookmarks)}
            className={`btn !px-4 !py-3 text-sm font-semibold shrink-0 cursor-pointer border transition-all ${
              viewOnlyBookmarks
                ? 'btn-gold shadow-md shadow-amber-950/50'
                : 'bg-[#040805] text-amber-300 border-amber-500/30 hover:border-amber-500/70'
            }`}
          >
            {viewOnlyBookmarks ? '★ Showing Bookmarks' : '☆ Saved Bookmarks (' + bookmarks.length + ')'}
          </button>
        </div>
      </section>

      {/* Category Pills Slider */}
      <section className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {CATEGORIES.map(cat => {
          const isSelected = activeCategory === cat.key && !viewOnlyBookmarks
          const count = categoryCounts[cat.key] || 0
          return (
            <button
              key={cat.key}
              onClick={() => {
                setActiveCategory(cat.key)
                setViewOnlyBookmarks(false)
              }}
              className={`px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 border ${
                isSelected
                  ? 'bg-gradient-to-r from-emerald-600 via-emerald-700 to-amber-600 text-white border-amber-400/40 shadow-md shadow-emerald-950/60 font-bold'
                  : 'bg-[#060D08] text-[var(--text-muted)] border-emerald-900/30 hover:border-emerald-500/40 hover:text-emerald-300'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isSelected ? 'bg-white/20 text-white font-bold' : 'bg-emerald-950/60 text-emerald-400'}`}>
                {count}
              </span>
            </button>
          )
        })}
      </section>

      {/* Results Header with Sorting */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-emerald-900/30 pb-3">
        <p className="text-xs sm:text-sm font-bold text-emerald-400/90 uppercase tracking-wider">
          {filteredBooks.length} {filteredBooks.length === 1 ? 'Book' : 'Books'} Available
          {activeCategory !== 'ALL' && ` in "${activeCategory}"`}
          {search && ` matching "${search}"`}
        </p>

        <div className="flex items-center gap-2 self-end sm:self-auto">
          <span className="text-xs text-[var(--text-muted)] font-medium">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e: any) => setSortBy(e.target.value)}
            className="p-1.5 px-2.5 text-xs rounded-[var(--radius-sm)] border border-emerald-900/50 bg-[#060D08] text-[var(--text-primary)] outline-none cursor-pointer focus:border-emerald-500"
          >
            <option value="title">Book Title (A-Z)</option>
            <option value="author">Author Name</option>
            <option value="size">File Size (Largest)</option>
          </select>
        </div>
      </div>

      {/* Books Grid */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-sm text-emerald-400/80 font-medium">Loading books from Vinay's World library...</p>
        </div>
      ) : filteredBooks.length === 0 ? (
        <div className="card text-center py-20 bg-gradient-to-b from-[#061009] to-black border-emerald-900/40">
          <span className="text-4xl mb-3 block">📖</span>
          <h2 className="text-lg font-bold text-[var(--text-primary)] mb-1">No books found</h2>
          <p className="text-sm text-[var(--text-muted)] mb-5">
            {viewOnlyBookmarks 
              ? "You haven't bookmarked any books yet. Click the star icon on any book card to add it to your reading list!" 
              : "Try searching with different keywords or selecting 'All Books'."}
          </p>
          <button
            onClick={() => { setSearch(''); setActiveCategory('ALL'); setViewOnlyBookmarks(false) }}
            className="btn btn-primary text-xs"
          >
            Show All Books
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredBooks.map((book) => {
            const isBookmarked = bookmarks.includes(book.id)
            const fileUrl = `/api/library/file/${book.id}`

            return (
              <div
                key={book.id}
                className="card flex flex-col justify-between bg-gradient-to-b from-[#07130C] via-[#050C08] to-black border-emerald-900/40 hover:border-emerald-500/60 transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] group relative overflow-hidden"
              >
                <div>
                  {/* Visual Book Cover Header */}
                  <div className="h-36 rounded-[var(--radius-md)] bg-gradient-to-br from-[#0F2817] via-[#091A0F] to-black p-4 flex flex-col justify-between relative border border-emerald-500/20 mb-4 group-hover:scale-[1.01] transition-transform shadow-inner">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 backdrop-blur-xs">
                        {book.category?.split('&')[0]?.trim() || 'Book'}
                      </span>
                      <button
                        onClick={(e) => toggleBookmark(book.id, e)}
                        className={`text-xl p-1 transition cursor-pointer ${
                          isBookmarked ? 'text-amber-400 scale-110 drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]' : 'text-white/40 hover:text-amber-300'
                        }`}
                        title={isBookmarked ? 'Remove bookmark' : 'Add to bookmarks'}
                      >
                        {isBookmarked ? '★' : '☆'}
                      </button>
                    </div>

                    <div>
                      <p className="text-xs font-extrabold text-white line-clamp-2 leading-snug drop-shadow-xs" title={book.title}>
                        {book.title}
                      </p>
                      <p className="text-[10px] text-emerald-300/70 truncate mt-0.5 font-medium">
                        {book.author || 'Original Edition'}
                      </p>
                    </div>
                  </div>

                  {/* Book Metadata */}
                  <div className="space-y-1 mb-4 px-1">
                    <h3 className="font-bold text-sm text-[var(--text-primary)] group-hover:text-emerald-300 transition-colors line-clamp-2 leading-snug" title={book.title}>
                      {book.title}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] truncate">
                      {book.author || 'Author info available'}
                    </p>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-3 border-t border-emerald-900/30 flex items-center justify-between gap-2 px-1">
                  <span className="text-[11px] font-semibold text-emerald-400/80">
                    {formatFileSize(book.fileSizeBytes)} • PDF
                  </span>

                  <div className="flex items-center gap-1.5">
                    <a
                      href={fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded text-xs text-emerald-400/80 hover:text-emerald-300 hover:bg-emerald-950/40 transition"
                      title="Open directly in full tab"
                    >
                      ↗
                    </a>
                    <Link
                      href={`/library/read/${book.id}`}
                      className="btn btn-primary !px-3 !py-1.5 text-xs font-bold"
                    >
                      Read Now &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default function BookPlatformHome() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-[var(--text-muted)]">Loading books...</div>}>
      <BookPlatformContent />
    </Suspense>
  )
}
