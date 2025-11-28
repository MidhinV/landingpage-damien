import { Bot, Brain, Rocket, Settings, Target, Zap } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Agents Using Your Knowledge",
    description:
      "Agents that use your existing information to reduce friction across onboarding, support, and customer journeys.",
    features: ["Knowledge Integration", "24/7 Availability", "Natural Conversations"],
  },
  {
    icon: Target,
    title: "Customer Interaction Transformation",
    description:
      "Modern engagement where customers simply ask and get what they need immediately, without searching or waiting.",
    features: ["Reduced Wait Times", "Better Experience", "Lower Workload"],
  },
  {
    icon: Brain,
    title: "AI Agent Design",
    description:
      "Identify where AI helps most, then design agents that handle routine tasks. Free your people for what truly needs them.",
    features: ["Custom Design", "Workflow Integration", "Task Automation"],
  },
  {
    icon: Zap,
    title: "AI Readiness & Strategy",
    description:
      "Clarify priorities, find quick wins, and create a roadmap that aligns technology, teams, and governance.",
    features: ["Priority Mapping", "Quick Wins", "Strategic Roadmap"],
  },
  {
    icon: Settings,
    title: "Implementation & Support",
    description:
      "From pilot to rollout, I work alongside your team to configure and refine AI agents for reliable outcomes.",
    features: ["Hands-on Support", "Team Training", "Continuous Refinement"],
  },
  {
    icon: Rocket,
    title: "Rapid Proof of Concepts",
    description:
      "Deliver proof-of-concepts in days, helping you see value quickly and measure ROI through reduced manual workload.",
    features: ["Fast Delivery", "ROI Measurement", "Scalable Solutions"],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-32 relative overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-10 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            What We Can Do For Your{" "}
            <span className="text-gradient">Organisation</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From complexity to clarity, alignment, and flow.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const isPrimary = index % 3 === 0;
            const hasImage = index === 0 || index === 2 || index === 4;
            const serviceImages = [
              "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&auto=format&q=80", // AI/Brain
              null,
              "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop&auto=format&q=80", // Team collaboration
              null,
              "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&auto=format&q=80", // Business meeting
              null,
            ];
            
            return (
              <div
                key={service.title}
                className={`group hover-lift overflow-hidden ${
                  isPrimary 
                    ? "card-elevated bg-gradient-to-br from-primary/5 to-transparent border-primary/20" 
                    : "card-minimal"
                }`}
              >
                {/* Service Image */}
                {hasImage && serviceImages[index] && (
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={serviceImages[index]} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent" />
                  </div>
                )}

                <div className="p-8 space-y-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                    isPrimary
                      ? "bg-primary/10 group-hover:bg-primary/20"
                      : "bg-muted group-hover:bg-primary/10"
                  }`}>
                    <service.icon className={`w-8 h-8 transition-colors ${
                      isPrimary ? "text-primary" : "text-primary group-hover:text-primary"
                    }`} />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold leading-tight">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className={`text-xs px-3 py-1.5 rounded-full font-medium ${
                            isPrimary
                              ? "bg-primary/10 text-primary border border-primary/20"
                              : "bg-muted text-foreground border border-border"
                          }`}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
