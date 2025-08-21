'use client'

import { 
  Zap, BarChart3, MessageCircle, Search, Phone, Mail, 
  CheckCircle, TrendingUp, Users, Star, Target, Shield,
  Award, Clock, DollarSign, ArrowRight, Database, Settings,
  AlertTriangle, Brain, FileText, Building
} from 'lucide-react'

export default function CompletePlatformGuidePDF() {
  const platformModules = [
    {
      name: "Engineer App v4",
      icon: <Zap className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
      description: "AI-Powered Engineering Assistant",
      keyFeatures: [
        "Enterprise Search across IT Glue, SharePoint, tickets",
        "Voice AI for call documentation and ticket creation", 
        "Email Agent processing with smart categorization",
        "Teams Chatbot integration for ticket deflection",
        "Automated time entries and workflow optimization"
      ],
      metrics: [
        { label: "Time Savings", value: "45% per ticket" },
        { label: "Daily Hours Saved", value: "2.5 hours" },
        { label: "Annual Savings", value: "$18K per engineer" }
      ]
    },
    {
      name: "Manager App",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-600",
      description: "Service Desk Management Intelligence",
      keyFeatures: [
        "AI Ticket Assignment with skills matching",
        "Predictive escalation detection (72-hour warning)",
        "Client health monitoring and churn prevention",
        "Team performance analytics with coaching insights",
        "Unified intelligence from all AI touchpoints"
      ],
      metrics: [
        { label: "Faster Assignment", value: "40%" },
        { label: "Escalation Reduction", value: "30%" },
        { label: "Client Satisfaction", value: "25% improvement" }
      ]
    },
    {
      name: "Revenue Solutions",
      icon: <DollarSign className="w-8 h-8" />,
      color: "from-purple-500 to-pink-600", 
      description: "White-Labeled Client Products",
      keyFeatures: [
        "Enterprise Search for end users (white-labeled)",
        "Branded Teams Chatbots with ticket integration",
        "Email processing solutions for clients",
        "Voice AI for client after-hours support",
        "Fully managed with MSP branding"
      ],
      metrics: [
        { label: "Revenue Potential", value: "$250K+ ARR" },
        { label: "Profit Margins", value: "40-60%" },
        { label: "Helpdesk Reduction", value: "60-75%" }
      ]
    }
  ]

  const roiCalculator = [
    { category: "Engineer Efficiency", engineers: 10, savings: "$18K", total: "$180K" },
    { category: "Manager Productivity", managers: 3, savings: "$25K", total: "$75K" },
    { category: "Client Revenue", clients: 5, revenue: "$50K", total: "$250K" },
    { category: "Operational Savings", tickets: "30% reduction", value: "$120K", total: "$120K" }
  ]

  const implementationPhases = [
    {
      phase: "Phase 1",
      timeline: "Week 1-2",
      title: "Foundation Setup",
      items: ["ConnectWise integration", "User provisioning", "Basic AI training", "Initial configuration"]
    },
    {
      phase: "Phase 2", 
      timeline: "Week 3-4",
      title: "Core Platform Deployment",
      items: ["Engineer App v4 rollout", "Enterprise Search implementation", "Voice AI setup", "Email Agent configuration"]
    },
    {
      phase: "Phase 3",
      timeline: "Week 5-6", 
      title: "Advanced Features",
      items: ["Manager App activation", "Teams Chatbot deployment", "Client solutions setup", "Performance optimization"]
    },
    {
      phase: "Phase 4",
      timeline: "Week 7-8",
      title: "Full Optimization",
      items: ["Advanced AI training", "Custom workflows", "Revenue solution launch", "Success metrics tracking"]
    }
  ]

  return (
    <div className="min-h-screen bg-white text-black print:bg-white print:text-black" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Cover Page */}
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 print:min-h-screen">
        <div className="max-w-4xl mx-auto text-center p-8">
          {/* Header Branding */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="text-3xl font-bold text-gray-900">xop.ai</div>
            <div className="text-xl text-gray-400">×</div>
            <div className="text-3xl font-bold text-blue-600">Rezolve.ai</div>
          </div>
          
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-6 py-3 rounded-full font-semibold mb-8">
              <Star className="w-5 h-5" />
              <span>Complete AI Platform for MSPs</span>
            </div>
            
            <h1 className="text-6xl font-bold mb-6 text-gray-900 print:text-5xl">
              The Future of 
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent block">
                MSP Operations
              </span>
            </h1>
            
            <p className="text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed print:text-xl">
              Comprehensive Product Guide: Engineer Efficiency, Management Intelligence, 
              and Revenue-Generating AI Solutions
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl font-bold text-green-600 mb-2">45%</div>
                <div className="text-gray-600">Time Savings per Ticket</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">$250K+</div>
                <div className="text-gray-600">Revenue Potential</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl font-bold text-purple-600 mb-2">1000+</div>
                <div className="text-gray-600">Engineers Using</div>
              </div>
            </div>
          </div>
          
          <div className="text-gray-500 text-lg">
            © 2024 XOP.ai - Transforming MSP Operations with AI
          </div>
        </div>
      </div>

      {/* Executive Summary */}
      <div className="max-w-4xl mx-auto p-8 print:p-6 page-break-before">
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Executive Summary</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-blue-500 mb-8"></div>
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            The MSP industry is at a critical inflection point. While traditional approaches to service delivery 
            struggle with rising costs and complexity, forward-thinking MSPs are leveraging AI to create 
            unprecedented efficiency gains and new revenue streams.
          </p>
          
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Our comprehensive AI platform addresses every aspect of MSP operations - from engineer productivity 
            and management intelligence to white-labeled client solutions that generate recurring revenue. 
            This isn't just about automation; it's about transformation.
          </p>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-center">The Complete Solution</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Engineer Efficiency</h4>
              <p className="text-gray-600 text-sm">AI-powered tools that save 2.5 hours daily per engineer</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Management Intelligence</h4>
              <p className="text-gray-600 text-sm">Predictive analytics for proactive decision making</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Revenue Generation</h4>
              <p className="text-gray-600 text-sm">White-labeled solutions creating $250K+ ARR</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 text-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Key Business Outcomes</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-green-400">Operational Efficiency</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>45% reduction in ticket resolution time</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>30% decrease in escalations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>40% faster ticket assignment</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-blue-400">Financial Impact</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>$18K annual savings per engineer</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>$250K+ new revenue potential</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>ROI achieved within 90 days</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Platform Modules */}
      <div className="max-w-4xl mx-auto p-8 print:p-6 page-break-before">
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Platform Modules</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-blue-500 mb-8"></div>
        </div>

        <div className="space-y-12">
          {platformModules.map((module, index) => (
            <div key={index} className="bg-white border-2 border-gray-100 rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-6 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${module.color} rounded-xl flex items-center justify-center text-white`}>
                  {module.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{module.name}</h3>
                  <p className="text-xl text-gray-600 mb-4">{module.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-gray-900">Key Features</h4>
                  <ul className="space-y-3">
                    {module.keyFeatures.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4 text-gray-900">Impact Metrics</h4>
                  <div className="space-y-4">
                    {module.metrics.map((metric, i) => (
                      <div key={i} className="bg-gray-50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                        <div className="text-sm text-gray-600">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ROI Calculator */}
      <div className="max-w-4xl mx-auto p-8 print:p-6 page-break-before">
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">ROI Calculator & Business Case</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-blue-500 mb-8"></div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Annual Impact Analysis</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold">Category</th>
                  <th className="text-center py-3 px-4 font-semibold">Volume</th>
                  <th className="text-center py-3 px-4 font-semibold">Per Unit Value</th>
                  <th className="text-right py-3 px-4 font-semibold">Total Annual Impact</th>
                </tr>
              </thead>
              <tbody>
                {roiCalculator.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-4 px-4 font-medium">{item.category}</td>
                    <td className="py-4 px-4 text-center">{item.engineers || item.managers || item.clients || item.tickets}</td>
                    <td className="py-4 px-4 text-center">{item.savings || item.revenue || item.value}</td>
                    <td className="py-4 px-4 text-right font-bold text-green-600">{item.total}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-gray-900 text-white">
                  <td className="py-4 px-4 font-bold">Total Annual Value</td>
                  <td className="py-4 px-4"></td>
                  <td className="py-4 px-4"></td>
                  <td className="py-4 px-4 text-right text-2xl font-bold">$625K+</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-4 text-gray-900">Platform Investment</h4>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Engineer Licenses (10 × $55)</span>
                <span className="font-semibold">$550/month</span>
              </div>
              <div className="flex justify-between">
                <span>Manager Licenses (3 × $99)</span>
                <span className="font-semibold">$297/month</span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span className="font-bold">Total Monthly Cost</span>
                <span className="font-bold">$847/month</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Annual Investment</span>
                <span className="font-bold text-lg">$10,164</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl p-6">
            <h4 className="text-xl font-bold mb-4">Return on Investment</h4>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Annual Value Generated</span>
                <span className="font-semibold">$625,000</span>
              </div>
              <div className="flex justify-between">
                <span>Annual Platform Cost</span>
                <span className="font-semibold">$10,164</span>
              </div>
              <div className="flex justify-between border-t border-white/30 pt-2">
                <span className="font-bold">Net Annual Benefit</span>
                <span className="font-bold">$614,836</span>
              </div>
              <div className="text-center mt-4 p-4 bg-white/20 rounded-lg">
                <div className="text-3xl font-bold">6,148% ROI</div>
                <div className="text-sm opacity-90">Payback in &lt; 1 month</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Implementation Roadmap */}
      <div className="max-w-4xl mx-auto p-8 print:p-6 page-break-before">
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Implementation Roadmap</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-blue-500 mb-8"></div>
        </div>

        <div className="space-y-6">
          {implementationPhases.map((phase, index) => (
            <div key={index} className="bg-white border-2 border-gray-100 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{phase.phase}: {phase.title}</h3>
                  <p className="text-gray-600">{phase.timeline}</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {phase.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your MSP?</h3>
          <p className="text-xl mb-6">Join thousands of MSPs who are already saving time and generating new revenue with AI</p>
          <div className="flex justify-center items-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold">8 weeks</div>
              <div className="text-sm opacity-90">Full deployment</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">30 days</div>
              <div className="text-sm opacity-90">ROI realization</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm opacity-90">Support included</div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact & Next Steps */}
      <div className="max-w-4xl mx-auto p-8 print:p-6 page-break-before">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Next Steps</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border-2 border-green-100">
            <h3 className="text-2xl font-bold mb-4 text-green-800">Schedule Your Demo</h3>
            <p className="text-green-700 mb-6">
              See the platform in action with a personalized demo tailored to your MSP's specific needs and challenges.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-green-800">Live platform walkthrough</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-green-800">Custom ROI calculation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-green-800">Implementation planning</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border-2 border-blue-100">
            <h3 className="text-2xl font-bold mb-4 text-blue-800">Early Access Program</h3>
            <p className="text-blue-700 mb-6">
              Join our early access program and get exclusive benefits, including discounted pricing and priority support.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-blue-600" />
                <span className="text-blue-800">50% off first year pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-blue-600" />
                <span className="text-blue-800">Priority feature requests</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-blue-600" />
                <span className="text-blue-800">Dedicated success manager</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 text-white rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold mb-6">Contact Information</h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <Mail className="w-8 h-8 mx-auto mb-3 text-green-400" />
              <div className="font-semibold">Email</div>
              <div className="text-gray-300">matt@xop.ai</div>
            </div>
            <div>
              <Phone className="w-8 h-8 mx-auto mb-3 text-blue-400" />
              <div className="font-semibold">Phone</div>
              <div className="text-gray-300">555-XOP-DEMO</div>
            </div>
            <div>
              <Building className="w-8 h-8 mx-auto mb-3 text-purple-400" />
              <div className="font-semibold">Schedule Demo</div>
              <div className="text-gray-300">xop.im/partner</div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6">
            <p className="text-lg text-gray-300 mb-2">
              Ready to join the AI revolution in MSP operations?
            </p>
            <p className="text-2xl font-bold">
              Let's transform your business together.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 p-8 text-center text-gray-600 mt-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="text-xl font-bold text-gray-900">xop.ai</div>
            <div className="text-gray-400">×</div>
            <div className="text-xl font-bold text-blue-600">Rezolve.ai</div>
          </div>
          <p>© 2024 XOP.ai - Transforming MSP Operations with Enterprise AI Solutions</p>
          <p className="text-sm mt-2">SOC2 Type 2 • ISO 27001 • HIPAA Compliant • GDPR Ready</p>
        </div>
      </footer>
    </div>
  )
}