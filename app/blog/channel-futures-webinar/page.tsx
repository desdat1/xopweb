'use client'

import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Link from 'next/link'
import { Calendar, User, ArrowLeft, Play, ExternalLink } from 'lucide-react'

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
            <div className="mb-4">
              <span className="text-sm bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full">
                Webinars
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              GenAI for MSPs – Channel Futures Webinar
            </h1>
            
            <div className="flex items-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>Matt Ruck</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>February 10, 2025</span>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg prose-invert max-w-none">
            <div className="bg-gradient-to-r from-orange-900/20 to-red-900/20 border border-orange-500/30 rounded-lg p-6 mb-8 text-center">
              <Play className="w-16 h-16 text-orange-400 mx-auto mb-4" />
              <p className="text-xl text-orange-300 font-medium">
                Missed our live presentation? Watch the recording to learn how GenerativeAI is transforming MSP operations.
              </p>
            </div>

            <p className="text-xl text-gray-300 mb-8 font-medium">
              We recently had the opportunity to present at Channel Futures' webinar series, discussing how Generative AI is revolutionizing the MSP industry. If you missed the live session, here's what we covered and how you can access the content.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-white">Webinar Overview</h2>
            
            <p className="mb-6">
              The session, titled "GenAI for MSPs: From Hype to Reality," explored the practical applications of Generative AI in managed service provider environments. Rather than focusing on theoretical possibilities, we dove deep into real-world implementations and measurable results.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-white">Key Topics Covered</h2>

            <h3 className="text-2xl font-semibold mb-4 text-orange-400">The Current State of AI in MSPs</h3>
            <ul className="mb-6 space-y-2">
              <li>• Survey data showing adoption rates across MSPs of different sizes</li>
              <li>• Common misconceptions about AI implementation complexity</li>
              <li>• The difference between AI platforms and AI products</li>
              <li>• Why most MSPs are approaching AI wrong</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4 text-orange-400">Practical AI Applications</h3>
            <ul className="mb-6 space-y-2">
              <li>• Automated ticket summarization and prioritization</li>
              <li>• Intelligent knowledge search across multiple systems</li>
              <li>• Time entry automation and billing optimization</li>
              <li>• Client communication enhancement through AI chatbots</li>
              <li>• Predictive maintenance and issue prevention</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4 text-orange-400">Real ROI Data</h3>
            <p className="mb-4">
              We shared concrete performance metrics from MSPs using our AI solutions:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-3 text-green-400">Efficiency Gains</h4>
                <ul className="space-y-2">
                  <li>• 15-30% engineer productivity improvement</li>
                  <li>• 40% faster average ticket resolution</li>
                  <li>• 90% reduction in solution search time</li>
                </ul>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-3 text-blue-400">Financial Impact</h4>
                <ul className="space-y-2">
                  <li>• 200% ROI within 24 months</li>
                  <li>• 20-30% reduction in end-user tickets</li>
                  <li>• Improved client satisfaction scores</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4 text-orange-400">Implementation Strategy</h3>
            <p className="mb-4">
              We outlined a proven three-phase approach to AI adoption:
            </p>
            <ol className="mb-6 space-y-4">
              <li><strong>Phase 1 - Quick Wins:</strong> Start with ticket summarization and knowledge search</li>
              <li><strong>Phase 2 - Workflow Integration:</strong> Add time tracking automation and client communications</li>
              <li><strong>Phase 3 - Advanced Applications:</strong> Implement predictive analytics and custom AI solutions</li>
            </ol>

            <h2 className="text-3xl font-bold mb-6 text-white">Audience Questions</h2>
            
            <p className="mb-6">
              The Q&A session covered some excellent questions from MSP leaders:
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-orange-400">Top Questions Asked</h3>
            <div className="space-y-6 mb-8">
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                <h4 className="font-semibold text-green-400 mb-2">Q: How do we handle client concerns about AI?</h4>
                <p>Transparency is key. Show clients how AI improves service quality and response times. Many clients are already using AI in their personal lives and appreciate the efficiency gains.</p>
              </div>
              
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                <h4 className="font-semibold text-green-400 mb-2">Q: What about data security and compliance?</h4>
                <p>Choose AI solutions designed for MSPs with proper security controls. Look for SOC 2 compliance, data encryption, and the ability to keep data processing within your approved regions.</p>
              </div>
              
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                <h4 className="font-semibold text-green-400 mb-2">Q: How much should we budget for AI implementation?</h4>
                <p>Start small with targeted solutions. Many MSPs see positive ROI with initial investments under $10,000, then reinvest savings into expanding AI capabilities.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-white">Access the Recording</h2>
            
            <p className="mb-6">
              The webinar recording is available through Channel Futures and provides valuable insights for MSPs at any stage of their AI journey.
            </p>

            <div className="bg-gradient-to-r from-orange-900/20 to-red-900/20 border border-orange-500/30 rounded-lg p-6 mb-8 text-center">
              <h3 className="text-xl font-semibold mb-3 text-orange-400">Watch the Full Webinar</h3>
              <p className="mb-4">
                Get access to the complete presentation and Q&A session.
              </p>
              <a
                href="https://www.channelfutures.com/webinars/genai-for-msps"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-red-600 px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                Watch Recording
                <ExternalLink className="w-4 h-4" />
              </a>
              <p className="text-sm text-gray-400 mt-3">Requires free Channel Futures registration</p>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-white">What's Next?</h2>
            
            <p className="mb-6">
              If the webinar sparked your interest in AI for your MSP, we'd love to continue the conversation. We offer personalized consultations to help you identify the best AI opportunities for your specific business model and client base.
            </p>

            <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-3 text-green-400">Ready to Explore AI for Your MSP?</h3>
              <p className="mb-4">
                Schedule a personalized consultation to discuss your AI strategy and see our solutions in action.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                Schedule Consultation
              </Link>
            </div>

            <p className="text-center text-gray-400 text-sm">
              Missed this webinar but interested in future presentations? Follow us on LinkedIn for updates on upcoming speaking engagements and webinar announcements.
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}