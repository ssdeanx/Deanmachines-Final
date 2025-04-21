import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { Paperclip } from "lucide-react";
import { useRef, useState } from "react";

// Input bar for chat (multi-modal)
export default function ChatInput() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const promptSuggestions = [
    "Summarize my last upload.",
    "Send a code snippet.",
    "Attach a file."
  ];

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleFileRemove = () => {
    setSelectedFile(null);
  };

  return (
    <form className="flex items-center gap-2 p-4 border-t border-[var(--color-border)] card-membrane bg-card-membrane/80 backdrop-blur-lg rounded-b-xl shadow-[0_0_18px_3px_var(--color-accent)] relative overflow-visible">
      {/* SVG Fiber Overlay for Bio-Mechanical Weave */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10 -z-10" aria-hidden="true">
        <defs>
          <linearGradient id="input-fiber" x1="0" y1="0" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent)" />
            <stop offset="100%" stopColor="var(--color-primary)" />
          </linearGradient>
        </defs>
        <path d="M0,20 Q80,40 160,20 T320,20" fill="none" stroke="url(#input-fiber)" strokeWidth="8" opacity="0.16" />
        <path d="M0,45 Q100,60 200,45 T400,45" fill="none" stroke="url(#input-fiber)" strokeWidth="4" opacity="0.09" />
      </svg>
      <div className="flex flex-col gap-2">
        {promptSuggestions.map((suggestion, index) => (
          <button
            key={index}
            type="button"
            className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded-md transition-all"
            aria-label={`Prompt suggestion: ${suggestion}`}
            tabIndex={0}
          >
            {suggestion}
          </button>
        ))}
      </div>
      <Input
        placeholder="Type a message or /command..."
        className="flex-1 bg-[var(--color-background)] text-[var(--color-text-primary)]"
        aria-label="Chat input"
      />
      <button
        type="button"
        className="ml-2"
        aria-label="Attach file"
        onClick={() => fileInputRef.current?.click()}
      >
        <Paperclip className="w-4 h-4 text-[var(--color-text-secondary)]" />
      </button>
      {selectedFile && (
        <div className="flex items-center gap-2 bg-card-membrane/70 backdrop-blur rounded-lg px-2 py-1 shadow-[0_0_8px_2px_var(--color-accent)]">
          <span className="text-sm text-[var(--color-text-secondary)] truncate max-w-[120px]">{selectedFile.name}</span>
          <button
            type="button"
            className="text-xs text-[var(--color-destructive)] hover:underline"
            aria-label="Remove file"
            onClick={handleFileRemove}
          >
            Remove
          </button>
        </div>
      )}
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
        aria-label="File input"
      />
      <Button type="submit" variant="default" className="ml-2" aria-label="Send message">
        Send
      </Button>
    </form>
  );
}
