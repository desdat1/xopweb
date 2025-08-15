import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, company, role, webinar, interest, revenueGoal } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !company || !role || !webinar) {
      return NextResponse.json(
        { error: 'All required fields must be filled' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Determine webinar link based on webinar name
    let webinarLink = ''
    let webinarTitle = ''
    
    if (webinar.includes('Productivity')) {
      webinarLink = 'https://youtu.be/HRhcN9MLLsY'
      webinarTitle = 'Monetize, Boost your MSP Business Productivity with GenAI'
    } else if (webinar.includes('Revenue')) {
      webinarLink = 'https://youtu.be/Jn0hEY9qMOI'
      webinarTitle = 'MSPs & GenAI - Build a Revenue Generating Practice'
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'xop.ai <noreply@xop.ai>',
      to: [email],
      bcc: ['matt@xop.ai'],
      subject: `Access Your Webinar: ${webinarTitle}`,
      html: `
        <p>Hi ${firstName},</p>
        
        <p>Thank you for registering to access our webinar: <strong>${webinarTitle}</strong></p>
        
        <p><strong>🎥 Watch the Webinar:</strong><br>
        <a href="${webinarLink}">Watch Now on YouTube</a></p>
        
        <p><strong>What's Next?</strong></p>
        <ul>
          <li>Watch the full presentation at your convenience</li>
          <li>Implement the strategies discussed in the webinar</li>
          <li>Schedule a consultation to discuss your specific needs</li>
        </ul>
        
        <p>If you have any questions or would like to discuss how xop.ai can help transform your MSP with AI, don't hesitate to reach out.</p>
        
        <p>Best regards,<br>
        The xop.ai Team</p>
        
        <hr>
        
        <p><small>Webinar Registration Details:</small></p>
        <ul>
          <li>Name: ${firstName} ${lastName}</li>
          <li>Email: ${email}</li>
          <li>Company: ${company}</li>
          <li>Role: ${role}</li>
          <li>Webinar: ${webinarTitle}</li>
          ${interest ? `<li>Interest: ${interest}</li>` : ''}
          ${revenueGoal ? `<li>Revenue Goal: ${revenueGoal}</li>` : ''}
        </ul>
      `
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    // Log successful request
    console.log('Webinar email sent successfully:', {
      firstName,
      lastName,
      email,
      company,
      role,
      webinar: webinarTitle,
      webinarLink,
      interest,
      revenueGoal,
      emailId: data?.id,
      timestamp: new Date().toISOString()
    })

    return NextResponse.json(
      { 
        success: true,
        message: 'Webinar access granted successfully',
        webinarLink
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Webinar API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}