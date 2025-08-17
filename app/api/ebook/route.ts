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
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Your AI Implementation Guide for MSPs</title>
          <!--[if mso]>
          <noscript>
            <xml>
              <o:OfficeDocumentSettings>
                <o:PixelsPerInch>96</o:PixelsPerInch>
              </o:OfficeDocumentSettings>
            </xml>
          </noscript>
          <![endif]-->
          <style>
            body { margin: 0; padding: 0; background-color: #000000; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
            .email-container { max-width: 600px; margin: 0 auto; }
            .header { background: linear-gradient(135deg, #7c3aed 0%, #ec4899 100%); padding: 40px 30px; text-align: center; }
            .header h1 { color: #ffffff; font-size: 28px; margin: 0; font-weight: 700; }
            .content { padding: 40px 30px; color: #e5e7eb; }
            .content p { font-size: 16px; line-height: 1.6; margin: 0 0 20px 0; }
            .download-section { border: 2px solid #7c3aed; border-radius: 12px; padding: 30px; margin: 30px 0; text-align: center; }
            .download-button { display: inline-block; background: linear-gradient(135deg, #7c3aed 0%, #ec4899 100%); color: #ffffff; text-decoration: none; padding: 16px 32px; border-radius: 8px; font-weight: 600; font-size: 18px; margin: 15px 0; }
            .download-button:hover { opacity: 0.9; }
            .next-steps { border: 2px solid #10b981; border-left: 4px solid #10b981; padding: 25px; margin: 30px 0; border-radius: 8px; }
            .next-steps h3 { color: #10b981; font-size: 20px; margin: 0 0 15px 0; }
            .next-steps ul { margin: 0; padding-left: 20px; }
            .next-steps li { margin: 8px 0; font-size: 15px; line-height: 1.5; }
            .footer { padding: 30px; text-align: center; border-top: 2px solid #374151; }
            .footer p { color: #9ca3af; font-size: 14px; margin: 0; }
            .lead-details { border: 2px solid #6b7280; padding: 20px; border-radius: 8px; margin-top: 40px; }
            .lead-details h4 { color: #6b7280; font-size: 14px; margin: 0 0 15px 0; text-transform: uppercase; letter-spacing: 1px; }
            .lead-details ul { list-style: none; padding: 0; margin: 0; }
            .lead-details li { padding: 5px 0; font-size: 14px; color: #d1d5db; border-bottom: 1px solid #374151; }
            .lead-details li:last-child { border-bottom: none; }
            .signature { border: 2px solid #7c3aed; border-left: 4px solid #7c3aed; padding: 20px; margin: 0; border-radius: 8px; }
            .signature table { width: 100%; border-collapse: collapse; }
            .signature td { vertical-align: top; }
            .signature-logo { background: linear-gradient(135deg, #7c3aed 0%, #ec4899 100%); width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 24px; }
            .partnership-cta { border: 2px solid #10b981; border-radius: 12px; padding: 25px; margin: 30px 0; text-align: center; }
            .partnership-button { display: inline-block; background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: #ffffff; text-decoration: none; padding: 16px 32px; border-radius: 8px; font-weight: 600; font-size: 18px; }
            @media only screen and (max-width: 480px) {
              .header { padding: 30px 20px; }
              .header h1 { font-size: 24px; }
              .content { padding: 30px 20px; }
              .download-section { padding: 20px; margin: 20px 0; }
              .download-button { padding: 14px 24px; font-size: 16px; }
              .next-steps { padding: 20px; margin: 20px 0; }
              .partnership-cta { padding: 20px; margin: 20px 0; }
              .partnership-button { padding: 14px 24px; font-size: 16px; }
              .signature { padding: 15px; }
              .signature td { display: block; padding: 0; }
              .signature-logo { margin: 0 auto 15px auto; }
            }
          </style>
        </head>
        <body>
          <div class="email-container">
            <div class="header">
              <h1>🚀 Your AI Guide is Ready!</h1>
            </div>
            
            <div class="content">
              <p>Hi <strong>${firstName}</strong>,</p>
              
              <p>Thank you for downloading our <strong>AI Implementation Guide for MSPs</strong>. You're now equipped with the insights that hundreds of MSPs are using to transform their business with AI.</p>
              
              <div class="download-section">
                <h2 style="color: #ffffff; margin: 0 0 15px 0; font-size: 22px;">📖 Download Your Guide</h2>
                <p style="margin: 0 0 20px 0; color: #d1d5db;">Get instant access to your comprehensive AI implementation roadmap:</p>
                <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://xopweb.vercel.app'}/Building-a-Revenue-Generating-AI-Practice-for-MSPs-v4.pdf" class="download-button">
                  📥 Download PDF Guide
                </a>
              </div>
              
              <div class="next-steps">
                <h3>🎯 What's Next?</h3>
                <ul>
                  <li><strong>Review the implementation strategies</strong> in the guide to identify quick wins</li>
                  <li><strong>Identify which AI solutions</strong> align with your business goals and budget</li>
                  <li><strong>Schedule a consultation</strong> to discuss your specific MSP needs and get personalized recommendations</li>
                </ul>
              </div>
              
              <p>Our team has helped MSPs like yours achieve <strong>20-30% efficiency gains</strong> through strategic AI implementation. If you have any questions or would like to discuss how xop.ai can help transform your MSP with AI, don't hesitate to reach out.</p>
              
              <div class="partnership-cta">
                <h3 style="color: #10b981; margin: 0 0 15px 0; font-size: 20px;">🤝 Ready to Partner with Us?</h3>
                <p style="margin: 0 0 20px 0; color: #d1d5db;">Join our partner program and discover how we can help you build a profitable AI practice for your MSP.</p>
                <a href="https://xop.im/partner" class="partnership-button">
                  📅 Schedule Partnership Meeting
                </a>
              </div>
              
              <div style="margin-top: 40px; padding-top: 30px; border-top: 2px solid #374151;">
                <p style="margin: 0 0 20px 0;">
                  <strong>Best regards,</strong>
                </p>
                
                <div class="signature">
                  <table>
                    <tr>
                      <td style="padding-right: 20px;">
                        <div class="signature-logo">
                          X
                        </div>
                      </td>
                      <td>
                        <p style="margin: 0; color: #ffffff; font-size: 18px; font-weight: 600;">Matt Ruck</p>
                        <p style="margin: 5px 0; color: #7c3aed; font-size: 16px; font-weight: 500;">CEO, xop.ai - Transforming MSPs with AI</p>
                        <div style="margin-top: 10px;">
                          <p style="margin: 2px 0; color: #d1d5db; font-size: 14px;">📧 <a href="mailto:matt@xop.ai" style="color: #7c3aed; text-decoration: none;">matt@xop.ai</a></p>
                          <p style="margin: 2px 0; color: #d1d5db; font-size: 14px;">📱 <a href="tel:+12025258159" style="color: #7c3aed; text-decoration: none;">202-525-8159</a> (text or call)</p>
                          <p style="margin: 2px 0; color: #d1d5db; font-size: 14px;">🌐 <a href="https://xop.ai" style="color: #7c3aed; text-decoration: none;">xop.ai</a></p>
                          <p style="margin: 2px 0; color: #d1d5db; font-size: 14px;">🤝 <a href="https://xop.im/partner" style="color: #10b981; text-decoration: none;">Partner with us</a></p>
                        </div>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
              
              <div class="lead-details">
                <h4>📋 Your Submission Details</h4>
                <ul>
                  <li><strong>Name:</strong> ${firstName} ${lastName}</li>
                  <li><strong>Email:</strong> ${email}</li>
                  <li><strong>Company:</strong> ${company}</li>
                  <li><strong>Role:</strong> ${role}</li>
                  <li><strong>Company Size:</strong> ${msps}</li>
                </ul>
              </div>
            </div>
            
            <div class="footer">
              <p>© 2024 xop.ai. Transforming MSPs with AI solutions.</p>
              <p style="margin-top: 10px; font-size: 12px;">
                You received this email because you downloaded our AI Implementation Guide. 
                <a href="#" style="color: #7c3aed; text-decoration: none;">Unsubscribe</a>
              </p>
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