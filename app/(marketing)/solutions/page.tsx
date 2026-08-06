"use client"

import Link from 'next/link'

const solutionSectors = [
  {
    title: 'Multi-Branch Retail Chains',
    tagline: 'Synchronize inventory and POS registers across all store locations in real time.',
    description: 'Eliminate stock discrepancies and pricing errors between your main warehouse and multiple retail outlets. Coast BMS keeps every register and stockroom connected with lightning-fast cloud synchronization and offline fallback protection.',
    benefits: [
      'Real-time inventory visibility across 1 to 50+ store locations',
      'Unified SKU database with automated low-stock reorder alerts',
      'Centralized head-office dashboard for daily revenue tracking'
    ],
    badge: 'Retail Operations'
  },
  {
    title: 'Wholesale & Distribution Hubs',
    tagline: 'Secure B2B commerce, supplier directories, and ledger management.',
    description: 'Manage high-volume distribution networks seamlessly. Track warehouse dispatches, record customer credit orders securely, and leverage milestone-gated workflows to protect operating capital.',
    benefits: [
      'Comprehensive customer credit and transaction ledger tracking',
      'Automated stock deduction upon invoice dispatch or POS sale',
      'Granular staff permission controls to eliminate internal leakage'
    ],
    badge: 'Distribution & Supply'
  },
  {
    title: 'Growing Enterprises & SMEs',
    tagline: 'Enterprise-grade software power without the bloated legacy implementation overhead.',
    description: 'Stop juggling disconnected spreadsheets and broken third-party plugins. Coast provides a unified ecosystem where business management, learning modules, and data collection forms operate under a single login.',
    benefits: [
      'Single sign-on across all current and upcoming Coast apps',
      '5-minute cloud deployment with zero local server infrastructure needed',
      'Predictable, transparent subscription pricing tailored to your scale'
    ],
    badge: 'Enterprise Growth'
  }
]

export default function SolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 py-16 px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center space-y-4 mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-500/20">
          Tailored Business Solutions
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
          Engineered for your exact <br />
          <span className="text-emerald-600 dark:text-emerald-400">operational workflow.</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Discover how businesses across retail, wholesale, and multi-branch distribution utilize the Coast ecosystem to automate processes and accelerate revenue.
        </p>
      </div>

      {/* Solutions Cards Grid */}
      <div className="max-w-[1200px] mx-auto space-y-12 mb-24">
        {solutionSectors.map((solution, idx) => (
          <div 
            key={idx}
            className="rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
                {solution.badge}
              </span>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                {solution.title}
              </h3>
              <p className="text-base font-semibold text-emerald-600 dark:text-emerald-400">
                {solution.tagline}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {solution.description}
              </p>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800 space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Key Advantages:</p>
              {solution.benefits.map((benefit, bIdx) => (
                <div key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                  <div className="h-5 w-5 rounded-full bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="leading-tight">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto rounded-3xl bg-emerald-950 text-white p-10 sm:p-14 text-center space-y-6 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/40 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Ready to streamline your operations?</h2>
          <p className="text-emerald-100/80 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Launch Coast BMS today and experience seamless multi-branch management.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="https://coast-bms.vercel.app" 
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg transition-all"
            >
              Launch Coast BMS →
            </Link>
            <Link 
              href="/contact" 
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-transparent hover:bg-white/10 text-white border border-emerald-500/30 font-bold text-sm transition-all"
            >
              Contact Sales Team
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}