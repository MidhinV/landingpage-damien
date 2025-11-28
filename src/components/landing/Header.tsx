'use client';

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useContactForm } from "@/contexts/ContactFormContext";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#onboarding-ai" },
  { label: "Industries", href: "#industries" },
  { label: "Why Me", href: "#why-me" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openForm } = useContactForm();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm py-3" 
          : "bg-background/80 backdrop-blur-sm py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-end">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-200 rounded-lg hover:bg-muted/50"
            >
              {item.label}
            </a>
          ))}
          <div className="ml-4 pl-4 border-l border-border">
            <Button variant="default" size="default" onClick={openForm}>
              Let's Talk
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2 rounded-lg hover:bg-muted transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-card border-t border-border shadow-lg animate-scale-in">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-3 text-base font-medium text-foreground hover:text-primary transition-colors duration-200 rounded-lg hover:bg-muted"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 mt-2 border-t border-border">
              <Button variant="default" size="lg" className="w-full" onClick={() => { openForm(); setIsMobileMenuOpen(false); }}>
                Let's Talk
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
