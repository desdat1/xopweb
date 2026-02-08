'use client'

import { 
  MessageCircle, CheckCircle, TrendingUp, DollarSign, Clock, 
  Users, Star, ArrowRight, Target, Shield, Zap
} from 'lucide-react'

export default function TeamsChatbotPDFPage() {
  const keyFeatures = [
    "30%+ Level 1 ticket deflection with environment-specific training",
    "Seamless Microsoft Teams integration for end users",
    "Automatic ticket creation in ConnectWise Manage with full context", 
    "Bidirectional updates between Teams and PSA systems",
    "White-labeled with your MSP branding and company identity"
  ]

  const deflectionMetrics = [
    { category: "Password Resets", rate: "85%", volume: "High" },
    { category: "Software Questions", rate: "70%", volume: "Medium" },
    { category: "Policy Inquiries", rate: "90%", volume: "High" },
    { category: "Basic Troubleshooting", rate: "60%", volume: "High" }
  ]

  const roiBenefits = [
    { metric: "30%+", description: "Level 1 ticket deflection rate" },
    { metric: "225hrs", description: "Monthly time savings (1000 tickets)" },
    { metric: "$180K", description: "Annual engineering cost savings" },
    { metric: "92%", description: "User satisfaction improvement" }
  ]

  return (
    <div className="min-h-screen bg-white text-black print:bg-white print:text-black" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Header with Branding */}
      <header className="bg-black text-white p-6 print:p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-2xl font-bold">xop.ai</div>
            <div className="text-sm opacity-75">×</div>
            <div className="text-xl font-semibold">Rezolve.ai</div>
          </div>
          <div className="text-right">
            <div className="text-sm opacity-75">AI Solutions for MSPs</div>
            <div className="text-lg font-semibold">Product Overview</div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-6 print:p-4">
        {/* Hero Section */}
        <section className="mb-8 print:mb-6">
          <div className="flex items-start gap-6 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center print:w-12 print:h-12">
              <MessageCircle className="w-8 h-8 text-white print:w-6 print:h-6" />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-3 text-gray-900 print:text-2xl">MSP Branded Teams Chatbot</h1>
              <p className="text-xl text-gray-600 mb-4 print:text-base">
                Deflect 30%+ of Level 1 Tickets with AI-Powered End User Support
              </p>
              <div className="flex items-center gap-4 text-sm print:text-xs">
                <div className="flex items-center gap-1 text-green-600">
                  <Zap className="w-4 h-4" />
                  <span className="font-semibold">Proven 30% Deflection Rate</span>
                </div>
                <div className="flex items-center gap-1 text-blue-600">
                  <Users className="w-4 h-4" />
                  <span>Enterprise Teams Integration</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deflection Examples */}
        <section className="mb-8 print:mb-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 print:text-xl">Ticket Deflection by Category</h2>
          <div className="grid md:grid-cols-2 gap-4 print:grid-cols-2 print:gap-3">
            {deflectionMetrics.map((metric, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 print:p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-900 print:text-sm">{metric.category}</span>
                  <span className="text-2xl font-bold text-green-600 print:text-xl">{metric.rate}</span>
                </div>
                <div className="text-sm text-gray-600 print:text-xs">
                  <span className="inline-flex items-center gap-1">
                    <div className={`w-2 h-2 rounded-full ${metric.volume === 'High' ? 'bg-red-400' : 'bg-yellow-400'}`}></div>
                    {metric.volume} Volume
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-8 print:mb-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 print:text-xl">Key Features & Capabilities</h2>
          <div className="space-y-3">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0 print:w-4 print:h-4" />
                <span className="text-gray-700 print:text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ROI Impact */}
        <section className="mb-8 print:mb-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 print:text-xl">Measurable ROI Impact</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 print:grid-cols-4 print:gap-3">
            {roiBenefits.map((benefit, index) => (
              <div key={index} className="bg-blue-50 rounded-lg p-4 text-center print:p-3">
                <div className="text-3xl font-bold text-blue-600 mb-2 print:text-2xl">{benefit.metric}</div>
                <div className="text-sm text-gray-600 print:text-xs">{benefit.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-8 print:mb-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 print:text-xl">How Teams Chatbot Works</h2>
          <div className="grid md:grid-cols-4 gap-6 print:grid-cols-4 print:gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 print:w-10 print:h-10">
                <span className="text-blue-600 font-bold print:text-sm">1</span>
              </div>
              <h3 className="font-semibold mb-2 print:text-sm">User Asks Question</h3>
              <p className="text-sm text-gray-600 print:text-xs">
                End user messages chatbot in Microsoft Teams
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 print:w-10 print:h-10">
                <span className="text-green-600 font-bold print:text-sm">2</span>
              </div>
              <h3 className="font-semibold mb-2 print:text-sm">AI Analyzes Context</h3>
              <p className="text-sm text-gray-600 print:text-xs">
                Trained on client environment and procedures
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 print:w-10 print:h-10">
                <span className="text-purple-600 font-bold print:text-sm">3</span>
              </div>
              <h3 className="font-semibold mb-2 print:text-sm">Instant Resolution</h3>
              <p className="text-sm text-gray-600 print:text-xs">
                Provides specific, actionable solutions
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 print:w-10 print:h-10">
                <span className="text-orange-600 font-bold print:text-sm">4</span>
              </div>
              <h3 className="font-semibold mb-2 print:text-sm">Escalation if Needed</h3>
              <p className="text-sm text-gray-600 print:text-xs">
                Creates ConnectWise ticket with full context
              </p>
            </div>
          </div>
        </section>

        {/* Pricing & Value */}
        <section className="mb-8 print:mb-6">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 print:p-4">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-3 text-gray-900 print:text-xl">Pricing & Value</h2>
                <div className="mb-4">
                  <div className="text-lg font-semibold text-gray-900 mb-2 print:text-base">Included with Engineer Licenses</div>
                  <div className="text-sm text-gray-600 print:text-xs">
                    50 end-user chatbots included per $55 engineer license
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-lg font-semibold text-gray-900 mb-2 print:text-base">Standalone Option</div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold text-blue-600 print:text-2xl">$250</span>
                    <span className="text-gray-600 print:text-sm">per month (first 20 users)</span>
                  </div>
                  <div className="text-sm text-gray-600 print:text-xs">
                    Additional users: $10/month each
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-gray-900 mb-2 print:text-xl">ROI Example</div>
                  <div className="text-sm text-gray-600 mb-3 print:text-xs">1000 tickets/month × 30% deflection</div>
                  <div className="text-3xl font-bold text-blue-600 print:text-2xl">$180K</div>
                  <div className="text-sm text-gray-500 print:text-xs">Annual Savings</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Example */}
        <section className="mb-8 print:mb-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 print:text-xl">Real-World Example</h2>
          <div className="bg-gray-50 rounded-xl p-6 print:p-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 print:text-sm">Before Teams Chatbot</h3>
                <div className="space-y-2 text-sm text-gray-600 print:text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span>1,000 Level 1 tickets monthly</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span>750 hours engineering time</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span>End users frustrated with wait times</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span>Engineers interrupted by routine requests</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 print:text-sm">After Teams Chatbot</h3>
                <div className="space-y-2 text-sm text-gray-600 print:text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>300 tickets deflected automatically</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>225 hours saved monthly</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Instant responses for common issues</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Engineers focus on complex problems</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white rounded-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 print:text-xl">Net Result: $180K Annual Savings</div>
                <div className="text-sm text-gray-600 print:text-xs">Plus improved customer satisfaction and engineer productivity</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-black text-white rounded-xl p-6 text-center print:p-4 print:bg-gray-900">
          <h2 className="text-2xl font-bold mb-3 print:text-xl">Ready to Deflect 30% of Your Level 1 Tickets?</h2>
          <p className="text-gray-300 mb-4 print:text-sm">
            Transform your end user support with AI-powered Teams chatbot integration.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center print:flex-col print:gap-2">
            <div className="flex items-center gap-2 bg-blue-600 px-6 py-3 rounded-full font-semibold print:px-4 print:py-2">
              <MessageCircle className="w-5 h-5 print:w-4 print:h-4" />
              <span className="print:text-sm">Schedule Demo: xop.im/partner</span>
            </div>
            <div className="text-gray-300 print:text-xs">
              Contact: matt@xop.ai | 555-XOP-DEMO
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 p-4 text-center text-sm text-gray-600 mt-8 print:mt-6 print:text-xs">
        <div className="max-w-4xl mx-auto flex justify-between items-center print:flex-col print:gap-2">
          <div>© 2024 xop.ai - AI Solutions for Managed Service Providers</div>
          <div className="flex gap-4 print:gap-2">
            <span>xop.ai</span>
            <span>•</span>
            <span>Rezolve.ai</span>
            <span>•</span>
            <span>Enterprise AI Platform</span>
          </div>
        </div>
      </footer>
    </div>
  )
}