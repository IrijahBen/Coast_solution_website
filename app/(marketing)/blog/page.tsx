"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'

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

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState('All Articles')

  useEffect(() => {
    const savedPosts = localStorage.getItem('coast_blog_posts')
    if (savedPosts) setPosts(JSON.parse(savedPosts))

    const savedCategories = localStorage.getItem('coast_blog_categories')
    if (savedCategories) {
      setCategories(['All Articles', ...JSON.parse(savedCategories)])
    } else {
      setCategories(['All Articles'])
    }
  }, [])

  const filteredPosts = selectedCategory === 'All Articles' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory)

  const featuredPost = posts[0]
  const standardPosts = filteredPosts.filter(post => post.id !== featuredPost?.id || selectedCategory !== 'All Articles')

  return (
    <div className="relative flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 overflow-hidden selection:bg-emerald-500 selection:text-white pb-24">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[450px] bg-gradient-to-b from-emerald-500/10 via-emerald-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
        
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center space-y-5 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-extrabold uppercase tracking-widest border border-emerald-500/20 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Insights & Engineering
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            The Coast <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Business Journal.</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
            Technical deep-dives, performance benchmarks, and operational playbooks written by engineers and architects building modern business software.
          </p>
        </div>

        {/* Category Filter Tabs */}
        {categories.length > 1 && (
          <div className="flex flex-wrap justify-center items-center gap-2.5 mb-16 relative z-10">
            {categories.map((category, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all duration-300 border ${
                  selectedCategory === category
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-lg shadow-emerald-900/20 scale-105'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200/80 dark:border-slate-800 hover:border-emerald-500/40 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* Featured Post (Editorial Style) */}
        {selectedCategory === 'All Articles' && featuredPost && (
          <div className="max-w-[1200px] mx-auto w-full mb-20 relative z-10">
            <Link href={`/blog/${featuredPost.id}`} className="block group">
              <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xl hover:shadow-2xl grid grid-cols-1 lg:grid-cols-12 group-hover:border-emerald-500/40 transition-all duration-500">
                
                {/* Image Section */}
                <div className="lg:col-span-7 relative min-h-[350px] lg:min-h-[450px] overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent lg:hidden" />
                  <div className="absolute top-5 left-5">
                    <span className="px-3.5 py-1.5 rounded-full bg-emerald-600/90 backdrop-blur-md text-white text-[10px] font-extrabold uppercase tracking-widest shadow-lg border border-emerald-500/50">
                      ⭐ Featured Release
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-center">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-[11px] font-extrabold tracking-widest uppercase">
                      <span className="text-emerald-600 dark:text-emerald-400">{featuredPost.category}</span>
                      <span className="text-slate-300 dark:text-slate-600">•</span>
                      <span className="text-slate-500 dark:text-slate-400">{featuredPost.readTime}</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                      {featuredPost.title}
                    </h2>

                    <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed line-clamp-3">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="mt-10 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 font-bold text-sm border border-slate-200 dark:border-slate-700">
                        {featuredPost.author.charAt(0)}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900 dark:text-white">{featuredPost.author}</p>
                        <p className="text-[10px] font-medium text-slate-500">{featuredPost.date}</p>
                      </div>
                    </div>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                      <svg className="h-4 w-4 transform group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </div>

              </div>
            </Link>
          </div>
        )}

        {/* Standard Posts Grid */}
        <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {standardPosts.map((post) => (
            <Link 
              key={post.id}
              href={`/blog/${post.id}`}
              className="group flex flex-col h-full rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:border-emerald-500/40 transition-all duration-300"
            >
              {/* Card Image */}
              <div className="relative h-56 overflow-hidden bg-slate-100 dark:bg-slate-800 shrink-0">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-slate-900 dark:text-white text-[9px] font-extrabold uppercase tracking-widest shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-8 flex flex-col grow">
                <div className="flex-1 space-y-3">
                  <div className="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    <span>{post.readTime}</span>
                    <span className="mx-2 text-slate-300 dark:text-slate-700">•</span>
                    <span>{post.date}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-2 font-medium">
                    {post.excerpt}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between shrink-0">
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 font-bold text-[10px] border border-slate-200 dark:border-slate-700">
                      {post.author.charAt(0)}
                    </div>
                    <p className="text-xs font-bold text-slate-800 dark:text-slate-200">{post.author}</p>
                  </div>
                  <span className="text-emerald-600 dark:text-emerald-400">
                    <svg className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}

          {/* Empty State (Professional, Admin link removed) */}
          {posts.length === 0 && (
            <div className="col-span-full flex flex-col items-center justify-center text-center py-32 px-4 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
              <div className="h-16 w-16 bg-slate-50 dark:bg-slate-800/50 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-slate-100 dark:border-slate-800 text-2xl shadow-inner">
                📝
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">No Insights Published Yet</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto mt-3 leading-relaxed font-medium">
                Our engineering and product teams are currently drafting new operational playbooks and technical benchmarks. Check back shortly for our first release.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}