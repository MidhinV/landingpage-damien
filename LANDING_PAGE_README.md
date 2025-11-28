# Landing Page - Energy of Now

This is a standalone landing page for Energy of Now, showcasing bespoke AI agent solutions.

## Overview

This is a **landing page only** - it does not include the OnboardAI application integration. The page displays:
- Company information and services
- AI agent portfolio/products
- Contact information and CTAs

## Structure

### Components
- `Header` - Navigation bar with links to page sections
- `HeroSection` - Main hero section with company branding
- `AboutSection` - About Energy of Now
- `ServicesSection` - Services offered
- `OnboardingSection` - AI Agent portfolio/products showcase
- `IndustriesSection` - Industries served
- `WhyMeSection` - Why choose Energy of Now
- `CTASection` - Call-to-action section
- `Footer` - Footer with links and contact info

### Agent Products

The Products section (`OnboardingSection`) displays all available AI agents:
1. OnboardAI
2. Data Reactivation AI Agent
3. AI Receptionist Agent
4. AI Sales Agent
5. Admin AI Agent
6. Customer Support AI Agent
7. Client Intake AI Agent
8. Invoice, GST & Tax AI Agent

Each agent card opens a modal with detailed information and an illustration.

## Future Integration

**Note**: This landing page is designed to link to dedicated agent pages in the future. Agent cards are currently informational only - hyperlinks to dedicated pages will be added later.

## Backend

**No backend is required** for this landing page. All content is static and served from the Next.js frontend.

The `backend-final` folder is not needed for this landing page and can be removed or kept for future use.

## Running the Project

```bash
npm install
npm run dev
```

The landing page will be available at `http://localhost:3000`

## Deployment

This is a static Next.js application that can be deployed to:
- Vercel (recommended)
- Netlify
- Any static hosting service

No backend services or databases are required.

