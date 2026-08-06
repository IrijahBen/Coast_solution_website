"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { BmsHeroCarousel } from '@/components/landing/bms-hero-carousel'
import RequestDemoModal from '@/components/RequestDemoModal'

// The 5 active Coast Ecosystem Apps
const ecosystemApps = [
  {
    id: 'bms',
    name: 'Coast BMS',
    status: 'live',
    badge: 'LIVE PLATFORM',
    tagline: 'Business Management Suite',
    description: 'The core operating system for modern multi-branch retail and distribution businesses.',
    steps: [
      {
        id: '01',
        title: 'Point of Sale (POS)',
        subtitle: 'Fast retail checkout & receipts',
        badge: 'Active Register',
        tagline: 'Lightning-fast checkout. Zero lag.',
        desc: 'Process cash, card, and transfer payments seamlessly while updating your inventory ledger in real time across all store registers.',
        checks: ['Instant receipt generation & printing', 'Offline sync protection', 'Multi-payment gateway support'],
        ctaLabel: 'Request Demo',
        ctaHref: '#demo',
        trust: 'Live production environment',
        preview: {
          header: 'ACTIVE REGISTER',
          sub: 'Main Branch · Cashier #1',
          status: 'Online',
          stat1Label: 'Daily Revenue',
          stat1Val: '₦485,000',
          stat2Label: 'Items Processed',
          stat2Val: '142 units',
          buttonText: 'Open Terminal →'
        }
      },
      {
        id: '02',
        title: 'Multi-Branch Inventory',
        subtitle: 'Centralized stock & warehouse tracking',
        badge: 'Live Stock',
        tagline: 'Stop guessing on stock. Always know what you have.',
        desc: 'Manage inventory levels across multiple warehouses and storefronts simultaneously. Get automated alerts when fast-moving items run low.',
        checks: ['Centralized SKU database', 'Automated low-stock threshold alerts', 'Branch-to-branch stock transfers'],
        ctaLabel: 'Request Demo',
        ctaHref: '#demo',
        trust: 'Real-time database sync',
        preview: {
          header: 'INVENTORY STATUS',
          sub: 'Warehouses: 4 active locations',
          status: 'Synced',
          stat1Label: 'Total SKUs Tracked',
          stat1Val: '1,240 items',
          stat2Label: 'Stock Alerts',
          stat2Val: '3 items require reorder',
          buttonText: 'View Stock Ledger →'
        }
      },
      {
        id: '03',
        title: 'Staff Management',
        subtitle: 'Role-based permissions & audit logs',
        badge: 'Secure Access',
        tagline: 'Control permissions. Protect your revenue.',
        desc: 'Assign granular roles to cashiers, floor managers, and supervisors. Review immutable audit logs for every discount, refund, and cash drawer opening.',
        checks: ['Granular role permissions', 'Shift performance tracking', 'Immutable register audit logs'],
        ctaLabel: 'Request Demo',
        ctaHref: '#demo',
        trust: 'Bank-grade role security',
        preview: {
          header: 'TEAM PERMISSIONS',
          sub: 'Active Staff: 16 members',
          status: 'Secure',
          stat1Label: 'Branch Managers',
          stat1Val: '4 authorized',
          stat2Label: 'Cashier Accounts',
          stat2Val: '12 active shifts',
          buttonText: 'Manage Roles →'
        }
      }
    ]
  },
  {
    id: 'lms',
    name: 'Coast LMS',
    status: 'upcoming',
    badge: 'WAITLIST OPEN',
    tagline: 'Learning Management System',
    description: 'Structured training and onboarding modules designed to scale workforce competency.',
    steps: [
      {
        id: '01',
        title: 'Course Builder',
        subtitle: 'Drag-and-drop lessons & modules',
        badge: 'In Development',
        tagline: 'Build immersive training programs in minutes.',
        desc: 'Create structured video, text, and quiz-based learning tracks for your new employees, sales reps, or academic students.',
        checks: ['Intuitive drag-and-drop editor', 'Multimedia content embedding', 'Automated module sequencing'],
        ctaLabel: 'Join LMS Waitlist',
        ctaHref: '#waitlist',
        trust: 'Secured priority queue',
        preview: {
          header: 'COURSE BUILDER',
          sub: 'Module: Q2 Staff Onboarding',
          status: 'Building',
          stat1Label: 'Lesson Blocks',
          stat1Val: '12 sections',
          stat2Label: 'Estimated Runtime',
          stat2Val: '45 minutes',
          buttonText: 'Secure Early Access →'
        }
      },
      {
        id: '02',
        title: 'Progress Tracking',
        subtitle: 'Real-time student & employee analytics',
        badge: 'Analytics',
        tagline: 'Monitor completion rates and performance metrics.',
        desc: 'Track individual and team progress across courses with detailed completion dashboards and automated reminder triggers.',
        checks: ['Individual scorecards', 'Time-spent analytics', 'Automated nudge notifications'],
        ctaLabel: 'Join LMS Waitlist',
        ctaHref: '#waitlist',
        trust: 'Secured priority queue',
        preview: {
          header: 'ANALYTICS ENGINE',
          sub: 'Cohort: Retail Operations Q2',
          status: 'Active Mock',
          stat1Label: 'Enrolled Learners',
          stat1Val: '28 active staff',
          stat2Label: 'Average Completion',
          stat2Val: '84% success rate',
          buttonText: 'Join Priority Waitlist →'
        }
      },
      {
        id: '03',
        title: 'Automated Certifications',
        subtitle: 'Digital badges and diplomas',
        badge: 'Credentialing',
        tagline: 'Reward completion with verifiable credentials.',
        desc: 'Automatically issue customized certificates and digital badges upon successful completion of training checkpoints.',
        checks: ['Custom certificate templates', 'Verifiable credential hashes', '1-click LinkedIn export'],
        ctaLabel: 'Join LMS Waitlist',
        ctaHref: '#waitlist',
        trust: 'Secured priority queue',
        preview: {
          header: 'CERTIFICATION ENGINE',
          sub: 'Template: Standard Compliance',
          status: 'Ready',
          stat1Label: 'Badges Issued',
          stat1Val: '150+ simulated',
          stat2Label: 'Verification Speed',
          stat2Val: 'Instant (<1s)',
          buttonText: 'Request Access →'
        }
      }
    ]
  },
  {
    id: 'forms',
    name: 'Coast Forms',
    status: 'upcoming',
    badge: 'WAITLIST OPEN',
    tagline: 'Advanced Data Collection',
    description: 'Custom surveys, intake applications, and feedback collection workflows.',
    steps: [
      {
        id: '01',
        title: 'Survey Builder',
        subtitle: 'Conditional logic & custom styling',
        badge: 'Builder',
        tagline: 'Data collection made beautifully simple.',
        desc: 'Design dynamic surveys with conditional branching, custom branding, and specialized input fields for any use case.',
        checks: ['Advanced conditional logic paths', 'Custom CSS & branding', 'Multi-page form flows'],
        ctaLabel: 'Join Forms Waitlist',
        ctaHref: '#waitlist',
        trust: 'Secured priority queue',
        preview: {
          header: 'FORM BUILDER',
          sub: 'Survey: Branch Satisfaction Q2',
          status: 'Building',
          stat1Label: 'Input Fields',
          stat1Val: '14 questions',
          stat2Label: 'Logic Rules',
          stat2Val: '5 conditions active',
          buttonText: 'Join Priority Waitlist →'
        }
      },
      {
        id: '02',
        title: 'Response Analytics',
        subtitle: 'Live submission dashboards & exports',
        badge: 'Dashboard',
        tagline: 'Analyze submissions instantly as they roll in.',
        desc: 'Visualize feedback trends, aggregate survey scores, and export clean datasets directly into CSV or Excel format.',
        checks: ['Real-time aggregation charts', 'Sentiment analysis breakdown', '1-click CSV export'],
        ctaLabel: 'Join Forms Waitlist',
        ctaHref: '#waitlist',
        trust: 'Secured priority queue',
        preview: {
          header: 'SUBMISSION HUB',
          sub: 'Live Feed: Customer Feedback',
          status: 'Active Mock',
          stat1Label: 'Total Responses',
          stat1Val: '1,420 submitted',
          stat2Label: 'Conversion Rate',
          stat2Val: '91.4% completion',
          buttonText: 'Secure Early Access →'
        }
      },
      {
        id: '03',
        title: 'Workflow Integration',
        subtitle: 'Webhooks & automated triggers',
        badge: 'Integrations',
        tagline: 'Connect responses directly to your business apps.',
        desc: 'Trigger notifications, send confirmation emails, or push structured data into your BMS database instantly via webhooks.',
        checks: ['Instant webhook triggers', 'Email notification automation', 'API endpoint support'],
        ctaLabel: 'Join Forms Waitlist',
        ctaHref: '#waitlist',
        trust: 'Secured priority queue',
        preview: {
          header: 'WEBHOOK ROUTER',
          sub: 'Destination: Primary CRM',
          status: 'Configured',
          stat1Label: 'Active Endpoints',
          stat1Val: '3 webhooks',
          stat2Label: 'Delivery Success',
          stat2Val: '99.9% uptime',
          buttonText: 'Join Waitlist →'
        }
      }
    ]
  },
  {
    id: 'cv',
    name: 'Coast CV Builder',
    status: 'upcoming',
    badge: 'WAITLIST OPEN',
    tagline: 'Professional Career Suite',
    description: 'ATS-optimized resume creation and career profile management.',
    steps: [
      {
        id: '01',
        title: 'ATS Templates',
        subtitle: 'Recruiter-approved layouts',
        badge: 'Templates',
        tagline: 'Stand out with professional, compliant resumes.',
        desc: 'Choose from a library of meticulously designed templates engineered to pass Applicant Tracking Systems (ATS) with flying colors.',
        checks: ['15+ recruiter-approved designs', 'Strict ATS-parsable formatting', 'Single & multi-column options'],
        ctaLabel: 'Join CV Waitlist',
        ctaHref: '#waitlist',
        trust: 'Secured priority queue',
        preview: {
          header: 'TEMPLATE LIBRARY',
          sub: 'Layout: Executive Professional',
          status: 'Planned',
          stat1Label: 'ATS Compliance',
          stat1Val: '98% pass rate',
          stat2Label: 'Formatting Style',
          stat2Val: 'Clean typography',
          buttonText: 'Request Early Access →'
        }
      },
      {
        id: '02',
        title: 'Content Generator',
        subtitle: 'AI bullet points & executive summaries',
        badge: 'AI Powered',
        tagline: 'Craft compelling professional achievements.',
        desc: 'Generate powerful action-verb bullet points tailored to your industry and seniority level with built-in writing assistance.',
        checks: ['Industry-specific achievement prompts', 'Action-verb optimization', 'Tone and style tuning'],
        ctaLabel: 'Join CV Waitlist',
        ctaHref: '#waitlist',
        trust: 'Secured priority queue',
        preview: {
          header: 'CONTENT ASSISTANT',
          sub: 'Target: Senior Operations Manager',
          status: 'In Design',
          stat1Label: 'Suggested Bullets',
          stat1Val: '25+ tailored options',
          stat2Label: 'Impact Score',
          stat2Val: 'High visibility',
          buttonText: 'Join Priority Waitlist →'
        }
      },
      {
        id: '03',
        title: 'PDF & Cover Letter',
        subtitle: '1-click export & matching cover notes',
        badge: 'Export Suite',
        tagline: 'Deliver complete application packages.',
        desc: 'Export flawless PDF documents alongside custom-tailored cover letters matching your resume typography and style.',
        checks: ['High-resolution PDF generation', 'Matching cover letter generator', 'Cloud profile versioning'],
        ctaLabel: 'Join CV Waitlist',
        ctaHref: '#waitlist',
        trust: 'Secured priority queue',
        preview: {
          header: 'EXPORT PACKAGE',
          sub: 'Includes: Resume + Cover Letter',
          status: 'Ready',
          stat1Label: 'File Formats',
          stat1Val: 'PDF, DOCX, TXT',
          stat2Label: 'Export Speed',
          stat2Val: 'Instant render',
          buttonText: 'Secure Access →'
        }
      }
    ]
  },
  {
    id: 'market',
    name: 'Coast Open Market',
    status: 'upcoming',
    badge: 'WAITLIST OPEN',
    tagline: 'B2B Digital Marketplace',
    description: 'Connecting verified manufacturers and distributors through secure milestone commerce.',
    steps: [
      {
        id: '01',
        title: 'Supplier Network',
        subtitle: 'Verified manufacturer directory',
        badge: 'Directory',
        tagline: 'Saddle up with trusted wholesale suppliers.',
        desc: 'Browse a vetted directory of manufacturers with verified ratings, order volume histories, and transparent fulfillment metrics.',
        checks: ['Top-tier verified badges', 'Historical fulfillment ratings', 'Direct wholesale quoting'],
        ctaLabel: 'Join Market Waitlist',
        ctaHref: '#waitlist',
        trust: 'Secured priority queue',
        preview: {
          header: 'SUPPLIER DIRECTORY',
          sub: 'Partner: Acero del Pacífico',
          status: 'Verified',
          stat1Label: 'Supplier Rating',
          stat1Val: '4.8 ★ (156 orders)',
          stat2Label: 'Fulfillment Speed',
          stat2Val: 'Top 3% network',
          buttonText: 'Join Market Waitlist →'
        }
      },
      {
        id: '02',
        title: 'Milestone Escrow',
        subtitle: 'Tranche-based secure payments',
        badge: 'Escrow',
        tagline: 'Capital protected by verified production milestones.',
        desc: 'Lock funds securely before production begins. Payments release automatically as shipment and delivery checkpoints are verified.',
        checks: ['Milestone-gated release tranches', 'Zero cross-border invoice chasing', 'Transparent fund tracking'],
        ctaLabel: 'Join Market Waitlist',
        ctaHref: '#waitlist',
        trust: 'Secured priority queue',
        preview: {
          header: 'ESCROW CONTRACT',
          sub: 'Order Value: $48,500 USDC',
          status: 'Secured',
          stat1Label: 'Tranche Split',
          stat1Val: '50% Production / 50% Delivery',
          stat2Label: 'Security State',
          stat2Val: 'Locked in escrow',
          buttonText: 'Request Marketplace Access →'
        }
      },
      {
        id: '03',
        title: 'Automated Logistics',
        subtitle: 'Freight tracking & delivery proof',
        badge: 'Logistics',
        tagline: 'Track wholesale shipments from factory to warehouse.',
        desc: 'Monitor freight carrier updates, digital bill-of-lading documents, and delivery confirmation proofs in a single interface.',
        checks: ['Live freight carrier tracking', 'Digital bill-of-lading storage', 'Automated delivery sign-off'],
        ctaLabel: 'Join Market Waitlist',
        ctaHref: '#waitlist',
        trust: 'Secured priority queue',
        preview: {
          header: 'FREIGHT TRACKING',
          sub: 'Route: Port of Origin → Warehouse',
          status: 'In Transit',
          stat1Label: 'Estimated Arrival',
          stat1Val: '3 business days',
          stat2Label: 'Documentation',
          stat2Val: '100% verified',
          buttonText: 'Join Waitlist →'
        }
      }
    ]
  }
]

