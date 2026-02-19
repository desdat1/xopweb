'use client'

import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Link from 'next/link'
import { Calendar, User, ArrowLeft, CheckCircle, Zap, Users, Globe, ArrowRight, Sparkles } from 'lucide-react'

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Blog Post Content */}
      <article className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Back to Blog */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-green-400 hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <div className="mb-4 flex items-center gap-3">
              <span className="text-sm bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full">
                Product Launch
              </span>
              <span className="text-sm bg-green-500/20 text-green-400 px-3 py-1 rounded-full">
                Now Available
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              xop.ai Launches Full Autotask PSA Integration: AI for Every Major MSP Platform
            </h1>

            <p className="text-xl text-gray-300 mb-6">
              With Autotask support now live, xop.ai delivers AI-powered efficiency across all four major PSA platforms used by MSPs worldwide.
            </p>

            <div className="flex items-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>Matt Ruck</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>February 19, 2026</span>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl text-gray-300 mb-8 font-medium">
              We're excited to announce that xop.ai now fully integrates with Autotask PSA. This means every major PSA platform in the MSP space—ConnectWise, ServiceNow, Halo PSA, and now Autotask—is supported with the same powerful AI tools that are driving measurable results across hundreds of MSPs.
            </p>

            {/* Key Announcement Box */}
            <div className="bg-gradient-to-r from-orange-900/30 to-amber-900/30 border border-orange-500/30 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-orange-400 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Full Platform Integration
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span>Engineer App with Autotask ticket management and time entries</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span>Enterprise Search across Autotask knowledge base and ticket history</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span>Voice AI Agents with automatic Autotask ticket creation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span>Branded Teams chatbots integrated with Autotask workflows</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span>Email agents that process and route to Autotask automatically</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span>Manager App with AI triage, escalations, and client health dashboards</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-white">Why Autotask?</h2>

            <p className="mb-6">
              Autotask PSA, part of the Datto ecosystem, is one of the most widely used platforms in the MSP space. It powers thousands of service desks worldwide, and its users have been asking us for native integration since our earliest days. We listened.
            </p>

            <p className="mb-6">
              Autotask MSPs share the same challenges as every other PSA user: engineers spending too much time on repetitive tasks, knowledge scattered across multiple systems, and after-hours calls going unanswered. With xop.ai now connected to Autotask, those problems have the same AI-powered solutions that are already delivering results for ConnectWise, ServiceNow, and Halo PSA customers.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-white">Everything Works with Autotask</h2>

            <p className="mb-6">
              This is a complete integration—not a partial rollout or beta. Every xop.ai capability is live and production-ready for Autotask:
            </p>

            {/* Feature List */}
            <div className="space-y-6 mb-8">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-orange-400">Engineer Efficiency Suite</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  AI-powered ticket summarization, intelligent response suggestions, and automated time entry—all integrated directly with Autotask's ticket workflow. The Engineer App reads from and writes to Autotask in real-time.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Instant ticket thread summarization</li>
                  <li>• Suggested responses based on historical resolutions</li>
                  <li>• One-click time entries synced to Autotask</li>
                  <li>• Context-aware knowledge article suggestions</li>
                </ul>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-400">Enterprise Search</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Search across your entire knowledge ecosystem—Autotask knowledge base, ticket history, IT Glue, SharePoint, Confluence, and more. Results are contextual and ranked by relevance to the current issue.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Cross-platform search in seconds</li>
                  <li>• Automatic source attribution</li>
                  <li>• Historical ticket pattern matching</li>
                  <li>• Documentation gap identification</li>
                </ul>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-400">End User Solutions</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Voice AI agents answer calls and create Autotask tickets automatically. Branded Teams chatbots deflect simple issues and create tickets for complex ones. Email agents process incoming messages and route appropriately.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• 24/7 phone intake with Autotask ticket creation</li>
                  <li>• Teams chatbot with bidirectional Autotask sync</li>
                  <li>• Intelligent email routing and ticket creation</li>
                  <li>• End user self-service portal options</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-white">Smooth Implementation</h2>

            <p className="mb-6">
              Our Autotask integration follows the same proven implementation process that has worked for hundreds of MSPs across ConnectWise, ServiceNow, and Halo PSA:
            </p>

            {/* Implementation Steps */}
            <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700 rounded-xl p-6 mb-8">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <h4 className="font-semibold mb-1">API Connection</h4>
                    <p className="text-gray-400 text-sm">We configure secure API access to your Autotask instance</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <h4 className="font-semibold mb-1">Knowledge Ingestion</h4>
                    <p className="text-gray-400 text-sm">Your knowledge base and documentation are indexed</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <h4 className="font-semibold mb-1">Team Training</h4>
                    <p className="text-gray-400 text-sm">Your engineers learn to use the platform effectively</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center font-bold text-sm">4</div>
                  <div>
                    <h4 className="font-semibold mb-1">Ongoing Optimization</h4>
                    <p className="text-gray-400 text-sm">Bi-weekly meetings to improve documentation and results</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-white">One Platform, Four PSAs</h2>

            <p className="mb-6">
              With the addition of Autotask, xop.ai now supports all four major PSA platforms in the MSP space:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">🟢</div>
                <h4 className="font-semibold text-green-400">ConnectWise</h4>
                <p className="text-sm text-gray-400">Full integration</p>
              </div>
              <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">🔵</div>
                <h4 className="font-semibold text-blue-400">ServiceNow</h4>
                <p className="text-sm text-gray-400">Full integration</p>
              </div>
              <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">🟣</div>
                <h4 className="font-semibold text-purple-400">Halo PSA</h4>
                <p className="text-sm text-gray-400">Full integration</p>
              </div>
              <div className="bg-gradient-to-br from-orange-900/20 to-amber-900/20 border border-orange-500/30 rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">🟠</div>
                <h4 className="font-semibold text-orange-400">Autotask</h4>
                <p className="text-sm text-gray-400">Full integration</p>
              </div>
            </div>

            <p className="mb-6">
              This means no MSP is locked out of AI because of their PSA choice. Whether you're on ConnectWise, ServiceNow, Halo, or Autotask, you get the same AI capabilities, the same results, and the same support. And for organizations considering a PSA migration, xop.ai provides continuity—your AI investment travels with you.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-white">The Results Speak</h2>

            <p className="mb-6">
              MSPs using xop.ai consistently report:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">15-30%</div>
                <p className="text-sm text-gray-400">Engineer productivity gain</p>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">20-30%</div>
                <p className="text-sm text-gray-400">Ticket deflection</p>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-1">100%</div>
                <p className="text-sm text-gray-400">Call capture rate</p>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-orange-400 mb-1">200%</div>
                <p className="text-sm text-gray-400">2-year ROI</p>
              </div>
            </div>

            <p className="mb-8">
              Autotask customers can expect the same results. The underlying AI and workflows are identical—only the PSA connection changes.
            </p>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-orange-900/20 to-amber-900/20 border border-orange-500/30 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-3 text-orange-400">Autotask Customer?</h3>
              <p className="mb-4 text-gray-300">
                See how xop.ai can transform your service desk operations with purpose-built AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://xop.im/partner"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-amber-500 px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
                >
                  Schedule a Demo
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-transparent border border-orange-500 text-orange-400 px-6 py-3 rounded-full font-semibold hover:bg-orange-500/10 transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
