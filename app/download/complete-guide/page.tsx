'use client'

import LeadCaptureForm from '@/app/components/LeadCaptureForm'

export default function CompleteGuideDownloadPage() {
  const handleFormSuccess = () => {
    // Redirect to the PDF page after successful form submission
    window.location.href = '/pdf/complete-platform-guide'
  }

  return (
    <LeadCaptureForm 
      onSuccess={handleFormSuccess}
      productTitle="Complete AI Platform Guide"
    />
  )
}