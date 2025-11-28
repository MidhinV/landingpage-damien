'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { X, Send, Mic, MicOff, Minimize2, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export function DamienChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hi! I'm Damien. How can I help you learn more about our AI solutions today?",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const agentId = process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID;

  useEffect(() => {
    if (isOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading || !agentId) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      let convId = conversationId;
      if (!convId) {
        const convResponse = await fetch('https://api.elevenlabs.io/v1/convai/conversation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'xi-api-key': process.env.NEXT_PUBLIC_ELEVENLABS_API_KEY || '',
          },
          body: JSON.stringify({
            agent_id: agentId,
          }),
        });

        if (convResponse.ok) {
          const convData = await convResponse.json();
          convId = convData.conversation_id || convData.id;
          setConversationId(convId);
        } else {
          throw new Error('Failed to create conversation');
        }
      }

      const response = await fetch(`https://api.elevenlabs.io/v1/convai/conversation/${convId}/message`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'xi-api-key': process.env.NEXT_PUBLIC_ELEVENLABS_API_KEY || '',
        },
        body: JSON.stringify({
          message: text,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const responseText = data.response?.text || data.text || data.message || 'I apologize, but I encountered an error processing your message.';
        
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: responseText,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, assistantMessage]);

        if (data.audio_url || data.audio) {
          const audioUrl = data.audio_url || data.audio;
          const audio = new Audio(audioUrl);
          audio.play().catch(() => {});
        }
      } else {
        throw new Error('Failed to get response');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "I'm sorry, I'm having trouble connecting right now. Please try again in a moment.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      sendMessage(inputValue.trim());
    }
  };

  const handleVoiceInput = async () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert('Speech recognition is not supported in your browser.');
      return;
    }

    const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => setIsListening(true);
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInputValue(transcript);
      setIsListening(false);
      sendMessage(transcript);
    };
    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => setIsListening(false);
    recognition.start();
  };

  return (
    <TooltipProvider>
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={() => setIsOpen(true)}
                className="relative w-16 h-16 rounded-full bg-primary shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center overflow-hidden border-2 border-primary/20"
                aria-label="Chat with Damien"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80" />
                <Image
                  src="/damien-photo.png"
                  alt="Damien"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover rounded-full"
                />
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-background animate-pulse" />
              </button>
            </TooltipTrigger>
            <TooltipContent side="left" className="max-w-xs">
              <p className="text-sm">Hi I am Damien! Click here to chat or talk to me</p>
            </TooltipContent>
          </Tooltip>
        )}

        {isOpen && (
          <div
            className={`bg-card border-2 border-border rounded-2xl shadow-2xl transition-all duration-300 ${
              isMinimized ? 'w-80 h-16' : 'w-96 h-[600px]'
            } flex flex-col overflow-hidden`}
          >
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-border p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20">
                  <Image
                    src="/damien-photo.png"
                    alt="Damien"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Damien</h3>
                  <p className="text-xs text-muted-foreground">AI Consultant</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setIsMinimized(!isMinimized)}
                >
                  {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => {
                    setIsOpen(false);
                    setIsMinimized(false);
                  }}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/30">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      {message.role === 'assistant' && (
                        <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-primary/20 flex-shrink-0">
                          <Image
                            src="/damien-photo.png"
                            alt="Damien"
                            width={32}
                            height={32}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                          message.role === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-card border border-border text-foreground'
                        }`}
                      >
                        <p className="text-sm leading-relaxed">{message.content}</p>
                        <span className="text-xs opacity-70 mt-1 block">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                      {message.role === 'user' && (
                        <div className="w-8 h-8 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-semibold text-primary">You</span>
                        </div>
                      )}
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex gap-3 justify-start">
                      <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-primary/20 flex-shrink-0">
                        <Image
                          src="/damien-photo.png"
                          alt="Damien"
                          width={32}
                          height={32}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="bg-card border border-border rounded-2xl px-4 py-2">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                <form onSubmit={handleSubmit} className="p-4 border-t border-border bg-background">
                  <div className="flex gap-2">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Type your message..."
                      disabled={isLoading}
                      className="flex-1"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={handleVoiceInput}
                      disabled={isLoading || isListening}
                      className={isListening ? 'bg-primary text-primary-foreground' : ''}
                    >
                      {isListening ? (
                        <MicOff className="h-4 w-4" />
                      ) : (
                        <Mic className="h-4 w-4" />
                      )}
                    </Button>
                    <Button type="submit" size="icon" disabled={isLoading || !inputValue.trim()}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </form>
              </>
            )}
          </div>
        )}
      </div>
    </TooltipProvider>
  );
}

