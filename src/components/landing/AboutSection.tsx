'use client';

import { Cpu, Heart, Lightbulb, Users, Award } from "lucide-react";
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

            {/* Official Partner Badge */}
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

            {/* Mission */}
            <div className="card-elevated p-8 space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full" />
                <h3 className="text-2xl font-bold text-foreground">
                  My Mission
                </h3>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed text-justify">
                Make AI adoption easier, safer, faster, and more human so your organisation can operate with more clarity, alignment, and flow.
              </p>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-8 lg:pt-32">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                About <span className="text-gradient">Damien Hill</span>
              </h2>
            </div>
            
            {/* Introduction */}
            <div className="space-y-4">
              <p className="text-lg text-foreground leading-relaxed font-semibold text-justify">
                With a career spanning digital health, care services, quality systems, business analysis, and organisational transformation, I bring a rare blend of frontline experience and strategic insight to every AI project.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed text-justify">
                I've spent years inside complex organisations, using a variety of roles to understand how people actually work and interact with digital systems, how processes really flow, where information bottlenecks, and why traditional technology often fails to deliver on its promises.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed text-justify">
                Solutions that utilise existing workflows, reduce friction, improve accuracy, and make knowledge easier to access all without overwhelming teams or disrupting operations.
              </p>
            </div>

            {/* Quote */}
            <div className="card-elevated p-8 space-y-4 border-primary/20">
              <div className="flex items-start gap-4">
                <Image 
                  src="/Damien Avatar.png" 
                  alt="Damien Hill" 
                  width={60}
                  height={60}
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <p className="text-lg italic text-foreground leading-relaxed text-justify flex-1">
                  "The future of work isn't more software. It's intelligent agents that work alongside your people. Let's build the first one together."
                </p>
              </div>
            </div>

            {/* MultipleAI Partnership */}
            <div className="card-minimal p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 space-y-4">
              <p className="text-base text-foreground leading-relaxed font-semibold text-justify">
                I'm also backed by MultipleAI, a world-class technical team specialising in advanced AI agents and enterprise-grade solutions.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed text-justify">
                Together, we combine my on the ground organisational expertise with their deep technical capability, giving you both safety and speed in your AI implementation.
              </p>
              <div className="space-y-2 pt-2">
                <p className="text-base text-foreground leading-relaxed font-semibold text-justify">
                  What you get is the best of both worlds:
                </p>
                <ul className="space-y-1 text-base text-muted-foreground leading-relaxed">
                  <li className="text-justify">• A consultant who understands business, systems, and people and the realities of developing software solutions.</li>
                  <li className="text-justify">• A technical team capable of building fast, stable, scalable AI agents.</li>
                  <li className="text-justify">• A delivery process that produces results in days and weeks not months and years.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
