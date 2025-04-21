"use client";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

export default function ChatPresenceIndicator() {
  return (
    <div className="flex items-center gap-2 px-4 py-1 rounded-xl bg-card-membrane/70 backdrop-blur shadow border border-[var(--color-border)] relative animate-fadeIn" aria-label="Presence indicator" tabIndex={0}>
      {/* Bio Mech Weav SVG Overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-15 -z-10" aria-hidden>
        <defs>
          <linearGradient id="presence-fiber" x1="0" y1="0" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent)" />
            <stop offset="100%" stopColor="var(--color-primary)" />
          </linearGradient>
        </defs>
        <path d="M0,4 Q16,8 32,4 T64,4" fill="none" stroke="url(#presence-fiber)" strokeWidth="2" opacity="0.18" />
      </svg>
      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse border-2 border-white" aria-label="Online status"></span>
      <Badge variant="outline" className="text-xs px-2 py-1 bg-white/30 border-accent text-accent flex items-center gap-1">
        <Sparkles className="w-3 h-3 mr-1 text-accent animate-fadeIn" /> Online
      </Badge>
    </div>
  );
}
