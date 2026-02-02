'use client'

import { 
  BarChart3, Users, AlertTriangle, Award, Brain, Target, 
  CheckCircle, TrendingUp, DollarSign, MessageCircle, Settings,
  Shield, Clock, Star, Mail, Search, Zap
} from 'lucide-react'

export default function ManagerAppPDFPage() {
  const modules = [
    {
      title: "AI Ticket Assignment",
      icon: <Target className="w-6 h-6" />,
      description: "Intelligent routing based on skills, workload, and performance",
      benefits: ["40% faster assignment", "Skills-based matching", "Workload balancing"]
    },
    {
      title: "Escalations Board",
      icon: <AlertTriangle className="w-6 h-6" />,
      description: "Proactive issue detection powered by AURA insights",
      benefits: ["72-hour early warning", "AI risk assessment", "Communication analysis"]
    },
    {
      title: "Client Health Monitoring",
      icon: <Shield className="w-6 h-6" />,
      description: "Comprehensive satisfaction and profitability tracking",
      benefits: ["Real-time CSAT scoring", "Churn risk analysis", "Profitability gauge"]
    },
    {
      title: "Team Performance",
      icon: <Award className="w-6 h-6" />,
      description: "Analytics with weekly coaching insights",
      benefits: ["Performance scorecards", "Recognition insights", "Coaching recommendations"]
    }
  ]

  const roiBenefits = [
    { metric: "40%", description: "Faster ticket assignment" },
    { metric: "30%", description: "Reduction in escalations" },
    { metric: "25%", description: "Client satisfaction improvement" },
    { metric: "72hrs", description: "Early issue detection" }
  ]

  const aiIntegrations = [
    {
      title: "Voice AI",
      icon: <MessageCircle className="w-5 h-5" />,
      description: "Call sentiment feeds escalation tracking"
    },
    {
      title: "Email Agents",
      icon: <Mail className="w-5 h-5" />,
      description: "Response patterns enhance health scoring"
    },
    {
      title: "Teams Chatbot",
      icon: <Users className="w-5 h-5" />,
      description: "Deflection data informs performance metrics"
    },
    {
      title: "Enterprise Search",
      icon: <Search className="w-5 h-5" />,
      description: "Knowledge gaps identify training needs"
    }
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
              <BarChart3 className="w-8 h-8 text-white print:w-6 print:h-6" />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-3 text-gray-900 print:text-2xl">Manager App - Service Desk Management</h1>
              <p className="text-xl text-gray-600 mb-4 print:text-base">
                Unified AI Platform Consolidating Intelligence from Voice, Email, Teams, and Search
              </p>
              <div className="flex items-center gap-4 text-sm print:text-xs">
                <div className="flex items-center gap-1 text-purple-600">
                  <Award className="w-4 h-4" />
                  <span className="font-semibold">Pre-Release Access</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Four Modules */}
        <section className="mb-8 print:mb-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 print:text-xl">Four AI-Powered Management Modules</h2>
          <div className="grid md:grid-cols-2 gap-4 print:grid-cols-2 print:gap-3">
            {modules.map((module, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 print:p-3">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-500 text-white rounded-lg flex items-center justify-center print:w-8 print:h-8">
                    {module.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 print:text-sm">{module.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-3 print:text-xs">{module.description}</p>
                <div className="space-y-1">
                  {module.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-500 print:text-xs">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AI Integration */}
        <section className="mb-8 print:mb-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 print:text-xl">Unified AI Intelligence</h2>
          <p className="text-gray-600 mb-4 print:text-sm">
            Consolidates data from all AI touchpoints to provide comprehensive management insights
          </p>
          <div className="grid md:grid-cols-4 gap-4 print:grid-cols-4 print:gap-3">
            {aiIntegrations.map((integration, index) => (
              <div key={index} className="text-center bg-gray-50 rounded-lg p-3 print:p-2">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-2 print:w-8 print:h-8">
                  <div className="text-white">{integration.icon}</div>
                </div>
                <h3 className="font-semibold text-sm mb-2 print:text-xs">{integration.title}</h3>
                <p className="text-xs text-gray-600 print:text-xs">{integration.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Benefits */}
        <section className="mb-8 print:mb-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 print:text-xl">Proven Results</h2>
          <div className="grid md:grid-cols-4 gap-4 print:grid-cols-4 print:gap-3">
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
          <h2 className="text-2xl font-bold mb-4 text-gray-900 print:text-xl">Predictive Management Workflow</h2>
          <div className="grid md:grid-cols-4 gap-6 print:grid-cols-4 print:gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 print:w-10 print:h-10">
                <span className="text-blue-600 font-bold print:text-sm">1</span>
              </div>
              <h3 className="font-semibold mb-2 print:text-sm">AI Data Collection</h3>
              <p className="text-sm text-gray-600 print:text-xs">
                Voice calls, emails, Teams chats, and search patterns
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 print:w-10 print:h-10">
                <span className="text-green-600 font-bold print:text-sm">2</span>
              </div>
              <h3 className="font-semibold mb-2 print:text-sm">Intelligence Analysis</h3>
              <p className="text-sm text-gray-600 print:text-xs">
                AI processes patterns and predicts issues
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 print:w-10 print:h-10">
                <span className="text-purple-600 font-bold print:text-sm">3</span>
              </div>
              <h3 className="font-semibold mb-2 print:text-sm">Proactive Alerts</h3>
              <p className="text-sm text-gray-600 print:text-xs">
                72-hour early warning for intervention
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 print:w-10 print:h-10">
                <span className="text-orange-600 font-bold print:text-sm">4</span>
              </div>
              <h3 className="font-semibold mb-2 print:text-sm">Optimized Outcomes</h3>
              <p className="text-sm text-gray-600 print:text-xs">
                Better assignment, health, and performance
              </p>
            </div>
          </div>
        </section>

        {/* Pricing & Value */}
        <section className="mb-8 print:mb-6">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 print:p-4">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-3 text-gray-900 print:text-xl">Pre-Release Pricing</h2>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-blue-600 print:text-3xl">$99</span>
                  <span className="text-xl text-gray-600 print:text-lg">per manager/month</span>
                </div>
                <div className="space-y-2 text-sm text-gray-600 print:text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>All four management modules included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Complete AI intelligence consolidation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>ConnectWise Manage overlay integration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>AURA-powered predictive analytics</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-gray-900 mb-2 print:text-xl">ROI Example</div>
                  <div className="text-sm text-gray-600 mb-3 print:text-xs">10 managers × $2K monthly value</div>
                  <div className="text-3xl font-bold text-blue-600 print:text-2xl">$240K</div>
                  <div className="text-sm text-gray-500 print:text-xs">Annual Value</div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section className="bg-black text-white rounded-xl p-6 text-center print:p-4 print:bg-gray-900">
          <h2 className="text-2xl font-bold mb-3 print:text-xl">Transform Your Service Desk Management</h2>
          <p className="text-gray-300 mb-4 print:text-sm">
            From reactive firefighting to predictive management with unified AI intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center print:flex-col print:gap-2">
            <div className="flex items-center gap-2 bg-blue-600 px-6 py-3 rounded-full font-semibold print:px-4 print:py-2">
              <BarChart3 className="w-5 h-5 print:w-4 print:h-4" />
              <span className="print:text-sm">Join Waitlist: xop.im/partner</span>
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
          <div>© 2024 XOP.ai - AI Solutions for Managed Service Providers</div>
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