"use client";
import { Gauge } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

/**
 * AgentPerformanceWidget - Chart of agent response times, success/error rates.
 * Enterprise-grade: glassmorphism, Bio Mech Weav SVG, accessibility, responsive, micro-interactions.
 */
const data = [
  { name: "Agent A", response: 1.2, success: 98 },
  { name: "Agent B", response: 1.6, success: 93 },
  { name: "Agent C", response: 1.1, success: 99 },
  { name: "Agent D", response: 2.0, success: 90 },
];

export function AgentPerformanceWidget() {
  return (
    <Card className="relative p-5 bg-card-membrane/80 border border-[var(--color-border)] rounded-xl shadow-lg flex flex-col gap-2 min-w-[260px] min-h-[180px] backdrop-blur-lg">
      {/* Bio Mech Weav SVG Overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10 -z-10" aria-hidden>
        <defs>
          <linearGradient id="agent-fiber" x1="0" y1="0" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent)" />
            <stop offset="100%" stopColor="var(--color-primary)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex items-center gap-2 mb-1">
        <Gauge className="w-6 h-6 text-accent animate-fadeIn" />
        <span className="text-lg font-bold text-[var(--color-foreground)]">Agent Performance</span>
      </div>
      <ResponsiveContainer width="100%" height={100}>
        <LineChart data={data} margin={{ top: 8, right: 16, left: 8, bottom: 8 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
          <XAxis dataKey="name" stroke="var(--color-foreground)" />
          <YAxis yAxisId="left" stroke="var(--color-foreground)" />
          <YAxis yAxisId="right" orientation="right" stroke="var(--color-accent)" />
          <Tooltip contentStyle={{ background: "rgba(30,41,59,0.8)", border: "1px solid var(--color-border)" }} />
          <Line yAxisId="left" type="monotone" dataKey="response" stroke="#38bdf8" strokeWidth={2} dot={{ r: 4 }} name="Resp. (s)" />
          <Line yAxisId="right" type="monotone" dataKey="success" stroke="#22d3ee" strokeWidth={2} dot={{ r: 4 }} name="Success (%)" />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}

export default AgentPerformanceWidget;
