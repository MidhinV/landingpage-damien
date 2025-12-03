'use client';

import { AlertTriangle, CheckCircle2, XCircle } from "lucide-react";
import Image from "next/image";

export function TraditionalVsAI() {
  return (
    <section className="py-32 relative overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-tl from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-10 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Traditional Software vs AI Agents
          </h2>
          <p className="text-lg text-muted-foreground">
            Traditional software development forces trade offs, while AI Agents remove those constraints entirely.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {/* Traditional Software */}
          <div className="card-elevated p-8 border-destructive/20 bg-destructive/5">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-8 h-8 text-destructive" />
              <h3 className="text-2xl font-bold text-foreground">Traditional Software</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground"><strong>Slow timelines</strong> - months or years</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground"><strong>High cost</strong> - expensive builds + maintenance</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground"><strong>Rigid</strong> - difficult to update or adapt</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground"><strong>Complex change management</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground"><strong>People must learn the system</strong>, not the other way around</span>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-destructive/20">
              <p className="text-sm text-destructive font-medium">
                ⚠️ Forced trade offs between time, cost, and quality.
              </p>
            </div>
          </div>

          {/* AI Agents */}
          <div className="card-elevated p-8 border-primary/20 bg-primary/5">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle2 className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">AI Agents</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground"><strong>High quality</strong> outputs instantly</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground"><strong>Lower cost</strong> than traditional development</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground"><strong>Rapid deployment</strong> - days or weeks</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground"><strong>Continuously improves</strong> with usage</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground"><strong>Works from your knowledge</strong> so staff don't need retraining</span>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-primary/20">
              <p className="text-sm text-primary font-medium">
                🌱 AI removes the trade off. You get all three - time, cost, and quality together.
              </p>
            </div>
          </div>
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
              <p className="text-xl italic text-foreground text-justify flex-1">
                "With AI, organisations no longer have to choose between fast, accurate, or affordable, they can have all three."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

