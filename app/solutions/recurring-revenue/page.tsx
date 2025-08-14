'use client'

import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function GenerateRecurringRevenuePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

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
            
            {/* Action Button - Video Only */}
            <div className="flex justify-center mb-12 animate-fadeIn delay-400">
              <Link
                href="/videos/recurring-revenue-demo.mp4"
                className="relative bg-gradient-to-r from-green-600 to-emerald-500 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-green-500/50 transform hover:scale-105 transition-all overflow-hidden group flex items-center justify-center gap-3"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center relative z-10">
                  <svg className="w-3 h-3 text-green-600 ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
                <span className="relative z-10">See in Action</span>
              </Link>
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
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-purple-500/30 rounded-2xl p-8 hover:border-purple-500/50 transition-all">
              <div className="text-5xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Standalone Enterprise Search</h3>
              <p className="text-gray-300 mb-6">
                Perfect for clients who want powerful AI search capabilities without ticketing integration
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1 text-lg">✓</span>
                  <span>SharePoint integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1 text-lg">✓</span>
                  <span>Document upload & indexing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1 text-lg">✓</span>
                  <span>Website content integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1 text-lg">✓</span>
                  <span>Knowledge accuracy tracking</span>
                </li>
              </ul>
            </div>

            {/* MSP Branded Chatbot Add-on */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-pink-500/30 rounded-2xl p-8 hover:border-pink-500/50 transition-all">
              <div className="text-5xl mb-6">🤖</div>
              <h3 className="text-2xl font-bold mb-4 text-pink-400">MSP Branded Chatbot + Search</h3>
              <p className="text-gray-300 mb-6">
                Complete solution with ConnectWise integration for ticket deflection and self-service
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1 text-lg">✓</span>
                  <span>All Enterprise Search features</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1 text-lg">✓</span>
                  <span>ConnectWise Manage integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1 text-lg">✓</span>
                  <span>White-labeled chatbot</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1 text-lg">✓</span>
                  <span>20% ticket deflection</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient">Revenue Generation Benefits</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-green-900/40 to-green-800/30 border border-green-500/30 rounded-xl p-6">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold mb-3 text-green-400">New Revenue Stream</h3>
              <p className="text-gray-300">Add significant monthly recurring revenue with minimal effort</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/30 border border-blue-500/30 rounded-xl p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3 text-blue-400">Easy to Sell</h3>
              <p className="text-gray-300">Clients instantly understand the value of better knowledge management</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/30 border border-purple-500/30 rounded-xl p-6">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold mb-3 text-purple-400">Sticky Solution</h3>
              <p className="text-gray-300">Once deployed, becomes essential to daily operations</p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-900/40 to-pink-800/30 border border-pink-500/30 rounded-xl p-6">
              <div className="text-4xl mb-4">💡</div>
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
            <h2 className="text-3xl font-bold mb-6 text-gradient">Revenue Potential</h2>
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

      {/* Learn More About Section */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Learn More About</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link 
              href="/solutions/engineer-efficiency" 
              className="group relative bg-gradient-to-r from-yellow-600 to-orange-500 p-4 rounded-xl font-semibold text-center hover:shadow-lg hover:shadow-yellow-500/50 transform hover:scale-105 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span className="text-2xl">⚡</span>
                Engineer Efficiency
              </span>
            </Link>

            <Link 
              href="/solutions/service-desk-management" 
              className="group relative bg-gradient-to-r from-blue-600 to-cyan-500 p-4 rounded-xl font-semibold text-center hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span className="text-2xl">📊</span>
                Service Desk
              </span>
            </Link>

            <Link 
              href="/solutions/executive-insights" 
              className="group relative bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-xl font-semibold text-center hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span className="text-2xl">📈</span>
                Executive Insights
              </span>
            </Link>

            <Link 
              href="/solutions/branded-chatbot" 
              className="group relative bg-gradient-to-r from-blue-600 to-cyan-500 p-4 rounded-xl font-semibold text-center hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span className="text-2xl">🤖</span>
                Branded Chatbot
              </span>
            </Link>

            <Link 
              href="/solutions/voice-agents" 
              className="group relative bg-gradient-to-r from-green-600 to-emerald-500 p-4 rounded-xl font-semibold text-center hover:shadow-lg hover:shadow-green-500/50 transform hover:scale-105 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span className="text-2xl">📞</span>
                Voice AI Agents
              </span>
            </Link>

            <Link 
              href="/solutions/email-agents" 
              className="group relative bg-gradient-to-r from-yellow-600 to-orange-500 p-4 rounded-xl font-semibold text-center hover:shadow-lg hover:shadow-yellow-500/50 transform hover:scale-105 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span className="text-2xl">📧</span>
                Email Agents
              </span>
            </Link>

            <Link 
              href="/solutions/integrated-stack" 
              className="group relative bg-gradient-to-r from-indigo-600 to-purple-600 p-4 rounded-xl font-semibold text-center hover:shadow-lg hover:shadow-indigo-500/50 transform hover:scale-105 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span className="text-2xl">🔗</span>
                Integrated to Your Stack
              </span>
            </Link>

            <Link 
              href="/solutions/aura-insights" 
              className="group relative bg-gradient-to-r from-red-600 to-orange-500 p-4 rounded-xl font-semibold text-center hover:shadow-lg hover:shadow-red-500/50 transform hover:scale-105 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span className="text-2xl">🎯</span>
                AURA Insights
              </span>
            </Link>
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
              <Link
                href="https://xop.im/partner"
                className="relative bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all overflow-hidden group"
              >
                <span className="relative z-10">Become a Partner</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                href="/contact"
                className="relative bg-gradient-to-r from-gray-800 to-gray-700 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-gray-500/30 transform hover:scale-105 transition-all overflow-hidden group border border-gray-600"
              >
                <span className="relative z-10">Contact Our Team</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}