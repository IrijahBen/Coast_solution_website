"use client"

import { useState } from 'react'
import Link from 'next/link'

const bmsPricingPlans = [
  {
    name: 'Basic',
    iconBadge: '🏪',
    description: 'Perfect for a single small shop just getting started with retail automation.',
    monthlyUsd: '$7.50',
    yearlyUsd: '$6.00',
    monthlyNgn: '₦10,000',
    yearlyNgn: '₦8,000',
    billedYearly: 'Billed $72 yearly (~₦98,000)',
    features: [
      'Max 2 Users (1 Admin, 1 Cashier)',
      '1 Branch Location',
      '5GB Cloud Storage',
      'Basic POS & Receipt Printing',
      'Standard Offline Sync Protection'
    ],
    popular: false
  },
  {
    name: 'Growth',
    iconBadge: '📈',
    description: 'Designed for growing retail businesses expanding to a second location.',
    monthlyUsd: '$22.00',
    yearlyUsd: '$18.00',
    monthlyNgn: '₦30,000',
    yearlyNgn: '₦24,000',
    billedYearly: 'Billed $216 yearly (~₦294,000)',
    features: [
      'Max 4 Users (Admin, 1 Mgr, 2 Cashiers)',
      'Up to 2 Branch Locations',
      '25GB Cloud Storage',
      'Automated Low-Stock Threshold Alerts',
      'Branch-to-Branch Stock Transfers'
    ],
    popular: false
  },
  {
    name: 'Professional',
    iconBadge: '🏢',
    description: 'Advanced setup and multi-branch control for scaling retail operations.',
    monthlyUsd: '$55.00',
    yearlyUsd: '$44.00',
    monthlyNgn: '₦75,000',
    yearlyNgn: '₦60,000',
    billedYearly: 'Billed $528 yearly (~₦720,000)',
    features: [
      'Max 12 Users (Admin, Mgrs, 8 Cashiers)',
      'Up to 4 Branch Locations',
      '75GB Cloud Storage',
      'Advanced Business Analytics Dashboard',
      'Granular Staff Role Permissions & Audit Logs'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    iconBadge: '👑',
    description: 'Complete unlocked access, dedicated priority support, and high-concurrency outlets.',
    monthlyUsd: '$110.00',
    yearlyUsd: '$88.00',
    monthlyNgn: '₦150,000',
    yearlyNgn: '₦120,000',
    billedYearly: 'Billed $1,056 yearly (~₦1,440,000)',
    features: [
      'Unlimited Users & Custom Roles',
      'Up to 10 Branch Locations',
      '250GB Cloud Storage',
      'Priority 24/7 Dedicated Support',
      'All Enterprise Features Completely Unlocked'
    ],
    popular: false
  }
]

const comparisonFeatures = [
  { feature: 'Branch Locations', basic: '1 Branch', growth: 'Up to 2', professional: 'Up to 4', enterprise: 'Up to 10' },
  { feature: 'User Accounts', basic: '2 Users', growth: '4 Users', professional: '12 Users', enterprise: 'Unlimited' },
  { feature: 'Cloud Storage', basic: '5GB', growth: '25GB', professional: '75GB', enterprise: '250GB' },
  { feature: 'Offline Sync', basic: 'Included', growth: 'Included', professional: 'Included', enterprise: 'Included' },
  { feature: 'Audit Logs', basic: '—', growth: 'Basic', professional: 'Advanced', enterprise: 'Full Immutable' },
  { feature: 'Support Level', basic: 'Standard', growth: 'Standard', professional: 'Priority', enterprise: 'Dedicated 24/7' },
]

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const pricingFaqs = [
    {
      q: 'Can I switch between monthly and yearly billing?',
      a: 'Yes, you can toggle or upgrade your billing preference anytime from your management dashboard. Yearly plans include an automatic 20% discount.'
    },
    {
      q: 'What happens if my internet connection drops during checkout?',
      a: 'Coast BMS features built-in offline synchronization protection. Your cashier terminals continue processing sales without interruption, syncing automatically once reconnected.'
    },
    {
      q: 'Are there any hidden installation or setup fees?',
      a: 'Zero hidden fees. All subscription tiers include cloud deployment, automated backups, and software updates out of the box.'
    },
    {
      q: 'Can I add more branch locations later?',
      a: 'Absolutely. As your business grows, you can seamlessly upgrade your tier to unlock additional store locations and staff accounts.'
    }
  ]

  return (
    <div className="relative flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 overflow-hidden selection:bg-emerald-500 selection:text-white">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[450px] bg-gradient-to-b from-emerald-500/10 via-emerald-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
        
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest border border-emerald-500/20 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Transparent Value Model
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            Predictable pricing for <br />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">every stage of growth.</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Avoid ballooning legacy software invoices. Choose the Coast BMS plan that fits your branch count and team size with zero hidden fees.
          </p>

          {/* Billing Toggle */}
          <div className="pt-8 flex justify-center">
            <div className="inline-flex p-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl items-center">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-slate-900 text-white shadow-md dark:bg-slate-100 dark:text-slate-900'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                Monthly Billing
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${
                  billingCycle === 'yearly'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                <span>Yearly Billing</span>
                <span className="px-2 py-0.5 rounded-full bg-white/20 text-white text-[9px] font-black uppercase tracking-wider">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-24">
          {bmsPricingPlans.map((plan, pIdx) => (
            <div 
              key={pIdx}
              className={`rounded-3xl p-7 border-2 transition-all duration-300 flex flex-col justify-between relative bg-white dark:bg-slate-900 shadow-xl ${
                plan.popular 
                  ? 'border-emerald-600 shadow-2xl scale-[1.03] ring-4 ring-emerald-500/10' 
                  : 'border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-emerald-600 text-white text-[10px] font-black uppercase tracking-wider shadow-lg shadow-emerald-950/20">
                  ✨ MOST POPULAR
                </span>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{plan.name}</h3>
                  <span className="h-10 w-10 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-xl shadow-inner border border-slate-100 dark:border-slate-700">
                    {plan.iconBadge}
                  </span>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-6 h-12">
                  {plan.description}
                </p>

                <div className="mb-1 flex items-baseline gap-1">
                  <span className="text-3xl font-black text-slate-900 dark:text-white font-mono tracking-tight">
                    {billingCycle === 'yearly' ? plan.yearlyUsd : plan.monthlyUsd}
                  </span>
                  <span className="text-xs text-slate-400 font-semibold">/mo</span>
                </div>

                <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-2 font-mono">
                  Eqv. {billingCycle === 'yearly' ? plan.yearlyNgn : plan.monthlyNgn}/mo
                </div>

                <p className="text-[11px] font-semibold text-slate-400 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                  {billingCycle === 'yearly' ? plan.billedYearly : 'Billed monthly'}
                </p>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs font-medium text-slate-700 dark:text-slate-300">
                      <div className="h-4 w-4 rounded-full bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                        <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="leading-tight">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link 
                href="https://coast-bms.vercel.app"
                target="_blank"
                className={`w-full py-3.5 rounded-xl font-bold text-xs text-center shadow-md transition-all flex items-center justify-center gap-1.5 ${
                  plan.popular
                    ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-900/20 hover:scale-[1.02]'
                    : 'bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-800 dark:hover:bg-slate-700 hover:scale-[1.02]'
                }`}
              >
                Get Started →
              </Link>
            </div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="max-w-[1100px] mx-auto w-full mb-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Compare Plan Specifications</h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm mt-2">A granular look at what is included across each subscription tier.</p>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200/80 dark:border-slate-800 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60">
                    <th className="p-5 text-xs font-bold uppercase tracking-wider text-slate-400">Specification</th>
                    <th className="p-5 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">Basic</th>
                    <th className="p-5 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">Growth</th>
                    <th className="p-5 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Professional</th>
                    <th className="p-5 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-xs sm:text-sm font-medium">
                  {comparisonFeatures.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="p-5 font-bold text-slate-800 dark:text-slate-200">{row.feature}</td>
                      <td className="p-5 text-slate-600 dark:text-slate-400">{row.basic}</td>
                      <td className="p-5 text-slate-600 dark:text-slate-400">{row.growth}</td>
                      <td className="p-5 font-bold text-emerald-600 dark:text-emerald-400">{row.professional}</td>
                      <td className="p-5 text-slate-600 dark:text-slate-400">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Pricing FAQs */}
        <div className="max-w-[900px] mx-auto w-full mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Pricing & Billing FAQs</h2>
          </div>
          <div className="space-y-4">
            {pricingFaqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div key={index} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-sm">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full text-left p-6 font-bold text-base text-slate-900 dark:text-white flex items-center justify-between gap-4"
                  >
                    <span>{faq.q}</span>
                    <span className={`h-8 w-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-emerald-600 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 bg-emerald-50 dark:bg-emerald-950' : ''}`}>
                      ↓
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 text-slate-600 dark:text-slate-300 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-800 mt-2 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </div>
  )
}