'use client'

import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import { useState } from 'react'
import {
  Rocket, FileText, Shield, AlertTriangle, Bot,
  CheckCircle, Clock, Eye, Settings, Zap,
  TrendingUp, Users, Building2, Star
} from 'lucide-react'

// FileText kept in imports for CTA section

export default function RoadmapPage() {
  const [activeArea, setActiveArea] = useState('noc-soc')

  const roadmapAreas = [
    {
      id: 'noc-soc',
      title: 'NOC/SOC Alert Analysis',
      icon: <AlertTriangle className="w-8 h-8" />,
      color: 'from-red-600 to-orange-500',
      description: 'AI-powered alert correlation and automated incident response'
    },
    {
      id: 'agentic',
      title: 'Agentic Automations',
      icon: <Bot className="w-8 h-8" />,
      color: 'from-purple-600 to-pink-500',
      description: 'Autonomous AI agents that execute complex multi-step workflows'
    }
  ]

  const getAreaDetails = (areaId: string) => {
    switch (areaId) {
      case 'noc-soc':
        return {
          vision: "Revolutionize alert management with intelligent correlation and automated response",
          capabilities: [
            "AI-powered alert correlation across multiple monitoring systems",
            "Predictive incident analysis to prevent outages",
            "Automated runbook execution for common scenarios",
            "Intelligent escalation based on business impact",
            "Cross-client pattern recognition for proactive monitoring"
          ],
          benefits: [
            "Reduce alert fatigue by 70% through intelligent filtering",
            "Decrease mean time to resolution (MTTR) significantly",
            "Prevent incidents through predictive analysis",
            "Scale NOC/SOC operations without proportional staff increases"
          ]
        }
      case 'agentic':
        return {
          vision: "Deploy autonomous AI agents that execute complex workflows end-to-end",
          capabilities: [
            "Multi-step workflow automation across different systems",
            "Dynamic decision-making based on real-time conditions",
            "Self-healing system configurations and optimizations",
            "Autonomous client onboarding and provisioning",
            "Intelligent resource allocation and capacity planning"
          ],
          benefits: [
            "Eliminate manual intervention in routine processes",
            "Scale operations exponentially without linear cost increases",
            "Ensure consistent execution of complex procedures",
            "Free engineers to focus on strategic initiatives"
          ]
        }
      default:
        return { vision: '', capabilities: [], benefits: [] }
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 animate-pulse">
              <Rocket className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
              Future & Roadmap
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
              Building the next generation of AI-powered MSP operations
            </p>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              While we don't release specific roadmap details for competitive reasons, 
              we're actively investing in breakthrough capabilities based on MSP client feedback.
            </p>
            
            {/* Innovation Badge */}
            <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-400 px-6 py-3 rounded-full font-semibold">
              <Star className="w-5 h-5" />
              <span>Continuous Innovation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section className="px-6 py-16 bg-gray-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Client-Driven Innovation</h2>
          <p className="text-xl text-gray-300 mb-8">
            Every feature we build is driven by real MSP challenges and opportunities. 
            We partner closely with our clients to understand their evolving needs.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
              <Users className="w-8 h-8 text-blue-400 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-3">MSP Feedback</h3>
              <p className="text-gray-400 text-sm">Direct input from our MSP partners shapes our development priorities</p>
            </div>
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
              <TrendingUp className="w-8 h-8 text-green-400 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-3">Market Evolution</h3>
              <p className="text-gray-400 text-sm">Staying ahead of industry trends and emerging technologies</p>
            </div>
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
              <Building2 className="w-8 h-8 text-purple-400 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-3">Scalable Impact</h3>
              <p className="text-gray-400 text-sm">Solutions that deliver exponential value as MSPs grow</p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Areas */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Innovation Focus Areas</h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            We're making strategic investments in these key areas that will transform MSP operations
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {roadmapAreas.map((area, index) => (
              <div 
                key={area.id}
                className={`bg-gradient-to-br ${area.color} p-8 rounded-xl border border-gray-800 hover:border-gray-600 transition-all transform hover:-translate-y-1 cursor-pointer ${
                  activeArea === area.id ? 'ring-2 ring-white/30' : ''
                }`}
                onClick={() => setActiveArea(area.id)}
              >
                <div className="text-white mb-4">{area.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{area.title}</h3>
                <p className="text-white/90 text-sm mb-4">{area.description}</p>
                <div className="flex items-center text-white/80 text-sm">
                  <span>Explore vision</span>
                  <Eye className="w-4 h-4 ml-2" />
                </div>
              </div>
            ))}
          </div>

          {/* Detailed View */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-2">
                {roadmapAreas.find(area => area.id === activeArea)?.title}
              </h3>
              <p className="text-xl text-gray-300">
                {getAreaDetails(activeArea).vision}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Envisioned Capabilities */}
              <div>
                <h4 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <Settings className="w-6 h-6 text-blue-400" />
                  Envisioned Capabilities
                </h4>
                <div className="space-y-4">
                  {getAreaDetails(activeArea).capabilities.map((capability, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Potential Benefits */}
              <div>
                <h4 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <Zap className="w-6 h-6 text-green-400" />
                  Potential Benefits
                </h4>
                <div className="space-y-4">
                  {getAreaDetails(activeArea).benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Philosophy */}
      <section className="px-6 py-16 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Development Philosophy</h2>
            <p className="text-xl text-gray-300">
              We prioritize quality, security, and real-world impact over rushed timelines
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-8">
              <Clock className="w-8 h-8 text-orange-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Quality First</h3>
              <p className="text-gray-400 mb-4">
                Every feature undergoes rigorous testing with MSP partners before release. 
                We believe in delivering production-ready solutions, not beta experiments.
              </p>
              <div className="text-sm text-orange-400">
                "Better to ship it right than ship it fast"
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-700 rounded-xl p-8">
              <Shield className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Security by Design</h3>
              <p className="text-gray-400 mb-4">
                Every new capability is built with enterprise security, compliance, 
                and data protection as core requirements, not afterthoughts.
              </p>
              <div className="text-sm text-green-400">
                "Security and privacy are non-negotiable"
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Shape the Future</h2>
          <p className="text-xl text-gray-300 mb-8">
            Your feedback directly influences our roadmap. Join our MSP partner program 
            to help shape the next generation of AI-powered MSP solutions.
          </p>
          
          <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-2xl p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">100+</div>
                <div className="text-sm text-gray-400">MSP Partners</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-sm text-gray-400">Feedback Loop</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">Quarterly</div>
                <div className="text-sm text-gray-400">Innovation Reviews</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://xop.im/partner"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all transform hover:scale-105"
            >
              <Users className="w-5 h-5" />
              Join Partner Program
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-purple-500 text-purple-400 px-8 py-4 rounded-full font-semibold hover:bg-purple-500 hover:text-black transition-all"
            >
              <FileText className="w-5 h-5" />
              Share Feedback
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}