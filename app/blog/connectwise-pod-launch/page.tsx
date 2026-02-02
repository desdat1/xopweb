'use client'

import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Link from 'next/link'
import { Calendar, User, ArrowLeft, CheckCircle, Zap, Search, MessageSquare, Clock, TrendingUp, ArrowRight, AlertTriangle, BarChart } from 'lucide-react'

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
              <span className="text-sm bg-green-500/20 text-green-400 px-3 py-1 rounded-full">
                Product Launch
              </span>
              <span className="text-sm bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full">
                ConnectWise
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Introducing the ConnectWise Manage Pod: AI That Lives Where Your Engineers Already Work
            </h1>

            <p className="text-xl text-gray-300 mb-6">
              No more context switching. No more separate applications. Our Engineer Assist solution now runs as a native pod directly inside ConnectWise Manage.
            </p>

            <div className="flex items-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>Matt Ruck</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>January 13, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>10 min read</span>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl text-gray-300 mb-8 font-medium">
              Today we're announcing the general availability of our integrated Engineer Assist solution as a native pod within ConnectWise Manage. This is AI that lives exactly where your engineers already work—directly inside their ticketing system.
            </p>

            {/* Key Announcement Box */}
            <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-500/30 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-green-400 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                What This Means for Your Engineers
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span>AI assistance without leaving ConnectWise Manage</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span>Zero context switching between applications</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span>Instant access to AI-powered insights on every ticket</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span>Full deployment in less than one week</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-white">Meeting Engineers Where They Are</h2>

            <p className="mb-6">
              The biggest barrier to AI adoption isn't the technology—it's the workflow disruption. Every time an engineer has to open a separate application, copy ticket details, and context-switch, you lose efficiency. The friction adds up, and adoption suffers.
            </p>

            <p className="mb-6">
              The ConnectWise Manage Pod eliminates this friction entirely. It's a true add-in that functions natively within ConnectWise Manage, appearing as a pod that engineers can dock wherever they prefer in their interface. No separate login. No copying and pasting. Just AI assistance that's always there when they need it.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-white">A Feature-Rich AI Assistant</h2>

            <p className="mb-6">
              The pod isn't just a chatbot bolted onto your PSA. It's a comprehensive AI assistant with deep integration into your ticketing workflow:
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <BarChart className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-400">Intelligent Ticket Analysis</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  The moment an engineer opens a ticket, the pod analyzes the issue and provides:
                </p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Root cause identification</li>
                  <li>• Sentiment assessment</li>
                  <li>• Priority recommendations</li>
                  <li>• Similar historical tickets</li>
                </ul>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-orange-400">Proactive Escalation & Screen Pops</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  The AI proactively surfaces critical information:
                </p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Revenue leakage opportunities</li>
                  <li>• Recurring event patterns</li>
                  <li>• Multi-user outages</li>
                  <li>• VIP client issues requiring attention</li>
                </ul>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Search className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-400">Enterprise Search Across Everything</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Search your entire knowledge ecosystem without leaving the ticket:
                </p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• IT Glue documentation</li>
                  <li>• SharePoint files</li>
                  <li>• Confluence pages</li>
                  <li>• Historical ticket resolutions</li>
                </ul>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-purple-400">Ask AI</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Natural language queries against your organizational knowledge:
                </p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• "How did we fix this issue last time?"</li>
                  <li>• "What's this client's network configuration?"</li>
                  <li>• "Show me similar tickets from the past month"</li>
                  <li>• Context-aware answers, not generic responses</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-white">Skills Analysis & Response Quality</h2>

            <p className="mb-6">
              One of the most powerful features of the pod is its ability to analyze and improve engineer performance:
            </p>

            <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Continuous Improvement Engine</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <span><strong>Response Grading:</strong> AI evaluates proposed customer communications before they're sent, suggesting improvements</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <span><strong>Skill Gap Identification:</strong> Patterns emerge showing where additional training would be valuable</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <span><strong>Best Practice Reinforcement:</strong> Consistent quality across your entire team</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-white">Workflow Actions Within the Ticket</h2>

            <p className="mb-6">
              The pod doesn't just provide information—it takes action. Engineers can complete common tasks without leaving the ticket interface:
            </p>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                  <div className="text-2xl mb-2">💬</div>
                  <p className="text-sm text-gray-300">Generate Customer Communications</p>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                  <div className="text-2xl mb-2">⏱️</div>
                  <p className="text-sm text-gray-300">Create Time Entries</p>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                  <div className="text-2xl mb-2">💰</div>
                  <p className="text-sm text-gray-300">Log Expenses</p>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                  <div className="text-2xl mb-2">🏷️</div>
                  <p className="text-sm text-gray-300">Update Status & Category</p>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                  <div className="text-2xl mb-2">📝</div>
                  <p className="text-sm text-gray-300">Capture Resolution Notes</p>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                  <div className="text-2xl mb-2">🔗</div>
                  <p className="text-sm text-gray-300">Link Related Tickets</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-white">The Bigger Picture</h2>

            <p className="mb-6">
              Individual features are valuable, but the real power comes from the compound effect. When AI assistance is always present—analyzing every ticket, surfacing relevant knowledge, catching revenue opportunities, and improving response quality—the benefits multiply:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">Faster</div>
                <p className="text-sm text-gray-400">Resolution times</p>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">Better</div>
                <p className="text-sm text-gray-400">Documentation</p>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-1">Consistent</div>
                <p className="text-sm text-gray-400">Quality</p>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-orange-400 mb-1">Captured</div>
                <p className="text-sm text-gray-400">Revenue</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-white">Getting Started</h2>

            <p className="mb-6">
              The ConnectWise Manage Pod is available now for all xop.ai customers. If you're already using our platform, contact your success manager to enable the pod. New customers can be fully deployed in less than one week.
            </p>

            <p className="mb-8">
              This is AI that finally makes sense for how MSP engineers actually work—not a separate tool to learn, but intelligence embedded directly into the workflow they already know.
            </p>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-3 text-green-400">Ready to See the Pod in Action?</h3>
              <p className="mb-4 text-gray-300">
                Schedule a demo to see how the ConnectWise Manage Pod can transform your engineers' workflow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://xop.im/partner"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
                >
                  Schedule a Demo
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/solutions/engineer-efficiency"
                  className="inline-flex items-center justify-center gap-2 bg-transparent border border-green-500 text-green-400 px-6 py-3 rounded-full font-semibold hover:bg-green-500/10 transition-all"
                >
                  Learn About Engineer Efficiency
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
