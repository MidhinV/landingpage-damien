'use client';

import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, CheckCircle2 } from "lucide-react";
import { useContactForm } from "@/contexts/ContactFormContext";

export function CTASection() {
  const { openForm } = useContactForm();
  
  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-br from-primary/5 via-muted/30 to-secondary/5">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="card-elevated p-12 md:p-16 text-center space-y-8 bg-background/80 backdrop-blur-sm">
            {/* Icon */}
            <div className="w-20 h-20 rounded-2xl bg-primary/10 border-2 border-primary/20 flex items-center justify-center mx-auto">
              <MessageCircle className="w-10 h-10 text-primary" />
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Ready to Explore What AI Agents Could Do in{" "}
                <span className="text-gradient">Your Organisation</span>?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Let's explore where AI agents can save time, reduce friction, and create capacity.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button variant="outline" size="xl" onClick={openForm}>
                <Mail className="w-5 h-5" />
                Schedule a Call
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-border space-y-4">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>No obligation</span>
                <span className="text-border">•</span>
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Free initial consultation</span>
                <span className="text-border">•</span>
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Rapid response</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span>Available Now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
