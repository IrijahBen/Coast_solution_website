"use client"

import { useState } from 'react'

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'General Inquiry', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  // Pre-filled half-composed email link
  const emailMailtoLink = "mailto:abayomiajiboye46111@gmail.com?subject=Inquiry%20Regarding%20Coast%20Solutions&body=Hi%20Ajiboye,%0D%0A%0D%0AI%20would%20like%20to%20inquire%20about%20Coast%20BMS%20and%20ecosystem%20solutions.%0D%0A%0D%0APlease%20get%20back%20to%20me."

  // WhatsApp tap-to-chat link (+234 809 850 7180)
  const whatsappChatLink = "https://wa.me/2348098507180?text=Hello%20Coast%20Team,%20I%20would%20like%20to%20inquire%20about%20your%20solutions."

  return (
    <div className="relative flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 overflow-hidden selection:bg-emerald-500 selection:text-white">
      
      {/* Background Ambient Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-emerald-500/10 via-emerald-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full flex-1 flex flex-col justify-center">
        
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest border border-emerald-500/20 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Connect With Us
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            Let's talk about your <br />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">growth & operations.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
            Reach out instantly via WhatsApp or direct mail, or send us a detailed dispatch through our secure portal.
          </p>
        </div>

        {/* Main Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto w-full">
          
          {/* Left Column: Direct Action & Channel Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Card */}
            <div className="group rounded-3xl p-7 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none hover:border-emerald-500/50 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />
              
              <div className="flex items-start gap-4 mb-6">
                <div className="h-14 w-14 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 flex items-center justify-center text-3xl shadow-inner shrink-0 border border-emerald-200 dark:border-emerald-900">
                  💬
                </div>
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-wider mb-1">
                    Instant Response
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">WhatsApp Tap-to-Chat</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">📱 0809 850 7180</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                Connect directly with our engineering and support desk on WhatsApp for fast, real-time query resolution.
              </p>

              <a 
                href={whatsappChatLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-12 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-900/20 transition-all flex items-center justify-center gap-2 group-hover:translate-y-[-1px]"
              >
                Start WhatsApp Chat 
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            {/* Email Card */}
            <div className="group rounded-3xl p-7 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none hover:border-emerald-500/50 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-500/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />
              
              <div className="flex items-start gap-4 mb-6">
                <div className="h-14 w-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-3xl shadow-inner shrink-0 border border-slate-200 dark:border-slate-700">
                  ✉️
                </div>
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-bold uppercase tracking-wider mb-1">
                    Direct Mail
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Email Support & Sales</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5 break-all">📧 abayomiajiboye46111@gmail.com</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                Launch your native mail client with our pre-composed inquiry template ready to send instantly.
              </p>

              <a 
                href={emailMailtoLink}
                className="w-full h-12 rounded-xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-800 dark:hover:bg-slate-700 font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 group-hover:translate-y-[-1px]"
              >
                Compose & Send Mail 
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

          </div>

          {/* Right Column: Secure Dispatch Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-8 sm:p-10 shadow-2xl shadow-slate-200/50 dark:shadow-none relative">
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Send a Secure Message</h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Fill out the dispatch form below and our technical desk will review your inquiry.
                </p>
              </div>

              {formSubmitted ? (
                <div className="text-center py-16 space-y-4 bg-emerald-50/50 dark:bg-emerald-950/20 rounded-2xl border border-emerald-200/60 dark:border-emerald-900/50">
                  <div className="h-16 w-16 bg-emerald-500 text-white rounded-full flex items-center justify-center text-2xl mx-auto shadow-lg shadow-emerald-900/20 animate-bounce">
                    ✓
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white">Dispatch Successful!</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out, <strong className="text-slate-900 dark:text-white">{formData.name}</strong>. Your message has been logged and our team will respond shortly.
                  </p>
                  <button 
                    onClick={() => {
                      setFormSubmitted(false)
                      setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' })
                    }}
                    className="mt-4 px-6 py-3 rounded-xl bg-slate-900 dark:bg-slate-800 text-white font-bold text-xs shadow-md hover:bg-slate-800 transition-all"
                  >
                    Send Another Dispatch
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">Your Name</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Enter your names" 
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full h-12 px-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">Email Address</label>
                      <input 
                        type="email" 
                        required
                        placeholder="you@example.com" 
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full h-12 px-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">Inquiry Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full h-12 px-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    >
                      <option value="General Inquiry">General Inquiry & Support</option>
                      <option value="Coast BMS Sales">Coast BMS Enterprise Licensing</option>
                      <option value="Partner Ecosystem">Ecosystem Waitlist & Partnerships</option>
                      <option value="Technical Integration">API & Custom Integrations</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">Message / Requirements</label>
                    <textarea 
                      required
                      rows={4}
                      placeholder="Describe your operational requirements or questions..." 
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none transition-all"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full h-14 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl shadow-emerald-900/20 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                  >
                    <span>Submit Secure Dispatch</span>
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  )
}