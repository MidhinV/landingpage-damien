'use client';

import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ContactFormProvider } from "@/contexts/ContactFormContext";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TooltipProvider>
      <ContactFormProvider>
        <Toaster />
        {children}
      </ContactFormProvider>
    </TooltipProvider>
  );
}


