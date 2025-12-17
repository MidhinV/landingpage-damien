'use client';

import { Linkedin, Mail, ExternalLink } from "lucide-react";
import Image from "next/image";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#onboarding-ai" },
  { label: "Industries", href: "#industries" },
  { label: "Why Me", href: "#why-me" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t-2 border-border bg-muted/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 section-pattern opacity-5" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="py-16 grid md:grid-cols-3 gap-12 items-start">
          {/* Brand */}
          <div className="space-y-4">
            <Image src="/energy-of-now-logo.png" alt="Energy of Now" width={120} height={48} className="h-12 w-auto" />
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Transforming knowledge into intelligent AI agents that understand your business.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-6 text-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact & Partner */}
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-6 text-foreground">Connect</h4>
              <div className="flex gap-3">
                <a
                  href="mailto:damien@energyofnow.com"
                  className="w-12 h-12 rounded-xl bg-card border-2 border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-200"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/damienhillperth/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-card border-2 border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <a
                href="https://multipleai.com.au/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 group"
              >
                <span>Partner: MultipleAI</span>
                <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t-2 border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Energy of Now Pty Ltd • AI Solutions for Modern Organisations • Based in Perth, Western Australia
          </p>
          <p className="text-xs text-muted-foreground">
            Powered in partnership with MultipleAI
          </p>
        </div>
      </div>
    </footer>
  );
}
