'use client'

import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Link from 'next/link'
import { Calendar, User, ArrowLeft, CheckCircle, Mic, FileText, Clock, ArrowRight, Sparkles, Zap } from 'lucide-react'

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
                New Product
              </span>
              <span className="text-sm bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full">
                Voice AI
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Introducing AI Voice Engineer Assist Agent: Your Silent Partner on Every Call
            </h1>

            <p className="text-xl text-gray-300 mb-6">
              AI that listens to engineer-client conversations and automatically documents everything—eliminating post-call data entry forever.
            </p>

            <div className="flex items-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>Matt Ruck</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>February 24, 2026</span>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl text-gray-300 mb-8 font-medium">
              Every engineer knows the drill: finish a 30-minute support call, then spend another 10 minutes documenting what was discussed. Today we're launching the AI Voice Engineer Assist Agent to eliminate that friction entirely.
            </p>

            {/* Problem Statement */}
            <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-red-500/30 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-red-400">The Documentation Burden</h3>
              <p className="text-gray-300 mb-4">
                Post-call documentation is one of the biggest productivity drains for engineers:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• 15-20% of engineer time spent on documentation</li>
                <li>• Details forgotten by the time they start writing</li>
                <li>• Tickets often incomplete or vague</li>
                <li>• Time entries estimated rather than accurate</li>
                <li>• Knowledge lost when details aren't captured</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-white">How Engineer Assist Works</h2>

            <p className="mb-6">
              The AI Voice Engineer Assist Agent joins calls between your engineers and end users as a silent participant. It listens to the entire conversation and automatically creates complete documentation in your PSA.
            </p>

            {/* Process Flow */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold mb-6 text-purple-400 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Automatic Documentation Flow
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mic className="w-8 h-8" />
                  </div>
                  <h4 className="font-semibold mb-2">Listens</h4>
                  <p className="text-gray-400 text-sm">Joins the call and captures the full conversation with speaker identification</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8" />
                  </div>
                  <h4 className="font-semibold mb-2">Processes</h4>
                  <p className="text-gray-400 text-sm">AI extracts key details, technical information, and action items</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8" />
                  </div>
                  <h4 className="font-semibold mb-2">Documents</h4>
                  <p className="text-gray-400 text-sm">Creates or updates tickets with full context and accurate time entries</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-white">What Gets Captured</h2>

            <p className="mb-6">
              The Engineer Assist Agent doesn't just transcribe—it understands. Using our domain-specific AI trained on IT support conversations, it extracts meaningful information and structures it properly.
            </p>

            {/* Capture Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">Issue Details</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span>Problem description in the user's words</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span>Affected systems and applications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span>Error messages mentioned</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span>When the issue started and patterns</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Resolution Steps</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                    <span>Troubleshooting steps performed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                    <span>What worked and what didn't</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                    <span>Configuration changes made</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                    <span>Root cause if identified</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-green-400">Follow-Up Items</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                    <span>Action items promised to the user</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                    <span>Scheduled callbacks or check-ins</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                    <span>Pending approvals or decisions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                    <span>Related tickets to create or link</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-500/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-orange-400">Time & Billing</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" />
                    <span>Accurate call duration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" />
                    <span>Work type categorization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" />
                    <span>Billable vs. warranty distinction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" />
                    <span>Time entry notes</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-white">The Engineer Experience</h2>

            <p className="mb-6">
              Engineers love the Engineer Assist Agent because it eliminates the most tedious part of their job while making them look more professional:
            </p>

            {/* Before/After Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-900/10 border border-red-500/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-red-400">Before: Manual Documentation</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✕</span>
                    <span>Call ends, engineer tries to remember details</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✕</span>
                    <span>10-15 minutes spent typing ticket notes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✕</span>
                    <span>Important details forgotten or summarized</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✕</span>
                    <span>Time entries estimated, often inaccurate</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✕</span>
                    <span>Next caller waiting while documenting</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-900/10 border border-green-500/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-green-400">After: AI-Powered Documentation</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Call ends, ticket already updated</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Engineer reviews and approves in 30 seconds</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Every detail captured accurately</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Precise time entries automatically created</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Immediately ready for next call</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-white">Privacy and Compliance</h2>

            <p className="mb-6">
              We built the Engineer Assist Agent with enterprise security requirements in mind:
            </p>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-8">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span><strong>Call Disclosure:</strong> Users are informed that AI is assisting with documentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span><strong>Data Residency:</strong> Recordings processed in your region (US, Canada, or Europe)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span><strong>No Model Training:</strong> Your conversations are never used to train AI models</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span><strong>Retention Control:</strong> Audio can be deleted immediately after processing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span><strong>SOC2 Compliant:</strong> Full compliance with enterprise security standards</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-white">The ROI Is Immediate</h2>

            <p className="mb-6">
              The math is simple. If your engineers spend 15% of their time on post-call documentation, and you have 10 engineers:
            </p>

            {/* ROI Calculation */}
            <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-green-400 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Time Recovered
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-1">6 hours</div>
                  <p className="text-sm text-gray-400">Per engineer per week</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-1">60 hours</div>
                  <p className="text-sm text-gray-400">Team total per week</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-1">3,000+ hours</div>
                  <p className="text-sm text-gray-400">Per year recovered</p>
                </div>
              </div>
              <p className="text-gray-300 mt-4 text-center">
                That's equivalent to adding 1.5 full-time engineers to your team.
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-white">Works With Your Phone System</h2>

            <p className="mb-6">
              The Engineer Assist Agent integrates with major VoIP platforms and softphones. Whether your engineers take calls through Teams, Zoom Phone, RingCentral, or traditional desk phones, we can connect. Implementation is straightforward—most MSPs are live within a week.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-white">Part of the Voice AI Suite</h2>

            <p className="mb-6">
              The Engineer Assist Agent joins our Voice AI family alongside the Overflow Agent. Together, they provide comprehensive voice automation:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-green-400">Overflow Agent</h3>
                <p className="text-gray-300 text-sm mb-2">Handles calls when all agents are busy</p>
                <Link href="/blog/ai-voice-overflow-agent" className="text-green-400 text-sm hover:underline">Learn more →</Link>
              </div>
              <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-400">Engineer Assist Agent</h3>
                <p className="text-gray-300 text-sm mb-2">Documents calls between engineers and users</p>
                <span className="text-purple-400 text-sm">You're reading about it now</span>
              </div>
            </div>

            <p className="mb-8">
              Both work with ConnectWise, ServiceNow, and Halo PSA, creating tickets with the same accuracy and completeness across platforms.
            </p>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-3 text-purple-400">Ready to Eliminate Post-Call Documentation?</h3>
              <p className="mb-4 text-gray-300">
                See how the AI Voice Engineer Assist Agent can give your team back hours every week.
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
                  href="/solutions/voice-agents"
                  className="inline-flex items-center justify-center gap-2 bg-transparent border border-purple-500 text-purple-400 px-6 py-3 rounded-full font-semibold hover:bg-purple-500/10 transition-all"
                >
                  Explore Voice AI Solutions
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
