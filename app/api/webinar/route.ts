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
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
          <div style="background: linear-gradient(135deg, #3B82F6, #1D4ED8); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Thank you for your interest in our webinar!</h1>
          </div>
          
          <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e5e7eb;">
            <p style="font-size: 18px; margin-bottom: 20px;">Hi ${firstName},</p>
            
            <p style="margin-bottom: 20px;">Thank you for registering to access our webinar: <strong>${webinarTitle}</strong></p>
            
            <div style="background: #DC2626; padding: 20px; border-radius: 8px; text-align: center; margin: 30px 0;">
              <p style="color: white; margin: 0 0 15px 0; font-weight: bold; font-size: 18px;">🎥 Watch the Webinar</p>
              <a href="${webinarLink}" 
                 style="background: white; color: #DC2626; padding: 12px 30px; border-radius: 6px; text-decoration: none; font-weight: bold; display: inline-block;">
                Watch Now on YouTube
              </a>
            </div>
            
            <h2 style="color: #3B82F6; margin-top: 30px;">What's Next?</h2>
            <ul style="margin-bottom: 25px; line-height: 1.6;">
              <li>Watch the full presentation at your convenience</li>
              <li>Implement the strategies discussed in the webinar</li>
              <li>Schedule a consultation to discuss your specific needs</li>
            </ul>
            
            <p style="margin-bottom: 20px;">If you have any questions or would like to discuss how xop.ai can help transform your MSP with AI, don't hesitate to reach out.</p>
            
            <p style="margin-bottom: 5px;"><strong>Best regards,</strong></p>
            <p style="margin-bottom: 30px;">The xop.ai Team</p>
            
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
            <div style="background: #f3f4f6; padding: 15px; border-radius: 6px; font-size: 12px; color: #6b7280;">
              <p style="margin: 0 0 10px 0;"><strong>Webinar Registration Details:</strong></p>
              <ul style="margin: 0; padding-left: 15px;">
                <li>Name: ${firstName} ${lastName}</li>
                <li>Email: ${email}</li>
                <li>Company: ${company}</li>
                <li>Role: ${role}</li>
                <li>Webinar: ${webinarTitle}</li>
                ${interest ? `<li>Interest: ${interest}</li>` : ''}
                ${revenueGoal ? `<li>Revenue Goal: ${revenueGoal}</li>` : ''}
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