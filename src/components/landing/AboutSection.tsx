'use client';

import { Cpu, Heart, Lightbulb, Users } from "lucide-react";
import Image from "next/image";

const highlights = [
  {
    icon: Heart,
    title: "People-First",
    description: "Solutions that genuinely support people",
  },
  {
    icon: Lightbulb,
    title: "Clarity",
    description: "Transforming complexity into simplicity",
  },
  {
    icon: Cpu,
    title: "Practical AI",
    description: "Technology that works for your team",
  },
  {
    icon: Users,
    title: "Alignment",
    description: "Bringing teams and technology together",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-muted/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 section-pattern opacity-10" />
      
      {/* Accent Lines */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />

      <div className="container mx-auto px-10 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Photo & Highlights */}
          <div className="space-y-10">
            {/* Damien's Photo */}
            <div className="relative max-w-sm mx-auto lg:mx-0">
              <div className="absolute -inset-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl" />
              <div className="relative">
                <div className="card-elevated p-2">
                  <Image 
                    src="/damien-photo.png" 
                    alt="Damien - AI Consultant" 
                    width={400}
                    height={400}
                    className="w-full h-auto rounded-xl object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="card-minimal p-5 hover-lift group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold mb-1.5">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-8">
            <div>
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
                About Me
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                Creating <span className="text-gradient">Clarity, Alignment</span> & Flow
              </h2>
            </div>
            
            {/* Introduction */}
            <div className="space-y-4">
              <p className="text-lg text-foreground leading-relaxed">
                Hi, I'm <span className="font-semibold text-primary">Damien</span>.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                I've worked across industries, systems, and technologies in digital health, care services, training, assessment, and large-scale transformation. This experience has shown me what creates effective outcomes.
              </p>
            </div>

            {/* Mission Section */}
            <div className="card-elevated p-8 space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full" />
                <h3 className="text-2xl font-bold text-foreground">
                  My Mission
                </h3>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">
                I transform existing knowledge into practical, people-first AI that creates clarity, alignment, and flow for organisations.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                My solutions support people by reducing friction, simplifying complexity, and making every interaction more intuitive for staff, customers, and communities.
              </p>
            </div>

            {/* Focus Areas */}
            <div className="card-minimal p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <p className="text-base text-foreground leading-relaxed">
                My bespoke AI solutions focus on <span className="font-semibold text-primary">two core areas</span> that help organisations move from complexity and overwhelm to clarity, alignment, and flow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
