'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Book, FileText, Video, PlayCircle, ChevronRight } from 'lucide-react'

export default function ResourcesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' }
  ]

  const resources = {
    ebook: {
      title: 'The MSP\'s Guide to AI Implementation',
      description: 'Learn how to successfully integrate AI into your MSP operations with our comprehensive guide.',
      icon: Book,
      cta: 'Download E-Book',
      link: '#'
    },
    blogPosts: [
      {
        title: 'How AI is Transforming MSP Service Delivery',
        date: 'August 5, 2025',
        excerpt: 'Discover the latest trends in AI-powered service desk management and how leading MSPs are leveraging these technologies.',
        link: '#'
      },
      {
        title: '5 Ways to Generate New Revenue Streams with AI',
        date: 'July 28, 2025',
        excerpt: 'Explore proven strategies for packaging AI solutions as premium services that clients love.',
        link: '#'
      },
      {
        title: 'Case Study: 200% ROI in Year 2',
        date: 'July 15, 2025',
        excerpt: 'Real-world example of how one MSP achieved exceptional returns with xop.ai solutions.',
        link: '#'
      }
    ],
    webinars: [
      {
        title: 'AI-Powered Ticket Management Masterclass',
        date: 'August 20, 2025',
        time: '2:00 PM EST',
        status: 'upcoming',
        link: '#'
      },
      {
        title: 'Building Your AI Service Offerings',
        date: 'August 13, 2025',
        time: '1:00 PM EST',
        status: 'upcoming',
        link: '#'
      },
      {
        title: 'Engineer Efficiency with AI Tools',
        date: 'July 30, 2025',
        time: '2:00 PM EST',
        status: 'recorded',
        link: '#'
      }
    ],
    demos: [
      {
        title: 'AURA Insights Demo',
        duration: '15 min',
        description: 'See how AURA monitors ticket health in real-time',
        link: '#'
      },
      {
        title: 'Engineer App v4 Walkthrough',
        duration: '20 min',
        description: 'Complete tour of our AI-powered engineer assistant',
        link: '#'
      },
      {
        title: 'Branded Chatbot Setup',
        duration: '12 min',
        description: 'Learn how to deploy your white-labeled client chatbot',
        link: '#'
      }
    ]
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="p-6 mb-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Image 
                src="/xop-logo.png" 
                alt="XOP.ai" 
                width={132} 
                height={88} 
                className="h-[88px] w-auto cursor-pointer"
              />
            </Link>
            <Image 
              src="/rezolve-logo.png" 
              alt="Rezolve.ai" 
              width={72} 
              height={48} 
              className="h-12 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-gray-300 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 hover:text-gray-300 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-full hover:opacity-90 transition-opacity text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        )}
      </nav>

      {/* Resources Section */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">Resources</h1>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Everything you need to succeed with AI in your MSP business
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

          {/* Blog Posts Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Latest Blog Posts</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {resources.blogPosts.map((post, index) => (
                <div key={index} className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors">
                  <FileText className="w-8 h-8 text-[#8BC34A] mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{post.date}</p>
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
            <div className="grid md:grid-cols-3 gap-6">
              {resources.webinars.map((webinar, index) => (
                <div key={index} className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors">
                  <Video className="w-8 h-8 text-[#8BC34A] mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{webinar.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{webinar.date} at {webinar.time}</p>
                  <div className="mb-4">
                    {webinar.status === 'upcoming' ? (
                      <span className="inline-block bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                        Upcoming
                      </span>
                    ) : (
                      <span className="inline-block bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                        Recorded
                      </span>
                    )}
                  </div>
                  <Link
                    href={webinar.link}
                    className="text-[#8BC34A] hover:underline inline-flex items-center gap-1"
                  >
                    {webinar.status === 'upcoming' ? 'Register' : 'Watch Recording'}
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Product Demos Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Product Demos</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {resources.demos.map((demo, index) => (
                <div key={index} className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors">
                  <PlayCircle className="w-8 h-8 text-[#8BC34A] mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{demo.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">Duration: {demo.duration}</p>
                  <p className="text-gray-400 mb-4">{demo.description}</p>
                  <Link
                    href={demo.link}
                    className="text-[#8BC34A] hover:underline inline-flex items-center gap-1"
                  >
                    Watch Demo
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gray-900 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to transform your MSP with AI?</h2>
            <p className="text-gray-400 mb-6">
              Get personalized guidance on implementing our solutions in your business.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                href="https://xop.im/partner"
                className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity inline-flex items-center justify-center"
              >
                Request ROI Analysis
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="bg-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-700 transition-colors inline-flex items-center justify-center"
              >
                Schedule a Call
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-gray-800 mt-16">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 xop.ai. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}