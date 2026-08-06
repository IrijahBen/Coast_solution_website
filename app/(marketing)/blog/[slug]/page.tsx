"use client"

import { useState, useEffect, use } from 'react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

interface BlogPost {
  id: string
  title: string
  category: string
  author: string
  readTime: string
  date: string
  excerpt: string
  image: string
  content: string
}

export default function BlogPostDetail({ params }: { params: Promise<{ slug: string }> }) {
  const unwrappedParams = use(params)
  const slug = unwrappedParams.slug

  const [post, setPost] = useState<BlogPost | null>(null)

  useEffect(() => {
    const savedPosts = localStorage.getItem('coast_blog_posts')
    if (savedPosts) {
      const posts: BlogPost[] = JSON.parse(savedPosts)
      const found = posts.find(p => p.id === slug)
      if (found) setPost(found)
    }
  }, [slug])

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 p-6 text-center">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Article Not Found</h1>
        <p className="text-sm text-slate-500 mb-6">This article may have been removed or the link is incorrect.</p>
        <Link href="/blog" className="px-6 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs shadow-md">
          ← Back to Journal
        </Link>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 py-16 px-4 sm:px-6 lg:px-8">
      <article className="max-w-4xl mx-auto w-full bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-200 dark:border-slate-800">
        
        <div className="mb-8">
          <Link href="/blog" className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline">
            ← Back to Journal
          </Link>
        </div>

        <div className="space-y-4 mb-8 pb-8 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3 text-xs font-bold text-slate-400 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">{post.category}</span>
            <span>•</span>
            <span>{post.readTime}</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-sm text-slate-500 font-bold">By {post.author}</p>
        </div>

        {post.image && (
          <div className="relative h-[350px] sm:h-[450px] rounded-2xl overflow-hidden mb-10 shadow-lg">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>
        )}

        {/* Content with full H1, H2, H3, and Paragraph Support */}
        <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed space-y-6 [&>h1]:text-3xl [&>h1]:font-extrabold [&>h1]:text-slate-900 [&>h1]:dark:text-white [&>h1]:mt-8 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-slate-900 [&>h2]:dark:text-white [&>h2]:mt-6 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-slate-900 [&>h3]:dark:text-white">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

      </article>
    </div>
  )
}