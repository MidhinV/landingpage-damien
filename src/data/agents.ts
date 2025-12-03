import { 
  Bot, 
  Phone, 
  TrendingUp, 
  Briefcase, 
  Headphones, 
  UserPlus, 
  Receipt,
  Sparkles,
  Video,
  Search,
  Share2,
  Shield
} from "lucide-react";

export interface Agent {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: typeof Bot;
  image?: string; // Path to agent static image
  animatedImage?: string; // Path to animated illustration (GIF, Lottie, or animated SVG)
  features: string[];
  useCases?: string[];
}

export const agents: Agent[] = [
  {
    id: "onboarding",
    name: "OnboardAI",
    tagline: "Intelligent Onboarding Platform",
    description: "OnboardAI combines immersive video learning with a conversational AI mentor. Every new team member gets personalized guidance, real time answers, and a clear path to success from day one.",
    icon: Bot,
    image: "/onboardai-logo.svg",
    animatedImage: "/onboardai-logo.svg",
    features: [
      "Immersive Video Learning",
      "Conversational AI Mentor",
      "Progress Tracking",
      "Real time feedback",
      "Personalized guidance",
      "Enterprise ready"
    ]
  },
  {
    id: "data-reactivation",
    name: "Data Reactivation AI Agent",
    tagline: "Wake up old leads and dormant databases.",
    description: "Reaches out to past enquiries and inactive customers with personalised follow-ups to turn \"forgotten\" data into new opportunities.",
    icon: Sparkles,
    image: "/agents/data-reactivation.jpg",
    animatedImage: "/agents/animations/data-reactivation.png",
    features: [
      "Reactivation and re-engagement campaigns",
      "Personalised outreach at scale",
      "Lead warming and upsell prompts",
      "Database clean-up as it goes"
    ],
    useCases: ["Great for: real estate, coaches, agencies and service businesses."]
  },
  {
    id: "receptionist",
    name: "AI Receptionist Agent",
    tagline: "Your always-on, always-friendly front desk.",
    description: "Answers calls 24/7, captures details, qualifies enquiries, routes calls and books appointments so you never miss an opportunity or leave a caller waiting.",
    icon: Phone,
    image: "/agents/receptionist.jpg",
    animatedImage: "/agents/animations/receptionist.png",
    features: [
      "Warm, natural Australian-style voice",
      "Lead capture and qualification",
      "Bookings, message-taking and call routing",
      "Connects into your CRM and existing tools"
    ],
    useCases: ["Great for: service businesses losing leads through missed calls."]
  },
  {
    id: "sales",
    name: "AI Sales Agent",
    tagline: "A high performance closer that works around the clock.",
    description: "Nurtures leads, follows up calls, handles objections and books qualified meetings using your messaging and sales style.",
    icon: TrendingUp,
    image: "/agents/sales.jpg",
    animatedImage: "/agents/animations/sales.png",
    features: [
      "Cold and warm follow-up sequences",
      "Objection handling in your voice",
      "Pipeline nurturing and appointment booking",
      "Full CRM integration for clean records"
    ],
    useCases: ["Great for: businesses wanting more sales without more headcount."]
  },
  {
    id: "admin",
    name: "Admin AI Agent",
    tagline: "A tireless digital assistant for your back office.",
    description: "Takes care of scheduling, reminders, follow-ups, and updating key systems so important tasks don't fall through the cracks.",
    icon: Briefcase,
    image: "/agents/admin.jpg",
    animatedImage: "/agents/animations/admin.png",
    features: [
      "Smart reminders and task follow-ups",
      "Document and record organisation",
      "Ticket creation and workflow updates",
      "Works alongside your CRM and business apps"
    ],
    useCases: ["Great for: teams drowning in admin and compliance tasks."]
  },
  {
    id: "customer-support",
    name: "Customer Support AI Agent",
    tagline: "Instant answers and zero wait time.",
    description: "Handles FAQs, troubleshooting, billing and product questions, and creates tickets when a human needs to step in.",
    icon: Headphones,
    image: "/agents/customer-support.jpg",
    animatedImage: "/agents/animations/customer-support.png",
    features: [
      "24/7 replies to common questions",
      "FAQ and help-centre automation",
      "Billing and product query support",
      "Ticket creation and CRM syncing"
    ],
    useCases: ["Great for: reducing support load while lifting customer experience."]
  },
  {
    id: "client-intake",
    name: "Client Intake AI Agent",
    tagline: "Smooth, structured onboarding for every client.",
    description: "Collects the right details, pre-qualifies prospects, gathers documents and books next steps without manual chasing.",
    icon: UserPlus,
    image: "/agents/client-intake.jpg",
    animatedImage: "/agents/animations/client-intake.png",
    features: [
      "Smart intake questions and forms",
      "Lead qualification built in",
      "Document and information gathering",
      "Automatic scheduling and CRM updates"
    ],
    useCases: ["Great for: lawyers, tradies, clinics, consultants and agencies."]
  },
  {
    id: "invoice-tax",
    name: "Invoice, GST & Tax AI Agent",
    tagline: "Fast, accurate bookkeeping support for busy businesses.",
    description: "Generates invoices, calculates GST, tracks expenses and prepares clean summaries so your accountant gets data that's ready to go.",
    icon: Receipt,
    image: "/agents/invoice-tax.jpg",
    animatedImage: "/agents/animations/invoice-tax.png",
    features: [
      "Automated invoice generation and reminders",
      "GST and tax breakdowns",
      "Expense tracking and categorisation",
      "Compliance-friendly reporting"
    ],
    useCases: ["Great for: SMEs, tradies, solo operators and growing agencies."]
  },
  {
    id: "seo",
    name: "SEO AI Agent",
    tagline: "Search visibility, handled intelligently.",
    description: "Reviews your site, your competitors and your keywords to build a focused SEO plan and create content that helps you rank.",
    icon: Search,
    image: "/agents/seo.jpg",
    animatedImage: "/agents/animations/seo.png",
    features: [
      "Keyword and competitor analysis",
      "On-page optimisation recommendations",
      "Blog and content suggestions",
      "Clear, actionable SEO strategy"
    ],
    useCases: ["Great for: owners wanting growth without big SEO retainers."]
  },
  {
    id: "social-media",
    name: "Social Media AI Agent",
    tagline: "Daily content, consistently on-brand.",
    description: "Plans and drafts posts, captions and hashtags, tracks trends and keeps your social channels active without needing a full-time social media hire.",
    icon: Share2,
    image: "/agents/social-media.jpg",
    animatedImage: "/agents/animations/social-media.png",
    features: [
      "Daily posts and captions in your brand voice",
      "Hashtag and trend suggestions",
      "Simple content calendars",
      "Multi-platform support"
    ],
    useCases: ["Great for: brands wanting consistent content without the stress."]
  },
  {
    id: "cyber-security",
    name: "Cyber Security AI Agent",
    tagline: "Proactive protection for modern threats.",
    description: "Monitors systems for unusual activity, flags vulnerabilities and shares clear recommendations so you can act before problems escalate.",
    icon: Shield,
    image: "/agents/cyber-security.jpg",
    animatedImage: "/agents/animations/cyber-security.png",
    features: [
      "Threat and anomaly monitoring",
      "Vulnerability and risk checks",
      "Actionable security recommendations",
      "Support for compliance and alerts"
    ],
    useCases: ["Great for: organisations wanting strong security without enterprise costs."]
  }
];

