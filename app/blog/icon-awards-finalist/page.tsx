'use client'

import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Link from 'next/link'
import { Calendar, User, ArrowLeft, Award } from 'lucide-react'

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
              <span className="text-sm bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full">
                Company News
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              xop.ai Named Finalist for Emerging Technology Company of the Year at the 2025 ICON Awards!
            </h1>
            
            <div className="flex items-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>Matt Ruck</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>February 25, 2025</span>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg prose-invert max-w-none">
            <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-lg p-6 mb-8 text-center">
              <Award className="w-16 h-16 text-purple-400 mx-auto mb-4" />
              <p className="text-xl text-purple-300 font-medium">
                We're honored to be recognized as a finalist for our innovative AI solutions specifically designed for MSPs.
              </p>
            </div>

            <p className="text-xl text-gray-300 mb-8 font-medium">
              We're thrilled to announce that xop.ai has been named a finalist for Emerging Technology Company of the Year at the prestigious 2025 ICON Awards. This recognition validates our mission to bring practical, ROI-driven AI solutions to the MSP community.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-white">About the ICON Awards</h2>
            
            <p className="mb-6">
              The ICON Awards represent the gold standard for recognition in the IT channel industry. These awards celebrate innovation, leadership, and excellence across various categories, highlighting companies and individuals who are making significant contributions to the technology ecosystem.
            </p>

            <p className="mb-6">
              The Emerging Technology Company of the Year award specifically recognizes organizations that are pioneering new technologies and bringing innovative solutions to market. Being selected as a finalist puts xop.ai among the most innovative companies in the technology space.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-white">What This Recognition Means</h2>
            
            <h3 className="text-2xl font-semibold mb-4 text-purple-400">Validation of Our Approach</h3>
            <p className="mb-6">
              This recognition validates our unique approach to AI for MSPs. Unlike general AI platforms that require months of development and customization, we've built purpose-designed solutions that deliver immediate value:
            </p>

            <ul className="mb-6 space-y-2">
              <li>• AI-powered ticket summarization and prioritization</li>
              <li>• Intelligent knowledge search across all your systems</li>
              <li>• Automated time entry and billing optimization</li>
              <li>• Real-time ticket health monitoring with AURA Insights</li>
              <li>• White-labeled chatbots for client self-service</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4 text-purple-400">Built by MSPs, for MSPs</h3>
            <p className="mb-6">
              What sets xop.ai apart is our deep understanding of MSP operations. With over 30 years of MSP experience, including building and running designDATA (a $30M MSP), our founder Matt Ruck knows exactly what MSPs need from AI:
            </p>

            <ul className="mb-6 space-y-2">
              <li>• Solutions that integrate seamlessly with existing workflows</li>
              <li>• Immediate ROI without lengthy implementation periods</li>
              <li>• Tools that actually solve real MSP problems</li>
              <li>• Technology that engineers will actually use</li>
            </ul>

            <h2 className="text-3xl font-bold mb-6 text-white">Our Journey to This Moment</h2>
            
            <p className="mb-6">
              Since our founding, we've been laser-focused on one goal: helping MSPs leverage AI to deliver better service, increase efficiency, and grow their businesses. This journey has included:
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-purple-400">2021-2023: Foundation Building</h3>
            <ul className="mb-6 space-y-2">
              <li>• Extensive research within the MSP community</li>
              <li>• Partnership with Rezolve.ai for enterprise-grade AI technology</li>
              <li>• Development of our first AI solutions</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4 text-purple-400">2024: Product Development</h3>
            <ul className="mb-6 space-y-2">
              <li>• Launch of Engineer Efficiency tools</li>
              <li>• Introduction of AURA Insights ticket health monitoring</li>
              <li>• Beta testing with forward-thinking MSPs</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4 text-purple-400">2025: Industry Recognition</h3>
            <ul className="mb-6 space-y-2">
              <li>• ICON Awards finalist selection</li>
              <li>• Growing adoption across MSPs of all sizes</li>
              <li>• Proven ROI results: 200% return within two years</li>
            </ul>

            <h2 className="text-3xl font-bold mb-6 text-white">Real Results from Real MSPs</h2>
            
            <p className="mb-6">
              This recognition is particularly meaningful because it's backed by real results our MSP partners are achieving:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-3 text-green-400">Efficiency Gains</h4>
                <ul className="space-y-2">
                  <li>• 15-30% improvement in engineer productivity</li>
                  <li>• 40% faster ticket resolution times</li>
                  <li>• 90% reduction in time spent searching for solutions</li>
                </ul>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-3 text-blue-400">Business Impact</h4>
                <ul className="space-y-2">
                  <li>• 200% ROI within two years of implementation</li>
                  <li>• 20-30% reduction in end-user tickets</li>
                  <li>• Improved client satisfaction scores</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-white">What's Next</h2>
            
            <p className="mb-6">
              Being recognized as a finalist motivates us to continue pushing the boundaries of what's possible with AI for MSPs. In the coming months, you can expect:
            </p>

            <ul className="mb-6 space-y-2">
              <li>• Enhanced voice agent capabilities for after-hours support</li>
              <li>• Advanced email triage and response automation</li>
              <li>• Deeper integrations with popular MSP tools</li>
              <li>• Expanded partnership opportunities for MSPs</li>
            </ul>

            <h2 className="text-3xl font-bold mb-6 text-white">Thank You</h2>
            
            <p className="mb-6">
              This recognition wouldn't be possible without our incredible MSP partners who trust us with their operations, provide feedback, and help us build better solutions. Thank you for believing in our vision and helping us prove that AI can truly transform the MSP industry.
            </p>

            <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-3 text-purple-400">Ready to Join Our Success Story?</h3>
              <p className="mb-4">
                See why award-winning AI solutions are choosing xop.ai to transform their operations.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                Schedule a Demo
              </Link>
            </div>

            <p className="text-center text-gray-400 text-sm">
              Winners will be announced at the ICON Awards ceremony on March 15, 2025. 
              Wish us luck! 🤞
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}