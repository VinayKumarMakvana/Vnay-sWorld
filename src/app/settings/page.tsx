'use client'

import React, { useState, useEffect } from 'react'

export default function SettingsPage() {
  const [readingGoal, setReadingGoal] = useState('4')
  const [dailyTime, setDailyTime] = useState('30')
  const [defaultShelf, setDefaultShelf] = useState('ALL')
  const [defaultSort, setDefaultSort] = useState('title')
  const [savedToast, setSavedToast] = useState(false)

  useEffect(() => {
    const savedGoal = localStorage.getItem('vw_reading_goal')
    if (savedGoal) setReadingGoal(savedGoal)

    const savedDaily = localStorage.getItem('vw_daily_time')
    if (savedDaily) setDailyTime(savedDaily)

    const savedShelf = localStorage.getItem('vw_default_shelf')
    if (savedShelf) setDefaultShelf(savedShelf)

    const savedSort = localStorage.getItem('vw_default_sort')
    if (savedSort) setDefaultSort(savedSort)
  }, [])

  const saveSettings = () => {
    localStorage.setItem('vw_reading_goal', readingGoal)
    localStorage.setItem('vw_daily_time', dailyTime)
    localStorage.setItem('vw_default_shelf', defaultShelf)
    localStorage.setItem('vw_default_sort', defaultSort)
    setSavedToast(true)
    setTimeout(() => setSavedToast(false), 3000)
  }

  return (
    <div className="animate-fade-in flex flex-col gap-8 pb-16 max-w-4xl mx-auto">
      {/* Header */}
      <header className="border-b border-emerald-900/40 pb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-xs font-bold text-emerald-400 mb-2">
          <span>⚙️</span> Vinay's World • Library Preferences
        </div>
        <h1 className="brand-title-font gold-gradient-text text-2xl sm:text-4xl font-extrabold mb-2">
          Platform & Reading Settings
        </h1>
        <p className="text-[var(--text-muted)] text-base sm:text-lg">
          Configure your personal reading targets, default shelf, catalog sorting, and offline library experience.
        </p>
      </header>

      {savedToast && (
        <div className="bg-gradient-to-r from-emerald-600 to-amber-600 text-white px-5 py-3 rounded-[var(--radius-md)] shadow-lg flex items-center gap-3 font-semibold text-sm animate-fade-in border border-amber-400/30">
          <span>✅</span> Preferences saved successfully!
        </div>
      )}

      <div className="grid gap-6">
        {/* Fixed Identity & Theme Section */}
        <section className="card bg-gradient-to-br from-[#07140C] via-[#040B07] to-black border border-emerald-900/40 flex flex-col gap-4">
          <h2 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] border-b border-emerald-900/30 pb-3 flex items-center gap-2">
            <span>🎨</span> Fixed Brand Theme & Identity
          </h2>
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
            <div className="space-y-1">
              <h3 className="font-bold text-base text-emerald-300">
                Luxury Emerald & Gold • Pure OLED Black
              </h3>
              <p className="text-sm text-[var(--text-muted)] max-w-xl">
                The visual theme is permanently fixed to match the official Vinay's World emblem. Designed for zero-distraction, pure black battery efficiency, and eye-friendly night reading.
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="badge bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 text-xs px-3 py-1 font-bold">
                ✓ Fixed Theme
              </span>
              <span className="badge bg-amber-950/60 text-amber-300 border border-amber-500/40 text-xs px-3 py-1 font-bold">
                Pure OLED (#000000)
              </span>
            </div>
          </div>
        </section>

        {/* Reading Habits Section */}
        <section className="card bg-gradient-to-br from-[#07140C] via-[#040B07] to-black border border-emerald-900/40 flex flex-col gap-5">
          <h2 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] border-b border-emerald-900/30 pb-3 flex items-center gap-2">
            <span>🎯</span> Reading Targets & Goals
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-[var(--text-primary)] mb-1">
                Monthly Reading Target
              </label>
              <p className="text-xs text-[var(--text-muted)] mb-2">
                Number of books you aim to finish every month.
              </p>
              <select
                value={readingGoal}
                onChange={(e) => setReadingGoal(e.target.value)}
                className="w-full p-3 rounded-[var(--radius-md)] border border-emerald-900/50 bg-[#040805] text-[var(--text-primary)] outline-none focus:border-emerald-500"
              >
                <option value="1">1 Book / month (Casual reader)</option>
                <option value="2">2 Books / month (Steady growth)</option>
                <option value="4">4 Books / month (Dedicated reader - 1 book/week)</option>
                <option value="8">8 Books / month (Avid scholar - 2 books/week)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[var(--text-primary)] mb-1">
                Daily Focus Session
              </label>
              <p className="text-xs text-[var(--text-muted)] mb-2">
                Daily dedicated reading & study time.
              </p>
              <select
                value={dailyTime}
                onChange={(e) => setDailyTime(e.target.value)}
                className="w-full p-3 rounded-[var(--radius-md)] border border-emerald-900/50 bg-[#040805] text-[var(--text-primary)] outline-none focus:border-emerald-500"
              >
                <option value="15">15 Minutes (Micro-reading habit)</option>
                <option value="30">30 Minutes (Standard focus session)</option>
                <option value="45">45 Minutes (Deep study sprint)</option>
                <option value="60">60 Minutes (Deep reading immersion)</option>
              </select>
            </div>
          </div>
        </section>

        {/* Discovery & Shelves Preferences */}
        <section className="card bg-gradient-to-br from-[#07140C] via-[#040B07] to-black border border-emerald-900/40 flex flex-col gap-5">
          <h2 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] border-b border-emerald-900/30 pb-3 flex items-center gap-2">
            <span>📚</span> Library Default View
          </h2>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-[var(--text-primary)] mb-1">
                Default Home Shelf
              </label>
              <p className="text-xs text-[var(--text-muted)] mb-2">
                Select which collection opens by default on the home page.
              </p>
              <select
                value={defaultShelf}
                onChange={(e) => setDefaultShelf(e.target.value)}
                className="w-full p-3 rounded-[var(--radius-md)] border border-emerald-900/50 bg-[#040805] text-[var(--text-primary)] outline-none focus:border-emerald-500"
              >
                <option value="ALL">All Books (Complete 215 Library)</option>
                <option value="Fiction & Novels">Fiction & Novels (176 books)</option>
                <option value="Self-Development & Psychology">Self-Development & Psychology (12 books)</option>
                <option value="Communication & Influence">Communication & Influence (6 books)</option>
                <option value="Business & Leadership">Business & Leadership (7 books)</option>
                <option value="Philosophy & Wisdom">Philosophy & Wisdom (2 books)</option>
                <option value="English Language & Vocabulary">English Language & Vocabulary (5 books)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[var(--text-primary)] mb-1">
                Default Sorting Order
              </label>
              <p className="text-xs text-[var(--text-muted)] mb-2">
                Preferred catalog ordering on discovery screens.
              </p>
              <select
                value={defaultSort}
                onChange={(e) => setDefaultSort(e.target.value)}
                className="w-full p-3 rounded-[var(--radius-md)] border border-emerald-900/50 bg-[#040805] text-[var(--text-primary)] outline-none focus:border-emerald-500"
              >
                <option value="title">Book Title (A to Z)</option>
                <option value="author">Author Name</option>
                <option value="size">File Size (Largest)</option>
              </select>
            </div>
          </div>
        </section>

        {/* Library Info Card */}
        <section className="p-4 rounded-[var(--radius-lg)] bg-gradient-to-r from-emerald-950/40 to-amber-950/30 border border-emerald-500/20 text-xs text-[var(--text-muted)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="space-y-1">
            <p className="font-bold text-emerald-300 text-sm">Vinay's World Offline Library Status</p>
            <p className="text-[11px] text-emerald-400/80">
              Total Books: 230 • Engine: SQLite & In-Browser PDF Streaming • Status: Active & Operational
            </p>
          </div>
          <span className="badge bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 text-[10px] px-2.5 py-1 shrink-0">
            All 230 PDFs Ready
          </span>
        </section>

        {/* Save Bar */}
        <div className="flex justify-end pt-2">
          <button
            onClick={saveSettings}
            className="btn btn-primary px-8 py-3 text-sm font-bold shadow-md cursor-pointer"
          >
            Save All Preferences
          </button>
        </div>
      </div>
    </div>
  )
}
