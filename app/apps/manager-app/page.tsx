'use client'

import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import { useState } from 'react'
import Link from 'next/link'
import { 
  ChevronRight, BarChart3, Users, AlertCircle, TrendingUp, Clock, Shield, 
  Target, Zap, Brain, CheckCircle, Award, MessageCircle, Settings,
  UserCheck, TrendingDown, AlertTriangle, Star, Calendar, DollarSign,
  Mail, Search, FileText, Download
} from 'lucide-react'

export default function ManagerAppPage() {
  const [activeModule, setActiveModule] = useState('assignment')

  const modules = [
    {
      id: 'assignment',
      title: 'AI Ticket Assignment',
      icon: <Target className="w-8 h-8" />,
      color: 'from-blue-600 to-cyan-500',
      description: 'Intelligent ticket routing based on skills and workload'
    },
    {
      id: 'escalations',
      title: 'Escalations Board',
      icon: <AlertTriangle className="w-8 h-8" />,
      color: 'from-red-600 to-orange-500',
      description: 'Human and AI-generated escalation tracking'
    },
    {
      id: 'client-health',
      title: 'Client Health',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-green-600 to-emerald-500',
      description: 'Satisfaction and profitability monitoring'
    },
    {
      id: 'team-performance',
      title: 'Team Performance',
      icon: <Award className="w-8 h-8" />,
      color: 'from-purple-600 to-pink-500',
      description: 'Analytics with weekly coaching insights'
    }
  ]

  const moduleDetails = {
    assignment: {
      subtitle: 'Intelligent Resource Matching',
      features: [
        {
          icon: <Brain className="w-6 h-6 text-blue-400" />,
          title: 'Skills Analysis',
          description: 'AI analyzes ticket content from voice calls, email processing, and direct entry to match requirements with engineer skills, certifications, and historical success patterns.'
        },
        {
          icon: <BarChart3 className="w-6 h-6 text-blue-400" />,
          title: 'Workload Assessment',
          description: 'System evaluates current engineer workload to ensure optimal distribution and prevent burnout.'
        },
        {
          icon: <Target className="w-6 h-6 text-blue-400" />,
          title: 'Confidence Ranking',
          description: 'Provides 2-3 engineer suggestions with AI confidence levels for each assignment recommendation.'
        },
        {
          icon: <Zap className="w-6 h-6 text-blue-400" />,
          title: 'Automated Assignment',
          description: 'Once configured, automatically assigns tickets when AI confidence threshold is met (e.g., 90% certainty).'
        }
      ],
      benefits: [
        'Reduce ticket assignment time from minutes to seconds',
        'Improve first-time resolution rates by 40%',
        'Balance workload across engineering team',
        'Ensure tickets go to most qualified engineers'
      ],
      process: [
        'New ticket arrives in ConnectWise Manage',
        'AI analyzes ticket content and requirements',
        'System evaluates engineer skills and current workload',
        'Provides ranked assignment suggestions with confidence scores',
        'Manager approves or system auto-assigns based on threshold'
      ]
    },
    escalations: {
      subtitle: 'Proactive Issue Detection',
      features: [
        {
          icon: <Users className="w-6 h-6 text-red-400" />,
          title: 'Human Escalations',
          description: 'Track escalations from engineers via voice calls, Teams messages, or direct entry when they recognize they need assistance or are encountering difficulties.'
        },
        {
          icon: <Brain className="w-6 h-6 text-red-400" />,
          title: 'AI-Generated Alerts',
          description: 'AI analyzes voice call sentiment, email communication patterns, Enterprise Search queries, and progress indicators across all channels to identify at-risk tickets before they become critical.'
        },
        {
          icon: <MessageCircle className="w-6 h-6 text-red-400" />,
          title: 'Multi-Channel Communication Analysis',
          description: 'Monitors communication frequency and quality across voice calls, email responses, Teams interactions, and ticket updates to ensure comprehensive client engagement.'
        },
        {
          icon: <Clock className="w-6 h-6 text-red-400" />,
          title: 'End-User Impact',
          description: 'Assesses disruption to end user work day and prioritizes escalations based on business impact.'
        }
      ],
      benefits: [
        'Identify problem tickets before they become critical',
        'Reduce escalations by 30% through early intervention',
        'Improve client satisfaction scores',
        'Enable proactive management decisions'
      ],
      process: [
        'System continuously monitors all active tickets',
        'AI scores tickets based on multiple risk variables',
        'Escalations board highlights at-risk tickets',
        'Managers receive alerts for tickets needing attention',
        'Take immediate action to prevent client issues'
      ]
    },
    'client-health': {
      subtitle: 'Comprehensive Client Monitoring',
      features: [
        {
          icon: <Star className="w-6 h-6 text-green-400" />,
          title: 'Satisfaction Scoring',
          description: 'Numerical assessment of CSAT scores and post-ticket survey responses to gauge client happiness.'
        },
        {
          icon: <BarChart3 className="w-6 h-6 text-green-400" />,
          title: 'Resolution Tracking',
          description: 'Monitor number of tickets resolved and track resolution patterns to identify service trends.'
        },
        {
          icon: <AlertTriangle className="w-6 h-6 text-green-400" />,
          title: 'Escalation Analysis',
          description: 'Track escalation frequency as an indicator of potentially troublesome client relationships.'
        },
        {
          icon: <DollarSign className="w-6 h-6 text-green-400" />,
          title: 'Profitability Gauge',
          description: 'Compare labor hours expended against budgeted hours to determine client profitability (no complex financial metrics).'
        }
      ],
      benefits: [
        'Identify at-risk client relationships early',
        'Focus attention on most profitable clients',
        'Improve overall client satisfaction scores',
        'Reduce client churn through proactive intervention'
      ],
      process: [
        'System aggregates data from multiple touchpoints',
        'Calculates client health scores in real-time',
        'Identifies clients requiring immediate attention',
        'Provides actionable recommendations for improvement',
        'Tracks progress over time with trend analysis'
      ]
    },
    'team-performance': {
      subtitle: 'Engineer Development & Recognition',
      features: [
        {
          icon: <TrendingUp className="w-6 h-6 text-purple-400" />,
          title: 'Performance Metrics',
          description: 'Track work output, resolution speed, and quality metrics for each engineer on your team.'
        },
        {
          icon: <Star className="w-6 h-6 text-purple-400" />,
          title: 'CSAT Tracking',
          description: 'Monitor individual engineer satisfaction scores from client feedback and post-ticket surveys.'
        },
        {
          icon: <AlertCircle className="w-6 h-6 text-purple-400" />,
          title: 'Escalation Monitoring',
          description: 'Track escalation frequency per engineer to identify coaching opportunities and high performers.'
        },
        {
          icon: <Award className="w-6 h-6 text-purple-400" />,
          title: 'Weekly Insights',
          description: 'Rotating weekly/bi-weekly insights with recognition recommendations and coaching suggestions.'
        }
      ],
      benefits: [
        'Identify top performers for recognition',
        'Spot engineers needing additional coaching',
        'Improve overall team performance',
        'Make data-driven personnel decisions'
      ],
      process: [
        'System analyzes all engineer activities and outcomes',
        'Generates individual performance scorecards',
        'Identifies patterns in repeat service calls',
        'Provides weekly coaching and recognition insights',
        'Tracks team performance trends over time'
      ]
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="px-6 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-6">
            <BarChart3 className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-400">Manager App</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            Service Desk Management
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed">
            Unified AI Platform for Service Desk Management - Intelligence from Voice Calls, Email Processing, 
            Enterprise Search, and Teams Interactions Automatically Feed Manager Insights
          </p>
          <p className="text-gray-400 max-w-3xl mx-auto mb-8">
            Your engineers use Voice AI, Email Agents, Teams Chatbots, and Enterprise Search daily. 
            Manager App consolidates all this intelligence into actionable insights for ticket assignment, 
            escalation prevention, client health monitoring, and team performance optimization.
          </p>
          
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full">
              <Award className="w-4 h-4" />
              <span className="font-medium">Pre-Release Access</span>
            </div>
          </div>
          
          {/* Coming Soon Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-6 py-3 rounded-full font-semibold mb-8">
            <span className="text-xl">🚀</span>
            <span>Coming December 2025</span>
          </div>
          
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 rounded-full font-semibold hover:opacity-90 transform hover:scale-105 transition-all"
            >
              See Manager App Demo
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Four Modules Overview */}
      <section className="px-6 py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Four AI-Powered Management Modules</h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Leverages data from Voice AI calls, Email Agent processing, Enterprise Search queries, and Teams Chatbot interactions 
            to provide intelligent service desk management and team optimization
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((module, index) => (
              <div 
                key={module.id}
                className={`bg-gradient-to-br ${module.color} p-8 rounded-xl border border-gray-800 hover:border-gray-600 transition-all transform hover:-translate-y-1 cursor-pointer animate-fadeIn`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setActiveModule(module.id)}
              >
                <div className="text-white mb-4">{module.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{module.title}</h3>
                <p className="text-white/90 text-sm">{module.description}</p>
                <div className="mt-4 flex items-center text-white/80 text-sm">
                  <span>Learn more</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Module Selector */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Detailed Module Overview</h2>
          
          {/* Module Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {modules.map((module) => (
              <button
                key={module.id}
                onClick={() => setActiveModule(module.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                  activeModule === module.id
                    ? `bg-gradient-to-r ${module.color} text-white`
                    : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                }`}
              >
                {module.icon}
                <span className="font-medium">{module.title}</span>
              </button>
            ))}
          </div>

          {/* Active Module Details */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-2">
                {modules.find(m => m.id === activeModule)?.title}
              </h3>
              <p className="text-xl text-gray-300">
                {moduleDetails[activeModule as keyof typeof moduleDetails]?.subtitle}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Features */}
              <div>
                <h4 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <Settings className="w-6 h-6 text-blue-400" />
                  Key Features
                </h4>
                <div className="space-y-6">
                  {moduleDetails[activeModule as keyof typeof moduleDetails]?.features.map((feature, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 bg-gray-800 p-3 rounded-lg">
                        {feature.icon}
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2">{feature.title}</h5>
                        <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits & Process */}
              <div className="space-y-8">
                {/* Benefits */}
                <div>
                  <h4 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-green-400" />
                    Key Benefits
                  </h4>
                  <div className="space-y-3">
                    {moduleDetails[activeModule as keyof typeof moduleDetails]?.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Process */}
                <div>
                  <h4 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                    <Clock className="w-6 h-6 text-purple-400" />
                    How It Works
                  </h4>
                  <div className="space-y-4">
                    {moduleDetails[activeModule as keyof typeof moduleDetails]?.process.map((step, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                        <span className="text-gray-300">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Integration Section */}
      <section className="px-6 py-16 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Unified AI Intelligence Platform</h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Manager App consolidates intelligence from all AI touchpoints - Voice calls automatically transcribed, 
            emails processed by AI agents, Teams chatbot interactions, and Enterprise Search patterns - 
            all feeding into ConnectWise Manage for comprehensive management insights
          </p>
          
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-black/50 border border-gray-800 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Voice AI Integration</h3>
              <p className="text-gray-400 text-sm">
                Call transcriptions and sentiment analysis automatically feed escalation and performance tracking
              </p>
            </div>
            
            <div className="bg-black/50 border border-gray-800 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Email Agent Data</h3>
              <p className="text-gray-400 text-sm">
                Email processing patterns and resolution data enhance assignment algorithms and client health scoring
              </p>
            </div>
            
            <div className="bg-black/50 border border-gray-800 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Teams Chatbot Analytics</h3>
              <p className="text-gray-400 text-sm">
                End-user interaction patterns and deflection success rates inform team performance metrics
              </p>
            </div>
            
            <div className="bg-black/50 border border-gray-800 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Enterprise Search Insights</h3>
              <p className="text-gray-400 text-sm">
                Knowledge gap analysis from search patterns helps identify training needs and process improvements
              </p>
            </div>
          </div>
          
          <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6 text-center">
            <h3 className="text-xl font-semibold mb-3">Complete ConnectWise Integration</h3>
            <p className="text-gray-300">
              All AI-generated insights automatically sync with ConnectWise Manage - no workflow changes required. 
              Manager App works as an intelligent overlay that enhances your existing processes with predictive analytics.
            </p>
          </div>
        </div>
      </section>

      {/* AI Workflow Integration */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">How AI Intelligence Flows into Management Decisions</h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Every interaction your engineers have with AI tools automatically creates valuable management intelligence
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-3">Voice AI Calls</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Engineers use voice AI for call documentation → Sentiment analysis feeds escalation detection → 
                Call complexity patterns inform skills-based assignment
              </p>
            </div>
            
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-3">Email Agents</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                AI processes client emails → Response quality and speed metrics feed performance tracking → 
                Communication patterns influence client health scoring
              </p>
            </div>
            
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-3">Teams Chatbot</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                End users interact with Teams AI → Deflection patterns reduce ticket volume → 
                Unresolved queries highlight knowledge gaps for team training
              </p>
            </div>
            
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-3">Enterprise Search</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Engineers search knowledge base → Search patterns reveal documentation gaps → 
                Frequency of searches per ticket type informs skills matching
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-xl p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-3">The Result: Predictive Management</h3>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Instead of managing by looking backward at what happened, Manager App uses real-time AI intelligence 
                to predict and prevent problems before they impact your clients or team.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-2">Proactive Assignment</div>
                <p className="text-gray-400 text-sm">AI matches tickets to engineers before problems escalate</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-2">Early Escalation Detection</div>
                <p className="text-gray-400 text-sm">Identify at-risk tickets from communication patterns</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-2">Team Development</div>
                <p className="text-gray-400 text-sm">Data-driven coaching based on real interaction patterns</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PDF Download Section */}
      <section className="px-6 py-16 bg-gray-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Get the Complete Manager App Guide</h2>
          <p className="text-xl text-gray-300 mb-8">
            Download our comprehensive PDF overview with module details, AI integration, and pre-release pricing
          </p>
          
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-4">Manager App Product Guide</h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    <span>Four management modules detailed overview</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    <span>AI intelligence consolidation explained</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    <span>Pre-release pricing and early access details</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    <span>ConnectWise integration and implementation</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-black/50 rounded-xl p-6 mb-6">
                  <FileText className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                  <div className="text-lg font-semibold text-white mb-2">Professional PDF Guide</div>
                  <div className="text-sm text-gray-400">Perfect for stakeholder presentations</div>
                </div>
                
                <Link
                  href="/pdf/manager-app"
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all transform hover:scale-105"
                >
                  <Download className="w-5 h-5" />
                  View & Download PDF
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Transform Your Service Desk Operations</h2>
            <p className="text-xl text-gray-300 mb-8">
              By consolidating intelligence from Voice AI, Email Agents, Teams Chatbots, and Enterprise Search, 
              Manager App provides unprecedented visibility into service desk operations and team performance
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-black/30 rounded-lg p-6">
                <div className="text-3xl font-bold text-blue-400 mb-2">40%</div>
                <div className="text-sm text-gray-400">Faster Ticket Assignment</div>
              </div>
              <div className="bg-black/30 rounded-lg p-6">
                <div className="text-3xl font-bold text-green-400 mb-2">30%</div>
                <div className="text-sm text-gray-400">Reduction in Escalations</div>
              </div>
              <div className="bg-black/30 rounded-lg p-6">
                <div className="text-3xl font-bold text-purple-400 mb-2">25%</div>
                <div className="text-sm text-gray-400">Improvement in Client Satisfaction</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://xop.im/partner"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                Join the Waitlist
                <ChevronRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-blue-500/30 px-8 py-4 rounded-full font-semibold hover:bg-blue-500/10 transition-colors"
              >
                Schedule a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}