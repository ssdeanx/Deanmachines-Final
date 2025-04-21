"use client";
import { Button } from "@/components/ui/button";
import { Sparkles, Plus } from "lucide-react";

/**
 * ChatReactionBar
 * Emoji/reaction bar for messages, fully accessible and styled with Bio Mech Weav overlays.
 * - Bio Mech Weav overlays, glassmorphism, accessibility, micro-interactions
 * - Modular and ready for extensibility
 */
export default function ChatReactionBar({ reactions }: { reactions: Record<string, number> }) {
  const emojis = Object.keys(reactions);
  return (
    <div className="relative flex gap-2 items-center p-1 bg-card-membrane/60 backdrop-blur rounded-xl shadow border border-[var(--color-border)] animate-fadeIn focus-within:ring-2 focus-within:ring-accent" aria-label="Reaction bar" tabIndex={0}>
      {/* Bio Mech Weav SVG Overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10 -z-10" aria-hidden>
        <defs>
          <linearGradient id="reaction-fiber" x1="0" y1="0" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent)" />
            <stop offset="100%" stopColor="var(--color-primary)" />
          </linearGradient>
        </defs>
        <path d="M0,6 Q24,12 48,6 T96,6" fill="none" stroke="url(#reaction-fiber)" strokeWidth="2" opacity="0.16" />
      </svg>
      {emojis.length > 0 ? (
        emojis.map((emoji) => (
          <Button
            key={emoji}
            variant="ghost"
            size="sm"
            className="flex items-center gap-1 rounded-full text-lg px-3 py-1 transition-all hover:bg-accent/20 focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={`Reacted with ${emoji}`}
            tabIndex={0}
          >
            <span>{emoji}</span>
            <span className="text-xs font-bold">{reactions[emoji]}</span>
          </Button>
        ))
      ) : (
        <span className="text-xs text-[var(--color-muted-foreground)]">No reactions yet</span>
      )}
      <Button
        variant="outline"
        size="icon"
        className="rounded-full ml-1 hover:bg-accent/10 focus-visible:ring-2 focus-visible:ring-accent"
        aria-label="Add reaction"
        tabIndex={0}
      >
        <Plus className="w-4 h-4 text-accent" />
      </Button>
    </div>
  );
}
