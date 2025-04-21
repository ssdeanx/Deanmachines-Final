"use client";
import { useContext, useRef } from "react";
import { ChatConversationContext } from "./ChatConversationContext";
import ChatMessage, { Message } from "./ChatMessage";

// Optionally import ChatTypingIndicator if used
// import ChatTypingIndicator from "./ChatTypingIndicator";

// Mock messages for demonstration (fix code block)
// In production, replace with real messages from context or API
const mockMessages: Record<string, Message[]> = {
  "1": [
    {
      id: "m1",
      author: "Mastra AI Support",
      avatar: "🤖",
      content: "Hello! How can I help you today?",
      type: "text",
      time: "09:00",
      reactions: { "👍": 2, "❤️": 1 },
      thread: [],
    },
    {
      id: "m2",
      author: "You",
      avatar: "🧑",
      content: "Can you summarize my last file upload?",
      type: "text",
      time: "09:01",
      reactions: {},
      thread: [
        {
          id: "t1",
          author: "Mastra AI Support",
          avatar: "🤖",
          content: "Of course! Here's a summary: ...",
          type: "text",
          time: "09:02",
          reactions: {},
          thread: [],
        },
      ],
    },
    {
      id: "m3",
      author: "You",
      avatar: "🧑",
      content: "function hello() {\n  return 'world';\n}",
      type: "code",
      time: "09:03",
      reactions: { "😂": 1 },
      thread: [],
    },
    {
      id: "m4",
      author: "Mastra AI Support",
      avatar: "🤖",
      content: "[View Image](#)",
      type: "image",
      imageUrl: "https://placehold.co/200x100",
      time: "09:04",
      reactions: {},
      thread: [],
    },
  ],
  "2": [
    {
      id: "m1",
      author: "Project Team",
      avatar: "👥",
      content: "Let's review the new model results.",
      type: "text",
      time: "08:00",
      reactions: {},
      thread: [],
    },
  ],
  "3": [
    {
      id: "m1",
      author: "You",
      avatar: "🧑",
      content: "Draft: Quantum Dot UI themes...",
      type: "text",
      time: "07:00",
      reactions: {},
      thread: [],
    },
  ],
};


/**
 * ChatMessageList component - renders a scrollable list of chat messages for the active conversation.
 * Uses the Message type from ChatMessage for consistency and maintainability.
 */
export default function ChatMessageList() {
  const { activeConversation } = useContext(ChatConversationContext);
  if (!activeConversation) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-8 text-muted-foreground" aria-label="No active conversation selected" tabIndex={0}>
        No active conversation selected.
      </div>
    );
  }

  const messages = mockMessages[activeConversation.id] || [];
  const ref = useRef<HTMLDivElement>(null);

  if (!messages || messages.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-8 text-muted-foreground">
        No messages yet.
      </div>
    );
  }

  return (
    <div
      className="flex flex-col gap-3 px-6 py-3 overflow-y-auto bg-card-membrane/70 backdrop-blur-xl rounded-2xl shadow-2xl border border-[var(--color-border)] relative focus-within:ring-2 focus-within:ring-accent"
      ref={ref}
      aria-label="Chat messages"
      tabIndex={0}
    >
      {/* Bio Mech Weav SVG Overlay */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-10 -z-10"
        aria-hidden
      >
        <defs>
          <linearGradient id="list-fiber" x1="0" y1="0" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent)" />
            <stop offset="100%" stopColor="var(--color-primary)" />
          </linearGradient>
        </defs>
        <path
          d="M0,30 Q120,60 240,30 T480,30"
          fill="none"
          stroke="url(#list-fiber)"
          strokeWidth="10"
          opacity="0.10"
        />
      </svg>
      {messages.map((msg) => (
        <ChatMessage
          key={msg.id}
          message={msg}
          isOwn={msg.author === "You"}
        />
      ))}
    </div>
  );
}


