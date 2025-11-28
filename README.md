# Frontend - Combined Landing Page & Onboarding App

This is a Next.js application that combines the Energy of Now landing page with the Onboarding AI application.

## Features

- **Landing Page**: Professional landing page showcasing AI solutions and services
- **Onboarding AI**: Interactive onboarding experience with video learning and conversational AI
- **Unified Experience**: Seamless navigation between marketing and product

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Set up environment variables
# Create a .env.local file with:
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### Development

```bash
# Start development server
npm run dev
```

The app will be available at `http://localhost:3000`

### Routes

- `/` - Landing page (Hero, About, Services, Onboarding showcase, etc.)
- `/login` - Login page for onboarding app
- `/dashboard` - Main onboarding dashboard

### Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
frontend-final/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Landing page (root route)
│   ├── login/              # Login page
│   ├── dashboard/          # Onboarding dashboard
│   └── globals.css         # Global styles
├── src/
│   ├── components/
│   │   ├── landing/       # Landing page components
│   │   │   ├── Header.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── OnboardingSection.tsx
│   │   │   ├── IndustriesSection.tsx
│   │   │   ├── WhyMeSection.tsx
│   │   │   ├── CTASection.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/            # shadcn/ui components
│   ├── contexts/          # React contexts
│   └── lib/               # Utilities
└── public/                # Static assets
```

## Technologies

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - Component library
- **Radix UI** - Accessible primitives
- **ElevenLabs** - AI voice integration

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

## License

All rights reserved.
