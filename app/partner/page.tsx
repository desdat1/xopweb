'use client'

import { useEffect } from 'react'

export default function PartnerRedirect() {
  useEffect(() => {
    // Redirect to the external partner link
    window.location.href = 'https://xop.im/partner'
  }, [])

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-400 mx-auto mb-4"></div>
        <p className="text-gray-300">Redirecting to partner portal...</p>
      </div>
    </div>
  )
}