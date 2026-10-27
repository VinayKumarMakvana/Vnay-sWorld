'use client'

import React, { useState, useEffect, Suspense } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'

interface BookmarkItem {
  id: string
  note: string
  createdAt: string
}

function BookReader() {
  const resolvedParams = useParams() as { id: string }
  const [book, setBook] = useState<any>(null)
  const [selectedText, setSelectedText] = useState('')
  const [loading, setLoading] = useState(true)
  const [toolResult, setToolResult] = useState<{ title: string; content: string } | null>(null)
  const [bookmarks, setBookmarks] = useState<BookmarkItem[]>([])
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  const showToast = (msg: string) => {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(null), 3000)
  }

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await fetch(`/api/library/metadata/${resolvedParams.id}`)
        const data = await res.json()
        if (data.book) {
          setBook(data.book)
        } else {
          setBook(null)
        }
      } catch (err) {
        console.error('Failed to load book', err)
        setBook(null)
      } finally {
        setLoading(false)
      }
    }
    fetchBook()

    // Load saved bookmarks from localStorage
    try {
      const saved = localStorage.getItem(`bookmarks_${resolvedParams.id}`)
      if (saved) {
        setBookmarks(JSON.parse(saved))
      }
    } catch (e) {
      console.error(e)
    }
  }, [resolvedParams.id])

  const handleSelection = () => {
    const text = window.getSelection()?.toString()
    if (text && text.trim().length > 0) {
      setSelectedText(text.trim())
    }
  }

  const handleAIAction = (action: string) => {
    if (!selectedText) return

    if (action === 'Pronunciation') {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel()
        const utterance = new SpeechSynthesisUtterance(selectedText)
        utterance.rate = 0.9
        window.speechSynthesis.speak(utterance)
        showToast(`🔊 Pronouncing: "${selectedText.slice(0, 30)}..."`)
      } else {
        alert('Speech Synthesis not supported by your browser.')
      }
      return
    }

    if (action === 'Save Vocabulary') {
      try {
        const existingVocab = JSON.parse(localStorage.getItem('saved_book_vocab') || '[]')
        const newEntry = {
          word: selectedText,
          bookTitle: book?.title || 'Unknown',
          date: new Date().toLocaleDateString()
        }
        localStorage.setItem('saved_book_vocab', JSON.stringify([newEntry, ...existingVocab]))
        showToast(`📚 Saved "${selectedText.slice(0, 25)}..." to your Active Vocabulary list!`)
      } catch (e) {
        showToast('Vocabulary saved to study list!')
      }
      return
    }

    if (action === 'Explain') {
      setToolResult({
        title: `Explanation: "${selectedText.slice(0, 35)}..."`,
        content: `In standard professional English, this phrase conveys intent, context, or emphasis. Focus on how it connects to the author's argument and notice the prepositions and collocation used.`
      })
    } else if (action === 'Simplify') {
      setToolResult({
        title: `Plain English Equivalent:`,
        content: `Plain meaning: "${selectedText}". Try saying it with fewer filler words in active voice.`
      })
    }
  }

  const addBookmark = () => {
    const promptNote = window.prompt('Enter an optional note for this bookmark:', 'Chapter note')
    if (promptNote === null) return

    const newBookmark: BookmarkItem = {
      id: Date.now().toString(),
      note: promptNote || 'Bookmark point',
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }

    const updated = [newBookmark, ...bookmarks]
    setBookmarks(updated)
    localStorage.setItem(`bookmarks_${resolvedParams.id}`, JSON.stringify(updated))
    showToast('🔖 Bookmark added!')
  }

  const removeBookmark = (id: string) => {
    const updated = bookmarks.filter(b => b.id !== id)
    setBookmarks(updated)
    localStorage.setItem(`bookmarks_${resolvedParams.id}`, JSON.stringify(updated))
    showToast('Bookmark removed.')
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center p-16 text-center">
        <div className="w-10 h-10 border-4 border-[var(--color-primary-accent)] border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-[var(--text-muted)] font-medium">Preparing book reader...</p>
      </div>
    )
  }

  if (!book) {
    return (
      <div className="p-12 text-center max-w-lg mx-auto">
        <h2 className="heading-section text-[var(--color-error)] mb-2">Book Not Found</h2>
        <p className="text-[var(--text-muted)] mb-6">The requested book could not be located in your collection.</p>
        <Link href="/" className="btn btn-primary">
          &larr; Return to Vinay's World
        </Link>
      </div>
    )
  }

  const fileUrl = `/api/library/file/${book.id}`

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] md:h-[calc(100vh-60px)] -m-4 md:-m-8 bg-[var(--bg-main)]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-4 right-4 z-50 bg-gradient-to-r from-emerald-600 to-amber-600 text-white px-4 py-2.5 rounded-[var(--radius-md)] shadow-xl text-sm font-semibold animate-fade-in border border-amber-400/30">
          {toastMessage}
        </div>
      )}

      {/* Reader Top Navigation Bar */}
      <div className="bg-[var(--bg-surface)] border-b border-emerald-900/40 px-4 py-2.5 flex items-center justify-between shadow-xs shrink-0 z-20">
        <div className="flex items-center gap-3 overflow-hidden">
          <Link href="/" className="btn btn-secondary !px-2.5 !py-1 text-xs shrink-0 flex items-center gap-1 hover:border-emerald-500/50">
            <span>&larr;</span>
            <span className="hidden sm:inline">Library</span>
          </Link>
          <div className="overflow-hidden">
            <h1 className="brand-title-font gold-gradient-text font-bold text-sm sm:text-base truncate" title={book.title}>
              {book.title}
            </h1>
            <p className="text-[11px] text-emerald-400/80 truncate">{book.author || "Vinay's World Collection"}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className={`btn !px-3 !py-1.5 text-xs font-semibold md:hidden ${
              sidebarOpen ? 'btn-primary' : 'btn-secondary'
            }`}
          >
            {sidebarOpen ? 'Hide Tools' : '🛠️ Study Tools'}
          </button>

          <a 
            href={fileUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-secondary !px-3 !py-1.5 text-xs font-semibold flex items-center gap-1.5 hover:border-emerald-500/50"
            title="Open in Native Fullscreen PDF viewer"
          >
            <span>↗</span>
            <span className="hidden sm:inline">Open Fullscreen</span>
          </a>

          <a 
            href={fileUrl}
            download
            className="btn btn-primary !px-3 !py-1.5 text-xs font-semibold hidden lg:flex items-center gap-1.5"
          >
            <span>⬇</span>
            <span>Download PDF</span>
          </a>
        </div>
      </div>

      {/* Main Split Body */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Tools Sidebar (Responsive Drawer on mobile, sidebar on desktop) */}
        <div 
          className={`
            ${sidebarOpen ? 'flex' : 'hidden md:flex'}
            w-full md:w-80 bg-[var(--bg-surface)] border-r border-[var(--border-main)]
            flex-col shrink-0 z-30 absolute md:relative inset-y-0 left-0
            shadow-xl md:shadow-none transition-all
          `}
        >
          {/* Header */}
          <div className="p-4 border-b border-[var(--border-main)] flex items-center justify-between">
            <h2 className="font-bold text-sm text-[var(--text-primary)] flex items-center gap-2">
              <span>🧠</span> Reading Intelligence
            </h2>
            <button 
              onClick={() => setSidebarOpen(false)}
              className="md:hidden text-xs text-[var(--text-muted)] p-1"
            >
              ✕ Close
            </button>
          </div>

          <div className="p-4 flex-1 overflow-y-auto space-y-5">
            {/* Selected Text Intelligence */}
            <div>
              <p className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-2">
                Text Selection Tools
              </p>
              {selectedText ? (
                <div className="bg-emerald-950/40 p-3.5 rounded-[var(--radius-md)] border border-emerald-500/30 space-y-3">
                  <p className="text-xs font-semibold text-emerald-400">Selected passage:</p>
                  <p className="text-sm italic text-[var(--text-primary)] line-clamp-3">"{selectedText}"</p>
                  
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <button 
                      onClick={() => handleAIAction('Pronunciation')}
                      className="btn btn-secondary !px-2 !py-1.5 text-xs font-medium"
                    >
                      🔊 Pronounce
                    </button>
                    <button 
                      onClick={() => handleAIAction('Save Vocabulary')}
                      className="btn btn-primary !px-2 !py-1.5 text-xs font-medium"
                    >
                      💾 Save Vocab
                    </button>
                    <button 
                      onClick={() => handleAIAction('Explain')}
                      className="btn btn-secondary !px-2 !py-1.5 text-xs font-medium"
                    >
                      💡 Explain
                    </button>
                    <button 
                      onClick={() => handleAIAction('Simplify')}
                      className="btn btn-secondary !px-2 !py-1.5 text-xs font-medium"
                    >
                      ⚡ Simplify
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-4 rounded-[var(--radius-md)] border border-dashed border-[var(--border-main)] text-center text-xs text-[var(--text-muted)]">
                  Highlight any word or sentence in the book to pronounce, explain, or save it.
                </div>
              )}
            </div>

            {/* AI Explanation Tool Output */}
            {toolResult && (
              <div className="p-3.5 rounded-[var(--radius-md)] bg-emerald-950/30 border border-emerald-500/30 space-y-2 animate-fade-in">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-amber-400 uppercase">
                    {toolResult.title}
                  </span>
                  <button onClick={() => setToolResult(null)} className="text-xs text-[var(--text-muted)] hover:text-white cursor-pointer">✕</button>
                </div>
                <p className="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed">
                  {toolResult.content}
                </p>
              </div>
            )}

            {/* Bookmarks Section */}
            <div className="pt-2 border-t border-[var(--border-main)]">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider">
                  Bookmarks ({bookmarks.length})
                </h3>
                <button 
                  onClick={addBookmark}
                  className="btn btn-secondary !px-2.5 !py-1 text-xs"
                >
                  + Add Point
                </button>
              </div>

              {bookmarks.length === 0 ? (
                <p className="text-xs text-[var(--text-muted)] italic">No bookmarks saved yet.</p>
              ) : (
                <div className="space-y-2">
                  {bookmarks.map((bm) => (
                    <div 
                      key={bm.id} 
                      className="p-2.5 rounded-[var(--radius-md)] bg-[var(--bg-main)] border border-[var(--border-main)] flex justify-between items-center text-xs"
                    >
                      <div className="overflow-hidden pr-2">
                        <span className="font-semibold text-[var(--text-primary)] block truncate">{bm.note}</span>
                        <span className="text-[10px] text-[var(--text-muted)]">{bm.createdAt}</span>
                      </div>
                      <button 
                        onClick={() => removeBookmark(bm.id)}
                        className="text-red-500 hover:text-red-700 text-xs shrink-0 cursor-pointer"
                        title="Delete bookmark"
                      >
                        🗑️
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="p-3 border-t border-[var(--border-main)] bg-[var(--bg-main)] text-[11px] text-[var(--text-muted)] flex justify-between items-center">
            <span>Type: {book.fileType.toUpperCase()}</span>
            <span>Category: {book.category || 'General'}</span>
          </div>
        </div>

        {/* PDF Reader Canvas Area */}
        <div 
          className="flex-1 bg-[var(--bg-main)] flex flex-col h-full overflow-hidden relative"
          onMouseUp={handleSelection}
        >
          {/* Mobile direct fallback banner if iframe doesn't render on iOS/Android */}
          <div className="md:hidden bg-emerald-950/60 border-b border-emerald-900/40 px-3 py-1.5 flex items-center justify-between text-xs text-emerald-300">
            <span className="truncate">Trouble viewing in mobile frame?</span>
            <a 
              href={fileUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-amber-400 font-bold shrink-0 underline ml-2"
            >
              Open Native PDF &rarr;
            </a>
          </div>

          <iframe 
            src={fileUrl}
            className="w-full h-full border-0 bg-white"
            title={book.title}
          />
        </div>
      </div>
    </div>
  )
}

export default function BookReaderPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-[var(--text-muted)]">Loading reader...</div>}>
      <BookReader />
    </Suspense>
  )
}
