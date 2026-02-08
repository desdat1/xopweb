'use client'

import { 
  Search, CheckCircle, TrendingUp, DollarSign, Clock, 
  Users, Star, ArrowRight, Target, Shield, Building
} from 'lucide-react'

export default function EnterpriseSearchPDFPage() {
  const keyFeatures = [
    "AI search across IT Glue, SharePoint, Confluence, and documentation",
    "White-labeled solution you sell directly to clients ($250+/month)",
    "Instant answers to company policies, procedures, and information",
    "Reduces internal helpdesk volume by 60-75%", 
    "35-40% profit margins on recurring monthly revenue"
  ]

  const searchCapabilities = [
    { category: "HR Policies", example: "\"What's our vacation policy for new employees?\"" },
    { category: "IT Procedures", example: "\"How do I request software access?\"" },
    { category: "Company Forms", example: "\"Where is the expense reimbursement form?\"" },
    { category: "Office Information", example: "\"What are the parking rules for visitors?\"" }
  ]

  const revenueMetrics = [
    { clients: "10", monthly: "$2,500", annual: "$30K" },
    { clients: "25", monthly: "$6,250", annual: "$75K" },
    { clients: "50", monthly: "$12,500", annual: "$150K" },
    { clients: "100", monthly: "$25,000", annual: "$300K" }
  ]

  const roiBenefits = [
    { metric: "35-40%", description: "Profit margin on each client" },
    { metric: "$250K+", description: "Annual recurring revenue potential" },
    { metric: "60-75%", description: "Reduction in internal helpdesk calls" },
    { metric: "2-3min", description: "Average time to find information" }
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
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center print:w-12 print:h-12">
              <Search className="w-8 h-8 text-white print:w-6 print:h-6" />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-3 text-gray-900 print:text-2xl">Enterprise Search for End Users</h1>
              <p className="text-xl text-gray-600 mb-4 print:text-base">
                White-Labeled AI Search Solution That Generates $250K+ Annual Recurring Revenue
              </p>
              <div className="flex items-center gap-4 text-sm print:text-xs">
                <div className="flex items-center gap-1 text-green-600">
                  <DollarSign className="w-4 h-4" />
                  <span className="font-semibold">Revenue Generator</span>
                </div>
                <div className="flex items-center gap-1 text-purple-600">
                  <Building className="w-4 h-4" />
                  <span>White-Labeled for Your MSP</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Revenue Opportunity */}
        <section className="mb-8 print:mb-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 print:text-xl">Revenue Growth Trajectory</h2>
          <div className="bg-green-50 rounded-xl p-6 print:p-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 print:grid-cols-4 print:gap-3">
              {revenueMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white rounded-lg p-3 shadow-sm print:p-2">
                    <div className="text-xl font-bold text-green-600 mb-1 print:text-lg">{metric.clients}</div>
                    <div className="text-xs text-gray-500 mb-2 print:text-xs">Clients</div>
                    <div className="text-lg font-bold text-gray-900 mb-1 print:text-base">{metric.monthly}</div>
                    <div className="text-xs text-gray-600 print:text-xs">Monthly</div>
                    <div className="text-sm font-semibold text-blue-600 print:text-xs">{metric.annual}</div>
                    <div className="text-xs text-gray-500 print:text-xs">Annual</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <div className="text-sm text-gray-600 print:text-xs">Starting at $250/month for first 20 users • $10/month per additional user</div>
            </div>
          </div>
        </section>

        {/* Search Examples */}
        <section className="mb-8 print:mb-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 print:text-xl">What End Users Can Find Instantly</h2>
          <div className="grid md:grid-cols-2 gap-4 print:grid-cols-2 print:gap-3">
            {searchCapabilities.map((capability, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 print:p-3">
                <h3 className="font-semibold text-gray-900 mb-2 print:text-sm">{capability.category}</h3>
                <div className="text-sm text-gray-600 italic print:text-xs">
                  {capability.example}
                </div>
                <div className="mt-2 text-xs text-green-600 font-medium">
                  ✓ Instant, specific answers
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-8 print:mb-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 print:text-xl">Key Features & Business Value</h2>
          <div className="space-y-3">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0 print:w-4 print:h-4" />
                <span className="text-gray-700 print:text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ROI Benefits */}
        <section className="mb-8 print:mb-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 print:text-xl">ROI & Business Impact</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 print:grid-cols-4 print:gap-3">
            {roiBenefits.map((benefit, index) => (
              <div key={index} className="bg-purple-50 rounded-lg p-4 text-center print:p-3">
                <div className="text-3xl font-bold text-purple-600 mb-2 print:text-2xl">{benefit.metric}</div>
                <div className="text-sm text-gray-600 print:text-xs">{benefit.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-8 print:mb-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 print:text-xl">How Enterprise Search Works</h2>
          <div className="grid md:grid-cols-4 gap-6 print:grid-cols-4 print:gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 print:w-10 print:h-10">
                <span className="text-purple-600 font-bold print:text-sm">1</span>
              </div>
              <h3 className="font-semibold mb-2 print:text-sm">Data Ingestion</h3>
              <p className="text-sm text-gray-600 print:text-xs">
                AI trains on client's documentation and systems
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 print:w-10 print:h-10">
                <span className="text-blue-600 font-bold print:text-sm">2</span>
              </div>
              <h3 className="font-semibold mb-2 print:text-sm">White-Label Deploy</h3>
              <p className="text-sm text-gray-600 print:text-xs">
                Branded with client's company identity
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 print:w-10 print:h-10">
                <span className="text-green-600 font-bold print:text-sm">3</span>
              </div>
              <h3 className="font-semibold mb-2 print:text-sm">Instant Search</h3>
              <p className="text-sm text-gray-600 print:text-xs">
                Employees get immediate, accurate answers
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 print:w-10 print:h-10">
                <span className="text-orange-600 font-bold print:text-sm">4</span>
              </div>
              <h3 className="font-semibold mb-2 print:text-sm">MSP Revenue</h3>
              <p className="text-sm text-gray-600 print:text-xs">
                You earn $250+/month recurring revenue
              </p>
            </div>
          </div>
        </section>

        {/* Client Value Proposition */}
        <section className="mb-8 print:mb-6">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 print:p-4">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 print:text-xl">Value Proposition for Your Clients</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 print:text-sm">Client Pain Points Solved</h3>
                <div className="space-y-2 text-sm text-gray-600 print:text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span>Employees waste 2+ hours daily searching for information</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span>HR/IT get overwhelmed with policy questions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span>Important information buried in documents</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 print:text-sm">Enterprise Search Benefits</h3>
                <div className="space-y-2 text-sm text-gray-600 print:text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Find answers in under 30 seconds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Reduce internal support tickets by 60-75%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Improve employee productivity significantly</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Real Success Example */}
        <section className="mb-8 print:mb-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 print:text-xl">MSP Success Story</h2>
          <div className="bg-gray-50 rounded-xl p-6 print:p-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 print:w-10 print:h-10">
                <span className="text-white font-bold print:text-sm">TC</span>
              </div>
              <div>
                <div className="font-semibold text-gray-900 mb-1 print:text-sm">TechCorp Solutions</div>
                <div className="text-sm text-gray-600 mb-3 print:text-xs">35 Engineers, Regional MSP</div>
                <blockquote className="text-gray-700 italic mb-3 print:text-sm">
                  "Enterprise Search became our fastest-growing revenue stream. We're now generating $28K monthly 
                  from 112 clients, with 38% profit margins. Clients love it because their employees actually find what they need."
                </blockquote>
                <div className="grid grid-cols-3 gap-4 text-center print:grid-cols-3 print:gap-2">
                  <div>
                    <div className="font-bold text-green-600 print:text-sm">112</div>
                    <div className="text-xs text-gray-500">Active Clients</div>
                  </div>
                  <div>
                    <div className="font-bold text-purple-600 print:text-sm">$28K</div>
                    <div className="text-xs text-gray-500">Monthly Revenue</div>
                  </div>
                  <div>
                    <div className="font-bold text-blue-600 print:text-sm">38%</div>
                    <div className="text-xs text-gray-500">Profit Margin</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Strategy */}
        <section className="mb-8 print:mb-6">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 print:p-4">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 print:text-xl">Pricing Strategy & ROI</h2>
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 print:text-sm">Recommended Client Pricing</h3>
                <div className="space-y-2 text-sm text-gray-700 print:text-xs">
                  <div className="flex justify-between">
                    <span>First 20 users:</span>
                    <span className="font-bold">$250/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Additional users:</span>
                    <span className="font-bold">$10/month each</span>
                  </div>
                  <div className="flex justify-between">
                    <span>100-user company:</span>
                    <span className="font-bold text-green-600">$1,050/month</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span>Your profit (35%):</span>
                    <span className="font-bold text-green-600">$368/month</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-gray-900 mb-2 print:text-xl">Client ROI</div>
                  <div className="text-sm text-gray-600 mb-3 print:text-xs">100 employees × 30 min saved daily</div>
                  <div className="text-3xl font-bold text-purple-600 print:text-2xl">4,400%</div>
                  <div className="text-sm text-gray-500 print:text-xs">Annual ROI</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-black text-white rounded-xl p-6 text-center print:p-4 print:bg-gray-900">
          <h2 className="text-2xl font-bold mb-3 print:text-xl">Ready to Generate $250K+ in Recurring Revenue?</h2>
          <p className="text-gray-300 mb-4 print:text-sm">
            Transform your MSP into a revenue-generating AI solutions provider with white-labeled Enterprise Search.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center print:flex-col print:gap-2">
            <div className="flex items-center gap-2 bg-purple-600 px-6 py-3 rounded-full font-semibold print:px-4 print:py-2">
              <Search className="w-5 h-5 print:w-4 print:h-4" />
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