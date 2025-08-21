'use client'

import { useEffect } from 'react'
import Image from 'next/image'

export default function SolutionsCatalogPDF() {
  useEffect(() => {
    setTimeout(() => {
      window.print()
    }, 1000)
  }, [])

  return (
    <div className="bg-white text-black min-h-screen print:min-h-0">
      {/* Page 1 - Cover Page */}
      <div className="page-break-after print:h-screen flex flex-col justify-center items-center p-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logos */}
          <div className="flex items-center justify-center gap-8 mb-12">
            <Image 
              src="/xop-logo.png" 
              alt="XOP.ai Logo" 
              width={120} 
              height={60}
              className="h-16 w-auto"
            />
            <div className="w-px h-16 bg-gray-300"></div>
            <Image 
              src="/rezolve-logo.png" 
              alt="Rezolve.ai Logo" 
              width={120} 
              height={60}
              className="h-16 w-auto"
            />
          </div>

          {/* Title */}
          <h1 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Complete MSP AI Platform
          </h1>
          <h2 className="text-3xl font-semibold text-blue-600 mb-8">
            Solutions & Applications Catalog
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            Comprehensive overview of all AI solutions and applications designed to transform 
            MSP operations and create new revenue opportunities
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">15</div>
              <div className="text-gray-600">AI Solutions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">5</div>
              <div className="text-gray-600">Applications</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-gray-600">White-Labeled</div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-50 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Partnership Contact</h3>
            <div className="text-left space-y-2">
              <p><strong>Matt Ruck</strong></p>
              <p>Director of MSP Solutions</p>
              <p>📧 matt.ruck@rezolve.ai</p>
              <p>📞 202-525-8159</p>
              <p>🌐 Submit partnership request: <span className="text-blue-600">https://xop.ai/partner</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Page 2 - Applications Overview */}
      <div className="page-break-after print:h-screen p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Core Applications</h1>
        
        <div className="grid grid-cols-1 gap-6 max-w-6xl mx-auto">
          {/* Engineer App v4 */}
          <div className="border-2 border-green-500 rounded-lg p-6 bg-green-50">
            <h2 className="text-2xl font-bold text-green-700 mb-3">Engineer App v4</h2>
            <p className="text-gray-700 mb-4">
              Complete AI-Powered Engineering Assistant with Integrated Voice, Email, and Search Capabilities
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Key Features:</h3>
                <ul className="text-sm space-y-1">
                  <li>• AI-Powered Enterprise Search</li>
                  <li>• Voice Agent Integration</li>
                  <li>• Email Agent Assistance</li>
                  <li>• Teams Chatbot Integration</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">ROI Metrics:</h3>
                <ul className="text-sm space-y-1">
                  <li>• 45% time savings per ticket</li>
                  <li>• 2.5hrs daily savings per engineer</li>
                  <li>• $18K annual savings per engineer</li>
                  <li>• 30%+ ticket deflection</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Manager App */}
          <div className="border-2 border-blue-500 rounded-lg p-6 bg-blue-50">
            <h2 className="text-2xl font-bold text-blue-700 mb-3">Manager App</h2>
            <p className="text-gray-700 mb-4">
              AI-driven insights for MSP management with comprehensive analytics and workforce optimization
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Key Features:</h3>
                <ul className="text-sm space-y-1">
                  <li>• Real-time performance analytics</li>
                  <li>• Resource allocation optimization</li>
                  <li>• Predictive maintenance insights</li>
                  <li>• Client satisfaction tracking</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Benefits:</h3>
                <ul className="text-sm space-y-1">
                  <li>• 25% improvement in resource utilization</li>
                  <li>• 40% reduction in escalations</li>
                  <li>• Enhanced client satisfaction</li>
                  <li>• Data-driven decision making</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Enterprise Search */}
          <div className="border-2 border-purple-500 rounded-lg p-6 bg-purple-50">
            <h2 className="text-2xl font-bold text-purple-700 mb-3">Enterprise Search Solutions</h2>
            <p className="text-gray-700 mb-4">
              Unified AI search across all knowledge repositories with specialized versions for MSPs and end-users
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">MSP Version:</h3>
                <ul className="text-sm space-y-1">
                  <li>• ConnectWise Manage integration</li>
                  <li>• IT Glue documentation access</li>
                  <li>• SharePoint & file search</li>
                  <li>• Vendor portal integration</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">End-User Version:</h3>
                <ul className="text-sm space-y-1">
                  <li>• SharePoint integration</li>
                  <li>• Website crawling</li>
                  <li>• Document upload capability</li>
                  <li>• White-labeled deployment</li>
                </ul>
              </div>
            </div>
          </div>

          {/* MSP-Branded Client Chatbot */}
          <div className="border-2 border-orange-500 rounded-lg p-6 bg-orange-50">
            <h2 className="text-2xl font-bold text-orange-700 mb-3">MSP-Branded Client Chatbot</h2>
            <p className="text-gray-700 mb-4">
              White-labeled Teams chatbot that deflects tickets and provides 24/7 client support
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Capabilities:</h3>
                <ul className="text-sm space-y-1">
                  <li>• 30%+ ticket deflection</li>
                  <li>• 24/7 instant responses</li>
                  <li>• Seamless escalation to MSP</li>
                  <li>• Client-specific knowledge training</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Revenue Impact:</h3>
                <ul className="text-sm space-y-1">
                  <li>• Monthly recurring revenue stream</li>
                  <li>• Reduced support overhead</li>
                  <li>• Improved client satisfaction</li>
                  <li>• Scalable deployment model</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Voice AI */}
          <div className="border-2 border-teal-500 rounded-lg p-6 bg-teal-50">
            <h2 className="text-2xl font-bold text-teal-700 mb-3">Voice AI Solutions</h2>
            <p className="text-gray-700 mb-4">
              AI-powered voice agents for call handling, documentation, and customer service automation
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Features:</h3>
                <ul className="text-sm space-y-1">
                  <li>• Auto-document phone calls</li>
                  <li>• Voice-to-ticket conversion</li>
                  <li>• Call summary generation</li>
                  <li>• Multi-language support</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Integration:</h3>
                <ul className="text-sm space-y-1">
                  <li>• ConnectWise integration</li>
                  <li>• Real-time transcription</li>
                  <li>• Automated workflow triggers</li>
                  <li>• Quality assurance monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page 3 - Complete Solutions Overview */}
      <div className="page-break-after print:h-screen p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Complete Solutions Portfolio</h1>
        
        <div className="grid grid-cols-2 gap-4 max-w-6xl mx-auto text-sm">
          {/* Column 1 */}
          <div className="space-y-4">
            <div className="border rounded p-3 bg-gray-50">
              <h3 className="font-bold text-blue-700">ConnectWise Integration Suite</h3>
              <p>Deep API integration with cloud and on-premises environments for seamless workflow automation</p>
            </div>
            
            <div className="border rounded p-3 bg-gray-50">
              <h3 className="font-bold text-green-700">Teams Chatbot Platform</h3>
              <p>MSP-branded chatbots for client support with bidirectional ConnectWise integration</p>
            </div>
            
            <div className="border rounded p-3 bg-gray-50">
              <h3 className="font-bold text-purple-700">Email Agent Processing</h3>
              <p>AI-powered email categorization, response drafting, and priority detection systems</p>
            </div>
            
            <div className="border rounded p-3 bg-gray-50">
              <h3 className="font-bold text-orange-700">Voice Agent Solutions</h3>
              <p>Phone call automation with transcription, documentation, and ticket creation</p>
            </div>
            
            <div className="border rounded p-3 bg-gray-50">
              <h3 className="font-bold text-teal-700">IT Glue Integration</h3>
              <p>Secure access to passwords, configurations, and documentation with AI-powered search</p>
            </div>
            
            <div className="border rounded p-3 bg-gray-50">
              <h3 className="font-bold text-pink-700">SharePoint Connectivity</h3>
              <p>Deep integration with SharePoint Online and on-premises for document search</p>
            </div>
            
            <div className="border rounded p-3 bg-gray-50">
              <h3 className="font-bold text-indigo-700">Website Crawling Engine</h3>
              <p>Index and search public and internal websites for comprehensive knowledge access</p>
            </div>
            
            <div className="border rounded p-3 bg-gray-50">
              <h3 className="font-bold text-red-700">Document Management</h3>
              <p>Upload, index, and search PDFs, Word docs, and other file formats</p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <div className="border rounded p-3 bg-gray-50">
              <h3 className="font-bold text-cyan-700">Sales Assistant AI</h3>
              <p>AI-powered lead qualification, proposal generation, and client communication automation</p>
            </div>
            
            <div className="border rounded p-3 bg-gray-50">
              <h3 className="font-bold text-amber-700">Marketing Automation</h3>
              <p>Content creation, campaign management, and lead nurturing with AI assistance</p>
            </div>
            
            <div className="border rounded p-3 bg-gray-50">
              <h3 className="font-bold text-lime-700">Security Operations Center</h3>
              <p>AI-enhanced threat detection, incident response, and security monitoring solutions</p>
            </div>
            
            <div className="border rounded p-3 bg-gray-50">
              <h3 className="font-bold text-emerald-700">Client Portal Integration</h3>
              <p>White-labeled client portals with AI-powered self-service and support capabilities</p>
            </div>
            
            <div className="border rounded p-3 bg-gray-50">
              <h3 className="font-bold text-violet-700">Predictive Analytics</h3>
              <p>Machine learning models for capacity planning, maintenance prediction, and optimization</p>
            </div>
            
            <div className="border rounded p-3 bg-gray-50">
              <h3 className="font-bold text-rose-700">Training & Onboarding</h3>
              <p>AI-powered training systems for new engineer onboarding and skill development</p>
            </div>
            
            <div className="border rounded p-3 bg-gray-50">
              <h3 className="font-bold text-slate-700">Quality Assurance</h3>
              <p>Automated ticket quality checking, resolution validation, and performance monitoring</p>
            </div>
          </div>
        </div>

        {/* Value Proposition Summary */}
        <div className="mt-8 bg-gradient-to-r from-blue-100 to-green-100 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-center mb-4">Complete Platform Value</h2>
          <div className="grid grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600">$55/month</div>
              <div className="text-sm text-gray-600">Per Engineer Complete Platform</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">45% Savings</div>
              <div className="text-sm text-gray-600">Time Per Ticket</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">30%+ Deflection</div>
              <div className="text-sm text-gray-600">Tickets Prevented</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600">$18K Annual</div>
              <div className="text-sm text-gray-600">Savings Per Engineer</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media print {
          .page-break-after {
            page-break-after: always;
          }
          
          body {
            -webkit-print-color-adjust: exact;
            color-adjust: exact;
          }
        }
      `}</style>
    </div>
  )
}