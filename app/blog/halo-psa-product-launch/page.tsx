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
              xop.ai Now Integrates with Halo PSA: AI-Powered Efficiency for Growing MSPs
            </h1>

            <p className="text-xl text-gray-300 mb-6">
              The platform trusted by thousands of MSPs worldwide now has access to purpose-built AI that transforms service delivery.
            </p>

            <div className="flex items-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>Matt Ruck</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>February 10, 2026</span>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl text-gray-300 mb-8 font-medium">
              We're thrilled to announce that xop.ai now fully integrates with Halo PSA. MSPs running Halo can now access the same AI-powered tools that have driven measurable efficiency gains for ConnectWise and ServiceNow customers.
            </p>

            {/* Key Announcement Box */}
            <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-purple-400 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Full Platform Integration
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span>Engineer App with Halo PSA ticket management</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span>Enterprise Search across Halo knowledge base and ticket history</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span>Voice AI Agents with automatic Halo ticket creation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span>Branded Teams chatbots integrated with Halo workflows</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span>Email agents that process and route to Halo automatically</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-white">Why Halo PSA?</h2>

            <p className="mb-6">
              Halo PSA has become a favorite among MSPs for its modern interface, powerful automation capabilities, and competitive pricing. As more of our prospective customers asked about Halo support, we listened.
            </p>

            <p className="mb-6">
              The Halo community is known for being forward-thinking and tech-savvy. These are exactly the MSPs who understand the transformative potential of AI and are ready to implement solutions that deliver real results. We're excited to serve this community.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-white">Everything Works with Halo</h2>

            <p className="mb-6">
              This isn't a partial integration or a "coming soon" preview. Every xop.ai capability now works with Halo PSA:
            </p>

            {/* Feature List */}
            <div className="space-y-6 mb-8">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-purple-400">Engineer Efficiency Suite</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Your engineers get AI-powered ticket summarization, intelligent response suggestions, and automated time entry—all working seamlessly with Halo's ticket workflow. The Engineer App reads from and writes to Halo in real-time.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Instant ticket thread summarization</li>
                  <li>• Suggested responses based on historical resolutions</li>
                  <li>• One-click time entries synced to Halo</li>
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
                  Search across your entire knowledge ecosystem—Halo knowledge base, ticket history, IT Glue, SharePoint, Confluence, and more. Results are contextual and ranked by relevance to the current issue.
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
                  Voice AI agents answer calls and create Halo tickets automatically. Branded Teams chatbots deflect simple issues and create tickets for complex ones. Email agents process incoming messages and route appropriately.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• 24/7 phone intake with Halo ticket creation</li>
                  <li>• Teams chatbot with bidirectional Halo sync</li>
                  <li>• Intelligent email routing and ticket creation</li>
                  <li>• End user self-service portal options</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-white">Smooth Implementation</h2>

            <p className="mb-6">
              We've worked closely with the Halo PSA platform to ensure our integration is smooth and reliable. Implementation follows the same proven process we use for ConnectWise and ServiceNow:
            </p>

            {/* Implementation Steps */}
            <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700 rounded-xl p-6 mb-8">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <h4 className="font-semibold mb-1">API Connection</h4>
                    <p className="text-gray-400 text-sm">We configure secure API access to your Halo instance</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <h4 className="font-semibold mb-1">Knowledge Ingestion</h4>
                    <p className="text-gray-400 text-sm">Your knowledge base and documentation are indexed</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <h4 className="font-semibold mb-1">Team Training</h4>
                    <p className="text-gray-400 text-sm">Your engineers learn to use the platform effectively</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center font-bold text-sm">4</div>
                  <div>
                    <h4 className="font-semibold mb-1">Ongoing Optimization</h4>
                    <p className="text-gray-400 text-sm">Bi-weekly meetings to improve documentation and results</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-white">One Platform, Three PSAs</h2>

            <p className="mb-6">
              With the addition of Halo PSA, xop.ai now supports the three major PSA platforms in the MSP space:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
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
            </div>

            <p className="mb-6">
              This means MSPs aren't locked into a specific PSA to benefit from AI. And for organizations considering a PSA migration, xop.ai provides continuity—your AI investment travels with you.
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
              Halo PSA customers can expect the same results. The underlying AI and workflows are identical—only the PSA connection changes.
            </p>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-3 text-purple-400">Halo PSA Customer?</h3>
              <p className="mb-4 text-gray-300">
                See how xop.ai can transform your service desk operations with purpose-built AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://xop.im/partner"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
                >
                  Schedule a Demo
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-transparent border border-purple-500 text-purple-400 px-6 py-3 rounded-full font-semibold hover:bg-purple-500/10 transition-all"
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
