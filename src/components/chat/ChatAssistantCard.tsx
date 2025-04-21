// AI Assistant card for suggestions/actions
import { Sparkles } from "lucide-react";

/**
 * ChatAssistantCard
 * Suggestion/action card for AI assistant.
 * - Bio Mech Weav overlays, glassmorphism, accessibility, micro-interactions
 * - Modular and ready for extensibility
 */
export default function ChatAssistantCard() {
  return (
    <section
      tabIndex={0}
      aria-label="AI Suggestion Card"
      className="relative rounded-2xl px-5 py-4 bg-card-membrane/80 backdrop-blur-xl border border-[var(--color-border)] shadow-xl transition-all hover:shadow-2xl focus:ring-2 focus:ring-accent outline-none group overflow-hidden"
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { /* future: trigger action */ } }}
    >
      {/* SVG Overlay for Bio Mech Weav theme */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10 -z-10" aria-hidden>
        <defs>
          <linearGradient id="assistant-fiber" x1="0" y1="0" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent)" />
            <stop offset="100%" stopColor="var(--color-primary)" />
          </linearGradient>
        </defs>
        <path d="M0,16 Q60,40 120,16 T240,16" fill="none" stroke="url(#assistant-fiber)" strokeWidth="8" opacity="0.13" />
      </svg>
      <div className="flex items-center gap-2 mb-2">
        <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-accent/30 shadow text-xl animate-fadeIn">
          <Sparkles className="w-5 h-5 text-accent animate-pulse" aria-hidden />
        </span>
        <span className="font-bold text-lg text-[var(--color-foreground)]">AI Suggestion</span>
      </div>
      <div className="text-[var(--color-muted-foreground)] text-base">
        Try asking about our new features!
      </div>
      <button
        className="mt-3 px-4 py-2 rounded-lg bg-primary text-white font-semibold shadow hover:bg-primary/80 transition focus:outline-none focus:ring-2 focus:ring-accent"
        aria-label="Try this suggestion"
        tabIndex={0}
        onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { /* future: trigger action */ } }}
      >
        Try Now
      </button>
    </section>
  );
}

/**
 * Test stub for ChatAssistantCard (to be implemented with Jest/Playwright)
 */
// describe('ChatAssistantCard', () => {
//   it('renders without crashing', () => {
//     // TODO: Add test
//   });
// });
