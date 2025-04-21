"use client";
import { TrendingUp, DollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

/**
 * BusinessImpactWidget - KPIs and trend lines for ROI: hours saved, productivity, revenue, etc.
 * Professional: glassmorphism, Bio Mech Weav SVG, accessibility, responsive, micro-interactions.
 */
const data = [
  { week: "2025-03-01", hoursSaved: 12, revenue: 2200 },
  { week: "2025-03-08", hoursSaved: 18, revenue: 3400 },
  { week: "2025-03-15", hoursSaved: 25, revenue: 4700 },
  { week: "2025-03-22", hoursSaved: 31, revenue: 5900 },
  { week: "2025-03-29", hoursSaved: 44, revenue: 7700 },
];

export function BusinessImpactWidget() {
  return (
    <Card className="relative p-5 bg-card-membrane/80 border border-[var(--color-border)] rounded-xl shadow-lg flex flex-col gap-2 min-w-[260px] min-h-[180px] backdrop-blur-lg">
      {/* Bio Mech Weav SVG Overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10 -z-10" aria-hidden>
        <defs>
          <linearGradient id="bizimpact-fiber" x1="0" y1="0" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent)" />
            <stop offset="100%" stopColor="var(--color-primary)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex items-center gap-2 mb-1">
        <TrendingUp className="w-6 h-6 text-accent animate-fadeIn" />
        <span className="text-lg font-bold text-[var(--color-foreground)]">Business Impact</span>
      </div>
      <ResponsiveContainer width="100%" height={100}>
        <LineChart data={data} margin={{ top: 8, right: 16, left: 8, bottom: 8 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
          <XAxis dataKey="week" stroke="var(--color-foreground)" />
          <YAxis stroke="#38bdf8" />
          <Tooltip contentStyle={{ background: "rgba(30,41,59,0.8)", border: "1px solid var(--color-border)" }} />
          <Line type="monotone" dataKey="hoursSaved" stroke="#38bdf8" strokeWidth={2} dot={{ r: 4 }} name="Hours Saved" />
          <Line type="monotone" dataKey="revenue" stroke="#22d3ee" strokeWidth={2} dot={{ r: 4 }} name="Revenue ($)" />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}

export default BusinessImpactWidget;
