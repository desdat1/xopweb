'use client'

import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Link from 'next/link'
import { Calendar, User, ArrowLeft, CheckCircle, Phone, Clock, TrendingUp, ArrowRight, Headphones, BarChart } from 'lucide-react'

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
                New Product
              </span>
              <span className="text-sm bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full">
                Voice AI
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Introducing AI Voice Overflow Agent: Never Miss Another Call
            </h1>

            <p className="text-xl text-gray-300 mb-6">
              Intelligent call handling that activates when your team is at capacity, ensuring every caller gets immediate attention and every issue is documented.
            </p>

            <div className="flex items-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>Matt Ruck</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>February 17, 2026</span>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl text-gray-300 mb-8 font-medium">
              Every MSP knows the frustration: phones ringing off the hook, engineers already on calls, and callers either waiting on hold or—worse—hanging up without getting help. Today we're launching the AI Voice Overflow Agent to solve this problem permanently.
            </p>

            {/* Problem Statement Box */}
            <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-red-500/30 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-red-400">The Problem We're Solving</h3>
              <p className="text-gray-300 mb-4">
                When call volume spikes—Monday mornings, after a major outage, during month-end close—your team can't physically answer every call. The consequences:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Callers wait on hold for 10+ minutes</li>
                <li>• Frustrated users hang up and send angry emails</li>
                <li>• Issues aren't documented, leading to duplicate work</li>
                <li>• VIP clients get the same treatment as everyone else</li>
                <li>• Your team starts the day already behind</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-white">How the Overflow Agent Works</h2>

            <p className="mb-6">
              The AI Voice Overflow Agent integrates with your existing phone system and activates automatically when all agents are busy. It doesn't replace your team—it extends their capacity exactly when they need it most.
            </p>

            {/* Flow Diagram */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold mb-6 text-green-400">Intelligent Call Flow</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="flex-1 bg-gray-800/50 rounded-lg p-4">
                    <h4 className="font-semibold mb-1">Call Comes In</h4>
                    <p className="text-gray-400 text-sm">System checks agent availability in real-time</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-0.5 h-8 bg-green-500/30"></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <Headphones className="w-6 h-6" />
                  </div>
                  <div className="flex-1 bg-gray-800/50 rounded-lg p-4">
                    <h4 className="font-semibold mb-1">Agents Busy?</h4>
                    <p className="text-gray-400 text-sm">If all agents are occupied, AI Overflow Agent activates instantly</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-0.5 h-8 bg-green-500/30"></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-xl">🤖</span>
                  </div>
                  <div className="flex-1 bg-gray-800/50 rounded-lg p-4">
                    <h4 className="font-semibold mb-1">AI Handles the Call</h4>
                    <p className="text-gray-400 text-sm">Gathers caller info, issue details, and urgency level through natural conversation</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-0.5 h-8 bg-green-500/30"></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div className="flex-1 bg-gray-800/50 rounded-lg p-4">
                    <h4 className="font-semibold mb-1">Ticket Created</h4>
                    <p className="text-gray-400 text-sm">Complete ticket in ConnectWise, ServiceNow, or Halo PSA with full context</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-white">What Makes It Different</h2>

            <p className="mb-6">
              This isn't a voicemail system with AI transcription. The Overflow Agent is a fully conversational AI that engages with callers naturally, asks intelligent follow-up questions, and gathers everything your team needs to resolve the issue.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-green-400">Natural Conversation</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                    <span>Sounds like a real support agent, not a robot</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                    <span>Handles interruptions and clarifications naturally</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                    <span>Asks relevant follow-up questions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                    <span>Understands technical terminology</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Intelligent Documentation</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                    <span>Creates detailed tickets automatically</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                    <span>Categorizes and prioritizes correctly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                    <span>Captures affected systems and scope</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                    <span>Notes troubleshooting already attempted</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">Smart Escalation</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span>Identifies VIP callers for priority handling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span>Detects critical issues requiring immediate attention</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span>Warm transfer to available agent when appropriate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span>Emergency protocols for server-down scenarios</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-500/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-orange-400">Seamless Experience</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" />
                    <span>No hold music—immediate engagement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" />
                    <span>Callers feel heard and helped</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" />
                    <span>Confirmation of ticket creation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" />
                    <span>Sets appropriate response expectations</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-white">The Impact</h2>

            <p className="mb-6">
              MSPs deploying the Overflow Agent are seeing immediate, measurable results:
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">100%</div>
                <p className="text-sm text-gray-400">Call capture rate</p>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">0 sec</div>
                <p className="text-sm text-gray-400">Average hold time</p>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-1">95%</div>
                <p className="text-sm text-gray-400">Ticket accuracy</p>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-orange-400 mb-1">40%</div>
                <p className="text-sm text-gray-400">Reduced callbacks</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-white">Works with All Our Integrations</h2>

            <p className="mb-6">
              The Overflow Agent creates tickets in your PSA of choice—ConnectWise Manage, ServiceNow, or Halo PSA. The ticket format, fields, and routing rules match your existing configuration. It's like having a perfectly trained overflow agent who knows your systems inside and out.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-white">Use Cases</h2>

            <div className="space-y-4 mb-8">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-green-400" />
                  <h3 className="text-lg font-semibold text-green-400">Monday Morning Rush</h3>
                </div>
                <p className="text-gray-300">
                  The queue backs up as everyone calls in with weekend issues. The Overflow Agent handles the surge, creating a prioritized backlog your team can work through efficiently.
                </p>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                  <h3 className="text-lg font-semibold text-blue-400">Service Outage Response</h3>
                </div>
                <p className="text-gray-300">
                  When a client's server goes down, they're not the only ones calling. The Overflow Agent handles incoming calls while your team focuses on resolution.
                </p>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <BarChart className="w-5 h-5 text-purple-400" />
                  <h3 className="text-lg font-semibold text-purple-400">Growth Without Hiring</h3>
                </div>
                <p className="text-gray-300">
                  Scale your client base without proportionally scaling your service desk. The Overflow Agent provides elastic capacity that grows with demand.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-white">Getting Started</h2>

            <p className="mb-8">
              The Overflow Agent is available now for all xop.ai customers. Implementation requires configuring your phone system routing and takes just a few hours. We'll work with your phone provider to ensure seamless integration with your existing call flow.
            </p>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-3 text-green-400">Ready to Capture Every Call?</h3>
              <p className="mb-4 text-gray-300">
                See how the AI Voice Overflow Agent can eliminate missed calls and improve caller satisfaction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://xop.im/partner"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
                >
                  Schedule a Voice Demo
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/solutions/voice-agents"
                  className="inline-flex items-center justify-center gap-2 bg-transparent border border-green-500 text-green-400 px-6 py-3 rounded-full font-semibold hover:bg-green-500/10 transition-all"
                >
                  Learn More About Voice AI
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
