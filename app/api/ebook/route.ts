import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, company, role, msps } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !company || !role || !msps) {
      return NextResponse.json(
        { error: 'All fields are required' },
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

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'xop.ai <noreply@xop.ai>',
      to: [email],
      bcc: ['matt@xop.ai'],
      subject: 'Your AI Implementation Guide for MSPs',
      html: `
        <p>Hi ${firstName},</p>
        
        <p>Thank you for downloading our AI Implementation Guide for MSPs.</p>
        
        <p><strong>Download Your Guide:</strong><br>
        <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://xopweb.vercel.app'}/Building-a-Revenue-Generating-AI-Practice-for-MSPs-v4.pdf">Building a Revenue-Generating AI Practice for MSPs</a></p>
        
        <p><strong>What's Next?</strong></p>
        <ul>
          <li>Review the implementation strategies in the guide</li>
          <li>Identify which AI solutions align with your business goals</li>
          <li>Schedule a consultation to discuss your specific needs</li>
        </ul>
        
        <p>If you have any questions or would like to discuss how xop.ai can help transform your MSP with AI, don't hesitate to reach out.</p>
        
        <p>Best regards,<br>
        The xop.ai Team</p>
        
        <hr>
        
        <p><small>Lead Details:</small></p>
        <ul>
          <li>Name: ${firstName} ${lastName}</li>
          <li>Email: ${email}</li>
          <li>Company: ${company}</li>
          <li>Role: ${role}</li>
          <li>Company Size: ${msps}</li>
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
    console.log('E-book email sent successfully:', {
      firstName,
      lastName,
      email,
      company,
      role,
      msps,
      emailId: data?.id,
      timestamp: new Date().toISOString()
    })

    return NextResponse.json(
      { 
        success: true,
        message: 'E-book request processed successfully'
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('E-book API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}