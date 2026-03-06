'use client'

import Script from 'next/script'

interface RedditPixelProps {
  pixelId: string
}

export default function RedditPixel({ pixelId }: RedditPixelProps) {
  return (
    <Script id="reddit-pixel" strategy="afterInteractive">
      {`
        !function(w,d){if(!w.rdt){var p=w.rdt=function(){p.sendEvent?p.sendEvent.apply(p,arguments):p.callQueue.push(arguments)};p.callQueue=[];var t=d.createElement("script");t.src="https://www.redditstatic.com/ads/pixel.js",t.async=!0;var s=d.getElementsByTagName("script")[0];s.parentNode.insertBefore(t,s)}}(window,document);
        rdt('init','${pixelId}');
        rdt('track', 'PageVisit');
      `}
    </Script>
  )
}
