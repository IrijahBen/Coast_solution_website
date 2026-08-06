"use client"

import Link from 'next/link'
import { ReactNode, useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import RequestDemoModal from '@/components/RequestDemoModal'
import Footer from '@/components/Footer'

export default function MarketingLayout({ children }: { children: ReactNode }) {
  const [demoModalOpen, setDemoModalOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const pathname = usePathname()

  // Automatically close the mobile menu when the route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => { document.body.style.overflow = 'auto' }
  }, [mobileMenuOpen])

  return (
    <div className="relative min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 w-full max-w-[100vw] overflow-x-hidden">
      
      {/* Universal Navigation Bar */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] h-16 sm:h-20 flex items-center justify-between">
          
          {/* Left: Master Brand Logo */}
          <Link href="/" className="flex items-center transition-opacity hover:opacity-80 flex-shrink-0 relative z-50">
            <img 
              src="/coast.png" 
              alt="Coast Solutions" 
              className="h-9 sm:h-12 w-auto object-contain"
            />
          </Link>

          {/* Center: Desktop Navigation Links (Hidden on Mobile/Tablet) */}
          <nav className="hidden lg:flex items-center gap-1.5 text-sm font-semibold text-slate-700 dark:text-slate-200">
            
            {/* Products Dropdown */}
            <div className="relative group py-2">
              <Link href="/products" className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all font-semibold">
                Products
                <svg className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              <div className="absolute top-full left-0 w-72 pt-2 hidden group-hover:block z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200/80 dark:border-slate-800 p-3 space-y-1.5">
                  <button onClick={() => setDemoModalOpen(true)} className="w-full text-left block p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors cursor-pointer">
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-sm text-slate-900 dark:text-white">Coast BMS</p>
                      <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400">Live</span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Business Management Suite</p>
                  </button>

                  <Link href="/products" className="block p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors">
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-sm text-slate-900 dark:text-white">Coast LMS</p>
                      <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500">Waitlist</span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Learning Management System</p>
                  </Link>

                  <Link href="/products" className="block p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors">
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-sm text-slate-900 dark:text-white">Coast Forms</p>
                      <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500">Waitlist</span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Advanced Data Collection</p>
                  </Link>

                  <Link href="/products" className="block p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors">
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-sm text-slate-900 dark:text-white">Coast CV Builder</p>
                      <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500">Waitlist</span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Professional Career Suite</p>
                  </Link>

                  <Link href="/products" className="block p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors">
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-sm text-slate-900 dark:text-white">Coast Open Market</p>
                      <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500">Waitlist</span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">B2B Digital Marketplace</p>
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/solutions" className="px-3.5 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all">Solutions</Link>
            <Link href="/features" className="px-3.5 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all">Features</Link>
            <Link href="/pricing" className="px-3.5 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all">Pricing</Link>
            <Link href="/resources" className="px-3.5 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all">Resources</Link>
            <Link href="/blog" className="px-3.5 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all">Blog</Link>
            <Link href="/story" className="px-3.5 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all">About</Link>
            <Link href="/contact" className="px-3.5 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all">Contact</Link>

          </nav>

          {/* Right: Authentication Actions & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0 whitespace-nowrap relative z-50">
            {/* HIDDEN ON MOBILE */}
            <button 
              onClick={() => setDemoModalOpen(true)}
              className="hidden sm:block px-4 py-2.5 text-sm font-bold text-slate-900 dark:text-white hover:text-emerald-600 transition-colors cursor-pointer"
            >
              Log in
            </button>
            {/* SHRINKS ON MOBILE */}
            <button 
              onClick={() => setDemoModalOpen(true)}
              className="inline-flex h-9 sm:h-11 items-center justify-center rounded-full bg-emerald-600 px-4 sm:px-7 text-xs sm:text-sm font-bold text-white shadow-md transition-all hover:bg-emerald-500 hover:scale-105 cursor-pointer"
            >
              Request Demo
            </button>

            {/* Mobile Hamburger Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden ml-1 p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full h-[calc(100vh-4rem)] bg-white dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800/80 overflow-y-auto shadow-2xl animate-in slide-in-from-top-2">
            <div className="flex flex-col p-4 space-y-2">
              
              {/* Mobile Products Accordion */}
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 overflow-hidden">
                <button 
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  className="w-full flex items-center justify-between p-4 text-sm font-bold text-slate-900 dark:text-white"
                >
                  Products
                  <svg className={`h-4 w-4 transition-transform duration-200 ${mobileProductsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {mobileProductsOpen && (
                  <div className="px-4 pb-4 space-y-2">
                    <button 
                      onClick={() => { setDemoModalOpen(true); setMobileMenuOpen(false); }} 
                      className="w-full flex flex-col p-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-left hover:border-emerald-500/50 transition-colors"
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className="font-bold text-sm text-slate-900 dark:text-white">Coast BMS</span>
                        <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400">Live</span>
                      </div>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Business Management Suite</span>
                    </button>

                    {[
                      { name: 'Coast LMS', sub: 'Learning Management System' },
                      { name: 'Coast Forms', sub: 'Advanced Data Collection' },
                      { name: 'Coast CV Builder', sub: 'Professional Career Suite' },
                      { name: 'Coast Open Market', sub: 'B2B Digital Marketplace' }
                    ].map((app, i) => (
                      <Link 
                        key={i} 
                        href="/products" 
                        onClick={() => setMobileMenuOpen(false)}
                        className="w-full flex flex-col p-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-left hover:border-emerald-500/50 transition-colors"
                      >
                        <div className="flex items-center justify-between w-full">
                          <span className="font-bold text-sm text-slate-900 dark:text-white">{app.name}</span>
                          <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500">Waitlist</span>
                        </div>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">{app.sub}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Standard Mobile Links */}
              {[
                { name: 'Solutions', href: '/solutions' },
                { name: 'Features', href: '/features' },
                { name: 'Pricing', href: '/pricing' },
                { name: 'Resources', href: '/resources' },
                { name: 'Blog', href: '/blog' },
                { name: 'About', href: '/story' },
                { name: 'Contact', href: '/contact' }
              ].map((link, idx) => (
                <Link 
                  key={idx} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center w-full p-4 rounded-2xl font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Only Auth Buttons (To catch users who couldn't see "Log in" up top) */}
              <div className="pt-4 pb-12 space-y-3 border-t border-slate-200 dark:border-slate-800 mt-4 px-2">
                <button 
                  onClick={() => { setDemoModalOpen(true); setMobileMenuOpen(false); }}
                  className="w-full h-12 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-sm flex items-center justify-center border border-slate-200 dark:border-slate-800"
                >
                  Log In to Dashboard
                </button>
                <button 
                  onClick={() => { setDemoModalOpen(true); setMobileMenuOpen(false); }}
                  className="w-full h-12 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center shadow-lg"
                >
                  Request Demo Credentials
                </button>
              </div>

            </div>
          </div>
        )}
      </header>

      {/* Main Page Content wrapper locked to 100vw */}
      <main className="flex-1 w-full max-w-[100vw] overflow-x-hidden relative z-0">
        {children}
      </main>

      {/* Global Dark Footer Automatically Rendered on All Pages */}
      <Footer onRequestDemo={() => setDemoModalOpen(true)} />

      {/* Global Demo Request Modal */}
      <RequestDemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />

    </div>
  )
}