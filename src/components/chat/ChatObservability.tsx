"use client";
import { D3Graph } from "./D3Graph";
import { PlotlyGraph } from "./PlotlyGraph";
import { RechartsGraph } from "./RechartsGraph";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { BarChart3, LineChart, AreaChart } from "lucide-react";

/**
 * ChatObservability
 * Observability panel for chat (logs, traces, metrics)
 * - Bio Mech Weav overlays, glassmorphism, accessibility, micro-interactions
 * - Modular and ready for extensibility
 */
export function ChatObservability() {
  // Example data (replace with real analytics from Mastra backend)
  const d3Data = [
    { x: 0, y: 2 }, { x: 1, y: 8 }, { x: 2, y: 5 }, { x: 3, y: 12 }, { x: 4, y: 9 }
  ];
  const plotlyData = [
    { x: [0, 1, 2, 3, 4], y: [2, 8, 5, 12, 9], name: "Messages" }
  ];
  const rechartsData = d3Data;

  return (
    <section
      className="relative w-full max-w-2xl mx-auto bg-card-membrane/90 border border-[var(--color-border)] rounded-2xl shadow-xl p-6 my-6 flex flex-col gap-6 animate-fadeIn backdrop-blur-lg"
      aria-label="Chat analytics observability"
    >
      {/* Bio Mech Weav SVG Overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10 -z-10" aria-hidden>
        <defs>
          <linearGradient id="obs-fiber" x1="0" y1="0" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent)" />
            <stop offset="100%" stopColor="var(--color-primary)" />
          </linearGradient>
        </defs>
        <path d="M0,36 Q96,72 192,36 T384,36" fill="none" stroke="url(#obs-fiber)" strokeWidth="5" opacity="0.13" />
      </svg>
      <header className="flex items-center gap-3 mb-2">
        <BarChart3 className="w-7 h-7 text-accent animate-fadeIn" />
        <h2 className="text-2xl font-bold text-[var(--color-foreground)]">Chat Observability</h2>
      </header>
      <Tabs defaultValue="d3" className="w-full">
        <TabsList className="flex gap-2 bg-background/80 rounded-lg mb-4">
          <TabsTrigger value="d3" className="flex items-center gap-1"><LineChart className="w-4 h-4" /> D3.js</TabsTrigger>
          <TabsTrigger value="plotly" className="flex items-center gap-1"><AreaChart className="w-4 h-4" /> Plotly</TabsTrigger>
          <TabsTrigger value="recharts" className="flex items-center gap-1"><BarChart3 className="w-4 h-4" /> Recharts</TabsTrigger>
        </TabsList>
        <TabsContent value="d3"><D3Graph data={d3Data} /></TabsContent>
        <TabsContent value="plotly"><PlotlyGraph data={plotlyData} /></TabsContent>
        <TabsContent value="recharts"><RechartsGraph data={rechartsData} /></TabsContent>
      </Tabs>
    </section>
  );
}

/**
 * Test stub for ChatObservability (to be implemented with Jest/Playwright)
 */
// describe('ChatObservability', () => {
//   it('renders without crashing', () => {
//     // TODO: Add test
//   });
// });

export default ChatObservability;
