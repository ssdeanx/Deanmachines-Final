import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

/**
 * ChatSearch
 * Search bar for chat messages (2025 standards).
 * - Bio Mech Weav overlays, glassmorphism, accessibility, micro-interactions
 * - Modular and ready for extensibility
 */
export default function ChatSearch() {
  return (
    <form className="relative flex items-center gap-2 px-3 py-2 bg-card-membrane/80 border-b border-[var(--color-border)] rounded-t-xl shadow focus-within:ring-2 focus-within:ring-accent" aria-label="Chat search" tabIndex={0}>
      {/* Bio Mech Weav SVG Overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10 -z-10" aria-hidden>
        <defs>
          <linearGradient id="search-fiber" x1="0" y1="0" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent)" />
            <stop offset="100%" stopColor="var(--color-primary)" />
          </linearGradient>
        </defs>
        <path d="M0,4 Q32,8 64,4 T128,4" fill="none" stroke="url(#search-fiber)" strokeWidth="2" opacity="0.13" />
      </svg>
      <Input
        type="search"
        className="flex-1 rounded-lg px-3 py-1 bg-transparent outline-none text-[var(--color-foreground)] placeholder:text-[var(--color-muted-foreground)]"
        placeholder="Search messages..."
        aria-label="Search messages"
      />
      <Button type="submit" variant="ghost" size="icon" aria-label="Search" className="hover:bg-accent/10 focus-visible:ring-2 focus-visible:ring-accent">
        <Search className="w-5 h-5 text-accent" />
      </Button>
    </form>
  );
}
