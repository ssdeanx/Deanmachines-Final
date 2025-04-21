// Presence indicator for users/AI
export default function ChatPresenceIndicator() {
  return (
    <div className="flex items-center gap-1 px-4 py-1">
      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
      <span className="text-xs text-[var(--color-muted-foreground)]">Online</span>
    </div>
  );
}
