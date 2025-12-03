'use client';

import { Search, DraftingCompass, Rocket, TrendingUp } from "lucide-react";
import Image from "next/image";

const journeySteps = [
  {
    icon: Search,
    title: "Discover",
    subtitle: "Identify High Value Opportunities",
    internal: {
      title: "Internal:",
      items: [
        "Map high friction tasks, knowledge gaps, inconsistent processes."
      ]
    },
    external: {
      title: "External:",
      items: [
        "Analyse customer journeys, repeated questions, service delays."
      ]
    }
  },
  {
    icon: DraftingCompass,
    title: "Design",
    subtitle: "Build AI Aligned to Real Needs",
    internal: {
      title: "Internal:",
      items: [
        "Design Knowledge & Training Agents from your SOPs and procedures."
      ]
    },
    external: {
      title: "External:",
      items: [
        "Build Customer Support Agents trained on your tone and service standards."
      ]
    }
  },
  {
    icon: Rocket,
    title: "Enable",
    subtitle: "Deploy Into Daily Workflows",
    internal: {
      title: "Internal:",
      items: [
        "Give staff instant answers and guidance."
      ]
    },
    external: {
      title: "External:",
      items: [
        "Provide consistent, accurate responses 24/7."
      ]
    }
  },
  {
    icon: TrendingUp,
    title: "Evolve",
    subtitle: "Improve & Expand Over Time",
    internal: {
      title: "Internal:",
      items: [
        "Expand use cases, refine accuracy, build automation."
      ]
    },
    external: {
      title: "External:",
      items: [
        "Scale across channels, integrate with CRM/service systems."
      ]
    }
  }
];

export function AIJourneySection() {
  return (
    <section className="py-32 relative overflow-hidden bg-muted/30">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-secondary/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-10 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            The AI Journey for Staff & Customers
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Successful AI supports internal teams and external customers. This journey keeps people at the centre while modernising how work gets done.
          </p>
        </div>

        {/* Journey Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {journeySteps.map((step, index) => {
              const isPrimary = index % 4 === 0;
              
              return (
                <div
                  key={step.title}
                  className={`group hover-lift ${
                    isPrimary 
                      ? "card-elevated bg-gradient-to-br from-primary/5 to-transparent border-primary/20" 
                      : "card-minimal"
                  }`}
                >
                  <div className="p-6 space-y-4">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      isPrimary
                        ? "bg-primary/10 group-hover:bg-primary/20"
                        : "bg-muted group-hover:bg-primary/10"
                    }`}>
                      <step.icon className={`w-7 h-7 transition-colors ${
                        isPrimary ? "text-primary" : "text-primary"
                      }`} />
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                      <h4 className="text-sm font-semibold text-primary mb-3">{step.subtitle}</h4>
                    </div>

                    {/* Internal */}
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-foreground">{step.internal.title}</p>
                      <ul className="space-y-1">
                        {step.internal.items.map((item, i) => (
                          <li key={i} className="text-xs text-muted-foreground leading-relaxed">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* External */}
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-foreground">{step.external.title}</p>
                      <ul className="space-y-1">
                        {step.external.items.map((item, i) => (
                          <li key={i} className="text-xs text-muted-foreground leading-relaxed">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quote */}
          <div className="max-w-4xl mx-auto">
            <div className="card-minimal p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <div className="flex items-start gap-4">
                <Image 
                  src="/Damien Avatar.png" 
                  alt="Damien Hill" 
                  width={60}
                  height={60}
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <p className="text-lg italic text-foreground leading-relaxed text-justify flex-1">
                  "AI becomes powerful when it honours the human journey, we discover the real pain points, design solutions that fit, enable people to thrive, and evolve as the organisation grows."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

