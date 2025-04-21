"use client";
import { Smile, Frown, Meh } from "lucide-react";
import { Card } from "@/components/ui/card";
import { PieChart as RePieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

/**
 * FeedbackSatisfactionWidget - NPS/satisfaction scores, trends, breakdowns.
 * Professional: glassmorphism, Bio Mech Weav SVG, accessibility, responsive, micro-interactions.
 */
const data = [
  { name: "Positive", value: 68 },
  { name: "Neutral", value: 22 },
  { name: "Negative", value: 10 },
];
const COLORS = ["#38bdf8", "#a1a1aa", "#f43f5e"];
const ICONS = [<Smile className="w-4 h-4 text-cyan-400" />, <Meh className="w-4 h-4 text-zinc-400" />, <Frown className="w-4 h-4 text-rose-400" />];

export function FeedbackSatisfactionWidget() {
  return (
    <Card className="relative p-5 bg-card-membrane/80 border border-[var(--color-border)] rounded-xl shadow-lg flex flex-col gap-2 min-w-[210px] min-h-[180px] backdrop-blur-lg">
      {/* Bio Mech Weav SVG Overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10 -z-10" aria-hidden>
        <defs>
          <linearGradient id="feedback-fiber" x1="0" y1="0" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent)" />
            <stop offset="100%" stopColor="var(--color-primary)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex items-center gap-2 mb-1">
        <Smile className="w-6 h-6 text-accent animate-fadeIn" />
        <span className="text-lg font-bold text-[var(--color-foreground)]">Feedback & Satisfaction</span>
      </div>
      <ResponsiveContainer width="100%" height={100}>
        <RePieChart>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={36} label>
            {data.map((entry, idx) => (
              <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip contentStyle={{ background: "rgba(30,41,59,0.8)", border: "1px solid var(--color-border)" }} />
          <Legend formatter={(value, entry, idx) => <span className="flex items-center gap-1">{ICONS[idx]} {value}</span>} />
        </RePieChart>
      </ResponsiveContainer>
    </Card>
  );
}

export default FeedbackSatisfactionWidget;
