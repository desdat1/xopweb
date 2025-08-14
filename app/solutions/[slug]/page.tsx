'use client'

import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import { useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

// This would normally come from a database or CMS
const solutionData: Record<string, any> = {
  'integrated-stack': {
    title: 'Integrated to Your Stack',
    icon: '🔗',
    description: 'Seamless integration with your existing tools',
    content: 'Content coming soon for Integrated Stack solution...'
  },
  'aura-insights': {
    title: 'AURA Insights',
    icon: '👁️',
    description: 'AI-powered ticket health monitoring',
    content: 'Content coming soon for AURA Insights solution...'
  },
  'engineer-efficiency': {
    title: 'Engineer Efficiency',
    icon: '👷',
    description: 'Free up engineers to solve complex problems',
    content: 'Content coming soon for Engineer Efficiency solution...'
  },
  'service-desk-management': {
    title: 'Service Desk Management',
    icon: '📊',
    description: 'Real-time insights for service managers',
    content: 'Content coming soon for Service Desk Management solution...'
  },
  'executive-insights': {
    title: 'Executive Insights',
    icon: '🎯',
    description: 'Data-driven decisions at your fingertips',
    content: 'Content coming soon for Executive Insights solution...'
  },
  'branded-chatbot': {
    title: 'Branded Chatbot for Clients',
    icon: '💬',
    description: 'Let clients self-serve with your AI assistant',
    content: 'Content coming soon for Branded Chatbot solution...'
  },
  'recurring-revenue': {
    title: 'Generate Recurring Revenue',
    icon: '💰',
    description: 'New revenue stream at $11/endpoint',
    content: 'Content coming soon for Recurring Revenue solution...'
  },
  'voice-agents': {
    title: 'Voice Agents',
    icon: '📞',
    description: 'AI that sounds human, works 24/7',
    content: 'Content coming soon for Voice Agents solution...'
  },
  'email-agents': {
    title: 'Email Agents',
    icon: '📧',
    description: 'Intelligent email triage and response',
    content: 'Content coming soon for Email Agents solution...'
  }
}

export default function SolutionPage() {
  const params = useParams()
  const slug = params.slug as string
  const solution = solutionData[slug] || null
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' }
  ]

  if (!solution) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Solution Not Found</h1>
          <Link href="/" className="text-[#8BC34A] hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    )
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

      {/* Solution Content */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">{solution.icon}</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{solution.title}</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {solution.description}
            </p>
          </div>

          {/* Placeholder content area */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-lg p-8 mb-8">
              <p className="text-gray-400">
                {solution.content}
              </p>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-6">Ready to get started?</h2>
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
                  Contact Us
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}