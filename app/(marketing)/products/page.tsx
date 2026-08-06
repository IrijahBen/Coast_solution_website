"use client"

import { useState } from 'react'
import Link from 'next/link'

const ecosystemProducts = [
  {
    id: 'bms',
    name: 'Coast BMS',
    category: 'Business Management Suite',
    status: 'Live Platform',
    statusBadgeColor: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    tagline: 'The core operating system for modern multi-branch retail and distribution businesses.',
    description: 'Process lightning-fast point of sale transactions, monitor multi-warehouse inventory in real time, and audit employee shifts with bank-grade security across all store registers.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    features: [
      'Instant checkout POS terminal with offline sync protection',
      'Centralized multi-branch inventory tracking & automated low-stock alerts',
      'Granular staff permission roles and immutable register audit logs'
    ],
    ctaLabel: 'Request Live Demo',
    isLive: true,
    featured: true,
    stats: [
      { label: 'Sync Speed', value: '< 1s' },
      { label: 'Branch Support', value: 'Unlimited' }
    ]
  },
  {
    id: 'lms',
    name: 'Coast LMS',
    category: 'Education & Training',
    status: 'Waitlist Open',
    statusBadgeColor: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
    tagline: 'Structured training and onboarding modules designed to scale workforce competency.',
    description: 'Build immersive learning modules, track employee or student progress with real-time completion analytics, and automatically issue verifiable digital certificates.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    features: [
      'Drag-and-drop course and video lesson builder',
      'Individual scorecards and completion analytics dashboard',
      'Custom certificate templates and verifiable credential hashing'
    ],
    ctaLabel: 'Join LMS Waitlist',
    isLive: false,
    featured: false,
    stats: [
      { label: 'Setup Time', value: '2 mins' },
      { label: 'Certifications', value: 'Automated' }
    ]
  },
  {
    id: 'forms',
    name: 'Coast Forms',
    category: 'Advanced Data Collection',
    status: 'Waitlist Open',
    statusBadgeColor: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
    tagline: 'Custom surveys, intake applications, and feedback collection workflows.',
    description: 'Design dynamic surveys with conditional logic branching, custom styling, and live submission aggregation dashboards that feed directly into your business database.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    features: [
      'Advanced conditional logic paths and multi-page form flows',
      'Real-time aggregation charts and sentiment breakdown',
      'Instant webhook triggers to sync responses with your BMS database'
    ],
    ctaLabel: 'Join Forms Waitlist',
    isLive: false,
    featured: false,
    stats: [
      { label: 'Logic Builder', value: 'Conditional' },
      { label: 'Exports', value: '1-Click CSV' }
    ]
  },
  {
    id: 'cv',
    name: 'Coast CV Builder',
    category: 'Professional Career Suite',
    status: 'Waitlist Open',
    statusBadgeColor: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
    tagline: 'ATS-optimized resume creation and career profile management.',
    description: 'Stand out with recruiter-approved layouts engineered to pass Applicant Tracking Systems (ATS) with flying colors, paired with built-in AI writing assistance.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
      </svg>
    ),
    features: [
      '15+ recruiter-approved, strict ATS-parsable templates',
      'Industry-specific achievement and action-verb generator',
      'High-resolution PDF export with matching cover letters'
    ],
    ctaLabel: 'Join CV Waitlist',
    isLive: false,
    featured: false,
    stats: [
      { label: 'ATS Pass Rate', value: '98%' },
      { label: 'Formats', value: 'PDF / DOCX' }
    ]
  },
  {
    id: 'market',
    name: 'Coast Open Market',
    category: 'B2B Digital Marketplace',
    status: 'Waitlist Open',
    statusBadgeColor: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
    tagline: 'Connecting verified manufacturers and distributors through secure milestone commerce.',
    description: 'Browse a vetted directory of wholesale suppliers with capital protected by tranche-based milestone escrow and live freight tracking from factory to warehouse.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    features: [
      'Top-tier verified manufacturer directory and quotation engine',
      'Milestone-gated escrow security for cross-border wholesale orders',
      'Live freight carrier tracking and digital bill-of-lading storage'
    ],
    ctaLabel: 'Join Market Waitlist',
    isLive: false,
    featured: false,
    stats: [
      { label: 'Security', value: 'Escrow Backed' },
      { label: 'Verification', value: '100% Vetted' }
    ]
  }
]

const productCategories = ['All Ecosystem Apps', 'Live Platform', 'Waitlist Open']

