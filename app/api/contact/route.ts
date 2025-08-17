import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, companyName, email, message } = body

    // Validate required fields
    if (!firstName || !lastName || !companyName || !email || !message) {
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
      from: 'xop.ai Contact Form <noreply@xop.ai>',
      to: ['matt@xop.ai'],
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
          <style>
            body { margin: 0; padding: 0; background-color: #000000; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
            .email-container { max-width: 600px; margin: 0 auto; background-color: #111111; }
            .header { background: linear-gradient(135deg, #7c3aed 0%, #ec4899 100%); padding: 30px; text-align: center; }
            .header h1 { color: #ffffff; font-size: 24px; margin: 0; font-weight: 700; }
            .content { padding: 30px; color: #e5e7eb; }
            .content p { font-size: 16px; line-height: 1.6; margin: 0 0 15px 0; }
            .contact-details { border: 2px solid #10b981; padding: 20px; border-radius: 8px; margin: 20px 0; }
            .contact-details h3 { color: #10b981; font-size: 18px; margin: 0 0 15px 0; }
            .contact-details ul { list-style: none; padding: 0; margin: 0; }
            .contact-details li { padding: 8px 0; font-size: 15px; color: #d1d5db; border-bottom: 1px solid #374151; }
            .contact-details li:last-child { border-bottom: none; }
            .contact-details li strong { color: #ffffff; }
            .message-section { border: 2px solid #7c3aed; border-left: 4px solid #7c3aed; padding: 20px; margin: 20px 0; border-radius: 8px; }
            .message-section h3 { color: #7c3aed; font-size: 18px; margin: 0 0 15px 0; }
            .footer { background-color: #030712; padding: 20px; text-align: center; border-top: 1px solid #374151; }
            .footer p { color: #9ca3af; font-size: 14px; margin: 0; }
          </style>
        </head>
        <body>
          <div class="email-container">
            <div class="header">
              <h1>📧 New Contact Form Submission</h1>
            </div>
            
            <div class="content">
              <p>You have received a new contact form submission from your website.</p>
              
              <div class="contact-details">
                <h3>👤 Contact Information</h3>
                <ul>
                  <li><strong>Name:</strong> ${firstName} ${lastName}</li>
                  <li><strong>Company:</strong> ${companyName}</li>
                  <li><strong>Email:</strong> <a href="mailto:${email}" style="color: #7c3aed; text-decoration: none;">${email}</a></li>
                </ul>
              </div>
              
              <div class="message-section">
                <h3>💬 Message</h3>
                <p style="color: #d1d5db; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>
              
              <p style="margin-top: 30px; color: #10b981;">
                <strong>Next Steps:</strong> Reply directly to this email or call them to follow up on their inquiry.
              </p>
            </div>
            
            <div class="footer">
              <p>© 2024 xop.ai Contact Form Notification</p>
            </div>
          </div>
        </body>
        </html>
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
    console.log('Contact form email sent successfully:', {
      firstName,
      lastName,
      companyName,
      email,
      emailId: data?.id,
      timestamp: new Date().toISOString()
    })

    return NextResponse.json(
      { 
        success: true,
        message: 'Contact form submitted successfully'
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}