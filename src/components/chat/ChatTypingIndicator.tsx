// Typing indicator for AI/user
export default function ChatTypingIndicator() {
  return (
    <div className="flex items-center gap-2 px-4 py-2">
      <span className="w-2 h-2 rounded-full bg-[oklch(0.7_0.18_250)] animate-pulse"></span>
      <span className="text-[var(--color-muted-foreground)]">AI is typing...</span>
    </div>
  );
}
