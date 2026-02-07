'use client'

import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Link from 'next/link'
import { ChevronRight, Calendar, User, Clock, TrendingUp } from 'lucide-react'

export default function BlogPage() {
  // Blog posts array with new strategic posts - 2024 posts first, then chronological 2025 posts
  const blogPosts = [
    {
      slug: 'ai-voice-engineer-assist-agent',
      title: 'Introducing AI Voice Engineer Assist Agent: Your Silent Partner on Every Call',
      excerpt: 'AI that listens to engineer-client conversations and automatically documents everything—eliminating post-call data entry forever.',
      author: 'Matt Ruck',
      date: 'February 24, 2026',
      category: 'Voice AI',
      readTime: '8 min read',
      trending: true,
      gradient: 'from-purple-500/10 to-pink-500/10',
      borderColor: 'border-purple-500/30'
    },
    {
      slug: 'ai-voice-overflow-agent',
      title: 'Introducing AI Voice Overflow Agent: Never Miss Another Call',
      excerpt: 'Intelligent call handling that activates when your team is at capacity, ensuring every caller gets immediate attention and every issue is documented.',
      author: 'Matt Ruck',
      date: 'February 17, 2026',
      category: 'Voice AI',
      readTime: '7 min read',
      gradient: 'from-green-500/10 to-emerald-500/10',
      borderColor: 'border-green-500/30'
    },
    {
      slug: 'halo-psa-product-launch',
      title: 'xop.ai Now Integrates with Halo PSA: AI-Powered Efficiency for Growing MSPs',
      excerpt: 'The platform trusted by thousands of MSPs worldwide now has access to purpose-built AI that transforms service delivery.',
      author: 'Matt Ruck',
      date: 'February 10, 2026',
      category: 'Product Launch',
      readTime: '6 min read',
      gradient: 'from-purple-500/10 to-pink-500/10',
      borderColor: 'border-purple-500/30'
    },
    {
      slug: 'servicenow-product-launch',
      title: 'xop.ai Launches Full ServiceNow Integration: Enterprise-Grade AI for ITSM',
      excerpt: 'Bringing the same powerful AI capabilities that transformed ConnectWise operations to the enterprise ServiceNow ecosystem.',
      author: 'Matt Ruck',
      date: 'February 3, 2026',
      category: 'Product Launch',
      readTime: '7 min read',
      gradient: 'from-blue-500/10 to-cyan-500/10',
      borderColor: 'border-blue-500/30'
    },
    {
      slug: 'connectwise-pod-launch',
      title: 'Introducing the ConnectWise Manage Pod: AI That Lives Where Your Engineers Already Work',
      excerpt: 'No more context switching. No more separate applications. Our Engineer Assist solution now runs as a native pod directly inside ConnectWise Manage.',
      author: 'Matt Ruck',
      date: 'January 13, 2026',
      category: 'Product Launch',
      readTime: '10 min read',
      gradient: 'from-green-500/10 to-emerald-500/10',
      borderColor: 'border-green-500/30'
    },
    {
      slug: 'reactive-to-predictive',
      title: 'From Reactive to Predictive: How AI is Transforming MSP Operations from Firefighting to Strategic Leadership',
      excerpt: 'The most successful MSPs are moving beyond reactive support to predictive operations. Here\'s how AI is enabling this transformation and why it\'s becoming essential for competitive MSPs.',
      author: 'Matt Ruck',
      date: 'August 14, 2024',
      category: 'Operational Excellence',
      readTime: '11 min read',
      gradient: 'from-green-500/10 to-blue-500/10',
      borderColor: 'border-green-500/30'
    },
    {
      slug: 'the-30-percent-rule',
      title: 'The 30% Rule: Why Level 1 Ticket Deflection is the New MSP Metric That Matters',
      excerpt: 'Move beyond reactive support to proactive deflection. The MSPs winning today are eliminating 30%+ of Level 1 tickets before they reach human engineers.',
      author: 'Matt Ruck',
      date: 'July 15, 2024',
      category: 'MSP Operations',
      readTime: '8 min read',
      gradient: 'from-green-500/10 to-emerald-500/10',
      borderColor: 'border-green-500/30'
    },
    {
      slug: 'great-ai-training-divide',
      title: 'The Great AI Training Divide: Why Generic AI Fails and Environment-Specific Training Wins',
      excerpt: 'The difference between 15% and 80% AI effectiveness isn\'t the model or the interface – it\'s what you train the AI on. Most MSPs are getting this fundamentally wrong.',
      author: 'Matt Ruck',
      date: 'July 8, 2024',
      category: 'AI Strategy',
      readTime: '10 min read',
      gradient: 'from-purple-500/10 to-blue-500/10',
      borderColor: 'border-purple-500/30'
    },
    {
      slug: 'beyond-cost-savings',
      title: 'Beyond Cost Savings: How MSPs Are Generating $250K+ Annual Recurring Revenue with White-Labeled AI',
      excerpt: 'While other MSPs focus on AI for internal efficiency, forward-thinking providers are building entirely new revenue streams with productized AI solutions.',
      author: 'Matt Ruck',
      date: 'June 22, 2024',
      category: 'Revenue Generation',
      readTime: '12 min read',
      gradient: 'from-blue-500/10 to-purple-500/10',
      borderColor: 'border-blue-500/30'
    },
    {
      slug: 'ai-and-msps-no-longer-optional',
      title: 'AI and MSPs – It\'s no longer \'optional\'',
      excerpt: 'The landscape has shifted. AI adoption is no longer a competitive advantage—it\'s becoming a necessity for MSP survival.',
      author: 'Matt Ruck',
      date: 'April 29, 2025',
      category: 'AI Strategy',
      readTime: '6 min read',
      trending: true,
      gradient: 'from-green-500/10 to-emerald-500/10',
      borderColor: 'border-green-500/30'
    },
    {
      slug: '2025-ai-msps-survey',
      title: 'Participate in the 2025 AI for MSPs Survey!',
      excerpt: 'Help shape the future of AI in the MSP industry by participating in our comprehensive 2025 survey.',
      author: 'Matt Ruck', 
      date: 'March 15, 2025',
      category: 'Industry Research',
      readTime: '4 min read',
      gradient: 'from-blue-500/10 to-cyan-500/10',
      borderColor: 'border-blue-500/30'
    },
    {
      slug: 'icon-awards-finalist',
      title: 'xop.ai Named Finalist for Emerging Technology Company of the Year at the 2025 ICON Awards!',
      excerpt: 'We\'re honored to be recognized as a finalist for our innovative AI solutions specifically designed for MSPs.',
      author: 'Matt Ruck',
      date: 'February 25, 2025',
      category: 'Company News',
      readTime: '5 min read',
      gradient: 'from-purple-500/10 to-pink-500/10',
      borderColor: 'border-purple-500/30'
    },
    {
      slug: 'channel-futures-webinar',
      title: 'GenAI for MSPs – Channel Futures Webinar',
      excerpt: 'Missed our Channel Futures webinar? Catch up on the latest insights about Generative AI for MSPs.',
      author: 'Matt Ruck',
      date: 'February 10, 2025',
      category: 'Webinars',
      readTime: '7 min read',
      gradient: 'from-orange-500/10 to-red-500/10',
      borderColor: 'border-orange-500/30'
    },
    {
      slug: 'build-vs-buy-ai-product',
      title: 'Build Versus Buy – You Need an AI Product Not a Platform',
      excerpt: 'Why MSPs should focus on ready-to-use AI products rather than building on general AI platforms.',
      author: 'Matt Ruck',
      date: 'January 28, 2025',
      category: 'AI Strategy',
      readTime: '8 min read',
      gradient: 'from-green-500/10 to-emerald-500/10',
      borderColor: 'border-green-500/30'
    },
    {
      slug: 'ai-explainability',
      title: '\'Explainability\' in GenAI: What does it mean?',
      excerpt: 'Understanding the importance of AI explainability and how it impacts MSP decision-making and client trust.',
      author: 'Matt Ruck',
      date: 'January 15, 2025',
      category: 'AI Technology',
      readTime: '9 min read',
      gradient: 'from-cyan-500/10 to-blue-500/10',
      borderColor: 'border-cyan-500/30'
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Blog Header */}
      <section className="px-6 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 via-transparent to-blue-900/10"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full mb-6">
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium text-green-400">Latest AI Insights for MSPs</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">
            AI for MSPs Blog
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
            Insights, strategies, and real-world applications of AI for managed service providers
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover how leading MSPs are leveraging artificial intelligence to deliver exceptional service, 
            increase efficiency, and drive sustainable growth.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className={`bg-gradient-to-br ${post.gradient} border ${post.borderColor} rounded-xl overflow-hidden hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300 transform hover:-translate-y-1`}>
                <div className="p-6 bg-gray-900/80 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-full font-medium">
                      {post.category}
                    </span>
                    {post.trending && (
                      <div className="flex items-center gap-1 text-xs text-orange-400">
                        <TrendingUp className="w-3 h-3" />
                        Trending
                      </div>
                    )}
                  </div>
                  
                  <h2 className="text-xl font-bold mb-4 line-clamp-2 leading-tight">
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="hover:text-green-400 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="text-gray-300 mb-6 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{post.date}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-medium transition-colors group"
                    >
                      Read More
                      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
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