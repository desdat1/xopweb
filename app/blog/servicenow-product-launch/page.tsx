'use client'

import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Link from 'next/link'
import { Calendar, User, ArrowLeft, CheckCircle, Zap, Database, Shield, ArrowRight } from 'lucide-react'

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
              <span className="text-sm bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">
                Product Launch
              </span>
              <span className="text-sm bg-green-500/20 text-green-400 px-3 py-1 rounded-full">
                Now Available
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              xop.ai Launches Full ServiceNow Integration: Enterprise-Grade AI for ITSM
            </h1>

            <p className="text-xl text-gray-300 mb-6">
              Bringing the same powerful AI capabilities that transformed ConnectWise operations to the enterprise ServiceNow ecosystem.
            </p>

            <div className="flex items-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>Matt Ruck</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>February 3, 2026</span>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl text-gray-300 mb-8 font-medium">
              Today we're excited to announce the general availability of xop.ai's full integration with ServiceNow. Enterprise IT teams and large MSPs can now leverage the same AI-powered efficiency gains that have transformed operations for our ConnectWise customers.
            </p>

            {/* Key Announcement Box */}
            <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-blue-500/30 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-400 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                What's Now Available
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span>Full Engineer App integration with ServiceNow ITSM</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span>Enterprise Search across ServiceNow knowledge bases and incident history</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span>AI-powered ticket summarization and response suggestions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span>Voice AI Agents with automatic ServiceNow incident creation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span>Branded chatbots that create and update ServiceNow records</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-white">Why ServiceNow?</h2>

            <p className="mb-6">
              ServiceNow is the platform of choice for enterprise IT service management, powering some of the world's largest organizations. As our MSP customers grew and as enterprise IT teams sought purpose-built AI solutions, the demand for ServiceNow integration became clear.
            </p>

            <p className="mb-6">
              Unlike generic AI tools that require extensive customization, xop.ai was built from the ground up for IT service management. We understand ticket workflows, SLA management, knowledge article structures, and the specific challenges IT teams face daily. This domain expertise translates directly into faster time-to-value for ServiceNow customers.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-white">The Same AI Power, Enterprise Scale</h2>

            <p className="mb-6">
              Our ServiceNow integration brings all the capabilities that have driven measurable results for MSPs:
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Database className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-400">Enterprise Search</h3>
                </div>
                <p className="text-gray-300">
                  Search across ServiceNow knowledge bases, incident history, configuration items, and connected documentation systems. Find solutions in seconds, not hours.
                </p>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-400">Ticket Intelligence</h3>
                </div>
                <p className="text-gray-300">
                  AI-generated summaries of complex incident threads, suggested responses based on historical resolutions, and automated time entry for accurate tracking.
                </p>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <span className="text-lg">📞</span>
                  </div>
                  <h3 className="text-xl font-semibold text-purple-400">Voice AI Integration</h3>
                </div>
                <p className="text-gray-300">
                  Our Voice AI Agents now create ServiceNow incidents directly. Callers are identified, issues are categorized, and complete incident records are created automatically.
                </p>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-orange-400">Enterprise Security</h3>
                </div>
                <p className="text-gray-300">
                  SOC2 Type 2 compliant with data residency options in the US, Canada, and Europe. Your data is never used for model training.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-white">Built Different: Purpose-Built vs. Generic AI</h2>

            <p className="mb-6">
              The market is flooded with generic AI assistants that promise to work with "any ticketing system." The reality? These tools require months of configuration, prompt engineering, and customization before delivering value.
            </p>

            <p className="mb-6">
              xop.ai took a different approach. We spent years understanding the specific workflows, data structures, and challenges of IT service management. Our ServiceNow integration isn't a generic API connection—it's a purpose-built solution that understands:
            </p>

            <ul className="mb-6 space-y-2">
              <li>• How incident priority should be assessed based on impact and urgency</li>
              <li>• The relationship between configuration items, incidents, and changes</li>
              <li>• Knowledge article structures and how to surface relevant solutions</li>
              <li>• SLA tracking and escalation workflows</li>
              <li>• The difference between incidents, requests, problems, and changes</li>
            </ul>

            <h2 className="text-3xl font-bold mb-6 text-white">Getting Started</h2>

            <p className="mb-6">
              ServiceNow customers can begin implementation immediately. Our team handles the integration setup, connects your documentation systems, and trains the AI on your specific environment. Most customers are live within days, not months.
            </p>

            <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Implementation Includes</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• ServiceNow API configuration and testing</li>
                <li>• Knowledge base and documentation ingestion</li>
                <li>• User training and onboarding sessions</li>
                <li>• Ongoing bi-weekly optimization meetings</li>
                <li>• Dedicated success manager</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-white">What's Next</h2>

            <p className="mb-6">
              ServiceNow is just the beginning of our enterprise expansion. We're continuing to invest in our platform to serve organizations of all sizes, from growing MSPs to Fortune 500 IT departments. Our roadmap includes deeper ServiceNow integrations including CMDB automation, change management workflows, and predictive incident routing.
            </p>

            <p className="mb-8">
              Whether you're running a 50-person MSP on ConnectWise or a 5,000-person enterprise IT team on ServiceNow, xop.ai delivers the same result: more efficient engineers, happier end users, and measurable ROI.
            </p>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">Ready to Transform Your ServiceNow Operations?</h3>
              <p className="mb-4 text-gray-300">
                See how xop.ai can deliver AI-powered efficiency gains for your enterprise IT team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://xop.im/partner"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
                >
                  Schedule a Demo
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/solutions/integrated-stack"
                  className="inline-flex items-center justify-center gap-2 bg-transparent border border-blue-500 text-blue-400 px-6 py-3 rounded-full font-semibold hover:bg-blue-500/10 transition-all"
                >
                  View All Integrations
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
