/**
 * ChatTypingIndicator
 * Typing indicator for chat (animated dots, accessible, overlays)
 * - Bio Mech Weav overlays, glassmorphism, accessibility, micro-interactions
 * - Modular and ready for extensibility
 */
import { useState, useEffect } from 'react';


export default function ChatTypingIndicator() {
  const [isTyping, setIsTyping] = useState(true);


  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsTyping(!isTyping);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [isTyping]);

  return (
    <div
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[oklch(0.2_0.1_230)] shadow-md"
      aria-label="AI is typing..."
      aria-busy={isTyping}
      role="status"
    >
      <span
        className={`text-[var(--color-muted-foreground)] ${
          isTyping ? 'animate-pulse' : ''
        }`}
      >
        AI is typing...
      </span>
    </div>
  );
}
