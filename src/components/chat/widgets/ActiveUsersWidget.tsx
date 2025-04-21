"use client";
import { useEffect, useState } from "react";
import { UserCheck, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

/**
 * ActiveUsersWidget - Real-time active user count with trend sparkline.
 * Enterprise-grade: glassmorphism, Bio Mech Weav SVG, accessibility, responsive, micro-interactions.
 */
export function ActiveUsersWidget() {
  // Simulated data (replace with real API/websocket)
  const [activeUsers, setActiveUsers] = useState(128);
  const [trend, setTrend] = useState([120, 123, 125, 128]);
  useEffect(() => {
    // Simulate live updates
    const interval = setInterval(() => {
      setActiveUsers((prev) => prev + (Math.random() > 0.5 ? 1 : -1));
      setTrend((prev) => [...prev.slice(1), activeUsers]);
    }, 4000);
    return () => clearInterval(interval);
  }, [activeUsers]);

  return (
    <Card className="relative p-5 bg-card-membrane/80 border border-[var(--color-border)] rounded-xl shadow-lg flex flex-col items-start gap-2 min-w-[210px] min-h-[120px] backdrop-blur-lg">
      {/* Bio Mech Weav SVG Overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10 -z-10" aria-hidden>
        <defs>
          <linearGradient id="active-users-fiber" x1="0" y1="0" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent)" />
            <stop offset="100%" stopColor="var(--color-primary)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex items-center gap-2">
        <UserCheck className="w-6 h-6 text-accent animate-fadeIn" />
        <span className="text-lg font-bold text-[var(--color-foreground)]">Active Users</span>
      </div>
      <div className="flex items-end gap-2 mt-2">
        <span className="text-3xl font-extrabold text-[var(--color-accent)]">{activeUsers}</span>
        <TrendingUp className="w-5 h-5 text-green-400 animate-pulse" aria-label="Trending up" />
      </div>
      {/* Sparkline */}
      <svg width="100" height="32" className="mt-2" aria-label="Active users trend">
        <polyline
          fill="none"
          stroke="url(#active-users-fiber)"
          strokeWidth="2"
          points={trend.map((v, i) => `${i * 25},${32 - (v - 120) * 2}`).join(" ")}
        />
      </svg>
    </Card>
  );
}

export default ActiveUsersWidget;
