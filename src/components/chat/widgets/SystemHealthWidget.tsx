"use client";
import { Server, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";

/**
 * SystemHealthWidget - Status indicators for backend/API/agent health.
 * Enterprise-grade: glassmorphism, Bio Mech Weav SVG, accessibility, responsive, micro-interactions.
 */
const systems = [
  { name: "Backend API", status: "Healthy", color: "#22d3ee" },
  { name: "Mastra Agent", status: "Healthy", color: "#38bdf8" },
  { name: "Database", status: "Degraded", color: "#facc15" },
  { name: "Auth", status: "Healthy", color: "#4ade80" },
];

export function SystemHealthWidget() {
  return (
    <Card className="relative p-5 bg-card-membrane/80 border border-[var(--color-border)] rounded-xl shadow-lg flex flex-col gap-2 min-w-[210px] min-h-[120px] backdrop-blur-lg">
      {/* Bio Mech Weav SVG Overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10 -z-10" aria-hidden>
        <defs>
          <linearGradient id="syshealth-fiber" x1="0" y1="0" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent)" />
            <stop offset="100%" stopColor="var(--color-primary)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex items-center gap-2 mb-1">
        <Server className="w-6 h-6 text-accent animate-fadeIn" />
        <span className="text-lg font-bold text-[var(--color-foreground)]">System Health</span>
      </div>
      <ul className="flex flex-col gap-1 mt-2">
        {systems.map((sys, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" style={{ color: sys.color }} aria-label={sys.status} />
            <span className="text-sm text-[var(--color-foreground)] font-medium">{sys.name}</span>
            <span className="ml-auto text-xs font-bold" style={{ color: sys.color }}>{sys.status}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default SystemHealthWidget;
