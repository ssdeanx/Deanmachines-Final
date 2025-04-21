"use client";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from "recharts";

/**
 * RechartsGraph - Modular, accessible Recharts chart for ChatObservability
 * 2025 standards: glassmorphism, Bio Mech Weav SVG, accessibility, responsive, micro-interactions
 */
export function RechartsGraph({ data }: { data: { x: number; y: number }[] }) {
  return (
    <div className="relative bg-card-membrane/80 rounded-xl shadow p-4 border border-[var(--color-border)]">
      {/* Bio Mech Weav SVG Overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10 -z-10" aria-hidden>
        <defs>
          <linearGradient id="recharts-fiber" x1="0" y1="0" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent)" />
            <stop offset="100%" stopColor="var(--color-primary)" />
          </linearGradient>
        </defs>
      </svg>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data} margin={{ top: 16, right: 24, left: 8, bottom: 8 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
          <XAxis dataKey="x" stroke="var(--color-foreground)" />
          <YAxis stroke="var(--color-foreground)" />
          <Tooltip contentStyle={{ background: "rgba(30,41,59,0.8)", border: "1px solid var(--color-border)" }} />
          <Legend />
          <Line type="monotone" dataKey="y" stroke="#38bdf8" strokeWidth={2} dot={{ r: 4 }} name="Value" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RechartsGraph;
