"use client";
import { ChevronDown } from "lucide-react";
import ChatMessage from "./ChatMessage";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Message } from "./ChatMessage";

/**
 * ChatThread
 * Renders a thread of messages (replies) in a chat conversation.
 * - Bio Mech Weav overlays, glassmorphism, accessibility, micro-interactions
 * - Modular and ready for extensibility
 */
export default function ChatThread({ messages }: { messages: Message[] }) {
  const unreadCount = messages.filter((msg) => msg.unread).length;
  return (
    <Card
      className="ml-8 border-l-2 border-[var(--color-accent)]/40 pl-4 space-y-2 card-membrane"
      role="region"
      aria-label="Chat Thread"
      tabIndex={0}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="font-semibold text-xs text-[var(--color-muted-foreground)]">Thread</span>
        {unreadCount > 0 && (
          <Badge
            variant="destructive"
            className="animate-pulse"
            aria-label={`${unreadCount} unread messages`}
          >
            {unreadCount} unread
          </Badge>
        )}
      </div>
      {messages.map((msg, idx) => (
        <ChatMessage key={msg.id || idx} message={msg} />
      ))}
    </Card>
  );
}
