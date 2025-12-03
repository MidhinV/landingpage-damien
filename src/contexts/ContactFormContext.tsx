'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { ContactForm } from '@/components/landing/ContactForm';

interface ContactFormContextType {
  openForm: () => void;
  closeForm: () => void;
}

const ContactFormContext = createContext<ContactFormContextType | undefined>(undefined);

export function ContactFormProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openForm = () => setIsOpen(true);
  const closeForm = () => setIsOpen(false);

  return (
    <ContactFormContext.Provider value={{ openForm, closeForm }}>
      {children}
      <ContactForm open={isOpen} onOpenChange={setIsOpen} />
    </ContactFormContext.Provider>
  );
}

export function useContactForm() {
  const context = useContext(ContactFormContext);
  if (context === undefined) {
    throw new Error('useContactForm must be used within a ContactFormProvider');
  }
  return context;
}



