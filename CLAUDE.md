# XOP.ai Website

XOP.ai is a marketing and lead generation website for MSP (Managed Service Provider) AI solutions. Built on Rezolve.ai technology, it showcases AI-powered tools for engineer efficiency, service desk management, and client-facing chatbots. The site features product showcases, blog content, resource center, and email-driven contact forms.

## Tech Stack

| Layer | Technology | Version | Purpose |
|-------|------------|---------|---------|
| Framework | Next.js | 15.x | App Router architecture with server/client components |
| Language | TypeScript | 5.x | Strict mode enabled for type safety |
| UI Library | React | 19.x | Client components with hooks-based state |
| Styling | Tailwind CSS | 3.x | Utility-first CSS with custom animations |
| Icons | lucide-react | 0.x | Consistent icon library |
| Email | Resend | 4.x | Transactional email API for contact forms |
| Analytics | Vercel Analytics + Google Analytics | - | User tracking and metrics |
| Hosting | Vercel | - | Serverless deployment with edge functions |

## Quick Start

```bash
# Prerequisites
Node.js 18+ or later

# Installation
git clone <repo-url>
cd xopweb
npm install

# Environment Setup
# Create .env.local with required variables (see Environment Variables section)

# Development
npm run dev
# Opens at http://localhost:3000

# Build
npm run build

# Production
npm start

# Linting
npm run lint
```

## Project Structure

```
xopweb/
├── app/                          # Next.js App Router (source code)
│   ├── components/               # Shared React components
│   │   ├── Navigation.tsx        # Main nav with dropdowns
│   │   ├── Footer.tsx            # Site footer
│   │   └── GoogleAnalytics.tsx   # GA tracking component
│   ├── api/                      # API Route Handlers
│   │   ├── contact/route.ts      # Contact form endpoint
│   │   ├── ebook/route.ts        # E-book download endpoint
│   │   ├── webinar/route.ts      # Webinar signup endpoint
│   │   └── pdf/[slug]/route.ts   # Dynamic PDF serving
│   ├── solutions/                # Solution pages (product features)
│   │   ├── engineer-efficiency/
│   │   ├── service-desk-management/
│   │   ├── executive-insights/
│   │   ├── recurring-revenue/
│   │   ├── branded-chatbot/
│   │   ├── voice-agents/
│   │   ├── email-agents/
│   │   ├── integrated-stack/
│   │   └── aura-insights/
│   ├── apps/                     # Product application pages
│   │   ├── engineer-app-v4/
│   │   ├── manager-app/
│   │   ├── enterprise-search-msps/
│   │   ├── enterprise-search-end-users/
│   │   └── msp-branded-client-chatbot/
│   ├── blog/                     # Blog posts and news
│   │   ├── page.tsx              # Blog listing
│   │   ├── 2025-ai-msps-survey/
│   │   ├── ai-and-msps-no-longer-optional/
│   │   ├── ai-explainability/
│   │   └── [other articles]/
│   ├── resources/                # Resource center
│   │   ├── faq/
│   │   ├── certified-ai-professional/
│   │   ├── compare/
│   │   ├── podcast/
│   │   ├── roi/
│   │   └── webinars/
│   ├── about/                    # About page
│   ├── contact/                  # Contact form page
│   ├── partner/                  # Partnership page
│   ├── webinar/                  # Webinar pages
│   ├── ebook/                    # E-book landing
│   ├── layout.tsx                # Root layout (fonts, analytics)
│   ├── page.tsx                  # Homepage
│   └── globals.css               # Global styles and animations
├── public/                       # Static assets
│   ├── docs/                     # PDF documents
│   └── *.svg, *.png, *.webp      # Images and icons
├── .claude/                      # Claude Code configuration
├── next.config.ts                # Next.js configuration
├── tailwind.config.js            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies and scripts
```

## Architecture Overview

This is a **Next.js 15 App Router** marketing website with a clear separation between server and client components. Pages use the `'use client'` directive for interactivity (forms, dropdowns, modals), while the root layout handles server-side metadata and analytics setup.

**Data flow:** Static content lives in page components as TypeScript arrays. Forms submit to API routes (`/api/*`) which use Resend for email delivery. No database - all lead capture flows through email notifications to the business owner.

**Component architecture:** Each page wraps content with shared `Navigation` and `Footer` components. Interactive elements (dropdowns, modals, forms) use React hooks (`useState`, `useEffect`). The site uses a consistent dark theme with green/purple accent gradients.

```
┌─────────────────────────────────────────────────────────────┐
│                      Root Layout                            │
│  (Server: Inter font, metadata, analytics providers)        │
├─────────────────────────────────────────────────────────────┤
│                      Navigation                             │
│  (Client: dropdown state, mobile menu)                      │
├─────────────────────────────────────────────────────────────┤
│                      Page Content                           │
│  (Client: forms, modals, interactive cards)                 │
├─────────────────────────────────────────────────────────────┤
│                        Footer                               │
│  (Server: static links)                                     │
└─────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                      API Routes                             │
│  /api/contact     → Resend email to matt@xop.ai            │
│  /api/ebook       → Resend email with download link        │
│  /api/webinar     → Resend webinar registration            │
│  /api/pdf/[slug]  → Serve PDFs from public/docs            │
└─────────────────────────────────────────────────────────────┘
```

