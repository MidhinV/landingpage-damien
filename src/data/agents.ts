import { 
  Bot, 
  Phone, 
  TrendingUp, 
  Briefcase, 
  Headphones, 
  UserPlus, 
  Receipt,
  Sparkles,
  Video
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
    tagline: "Turn Old Leads Into New Revenue",
    description: "This agent automatically contacts old leads, inactive customers, and abandoned inquiries, reengaging them with personalised conversations. Perfect for reviving your pipeline and converting lost opportunities into buyers.",
    icon: Sparkles,
    image: "/agents/data-reactivation.jpg",
    animatedImage: "/agents/animations/data-reactivation.png",
    features: [
      "Reactivation sequences",
      "Personalised outreach",
      "Lead warming",
      "Upsell & repeat business",
      "Old database cleanup",
      "Pipeline receiving"
    ]
  },
  {
    id: "receptionist",
    name: "AI Receptionist Agent",
    tagline: "Your 24/7 Super Friendly Front Desk",
    description: "Your friendly, humanlike Australian receptionist that answers calls, qualifies leads, books appointments, and never misses a single customer.",
    icon: Phone,
    image: "/agents/receptionist.jpg",
    animatedImage: "/agents/animations/receptionist.png",
    features: [
      "24/7 call answering",
      "Appointment booking",
      "Call routing",
      "Lead capture + qualification",
      "Humanlike conversational tone",
      "CRM Integration"
    ]
  },
  {
    id: "sales",
    name: "AI Sales Agent",
    tagline: "Your High Performance Closer",
    description: "This agent qualifies leads, handles objections, warms up cold prospects, books meetings, and keeps your pipeline full, all with natural conversational intelligence.",
    icon: TrendingUp,
    image: "/agents/sales.jpg",
    animatedImage: "/agents/animations/sales.png",
    features: [
      "Cold and warm call followups",
      "Objection handling",
      "Pipeline nurturing",
      "Appointment booking",
      "Lead qualification",
      "CRM integration"
    ]
  },
  {
    id: "admin",
    name: "Admin AI Agent",
    tagline: "Your Tireless Back Office Assistant",
    description: "Let your business breathe. Our Admin Agent automates day to day admin tasks like scheduling, reminders, customer followups, data entry, ticket creation, and workflow updates.",
    icon: Briefcase,
    image: "/agents/admin.jpg",
    animatedImage: "/agents/animations/admin.png",
    features: [
      "Scheduling & reminders",
      "Document organisation",
      "Ticket creation",
      "CRM updates",
      "Data entry & workflow automation",
      "Followups and task management"
    ]
  },
  {
    id: "customer-support",
    name: "Customer Support AI Agent",
    tagline: "Instant Answers & 100% Satisfaction",
    description: "Your customers receive round the clock support with a polite, humanlike agent that handles FAQs, troubleshooting, product queries, billing requests, and more.",
    icon: Headphones,
    image: "/agents/customer-support.jpg",
    animatedImage: "/agents/animations/customer-support.png",
    features: [
      "24/7 instant replies",
      "Full FAQ automation",
      "Billing & product queries",
      "Ticket creation",
      "CRM synced",
      "Zero wait time for customers"
    ]
  },
  {
    id: "client-intake",
    name: "Client Intake AI Agent",
    tagline: "Qualifies Leads & Books Next Steps",
    description: "No more manual onboarding. This agent gathers all essential information, prequalifies customers, stores data, and even schedules meetings or sends forms.",
    icon: UserPlus,
    image: "/agents/client-intake.jpg",
    animatedImage: "/agents/animations/client-intake.png", // Animated illustration like handshake
    features: [
      "Form data collection",
      "Lead qualification",
      "Document gathering",
      "Appointment scheduling",
      "CRM updates",
      "Data storing"
    ]
  },
  {
    id: "invoice-tax",
    name: "Invoice, GST & Tax AI Agent",
    tagline: "Stress Free Business Accounting",
    description: "Built for Australian businesses, it ensures accuracy, avoids human errors, and prepares your financial data in clean, accountant ready formats.",
    icon: Receipt,
    image: "/agents/invoice-tax.jpg",
    animatedImage: "/agents/animations/invoice-tax.png",
    features: [
      "Invoice generation",
      "GST calculation",
      "Tax breakdowns",
      "Expense tracking",
      "Payment reminders",
      "Compliance ready reports"
    ]
  },
  {
    id: "video-analyzer",
    name: "Video Analyzer",
    tagline: "Intelligent Video Content Analysis",
    description: "This agent analyzes video content and provides detailed descriptions of what is happening in the footage. Perfect for content creators, educators, and businesses that need automated video summarization and analysis.",
    icon: Video,
    image: "/agents/video-analyzer.svg",
    animatedImage: "/agents/video-analyzer.svg",
    features: [
      "Automatic video analysis",
      "Detailed scene descriptions",
      "Content summarization",
      "Object and action recognition",
      "Timestamp annotations",
      "Multi format support"
    ]
  }
];

