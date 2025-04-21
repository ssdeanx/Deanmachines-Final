"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Paperclip, Send, XCircle, Sparkles } from "lucide-react";
import { useRef, useState } from "react";

// Input bar for chat (multi-modal, 2025 standards)
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
    <form
      className="relative flex items-center gap-3 px-5 py-4 border-t border-[var(--color-border)] bg-card-membrane/80 backdrop-blur-xl rounded-b-2xl shadow-xl overflow-visible focus-within:ring-2 focus-within:ring-accent"
      aria-label="Chat input form"
      tabIndex={0}
    >
      {/* Bio Mech Weav SVG Overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10 -z-10" aria-hidden>
        <defs>
          <linearGradient id="input-fiber" x1="0" y1="0" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent)" />
            <stop offset="100%" stopColor="var(--color-primary)" />
          </linearGradient>
        </defs>
        <path d="M0,20 Q80,40 160,20 T320,20" fill="none" stroke="url(#input-fiber)" strokeWidth="8" opacity="0.16" />
        <path d="M0,45 Q100,60 200,45 T400,45" fill="none" stroke="url(#input-fiber)" strokeWidth="4" opacity="0.09" />
      </svg>
      {/* Prompt Suggestions */}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            type="button"
            variant="ghost"
            className="p-2 rounded-full text-accent hover:bg-accent/10 focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Show prompt suggestions"
          >
            <Sparkles className="w-5 h-5 animate-fadeIn" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-56 p-2 bg-card-membrane/90 shadow-xl border-[var(--color-border)] rounded-xl">
          <div className="font-semibold text-[var(--color-foreground)] mb-2">Prompt Suggestions</div>
          <ul className="flex flex-col gap-1">
            {promptSuggestions.map((suggestion, index) => (
              <li key={index}>
                <Button
                  type="button"
                  variant="ghost"
                  className="w-full justify-start text-sm text-[var(--color-text-secondary)] hover:text-accent focus-visible:ring-2 focus-visible:ring-accent"
                  aria-label={`Prompt suggestion: ${suggestion}`}
                  tabIndex={0}
                >
                  {suggestion}
                </Button>
              </li>
            ))}
          </ul>
        </PopoverContent>
      </Popover>
      {/* Main Chat Input */}
      <Input
        placeholder="Type a message or /command..."
        className="flex-1 bg-[var(--color-background)] text-[var(--color-text-primary)] rounded-xl shadow focus:ring-2 focus:ring-accent"
        aria-label="Chat input"
      />
      {/* File Attach Button */}
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="ml-1 rounded-full hover:bg-accent/10 focus-visible:ring-2 focus-visible:ring-accent"
        aria-label="Attach file"
        onClick={() => fileInputRef.current?.click()}
      >
        <Paperclip className="w-5 h-5 text-accent" />
      </Button>
      {/* File Preview */}
      {selectedFile && (
        <div className="flex items-center gap-2 bg-card-membrane/70 backdrop-blur rounded-lg px-2 py-1 shadow-lg animate-fadeIn">
          <span className="text-sm text-[var(--color-text-secondary)] truncate max-w-[120px]">{selectedFile.name}</span>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="rounded-full p-1 text-destructive hover:bg-destructive/10 focus-visible:ring-2 focus-visible:ring-destructive"
            aria-label="Remove file"
            onClick={handleFileRemove}
          >
            <XCircle className="w-4 h-4" />
          </Button>
        </div>
      )}
      {/* Hidden File Input */}
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
        aria-label="File input"
      />
      {/* Send Button */}
      <Button type="submit" variant="secondary" className="ml-1 rounded-full p-2 shadow-lg focus-visible:ring-2 focus-visible:ring-accent" aria-label="Send message">
        <Send className="w-5 h-5" />
      </Button>
    </form>
  );
}
