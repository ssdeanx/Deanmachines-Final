"use client";
import { Bell, AlertTriangle } from "lucide-react";
import { Card } from "@/components/ui/card";

/**
 * AlertsNotificationsWidget - Customizable alerts (SLA breach, anomaly, errors).
 * Professional: glassmorphism, Bio Mech Weav SVG, accessibility, responsive, micro-interactions.
 */
const alerts = [
  { type: "SLA Breach", detail: "Response time > 5s", time: "12:45", severity: "critical" },
  { type: "Anomaly", detail: "Spike in user messages", time: "12:43", severity: "warning" },
  { type: "Error", detail: "Agent timeout", time: "12:41", severity: "critical" },
  { type: "Notification", detail: "New feature enabled", time: "12:38", severity: "info" },
];
const SEVERITY_COLORS = {
  critical: "#f43f5e",
  warning: "#facc15",
  info: "#38bdf8",
};

export function AlertsNotificationsWidget() {
  return (
    <Card className="relative p-5 bg-card-membrane/80 border border-[var(--color-border)] rounded-xl shadow-lg flex flex-col gap-2 min-w-[260px] min-h-[120px] backdrop-blur-lg">
      {/* Bio Mech Weav SVG Overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10 -z-10" aria-hidden>
        <defs>
          <linearGradient id="alerts-fiber" x1="0" y1="0" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent)" />
            <stop offset="100%" stopColor="var(--color-primary)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex items-center gap-2 mb-1">
        <Bell className="w-6 h-6 text-accent animate-fadeIn" />
        <span className="text-lg font-bold text-[var(--color-foreground)]">Alerts & Notifications</span>
      </div>
      <ul className="flex flex-col gap-1 mt-2">
        {alerts.map((alert, idx) => (
          <li key={idx} className="flex items-center gap-2 text-sm">
            <AlertTriangle className="w-4 h-4" style={{ color: SEVERITY_COLORS[alert.severity] }} aria-label={alert.severity} />
            <span className="font-medium text-[var(--color-foreground)]">{alert.type}</span>
            <span className="text-[var(--color-muted-foreground)]">{alert.detail}</span>
            <span className="ml-auto text-xs" style={{ color: SEVERITY_COLORS[alert.severity] }}>{alert.time}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default AlertsNotificationsWidget;
