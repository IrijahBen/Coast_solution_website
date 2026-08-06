"use client"

import Link from 'next/link'

interface FooterProps {
  onRequestDemo: () => void
}

export default function Footer({ onRequestDemo }: FooterProps) {
  return (
    <footer className="w-full bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1300px]">
        
        {/* Premium Dark CTA Anchor Block */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-slate-900 dark:bg-slate-900 rounded-3xl p-8 sm:p-12 mb-16 shadow-2xl relative overflow-hidden">
          {/* Subtle inner gradient to blend with the brand */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-transparent to-transparent pointer-events-none" />
          
          <div className="relative z-10 w-full md:w-2/3">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
              Ready to transform your operations?
            </h3>
            <p className="text-sm text-slate-400 mt-2.5 font-medium leading-relaxed max-w-lg">
              Stop guessing on stock and start scaling. Request a live demo today and get automated test credentials delivered directly to your inbox.
            </p>
          </div>
          
          <div className="relative z-10 shrink-0 w-full md:w-auto">
            <button 
              onClick={onRequestDemo}
              className="w-full md:w-auto inline-flex h-14 items-center justify-center rounded-xl bg-emerald-600 hover:bg-emerald-500 px-8 text-sm font-bold text-white shadow-xl shadow-emerald-900/20 transition-all hover:-translate-y-1 cursor-pointer"
            >
              Request Demo & Register →
            </button>
          </div>
        </div>

        {/* Premium SVG Infrastructure Badges */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 mb-16 pb-12 border-b border-slate-200/80 dark:border-slate-800/60">
          <span className="text-[10px] font-extrabold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase text-center sm:text-left mb-2 md:mb-0">
            Powered By:
          </span>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 transition-all hover:shadow-md">
              <div className="text-emerald-600 dark:text-emerald-400">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <span className="font-bold text-xs text-slate-700 dark:text-slate-300">Secure Cloud Sync</span>
            </div>

            <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 transition-all hover:shadow-md">
              <div className="text-emerald-600 dark:text-emerald-400">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="font-bold text-xs text-slate-700 dark:text-slate-300">Lightning POS Node</span>
            </div>

            <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 transition-all hover:shadow-md">
              <div className="text-emerald-600 dark:text-emerald-400">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <span className="font-bold text-xs text-slate-700 dark:text-slate-300">Multi-Branch Ledger</span>
            </div>
          </div>
        </div>

        {/* Structured Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-12 border-b border-slate-200/80 dark:border-slate-800/60">
          
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-white font-black text-sm shadow-md">C</div>
              <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white">COAST</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm font-medium">
              Unified business management tools, automated multi-branch inventory, and secure scaling infrastructure for modern enterprises.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-900 dark:text-white">Explore</h4>
            <ul className="space-y-3 text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400">
              <li><Link href="/products" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Platform Apps</Link></li>
              <li><Link href="/pricing" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Pricing Tiers</Link></li>
              <li><Link href="/solutions" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Solutions</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-900 dark:text-white">Learn</h4>
            <ul className="space-y-3 text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400">
              <li><Link href="/blog" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Blog & Guides</Link></li>
              <li><Link href="/resources" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Documentation</Link></li>
              <li><Link href="/story" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Our Story</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-900 dark:text-white">Get Started</h4>
            <ul className="space-y-3 text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400">
              <li><button onClick={onRequestDemo} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left">Register / Demo</button></li>
              <li><Link href="/contact" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Contact Support</Link></li>
            </ul>
          </div>

        </div>

        {/* Copyright & Legal */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-slate-500 font-semibold">
          <p>© 2026 Coast Solutions. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 sm:mt-0">
            <Link href="/privacy" className="hover:text-slate-800 dark:hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-800 dark:hover:text-slate-300 transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}