'use client';

import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnimatedAgentIconProps {
  Icon: LucideIcon;
  agentId: string;
  className?: string;
}

export function AnimatedAgentIcon({ Icon, agentId, className }: AnimatedAgentIconProps) {
  // Different animation styles for different agents
  const getAnimationClass = (id: string) => {
    switch (id) {
      case 'data-reactivation':
        return 'animate-bounce-gentle'; // Gentle bounce for reactivation
      case 'receptionist':
        return 'animate-wave'; // Wave animation for phone/receptionist
      case 'sales':
        return 'animate-pulse-gentle'; // Pulse for sales energy
      case 'admin':
        return 'animate-rotate-slow'; // Slow rotation for admin tasks
      case 'customer-support':
        return 'animate-bounce-gentle'; // Bounce for support
      case 'client-intake':
        return 'animate-scale-gentle'; // Scale animation for intake
      case 'invoice-tax':
        return 'animate-shake-gentle'; // Gentle shake for documents
      case 'onboarding':
        return 'animate-glow'; // Glow effect for onboarding
      default:
        return 'animate-pulse-gentle';
    }
  };

  return (
    <div className={cn("relative", className)}>
      {/* Decorative background glow - always visible but subtle */}
      <div className="absolute -inset-2 rounded-xl bg-primary/5 blur-md opacity-50 animate-pulse-slow" />
      
      <div className={cn(
        "relative w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center transition-all duration-300 group-hover:from-primary/20 group-hover:to-primary/10 border border-primary/20",
        getAnimationClass(agentId)
      )}>
        <Icon className="w-6 h-6 text-primary relative z-10 drop-shadow-sm" />
        
        {/* Decorative dots */}
        <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-primary/40 animate-ping" style={{ animationDuration: '2s' }} />
      </div>
    </div>
  );
}

