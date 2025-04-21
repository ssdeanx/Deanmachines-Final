// Context panel for persistent info/docs
import { Info } from "lucide-react";

export default function ChatContextPanel() {
  return (
    <aside
      tabIndex={0}
      aria-label="Chat Context Panel"
      className="relative w-80 min-w-[18rem] max-w-full bg-card-membrane/80 border-l border-[var(--color-border)] flex flex-col p-6 rounded-r-2xl shadow-xl backdrop-blur-xl overflow-hidden focus:ring-2 focus:ring-accent outline-none group transition-all"
    >
      {/* Bio Mech Weav SVG Overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10 -z-10" aria-hidden>
        <defs>
          <linearGradient id="context-fiber" x1="0" y1="0" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent)" />
            <stop offset="100%" stopColor="var(--color-primary)" />
          </linearGradient>
        </defs>
        <path d="M0,32 Q120,64 240,32 T480,32" fill="none" stroke="url(#context-fiber)" strokeWidth="10" opacity="0.12" />
      </svg>
      <div className="flex items-center gap-2 mb-3">
        <Info className="w-6 h-6 text-accent animate-fadeIn" aria-hidden />
        <span className="font-bold text-lg text-[var(--color-foreground)]">Context Panel</span>
      </div>
      <div className="text-[var(--color-muted-foreground)] text-base">
        Relevant info or docs will appear here.
      </div>
    </aside>
  );
}
