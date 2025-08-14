'use client'

import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Link from 'next/link'
import { Book, FileText, Video, PlayCircle, ChevronRight, Mic, ExternalLink, Play } from 'lucide-react'

export default function ResourcesPage() {
  const resources = {
    ebook: {
      title: 'Free AI Implementation Guide for MSPs',
      description: 'Get our comprehensive guide to successfully implementing AI solutions in your MSP operations. Join hundreds of MSPs already transforming their business with AI.',
      icon: Book,
      cta: 'Get Free E-Book',
      link: '/ebook'
    },
    podcasts: [
      {
        title: 'AI for MSPs - The Opportunity',
        description: 'Exploring the landscape of AI opportunities specifically designed for managed service providers.',
        episode: 1,
        link: 'https://youtu.be/E9KLUqd86xo'
      },
      {
        title: 'AI for MSPs - Gen AI Middleware',
        description: 'Understanding how generative AI middleware can bridge the gap between MSP operations and AI capabilities.',
        episode: 2,
        link: 'https://youtu.be/hzFnUJio2vI'
      },
      {
        title: 'AI for MSPs - How We Partner With MSPs',
        description: 'Learn about our partnership approach and how we work with MSPs to implement AI solutions.',
        episode: 3,
        link: 'https://youtu.be/s2GwKqqly7U'
      },
      {
        title: 'AI for MSPs - The impact of AI on MRR Price Points',
        description: 'Discussing how AI implementations affect monthly recurring revenue and pricing strategies.',
        episode: 4,
        link: 'https://youtu.be/CH6ThSqexhs'
      },
      {
        title: 'AI for MSPs - Building a Bot From Scratch?',
        description: 'Should MSPs build custom AI bots or leverage existing solutions? We explore the pros and cons.',
        episode: 5,
        link: 'https://youtu.be/BXpTLEImoBc'
      },
      {
        title: 'AI for MSPs - The Evolution of From AI To Gen AI and Now Agentic AI',
        description: 'Tracing the evolution of AI technologies and what agentic AI means for MSPs.',
        episode: 6,
        link: 'https://youtu.be/DHaaDxFsfP8'
      },
      {
        title: 'AI for MSPs - Introducing HR chatbots to MSP community',
        description: 'How HR chatbots can streamline MSP internal operations and employee support.',
        episode: 7,
        link: 'https://youtu.be/mg9T_IopaFk'
      },
      {
        title: 'AI for MSPs - Are MSPs Too Bogged Down with Automation Projects?',
        description: 'Examining whether MSPs are overwhelmed by automation initiatives and how to prioritize effectively.',
        episode: 8,
        link: 'https://youtu.be/ULIUhaFn7XI'
      },
      {
        title: 'AI for MSPs - Auto Categorizing Ticket Types, Priority Level & Time Entries',
        description: 'Deep dive into automated ticket categorization and time tracking using AI.',
        episode: 9,
        link: 'https://youtu.be/w9BHKutccPc'
      }
    ],
    blogPosts: [
      {
        title: 'AI and MSPs – It\'s no longer \'optional\'',
        excerpt: 'The landscape has shifted. AI adoption is no longer a competitive advantage—it\'s becoming a necessity for MSP survival.',
        link: '/blog/ai-and-msps-no-longer-optional'
      },
      {
        title: 'Participate in the 2025 AI for MSPs Survey!',
        excerpt: 'Help shape the future of AI in the MSP industry by participating in our comprehensive 2025 survey.',
        link: '/blog/2025-ai-msps-survey'
      },
      {
        title: 'xop.ai Named Finalist for Emerging Technology Company of the Year at the 2025 ICON Awards!',
        excerpt: 'We\'re honored to be recognized as a finalist for our innovative AI solutions specifically designed for MSPs.',
        link: '/blog/icon-awards-finalist'
      },
      {
        title: 'GenAI for MSPs – Channel Futures Webinar',
        excerpt: 'Missed our Channel Futures webinar? Catch up on the latest insights about Generative AI for MSPs.',
        link: '/blog/channel-futures-webinar'
      },
      {
        title: 'Build Versus Buy – You Need an AI Product Not a Platform',
        excerpt: 'Why MSPs should focus on ready-to-use AI products rather than building on general AI platforms.',
        link: '/blog/build-vs-buy-ai-product'
      },
      {
        title: '\'Explainability\' in GenAI: What does it mean?',
        excerpt: 'Understanding the importance of AI explainability and how it impacts MSP decision-making and client trust.',
        link: '/blog/ai-explainability'
      }
    ],
    webinars: [
      {
        title: 'GenAI for MSPs Partnership Opportunities',
        description: 'Discover how to leverage AI partnerships to grow your MSP business and increase MRR.',
        status: 'upcoming',
        link: 'https://xop.ai/webinar-register-msp-ai-partnership/'
      },
      {
        title: 'AI Implementation Masterclass for MSPs',
        description: 'Learn proven strategies for successfully implementing AI solutions in your MSP operations.',
        status: 'upcoming', 
        link: 'https://xop.ai/webinar-register/'
      }
    ],
    demos: [
      {
        title: 'AURA Insights: Your IT Service Desk\'s New Best Friend',
        duration: 'Interactive Demo',
        description: 'Experience how AURA identifies at-risk tickets, summarizes complex issues, and improves communication quality in real-time.',
        link: 'https://app.supademo.com/demo/cm6civ0j915eh280ife3r6d9b'
      }
    ]
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Resources Section */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">Resources Hub</h1>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Resources on our AI solutions for MSPs & the organizations they serve
          </p>

          {/* E-Book Section */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg p-8 md:p-12 border border-purple-500/20">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <Book className="w-24 h-24 text-purple-400" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-3xl font-bold mb-4">{resources.ebook.title}</h2>
                  <p className="text-lg text-gray-300 mb-6">{resources.ebook.description}</p>
                  <Link
                    href={resources.ebook.link}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
                  >
                    {resources.ebook.cta}
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Podcast Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Matt & Manish AI Automation for MSPs Podcast</h2>
            <p className="text-lg text-gray-300 mb-8 text-center">
              9 episodes focused on AI opportunities, implementation strategies, and real-world applications for MSPs
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.podcasts.map((podcast, index) => (
                <div key={index} className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors group">
                  <div className="flex items-center gap-3 mb-4">
                    <Mic className="w-8 h-8 text-yellow-400" />
                    <span className="text-sm bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full">
                      Episode {podcast.episode}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{podcast.title}</h3>
                  <p className="text-gray-400 mb-6">{podcast.description}</p>
                  <a
                    href={podcast.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 font-medium transition-colors group-hover:underline"
                  >
                    <Play className="w-4 h-4" />
                    Watch on YouTube
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Blog Posts Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Latest Blog Posts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.blogPosts.map((post, index) => (
                <div key={index} className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors">
                  <FileText className="w-8 h-8 text-[#8BC34A] mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  <Link
                    href={post.link}
                    className="text-[#8BC34A] hover:underline inline-flex items-center gap-1"
                  >
                    Read More
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Webinars Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Webinars</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {resources.webinars.map((webinar, index) => (
                <div key={index} className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors">
                  <Video className="w-8 h-8 text-[#8BC34A] mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{webinar.title}</h3>
                  <p className="text-gray-400 mb-4">{webinar.description}</p>
                  <div className="mb-4">
                    <span className="inline-block bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                      Available
                    </span>
                  </div>
                  <a
                    href={webinar.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8BC34A] hover:underline inline-flex items-center gap-1"
                  >
                    Register Now
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Guided Demos Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Guided Demos</h2>
            <div className="grid md:grid-cols-1 gap-6">
              {resources.demos.map((demo, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-lg p-8 border border-blue-500/20 hover:border-blue-500/40 transition-colors">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-shrink-0">
                      <PlayCircle className="w-24 h-24 text-blue-400" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-3xl font-bold mb-4">{demo.title}</h3>
                      <p className="text-lg text-gray-300 mb-6">{demo.description}</p>
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-sm bg-blue-400/20 text-blue-400 px-3 py-1 rounded-full">
                          {demo.duration}
                        </span>
                      </div>
                      <a
                        href={demo.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
                      >
                        Experience Demo
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}