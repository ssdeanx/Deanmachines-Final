"use client";
import { useContext } from "react";
import { ChatConversationContext, Conversation } from "./ChatConversationContext";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

/**
 * ChatHeader component - renders the header for the active conversation.
 * Shows avatar, name, unread badge, and preview/active status. Fully typed and accessible.
 */
export default function ChatHeader() {
  const { activeConversation } = useContext(ChatConversationContext);

  if (!activeConversation) {
    return (
      <header className="flex items-center gap-3 px-4 py-3 border-b border-[var(--color-border)] bg-card-membrane/80 backdrop-blur-lg rounded-t-xl shadow-[0_0_18px_3px_var(--color-accent)] relative overflow-visible min-h-[72px]">
        <span className="text-muted-foreground">No conversation selected</span>
      </header>
    );
  }

  return (
    <header className="flex items-center gap-3 px-4 py-3 border-b border-[var(--color-border)] bg-card-membrane/80 backdrop-blur-lg rounded-t-xl shadow-[0_0_18px_3px_var(--color-accent)] relative overflow-visible">
      {/* SVG Fiber Overlay for Bio-Mechanical Weave */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10 -z-10" aria-hidden="true">
        <defs>
          <linearGradient id="header-fiber" x1="0" y1="0" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent)" />
            <stop offset="100%" stopColor="var(--color-primary)" />
          </linearGradient>
        </defs>
        <path d="M0,20 Q80,40 160,20 T320,20" fill="none" stroke="url(#header-fiber)" strokeWidth="8" opacity="0.14" />
      </svg>
      <Avatar className="h-10 w-10" aria-hidden>{activeConversation.avatar}</Avatar>
      <div className="flex-1">
        <span className="font-semibold text-lg text-[var(--color-foreground)]">{activeConversation.name}</span>
        {activeConversation.unread > 0 && (
          <Badge variant="destructive" className="ml-2 animate-pulse" aria-label={`${activeConversation.unread} unread messages`}>
            {activeConversation.unread}
          </Badge>
        )}
        {/* Show preview or status */}
        <span className="block text-xs text-muted-foreground">
          {activeConversation.preview}
          {activeConversation.active ? " · Active" : ""}
        </span>
      </div>
      <Badge variant="outline" className="flex items-center gap-1 px-3 py-1 rounded-full text-xs border-[var(--color-accent)] bg-[var(--color-accent)]/20 text-[var(--color-accent)]">
        <span className="w-2 h-2 rounded-full bg-[oklch(0.88_0.2_115)] animate-pulse inline-block" aria-label={activeConversation.online ? "Online" : "Offline"} />
        {activeConversation.online ? "Online" : "Offline"}
      </Badge>
    </header>
  );
}

