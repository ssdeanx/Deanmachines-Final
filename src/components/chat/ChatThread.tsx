"use client";
import { ChevronDown } from "lucide-react";
import ChatMessage from "./ChatMessage";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ChatThread({ messages }: { messages: any[] }) {
  const unreadCount = messages.filter((msg) => msg.unread).length;
  return (
    <Card className="ml-8 border-l-2 border-[var(--color-accent)]/40 pl-4 space-y-2 card-membrane">
      <div className="flex items-center gap-2 mb-2">
        <span className="font-semibold text-xs text-[var(--color-muted-foreground)]">Thread</span>
        {unreadCount > 0 && (
          <Badge variant="destructive" className="animate-pulse" aria-label={`${unreadCount} unread messages`}>{unreadCount} unread</Badge>
        )}
      </div>
      {messages.map((msg, idx) => (
        <ChatMessage key={msg.id || idx} message={msg} />
      ))}
    </Card>
  );
}
