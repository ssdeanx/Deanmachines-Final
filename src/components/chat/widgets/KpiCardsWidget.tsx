"use client";
import { Timer, AlertTriangle, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";

/**
 * KpiCardsWidget - KPI cards for enterprise metrics (avg. response, SLA %, error rate, etc.).
 * Enterprise-grade: glassmorphism, Bio Mech Weav SVG, accessibility, responsive, micro-interactions.
 */
const kpis = [
  { icon: <Timer className="w-5 h-5 text-accent" />, label: "Avg. Response", value: "1.3s" },
  { icon: <ShieldCheck className="w-5 h-5 text-accent" />, label: "SLA Met", value: "99.8%" },
  { icon: <AlertTriangle className="w-5 h-5 text-accent" />, label: "Error Rate", value: "0.2%" },
  { label: "Peak Users", value: "212" },
];

export function KpiCardsWidget() {
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4">
      {kpis.map((kpi, idx) => (
        <Card
          key={idx}
          className="relative p-4 bg-card-membrane/80 border border-[var(--color-border)] rounded-xl shadow flex flex-col items-center gap-2 min-w-[110px] min-h-[80px] backdrop-blur-lg"
          aria-label={kpi.label}
        >
          {/* Bio Mech Weav SVG Overlay */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10 -z-10" aria-hidden>
            <defs>
              <linearGradient id={`kpi-fiber-${idx}`} x1="0" y1="0" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--color-accent)" />
                <stop offset="100%" stopColor="var(--color-primary)" />
              </linearGradient>
            </defs>
          </svg>
          {kpi.icon}
          <span className="text-xs text-[var(--color-muted-foreground)]">{kpi.label}</span>
          <span className="text-lg font-bold text-[var(--color-foreground)]">{kpi.value}</span>
        </Card>
      ))}
    </div>
  );
}

export default KpiCardsWidget;
