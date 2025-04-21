"use client";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import ChatReactionBar from "./ChatReactionBar";
import ChatThread from "./ChatThread";

// Message type definition for robust typing
export interface Message {
  id: string;
  author: string;
  avatar?: string;
  content: string;
  type: "text" | "code" | "image";
  time?: string;
  reactions?: Record<string, number>;
  thread?: Message[];
  imageUrl?: string;
  unread?: boolean;
}

// Utility for conditional class names
function cn(...args: (string | undefined | false | null)[]) {
  return args.filter(Boolean).join(' ');
}

export interface ChatMessageProps {
  message: Message;
  isOwn?: boolean;
}

/**
 * ChatMessage component - renders a single chat message (text, code, or image),
 * with author, avatar, timestamp, reactions, and thread. Fully typed and accessible.
 */
export default function ChatMessage({ message, isOwn }: ChatMessageProps) {
  if (!message) {
    return (
      <div className="p-3 my-2 rounded-2xl bg-red-50 text-red-700 border border-red-200">
        Invalid message data.
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative group p-3 my-2 rounded-2xl bg-card-membrane/80 backdrop-blur shadow-[0_0_12px_2px_var(--color-accent)] border border-[var(--color-border)] transition-all",
        isOwn ? "ml-auto bg-gradient-to-r from-[var(--color-accent)]/10 to-[var(--color-primary)]/10" : "mr-auto"
      )}
      aria-label={isOwn ? 'Your message' : `${message.author || 'User'}: message`}
    >
      {/* SVG Fiber Overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10 -z-10" aria-hidden="true">
        <defs>
          <linearGradient id="msg-fiber" x1="0" y1="0" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent)" />
            <stop offset="100%" stopColor="var(--color-primary)" />
          </linearGradient>
        </defs>
        <path d="M0,10 Q40,20 80,10 T160,10" fill="none" stroke="url(#msg-fiber)" strokeWidth="4" opacity="0.13" />
      </svg>
      <div className="flex items-center gap-3 mb-1">
        {message.avatar ? (
          <span className="h-8 w-8 text-2xl flex items-center justify-center bg-[var(--color-border)] rounded-full" aria-hidden>
            {message.avatar}
          </span>
        ) : (
          <span className="h-8 w-8 flex items-center justify-center bg-gray-200 rounded-full text-gray-500" aria-hidden>
            ?
          </span>
        )}
        <span className="font-semibold text-[var(--color-foreground)]">
          {message.author || 'User'}
        </span>
        {message.time && (
          <span className="text-xs text-[var(--color-muted-foreground)] ml-2">{message.time}</span>
        )}
        {message.unread && (
          <span className="ml-2 px-2 py-0.5 rounded bg-[var(--color-destructive)] text-white text-xs animate-pulse" aria-label="Unread message">
            Unread
          </span>
        )}
      </div>
      {message.type === "code" ? (
        <pre className="bg-[var(--color-code)] text-[var(--color-code-foreground)] rounded p-2 text-xs overflow-x-auto" aria-label="Code block"><code>{message.content}</code></pre>
      ) : message.type === "image" && message.imageUrl ? (
        <img src={message.imageUrl} alt="Sent image" className="rounded-lg mt-2 max-w-xs border border-[var(--color-border)]" />
      ) : (
        <span className="block text-[var(--color-foreground)] break-words">
          {message.content}
        </span>
      )}
      {message.reactions && <ChatReactionBar reactions={message.reactions} />}
      {message.thread && message.thread.length > 0 && (
        <ChatThread messages={message.thread} />
      )}
    </div>
  );
}