// Exactly 7 slides for "Why Coast"
const whyCoastSlides = [
  {
    id: '01',
    title: 'Transparent & Predictable Pricing',
    category: 'VALUE MODEL',
    metric: 'Zero Hidden Fees',
    badge: 'PREDICTABLE VALUE',
    description: 'Avoid ballooning legacy software invoices and enterprise implementation overhead. Coast gives you predictable scaling tailored precisely to your real business metrics.',
    requirements: 'Instant online configuration, no long-term software lock-in contracts required.',
    benefit: 'Designed to save growing teams up to 70% in operating overhead compared to traditional ERPs.'
  },
  {
    id: '02',
    title: 'Real-Time Multi-Branch Synchronization',
    category: 'ARCHITECTURE',
    metric: '< 1s Sync Speed',
    badge: 'INSTANT SYNC',
    description: 'Connect your headquarters, warehouses, and multiple retail storefronts into a single synchronized ledger so you never oversell or lose track of stock.',
    requirements: 'Cloud-native database connectivity with built-in offline failover protection.',
    benefit: 'Eliminates inventory discrepancies and stockouts across all physical locations.'
  },
  {
    id: '03',
    title: 'Actionable Business Intelligence',
    category: 'DATA ENGINE',
    metric: 'Live Profit Margins',
    badge: 'DATA DRIVEN',
    description: 'Stop waiting for monthly accountant summaries. Monitor daily cash flow, top-performing products, and employee sales performance in live visual dashboards.',
    requirements: 'Automatic transaction logging straight from your sales register and inventory logs.',
    benefit: 'Empowers managers to make data-backed purchasing and staffing decisions instantly.'
  },
  {
    id: '04',
    title: 'Bank-Grade Role Security & Audits',
    category: 'SECURITY & CONTROL',
    metric: '100% Immutable Logs',
    badge: 'STRICT PERMISSIONS',
    description: 'Protect your revenue with granular staff permissions. Restrict refunds, price overrides, and cash drawer actions to authorized supervisors only.',
    requirements: 'Role-based access control (RBAC) and timestamped audit logs for every register event.',
    benefit: 'Significantly reduces internal cash leakage and unauthorized inventory adjustments.'
  },
  {
    id: '05',
    title: 'A Unified Multi-App Ecosystem',
    category: 'INTEGRATION',
    metric: '5+ Apps in One Suite',
    badge: 'NO DATA SILOS',
    description: 'No more clumsy third-party integrations that break. Coast connects your inventory, learning portals, customer forms, and resumes into a single unified login.',
    requirements: 'Single sign-on across all current and upcoming Coast ecosystem modules.',
    benefit: 'Saves your team hours of switching between disconnected software applications.'
  },
  {
    id: '06',
    title: 'Zero Hardware or IT Overhead',
    category: 'DEPLOYMENT',
    metric: '5-Minute Setup',
    badge: 'CLOUD NATIVE',
    description: 'Deploy instantly on existing tablets, laptops, or mobile phones. No expensive local servers, dedicated IT technicians, or complex network cabling required.',
    requirements: 'Any modern web browser with internet connectivity (offline mode supported).',
    benefit: 'Reduces initial deployment expenses by over 90% compared to legacy setups.'
  },
  {
    id: '07',
    title: 'Built to Scale With Your Ambition',
    category: 'LONG-TERM GROWTH',
    metric: 'Unlimited SKUs & Staff',
    badge: 'FUTURE PROOF',
    description: 'Whether you operate a single boutique or a nationwide distribution network, Coast scales effortlessly with your transaction volume and branch expansion.',
    requirements: 'Elastic cloud infrastructure built to handle high-concurrency retail environments.',
    benefit: 'Your software grows with you without requiring costly migrations later.'
  }
]

