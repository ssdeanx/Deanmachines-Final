// AI Assistant card for suggestions/actions
export default function ChatAssistantCard() {
  return (
    <div className="rounded-xl px-4 py-3 bg-[oklch(0.98_0.002_90_/_0.5)] backdrop-blur-sm border border-[oklch(0.8_0.002_90_/_0.3)] shadow">
      {/* AI suggestion/action content */}
      <div className="font-semibold text-[var(--color-foreground)] mb-1">AI Suggestion</div>
      <div className="text-[var(--color-muted-foreground)]">Try asking about our new features!</div>
    </div>
  );
}
