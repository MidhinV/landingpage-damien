'use client';

import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { AboutSection } from "@/components/landing/AboutSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { OnboardingSection } from "@/components/landing/OnboardingSection";
import { IndustriesSection } from "@/components/landing/IndustriesSection";
import { WhyMeSection } from "@/components/landing/WhyMeSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <OnboardingSection />
        <IndustriesSection />
        <WhyMeSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