// Pricing Tiers
const bmsPricingPlans = [
  {
    name: 'Basic',
    iconBadge: '🏪',
    description: 'Perfect for a single small shop just getting started.',
    monthlyUsd: '$7.50',
    yearlyUsd: '$6.00',
    monthlyNgn: '₦10,000',
    yearlyNgn: '₦8,000',
    billedYearly: 'Billed $72 yearly (~₦98,000)',
    features: [
      'Max 2 Users (1 Admin, 1 Cashier)',
      '1 Branch Location',
      '5GB Cloud Storage',
      'Basic Features (Restricted Admin)'
    ],
    popular: false
  },
  {
    name: 'Growth',
    iconBadge: '📈',
    description: 'For businesses expanding to a second location.',
    monthlyUsd: '$22.00',
    yearlyUsd: '$18.00',
    monthlyNgn: '₦30,000',
    yearlyNgn: '₦24,000',
    billedYearly: 'Billed $216 yearly (~₦294,000)',
    features: [
      'Max 4 Users (Admin, 1 Mgr, 2 Cashiers)',
      'Up to 2 Branch Locations',
      '25GB Cloud Storage',
      'Standard Features (Some restrictions)'
    ],
    popular: false
  },
  {
    name: 'Professional',
    iconBadge: '🏢',
    description: 'Advanced setup for multi-branch operations.',
    monthlyUsd: '$55.00',
    yearlyUsd: '$44.00',
    monthlyNgn: '₦75,000',
    yearlyNgn: '₦60,000',
    billedYearly: 'Billed $528 yearly (~₦720,000)',
    features: [
      'Max 12 Users (Admin, Mgrs, 8 Cashiers)',
      'Up to 4 Branch Locations',
      '75GB Cloud Storage',
      'Advanced Features (Minor restrictions)'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    iconBadge: '👑',
    description: 'Complete unlocked access across all outlets.',
    monthlyUsd: '$110.00',
    yearlyUsd: '$88.00',
    monthlyNgn: '₦150,000',
    yearlyNgn: '₦120,000',
    billedYearly: 'Billed $1,056 yearly (~₦1,440,000)',
    features: [
      'Unlimited Users & Roles',
      'Up to 10 Branch Locations',
      '250GB Cloud Storage',
      'All Features Completely Unlocked'
    ],
    popular: false
  }
]

// FAQ Data
const faqItems = [
  {
    question: 'What is the Coast Ecosystem?',
    answer: 'Coast is a unified suite of applications designed to help businesses operate efficiently. It includes Coast BMS (Business Management Suite), Coast LMS (Learning Management), Coast Forms, Coast CV Builder, and Coast Open Market.'
  },
  {
    question: 'Can I use Coast BMS offline?',
    answer: 'Yes! Coast BMS features built-in offline synchronization protection. Your cashier terminals continue processing sales smoothly during internet downtime, and records sync automatically once reconnected.'
  },
  {
    question: 'How does the yearly billing discount work?',
    answer: 'Choosing yearly billing gives you an automatic 20% discount across all active subscription tiers compared to paying month-to-month.'
  },
  {
    question: 'Can I upgrade or change my plan as my business grows?',
    answer: 'Absolutely. You can upgrade, add branch locations, or expand user permissions instantly right from your dashboard without any service disruption.'
  },
  {
    question: 'How do I access upcoming apps like Coast LMS or Forms?',
    answer: 'Upcoming modules are currently available via our priority waitlist. Joining the waitlist secures your early-bird account status and priority onboarding when they launch.'
  }
]

// Screenshots for Platform Interactive Frame (Mapped to your 1-10 assets)
const platformScreenshots = [
  {
    id: 'dashboard',
    title: 'Executive Dashboard',
    description: 'Global enterprise overview, quick actions, and live command center.',
    imgUrl: '/assets/1.png'
  },
  {
    id: 'inventory',
    title: 'Product Matrix',
    description: 'Register SKUs, set stock bounds, and manage tiered wholesale pricing.',
    imgUrl: '/assets/2.png'
  },
  {
    id: 'bi',
    title: 'Business Intelligence',
    description: 'Live business health scoring, AI anomaly detection, and insights.',
    imgUrl: '/assets/3.png'
  },
  {
    id: 'reports',
    title: 'Analytics Engine',
    description: 'Generate granular reports across sales, expenses, and inventory.',
    imgUrl: '/assets/4.png'
  },
  {
    id: 'ledger',
    title: 'Sales Ledger',
    description: 'Immutable audit records of all transactions and revenue recognition.',
    imgUrl: '/assets/5.png'
  },
  {
    id: 'ar',
    title: 'Accounts Receivable',
    description: 'Monitor customer credit lines, aging invoices, and cash pipelines.',
    imgUrl: '/assets/6.png'
  },
  {
    id: 'security',
    title: 'Security Center',
    description: 'Enforce 2FA, monitor login activities, and track security grades.',
    imgUrl: '/assets/7.png'
  },
  {
    id: 'admin',
    title: 'Admin Control',
    description: 'Manage global company settings, branches, and system data.',
    imgUrl: '/assets/8.png'
  },
  {
    id: 'inbox',
    title: 'Action Inbox',
    description: 'Real-time governance queue for purchase and expense approvals.',
    imgUrl: '/assets/9.png'
  },
  {
    id: 'incidents',
    title: 'Incident Logs',
    description: 'Log and track operational liabilities and safety hazards.',
    imgUrl: '/assets/10.png'
  }
]

export default function MarketingHomePage() {
  const [activeAppIndex, setActiveAppIndex] = useState(0)
  const [activeStepIndex, setActiveStepIndex] = useState(0)
  const [activeWhySlide, setActiveWhySlide] = useState(0)
  const [activeScreenshot, setActiveScreenshot] = useState(0)
  const [pricingTab, setPricingTab] = useState(0)
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isWhyHovered, setIsWhyHovered] = useState(false)

  // Local state for Modals
  const [modalOpen, setModalOpen] = useState(false)
  const [modalMode, setModalMode] = useState<'demo' | 'waitlist'>('demo')
  const [modalAppName, setModalAppName] = useState('Coast BMS')

  const currentApp = ecosystemApps[activeAppIndex]
  const currentStep = currentApp.steps[activeStepIndex]
  const currentWhy = whyCoastSlides[activeWhySlide]
  const selectedPricingApp = ecosystemApps[pricingTab]

  // Auto-rotating timer for top ecosystem apps strip
  useEffect(() => {
    if (isHovered) return
    const interval = setInterval(() => {
      setActiveAppIndex((prev) => (prev + 1) % ecosystemApps.length)
      setActiveStepIndex(0)
    }, 4500)
    return () => clearInterval(interval)
  }, [isHovered])

  // Auto-rotating timer for "Why Coast" carousel
  useEffect(() => {
    if (isWhyHovered) return
    const interval = setInterval(() => {
      setActiveWhySlide((prev) => (prev + 1) % whyCoastSlides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isWhyHovered])

  // Auto-rotating timer for interface screenshots
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreenshot((prev) => (prev + 1) % platformScreenshots.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const handleAppSelect = (index: number) => {
    setActiveAppIndex(index)
    setActiveStepIndex(0)
  }

  // Handler to open Modal
  const handleOpenModal = (mode: 'demo' | 'waitlist', appName: string) => {
    setModalMode(mode)
    setModalAppName(appName)
    setModalOpen(true)
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 pb-20 w-full max-w-[100vw] overflow-x-hidden">
      
      {/* SECTION 1: THE CONTAINED DARK HERO WITH LIVE BMS CAROUSEL */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] pt-4 md:pt-8 w-full max-w-[100vw] overflow-hidden">
        <section 
          className="relative w-full rounded-[2rem] sm:rounded-3xl overflow-hidden px-5 py-12 md:px-16 md:py-28 shadow-2xl max-w-full"
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(2, 44, 34, 0.95), rgba(2, 44, 34, 0.8)), url("https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=2000&auto=format&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
            
            {/* Left Column: Headline & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-semibold uppercase tracking-wider border border-emerald-500/30 backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                The Coast Ecosystem
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                Tools to operate. <br />
                <span className="text-emerald-400">Growth for everyone.</span>
              </h1>
              
              <p className="text-base sm:text-lg text-emerald-50/80 leading-relaxed max-w-xl font-medium">
                A unified suite of applications connecting sales, inventory, education, and commerce so you can focus on scaling.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 pt-4">
                <button 
                  onClick={() => handleOpenModal('demo', 'Coast BMS')}
                  className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-full bg-emerald-500 px-6 sm:px-8 text-sm sm:text-base font-bold text-slate-900 shadow-lg hover:bg-emerald-400 transition-all hover:scale-105 cursor-pointer"
                >
                  Request Demo & Test Credentials
                </button>
                <Link 
                  href="/products"
                  className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-full bg-transparent border border-emerald-500/30 px-6 sm:px-8 text-sm sm:text-base font-bold text-white hover:bg-white/10 transition-all"
                >
                  View Ecosystem
                </Link>
              </div>
            </div>

            {/* Right Column: Interactive BMS Functional Carousel */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end w-full max-w-full overflow-hidden min-w-0">
              <BmsHeroCarousel />
            </div>

          </div>
        </section>
      </div>

      {/* SECTION 2: 4-COLUMN STATS / FEATURES STRIP */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1300px] relative z-20 -mt-12 mb-20">
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 p-2 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-100 dark:divide-slate-800">
            <div className="flex flex-col gap-3 p-6 md:p-8 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors rounded-xl md:rounded-none md:rounded-l-xl cursor-default">
              <div className="flex items-center justify-between mb-2">
                <span className="text-4xl font-bold text-slate-900 dark:text-white">1</span>
                <div className="h-10 w-10 rounded-full bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                </div>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-lg">Multi-Branch</h3>
              <p className="text-sm text-muted-foreground font-medium leading-relaxed">Oversee every location from a single dashboard. Sync instantly.</p>
            </div>
            <div className="flex flex-col gap-3 p-6 md:p-8 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-default">
              <div className="flex items-center justify-between mb-2">
                <span className="text-4xl font-bold text-slate-900 dark:text-white">2</span>
                <div className="h-10 w-10 rounded-full bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                </div>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-lg">Live Analytics</h3>
              <p className="text-sm text-muted-foreground font-medium leading-relaxed">Make decisions based on live sales data and real-time alerts.</p>
            </div>
            <div className="flex flex-col gap-3 p-6 md:p-8 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-default">
              <div className="flex items-center justify-between mb-2">
                <span className="text-4xl font-bold text-slate-900 dark:text-white">3</span>
                <div className="h-10 w-10 rounded-full bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                </div>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-lg">Staff Control</h3>
              <p className="text-sm text-muted-foreground font-medium leading-relaxed">Assign specific roles and permissions. Track register activity.</p>
            </div>
            <div className="flex flex-col gap-3 p-6 md:p-8 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors rounded-xl md:rounded-none md:rounded-r-xl cursor-default">
              <div className="flex items-center justify-between mb-2">
                <span className="text-4xl font-bold text-slate-900 dark:text-white">4</span>
                <div className="h-10 w-10 rounded-full bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-lg">Cloud Synced</h3>
              <p className="text-sm text-muted-foreground font-medium leading-relaxed">Your data is backed up instantly. Keep working offline seamlessly.</p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2.5: PLATFORM INTERFACE SHOWCASE (Actual App Screenshots) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1300px] mb-28 w-full overflow-hidden">
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <p className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-3">INSIDE THE PLATFORM</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            See Coast in action.
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Take a look at our clean, modern interface designed specifically for high-volume retail environments and multi-branch distribution.
          </p>
        </div>

        {/* Browser Mockup Frame */}
        <div className="w-full max-w-5xl mx-auto bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-2xl overflow-hidden">
          {/* Top Browser Bar */}
          <div className="h-12 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 flex items-center px-4 gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-rose-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
            </div>
            <div className="mx-auto px-6 py-1 rounded-md bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-700/60 text-[10px] font-mono text-slate-400 flex items-center gap-2">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              coast-bms.vercel.app
            </div>
          </div>
          
          {/* Main Image Container */}
          <div className="relative aspect-video w-full bg-slate-50 dark:bg-slate-900 overflow-hidden border-b border-slate-100 dark:border-slate-800">
            {platformScreenshots.map((shot, idx) => (
              <img 
                key={idx}
                src={shot.imgUrl}
                alt={shot.title}
                className={`absolute top-0 left-0 w-full h-full object-contain bg-slate-50 dark:bg-slate-900 transition-opacity duration-500 ease-in-out ${activeScreenshot === idx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
              />
            ))}
          </div>

          {/* Bottom Tabs/Controls */}
          <div className="p-4 sm:p-6 bg-white dark:bg-slate-900">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 sm:gap-3">
              {platformScreenshots.map((shot, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveScreenshot(idx)}
                  className={`text-left p-3 rounded-xl transition-all duration-300 border ${
                    activeScreenshot === idx 
                      ? 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800 ring-1 ring-emerald-500/50' 
                      : 'bg-transparent border-transparent hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  <h4 className={`font-bold text-xs sm:text-sm ${activeScreenshot === idx ? 'text-emerald-700 dark:text-emerald-400' : 'text-slate-700 dark:text-slate-300'}`}>
                    {shot.title}
                  </h4>
                  <p className="text-[10px] text-slate-500 mt-1 line-clamp-2 leading-relaxed hidden sm:block">
                    {shot.description}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: ECOSYSTEM APPS */}
      <div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1300px] mb-28 w-full overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        
        {/* Section Header */}
        <div className="mb-8 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-2">The Coast Ecosystem (5 Apps)</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
              Explore our platform suite.<br />
              <span className="text-slate-400 font-light text-xl sm:text-3xl mt-2 block">Select any app below to review its modules.</span>
            </h2>
          </div>
          <div className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-900 text-xs text-emerald-700 dark:text-emerald-400 font-medium">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            {isHovered ? 'Rotation paused' : 'Auto-rotating'}
          </div>
        </div>

        {/* TOP MOVING APP SELECTOR TABS (5 Apps Grid) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8 w-full">
          {ecosystemApps.map((app, appIdx) => {
            const isAppActive = activeAppIndex === appIdx
            return (
              <button
                key={app.id}
                onClick={() => handleAppSelect(appIdx)}
                className={`p-4 rounded-2xl transition-all duration-300 border text-left flex flex-col justify-between ${
                  isAppActive
                    ? 'bg-emerald-900 text-white border-emerald-700 shadow-xl scale-[1.02] ring-2 ring-emerald-500/30'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-emerald-500/50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                    isAppActive ? 'bg-emerald-800 text-emerald-200' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                  }`}>
                    {app.status === 'live' ? 'Live' : 'Waitlist'}
                  </span>
                  <span className={`text-xs font-mono font-bold ${isAppActive ? 'text-emerald-300' : 'text-slate-400'}`}>
                    0{appIdx + 1}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base">{app.name}</h4>
                  <p className={`text-xs line-clamp-1 mt-0.5 ${isAppActive ? 'text-emerald-100/80' : 'text-slate-400'}`}>
                    {app.tagline}
                  </p>
                </div>
              </button>
            )
          })}
        </div>

        {/* MASTER CARD CONTAINER */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200/80 dark:border-slate-800 grid grid-cols-1 lg:grid-cols-12 overflow-hidden transition-all duration-500 w-full">
          
          {/* LEFT SIDEBAR: 1-TO-3 VERTICAL NAV FOR THE ACTIVE APP */}
          <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 p-4 md:p-6 flex flex-col justify-between gap-4">
            <div className="space-y-3">
              <div className="px-2 pb-2 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">{currentApp.name} Modules</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 font-bold">{currentApp.badge}</span>
              </div>

              {currentApp.steps.map((step, stepIdx) => {
                const isStepActive = activeStepIndex === stepIdx
                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStepIndex(stepIdx)}
                    className={`w-full text-left p-4 rounded-2xl transition-all duration-300 flex flex-col gap-1.5 relative border ${
                      isStepActive 
                        ? 'bg-white dark:bg-slate-900 border-emerald-500/40 shadow-md shadow-emerald-900/5 translate-x-1' 
                        : 'bg-transparent border-transparent hover:bg-white/60 dark:hover:bg-slate-900/50 text-slate-500 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {isStepActive && (
                      <span className="absolute left-0 top-3 bottom-3 w-1.5 bg-emerald-600 rounded-r-full" />
                    )}

                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-bold tracking-wider ${isStepActive ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'}`}>
                        {step.id}
                      </span>
                      <span className="text-[10px] font-semibold text-slate-400">
                        {step.badge}
                      </span>
                    </div>

                    <h4 className={`font-bold text-base ${isStepActive ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400'}`}>
                      {step.title}
                    </h4>

                    <p className="text-xs text-muted-foreground line-clamp-1 font-normal">
                      {step.subtitle}
                    </p>
                  </button>
                )
              })}
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30 text-xs text-emerald-900 dark:text-emerald-300 hidden sm:block">
              <p className="font-semibold mb-1">💡 Ecosystem Navigation</p>
              <p className="opacity-80 text-[11px] leading-relaxed">Click any number (01, 02, 03) on the left to inspect specific features of {currentApp.name}.</p>
            </div>
          </div>

          {/* RIGHT SIDEBAR: Component Preview Card + Detailed Content */}
          <div className="lg:col-span-8 p-6 sm:p-8 md:p-12 flex flex-col lg:flex-row items-center gap-8 md:gap-12 bg-white dark:bg-slate-900 relative">
            
            <span className="absolute top-6 right-8 text-[80px] md:text-[120px] font-black text-slate-900/[0.03] dark:text-white/[0.03] pointer-events-none select-none">
              {currentStep.id}
            </span>

            {/* SUB-COLUMN 1: Floating Interactive Component Preview Card */}
            <div className="w-full lg:w-5/12 flex-shrink-0">
              <div className="rounded-2xl border-2 border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-950 p-4 sm:p-5 shadow-xl relative overflow-hidden transition-all duration-500">
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 block">
                      {currentStep.preview.header}
                    </span>
                    <p className="text-xs font-medium text-muted-foreground mt-0.5">
                      {currentStep.preview.sub}
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold">
                    {currentStep.preview.status}
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                    <p className="text-[10px] text-muted-foreground uppercase">{currentStep.preview.stat1Label}</p>
                    <p className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white mt-0.5">{currentStep.preview.stat1Val}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                    <p className="text-[10px] text-muted-foreground uppercase">{currentStep.preview.stat2Label}</p>
                    <p className="text-sm font-bold text-slate-700 dark:text-slate-300 mt-0.5">{currentStep.preview.stat2Val}</p>
                  </div>
                </div>

                <div className={`w-full py-3 px-4 rounded-xl font-bold text-xs text-center shadow-sm flex items-center justify-center gap-2 ${
                  currentApp.status === 'live' 
                    ? 'bg-emerald-600 text-white' 
                    : 'bg-slate-900 text-white dark:bg-slate-800'
                }`}>
                  {currentStep.preview.buttonText}
                </div>
              </div>
            </div>

            {/* SUB-COLUMN 2: Detailed Text, Feature Checkmarks & Action CTA */}
            <div className="w-full lg:w-7/12 space-y-6 relative z-10">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 inline-block" />
                  {currentApp.name} · Module {currentStep.id}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
                  {currentStep.tagline}
                </h3>
              </div>

              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                {currentStep.desc}
              </p>

              <div className="space-y-2.5 pt-1">
                {currentStep.checks.map((checkText, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm font-medium text-slate-800 dark:text-slate-200">
                    <div className="h-5 w-5 rounded-full bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 dark:text-emerald-400 flex-shrink-0">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span>{checkText}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 border-t border-slate-100 dark:border-slate-800">
                <button 
                  onClick={() => handleOpenModal(currentApp.status === 'live' ? 'demo' : 'waitlist', currentApp.name)}
                  className={`w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-xl px-8 text-sm font-bold shadow-lg transition-all hover:scale-105 cursor-pointer ${
                    currentApp.status === 'live'
                      ? 'bg-emerald-600 text-white shadow-emerald-900/20 hover:bg-emerald-500'
                      : 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-slate-900/10 hover:opacity-90'
                  }`}
                >
                  {currentStep.ctaLabel}
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>

                <div className="flex items-center gap-1.5 text-xs text-muted-foreground justify-center w-full sm:w-auto">
                  <svg className="h-3.5 w-3.5 shrink-0 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>{currentStep.trust}</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* SECTION 4: WHY COAST - 7 SLIDES LANDSCAPE AUTO-ROTATING CAROUSEL */}
      <div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1300px] mb-28 w-full overflow-hidden"
        onMouseEnter={() => setIsWhyHovered(true)}
        onMouseLeave={() => setIsWhyHovered(false)}
      >
        
        {/* Section Header with Coast App Write-up */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <p className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-3">WHY COAST</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            Enterprise software power.<br />
            <span className="text-emerald-600 dark:text-emerald-400">Without the enterprise friction.</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Growing businesses are forced to choose between bloated, expensive legacy ERPs or risky manual spreadsheets. Coast gives you a unified, lightning-fast application suite built for modern operational scale.
          </p>
        </div>

        {/* Master Landscape Carousel Card Container */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl border border-slate-200/80 dark:border-slate-800 relative w-full">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Side: Active Slide Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">{currentWhy.category}</span>
                <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 text-[10px] sm:text-xs font-bold">
                  {currentWhy.badge}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-2">{currentWhy.title}</h3>
                <div className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400 font-mono tracking-tight">{currentWhy.metric}</div>
              </div>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {currentWhy.description}
              </p>

              {/* 2 Side-by-side Requirement & Core Benefit Boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Requirements & Setup</p>
                  <p className="text-xs font-medium text-slate-800 dark:text-slate-200 leading-normal">{currentWhy.requirements}</p>
                </div>
                <div className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-1">Core Benefit</p>
                  <p className="text-xs font-medium text-emerald-900 dark:text-emerald-300 leading-normal">{currentWhy.benefit}</p>
                </div>
              </div>
            </div>

            {/* Right Side: Vertical List of 7 Items with Active Highlight */}
            <div className="lg:col-span-5 space-y-2.5">
              {whyCoastSlides.map((slide, idx) => {
                const isSelected = activeWhySlide === idx
                return (
                  <button
                    key={slide.id}
                    onClick={() => setActiveWhySlide(idx)}
                    className={`w-full text-left p-3.5 rounded-2xl transition-all duration-300 flex items-center justify-between border ${
                      isSelected
                        ? 'bg-emerald-900 text-white border-emerald-700 shadow-md scale-[1.02]'
                        : 'bg-slate-50/80 dark:bg-slate-950/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-emerald-500/40'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-mono font-bold ${isSelected ? 'text-emerald-300' : 'text-slate-400'}`}>
                        {slide.id}
                      </span>
                      <h4 className="font-bold text-xs sm:text-sm tracking-tight line-clamp-1">{slide.title}</h4>
                    </div>
                    <span className={`text-[10px] sm:text-[11px] font-mono font-semibold hidden sm:block ${isSelected ? 'text-emerald-200' : 'text-emerald-600 dark:text-emerald-400'}`}>
                      {slide.metric}
                    </span>
                  </button>
                )
              })}

              {/* Scroll Track Bar */}
              <div className="pt-2 flex items-center gap-2 px-1">
                <span className="text-[10px] text-slate-400 font-mono">◀</span>
                <div className="h-1.5 flex-1 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden relative">
                  <div 
                    className="absolute top-0 bottom-0 bg-emerald-600 rounded-full transition-all duration-500"
                    style={{
                      width: `${100 / whyCoastSlides.length}%`,
                      left: `${(activeWhySlide / whyCoastSlides.length) * 100}%`
                    }}
                  />
                </div>
                <span className="text-[10px] text-slate-400 font-mono">▶</span>
              </div>
            </div>

          </div>

          {/* Bottom Pagination Dots (7 Dots) */}
          <div className="mt-12 pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-center items-center gap-2">
            {whyCoastSlides.map((slide, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setActiveWhySlide(dotIdx)}
                className={`transition-all duration-300 rounded-full ${
                  activeWhySlide === dotIdx 
                    ? 'w-8 h-2.5 bg-emerald-600' 
                    : 'w-2.5 h-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide: ${slide.title}`}
              />
            ))}
          </div>

        </div>

      </div>

      {/* SECTION 5: APP-SPECIFIC PRICING SECTION */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1300px] mb-28 w-full overflow-hidden">
        
        {/* Section Header */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
            Simple, transparent pricing
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Choose the plan that fits your business size. Upgrade anytime as your team and branches grow. No hidden fees.
          </p>
        </div>

        {/* Pricing App Selector Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-8 w-full">
          {ecosystemApps.map((app, idx) => {
            const isTabActive = pricingTab === idx
            return (
              <button
                key={app.id}
                onClick={() => setPricingTab(idx)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-bold transition-all duration-300 flex items-center gap-2 border ${
                  isTabActive
                    ? 'bg-emerald-900 text-white border-emerald-700 shadow-lg scale-105'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-emerald-500/50'
                }`}
              >
                <span>{app.name}</span>
                <span className={`text-[8px] sm:text-[9px] px-1.5 sm:px-2 py-0.5 rounded-full ${
                  app.status === 'live' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'
                }`}>
                  {app.status === 'live' ? 'Live Tiers' : 'Waitlist'}
                </span>
              </button>
            )
          })}
        </div>

        {/* Billing Cycle Toggle */}
        {selectedPricingApp.status === 'live' && (
          <div className="flex flex-col items-center mb-12 w-full">
            <div className="inline-flex p-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm items-center w-full max-w-[280px]">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`flex-1 px-4 py-2 rounded-full text-xs font-bold transition-all text-center ${
                  billingCycle === 'monthly'
                    ? 'bg-slate-900 text-white shadow-md dark:bg-slate-100 dark:text-slate-900'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`flex-1 px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                  billingCycle === 'yearly'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                <span>Yearly</span>
              </button>
            </div>
          </div>
        )}

        {/* CONDITIONAL CONTENT: IF BMS VS WAITLIST */}
        {selectedPricingApp.status === 'live' ? (
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch w-full">
            {bmsPricingPlans.map((plan, pIdx) => (
              <div 
                key={pIdx}
                className={`rounded-3xl p-6 border-2 transition-all duration-300 flex flex-col justify-between relative bg-white dark:bg-slate-900 ${
                  plan.popular 
                    ? 'border-emerald-600 shadow-2xl scale-100 lg:scale-[1.03] ring-4 ring-emerald-500/10' 
                    : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-emerald-600 text-white text-[10px] font-extrabold uppercase tracking-wider shadow-md whitespace-nowrap">
                    ✨ MOST POPULAR
                  </span>
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{plan.name}</h3>
                    <span className="h-9 w-9 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-lg">
                      {plan.iconBadge}
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-6 h-10">
                    {plan.description}
                  </p>

                  <div className="mb-1">
                    <span className="text-3xl font-black text-slate-900 dark:text-white font-mono">
                      {billingCycle === 'yearly' ? plan.yearlyUsd : plan.monthlyUsd}
                    </span>
                    <span className="text-xs text-muted-foreground ml-1">/mo</span>
                  </div>

                  <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-2 font-mono">
                    Eqv. {billingCycle === 'yearly' ? plan.yearlyNgn : plan.monthlyNgn}/mo
                  </div>

                  <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-6">
                    {billingCycle === 'yearly' ? plan.billedYearly : 'Billed monthly'}
                  </p>

                  <div className="space-y-3 mb-8 pt-4 border-t border-slate-100 dark:border-slate-800">
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs font-medium text-slate-700 dark:text-slate-300">
                        <div className="h-4 w-4 rounded-full bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                          <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <span className="leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => handleOpenModal('demo', 'Coast BMS')}
                  className={`w-full py-3 rounded-xl font-bold text-xs text-center shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    plan.popular
                      ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-900/20'
                      : 'bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-800 dark:hover:bg-slate-700'
                  }`}
                >
                  Request Demo
                </button>
              </div>
            ))}
          </div>

        ) : (
          
          <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-200 dark:border-slate-800 text-center space-y-6 w-full">
            <div className="inline-flex px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider border border-amber-500/20">
              Module in Development
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              {selectedPricingApp.name} is currently on priority waitlist.
            </h3>

            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto">
              {selectedPricingApp.description} Standard tier pricing will be unlocked upon official launch. Join the priority waitlist to lock in lifetime early-bird discounts.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => handleOpenModal('waitlist', selectedPricingApp.name)}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg transition-all cursor-pointer"
              >
                Join {selectedPricingApp.name} Waitlist →
              </button>
            </div>
          </div>

        )}

      </div>

      {/* SECTION 6: FREQUENTLY ASKED QUESTIONS (FAQ) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[900px] mb-28 w-full overflow-hidden">
        
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-2">GOT QUESTIONS?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openFaq === index
            return (
              <div 
                key={index}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full text-left p-5 sm:p-6 font-bold text-sm sm:text-base md:text-lg text-slate-900 dark:text-white flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span>{item.question}</span>
                  <span className={`h-8 w-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-emerald-600 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 bg-emerald-50 dark:bg-emerald-950' : ''}`}>
                    ↓
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 text-slate-600 dark:text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed border-t border-slate-100 dark:border-slate-800/60 mt-2 pt-4">
                    {item.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>

      {/* Global Demo Request & Waitlist Modal Rendering locally in page.tsx */}
      <RequestDemoModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        mode={modalMode} 
        appName={modalAppName} 
      />

    </div>
  )
}