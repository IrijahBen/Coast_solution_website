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

interface Writer {
  name: string
  passcode: string
}

interface DemoRequest {
  id: number
  fullName: string
  email: string
  companyName: string
  date: string
}

export default function AdminDashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [passcode, setPasscode] = useState('')
  const [authError, setAuthError] = useState(false)
  const [activeWriter, setActiveWriter] = useState('')
  const [activeTab, setActiveTab] = useState<'blog' | 'registrations'>('blog')

  const [categories, setCategories] = useState<string[]>([])
  const [newCategoryInput, setNewCategoryInput] = useState('')
  const [writers, setWriters] = useState<Writer[]>([
    { name: 'Enter your names', passcode: '2026' }
  ])
  const [newWriterName, setNewWriterName] = useState('')
  const [newWriterPin, setNewWriterPin] = useState('')
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [demoRequests, setDemoRequests] = useState<DemoRequest[]>([])

  const [currentPost, setCurrentPost] = useState({
    title: '',
    category: '',
    author: '',
    readTime: '5 min read',
    excerpt: '',
    image: '',
    content: ''
  })

  useEffect(() => {
    const savedPosts = localStorage.getItem('coast_blog_posts')
    if (savedPosts) setPosts(JSON.parse(savedPosts))

    const savedCategories = localStorage.getItem('coast_blog_categories')
    if (savedCategories) setCategories(JSON.parse(savedCategories))

    const savedWriters = localStorage.getItem('coast_blog_writers')
    if (savedWriters) setWriters(JSON.parse(savedWriters))

    const savedRequests = localStorage.getItem('coast_demo_requests')
    if (savedRequests) setDemoRequests(JSON.parse(savedRequests))
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    const matchedWriter = writers.find(w => w.passcode === passcode)
    if (matchedWriter) {
      setIsAuthenticated(true)
      setActiveWriter(matchedWriter.name)
      setCurrentPost(prev => ({ ...prev, author: matchedWriter.name }))
      setAuthError(false)
    } else {
      setAuthError(true)
    }
  }

  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault()
    if (newCategoryInput.trim() && !categories.includes(newCategoryInput.trim())) {
      const updated = [...categories, newCategoryInput.trim()]
      setCategories(updated)
      localStorage.setItem('coast_blog_categories', JSON.stringify(updated))
      setNewCategoryInput('')
    }
  }

  const handleAddWriter = (e: React.FormEvent) => {
    e.preventDefault()
    if (newWriterName.trim() && newWriterPin.trim()) {
      const updatedWriters = [...writers, { name: newWriterName.trim(), passcode: newWriterPin.trim() }]
      setWriters(updatedWriters)
      localStorage.setItem('coast_blog_writers', JSON.stringify(updatedWriters))
      alert(`Writer "${newWriterName}" successfully authorized!`)
      setNewWriterName('')
      setNewWriterPin('')
    }
  }

  const handlePublishPost = (e: React.FormEvent) => {
    e.preventDefault()
    if (!currentPost.category) {
      alert('Please select a category first.')
      return
    }

    const newPost: BlogPost = {
      id: currentPost.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      title: currentPost.title,
      category: currentPost.category,
      author: activeWriter || currentPost.author,
      readTime: currentPost.readTime,
      // Fixed year option from numeric literal to 'numeric' string
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      excerpt: currentPost.excerpt,
      image: currentPost.image || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
      content: currentPost.content
    }

    const updatedPosts = [newPost, ...posts]
    setPosts(updatedPosts)
    localStorage.setItem('coast_blog_posts', JSON.stringify(updatedPosts))

    alert('Article published successfully!')
    setCurrentPost({
      title: '',
      category: categories[0] || '',
      author: activeWriter,
      readTime: '5 min read',
      excerpt: '',
      image: '',
      content: ''
    })
  }

  const handleDeletePost = (id: string) => {
    if (confirm('Delete this article?')) {
      const updated = posts.filter(p => p.id !== id)
      setPosts(updated)
      localStorage.setItem('coast_blog_posts', JSON.stringify(updated))
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 items-center justify-center px-4">
        <div className="max-w-md w-full bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 shadow-2xl border border-slate-200 dark:border-slate-800 text-center space-y-6">
          <div className="h-14 w-14 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-2xl mx-auto border border-emerald-500/20">
            🔒
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">Admin Control Center</h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Enter your secure passcode to access registrations and blog studio.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="password"
              placeholder="Enter passcode..."
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              className="w-full h-12 px-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-center text-lg tracking-widest focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono"
            />
            {authError && (
              <p className="text-xs font-bold text-rose-500">Access denied. Unrecognized passcode.</p>
            )}
            <button 
              type="submit"
              className="w-full h-12 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg transition-all cursor-pointer"
            >
              Authenticate & Enter
            </button>
          </form>

          <div>
            <Link href="/" className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
              ← Return to Home
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
      
      {/* Top Header */}
      <div className="max-w-6xl mx-auto w-full flex items-center justify-between mb-8 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            Logged in as: {activeWriter}
          </span>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-2">
            Coast Executive Dashboard
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <Link 
            href="/" 
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-800 dark:hover:bg-slate-700 font-bold text-xs shadow-md transition-all"
          >
            View Live Site →
          </Link>
          <button 
            onClick={() => setIsAuthenticated(false)}
            className="px-4 py-2.5 rounded-xl bg-rose-500/10 text-rose-600 hover:bg-rose-500/20 font-bold text-xs transition-all cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      </div>

      {/* Navigation Tabs between Blog CMS and Registrations */}
      <div className="max-w-6xl mx-auto w-full flex gap-3 mb-8">
        <button
          onClick={() => setActiveTab('blog')}
          className={`px-6 py-3 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'blog'
              ? 'bg-emerald-600 text-white shadow-md'
              : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800'
          }`}
        >
          📝 Blog Studio & Categories ({posts.length})
        </button>
        <button
          onClick={() => setActiveTab('registrations')}
          className={`px-6 py-3 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'registrations'
              ? 'bg-emerald-600 text-white shadow-md'
              : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800'
          }`}
        >
          👥 Registered Users & Demo Requests ({demoRequests.length})
        </button>
      </div>

      {activeTab === 'registrations' ? (
        <div className="max-w-6xl mx-auto w-full bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-6">
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Registered Users & Demo Inquiries</h3>
            <p className="text-xs text-slate-500 mt-1">Live feed of users who requested test credentials and registered via the demo portal.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 text-xs font-bold uppercase text-slate-400">
                  <th className="p-4">Full Name</th>
                  <th className="p-4">Work Email</th>
                  <th className="p-4">Business / Store Name</th>
                  <th className="p-4">Registration Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-xs sm:text-sm font-medium">
                {demoRequests.map((req) => (
                  <tr key={req.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30">
                    <td className="p-4 font-bold text-slate-900 dark:text-white">{req.fullName}</td>
                    <td className="p-4 text-emerald-600 dark:text-emerald-400 font-mono">{req.email}</td>
                    <td className="p-4 text-slate-600 dark:text-slate-300">{req.companyName}</td>
                    <td className="p-4 text-slate-400 font-mono">{req.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {demoRequests.length === 0 && (
              <div className="text-center py-12 text-slate-400 italic text-xs">
                No demo requests or user registrations recorded yet. Test it by clicking "Request Demo" on the live site!
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-xl border border-slate-200/80 dark:border-slate-800">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3">Custom Categories</h3>
              <form onSubmit={handleAddCategory} className="space-y-3 mb-4">
                <input 
                  type="text"
                  placeholder="e.g., Financial Audit"
                  value={newCategoryInput}
                  onChange={(e) => setNewCategoryInput(e.target.value)}
                  className="w-full h-11 px-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button type="submit" className="w-full py-2.5 rounded-xl bg-slate-900 dark:bg-slate-800 text-white font-bold text-xs shadow cursor-pointer">
                  + Create Category
                </button>
              </form>
              <div className="flex flex-wrap gap-1.5">
                {categories.map((cat, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200 dark:border-slate-800">
                    {cat}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-xl border border-slate-200/80 dark:border-slate-800">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3">Authorize New Writer</h3>
              <form onSubmit={handleAddWriter} className="space-y-3">
                <input 
                  type="text"
                  placeholder="Writer Full Name"
                  value={newWriterName}
                  onChange={(e) => setNewWriterName(e.target.value)}
                  className="w-full h-11 px-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <input 
                  type="password"
                  placeholder="Assign Passcode PIN"
                  value={newWriterPin}
                  onChange={(e) => setNewWriterPin(e.target.value)}
                  className="w-full h-11 px-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono"
                />
                <button type="submit" className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow cursor-pointer">
                  Grant Writer Access
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-2">
            <form onSubmit={handlePublishPost} className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 shadow-2xl border border-slate-200/80 dark:border-slate-800 space-y-5">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Publish New Article</h3>

              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">Article Title</label>
                <input 
                  type="text" 
                  required
                  placeholder="Enter headline..."
                  value={currentPost.title}
                  onChange={(e) => setCurrentPost({ ...currentPost, title: e.target.value })}
                  className="w-full h-12 px-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">Category</label>
                  <select 
                    required
                    value={currentPost.category}
                    onChange={(e) => setCurrentPost({ ...currentPost, category: e.target.value })}
                    className="w-full h-12 px-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="" disabled>Select category...</option>
                    {categories.map((cat, idx) => (
                      <option key={idx} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">Read Time</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g., 5 min read"
                    value={currentPost.readTime}
                    onChange={(e) => setCurrentPost({ ...currentPost, readTime: e.target.value })}
                    className="w-full h-12 px-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">Featured Image URL</label>
                <input 
                  type="url" 
                  placeholder="https://images.unsplash.com/..."
                  value={currentPost.image}
                  onChange={(e) => setCurrentPost({ ...currentPost, image: e.target.value })}
                  className="w-full h-12 px-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">Short Summary</label>
                <textarea 
                  required
                  rows={2}
                  placeholder="Brief summary for cards..."
                  value={currentPost.excerpt}
                  onChange={(e) => setCurrentPost({ ...currentPost, excerpt: e.target.value })}
                  className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">Article Body (Supports H1, H2, H3)</label>
                <textarea 
                  required
                  rows={6}
                  placeholder="Write your article content..."
                  value={currentPost.content}
                  onChange={(e) => setCurrentPost({ ...currentPost, content: e.target.value })}
                  className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none font-mono"
                />
              </div>

              <button 
                type="submit"
                className="w-full h-14 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl shadow-emerald-900/20 transition-all cursor-pointer"
              >
                Publish Article Live →
              </button>
            </form>

            <div className="mt-8 bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-xl border border-slate-200/80 dark:border-slate-800">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">Manage Published Posts</h3>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {posts.map(p => (
                  <div key={p.id} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200">{p.title}</span>
                    <button onClick={() => handleDeletePost(p.id)} className="text-xs text-rose-500 font-bold hover:underline cursor-pointer">Delete</button>
                  </div>
                ))}
                {posts.length === 0 && <p className="text-xs text-slate-400 italic">No posts published yet.</p>}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}