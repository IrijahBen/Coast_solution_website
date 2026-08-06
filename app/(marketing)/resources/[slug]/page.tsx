import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function ResourceArticlePage({ params }: PageProps) {
  const resolvedParams = await params
  const { slug } = resolvedParams

  const filePath = path.join(process.cwd(), 'content/resources', `${slug}.md`)

  if (!fs.existsSync(filePath)) {
    notFound()
  }

  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 py-16 px-4 sm:px-6 lg:px-8">
      <article className="max-w-3xl mx-auto w-full bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-200 dark:border-slate-800">
        
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            href="/resources" 
            className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
          >
            ← Back to Resources Hub
          </Link>
        </div>

        {/* Article Header */}
        <div className="space-y-3 mb-8 pb-6 border-b border-slate-100 dark:border-slate-800">
          <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
            {data.category || 'Documentation'}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {data.title}
          </h1>
          {data.date && (
            <p className="text-xs text-slate-400 font-mono">Published on {data.date}</p>
          )}
        </div>

        {/* Markdown Content Rendering */}
        <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed space-y-6">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>

      </article>
    </div>
  )
}