export default function ProductsPage() {
  const [selectedFilter, setSelectedFilter] = useState('All Ecosystem Apps')
  const [modalMode, setModalMode] = useState<'demo' | 'waitlist'>('waitlist')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedTargetName, setSelectedTargetName] = useState('')
  
  // Form fields
  const [email, setEmail] = useState('')
  const [fullName, setFullName] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState(false)

  const filteredProducts = ecosystemProducts.filter(product => {
    if (selectedFilter === 'Live Platform') return product.status === 'Live Platform'
    if (selectedFilter === 'Waitlist Open') return product.status === 'Waitlist Open'
    return true
  })

  const handleCtaClick = (product: typeof ecosystemProducts[0]) => {
    setSelectedTargetName(product.name)
    if (product.isLive) {
      setModalMode('demo')
    } else {
      setModalMode('waitlist')
    }
    setIsModalOpen(true)
    setSuccessMessage(false)
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      if (modalMode === 'waitlist') {
        // Send to waitlist API
        await fetch('/api/waitlist', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ app: selectedTargetName, email })
        })
      } else {
        // Send to demo request endpoint
        await fetch('/api/demo', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ fullName, email, companyName })
        })
      }

      setSuccessMessage(true)
      setTimeout(() => {
        setSuccessMessage(false)
        setIsModalOpen(false)
        setEmail('')
        setFullName('')
        setCompanyName('')
      }, 2500)
    } catch (error) {
      console.error("Submission failed", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 w-full max-w-[100vw] overflow-x-hidden selection:bg-emerald-500 selection:text-white pb-20">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[500px] bg-gradient-to-b from-emerald-500/10 via-emerald-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
        
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center space-y-5 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-extrabold uppercase tracking-widest border border-emerald-500/20 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            The Coast Ecosystem Suite
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            Unified applications built for <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">modern enterprise scale.</span>
          </h1>
          <p className="text-sm sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
            Explore our complete ecosystem of 5 specialized tools designed to connect sales, operations, education, commerce, and growth into a single unified workspace.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-16 w-full">
          {productCategories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedFilter(cat)}
              className={`px-5 sm:px-6 py-2.5 rounded-full text-[11px] sm:text-xs font-bold transition-all duration-300 border ${
                selectedFilter === cat
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-md scale-105'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-800 hover:border-emerald-500/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-28">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className={`group rounded-3xl p-6 sm:p-10 border transition-all duration-500 flex flex-col justify-between bg-white dark:bg-slate-900 relative shadow-xl hover:shadow-2xl hover:-translate-y-1 overflow-hidden ${
                product.featured 
                  ? 'border-emerald-600/80 lg:col-span-2 ring-4 ring-emerald-500/10 bg-gradient-to-br from-white via-white to-emerald-50/20 dark:from-slate-900 dark:via-slate-900 dark:to-emerald-950/20' 
                  : 'border-slate-200/80 dark:border-slate-800 hover:border-emerald-500/40'
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${product.featured ? 'opacity-100 from-emerald-500/10 via-transparent' : ''}`} />

              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-sm border border-emerald-100 dark:border-emerald-900/30 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                      {product.icon}
                    </div>
                    <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                      {product.category}
                    </span>
                  </div>
                  <span className={`inline-flex items-center text-[9px] sm:text-[10px] font-black px-3 py-1.5 rounded-full border tracking-wider uppercase shadow-sm whitespace-nowrap w-fit ${product.statusBadgeColor}`}>
                    {product.status}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                  {product.name}
                </h3>

                <p className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-4 leading-relaxed">
                  {product.tagline}
                </p>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-8 font-medium">
                  {product.description}
                </p>

                {/* Stats Bar */}
                <div className="grid grid-cols-2 gap-3 mb-8 p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800/80">
                  {product.stats.map((stat, sIdx) => (
                    <div key={sIdx}>
                      <p className="text-[9px] sm:text-[10px] uppercase font-extrabold text-slate-400 tracking-wider mb-1">{stat.label}</p>
                      <p className="text-base sm:text-lg font-black text-slate-900 dark:text-white font-mono">{stat.value}</p>
                    </div>
                  ))}
                </div>

                {/* Core Features */}
                <div className="space-y-3.5 mb-10 pt-5 border-t border-slate-100 dark:border-slate-800">
                  <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Key Capabilities</p>
                  {product.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                      <div className="h-5 w-5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-900 transition-colors">
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 mt-auto">
                <button 
                  onClick={() => handleCtaClick(product)}
                  className={`w-full py-4 rounded-xl font-bold text-xs sm:text-sm text-center shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    product.featured
                      ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-900/20 hover:scale-[1.02]'
                      : 'bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-800 dark:hover:bg-slate-700 hover:scale-[1.02]'
                  }`}
                >
                  {product.ctaLabel}
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Unified Differentiated Request / Waitlist Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="max-w-md w-full bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-200 dark:border-slate-800 relative space-y-6">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 h-8 w-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 font-bold text-xs hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            >
              ✕
            </button>

            {/* Modal Header dynamically changes based on mode */}
            <div className="space-y-2 text-center">
              <span className={`text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border ${
                modalMode === 'demo' ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20' : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20'
              }`}>
                {modalMode === 'demo' ? 'Live Platform Access' : 'Priority Waitlist'}
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                {modalMode === 'demo' ? `Request Demo for ${selectedTargetName}` : `Join Waitlist for ${selectedTargetName}`}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                {modalMode === 'demo' 
                  ? 'Fill out your details below to receive automated test credentials instantly.' 
                  : 'Secure your priority spot in our beta queue. We will notify you upon launch.'}
              </p>
            </div>

            {successMessage ? (
              <div className="text-center py-6 space-y-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-2xl border border-emerald-200 dark:border-emerald-900 p-6">
                <div className="h-12 w-12 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xl mx-auto shadow-md animate-bounce">
                  ✓
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    {modalMode === 'demo' ? 'Demo Request Received!' : "You're on the list!"}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    {modalMode === 'demo' 
                      ? 'Check your inbox for your test credentials.' 
                      : `Your spot for ${selectedTargetName} has been routed to our database.`}
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                {modalMode === 'demo' && (
                  <>
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">Full Name</label>
                      <input 
                        type="text" 
                        required
                        placeholder="John Doe"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full h-12 px-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">Company / Store Name</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Acme Retail Ltd"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="w-full h-12 px-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                  </>
                )}

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">Work Email Address</label>
                  <input 
                    type="email" 
                    required
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-12 px-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full h-12 rounded-xl text-white font-bold text-xs shadow-lg transition-all mt-2 flex justify-center items-center gap-2 ${
                    isSubmitting ? 'bg-slate-400 dark:bg-slate-600 cursor-wait' : 'bg-emerald-600 hover:bg-emerald-500 cursor-pointer shadow-emerald-900/20'
                  }`}
                >
                  {isSubmitting 
                    ? 'Processing...' 
                    : modalMode === 'demo' 
                      ? 'Submit Demo Request →' 
                      : 'Reserve My Priority Spot →'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  )
}