import React, { useState } from "react";
import { useChatAIProvider } from "@/context/ChatAIProviderContext";

const PROVIDERS = [
  { label: "OpenAI", value: "openai", models: ["gpt-4", "gpt-3.5-turbo"] },
  { label: "Gemini", value: "gemini", models: ["gemini-1.5-pro", "gemini-1.0-pro"] },
  { label: "Anthropic", value: "anthropic", models: ["claude-3-opus", "claude-3-sonnet"] },
  { label: "Custom", value: "custom", models: ["custom-model"] },
];

/**
 * ChatProviderSettings
 * Provider settings panel for chat (AI model, endpoint, etc)
 * - Bio Mech Weav overlays, glassmorphism, accessibility, micro-interactions
 * - Modular and ready for extensibility
 */
export default function ChatProviderSettings() {
  const { config, setConfig } = useChatAIProvider();
  const [apiKeyInput, setApiKeyInput] = useState(config.apiKey);

  const providerObj = PROVIDERS.find((p) => p.value === config.provider) || PROVIDERS[0];

  return (
    <section
      className="relative p-4 rounded-xl bg-card-membrane/80 border border-[var(--color-border)] shadow-md mb-4 focus-within:ring-2 focus-within:ring-accent"
      aria-label="AI Provider Settings"
      tabIndex={0}
    >
      {/* Bio Mech Weav SVG Overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10 -z-10" aria-hidden>
        <defs>
          <linearGradient id="provider-fiber" x1="0" y1="0" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent)" />
            <stop offset="100%" stopColor="var(--color-primary)" />
          </linearGradient>
        </defs>
        <path d="M0,12 Q48,24 96,12 T192,12" fill="none" stroke="url(#provider-fiber)" strokeWidth="4" opacity="0.13" />
      </svg>
      <h2 className="font-bold text-lg mb-2">AI Provider Settings</h2>
      <div className="mb-2">
        <label className="block text-sm font-semibold mb-1">Provider</label>
        <select
          className="w-full p-2 rounded border"
          value={config.provider}
          onChange={(e) => setConfig({ ...config, provider: e.target.value as any, model: providerObj.models[0] })}
        >
          {PROVIDERS.map((p) => (
            <option key={p.value} value={p.value}>{p.label}</option>
          ))}
        </select>
      </div>
      <div className="mb-2">
        <label className="block text-sm font-semibold mb-1">Model</label>
        <select
          className="w-full p-2 rounded border"
          value={config.model}
          onChange={(e) => setConfig({ ...config, model: e.target.value })}
        >
          {providerObj.models.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      </div>
      <div className="mb-2">
        <label className="block text-sm font-semibold mb-1">API Key</label>
        <input
          className="w-full p-2 rounded border"
          type="password"
          value={apiKeyInput}
          onChange={(e) => setApiKeyInput(e.target.value)}
          onBlur={() => setConfig({ ...config, apiKey: apiKeyInput })}
          placeholder="Enter API key"
        />
      </div>
      <div className="text-xs text-muted-foreground">API keys are stored only in memory for this session.</div>
    </section>
  );
}
