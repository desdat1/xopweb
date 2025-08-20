'use client'

import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'

export default function FAQPage() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)

  const faqs = [
    {
      question: "How do we get started with AI without disrupting our current operations?",
      answer: "Our platform is designed for seamless integration with zero disruption to your existing workflows. We start with our Enterprise Search solution, which works as an overlay to your current systems - your engineers continue using ConnectWise Manage exactly as before, but now have AI-powered search across IT Glue, SharePoint, and historical tickets. The implementation takes just hours, not weeks, and your team sees immediate value. From there, we gradually introduce additional capabilities like the Engineer App v4 and voice agents, all while maintaining your current processes."
    },
    {
      question: "Can AI actually generate recurring revenue for our MSP, or just reduce costs?",
      answer: "Unlike cost-reduction-only solutions, our platform creates new revenue streams. Our white-labeled Enterprise Search and branded chatbot solutions can be sold directly to your clients starting at $250/month for the first 20 users, with 30-40% profit margins. These aren't just internal efficiency tools - they're productized solutions that your clients pay for separately. Many MSPs are generating an additional $15,000-30,000 monthly in MRR within their first year, completely separate from cost savings."
    },
    {
      question: "How does voice AI work for MSPs? Can AI actually handle phone calls?",
      answer: "Yes - we're the only MSP AI platform with comprehensive voice capabilities. Our Phone Intake Agent answers calls 24/7, gathers detailed information from clients, and creates complete tickets in ConnectWise automatically. Our Conversation Monitor (coming soon) will join existing calls to auto-document everything discussed. This isn't just call forwarding - it's intelligent conversation handling that captures context, understands technical issues, and ensures zero information loss. MSPs using voice AI report 100% call capture and can provide true 24/7 support without adding staff."
    },
    {
      question: "How does AI integration work with our existing ConnectWise/PSA tools?",
      answer: "Our platform integrates natively with ConnectWise Manage through deep API connections, not just surface-level plugins. Tickets created by our voice agents appear instantly in your PSA with full context. Our Enterprise Search pulls data directly from ConnectWise, IT Glue, and your other tools to provide contextual results. The Engineer App v4 works as an intelligent overlay - your technicians see AI-generated responses, time entries, and solutions right within their familiar ConnectWise interface. Everything syncs bidirectionally, so your existing workflows, reporting, and processes remain unchanged."
    },
    {
      question: "What does the Teams end user bot do? How is it different than Enterprise Search for end users?",
      answer: "Our Teams bot creates a direct communication channel between your end users and engineers through Microsoft Teams. It's trained on common end user issues to deflect simple tickets, but when escalation is needed, it seamlessly creates tickets in ConnectWise Manage with full context. Updates flow bidirectionally - engineers can update tickets and end users see responses in Teams. Enterprise Search for end users is different - it's a standalone revenue-generating product you sell to clients for $250+ monthly, allowing them to search their own documentation and systems independently. The Teams bot is about communication and ticket management; Enterprise Search is about client self-service and recurring revenue."
    },
    {
      question: "Security: Where is my data stored?",
      answer: "We maintain secure instances in the US, Canada, and Europe, allowing you to select data residency based on your compliance requirements. We conduct SOC2 Type 2 audits and maintain additional security and compliance certifications. We're happy to complete security questionnaires and share detailed compliance documentation as appropriate, subject to non-disclosure agreements. Your data security is paramount, and we work closely with MSPs to meet their specific compliance and regulatory requirements."
    },
    {
      question: "What underlying AI engine do you use?",
      answer: "Our platform is completely portable across AI engines - we support OpenAI, Google, Claude, and others with automatic failover capabilities between models. This gives you flexibility and protection against vendor lock-in or service disruptions. If one provider has issues, your operations continue seamlessly with another. This multi-model approach also allows us to optimize performance and cost by using the best AI engine for each specific task, ensuring you always have access to cutting-edge AI capabilities regardless of market changes."
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* FAQ Header */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get answers to common questions about implementing AI solutions in your MSP
            </p>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`bg-gray-900 border rounded-2xl transition-all duration-300 ${
                  expandedFAQ === index 
                    ? 'border-green-500 shadow-lg shadow-green-500/20' 
                    : 'border-gray-800 hover:border-green-500/50'
                }`}
              >
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full text-left p-6 flex items-center justify-between focus:outline-none"
                >
                  <div className="flex items-start gap-4">
                    <HelpCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <h3 className="text-xl font-semibold text-white pr-4">
                      {faq.question}
                    </h3>
                  </div>
                  {expandedFAQ === index ? (
                    <ChevronUp className="w-6 h-6 text-green-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                {expandedFAQ === index && (
                  <div className="px-6 pb-6 animate-fadeIn">
                    <div className="border-t border-gray-700 pt-6 ml-10">
                      <p className="text-gray-300 text-lg leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">More Questions?</h2>
              <p className="text-xl text-gray-300 mb-6">
                Let's meet!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://xop.im/partner"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all transform hover:scale-105"
                >
                  Schedule a Demo
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-transparent border-2 border-green-500 text-green-400 px-8 py-4 rounded-full font-semibold hover:bg-green-500 hover:text-black transition-all"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}