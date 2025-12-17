'use client';

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, TrendingUp, Zap } from "lucide-react";
import Image from "next/image";
import { useContactForm } from "@/contexts/ContactFormContext";

export function HeroSection() {
  const { openForm } = useContactForm();
  
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-20 bg-background">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 section-pattern opacity-20" />
      
      {/* Subtle gradient overlays */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-r from-secondary/5 to-transparent" />

      <div className="container mx-auto px-10 md:px-12 relative z-10">
        {/* Main Heading - Full Width */}
        <div className="mb-16 pt-12 md:pt-16 lg:pt-20">
          <h1 className="text-center animate-fade-in-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground mb-2">
              Transform your organisational knowledge into
            </div>
            <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-primary">
              AI that thinks and acts with you
            </div>
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left space-y-4">
            {/* Question Cards */}
            <div className="leading-relaxed space-y-4 animate-fade-in-up opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
              {/* Question 1 */}
              <div className="card-elevated p-6 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-primary/20">
                <p className="text-xl md:text-2xl font-bold mb-3 text-foreground">
                  <span className="text-primary">Tired</span> of waiting months or years for traditional software?
                </p>
                <p className="text-lg md:text-xl text-muted-foreground text-justify">
                  Modern AI agents deliver results in days and weeks, transforming your organisational knowledge into intelligent agents that understand your business.
                </p>
              </div>

              {/* Question 2 */}
              <div className="card-elevated p-6 bg-gradient-to-br from-secondary/10 via-secondary/5 to-transparent border-primary/20">
                <p className="text-xl md:text-2xl font-bold mb-3 text-foreground">
                  <span className="text-primary">Struggling</span> with scattered knowledge across multiple platforms?
                </p>
                <p className="text-lg md:text-xl text-muted-foreground text-justify">
                  AI brings everything together into one intelligent, conversational layer—no more jumping between systems to find what you need.
                </p>
              </div>

              {/* Question 3 */}
              <div className="card-elevated p-6 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-primary/20">
                <p className="text-xl md:text-2xl font-bold mb-3 text-foreground">
                  <span className="text-primary">Ready</span> for less confusion and more clarity?
                </p>
                <p className="text-lg md:text-xl text-muted-foreground text-justify">
                  Give your staff and customers operational clarity and seamless interactions across your organisation.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative flex flex-col items-center space-y-5 animate-slide-in-right opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            {/* Logo Container - Centered */}
            <div className="relative mx-auto">
              <div className="absolute -inset-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl" />
              <div className="relative bg-card border-2 border-border rounded-2xl p-7 shadow-xl">
                <Image 
                  src="/energy-of-now-logo.png" 
                  alt="Energy of Now" 
                  width={256}
                  height={256}
                  className="w-44 md:w-52 h-auto"
                />
              </div>
            </div>
            
            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              <div className="card-elevated p-5 text-center group hover-lift">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2 group-hover:bg-primary/20 transition-colors">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-sm mb-1">Rapid Deployment</h3>
                <p className="text-xs text-muted-foreground">Quick to market</p>
              </div>
              
              <div className="card-elevated p-5 text-center group hover-lift">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2 group-hover:bg-primary/20 transition-colors">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-sm mb-1">Proven Results</h3>
                <p className="text-xs text-muted-foreground">Measurable impact</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-5 w-full max-w-sm pt-3 animate-fade-in-up opacity-0" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
              <div className="text-center">
                <div className="text-2xl md:text-4xl font-bold text-primary">24/7</div>
                <div className="text-xs text-muted-foreground mt-1">Availability</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-4xl font-bold text-primary">90%</div>
                <div className="text-xs text-muted-foreground mt-1">Query Resolution</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-4xl font-bold text-primary">Days</div>
                <div className="text-xs text-muted-foreground mt-1">To Deploy</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm animate-fade-in-up opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
              <Button variant="hero" size="xl" onClick={openForm} className="flex-1">
                Start a Conversation
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="xl" onClick={openForm} className="flex-1">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
