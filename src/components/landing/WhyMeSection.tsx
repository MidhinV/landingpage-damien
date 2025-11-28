'use client';

import { Award, Handshake, MessageSquare, Puzzle, Shield } from "lucide-react";
import Image from "next/image";

const reasons = [
  {
    icon: Handshake,
    title: "Bridge Two Worlds",
    description: "Connecting human-centred care with advanced digital systems.",
  },
  {
    icon: MessageSquare,
    title: "Complex to Simple",
    description: "Translating complex ideas into simple, actionable steps.",
  },
  {
    icon: Puzzle,
    title: "Balance Human & Technical",
    description: "Finding the balance for sustainable transformation.",
  },
  {
    icon: Shield,
    title: "Deep Industry Experience",
    description: "Frontline support, training, and large-scale digital transformation.",
  },
];

export function WhyMeSection() {
  return (
    <section id="why-me" className="py-32 relative overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-1/4 left-0 w-1/4 h-1/2 bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-10 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Text */}
          <div className="space-y-8">
            <div>
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
                Why Work With Me
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Experience That{" "}
                <span className="text-gradient">Makes the Difference</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Deep technical understanding meets genuine empathy. Whether you're exploring AI or scaling solutions, 
                I help you navigate with confidence.
              </p>
            </div>

            {/* MultipleAI Image */}
            <div className="relative max-w-md">
              <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl blur-lg" />
              <div className="relative card-elevated p-2">
                <Image 
                  src="/MultipleAI.png" 
                  alt="MultipleAI Solutions - Enterprise AI Solutions" 
                  width={400}
                  height={200}
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Reasons Grid & Partner Badge */}
          <div className="space-y-6 lg:pt-12">
            {/* Reasons Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {reasons.map((reason, index) => {
                const isPrimary = index % 2 === 0;
                
                return (
                  <div
                    key={reason.title}
                    className={`group hover-lift ${
                      isPrimary 
                        ? "card-elevated bg-gradient-to-br from-primary/5 to-transparent border-primary/20" 
                        : "card-minimal"
                    }`}
                  >
                    <div className="p-6 space-y-3">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isPrimary
                          ? "bg-primary/10 group-hover:bg-primary/20"
                          : "bg-muted group-hover:bg-primary/10"
                      }`}>
                        <reason.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-bold text-lg">{reason.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Partner Badge */}
            <div className="card-elevated p-5 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-1">Official Partner</p>
                  <p className="text-base font-bold text-foreground">MultipleAI Solutions</p>
                  <p className="text-xs text-muted-foreground mt-1">Enterprise AI Solutions & Implementation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
