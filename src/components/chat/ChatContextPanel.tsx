// Context panel for persistent info/docs
export default function ChatContextPanel() {
  return (
    <aside className="w-80 bg-[var(--color-card)] border-l border-[var(--color-border)] flex flex-col p-4">
      {/* Contextual info, docs, AI memory */}
      <div className="font-semibold mb-2">Context Panel</div>
      <div className="text-[var(--color-muted-foreground)]">Relevant info or docs will appear here.</div>
    </aside>
  );
}
