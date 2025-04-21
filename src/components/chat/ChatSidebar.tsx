"use client";
import { useContext, useState } from "react";
import { ChatConversationContext } from "./ChatConversationContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sparkles, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
// Import Conversation type from context for type safety and consistency
import type { Conversation } from "./ChatConversationContext";
// New sections
import ChatProviderSettings from "./ChatProviderSettings";
import AgentSection from "./AgentSection";
import ToolSection from "./ToolSection";
import MemorySection from "./MemorySection";
import WorkflowSection from "./WorkflowSection";
import AgentNetworkSection from "./AgentNetworkSection";
import TraceSection from "./TraceSection";
import EvalSection from "./EvalSection";
import ChatSettings from "./ChatSettings";
import ChatLogger from "./ChatLogger";


/**
 * ChatSidebar component - renders the sidebar with pinned and regular conversations.
 * Uses Bio-Mechanical Weave theme, accessibility, and modern UI best practices.
 */
export default function ChatSidebar() {
  // Context provides the global conversations, active conversation, and setter
  const { conversations, activeConversation, setActiveConversation } = useContext(ChatConversationContext);
  // Local state for conversations, so we can update unread counts without mutating global state
  const [localConversations, setLocalConversations] = useState<Conversation[]>(conversations || []);

  // Mark as read when selecting a conversation
  // Select a conversation and mark it as read
  const handleSelectConversation = (conv: Conversation) => {
    setActiveConversation(conv);
    setLocalConversations((prev) =>
      prev.map((c) =>
        c.id === conv.id ? { ...c, unread: 0 } : c
      )
    );
  };

  // Split conversations into pinned and regular
  const pinnedConversations = localConversations.filter((c) => c.pinned);
  const regularConversations = localConversations.filter((c) => !c.pinned);

  return (
    <aside
      className="w-80 min-h-screen sidebar-membrane flex flex-col transition-all duration-300 bg-card-membrane/80 backdrop-blur-lg rounded-r-2xl shadow-[0_0_24px_6px_var(--color-accent)] border-r border-[var(--color-border)] relative overflow-visible"
      aria-label="Chat sidebar"
      role="navigation"
    >
      {/* SVG Fiber Overlay for Bio-Mechanical Weave */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10 -z-10" aria-hidden="true">
        <defs>
          <linearGradient id="sidebar-fiber" x1="0" y1="0" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent)" />
            <stop offset="100%" stopColor="var(--color-primary)" />
          </linearGradient>
        </defs>
        <path d="M0,60 Q180,120 360,60 T720,60" fill="none" stroke="url(#sidebar-fiber)" strokeWidth="16" opacity="0.13" />
        <path d="M0,120 Q200,180 400,120 T800,120" fill="none" stroke="url(#sidebar-fiber)" strokeWidth="8" opacity="0.08" />
      </svg>

      {/* Provider/Model/API Key Section */}
      <ChatProviderSettings />
      {/* Settings Section */}
      <section className="mt-4 mb-2 px-2">
        <h3 className="text-xs font-semibold text-[var(--color-muted-foreground)] uppercase tracking-wide mb-1 pl-2">Settings</h3>
        <ChatSettings />
      </section>
      {/* Agents Section */}
      <AgentSection />
      {/* Tools Section */}
      <ToolSection />
      {/* Memory Section */}
      <MemorySection />
      {/* Workflows Section */}
      <WorkflowSection />
      {/* Agent Networks Section */}
      <AgentNetworkSection />
      {/* Traces Section */}
      <TraceSection />
      {/* Logger Section */}
      <section className="mt-4 mb-2 px-2">
        <h3 className="text-xs font-semibold text-[var(--color-muted-foreground)] uppercase tracking-wide mb-1 pl-2">Logger</h3>
        <ChatLogger />
      </section>
      {/* Evals Section */}
      <EvalSection />

      <div className="px-4 py-3 border-b border-[var(--color-border)] flex items-center justify-between mt-2">
        <span className="font-bold text-lg tracking-tight text-[var(--color-foreground)]">Chats</span>
        <Button variant="ghost" size="icon" aria-label="New chat" className="transition-all hover:bg-accent/30 focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]">
          <Plus className="w-5 h-5 text-accent" />
        </Button>
      </div>
      <ScrollArea className="flex-1 overflow-y-auto">
        {pinnedConversations.length > 0 && (
          <div className="px-4 pt-3 pb-1 text-xs text-[var(--color-muted-foreground)] uppercase tracking-wide">Pinned</div>
        )}
        {pinnedConversations.map((conv) => (
          <button
            key={conv.id}
            className={cn(
              "group w-full flex items-center gap-3 px-4 py-2 rounded-xl mb-1 focus:outline-none transition-all focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]",
              activeConversation?.id === conv.id
                ? "bg-primary/10 shadow border border-primary/30"
                : "hover:bg-accent/50 focus:bg-accent/70"
            )}
            onClick={() => handleSelectConversation(conv)}
            aria-current={activeConversation?.id === conv.id ? 'page' : undefined}
            aria-label={`Select conversation with ${conv.name}`}
            tabIndex={0}
            role="button"
          >
            <span className="relative">
              <Avatar>
                <span className="text-xl">{conv.avatar}</span>
              </Avatar>
              <span
                className={cn(
                  "absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-background",
                  conv.online ? "bg-green-500 animate-pulse" : "bg-gray-400"
                )}
                aria-label={conv.online ? "Online" : "Offline"}
              />
            </span>
            <span className="flex flex-col flex-1 text-left">
              <span className="font-medium text-sm truncate">{conv.name}</span>
              <span className="text-xs text-muted-foreground truncate">
                {conv.lastMessage}
              </span>
            </span>
            {(conv.unread ?? 0) > 0 && (
              <Badge className="ml-2 bg-primary text-white animate-bounce" aria-label={`${conv.unread ?? 0} unread messages`}>
                {conv.unread ?? 0}
              </Badge>
            )}
            {conv.pinned && (
              <span className="ml-1 text-yellow-400" aria-label="Pinned">★</span>
            )}
          </button>
        ))}
        {regularConversations.length > 0 && (
          <div className="px-4 pt-3 pb-1 text-xs text-muted-foreground uppercase tracking-wide">All Chats</div>
        )}
        {regularConversations.map((conv) => (
          <button
            key={conv.id}
            className={cn(
              "group w-full flex items-center gap-3 px-4 py-2 rounded-xl mb-1 focus:outline-none transition-all focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]",
              activeConversation?.id === conv.id
                ? "bg-primary/10 shadow border border-primary/30"
                : "hover:bg-accent/50 focus:bg-accent/70"
            )}
            onClick={() => handleSelectConversation(conv)}
            aria-current={activeConversation?.id === conv.id ? 'page' : undefined}
            aria-label={`Select conversation with ${conv.name}`}
            tabIndex={0}
            role="button"
          >
            <span className="relative">
              <Avatar>
                <span className="text-xl">{conv.avatar}</span>
              </Avatar>
              <span
                className={cn(
                  "absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-background",
                  conv.online ? "bg-green-500 animate-pulse" : "bg-gray-400"
                )}
                aria-label={conv.online ? "Online" : "Offline"}
              />
            </span>
            <span className="flex flex-col flex-1 text-left">
              <span className="font-medium text-sm truncate">{conv.name}</span>
              <span className="text-xs text-muted-foreground truncate">
                {conv.lastMessage}
              </span>
            </span>
            {(conv.unread ?? 0) > 0 && (
              <Badge className="ml-2 bg-primary text-white animate-bounce" aria-label={`${conv.unread ?? 0} unread messages`}>
                {conv.unread ?? 0}
              </Badge>
            )}
          </button>
        ))}
      </ScrollArea>
    </aside>
  );
}
