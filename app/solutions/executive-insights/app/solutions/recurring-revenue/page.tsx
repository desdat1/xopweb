'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function GenerateRecurringRevenuePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-4">
              <img src="/xop-logo.png" alt="xop.ai" className="h-[88px]" />
              <img src="/rezolve-logo.png" alt="Rezolve.ai" className="h-12" />
            </Link>
            
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="hover:text-green-400 transition-colors">Home</Link>
              <Link href="/about" className="hover:text-green-400 transition-colors">About Us</Link>
              <Link href="/resources" className="hover:text-green-400 transition-colors">Resources</Link>
              <Link href="/contact" className="hover:text-green-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 animate-pulse-slow">
              <span className="text-5xl animate-float">💰</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeIn">
              Generate Recurring Revenue
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slideIn">
              Transform your MSP with AI-powered solutions that create new revenue streams
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slideIn">
              <a href="https://xop.im/partner" className="cta-button">
                Schedule a Demo
              </a>
              <a href="https://xop.im/partner" className="px-8 py-4 rounded-full border-2 border-purple-500 hover:bg-purple-500/20 transition-all text-center">
                Request ROI Report
              </a>
              <a href="/videos/generate-recurring-revenue-demo.mp4" className="px-8 py-4 rounded-full border-2 border-pink-500 hover:bg-pink-500/20 transition-all text-center">
                See in Action
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Two Solutions Overview */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient">Two Powerful Revenue-Generating Solutions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Standalone Enterprise Search */}
            <div className="bg-black/50 border border-purple-500/30 rounded-2xl p-8 hover:border-purple-500/50 transition-all">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Standalone Enterprise Search</h3>
              <p className="text-gray-300 mb-6">
                Perfect for clients who want powerful AI search capabilities without ticketing integration
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>SharePoint integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Document upload & indexing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Website content integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Knowledge accuracy tracking</span>
                </li>
              </ul>
              <div className="mt-6 text-2xl font-bold text-green-400">~$11/endpoint/month</div>
            </div>

            {/* MSP Branded Chatbot Add-on */}
            <div className="bg-black/50 border border-pink-500/30 rounded-2xl p-8 hover:border-pink-500/50 transition-all">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-4 text-pink-400">MSP Branded Chatbot + Search</h3>
              <p className="text-gray-300 mb-6">
                Complete solution with ConnectWise integration for ticket deflection and self-service
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>All Enterprise Search features</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>ConnectWise Manage integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>White-labeled chatbot</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>20% ticket deflection</span>
                </li>
              </ul>
              <div className="mt-6 text-2xl font-bold text-green-400">Premium pricing</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient">Revenue Generation Benefits</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-green-900/20 to-green-800/20 border border-green-500/30 rounded-xl p-6">
              <div className="text-3xl mb-4">📈</div>
              <h3 className="text-xl font-bold mb-3 text-green-400">New Revenue Stream</h3>
              <p className="text-gray-300">Add ~$11 per endpoint monthly recurring revenue with minimal effort</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/20 border border-blue-500/30 rounded-xl p-6">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3 text-blue-400">Easy to Sell</h3>
              <p className="text-gray-300">Clients instantly understand the value of better knowledge management</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/20 border border-purple-500/30 rounded-xl p-6">
              <div className="text-3xl mb-4">🔄</div>
              <h3 className="text-xl font-bold mb-3 text-purple-400">Sticky Solution</h3>
              <p className="text-gray-300">Once deployed, becomes essential to daily operations</p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-900/20 to-pink-800/20 border border-pink-500/30 rounded-xl p-6">
              <div className="text-3xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-3 text-pink-400">Competitive Edge</h3>
              <p className="text-gray-300">Position yourself as an AI-forward MSP delivering innovation</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Tabs */}
      <section className="py-16 bg-gray-900/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-black/50 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Implementation Process</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Client Discovery</h4>
                    <p className="text-gray-300">Identify clients struggling with knowledge management or looking for self-service options</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Solution Selection</h4>
                    <p className="text-gray-300">Choose standalone search or full chatbot solution based on client needs</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Quick Deployment</h4>
                    <p className="text-gray-300">Connect SharePoint, upload documents, configure approved websites</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Ongoing Revenue</h4>
                    <p className="text-gray-300">Start billing immediately, monitor usage, and expand to more endpoints</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Core Features</h2>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <h3 className="font-bold mb-1">SharePoint Integration</h3>
                <p className="text-gray-400 text-sm">Seamlessly connect to client SharePoint libraries and document stores</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <h3 className="font-bold mb-1">Document Upload</h3>
                <p className="text-gray-400 text-sm">Easy bulk upload of PDFs, Word docs, and other knowledge assets</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <h3 className="font-bold mb-1">Website Scraping</h3>
                <p className="text-gray-400 text-sm">Pull information from approved websites and knowledge bases</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <h3 className="font-bold mb-1">Accuracy Tracking</h3>
                <p className="text-gray-400 text-sm">Monitor and improve knowledge quality with built-in feedback loops</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <h3 className="font-bold mb-1">White-Label Options</h3>
                <p className="text-gray-400 text-sm">Deliver under your MSP brand for stronger client relationships</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <h3 className="font-bold mb-1">Usage Analytics</h3>
                <p className="text-gray-400 text-sm">Track adoption, popular queries, and demonstrate value to clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Preview */}
      <section className="py-16 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gradient">Revenue Potential Calculator</h2>
            <p className="text-xl text-gray-300 mb-8">See how much recurring revenue you could generate</p>
            
            <div className="bg-black/50 border border-gray-800 rounded-2xl p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <p className="text-gray-400 mb-2">100 Endpoints</p>
                  <p className="text-3xl font-bold text-green-400">$1,100/month</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-2">500 Endpoints</p>
                  <p className="text-3xl font-bold text-green-400">$5,500/month</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-2">1000 Endpoints</p>
                  <p className="text-3xl font-bold text-green-400">$11,000/month</p>
                </div>
              </div>
            </div>
            
            <a href="https://xop.im/partner" className="cta-button">
              Get Your Custom Revenue Projection
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Start Generating New Revenue Today</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join MSPs who are successfully monetizing AI and creating sustainable recurring revenue streams
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://xop.im/partner" className="cta-button">
                Become a Partner
              </a>
              <a href="/contact" className="px-8 py-4 rounded-full border-2 border-white hover:bg-white hover:text-black transition-all text-center">
                Contact Our Team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img src="/xop-logo.png" alt="xop.ai" className="h-12 mb-4" />
              <p className="text-gray-400">AI Solutions Designed by MSPs, For MSPs</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/solutions/engineer-efficiency" className="hover:text-white">Engineer Efficiency</Link></li>
                <li><Link href="/solutions/service-desk-management" className="hover:text-white">Service Desk Management</Link></li>
                <li><Link href="/solutions/executive-insights" className="hover:text-white">Executive Insights</Link></li>
                <li><Link href="/solutions/generate-recurring-revenue" className="hover:text-white">Generate Revenue</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/resources" className="hover:text-white">Resources</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <p className="text-gray-400">
                PO Box 261<br />
                Brookeville, MD 20833<br />
                202-525-8159
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 xop.ai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}