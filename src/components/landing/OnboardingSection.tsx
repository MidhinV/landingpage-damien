'use client';

import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { agents } from "@/data/agents";
import { CheckCircle2 } from "lucide-react";
import { AnimatedAgentIcon } from "./AnimatedAgentIcon";

// Component to handle animated illustrations with fallback
function AgentAnimatedImage({ animatedSrc, staticSrc, alt }: { animatedSrc?: string; staticSrc?: string; alt: string }) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(animatedSrc || staticSrc);
  
  // Try static image if animated fails
  const tryStaticFallback = () => {
    if (animatedSrc && currentSrc === animatedSrc && staticSrc) {
      setCurrentSrc(staticSrc);
      setImageError(false);
    } else {
      setImageError(true);
    }
  };
  
  if (!currentSrc || imageError) {
    // Show a friendly placeholder if image fails to load
    return (
      <div className="w-full md:w-48 h-32 rounded-lg border border-border/50 flex-shrink-0 bg-white p-2 flex items-center justify-center">
        <div className="text-xs text-muted-foreground text-center px-2">
          Illustration coming soon
        </div>
      </div>
    );
  }
  
  const isGif = currentSrc?.toLowerCase().endsWith('.gif');
  const isLottie = currentSrc?.toLowerCase().endsWith('.json');
  
  return (
    <div className="relative w-full md:w-48 h-32 rounded-lg overflow-hidden border border-border/50 flex-shrink-0 bg-white p-2">
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 animate-pulse" />
      )}
      {isGif || !isLottie ? (
        <img
          src={currentSrc}
          alt={alt}
          className={`w-full h-full object-contain transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onError={() => {
            console.log('Image failed to load, trying fallback:', currentSrc);
            tryStaticFallback();
          }}
          onLoad={() => {
            setImageLoaded(true);
          }}
        />
      ) : (
        // For Lottie animations, you would use a Lottie player library here
        <div className="w-full h-full flex items-center justify-center text-xs text-muted-foreground">
          Lottie animation support coming soon
        </div>
      )}
    </div>
  );
}

export function OnboardingSection() {
  const [selectedAgent, setSelectedAgent] = useState<typeof agents[0] | null>(null);

  return (
    <section id="onboarding-ai" className="py-32 relative overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-10 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              AI Agents You Can Put to Work in{" "}
              <span className="text-gradient">Your Business</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I partner with <strong>MultipleAI</strong> to bring you a full suite of practical, ready to deploy AI agents. Each one is designed to handle a specific part of your business, from reception and admin through to sales, marketing, support, finance, and security.
            </p>
          </div>

          {/* Agents Grid */}
          <div className="space-y-6 mb-12">
            {/* First 9 agents in 3-column grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {agents.slice(0, 9).map((agent) => {
                return (
                  <button
                    key={agent.id}
                    onClick={() => setSelectedAgent(agent)}
                    className="card-elevated p-6 text-left hover-lift group transition-all duration-300 hover:border-primary/50"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <AnimatedAgentIcon 
                        Icon={agent.icon} 
                        agentId={agent.id}
                        className="flex-shrink-0"
                      />
                      <div className="flex-1">
                        <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                          {agent.name}
                        </h3>
                        <p className="text-sm text-primary font-medium mb-2">
                          {agent.tagline}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 text-justify">
                      {agent.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-sm text-primary font-medium">
                      Learn more
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Last 2 agents centered */}
            <div className="flex justify-center gap-6 flex-wrap">
              {agents.slice(9).map((agent) => {
                return (
                  <button
                    key={agent.id}
                    onClick={() => setSelectedAgent(agent)}
                    className="card-elevated p-6 text-left hover-lift group transition-all duration-300 hover:border-primary/50 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-md"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <AnimatedAgentIcon 
                        Icon={agent.icon} 
                        agentId={agent.id}
                        className="flex-shrink-0"
                      />
                      <div className="flex-1">
                        <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                          {agent.name}
                        </h3>
                        <p className="text-sm text-primary font-medium mb-2">
                          {agent.tagline}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 text-justify">
                      {agent.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-sm text-primary font-medium">
                      Learn more
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* Agent Detail Modal */}
      <Dialog open={!!selectedAgent} onOpenChange={() => setSelectedAgent(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedAgent && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <AnimatedAgentIcon 
                    Icon={selectedAgent.icon} 
                    agentId={selectedAgent.id}
                    className="flex-shrink-0"
                  />
                  <DialogTitle className="text-2xl">{selectedAgent.name}</DialogTitle>
                </div>
                <DialogDescription className="text-base font-semibold text-primary">
                  {selectedAgent.tagline}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6 mt-4">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/* Animated Agent Illustration: Friendly decorative element */}
                  {(selectedAgent.animatedImage || selectedAgent.image) && (
                    <AgentAnimatedImage 
                      animatedSrc={selectedAgent.animatedImage} 
                      staticSrc={selectedAgent.image}
                      alt={selectedAgent.name} 
                    />
                  )}
                  
                  <div className="flex-1">
                    <p className="text-base text-foreground leading-relaxed text-justify">
                      {selectedAgent.description}
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-3">Key Features</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {selectedAgent.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {selectedAgent.useCases && selectedAgent.useCases.length > 0 && (
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-foreground font-medium">
                      {selectedAgent.useCases[0]}
                    </p>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
      
      {/* Closing Note */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Want to see these in action for your organisation?<br />
          <strong className="text-foreground">I can walk you through live demos and help you choose the right mix of agents for your needs.</strong>
        </p>
      </div>
    </section>
  );
}

