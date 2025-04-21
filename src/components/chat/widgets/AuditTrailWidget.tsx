"use client";
import { ListChecks, User2 } from "lucide-react";
import { Card } from "@/components/ui/card";

/**
 * AuditTrailWidget - Recent critical actions/events (RBAC, auth, config changes).
 * Enterprise-grade: glassmorphism, Bio Mech Weav SVG, accessibility, responsive, micro-interactions.
 */
const events = [
  { user: "alice", action: "Role changed: user → admin", time: "12:32" },
  { user: "bob", action: "API key created", time: "12:30" },
  { user: "eve", action: "Failed login attempt", time: "12:28" },
  { user: "carol", action: "Settings updated", time: "12:25" },
];

export function AuditTrailWidget() {
  return (
    <Card className="relative p-5 bg-card-membrane/80 border border-[var(--color-border)] rounded-xl shadow-lg flex flex-col gap-2 min-w-[260px] min-h-[120px] backdrop-blur-lg">
      {/* Bio Mech Weav SVG Overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10 -z-10" aria-hidden>
        <defs>
          <linearGradient id="audit-fiber" x1="0" y1="0" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent)" />
            <stop offset="100%" stopColor="var(--color-primary)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex items-center gap-2 mb-1">
        <ListChecks className="w-6 h-6 text-accent animate-fadeIn" />
        <span className="text-lg font-bold text-[var(--color-foreground)]">Audit Trail</span>
      </div>
      <ul className="flex flex-col gap-1 mt-2">
        {events.map((evt, idx) => (
          <li key={idx} className="flex items-center gap-2 text-sm">
            <User2 className="w-4 h-4 text-accent" />
            <span className="font-medium text-[var(--color-foreground)]">{evt.user}</span>
            <span className="text-[var(--color-muted-foreground)]">{evt.action}</span>
            <span className="ml-auto text-xs text-[var(--color-muted-foreground)]">{evt.time}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default AuditTrailWidget;
