"use client"

import Link from 'next/link'

const milestoneStats = [
  { label: 'Platform Uptime', value: '99.99%', desc: 'Cloud-native redundancy' },
  { label: 'Sync Latency', value: '< 1s', desc: 'Real-time register updates' },
  { label: 'Data Security', value: 'Bank-Grade', desc: 'Immutable audit logging' },
  { label: 'Ecosystem Suite', value: '5 Apps', desc: 'Unified workspace architecture' }
]

const corePillars = [
  {
    badge: 'MISSION & VISION',
    title: 'Eradicating operational friction for modern commerce',
    description: 'We built Coast because growing businesses shouldn’t have to compromise between clunky legacy desktop applications and disjointed spreadsheets. Our unified suite connects operations, inventory, and analytics under a single login.',
    iconSvg: (
      <svg className="h-6 w-6 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    badge: 'ARCHITECTURE & SPEED',
    title: 'Engineered for absolute reliability and offline protection',
    description: 'Retail and distribution networks never sleep, and neither should your software. With offline-first synchronization queues, your cashiers process register sales seamlessly even during unexpected internet outages.',
    iconSvg: (
      <svg className="h-6 w-6 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    badge: 'CUSTOMER CENTRIC',
    title: 'Built by data experts and engineers for real-world operators',
    description: 'Every capability in Coast BMS is driven by actual operational challenges faced by store managers, cashiers, and multi-branch owners. We prioritize strict data integrity, role security, and instantaneous reporting.',
    iconSvg: (
      <svg className="h-6 w-6 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  }
]

export default function StoryPage() {
  return (
    <div className="relative flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 overflow-hidden selection:bg-emerald-500 selection:text-white">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[450px] bg-gradient-to-b from-emerald-500/10 via-emerald-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
        
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest border border-emerald-500/20 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Our Story & Core Philosophy
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            Building the operating system for <br />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">modern enterprise commerce.</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Coast was founded with a singular mission: to eliminate fragmented spreadsheets and bloated legacy software, empowering businesses with lightning-fast unified tools.
          </p>
        </div>

        {/* Live Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto mb-24">
          {milestoneStats.map((stat, idx) => (
            <div key={idx} className="rounded-3xl p-6 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none text-center space-y-1">
              <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">{stat.label}</p>
              <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-mono tracking-tight">{stat.value}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{stat.desc}</p>
            </div>
          ))}
        </div>

        {/* Detailed Core Pillars Layout */}
        <div className="max-w-6xl mx-auto space-y-12 mb-24">
          {corePillars.map((pillar, idx) => (
            <div 
              key={idx}
              className="rounded-3xl p-8 sm:p-12 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xl shadow-slate-200/50 dark:shadow-none grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-7 space-y-4">
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-500/20">
                  {pillar.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="h-24 w-24 sm:h-32 sm:w-32 rounded-3xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-900/50 flex items-center justify-center shadow-inner">
                  <div className="scale-150">
                    {pillar.iconSvg}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Conversion Banner */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-emerald-950 text-white p-10 sm:p-16 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/40 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Ready to experience the Coast ecosystem?</h2>
            <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
              Launch Coast BMS right now and discover how seamless multi-branch retail management and offline synchronization can accelerate your enterprise.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="https://coast-bms.vercel.app" 
                target="_blank"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-xl shadow-emerald-950/50 transition-all hover:scale-105"
              >
                Launch Coast BMS →
              </Link>
              <Link 
                href="/contact" 
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent hover:bg-white/10 text-white border border-emerald-500/30 font-bold text-sm transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}