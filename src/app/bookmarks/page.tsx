'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

interface Book {
  id: string
  title: string
  author?: string | null
  category?: string | null
  fileSizeBytes?: number | null
}

export default function BookmarksPage() {
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([])
  const [allBooks, setAllBooks] = useState<Book[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    try {
      const saved = localStorage.getItem('user_book_bookmarks')
      if (saved) setBookmarkedIds(JSON.parse(saved))
    } catch (e) {
      console.error(e)
    }

    fetch('/api/library')
      .then(res => res.json())
      .then(data => {
        if (data.books) setAllBooks(data.books)
      })
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  const removeBookmark = (id: string) => {
    const updated = bookmarkedIds.filter(b => b !== id)
    setBookmarkedIds(updated)
    localStorage.setItem('user_book_bookmarks', JSON.stringify(updated))
  }

  const bookmarkedBooks = allBooks.filter(b => bookmarkedIds.includes(b.id))

  const formatFileSize = (bytes?: number | null) => {
    if (!bytes) return '1.2 MB'
    const mb = bytes / (1024 * 1024)
    return `${mb.toFixed(1)} MB`
  }

  return (
    <div className="animate-fade-in flex flex-col gap-8 pb-16 max-w-6xl mx-auto">
      <header className="border-b border-emerald-900/40 pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-950/60 border border-amber-500/30 text-xs font-bold text-amber-400 mb-2">
            <span>★</span> Vinay's World • Reading List
          </div>
          <h1 className="brand-title-font gold-gradient-text text-2xl sm:text-4xl font-extrabold mb-2">
            My Saved Bookmarks
          </h1>
          <p className="text-[var(--text-muted)] text-base sm:text-lg">
            Quickly resume reading your favorite saved books from your personal collection.
          </p>
        </div>
        <Link href="/" className="btn btn-secondary text-xs">
          + Explore All Books
        </Link>
      </header>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mb-3"></div>
          <p className="text-sm text-emerald-400/80">Loading your reading list...</p>
        </div>
      ) : bookmarkedBooks.length === 0 ? (
        <div className="card text-center py-24 max-w-md mx-auto bg-gradient-to-b from-[#061209] to-black border-emerald-900/40">
          <span className="text-5xl mb-4 block">🔖</span>
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-2">Your reading list is empty</h2>
          <p className="text-sm text-[var(--text-muted)] mb-6 leading-relaxed">
            Whenever you find a book you want to read later, tap the star icon (☆) on the book card to save it here.
          </p>
          <Link href="/" className="btn btn-primary text-sm font-bold">
            Browse All Books Now &rarr;
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {bookmarkedBooks.map(book => {
            const fileUrl = `/api/library/file/${book.id}`
            return (
              <div
                key={book.id}
                className="card flex flex-col justify-between bg-gradient-to-b from-[#07130C] via-[#050C08] to-black border-emerald-900/40 hover:border-emerald-500/60 transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] group"
              >
                <div>
                  <div className="h-32 rounded-[var(--radius-md)] bg-gradient-to-br from-[#0F2817] via-[#091A0F] to-black p-4 flex flex-col justify-between mb-3 border border-emerald-500/20">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-500/30">
                        {book.category?.split('&')[0]?.trim() || 'Book'}
                      </span>
                      <button
                        onClick={() => removeBookmark(book.id)}
                        className="text-amber-400 text-xl hover:scale-125 transition cursor-pointer drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]"
                        title="Remove bookmark"
                      >
                        ★
                      </button>
                    </div>

                    <p className="text-xs font-bold text-white line-clamp-2" title={book.title}>
                      {book.title}
                    </p>
                  </div>

                  <h3 className="font-bold text-sm text-[var(--text-primary)] group-hover:text-emerald-300 transition-colors line-clamp-2 mb-1" title={book.title}>
                    {book.title}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] truncate mb-4">
                    {book.author || 'Author info available'}
                  </p>
                </div>

                <div className="pt-3 border-t border-emerald-900/30 flex items-center justify-between gap-2">
                  <span className="text-[11px] font-semibold text-emerald-400/80">
                    {formatFileSize(book.fileSizeBytes)}
                  </span>

                  <div className="flex items-center gap-2">
                    <a
                      href={fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-emerald-400 hover:text-white p-1"
                      title="Open full tab"
                    >
                      ↗
                    </a>
                    <Link
                      href={`/library/read/${book.id}`}
                      className="btn btn-primary !px-3 !py-1 text-xs font-bold"
                    >
                      Read &rarr;
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
