'use client'

import { useState } from 'react'
import { CheckCircle, Download, FileText, Users, Building, Phone, Mail } from 'lucide-react'

interface LeadCaptureFormProps {
  onSuccess: () => void
  productTitle?: string
}

export default function LeadCaptureForm({ onSuccess, productTitle = "Complete AI Platform Guide" }: LeadCaptureFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    jobTitle: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!formData.company.trim()) newErrors.company = 'Company name is required'
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    
    try {
      // Here you would normally send to your CRM/email service
      // For now, we'll simulate the API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Track the lead (could integrate with analytics)
      console.log('Lead captured:', formData)
      
      onSuccess()
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Value Proposition */}
          <div>
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full mb-6">
                <FileText className="w-4 h-4 text-green-400" />
                <span className="text-sm font-medium text-green-400">Exclusive Content</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">
                {productTitle}
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Get instant access to our comprehensive guide covering the complete AI platform that's transforming MSP operations worldwide.
              </p>
            </div>

            <div className="space-y-6 mb-8">
              <h3 className="text-2xl font-semibold mb-4">What's Inside:</h3>
              
              <div className="grid gap-4">
                <div className="flex items-start gap-3 p-4 bg-gray-900/50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Complete Platform Overview</div>
                    <div className="text-gray-400 text-sm">Engineer App v4, Manager App, Voice AI, Email Agents, Teams Chatbots</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-gray-900/50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">ROI Calculator & Business Case</div>
                    <div className="text-gray-400 text-sm">Detailed cost savings, time efficiency, and revenue generation metrics</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-gray-900/50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Implementation Roadmap</div>
                    <div className="text-gray-400 text-sm">Step-by-step deployment guide and timeline</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-gray-900/50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Exclusive Pricing & Early Access</div>
                    <div className="text-gray-400 text-sm">Complete pricing breakdown and pre-release access opportunities</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-500/30 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Join Thousands of MSPs</div>
                  <div className="text-gray-400 text-sm">Who are already transforming their operations with AI</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Get Your Free Copy</h2>
              <p className="text-gray-400">Download starts immediately after submission</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-11 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                    placeholder="Enter your full name"
                  />
                </div>
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Business Email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-11 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                    placeholder="Enter your business email"
                  />
                </div>
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Company Name *
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-11 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                    placeholder="Enter your company name"
                  />
                </div>
                {errors.company && <p className="text-red-400 text-sm mt-1">{errors.company}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-11 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                    placeholder="Enter your phone number"
                  />
                </div>
                {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Job Title
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-11 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                    placeholder="e.g., IT Director, MSP Owner"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5" />
                    Get Free Download
                  </>
                )}
              </button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}