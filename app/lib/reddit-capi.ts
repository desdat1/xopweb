import { headers } from 'next/headers'
import crypto from 'crypto'

type RedditEventType = 'Lead' | 'SignUp' | 'ViewContent' | 'Purchase' | 'Search' | 'AddToCart' | 'PageVisit'

interface RedditConversionOptions {
  eventType: RedditEventType
  email?: string
  customEventName?: string
}

function hashEmail(email: string): string {
  return crypto.createHash('sha256').update(email.toLowerCase().trim()).digest('hex')
}

/**
 * Send a server-side conversion event to the Reddit Conversions API.
 * Fires asynchronously — does not block the response to the user.
 */
export async function trackRedditConversion({ eventType, email, customEventName }: RedditConversionOptions): Promise<void> {
  const pixelId = process.env.NEXT_PUBLIC_REDDIT_PIXEL_ID
  const token = process.env.REDDIT_CAPI_TOKEN

  if (!pixelId || !token) {
    console.log('Reddit CAPI: skipping — missing NEXT_PUBLIC_REDDIT_PIXEL_ID or REDDIT_CAPI_TOKEN')
    return
  }

  try {
    const headersList = await headers()
    const ip = headersList.get('x-forwarded-for')?.split(',')[0]?.trim() || ''
    const userAgent = headersList.get('user-agent') || ''

    const event: Record<string, unknown> = {
      event_at: new Date().toISOString(),
      event_type: {
        tracking_type: eventType,
        ...(customEventName && { custom_event_name: customEventName }),
      },
      user: {
        ...(ip && { ip_address: ip }),
        ...(userAgent && { user_agent: userAgent }),
        ...(email && { email: hashEmail(email) }),
      },
    }

    const response = await fetch(
      `https://ads-api.reddit.com/api/v2.0/conversions/events/${pixelId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ events: [event] }),
      }
    )

    if (!response.ok) {
      const text = await response.text()
      console.error('Reddit CAPI error:', response.status, text)
    } else {
      console.log(`Reddit CAPI: ${eventType} event sent successfully`)
    }
  } catch (error) {
    // Never let tracking failures affect the user-facing response
    console.error('Reddit CAPI exception:', error)
  }
}
