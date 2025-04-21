"use client";
import { ChatObservability } from "./ChatObservability";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LayoutDashboard } from "lucide-react";
import { KpiCardsWidget } from "./widgets/KpiCardsWidget";
import { ActiveUsersWidget } from "./widgets/ActiveUsersWidget";
import { ChatVolumeWidget } from "./widgets/ChatVolumeWidget";
import { AgentPerformanceWidget } from "./widgets/AgentPerformanceWidget";
import { SentimentAnalysisWidget } from "./widgets/SentimentAnalysisWidget";
import { TopIntentsWidget } from "./widgets/TopIntentsWidget";
import { SystemHealthWidget } from "./widgets/SystemHealthWidget";
import { AuditTrailWidget } from "./widgets/AuditTrailWidget";
import { AiAdoptionWidget } from "./widgets/AiAdoptionWidget";
import { BusinessImpactWidget } from "./widgets/BusinessImpactWidget";
import { FeatureUsageWidget } from "./widgets/FeatureUsageWidget";
import { UserEngagementHeatmapWidget } from "./widgets/UserEngagementHeatmapWidget";
import { SecurityComplianceWidget } from "./widgets/SecurityComplianceWidget";
import { FeedbackSatisfactionWidget } from "./widgets/FeedbackSatisfactionWidget";
import { AlertsNotificationsWidget } from "./widgets/AlertsNotificationsWidget";
import { ScenarioLibraryWidget } from "./widgets/ScenarioLibraryWidget";
import { OrgInsightsWidget } from "./widgets/OrgInsightsWidget";

/**
 * ChatDashboard - Enterprise dashboard for chat analytics, observability, and insights.
 * Integrates ChatObservability and advanced widgets. 2025 standards: glassmorphism, Bio Mech Weav SVG, accessibility, responsive, modular, micro-interactions.
 */
export function ChatDashboard() {
  return (
    <main
      className="relative w-full max-w-7xl mx-auto px-2 py-8 flex flex-col gap-8 animate-fadeIn"
      aria-label="Chat dashboard"
    >
      {/* Bio Mech Weav SVG Overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10 -z-10" aria-hidden>
        <defs>
          <linearGradient id="dash-fiber" x1="0" y1="0" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent)" />
            <stop offset="100%" stopColor="var(--color-primary)" />
          </linearGradient>
        </defs>
        <path d="M0,48 Q192,96 384,48 T768,48" fill="none" stroke="url(#dash-fiber)" strokeWidth="6" opacity="0.13" />
      </svg>
      <header className="flex items-center gap-3 mb-4">
        <LayoutDashboard className="w-8 h-8 text-accent animate-fadeIn" />
        <h1 className="text-3xl font-extrabold text-[var(--color-foreground)]">Chat Dashboard</h1>
        <Badge className="ml-2 bg-accent/90 text-white">Enterprise</Badge>
      </header>
      <KpiCardsWidget />
      {/* Analytics & Adoption Row */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <AiAdoptionWidget />
        <BusinessImpactWidget />
        <FeatureUsageWidget />
        <UserEngagementHeatmapWidget />
      </div>
      {/* Core Chat & Agent Metrics */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <ActiveUsersWidget />
        <ChatVolumeWidget />
        <AgentPerformanceWidget />
        <SentimentAnalysisWidget />
      </div>
      {/* Insights, Intents, Org, Scenarios */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <TopIntentsWidget />
        <OrgInsightsWidget />
        <ScenarioLibraryWidget />
        <FeedbackSatisfactionWidget />
      </div>
      {/* System Health, Security, Alerts, Audit */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <SystemHealthWidget />
        <SecurityComplianceWidget />
        <AlertsNotificationsWidget />
        <AuditTrailWidget />
      </div>
      <Card className="p-0 bg-transparent shadow-none border-none">
        <ChatObservability />
      </Card>
    </main>
  );
}

export default ChatDashboard;
