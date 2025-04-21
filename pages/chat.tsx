import { ChatConversationProvider } from "../src/components/chat/ChatConversationContext";
import ChatLayout from "../src/components/chat/ChatLayout";
import ChatSidebar from "../src/components/chat/ChatSidebar";
import ChatHeader from "../src/components/chat/ChatHeader";
import ChatMessageList from "../src/components/chat/ChatMessageList";
import ChatInput from "../src/components/chat/ChatInput";
import ChatContextPanel from "../src/components/chat/ChatContextPanel";

export default function ChatPage() {
  return (
    <ChatConversationProvider>
      <ChatLayout>
        <ChatSidebar />
        <div className="flex flex-col flex-1 h-full">
          <ChatHeader />
          <ChatMessageList />
          <ChatInput />
        </div>
        <ChatContextPanel />
      </ChatLayout>
    </ChatConversationProvider>
  );
}
