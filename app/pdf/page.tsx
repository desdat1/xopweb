'use client'

import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Link from 'next/link'
import { 
  FileText, Download, Zap, MessageCircle, Search,
  ExternalLink, Printer, Mail
} from 'lucide-react'

export default function PDFIndexPage() {
  const productLiterature = [
    {
      slug: 'engineer-app-v4',
      title: 'Engineer App v4',
      description: 'AI-Powered Engineering Assistant That Transforms MSP Service Delivery',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-600',
      highlights: ['45% time savings per ticket', '$18K annual savings per engineer', '500+ engineers using']
    },
    {
      slug: 'teams-chatbot', 
      title: 'MSP Branded Teams Chatbot',
      description: 'Deflect 30%+ of Level 1 Tickets with AI-Powered End User Support',
      icon: <MessageCircle className="w-6 h-6" />,
      color: 'from-blue-500 to-purple-600',
      highlights: ['30%+ ticket deflection rate', '$180K annual savings', '225 hours saved monthly']
    },
    {
      slug: 'enterprise-search',
      title: 'Enterprise Search for End Users',
      description: 'White-Labeled AI Search Solution That Generates $250K+ Annual Recurring Revenue',
      icon: <Search className="w-6 h-6" />,
      color: 'from-purple-500 to-blue-600',
      highlights: ['$250K+ revenue potential', '35-40% profit margins', '60-75% helpdesk reduction']
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Header */}
      <section className="px-6 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 via-transparent to-blue-900/10"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full mb-6">
            <FileText className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium text-green-400">Product Literature</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">
            PDF Product Literature
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
            Professional one-page overviews of our AI solutions that you can email to prospects
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Each PDF is optimized for print and email, featuring key benefits, ROI metrics, and compelling client success stories.
          </p>
        </div>
      </section>

      {/* Product Literature Grid */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
            {productLiterature.map((product) => (
              <article key={product.slug} className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-green-500/50 transition-all duration-300">
                <div className="p-8">
                  <div className="flex items-start gap-6 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${product.color} rounded-xl flex items-center justify-center text-white`}>
                      {product.icon}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold mb-3 text-white">{product.title}</h2>
                      <p className="text-xl text-gray-300 mb-4">{product.description}</p>
                      <div className="flex flex-wrap gap-4">
                        {product.highlights.map((highlight, index) => (
                          <div key={index} className="text-sm bg-gray-800 px-3 py-1 rounded-full text-gray-300">
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href={`/pdf/${product.slug}`}
                      className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition-colors"
                      target="_blank"
                    >
                      <ExternalLink className="w-5 h-5" />
                      View PDF Page
                    </Link>
                    <button
                      onClick={() => {
                        // Open PDF page in new tab for printing
                        window.open(`/pdf/${product.slug}`, '_blank')
                      }}
                      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                      <Printer className="w-5 h-5" />
                      Print to PDF
                    </button>
                    <button
                      onClick={() => {
                        const subject = `${product.title} - AI Solution for MSPs`
                        const body = `Hi,\n\nI wanted to share information about our ${product.title} solution that could significantly benefit your MSP operations.\n\nPlease find the product overview at: ${window.location.origin}/pdf/${product.slug}\n\nKey benefits:\n${product.highlights.map(h => `• ${h}`).join('\n')}\n\nI'd love to schedule a brief demo to show you how this could transform your service delivery.\n\nBest regards`
                        const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
                        window.location.href = mailtoLink
                      }}
                      className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                      Email Template
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Instructions Section */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto bg-gray-900 border border-gray-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">How to Use Product Literature</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">View & Customize</h3>
              <p className="text-gray-400 text-sm">
                Click "View PDF Page" to see the formatted one-pager. Content is optimized for professional presentation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Generate PDF</h3>
              <p className="text-gray-400 text-sm">
                Use "Print to PDF" button or your browser's Ctrl+P to save as PDF. Print margins are pre-optimized.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Email Prospects</h3>
              <p className="text-gray-400 text-sm">
                Use "Email Template" for pre-written prospect emails, or attach the PDF to your own messages.
              </p>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-green-900/20 border border-green-500/30 rounded-lg">
            <h4 className="font-semibold text-green-400 mb-3">💡 Pro Tips for Email Outreach:</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• Personalize the email with specific pain points you've identified</li>
              <li>• Reference their company size and current challenges</li>
              <li>• Include concrete ROI numbers relevant to their situation</li>
              <li>• Follow up with a calendar link for easy scheduling</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}