### Key Modules

| Module | Location | Purpose |
|--------|----------|---------|
| Navigation | `app/components/Navigation.tsx` | Main nav with Solutions, Apps, Resources dropdowns |
| Footer | `app/components/Footer.tsx` | Site footer with links |
| GoogleAnalytics | `app/components/GoogleAnalytics.tsx` | GA4 tracking via Script component |
| Contact API | `app/api/contact/route.ts` | Validates and sends contact form emails |
| Homepage | `app/page.tsx` | Service cards, hero, CTAs, Calendly modal |
| Solutions | `app/solutions/*/page.tsx` | Product feature detail pages with tab navigation |
| Blog | `app/blog/*/page.tsx` | Blog posts and news articles |

## Development Guidelines

### File Naming
- **Page files**: `page.tsx` (Next.js App Router convention)
- **Component files**: `PascalCase.tsx` (e.g., `Navigation.tsx`, `Footer.tsx`)
- **API routes**: `route.ts` (Next.js convention)
- **Directory names**: `kebab-case` (e.g., `engineer-efficiency/`, `service-desk-management/`)
- **Config files**: `lowercase.config.js/ts`

### Code Naming
- **Component functions**: `PascalCase` (e.g., `export default function Navigation()`)
- **Regular functions**: `camelCase` (e.g., `toggleService`, `handleSubmit`)
- **Variables**: `camelCase` (e.g., `expandedServices`, `mobileMenuOpen`)
- **Constants**: `camelCase` for component-level arrays, `SCREAMING_SNAKE` for true constants
- **Boolean state**: descriptive names (e.g., `mobileMenuOpen`, `calendlyModalOpen`, `isSubmitting`)
- **Event handlers**: `handle` prefix (e.g., `handleSubmit`, `handleChange`)

### Component Pattern
```tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import { ChevronRight } from 'lucide-react'

export default function PageName() {
  const [state, setState] = useState(initialValue)

  useEffect(() => {
    // side effects
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      {/* Page content */}
      <Footer />
    </div>
  )
}
```

### Import Order
1. `'use client'` directive (if needed)
2. React imports (`useState`, `useEffect`)
3. Next.js imports (`Link`, `Image`, `Script`)
4. Local components (`@/app/components/...`)
5. Third-party icons (`lucide-react`)

### Path Aliases
- `@/*` maps to project root (configured in tsconfig.json)
- Use: `import Navigation from '@/app/components/Navigation'`

### Styling Conventions
- Use Tailwind utility classes inline
- Dark theme base: `bg-black text-white`
- Accent colors: `text-green-400`, `text-purple-400`, `from-purple-600 to-pink-600`
- Cards: `bg-gray-900 border-gray-800 rounded-lg`
- Hover effects: `hover:text-green-400 transition-colors`
- Custom animations defined in `globals.css`: `animate-fadeIn`, `animate-float`, `animate-pulse-slow`
- Animation delays: `.delay-100` through `.delay-500`

## Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Create production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `RESEND_API_KEY` | Yes | Resend API key for sending emails |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | No | Google Analytics measurement ID |

Create `.env.local` for local development (gitignored).

## API Routes

### POST /api/contact
Handles contact form submissions. Validates fields and sends formatted HTML email.

**Request body:**
```json
{
  "firstName": "string",
  "lastName": "string",
  "companyName": "string",
  "email": "string",
  "message": "string"
}
```

### POST /api/ebook
Handles e-book download requests. Sends download link to requester.

### POST /api/webinar
Handles webinar registration signups.

### GET /api/pdf/[slug]
Serves PDF documents from `public/docs/` directory.

## Security Configuration

Security headers configured in `next.config.ts`:
- `X-Frame-Options: DENY` - Prevents clickjacking
- `X-Content-Type-Options: nosniff` - Prevents MIME sniffing
- `Referrer-Policy: origin-when-cross-origin` - Controls referrer info

## Deployment

The site deploys to **Vercel** automatically on push to main branch.

- `.vercel/` directory contains project configuration
- Images are unoptimized (`unoptimized: true` in next.config.ts) for simpler static hosting
- Redirects configured: `/compare` → `/resources/compare`

## Additional Resources

- [Next.js App Router Documentation](https://nextjs.org/docs/app)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Resend Email API](https://resend.com/docs)
- [Vercel Deployment](https://vercel.com/docs)


## Skill Usage Guide

When working on tasks involving these technologies, invoke the corresponding skill:

| Skill | Invoke When |
|-------|-------------|
| nextjs | Configures App Router, server/client components, API routes, and page structure |
| vercel | Manages Vercel deployment, edge functions, and serverless hosting configuration |
| tailwind | Applies Tailwind CSS utilities for dark theme, animations, and responsive design |
| resend | Configures transactional email API for contact forms and lead capture |
| frontend-design | Designs dark-themed UI with Tailwind CSS, accent gradients, and custom animations |
| typescript | Enforces TypeScript type safety and strict mode configuration |
| react | Manages React hooks, components, state management, and interactive features |
