import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params
    
    // Validate slug
    const validSlugs = ['engineer-app-v4', 'teams-chatbot', 'enterprise-search']
    if (!validSlugs.includes(slug)) {
      return NextResponse.json({ error: 'Invalid PDF slug' }, { status: 404 })
    }

    // For now, redirect to the PDF page with print styles
    // This allows users to use browser's "Print to PDF" functionality
    const pdfUrl = `${request.nextUrl.origin}/pdf/${slug}`
    
    return NextResponse.json({ 
      message: 'PDF generation available',
      pdfUrl: pdfUrl,
      instructions: 'Visit the PDF URL and use your browser\'s "Print to PDF" feature for best results'
    })
  } catch (error) {
    console.error('PDF generation error:', error)
    return NextResponse.json(
      { error: 'Failed to generate PDF' }, 
      { status: 500 }
    )
  }
}

// Alternative: If you want to implement server-side PDF generation with Puppeteer
// You would need to install: npm install puppeteer
// And uncomment the code below:

/*
import puppeteer from 'puppeteer'

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params
    
    const validSlugs = ['engineer-app-v4', 'teams-chatbot', 'enterprise-search']
    if (!validSlugs.includes(slug)) {
      return NextResponse.json({ error: 'Invalid PDF slug' }, { status: 404 })
    }

    const pdfUrl = `${request.nextUrl.origin}/pdf/${slug}`
    
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    })
    
    const page = await browser.newPage()
    await page.goto(pdfUrl, { 
      waitUntil: 'networkidle0',
      timeout: 30000 
    })
    
    const pdf = await page.pdf({
      format: 'A4',
      margin: {
        top: '0.5in',
        right: '0.5in',
        bottom: '0.5in',
        left: '0.5in'
      },
      printBackground: true,
      preferCSSPageSize: true
    })
    
    await browser.close()
    
    const filename = `${slug}-product-overview.pdf`
    
    return new NextResponse(pdf, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Cache-Control': 'public, max-age=3600'
      }
    })
  } catch (error) {
    console.error('PDF generation error:', error)
    return NextResponse.json(
      { error: 'Failed to generate PDF' }, 
      { status: 500 }
    )
  }
}
*/