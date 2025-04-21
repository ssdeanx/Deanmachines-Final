import React, { useState } from "react";
import { useChatAIProvider } from "@/context/ChatAIProviderContext";

const PROVIDERS = [
  { label: "OpenAI", value: "openai", models: ["gpt-4", "gpt-3.5-turbo"] },
  { label: "Gemini", value: "gemini", models: ["gemini-1.5-pro", "gemini-1.0-pro"] },
  { label: "Anthropic", value: "anthropic", models: ["claude-3-opus", "claude-3-sonnet"] },
  { label: "Custom", value: "custom", models: ["custom-model"] },
];

export default function ChatProviderSettings() {
  const { config, setConfig } = useChatAIProvider();
  const [apiKeyInput, setApiKeyInput] = useState(config.apiKey);

  const providerObj = PROVIDERS.find((p) => p.value === config.provider) || PROVIDERS[0];

  return (
    <section className="p-4 rounded-xl bg-card-membrane/80 border border-[var(--color-border)] shadow-md mb-4">
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
