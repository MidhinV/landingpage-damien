'use client';

import { Award } from "lucide-react";
import Image from "next/image";

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
          {/* Left Column */}
          <div className="space-y-12">
            {/* Damien's Photo */}
            <div className="card-elevated p-2">
              <Image 
                src="/damien-photo.png" 
                alt="Damien Hill" 
                width={400}
                height={400}
                className="w-full h-auto rounded-xl object-cover"
                priority
              />
            </div>

            {/* My Mission */}
            <div className="card-elevated p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-primary rounded-full" />
                <h3 className="text-xl font-bold text-foreground">
                  My Mission
                </h3>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">
                Make AI adoption easier, safer, faster, and more human so your organisation can operate with more clarity, alignment, and flow.
              </p>
            </div>

            {/* Quote */}
            <div className="card-elevated p-6">
              <div className="flex items-start gap-4">
                <Image 
                  src="/Damien Avatar.png" 
                  alt="Damien Hill" 
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <p className="text-base italic text-foreground leading-relaxed">
                  "The future of work isn't more software. It's intelligent agents that work alongside your people. Let's build the first one together."
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* About Damien Hill */}
            <div className="card-elevated p-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                About <span className="text-gradient">Damien Hill</span>
              </h2>
              <div className="space-y-4">
                <p className="text-base text-foreground leading-relaxed">
                  With a career spanning digital health, care services, quality systems, business analysis, and organisational transformation, I bring a rare blend of frontline experience and strategic insight to every AI project.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  I've spent years inside complex organisations, using a variety of roles to understand how people actually work and interact with digital systems, how processes really flow, where information bottlenecks, and why traditional technology often fails to deliver on its promises.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Solutions that utilise existing workflows, reduce friction, improve accuracy, and make knowledge easier to access all without overwhelming teams or disrupting operations.
                </p>
              </div>
            </div>

            {/* Official Partner */}
            <div className="card-elevated p-6">
              <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">OFFICIAL PARTNER</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-lg font-bold text-foreground">MultipleAI Solutions</p>
                  <p className="text-sm text-muted-foreground">Enterprise AI Solutions & Implementation</p>
                </div>
              </div>
            </div>

            {/* Backed by MultipleAI */}
            <div className="card-elevated p-6">
              <p className="text-base text-foreground leading-relaxed font-semibold mb-4">
                I'm also backed by MultipleAI, a world-class technical team specialising in advanced AI agents and enterprise-grade solutions.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                Together, we combine my on the ground organisational expertise with their deep technical capability, giving you both safety and speed in your AI implementation.
              </p>
              <p className="text-base text-foreground leading-relaxed font-semibold mb-3">
                What you get is the best of both worlds:
              </p>
              <ul className="space-y-2 text-base text-muted-foreground leading-relaxed">
                <li>• A consultant who understands business, systems, and people and the realities of developing software solutions.</li>
                <li>• A technical team capable of building fast, stable, scalable AI agents.</li>
                <li>• A delivery process that produces results in days and weeks not months and years.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
