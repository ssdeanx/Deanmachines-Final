// Search bar for chat messages
export default function ChatSearch() {
  return (
    <form className="flex items-center gap-2 p-2 bg-[var(--color-card)] border-b border-[var(--color-border)]">
      <input
        type="search"
        className="flex-1 rounded-lg px-3 py-1 bg-transparent outline-none text-[var(--color-foreground)] placeholder:text-[var(--color-muted-foreground)]"
        placeholder="Search messages..."
      />
      <button type="submit" className="text-[oklch(0.8_0.2_145)] font-semibold">Search</button>
    </form>
  );
}
