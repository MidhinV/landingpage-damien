import { Bot, Brain, FileText, Lightbulb, Settings, Target } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Knowledge Agents",
    description:
      "These take standard operating procedures (SOPs), policies, and operational knowledge and turn into searchable intelligence.",
  },
  {
    icon: Bot,
    title: "Training & Onboarding Agents",
    description:
      "Always available with endless capability to support.",
  },
  {
    icon: Target,
    title: "Customer Support Agents",
    description:
      "Always accurate, who provide consistent customer answers.",
  },
  {
    icon: Lightbulb,
    title: "AI Strategy & Roadmaps",
    description:
      "Prioritise the best way to structure the AI journey and pathways.",
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
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Building AI Solutions Together
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I design, refine and implement AI agents that deliver high quality outputs instantly, reduce costs, and work directly from your organisational knowledge, with resulting improvements in operational accuracy and freeing staff from repetitive work.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service, index) => {
            const isPrimary = index % 4 === 0;
            
            return (
              <div
                key={service.title}
                className={`group hover-lift ${
                  isPrimary 
                    ? "card-elevated bg-gradient-to-br from-primary/5 to-transparent border-primary/20" 
                    : "card-minimal"
                }`}
              >
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
                    <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bespoke AI Solutions Section */}
        <div className="max-w-4xl mx-auto">
          <div className="card-elevated p-8 md:p-12 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Bespoke AI Solutions
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Not every organisation fits neatly into an AI agent model and that's where bespoke solutions shine.
              </p>
              <p>
                We design custom AI in the areas of workflow automation, document intelligence, data extraction, personalised recommendations, and integrations that streamline how your organisation works.
              </p>
              <p>
                If you can describe the outcome you need, we can build the intelligence to deliver it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
