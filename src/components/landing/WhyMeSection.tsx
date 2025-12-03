'use client';

import { Award } from "lucide-react";

export function WhyMeSection() {
  return (
    <section id="why-me" className="py-32 relative overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-10 md:px-12 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Partner Badge */}
          <div className="card-elevated p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-1">Official Partner</p>
                <p className="text-xl font-bold text-foreground">MultipleAI Solutions</p>
                <p className="text-sm text-muted-foreground mt-1">Enterprise AI Solutions & Implementation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
