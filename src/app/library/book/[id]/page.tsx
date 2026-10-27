'use client'

import React, { useState, useEffect, Suspense } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'

function BookDetail() {
  const params = useParams() as { id: string }
  const [book, setBook] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [isBookmarked, setIsBookmarked] = useState(false)

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await fetch(`/api/library/metadata/${params.id}`)
        const data = await res.json()
        setBook(data.book)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchBook()

    try {
      const saved = localStorage.getItem('user_book_bookmarks')
      if (saved) {
        const parsed = JSON.parse(saved)
        setIsBookmarked(parsed.includes(params.id))
      }
    } catch (e) {
      console.error(e)
    }
  }, [params.id])

  const toggleBookmark = () => {
    try {
      const saved = localStorage.getItem('user_book_bookmarks')
      const parsed: string[] = saved ? JSON.parse(saved) : []
      let updated: string[]
      if (parsed.includes(params.id)) {
        updated = parsed.filter(b => b !== params.id)
        setIsBookmarked(false)
      } else {
        updated = [...parsed, params.id]
        setIsBookmarked(true)
      }
      localStorage.setItem('user_book_bookmarks', JSON.stringify(updated))
    } catch (e) {
      console.error(e)
    }
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="w-10 h-10 border-4 border-[var(--color-primary-accent)] border-t-transparent rounded-full animate-spin mb-3"></div>
        <p className="text-sm text-[var(--text-muted)] font-medium">Loading book details...</p>
      </div>
    )
  }

  if (!book) {
    return (
      <div className="p-12 text-center card max-w-lg mx-auto">
        <h2 className="heading-section text-[var(--color-error)] mb-2">Book Not Found</h2>
        <p className="text-sm text-[var(--text-muted)] mb-6">This book could not be found in your library.</p>
        <Link href="/" className="btn btn-primary text-sm">
          &larr; Return to Library
        </Link>
      </div>
    )
  }

  const fileUrl = `/api/library/file/${book.id}`
  const formatFileSize = (bytes?: number | null) => {
    if (!bytes) return '1.5 MB'
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
  }

  return (
    <div className="animate-fade-in flex flex-col gap-8 pb-16 max-w-4xl mx-auto">
      {/* Top Breadcrumb */}
      <div className="flex justify-between items-center">
        <Link href="/" className="btn btn-secondary !px-3 !py-1.5 text-xs font-semibold">
          &larr; Back to Library
        </Link>
        <button
          onClick={toggleBookmark}
          className={`btn !px-3 !py-1.5 text-xs font-semibold cursor-pointer border ${
            isBookmarked
              ? 'bg-amber-500 text-white border-amber-500'
              : 'btn-secondary'
          }`}
        >
          {isBookmarked ? '★ Bookmarked' : '☆ Add to Bookmarks'}
        </button>
      </div>

      {/* Main Book Profile Card */}
      <div className="card bg-gradient-to-br from-[#07140C] via-[#040B07] to-black border border-emerald-900/40 p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row gap-8 items-start">
          {/* Aesthetic Book Cover */}
          <div className="w-full sm:w-56 h-72 rounded-[var(--radius-lg)] bg-gradient-to-br from-[#0F2817] via-[#091A0F] to-black p-6 flex flex-col justify-between shrink-0 border border-emerald-500/30 shadow-xl">
            <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 self-start">
              {book.category?.split('&')[0]?.trim() || 'Book'}
            </span>
            <div>
              <p className="text-base font-black text-white line-clamp-3 leading-snug drop-shadow-md">
                {book.title}
              </p>
              <p className="text-xs text-emerald-300/80 truncate mt-1">
                {book.author || 'Original Edition'}
              </p>
            </div>
          </div>

          {/* Details */}
          <div className="flex-1 flex flex-col justify-between h-full space-y-5">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="badge bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 font-bold">
                  {book.category}
                </span>
                <span className="badge bg-[#060D08] text-emerald-400/80 border border-emerald-900/40 font-bold">
                  {book.fileType.toUpperCase()}
                </span>
              </div>

              <h1 className="brand-title-font gold-gradient-text text-2xl sm:text-3xl font-black leading-tight mb-2">
                {book.title}
              </h1>
              <p className="text-base text-emerald-400/80 font-medium mb-4">
                By {book.author || 'Author info in book'}
              </p>

              <div className="text-sm text-[var(--text-primary)]/80 leading-relaxed space-y-2">
                <p>
                  {book.shortDescription || "Full original edition ready for distraction-free reading, offline viewing, and study in Vinay's World digital library."}
                </p>
              </div>
            </div>

            {/* Read Actions */}
            <div className="pt-4 border-t border-emerald-900/30 flex flex-wrap items-center gap-3">
              <Link 
                href={`/library/read/${book.id}`}
                className="btn btn-primary px-8 py-3 text-sm font-bold shadow-md"
              >
                📖 Start Reading Now
              </Link>

              <a
                href={fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary px-4 py-3 text-sm font-semibold"
              >
                ↗ Open Full Screen PDF
              </a>

              <a
                href={fileUrl}
                download
                className="btn btn-secondary px-4 py-3 text-sm font-semibold"
              >
                ⬇ Download ({formatFileSize(book.fileSizeBytes)})
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Book Metadata Facts */}
      <div className="card bg-gradient-to-br from-[#07140C] via-[#040B07] to-black border border-emerald-900/40 p-6">
        <h3 className="font-bold text-sm text-emerald-400 uppercase tracking-wider mb-4 border-b border-emerald-900/30 pb-2">
          File & Publication Information
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
          <div>
            <span className="text-[var(--text-muted)] block mb-1">Format</span>
            <span className="font-bold text-[var(--text-primary)]">{book.fileType.toUpperCase()} Document</span>
          </div>
          <div>
            <span className="text-[var(--text-muted)] block mb-1">File Size</span>
            <span className="font-bold text-[var(--text-primary)]">{formatFileSize(book.fileSizeBytes)}</span>
          </div>
          <div>
            <span className="text-[var(--text-muted)] block mb-1">Language</span>
            <span className="font-bold text-[var(--text-primary)]">{book.language || 'English'}</span>
          </div>
          <div>
            <span className="text-[var(--text-muted)] block mb-1">Library Status</span>
            <span className="font-bold text-emerald-400">Ready to Read</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function BookDetailPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-[var(--text-muted)]">Loading book profile...</div>}>
      <BookDetail />
    </Suspense>
  )
}
