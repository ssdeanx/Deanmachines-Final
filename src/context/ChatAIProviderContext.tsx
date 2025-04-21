import React, { createContext, useContext, useState, ReactNode } from "react";

export type ProviderOption = "openai" | "gemini" | "anthropic" | "custom";
export interface ChatAIProviderConfig {
  provider: ProviderOption;
  model: string;
  apiKey: string;
}

interface ChatAIProviderContextType {
  config: ChatAIProviderConfig;
  setConfig: (cfg: ChatAIProviderConfig) => void;
}

const defaultConfig: ChatAIProviderConfig = {
  provider: "openai",
  model: "gpt-4",
  apiKey: "",
};

const ChatAIProviderContext = createContext<ChatAIProviderContextType>({
  config: defaultConfig,
  setConfig: () => {},
});

export const ChatAIProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<ChatAIProviderConfig>(defaultConfig);
  return (
    <ChatAIProviderContext.Provider value={{ config, setConfig }}>
      {children}
    </ChatAIProviderContext.Provider>
  );
};

export const useChatAIProvider = () => useContext(ChatAIProviderContext);
