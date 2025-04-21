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

export const ChatConversationContext = createContext<ChatConversationContextType>({
  activeConversation: null,
  setActiveConversation: () => {},
  conversations: [],
});

export function ChatConversationProvider({ children }: { children: ReactNode }) {
  // Same mock data as sidebar
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
    <ChatConversationContext.Provider value={{ activeConversation, setActiveConversation, conversations }}>
      {children}
    </ChatConversationContext.Provider>
  );
}
