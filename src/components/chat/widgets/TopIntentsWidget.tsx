"use client";
import { BarChartHorizontal } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

/**
 * TopIntentsWidget - Bar chart of most common user intents/topics.
 * Enterprise-grade: glassmorphism, Bio Mech Weav SVG, accessibility, responsive, micro-interactions.
 */
const data = [
  { intent: "Support", count: 48 },
  { intent: "Order", count: 33 },
  { intent: "Feedback", count: 22 },
  { intent: "Account", count: 15 },
  { intent: "Other", count: 9 },
];

export function TopIntentsWidget() {
  return (
    <Card className="relative p-5 bg-card-membrane/80 border border-[var(--color-border)] rounded-xl shadow-lg flex flex-col gap-2 min-w-[260px] min-h-[180px] backdrop-blur-lg">
      {/* Bio Mech Weav SVG Overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10 -z-10" aria-hidden>
        <defs>
          <linearGradient id="intents-fiber" x1="0" y1="0" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent)" />
            <stop offset="100%" stopColor="var(--color-primary)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex items-center gap-2 mb-1">
        <BarChartHorizontal className="w-6 h-6 text-accent animate-fadeIn" />
        <span className="text-lg font-bold text-[var(--color-foreground)]">Top Intents</span>
      </div>
      <ResponsiveContainer width="100%" height={100}>
        <BarChart data={data} layout="vertical" margin={{ top: 8, right: 16, left: 8, bottom: 8 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
          <XAxis type="number" stroke="var(--color-foreground)" />
          <YAxis dataKey="intent" type="category" stroke="var(--color-foreground)" />
          <Tooltip contentStyle={{ background: "rgba(30,41,59,0.8)", border: "1px solid var(--color-border)" }} />
          <Bar dataKey="count" fill="#38bdf8" radius={[4, 4, 4, 4]} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}

export default TopIntentsWidget;
