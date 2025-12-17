'use client';

import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { TraditionalVsAI } from "@/components/landing/TraditionalVsAI";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { AIJourneySection } from "@/components/landing/AIJourneySection";
import { OnboardingSection } from "@/components/landing/OnboardingSection";
import { AboutSection } from "@/components/landing/AboutSection";
import { IndustriesSection } from "@/components/landing/IndustriesSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TraditionalVsAI />
        <ServicesSection />
        <AIJourneySection />
        <OnboardingSection />
        <AboutSection />
        <IndustriesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
