"use client";
import { ShieldAlert, LockKeyhole } from "lucide-react";
import { Card } from "@/components/ui/card";

/**
 * SecurityComplianceWidget - Security/compliance events and audit log summary.
 * Professional: glassmorphism, Bio Mech Weav SVG, accessibility, responsive, micro-interactions.
 */
const events = [
  { type: "RBAC", detail: "Admin role assigned", time: "12:44" },
  { type: "Auth", detail: "Failed login: bob", time: "12:40" },
  { type: "Policy", detail: "Data export blocked", time: "12:38" },
  { type: "Compliance", detail: "GDPR export completed", time: "12:35" },
];

export function SecurityComplianceWidget() {
  return (
    <Card className="relative p-5 bg-card-membrane/80 border border-[var(--color-border)] rounded-xl shadow-lg flex flex-col gap-2 min-w-[260px] min-h-[120px] backdrop-blur-lg">
      {/* Bio Mech Weav SVG Overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10 -z-10" aria-hidden>
        <defs>
          <linearGradient id="seccomp-fiber" x1="0" y1="0" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent)" />
            <stop offset="100%" stopColor="var(--color-primary)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex items-center gap-2 mb-1">
        <ShieldAlert className="w-6 h-6 text-accent animate-fadeIn" />
        <span className="text-lg font-bold text-[var(--color-foreground)]">Security & Compliance</span>
      </div>
      <ul className="flex flex-col gap-1 mt-2">
        {events.map((evt, idx) => (
          <li key={idx} className="flex items-center gap-2 text-sm">
            <LockKeyhole className="w-4 h-4 text-accent" />
            <span className="font-medium text-[var(--color-foreground)]">{evt.type}</span>
            <span className="text-[var(--color-muted-foreground)]">{evt.detail}</span>
            <span className="ml-auto text-xs text-[var(--color-muted-foreground)]">{evt.time}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default SecurityComplianceWidget;
