import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// Function to fetch all markdown resources from the folder
function getResources() {
  const contentDirectory = path.join(process.cwd(), 'content/resources')
  
  if (!fs.existsSync(contentDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(contentDirectory)
  const resources = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(contentDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)

    return {
      slug,
      title: data.title || slug,
      description: data.description || '',
      category: data.category || 'Documentation',
      date: data.date || ''
    }
  })

  return resources
}

export default function ResourcesPage() {
  const resources = getResources()

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 py-16 px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center space-y-4 mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-500/20">
          Developer & Operator Hub
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
          Everything you need to <br />
          <span className="text-emerald-600 dark:text-emerald-400">build, scale, and succeed.</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Access official documentation, integration guides, and operational markdown resources for the Coast ecosystem.
        </p>
      </div>

      {/* Dynamic Resources Grid */}
      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {resources.length > 0 ? (
          resources.map((res) => (
            <div 
              key={res.slug}
              className="rounded-3xl p-8 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 flex items-center justify-center text-xl shadow-sm border border-emerald-100 dark:border-emerald-900/30">
                    📖
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
                    {res.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {res.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {res.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-mono">{res.date}</span>
                <Link 
                  href={`/resources/${res.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                >
                  Read Guide
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-slate-500">
            No resource guides found. Add a `.md` file to `content/resources/`.
          </div>
        )}
      </div>

      {/* Bottom Help Banner */}
      <div className="max-w-4xl mx-auto rounded-3xl bg-emerald-950 text-white p-10 sm:p-14 text-center space-y-6 shadow-2xl relative overflow-hidden w-full">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/40 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Need specialized technical assistance?</h2>
          <p className="text-emerald-100/80 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Our support engineers are available around the clock to help configure your enterprise integrations.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contact" 
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg transition-all"
            >
              Contact Support Team →
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}