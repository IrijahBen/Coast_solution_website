"use client"

import { useState } from 'react'
import Link from 'next/link'
import RequestDemoModal from '@/components/RequestDemoModal'

const masterFeatures = [
  {
    title: 'Lightning-Fast Point of Sale (POS)',
    category: 'Checkout Engine',
    description: 'Designed for high-concurrency retail environments where speed matters. Process cash, card, and digital transfer payments instantly while printing thermal receipts without lag.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    capabilities: [
      'Zero-latency checkout terminal interface',
      'Instant receipt formatting and auto-printing support',
      'Multi-gateway payment collection (Cash, Card, Transfer)'
    ]
  },
  {
    title: 'Offline-First Synchronization',
    category: 'Architecture & Reliability',
    description: 'Never let internet downtime disrupt your store operations. Coast BMS features built-in offline failover protection, queueing transactions locally and syncing automatically once reconnected.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    capabilities: [
      'Uninterrupted checkout during network outages',
      'Local transaction queuing and encrypted caching',
      'Automatic background reconciliation upon reconnection'
    ]
  },
  {
    title: 'Multi-Branch Inventory Ledger',
    category: 'Stock Management',
    description: 'Oversee warehouses and storefronts simultaneously from a single master database. Receive automated stock-level warnings and manage branch-to-branch transfers seamlessly.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    capabilities: [
      'Centralized SKU and product variant database',
      'Automated low-threshold reorder alerts',
      'Real-time stock transfer audits across locations'
    ]
  },
  {
    title: 'Bank-Grade Role Security & Audits',
    category: 'Security & Control',
    description: 'Protect your store revenue from internal leakage. Assign granular permissions to cashiers and store managers while maintaining immutable audit logs for every cash drawer action.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    capabilities: [
      'Granular Role-Based Access Control (RBAC)',
      'Timestamped audit logs for refunds and discounts',
      'Restricted cash drawer opening approvals'
    ]
  },
  {
    title: 'Actionable Business Intelligence',
    category: 'Analytics Engine',
    description: 'Stop waiting for monthly accountant summaries. Monitor daily cash flows, top-performing products, and employee sales performance in live visual dashboards.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
    capabilities: [
      'Live daily, weekly, and monthly revenue summaries',
      'Top-performing SKU and profit margin breakdown',
      'Employee shift performance scorecards'
    ]
  },
  {
    title: 'Unified Ecosystem Integration',
    category: 'Platform Synergy',
    description: 'No clumsy third-party plugins required. Coast connects your POS inventory, learning modules, customer forms, and resumes into a single unified workspace under one login.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    capabilities: [
      'Single Sign-On (SSO) across all Coast applications',
      'Direct data piping from customer forms into stock ledgers',
      'Scalable cloud infrastructure with automated backups'
    ]
  }
]

export default function FeaturesPage() {
  const [demoModalOpen, setDemoModalOpen] = useState(false)

  return (
    <div className="relative flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 overflow-hidden selection:bg-emerald-500 selection:text-white pb-24">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[450px] bg-gradient-to-b from-emerald-500/10 via-emerald-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center space-y-5 mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-extrabold uppercase tracking-widest border border-emerald-500/20 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Enterprise Capabilities
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            Powerful features built for <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">seamless business operations.</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
            Explore the advanced engineering specifications and robust tooling that make Coast BMS the operating system of choice for modern multi-branch enterprises.
          </p>
        </div>

        {/* Features Grid */}
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-28 relative z-10">
          {masterFeatures.map((feat, idx) => (
            <div 
              key={idx}
              className="group rounded-3xl p-8 border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl hover:shadow-2xl hover:border-emerald-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Subtle hover gradient inside card */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 space-y-5">
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-sm border border-slate-200 dark:border-slate-700 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                    {feat.icon}
                  </div>
                  <span className="text-[9px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                    {feat.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    {feat.description}
                  </p>
                </div>

                <div className="space-y-3 pt-5 border-t border-slate-100 dark:border-slate-800/80">
                  <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Highlights</p>
                  {feat.capabilities.map((cap, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-3 text-xs font-semibold text-slate-700 dark:text-slate-300">
                      <div className="h-4 w-4 rounded-full bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-900 transition-colors">
                        <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="leading-relaxed">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Premium Dark CTA Anchor Block */}
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 bg-slate-900 dark:bg-slate-900 rounded-3xl p-8 sm:p-14 shadow-2xl relative overflow-hidden z-10">
          {/* Subtle inner gradient to blend with the brand */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-transparent to-transparent pointer-events-none" />
          
          <div className="relative z-10 w-full md:w-2/3 text-center md:text-left">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Experience these features in action.
            </h3>
            <p className="text-sm sm:text-base text-slate-400 mt-3 font-medium leading-relaxed max-w-lg mx-auto md:mx-0">
              Launch Coast BMS today and take complete control of your store registers, inventory pipelines, and staff permissions.
            </p>
          </div>
          
          <div className="relative z-10 shrink-0 w-full md:w-auto flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => setDemoModalOpen(true)}
              className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-xl bg-emerald-600 hover:bg-emerald-500 px-8 text-sm font-bold text-white shadow-xl shadow-emerald-900/20 transition-all hover:-translate-y-1 cursor-pointer"
            >
              Request Demo & Register →
            </button>
            <Link 
              href="/pricing" 
              className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-xl bg-transparent hover:bg-white/10 border border-slate-700 px-8 text-sm font-bold text-white transition-all cursor-pointer"
            >
              View Pricing Tiers
            </Link>
          </div>
        </div>

      </div>

      {/* Global Demo Request Modal */}
      <RequestDemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />

    </div>
  )
}