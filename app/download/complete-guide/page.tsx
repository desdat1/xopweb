'use client'

import { useState } from 'react'
import LeadCaptureForm from '@/app/components/LeadCaptureForm'

export default function CompleteGuideDownloadPage() {
  const [showPDF, setShowPDF] = useState(false)

  const handleFormSuccess = () => {
    setShowPDF(true)
    // Scroll to top to show PDF
    window.scrollTo(0, 0)
  }

  if (showPDF) {
    // Show the PDF after form submission
    return (
      <div className="min-h-screen bg-white">
        <div className="bg-black text-white p-4 text-center">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <div className="text-lg font-semibold">Complete AI Platform Guide - Thank You!</div>
            <button
              onClick={() => window.print()}
              className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Print/Save PDF
            </button>
          </div>
        </div>
        
        <iframe
          src="/pdf/complete-platform-guide"
          className="w-full"
          style={{ height: 'calc(100vh - 80px)' }}
          title="Complete AI Platform Guide"
        />
      </div>
    )
  }

  return (
    <LeadCaptureForm 
      onSuccess={handleFormSuccess}
      productTitle="Complete AI Platform Guide"
    />
  )
}