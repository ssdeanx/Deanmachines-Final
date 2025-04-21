import { Button } from "@/components/ui/button";

// Emoji/reaction bar for messages
export default function ChatReactionBar({ reactions }: { reactions: Record<string, number> }) {
  const emojis = Object.keys(reactions);
  return (
    <div className="flex gap-2 items-center p-1">
      {emojis.length > 0 ? (
        emojis.map((emoji) => (
          <Button
            key={emoji}
            variant="ghost"
            size="sm"
            className="flex items-center gap-1 rounded-full text-lg px-3 py-1"
            aria-label={`Reacted with ${emoji}`}
          >
            <span>{emoji}</span>
            <span className="text-xs font-bold">{reactions[emoji]}</span>
          </Button>
        ))
      ) : (
        <span className="text-xs text-[var(--color-muted-foreground)]">No reactions yet</span>
      )}
      <Button
        variant="outline"
        size="icon"
        className="rounded-full ml-1"
        aria-label="Add reaction"
      >
        ➕
      </Button>
    </div>
  );
}
