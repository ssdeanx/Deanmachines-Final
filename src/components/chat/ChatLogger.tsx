"use client";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ListOrdered } from "lucide-react";

/**
 * ChatLogger - Displays chat logs and events for transparency/debugging.
 * 2025 standards: glassmorphism, Bio Mech Weav SVG, accessibility, micro-interactions, responsive, Shadcn UI.
 */
export function ChatLogger({ logs = [] }: { logs?: { type: string; message: string; timestamp: string }[] }) {
  const [filter, setFilter] = useState<string>("");
  const filteredLogs = filter
    ? logs.filter((log) => log.type.toLowerCase().includes(filter.toLowerCase()) || log.message.toLowerCase().includes(filter.toLowerCase()))
    : logs;

  return (
    <section
      className="relative w-full max-w-lg mx-auto bg-card-membrane/80 border border-[var(--color-border)] rounded-2xl shadow-xl p-6 mt-4 mb-2 flex flex-col gap-4 animate-fadeIn backdrop-blur-lg"
      aria-label="Chat logger"
    >
      {/* Bio Mech Weav SVG Overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10 -z-10" aria-hidden>
        <defs>
          <linearGradient id="logger-fiber" x1="0" y1="0" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent)" />
            <stop offset="100%" stopColor="var(--color-primary)" />
          </linearGradient>
        </defs>
        <path d="M0,18 Q36,36 72,18 T144,18" fill="none" stroke="url(#logger-fiber)" strokeWidth="3" opacity="0.13" />
      </svg>
      <header className="flex items-center gap-3 mb-2">
        <ListOrdered className="w-6 h-6 text-accent animate-fadeIn" />
        <h2 className="text-lg font-bold text-[var(--color-foreground)]">Chat Logger</h2>
      </header>
      <input
        type="search"
        className="rounded-lg px-3 py-1 bg-background/70 border border-[var(--color-border)] outline-none text-[var(--color-foreground)] placeholder:text-[var(--color-muted-foreground)] focus:ring-2 focus:ring-accent"
        placeholder="Filter logs..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        aria-label="Filter logs"
      />
      <ScrollArea className="max-h-60 overflow-y-auto rounded-lg border border-[var(--color-border)] bg-background/60">
        {filteredLogs.length === 0 ? (
          <div className="text-sm text-muted-foreground p-4">No logs to display.</div>
        ) : (
          <ul className="divide-y divide-[var(--color-border)]">
            {filteredLogs.map((log, idx) => (
              <li key={idx} className="flex items-start gap-3 px-3 py-2">
                <Badge className="bg-accent text-white mr-2 min-w-[60px] text-center" aria-label={log.type}>{log.type}</Badge>
                <span className="flex-1 text-[var(--color-foreground)]">{log.message}</span>
                <span className="text-xs text-muted-foreground ml-auto whitespace-nowrap">{log.timestamp}</span>
              </li>
            ))}
          </ul>
        )}
      </ScrollArea>
    </section>
  );
}

export default ChatLogger;
