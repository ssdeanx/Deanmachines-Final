"use client";
import { BookOpenCheck } from "lucide-react";
import { Card } from "@/components/ui/card";

/**
 * ScenarioLibraryWidget - Carousel/list of Copilot/AI scenarios, usage stats, docs links.
 * Professional: glassmorphism, Bio Mech Weav SVG, accessibility, responsive, micro-interactions.
 */
const scenarios = [
  { title: "Summarize Conversations", usage: 82, doc: "https://docs.example.com/summarize" },
  { title: "Translate Messages", usage: 61, doc: "https://docs.example.com/translate" },
  { title: "Automate Tasks", usage: 49, doc: "https://docs.example.com/automate" },
  { title: "Export Data", usage: 22, doc: "https://docs.example.com/export" },
];

export function ScenarioLibraryWidget() {
  return (
    <Card className="relative p-5 bg-card-membrane/80 border border-[var(--color-border)] rounded-xl shadow-lg flex flex-col gap-2 min-w-[260px] min-h-[120px] backdrop-blur-lg">
      {/* Bio Mech Weav SVG Overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10 -z-10" aria-hidden>
        <defs>
          <linearGradient id="scenario-fiber" x1="0" y1="0" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent)" />
            <stop offset="100%" stopColor="var(--color-primary)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex items-center gap-2 mb-1">
        <BookOpenCheck className="w-6 h-6 text-accent animate-fadeIn" />
        <span className="text-lg font-bold text-[var(--color-foreground)]">Scenario Library</span>
      </div>
      <ul className="flex flex-col gap-1 mt-2">
        {scenarios.map((sc, idx) => (
          <li key={idx} className="flex items-center gap-2 text-sm">
            <span className="font-medium text-[var(--color-foreground)]">{sc.title}</span>
            <span className="ml-auto text-xs text-[var(--color-muted-foreground)]">{sc.usage} uses</span>
            <a href={sc.doc} target="_blank" rel="noopener noreferrer" className="text-accent underline ml-2">Docs</a>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default ScenarioLibraryWidget;
