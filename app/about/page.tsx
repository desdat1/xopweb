'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' }
  ]

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

      {/* About Section */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">About xop.ai</h1>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Where MSP expertise meets cutting-edge AI technology
          </p>

          {/* Placeholder content - to be replaced with actual content later */}
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="bg-gray-900 rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  xop.ai was founded by Matt Ruck, who brings nearly 30 years of experience running designDATA, a successful mid-sized MSP in Washington, DC. During his tenure as CEO, Matt discovered a simple yet powerful formula for building a best-in-class MSP: keep clients happy so they renew, maintain healthy margins through appropriate pricing, and cultivate a thriving business development team.
                </p>
                <p>
                  By executing these principles effectively, designDATA achieved consistent year-over-year growth with solid margins. When Matt left to establish xop.ai, his mission was clear: help the MSP community implement AI solutions that enhance these three critical aspects of their business.
                </p>
                <p>
                  Today, xop.ai delivers on that promise with solutions designed specifically for MSPs. Our tools integrate seamlessly with your existing tech stack—ConnectWise Manage, IT Glue, IT Boost, Hudu, Confluence, ServiceNow—without disrupting your operations. Every solution we offer is built with one non-negotiable requirement: it must deliver real, measurable ROI.
                </p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-300">
                AI is about to fundamentally reshape the MSP landscape. In the next few years, we'll see a clear divide emerge between MSPs that embrace AI and those that don't. The early adopters will gain unprecedented operational efficiencies, allowing them to deliver superior service at lower costs. Those who wait will find themselves trapped in a vicious cycle—watching their margins shrink as AI-enabled competitors undercut their pricing while delivering better service. We exist to ensure you're on the winning side of this transformation, helping you gain that critical 20-30% efficiency advantage before it's too late.
              </p>
            </div>

            <div className="bg-gray-900 rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-4">Our Partnership with Rezolve.ai</h2>
              <p className="text-gray-300">
                xop.ai has partnered with Rezolve.ai, a leader in the AI space, to develop custom solutions tailored specifically for the MSP community. This partnership combines Rezolve.ai's cutting-edge AI technology with our deep understanding of MSP operations, resulting in tools that address real-world challenges. Together, we're not just bringing AI to MSPs—we're bringing the right AI solutions that actually work.
              </p>
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