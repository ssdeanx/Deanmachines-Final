"use client";
import { useContext } from "react";
import { ChatConversationContext } from "./ChatConversationContext";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

/**
 * ChatHeader - 2025 standards: glassmorphism, Bio Mech Weav SVG, animated badge, micro-interactions, accessibility.
 */
export default function ChatHeader() {
  const { activeConversation } = useContext(ChatConversationContext);

  if (!activeConversation) {
    return (
      <header
        tabIndex={0}
        aria-label="No conversation selected"
        className="flex items-center gap-3 px-6 py-4 border-b border-[var(--color-border)] bg-card-membrane/80 backdrop-blur-lg rounded-t-2xl shadow-xl min-h-[72px] outline-none focus:ring-2 focus:ring-accent"
      >
        <span className="text-muted-foreground">No conversation selected</span>
      </header>
    );
  }

  return (
    <header
      tabIndex={0}
      aria-label={`Chat header for ${activeConversation.name}`}
      className="relative flex items-center gap-4 px-6 py-4 border-b border-[var(--color-border)] bg-card-membrane/80 backdrop-blur-lg rounded-t-2xl shadow-xl overflow-visible outline-none focus:ring-2 focus:ring-accent"
    >
      {/* SVG Fiber Overlay for Bio Mech Weav theme */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10 -z-10" aria-hidden>
        <defs>
          <linearGradient id="header-fiber" x1="0" y1="0" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent)" />
            <stop offset="100%" stopColor="var(--color-primary)" />
          </linearGradient>
        </defs>
        <path d="M0,20 Q80,40 160,20 T320,20" fill="none" stroke="url(#header-fiber)" strokeWidth="8" opacity="0.14" />
      </svg>
      <Avatar className="h-12 w-12 shadow-lg ring-2 ring-accent/60" aria-label={`${activeConversation.name} avatar`}>
        {activeConversation.avatar}
      </Avatar>
      <div className="flex-1 min-w-0">
        <span className="font-bold text-xl text-[var(--color-foreground)] block truncate">
          {activeConversation.name}
        </span>
        {activeConversation.unread > 0 && (
          <Badge
            variant="destructive"
            className="ml-2 animate-pulse focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label={`${activeConversation.unread} unread messages`}
          >
            {activeConversation.unread}
          </Badge>
        )}
        <span className="block text-xs text-muted-foreground mt-1">
          {activeConversation.preview}
          {activeConversation.active ? " · Active" : ""}
        </span>
      </div>
      <Badge
        variant="outline"
        className="flex items-center gap-1 px-3 py-1 rounded-full text-xs border-[var(--color-accent)] bg-[var(--color-accent)]/20 text-[var(--color-accent)] shadow-lg animate-fadeIn"
        aria-label={activeConversation.online ? "Online" : "Offline"}
      >
        <span
          className={`w-2 h-2 rounded-full ${activeConversation.online ? "bg-green-400 animate-pulse" : "bg-gray-400"} inline-block`}
          aria-hidden
        />
        {activeConversation.online ? "Online" : "Offline"}
      </Badge>
    </header>
  );
}

