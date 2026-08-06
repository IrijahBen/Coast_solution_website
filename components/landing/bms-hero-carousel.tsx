'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { ArrowRight, CheckCircle2, Store, BarChart3, Users, PackageCheck, Layers } from 'lucide-react'

const AUTOPLAY_MS = 5500

const bmsFeatures = [
  {
    key: 'pos',
    step: 'MODULE 01',
    category: 'Point of Sale',
    title: 'Lightning-Fast Checkout',
    subtitle: 'Process retail orders & issue digital receipts instantly',
    badge: 'Active Register',
    badgeColor: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
    metric1Label: 'Daily Sales',
        metric1Val: '₦485,000',
    metric2Label: 'Items Sold',
    metric2Val: '142 pcs',
    metric3Label: 'Status',
    metric3Val: 'Online',
    highlightTitle: 'Quick Sale Metrics',
    highlightDesc: 'Synchronizes cash, transfer, and card payments directly with your inventory ledger in real time.',
    icon: Store,
    cta: { label: 'Launch POS Terminal', href: 'https://coast-bms.vercel.app' },
    hint: 'Instant offline sync enabled'
  },
  {
    key: 'inventory',
    step: 'MODULE 02',
    category: 'Inventory & Stock',
    title: 'Automated Stock Alerts',
    subtitle: 'Never run out of fast-moving products again',
    badge: 'Live Tracking',
    badgeColor: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
    metric1Label: 'Total SKUs',
    metric1Val: '1,240',
    metric2Label: 'Low Stock',
    metric2Val: '3 items',
    metric3Label: 'Warehouses',
    metric3Val: '4 active',
    highlightTitle: 'Smart Reordering',
    highlightDesc: 'Tracks item thresholds across multiple locations and flags inventory requiring immediate restocking.',
    icon: PackageCheck,
    cta: { label: 'Manage Inventory', href: 'https://coast-bms.vercel.app' },
    hint: 'Multi-branch centralization active'
  },
  {
    key: 'analytics',
    step: 'MODULE 03',
    category: 'Business Intelligence',
    title: 'Real-Time Financial Reports',
    subtitle: 'Deep dive into profit margins and top commodities',
    badge: 'Live Analytics',
    badgeColor: 'bg-teal-500/10 text-teal-600 border-teal-500/20',
    metric1Label: 'Net Profit',
    metric1Val: '₦1.8M',
    metric2Label: 'Growth',
    metric2Val: '+24.5%',
    metric3Label: 'Margin',
    metric3Val: '32.1%',
    highlightTitle: 'Executive Dashboard',
    highlightDesc: 'Instant visual summaries of daily revenue, employee shift performance, and branch profitability.',
    icon: BarChart3,
    cta: { label: 'View Reports', href: 'https://coast-bms.vercel.app' },
    hint: 'Exportable to CSV and PDF'
  },
  {
    key: 'staff',
    step: 'MODULE 04',
    category: 'Team Management',
    title: 'Role-Based Permissions',
    subtitle: 'Control who accesses cash registers and store records',
    badge: 'Secure Access',
    badgeColor: 'bg-purple-500/10 text-purple-600 border-purple-500/20',
    metric1Label: 'Managers',
    metric1Val: '4 active',
    metric2Label: 'Cashiers',
    metric2Val: '12 active',
    metric3Label: 'Audit Logs',
    metric3Val: '100% secure',
    highlightTitle: 'Granular Security',
    highlightDesc: 'Restrict refunds, discounts, and inventory adjustments to authorized supervisors only.',
    icon: Users,
    cta: { label: 'Configure Staff', href: 'https://coast-bms.vercel.app' },
    hint: 'Immutable activity audit trail'
  }
]

