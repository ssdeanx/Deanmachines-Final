"use client";
import { CalendarRange } from "lucide-react";
import { Card } from "@/components/ui/card";

/**
 * UserEngagementHeatmapWidget - Heatmap/calendar of chat/AI activity by hour/day/week.
 * Professional: glassmorphism, Bio Mech Weav SVG, accessibility, responsive, micro-interactions.
 * (For demo, uses simple SVG grid; for real use, integrate with d3 or a React heatmap lib)
 */
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const hours = Array.from({ length: 24 }, (_, i) => `${i}`);
const activity = Array.from({ length: 7 }, () => Array.from({ length: 24 }, () => Math.floor(Math.random() * 10)));

export function UserEngagementHeatmapWidget() {
  return (
    <Card className="relative p-5 bg-card-membrane/80 border border-[var(--color-border)] rounded-xl shadow-lg flex flex-col gap-2 min-w-[260px] min-h-[180px] backdrop-blur-lg overflow-x-auto">
      {/* Bio Mech Weav SVG Overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10 -z-10" aria-hidden>
        <defs>
          <linearGradient id="heatmap-fiber" x1="0" y1="0" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent)" />
            <stop offset="100%" stopColor="var(--color-primary)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex items-center gap-2 mb-1">
        <CalendarRange className="w-6 h-6 text-accent animate-fadeIn" />
        <span className="text-lg font-bold text-[var(--color-foreground)]">User Engagement</span>
      </div>
      <div className="overflow-x-auto">
        <svg width={hours.length * 16 + 50} height={days.length * 18 + 40} aria-label="User Engagement Heatmap">
          {/* Days labels */}
          {days.map((day, i) => (
            <text key={day} x={0} y={i * 18 + 30} fontSize={12} fill="var(--color-muted-foreground)">{day}</text>
          ))}
          {/* Hours labels */}
          {hours.map((hour, i) => (
            <text key={hour} x={i * 16 + 40} y={20} fontSize={10} fill="var(--color-muted-foreground)">{hour}</text>
          ))}
          {/* Activity squares */}
          {activity.map((row, y) =>
            row.map((val, x) => (
              <rect
                key={`${y}-${x}`}
                x={x * 16 + 40}
                y={y * 18 + 24}
                width={14}
                height={14}
                rx={3}
                fill={`url(#heatmap-fiber)`}
                opacity={val / 10}
              />
            ))
          )}
        </svg>
      </div>
    </Card>
  );
}

export default UserEngagementHeatmapWidget;
