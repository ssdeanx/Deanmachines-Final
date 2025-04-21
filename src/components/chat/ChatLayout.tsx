"use client";
import { Card } from "@/components/ui/card";

/**
 * ChatLayout
 * Main chat layout wrapper for chat panel.
 * - Bio Mech Weav overlays, glassmorphism, accessibility, micro-interactions
 * - Modular and ready for extensibility
 */
export default function ChatLayout({ children }: { children: React.ReactNode }) {
  return (
    <Card
      tabIndex={0}
      aria-label="Chat layout container"
      className="flex flex-col h-full bg-card-membrane/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-[var(--color-border)] relative overflow-visible focus-within:ring-2 focus-within:ring-accent"
    >
      {/* Bio Mech Weav SVG Overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10 -z-10" aria-hidden>
        <defs>
          <linearGradient id="layout-fiber" x1="0" y1="0" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent)" />
            <stop offset="100%" stopColor="var(--color-primary)" />
          </linearGradient>
        </defs>
        <path d="M0,40 Q150,80 300,40 T600,40" fill="none" stroke="url(#layout-fiber)" strokeWidth="12" opacity="0.12" />
      </svg>
      {children}
    </Card>
  );
}
