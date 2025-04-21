// Attachment/file preview in chat
export default function ChatAttachmentPreview() {
  return (
    <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] p-2 flex items-center gap-2 shadow">
      {/* File icon/preview, filename, actions */}
      <span className="text-[var(--color-muted-foreground)]">📄</span>
      <span className="truncate">filename.pdf</span>
      <button className="ml-auto text-xs text-red-500 hover:underline">Remove</button>
    </div>
  );
}