function BmsSlide({ item }: { item: typeof bmsFeatures[0] }) {
  const IconComponent = item.icon
  return (
    <article className="mx-auto w-full max-w-sm rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-xl">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 flex items-center gap-1.5">
          <IconComponent className="h-3.5 w-3.5" />
          {item.step}
        </span>
        <Badge variant="secondary" className={cn('text-[11px] font-semibold border', item.badgeColor)}>
          {item.badge}
        </Badge>
      </div>

      <div className="mb-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {item.category}
        </p>
        <h4 className="text-base font-bold text-slate-900 dark:text-white leading-snug mt-0.5">{item.title}</h4>
        <p className="text-xs text-muted-foreground mt-0.5">{item.subtitle}</p>
      </div>

      {/* Mini Metric Grid */}
      <div className="mb-4 grid grid-cols-3 gap-2">
        <div className="rounded-xl bg-slate-50 dark:bg-slate-800/50 p-2.5 text-center border border-slate-100 dark:border-slate-800">
          <p className="text-[10px] text-muted-foreground">{item.metric1Label}</p>
          <p className="mt-0.5 text-xs font-bold tabular-nums text-slate-900 dark:text-white">{item.metric1Val}</p>
        </div>
        <div className="rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 p-2.5 text-center border border-emerald-100 dark:border-emerald-950/30">
          <p className="text-[10px] text-emerald-600 dark:text-emerald-400">{item.metric2Label}</p>
          <p className="mt-0.5 text-xs font-bold tabular-nums text-emerald-700 dark:text-emerald-300">{item.metric2Val}</p>
        </div>
        <div className="rounded-xl bg-slate-50 dark:bg-slate-800/50 p-2.5 text-center border border-slate-100 dark:border-slate-800">
          <p className="text-[10px] text-muted-foreground">{item.metric3Label}</p>
          <p className="mt-0.5 text-xs font-bold tabular-nums text-slate-900 dark:text-white">{item.metric3Val}</p>
        </div>
      </div>

      {/* Highlight Box */}
      <div className="mb-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 p-3">
        <div className="flex items-start gap-2">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
          <div>
            <p className="text-xs font-bold text-slate-900 dark:text-white">{item.highlightTitle}</p>
            <p className="text-[11px] text-muted-foreground leading-snug mt-0.5">{item.highlightDesc}</p>
          </div>
        </div>
      </div>

      <Button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl shadow-md" size="sm" asChild>
        <Link href={item.cta.href}>
          {item.cta.label}
          <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
        </Link>
      </Button>

      <div className="mt-2.5 flex items-center justify-center gap-1.5 text-[10px] text-muted-foreground">
        <Layers className="h-3 w-3 shrink-0 text-emerald-600" aria-hidden />
        {item.hint}
      </div>
    </article>
  )
}

export function BmsHeroCarousel() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) return
    const onSelect = () => setCurrent(api.selectedScrollSnap())
    onSelect()
    api.on('reInit', onSelect)
    api.on('select', onSelect)
    return () => {
      api.off('select', onSelect)
      api.off('reInit', onSelect)
    }
  }, [api])

  React.useEffect(() => {
    if (!api) return
    const id = window.setInterval(() => {
      api.scrollNext()
    }, AUTOPLAY_MS)
    return () => window.clearInterval(id)
  }, [api])

  return (
    <div className="w-full max-w-sm shrink-0">
      <p className="mb-3 text-center text-[11px] font-bold uppercase tracking-wider text-emerald-300/80">
        Live System Functionalities
      </p>

      <Carousel
        opts={{ loop: true, align: 'start' }}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent className="-ml-0">
          {bmsFeatures.map((item) => (
            <CarouselItem key={item.key} className="basis-full pl-0">
              <BmsSlide item={item} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="mt-4 flex justify-center">
          <div className="flex items-center justify-center gap-1.5 px-1">
            {bmsFeatures.map((item, i) => (
              <button
                key={item.key}
                type="button"
                aria-label={`Show feature: ${item.title}`}
                aria-current={current === i ? 'true' : undefined}
                onClick={() => api?.scrollTo(i)}
                className={cn(
                  'h-2 rounded-full transition-[width,background-color] duration-300 ease-out',
                  current === i
                    ? 'w-7 bg-emerald-400'
                    : 'w-2 bg-white/30 hover:bg-white/50',
                )}
              />
            ))}
          </div>
        </div>
      </Carousel>

      <p className="mt-3 text-center text-[11px] text-emerald-100/70">
        Coast BMS · Production Ready v2.0
      </p>
    </div>
  )
}