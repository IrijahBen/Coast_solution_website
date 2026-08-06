"use client"

import { useState } from 'react'

interface RequestDemoModalProps {
  isOpen: boolean
  onClose: () => void
  mode?: 'demo' | 'waitlist'
  appName?: string
}

export default function RequestDemoModal({ 
  isOpen, 
  onClose, 
  mode = 'demo', 
  appName = 'Coast BMS' 
}: RequestDemoModalProps) {
  const [email, setEmail] = useState('')
  const [fullName, setFullName] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [submitted, setSubmitted] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Save registration/demo request to localStorage for Admin Dashboard
    const newRequest = {
      id: Date.now(),
      fullName,
      email,
      companyName,
      appName,
      requestType: mode,
      // Fixed: year must be 'numeric', not a number like 2026
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    }
    const existing = JSON.parse(localStorage.getItem('coast_demo_requests') || '[]')
    localStorage.setItem('coast_demo_requests', JSON.stringify([newRequest, ...existing]))

    setSubmitted(true)
  }

  const handleResetAndClose = () => {
    setSubmitted(false)
    setEmail('')
    setFullName('')
    setCompanyName('')
    onClose()
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="max-w-md w-full bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-200 dark:border-slate-800 relative space-y-6">
        
        <button 
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 h-8 w-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 font-bold text-xs hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
        >
          ✕
        </button>

        <div className="space-y-2 text-center">
          <span className={`text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border ${
            mode === 'demo' 
              ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20' 
              : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20'
          }`}>
            {mode === 'demo' ? 'Account Registration & Demo' : 'Priority Waitlist'}
          </span>
          <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
            {mode === 'demo' ? `Register for ${appName}` : `Join ${appName} Waitlist`}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            {mode === 'demo' 
              ? 'Submit your details to register your workspace and receive instant test credentials.'
              : 'Secure your spot in the early access beta queue. We\'ll notify you as soon as deployment begins.'
            }
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-6 space-y-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-2xl border border-emerald-200 dark:border-emerald-900 p-6">
            <div className="h-12 w-12 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xl mx-auto shadow-md animate-bounce">
              ✓
            </div>
            
            {mode === 'demo' ? (
              <>
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">Registration Dispatched!</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    We sent automated test credentials to <strong className="text-emerald-600 dark:text-emerald-400">{email}</strong> and logged your account in the admin dashboard.
                  </p>
                </div>
              </>
            ) : (
              <div className="space-y-1 pb-2">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">You're on the list!</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  We've securely reserved your priority spot for <strong className="text-emerald-600 dark:text-emerald-400">{appName}</strong>. We will contact {email} soon.
                </p>
              </div>
            )}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">Full Name</label>
              <input 
                type="text" 
                required
                placeholder="Enter your names"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full h-11 px-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">Work Email Address</label>
              <input 
                type="email" 
                required
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-11 px-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">Business / Store Name</label>
              <input 
                type="text" 
                required
                placeholder="Coast Retail Hub"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full h-11 px-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <button 
              type="submit"
              className={`w-full h-12 rounded-xl text-white font-bold text-xs shadow-lg transition-all mt-2 cursor-pointer ${
                mode === 'demo' 
                  ? 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-900/20' 
                  : 'bg-slate-900 hover:bg-slate-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 shadow-slate-900/10'
              }`}
            >
              {mode === 'demo' ? 'Complete Registration & Request Demo →' : 'Reserve My Priority Spot →'}
            </button>
          </form>
        )}

      </div>
    </div>
  )
}