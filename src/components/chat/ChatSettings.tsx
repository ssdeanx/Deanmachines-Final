"use client";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Sparkles, Settings2 } from "lucide-react";

/**
 * ChatSettings - User settings for chat experience (theme, notifications, etc.)
 * 2025 standards: glassmorphism, Bio Mech Weav SVG, accessibility, micro-interactions, responsive, Shadcn UI.
 */
export function ChatSettings() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <section
      className="relative w-full max-w-md mx-auto bg-card-membrane/80 border border-[var(--color-border)] rounded-2xl shadow-xl p-6 mt-4 mb-2 flex flex-col gap-5 animate-fadeIn backdrop-blur-lg"
      aria-label="Chat settings"
    >
      {/* Bio Mech Weav SVG Overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10 -z-10" aria-hidden>
        <defs>
          <linearGradient id="settings-fiber" x1="0" y1="0" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent)" />
            <stop offset="100%" stopColor="var(--color-primary)" />
          </linearGradient>
        </defs>
        <path d="M0,24 Q48,48 96,24 T192,24" fill="none" stroke="url(#settings-fiber)" strokeWidth="4" opacity="0.13" />
      </svg>
      <header className="flex items-center gap-3 mb-2">
        <Settings2 className="w-6 h-6 text-accent animate-fadeIn" />
        <h2 className="text-lg font-bold text-[var(--color-foreground)]">Chat Settings</h2>
      </header>
      <div className="flex items-center justify-between gap-2">
        <span className="font-medium text-[var(--color-foreground)]">Enable Notifications</span>
        <Switch
          checked={notifications}
          onCheckedChange={setNotifications}
          aria-label="Toggle notifications"
        />
      </div>
      <div className="flex items-center justify-between gap-2">
        <span className="font-medium text-[var(--color-foreground)]">Dark Mode</span>
        <Switch
          checked={darkMode}
          onCheckedChange={setDarkMode}
          aria-label="Toggle dark mode"
        />
      </div>
      <Button variant="outline" className="mt-4 self-end" aria-label="Save settings">
        <Sparkles className="w-4 h-4 mr-1" /> Save
      </Button>
    </section>
  );
}

export default ChatSettings;
