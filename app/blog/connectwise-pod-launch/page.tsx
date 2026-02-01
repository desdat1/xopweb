'use client'

import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Link from 'next/link'
import { ArrowLeft, Calendar, User, Clock, Zap, Search, MessageSquare, TrendingUp, Shield, Users } from 'lucide-react'

export default function ConnectWisePodLaunchPost() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Blog Post Header */}
      <article className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-green-500/20 text-green-400 px-4 py-1 rounded-full text-sm font-medium">
                Product Launch
              </span>
              <span className="bg-blue-500/20 text-blue-400 px-4 py-1 rounded-full text-sm font-medium">
                ConnectWise
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Introducing the ConnectWise Manage Pod: AI That Lives Where Your Engineers Already Work
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Matt Ruck</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>January 13, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>10 min read</span>
              </div>
            </div>
          </header>

          {/* Video Section */}
          <div className="mb-12">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-green-500/20 border border-gray-700">
              <video
                className="w-full h-auto"
                controls
                preload="metadata"
              >
                <source src="/rezolve-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-center text-gray-400 mt-4 text-sm">
              See the ConnectWise Manage Pod in action
            </p>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            {/* Introduction */}
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              For years, the promise of AI for MSPs came with an asterisk: <em>great capabilities, but your engineers need to learn yet another system</em>. Today, we're eliminating that asterisk entirely. We're thrilled to announce the general availability of our integrated Engineer Assist solution as a native pod inside ConnectWise Manage.
            </p>

            <p className="text-gray-300 leading-relaxed mb-8">
              This isn't just another integration. This is AI that lives exactly where your engineers already work - directly inside their ticketing system. No new windows. No context switching. No training on unfamiliar interfaces. Just powerful AI capabilities appearing seamlessly within the ConnectWise environment your team uses every single day.
            </p>

            {/* Section: Meeting Engineers Where They Are */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Meeting Engineers Where They Are</h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              Let's be honest about what kills AI adoption in most MSPs: friction. Engineers are busy. They're juggling tickets, fielding calls, and solving complex problems under time pressure. The last thing they need is another application to alt-tab into, another login to remember, another interface to learn.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              That's why we built the ConnectWise Manage pod as a true add-in - not a separate application that happens to sync with your PSA, but an embedded experience that functions as part of ConnectWise itself. When engineers open a ticket, the AI is right there. When they need to search documentation, it's one click away. When they want to generate a customer response, they don't leave the screen they're on.
            </p>

            <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 my-8">
              <p className="text-green-400 font-semibold mb-2">The Result?</p>
              <p className="text-gray-300">
                We can have your MSP up and running on the ConnectWise pod in less than a week. Not months of implementation. Not weeks of training. Days to deployment, and your engineers start seeing value immediately because they're working in an environment they already know.
              </p>
            </div>

            {/* Section: What's Inside the Pod */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">What's Inside: A Feature-Rich AI Assistant</h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              Don't let the frictionless deployment fool you - this pod is packed with capabilities that transform how engineers handle tickets. Here's what your team gets access to the moment they start using it:
            </p>

            {/* Feature: Intelligent Ticket Analysis */}
            <div className="bg-gradient-to-r from-green-900/20 to-green-800/20 border border-green-500/30 rounded-xl p-6 my-8">
              <div className="flex items-start gap-4">
                <div className="bg-green-500/20 p-3 rounded-lg">
                  <Zap className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-400 mb-2">Intelligent Ticket Analysis</h3>
                  <p className="text-gray-300">
                    The moment a ticket is opened, AI analyzes the issue, identifies the likely root cause, assesses sentiment, and determines priority. Engineers don't waste time deciphering vague descriptions - they get immediate clarity on what they're dealing with and how urgent it is.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature: Smart Escalation Detection */}
            <div className="bg-gradient-to-r from-orange-900/20 to-orange-800/20 border border-orange-500/30 rounded-xl p-6 my-8">
              <div className="flex items-start gap-4">
                <div className="bg-orange-500/20 p-3 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-orange-400 mb-2">Proactive Escalation & Screen Pops</h3>
                  <p className="text-gray-300">
                    Critical issues don't hide in queues anymore. The pod surfaces tickets that need escalation and provides intelligent screen pops for situations that demand attention: revenue leakage opportunities, chronic recurring events, multi-user outages affecting entire departments, and VIP client issues that require white-glove treatment.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature: Enterprise Search */}
            <div className="bg-gradient-to-r from-blue-900/20 to-blue-800/20 border border-blue-500/30 rounded-xl p-6 my-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/20 p-3 rounded-lg">
                  <Search className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-400 mb-2">Enterprise Search Across Everything</h3>
                  <p className="text-gray-300">
                    This is where time-to-resolution takes a dramatic leap forward. Engineers can search across IT Glue, SharePoint, Confluence, historical tickets, and any other connected documentation systems - all from within the ticket they're working. No more hunting through multiple systems. No more "I know we solved this before but I can't find it." The AI brings relevant information to the engineer, dramatically accelerating resolution times.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature: Ask AI */}
            <div className="bg-gradient-to-r from-purple-900/20 to-purple-800/20 border border-purple-500/30 rounded-xl p-6 my-8">
              <div className="flex items-start gap-4">
                <div className="bg-purple-500/20 p-3 rounded-lg">
                  <MessageSquare className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-400 mb-2">Ask AI: Your Knowledge Base, Activated</h3>
                  <p className="text-gray-300">
                    Engineers can query the AI directly about similar past issues, resolution steps, client-specific configurations, and best practices. The AI draws from historical tickets, documentation, and accumulated organizational knowledge to provide contextual answers. It's like having your most experienced engineer available for consultation on every single ticket.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature: Skills Analysis */}
            <div className="bg-gradient-to-r from-cyan-900/20 to-cyan-800/20 border border-cyan-500/30 rounded-xl p-6 my-8">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-500/20 p-3 rounded-lg">
                  <Users className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">Skills Analysis & Response Quality</h3>
                  <p className="text-gray-300">
                    The AI doesn't just help solve tickets - it helps develop your team. It analyzes the skills needed for each issue and can grade the quality of proposed responses before they're sent. This creates a continuous improvement loop where engineers get better over time, and managers gain visibility into skill gaps and training opportunities.
                  </p>
                </div>
              </div>
            </div>

            {/* Section: Action Without Leaving */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Take Action Without Leaving the Ticket</h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              Here's where the pod truly shines as a productivity multiplier. Engineers can complete their entire workflow without ever leaving the ticket interface:
            </p>

            <ul className="space-y-4 my-8">
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span className="text-gray-300"><strong className="text-white">Generate customer communications</strong> - AI drafts professional responses based on the ticket context, with tone adjustment for different audiences (technical vs. executive, frustrated vs. routine)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span className="text-gray-300"><strong className="text-white">Create time entries</strong> - Automatically populated based on work performed, eliminating the end-of-day scramble to remember what was done on each ticket</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span className="text-gray-300"><strong className="text-white">Log expenses</strong> - Track any costs associated with the resolution right in the workflow</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span className="text-gray-300"><strong className="text-white">Update ticket status and categorization</strong> - Keep your PSA data clean and accurate without manual overhead</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span className="text-gray-300"><strong className="text-white">Capture resolution notes</strong> - AI-assisted documentation that feeds back into your knowledge base for future tickets</span>
              </li>
            </ul>

            <p className="text-gray-300 leading-relaxed mb-6">
              Every action that used to require navigating to different screens, opening different modules, or remembering different processes - now happens in one place, with AI assistance at every step.
            </p>

            {/* Section: The Bigger Picture */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">The Bigger Picture: Why This Matters</h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              We built this pod because we believe the future of MSP AI isn't about replacing engineers - it's about amplifying them. The best engineers in your organization have accumulated years of knowledge, developed intuition for complex problems, and built relationships with clients. AI should make that expertise more accessible, more consistent, and more scalable.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              When an engineer uses Enterprise Search to find a similar historical ticket, they're not just solving today's problem faster - they're learning from every resolution your MSP has ever documented. When AI analyzes ticket sentiment and flags a frustrated VIP, it's not replacing human judgment - it's ensuring that judgment gets applied to the right situations at the right time.
            </p>

            <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 border border-green-500/30 rounded-xl p-8 my-8">
              <p className="text-xl text-white font-semibold mb-4">The compound effect is significant:</p>
              <ul className="space-y-3 text-gray-300">
                <li>• Faster resolution times mean higher client satisfaction</li>
                <li>• Better documentation today means easier resolutions tomorrow</li>
                <li>• Consistent quality across your team, regardless of experience level</li>
                <li>• Engineers freed from clerical work can focus on complex, high-value problems</li>
                <li>• Revenue leakage identified and captured instead of slipping through cracks</li>
              </ul>
            </div>

            {/* Section: Getting Started */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Ready to See It in Action?</h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              The ConnectWise Manage pod is available now for all xop.ai customers. If you're already using our platform, reach out to your account manager to schedule deployment - remember, we can have you up and running in less than a week.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              If you're new to xop.ai, we'd love to show you what's possible. We offer trial environments where you can experience the pod with your real tickets in your actual ConnectWise environment. No hypotheticals - just hands-on proof of value.
            </p>

            <p className="text-gray-300 leading-relaxed mb-8">
              The future of MSP AI isn't about asking engineers to change how they work. It's about bringing intelligence to where they already are. The ConnectWise Manage pod is that future, available today.
            </p>

          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 border border-green-500/30 rounded-2xl p-8 mt-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Experience the ConnectWise Pod</h3>
              <p className="text-gray-300 mb-6">
                See how AI can transform your engineers' workflow without disrupting it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://xop.im/partner"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all"
                >
                  Schedule a Demo
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-green-500 text-green-400 px-8 py-4 rounded-full font-semibold hover:bg-green-500 hover:text-black transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Author Bio */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center text-2xl font-bold">
                MR
              </div>
              <div>
                <p className="font-semibold text-lg">Matt Ruck</p>
                <p className="text-gray-400">Founder & CEO, xop.ai</p>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/ai-and-msps-no-longer-optional" className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-green-500/50 transition-all">
                <span className="text-green-400 text-sm">AI Strategy</span>
                <h4 className="text-lg font-semibold mt-2 mb-2">AI and MSPs - It's No Longer Optional</h4>
                <p className="text-gray-400 text-sm">The landscape has shifted. AI adoption is becoming a necessity for MSP survival.</p>
              </Link>
              <Link href="/blog/the-30-percent-rule" className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-green-500/50 transition-all">
                <span className="text-green-400 text-sm">MSP Operations</span>
                <h4 className="text-lg font-semibold mt-2 mb-2">The 30% Rule: Why Level 1 Ticket Deflection Matters</h4>
                <p className="text-gray-400 text-sm">Move beyond reactive support to proactive deflection.</p>
              </Link>
            </div>
          </div>

        </div>
      </article>

      <Footer />
    </div>
  )
}
