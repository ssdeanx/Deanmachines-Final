import { createContext, useState, useContext, ReactNode } from "react";

export type Conversation = {
  id: string;
  name: string;
  preview: string;
  unread: number;
  active: boolean;
  avatar: string;
  pinned?: boolean;
  online?: boolean;
  lastMessage?: string;
};

export type ChatConversationContextType = {
  activeConversation: Conversation | null;
  setActiveConversation: (conv: Conversation) => void;
  conversations: Conversation[];
};

/**
 * ChatConversationContext
 * Context for managing chat conversations, ready for Mastra DTOs and extensibility.
 * - Type-safe, modular, extensible, and accessible.
 */
export const ChatConversationContext = createContext<ChatConversationContextType>({
  activeConversation: null,
  setActiveConversation: () => {},
  conversations: [],
});

/**
 * ChatConversationProvider wraps children with conversation context.
 * - Prepares for real Mastra DTOs (normalized, typed data)
 * - Extensible for features like pinning, presence, unread, etc.
 * - Ensures accessibility and modularity.
 */
export function ChatConversationProvider({ children }: { children: ReactNode }) {
  // TODO: Replace mock data with normalized DTOs from Mastra API
  const [conversations, setConversations] = useState<Conversation[]>([
    {
      id: "1",
      name: "Mastra AI Support",
      preview: "How can I help you today?",
      unread: 2,
      active: true,
      avatar: "🤖",
      pinned: true,
      online: true,
      lastMessage: "How can I help you today?",
    },
    {
      id: "2",
      name: "Project Team",
      preview: "Let's review the new model results.",
      unread: 0,
      active: false,
      avatar: "👥",
      pinned: false,
      online: false,
      lastMessage: "Let's review the new model results.",
    },
    {
      id: "3",
      name: "Personal Notes",
      preview: "Draft: Quantum Dot UI themes...",
      unread: 1,
      active: false,
      avatar: "📝",
      pinned: false,
      online: true,
      lastMessage: "Draft: Quantum Dot UI themes...",
    },
  ]);
  const [activeConversation, setActiveConversation] = useState<Conversation | null>(conversations[0]);

  return (
    <ChatConversationContext.Provider
      value={{ activeConversation, setActiveConversation, conversations }}
      aria-label="Active chat conversation context"
    >
      {children}
    </ChatConversationContext.Provider>
  );
}

/**
 * Test stub for ChatConversationContext (to be implemented with Jest/Playwright)
 */
// describe('ChatConversationProvider', () => {
//   it('provides context without crashing', () => {
//     // TODO: Add test
//   });
// });
