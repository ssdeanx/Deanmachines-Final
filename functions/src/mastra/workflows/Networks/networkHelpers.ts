// functions/src/mastra/workflows/Networks/networkHelpers.ts

import { AgentNetwork, type AgentNetworkConfig } from "@mastra/core/network";
import { threadManager } from "../../utils/thread-manager";
import { sharedMemory } from "../../database";
import { createLogger } from "@mastra/core/logger";
import { configureLangSmithTracing } from "../../services/langsmith";
import { networks } from "./agentNetwork";

const logger = createLogger({ name: "NetworkHelpers", level: "info" });
const langsmithClient = configureLangSmithTracing();
if (langsmithClient) {
  logger.info("LangSmith tracing enabled for network helpers");
}

/**
 * Creates a base AgentNetwork with shared configuration.
 */
export function createBaseNetwork(config: AgentNetworkConfig): AgentNetwork {
  return new AgentNetwork(config);
}

/**
 * Applies shared hooks (onError, onGenerateResponse) to a network instance.
 */
export function applySharedHooks(
  network: AgentNetwork,
  hooks: {
    onError?: (error: Error) => Promise<any> | any;
    onGenerateResponse?: (response: any) => Promise<any> | any;
  }
): void {
  if (hooks.onError) {
    // @ts-ignore
    network.onError = hooks.onError;
  }
  if (hooks.onGenerateResponse) {
    // @ts-ignore
    network.onGenerateResponse = hooks.onGenerateResponse;
  }
}

/**
 * Executes a network with thread context and persists memory.
 */
export async function executeWithThread(
  network: AgentNetwork,
  input: string | Record<string, any>,
  options: { threadId?: string; [key: string]: any } = {}
): Promise<any> {
  const threadId =
    typeof options.threadId === "string" ? options.threadId : threadManager.createThread();
  const result = await network.execute(input, { ...options, threadId });
  await threadManager.saveThreadMemory(threadId, sharedMemory.getMemory(threadId));
  return result;
}

/**
 * Merges two AgentNetworkConfig objects, with overrideConfig taking precedence.
 */
export function mergeConfigs(
  baseConfig: Partial<AgentNetworkConfig>,
  overrideConfig: Partial<AgentNetworkConfig>
): AgentNetworkConfig {
  return { ...baseConfig, ...overrideConfig } as AgentNetworkConfig;
}

/**
 * Returns the map of all instantiated networks.
 */
export function getAllNetworks(): { [id: string]: AgentNetwork } {
  return networks;
}
