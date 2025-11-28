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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium animate-fade-in-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
              <Sparkles className="w-4 h-4" />
              <span>Bespoke AI Solutions</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] animate-fade-in-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              From Static Content to{" "}
              <span className="text-gradient">Smart Conversations</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
              Transform your knowledge into intelligent AI agents that understand your business.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
              <Button variant="hero" size="xl" onClick={openForm}>
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="xl" onClick={openForm}>
                Contact Us
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border animate-fade-in-up opacity-0" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground mt-1">Availability</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-primary">90%</div>
                <div className="text-sm text-muted-foreground mt-1">Query Resolution</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-primary">Days</div>
                <div className="text-sm text-muted-foreground mt-1">To Deploy</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative flex flex-col items-center justify-center animate-slide-in-right opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            {/* Logo Container */}
            <div className="relative mb-8">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-xl" />
              <div className="relative bg-card border-2 border-border rounded-2xl p-8 shadow-xl">
                <Image 
                  src="/energy-of-now-logo.png" 
                  alt="Energy of Now" 
                  width={256}
                  height={256}
                  className="w-56 md:w-64 h-auto"
                />
              </div>
            </div>
            
            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-md">
              <div className="card-elevated p-6 text-center group hover-lift">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-sm mb-1">Rapid Deployment</h3>
                <p className="text-xs text-muted-foreground">Quick to market</p>
              </div>
              
              <div className="card-elevated p-6 text-center group hover-lift">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-sm mb-1">Proven Results</h3>
                <p className="text-xs text-muted-foreground">Measurable impact</p>
              </div>
            </div>

            {/* AI Badge */}
            <div className="mt-6 px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary/20 rounded-full flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-foreground">Bespoke AI</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 rounded-full border-2 border-border flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
