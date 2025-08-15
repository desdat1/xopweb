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
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
          <div style="background: linear-gradient(135deg, #10B981, #059669); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Thank you for your interest in AI for MSPs!</h1>
          </div>
          
          <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e5e7eb;">
            <p style="font-size: 18px; margin-bottom: 20px;">Hi ${firstName},</p>
            
            <p style="margin-bottom: 20px;">Thank you for downloading our AI Implementation Guide for MSPs. This comprehensive resource will help you successfully build a revenue-generating AI practice in your MSP operations.</p>
            
            <div style="background: #10B981; padding: 20px; border-radius: 8px; text-align: center; margin: 30px 0;">
              <p style="color: white; margin: 0 0 15px 0; font-weight: bold; font-size: 18px;">Download Your Guide</p>
              <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://xopweb.vercel.app'}/Building-a-Revenue-Generating-AI-Practice-for-MSPs-v4.pdf" 
                 style="background: white; color: #10B981; padding: 12px 30px; border-radius: 6px; text-decoration: none; font-weight: bold; display: inline-block;">
                Building a Revenue-Generating AI Practice for MSPs
              </a>
            </div>
            
            <h2 style="color: #10B981; margin-top: 30px;">What's Next?</h2>
            <ul style="margin-bottom: 25px; line-height: 1.6;">
              <li>Review the implementation strategies in the guide</li>
              <li>Identify which AI solutions align with your business goals</li>
              <li>Schedule a consultation to discuss your specific needs</li>
            </ul>
            
            <p style="margin-bottom: 20px;">If you have any questions or would like to discuss how xop.ai can help transform your MSP with AI, don't hesitate to reach out.</p>
            
            <p style="margin-bottom: 5px;"><strong>Best regards,</strong></p>
            <p style="margin-bottom: 30px;">The xop.ai Team</p>
            
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
            <div style="background: #f3f4f6; padding: 15px; border-radius: 6px; font-size: 12px; color: #6b7280;">
              <p style="margin: 0 0 10px 0;"><strong>Lead Details:</strong></p>
              <ul style="margin: 0; padding-left: 15px;">
                <li>Name: ${firstName} ${lastName}</li>
                <li>Email: ${email}</li>
                <li>Company: ${company}</li>
                <li>Role: ${role}</li>
                <li>Company Size: ${msps}</li>
              </ul>
            </div>
          </div>
        </div>
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