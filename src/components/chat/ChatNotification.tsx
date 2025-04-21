"use client";
import { Toaster } from "@/components/ui/sonner";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Sparkles } from "lucide-react";

export default function ChatNotification({ message }: { message: string }) {
  // This component renders a Sonner notification styled for Bio Mech Weav
  return (
    <div className="fixed top-6 right-6 z-50 pointer-events-none">
      <Toaster
        position="top-right"
        theme="system"
        toastOptions={{
          className: "bg-card-membrane/90 border border-[var(--color-border)] px-6 py-4 rounded-2xl shadow-2xl animate-fadeIn overflow-visible flex items-center gap-3",
          style: {
            backdropFilter: 'blur(16px)',
          },
        }}
      />
      {/* Custom notification content (Bio Mech Weav SVG overlay, icon, message) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <svg className="absolute inset-0 w-full h-full opacity-15 -z-10" aria-hidden>
          <defs>
            <linearGradient id="notif-fiber" x1="0" y1="0" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-accent)" />
              <stop offset="100%" stopColor="var(--color-primary)" />
            </linearGradient>
          </defs>
          <path d="M0,8 Q40,16 80,8 T160,8" fill="none" stroke="url(#notif-fiber)" strokeWidth="3" opacity="0.13" />
        </svg>
      </div>
      <div className="sr-only" aria-live="polite">{message}</div>
    </div>
  );
}
