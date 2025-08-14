'use client'

import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Link from 'next/link'
import { ChevronRight, Calendar, User } from 'lucide-react'

export default function BlogPage() {
  const blogPosts = [
    {
      slug: 'ai-and-msps-no-longer-optional',
      title: 'AI and MSPs – It\'s no longer \'optional\'',
      excerpt: 'The landscape has shifted. AI adoption is no longer a competitive advantage—it\'s becoming a necessity for MSP survival.',
      author: 'Matt Ruck',
      date: 'April 29, 2025',
      category: 'AI Strategy'
    },
    {
      slug: '2025-ai-msps-survey',
      title: 'Participate in the 2025 AI for MSPs Survey!',
      excerpt: 'Help shape the future of AI in the MSP industry by participating in our comprehensive 2025 survey.',
      author: 'Matt Ruck', 
      date: 'March 15, 2025',
      category: 'Industry Research'
    },
    {
      slug: 'icon-awards-finalist',
      title: 'xop.ai Named Finalist for Emerging Technology Company of the Year at the 2025 ICON Awards!',
      excerpt: 'We\'re honored to be recognized as a finalist for our innovative AI solutions specifically designed for MSPs.',
      author: 'Matt Ruck',
      date: 'February 25, 2025',
      category: 'Company News'
    },
    {
      slug: 'channel-futures-webinar',
      title: 'GenAI for MSPs – Channel Futures Webinar',
      excerpt: 'Missed our Channel Futures webinar? Catch up on the latest insights about Generative AI for MSPs.',
      author: 'Matt Ruck',
      date: 'February 10, 2025',
      category: 'Webinars'
    },
    {
      slug: 'build-vs-buy-ai-product',
      title: 'Build Versus Buy – You Need an AI Product Not a Platform',
      excerpt: 'Why MSPs should focus on ready-to-use AI products rather than building on general AI platforms.',
      author: 'Matt Ruck',
      date: 'January 28, 2025',
      category: 'AI Strategy'
    },
    {
      slug: 'ai-explainability',
      title: '\'Explainability\' in GenAI: What does it mean?',
      excerpt: 'Understanding the importance of AI explainability and how it impacts MSP decision-making and client trust.',
      author: 'Matt Ruck',
      date: 'January 15, 2025',
      category: 'AI Technology'
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Blog Header */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">AI for MSPs Blog</h1>
          <p className="text-xl text-gray-300 mb-12">
            Insights, strategies, and real-world applications of AI for managed service providers
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold mb-3 line-clamp-2">
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="hover:text-green-400 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-green-400 hover:underline"
                  >
                    Read More
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}