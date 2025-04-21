"use client";
import { UserPlus, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

/**
 * AiAdoptionWidget - Visualizes AI/chat adoption and usage trends over time.
 * Professional: glassmorphism, Bio Mech Weav SVG, accessibility, responsive, micro-interactions.
 */
const data = [
  { week: "2025-03-01", users: 24 },
  { week: "2025-03-08", users: 41 },
  { week: "2025-03-15", users: 63 },
  { week: "2025-03-22", users: 85 },
  { week: "2025-03-29", users: 109 },
];

export function AiAdoptionWidget() {
  return (
    <Card className="relative p-5 bg-card-membrane/80 border border-[var(--color-border)] rounded-xl shadow-lg flex flex-col gap-2 min-w-[260px] min-h-[180px] backdrop-blur-lg">
      {/* Bio Mech Weav SVG Overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10 -z-10" aria-hidden>
        <defs>
          <linearGradient id="aiadopt-fiber" x1="0" y1="0" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent)" />
            <stop offset="100%" stopColor="var(--color-primary)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex items-center gap-2 mb-1">
        <UserPlus className="w-6 h-6 text-accent animate-fadeIn" />
        <span className="text-lg font-bold text-[var(--color-foreground)]">AI Adoption</span>
      </div>
      <ResponsiveContainer width="100%" height={100}>
        <AreaChart data={data} margin={{ top: 8, right: 16, left: 8, bottom: 8 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
          <XAxis dataKey="week" stroke="var(--color-foreground)" />
          <YAxis stroke="var(--color-foreground)" />
          <Tooltip contentStyle={{ background: "rgba(30,41,59,0.8)", border: "1px solid var(--color-border)" }} />
          <Area type="monotone" dataKey="users" stroke="#38bdf8" fill="#38bdf8" fillOpacity={0.15} name="Active Users" />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
}

export default AiAdoptionWidget;
