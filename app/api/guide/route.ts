import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { trackRedditConversion } from '@/app/lib/reddit-capi'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, company, role, companySize } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !company || !role || !companySize) {
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

    const guideUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://xop.ai'}/docs/msp-executive-guide-ai-2026.pdf`

    // Send email to the lead + BCC Matt
    const { data, error } = await resend.emails.send({
      from: 'xop.ai <noreply@xop.ai>',
      to: [email],
      bcc: ['matt@xop.ai'],
      subject: 'Your Guide: The AI Reckoning for MSP Leadership (2026)',
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Your MSP Executive Guide on AI</title>
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
            .header h1 { color: #ffffff; font-size: 24px; margin: 0; font-weight: 700; }
            .header p { color: #e9d5ff; font-size: 14px; margin: 10px 0 0 0; }
            .content { padding: 40px 30px; color: #e5e7eb; }
            .content p { font-size: 16px; line-height: 1.6; margin: 0 0 20px 0; }
            .download-section { border: 2px solid #7c3aed; border-radius: 12px; padding: 30px; margin: 30px 0; text-align: center; }
            .download-button { display: inline-block; background: linear-gradient(135deg, #7c3aed 0%, #ec4899 100%); color: #ffffff; text-decoration: none; padding: 16px 32px; border-radius: 8px; font-weight: 600; font-size: 18px; margin: 15px 0; }
            .highlights { border: 2px solid #374151; border-radius: 8px; padding: 25px; margin: 30px 0; }
            .highlights h3 { color: #a78bfa; font-size: 18px; margin: 0 0 15px 0; }
            .highlights ul { margin: 0; padding-left: 20px; }
            .highlights li { margin: 8px 0; font-size: 15px; line-height: 1.5; color: #d1d5db; }
            .cta-section { border: 2px solid #10b981; border-radius: 12px; padding: 25px; margin: 30px 0; text-align: center; }
            .cta-button { display: inline-block; background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: #ffffff; text-decoration: none; padding: 16px 32px; border-radius: 8px; font-weight: 600; font-size: 18px; }
            .signature { border: 2px solid #7c3aed; border-left: 4px solid #7c3aed; padding: 20px; margin: 0; border-radius: 8px; }
            .signature table { width: 100%; border-collapse: collapse; }
            .signature td { vertical-align: top; }
            .footer { padding: 30px; text-align: center; border-top: 2px solid #374151; }
            .footer p { color: #9ca3af; font-size: 14px; margin: 0; }
            .lead-details { border: 2px solid #6b7280; padding: 20px; border-radius: 8px; margin-top: 40px; }
            .lead-details h4 { color: #6b7280; font-size: 14px; margin: 0 0 15px 0; text-transform: uppercase; letter-spacing: 1px; }
            .lead-details ul { list-style: none; padding: 0; margin: 0; }
            .lead-details li { padding: 5px 0; font-size: 14px; color: #d1d5db; border-bottom: 1px solid #374151; }
            .lead-details li:last-child { border-bottom: none; }
            @media only screen and (max-width: 480px) {
              .header { padding: 30px 20px; }
              .header h1 { font-size: 20px; }
              .content { padding: 30px 20px; }
              .download-section { padding: 20px; }
              .download-button { padding: 14px 24px; font-size: 16px; }
              .cta-section { padding: 20px; }
              .cta-button { padding: 14px 24px; font-size: 16px; }
            }
          </style>
        </head>
        <body>
          <div class="email-container">
            <div class="header">
              <h1>The AI Reckoning for MSP Leadership</h1>
              <p>Your Executive Guide is Ready</p>
            </div>

            <div class="content">
              <p>Hi <strong>${firstName}</strong>,</p>

              <p>Thank you for downloading <strong>The AI Reckoning for MSP Leadership</strong>. This guide covers how agentic AI systems are reshaping the economics, workforce, and customer expectations of the managed services industry &mdash; and what MSP executives need to do about it now.</p>

              <div class="download-section">
                <h2 style="color: #ffffff; margin: 0 0 15px 0; font-size: 22px;">Download Your Guide</h2>
                <p style="margin: 0 0 20px 0; color: #d1d5db;">Get instant access to the full 14-page executive guide:</p>
                <a href="${guideUrl}" class="download-button">
                  Download PDF Guide
                </a>
              </div>

              <div class="highlights">
                <h3>Key Takeaways Inside:</h3>
                <ul>
                  <li>Why the traditional MSP staffing pyramid is collapsing into an hourglass</li>
                  <li>The automation trap &mdash; and why you should slow down on hand-built workflows</li>
                  <li>How to position your MSP as an AI-powered consultancy, not just a ticket shop</li>
                  <li>Three concrete actions you can take Monday morning</li>
                </ul>
              </div>

              <div class="cta-section">
                <h3 style="color: #10b981; margin: 0 0 15px 0; font-size: 20px;">Ready to Talk Strategy?</h3>
                <p style="margin: 0 0 20px 0; color: #d1d5db;">Book a call with Matt to discuss how these trends apply to your MSP.</p>
                <a href="https://xop.im/partner" class="cta-button">
                  Book a Call with Matt
                </a>
              </div>

              <div style="margin-top: 40px; padding-top: 30px; border-top: 2px solid #374151;">
                <p style="margin: 0 0 20px 0;">
                  <strong>Best regards,</strong>
                </p>

                <div class="signature">
                  <table>
                    <tr>
                      <td>
                        <p style="margin: 0; color: #ffffff; font-size: 18px; font-weight: 600;">Matt Ruck</p>
                        <p style="margin: 5px 0; color: #7c3aed; font-size: 16px; font-weight: 500;">CEO, xop.ai</p>
                        <div style="margin-top: 10px;">
                          <p style="margin: 2px 0; color: #d1d5db; font-size: 14px;"><a href="mailto:matt@xop.ai" style="color: #7c3aed; text-decoration: none;">matt@xop.ai</a></p>
                          <p style="margin: 2px 0; color: #d1d5db; font-size: 14px;"><a href="tel:+12025258159" style="color: #7c3aed; text-decoration: none;">202-525-8159</a></p>
                          <p style="margin: 2px 0; color: #d1d5db; font-size: 14px;"><a href="https://xop.ai" style="color: #7c3aed; text-decoration: none;">xop.ai</a></p>
                        </div>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>

              <div class="lead-details">
                <h4>Submission Details</h4>
                <ul>
                  <li><strong>Name:</strong> ${firstName} ${lastName}</li>
                  <li><strong>Email:</strong> ${email}</li>
                  <li><strong>Company:</strong> ${company}</li>
                  <li><strong>Role:</strong> ${role}</li>
                  <li><strong>Company Size:</strong> ${companySize}</li>
                </ul>
              </div>
            </div>

            <div class="footer">
              <p>&copy; 2026 xop.ai. Transforming MSPs with AI.</p>
              <p style="margin-top: 10px; font-size: 12px;">
                You received this email because you downloaded our MSP Executive Guide on AI.
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

    // Track Reddit conversion (non-blocking)
    trackRedditConversion({ eventType: 'Lead', email })

    console.log('Guide email sent successfully:', {
      firstName,
      lastName,
      email,
      company,
      role,
      companySize,
      emailId: data?.id,
      timestamp: new Date().toISOString()
    })

    return NextResponse.json(
      { success: true, message: 'Guide request processed successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Guide API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
