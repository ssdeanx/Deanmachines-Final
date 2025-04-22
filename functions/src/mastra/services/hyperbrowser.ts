// File: hyperbrowser.ts
import { connect, Browser } from "puppeteer-core";
import Hyperbrowser from "@hyperbrowser/sdk";
import { HyperAgent } from "@hyperbrowser/agent";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { z } from "zod";

// Type for session details (customize as needed)
export type SessionDetail = {
  id: string;
  wsEndpoint: string;
  [key: string]: any;
};

export type Profile = {
  id: string;
  name: string;
  [key: string]: any;
};

export type Extension = {
  id: string;
  name: string;
  [key: string]: any;
};

// Initialize the Hyperbrowser client
export const hyperbrowserClient = new Hyperbrowser({
  apiKey: process.env.HYPERBROWSER_API_KEY,
});

/**
 * Creates a new Hyperbrowser session with advanced options.
 * @param params - Session creation options (stealth, proxy, profiles, extensions, webRecording, captcha, etc.)
 * @returns {Promise<SessionDetail>} The created session details.
 *
 * Example params:
 * {
 *   useStealth: true,
 *   proxy: "http://username:password@proxyhost:port",
 *   profileId: "profile-123",
 *   extensions: ["extensionId1", "extensionId2"],
 *   webRecording: true,
 *   captcha: { provider: "2captcha", apiKey: "..." },
 *   staticIp: true,
 *   ...
 * }
 */
export async function createHyperbrowserSession(params?: Record<string, any>): Promise<SessionDetail> {
  try {
    const session = await hyperbrowserClient.sessions.create(params);
    console.info(`Hyperbrowser session created with ID: ${session.id}`);
    return session as SessionDetail;
  } catch (error) {
    console.error("Failed to create Hyperbrowser session:", error);
    throw error;
  }
}

/**
 * Connects to an existing Hyperbrowser session using Puppeteer.
 * @param session - The Hyperbrowser session details.
 * @returns {Promise<Browser>} The Puppeteer Browser instance.
 */
export async function connectToHyperbrowserSession(session: SessionDetail): Promise<Browser> {
  try {
    const browser = await connect({
      browserWSEndpoint: session.wsEndpoint,
      defaultViewport: null,
    });
    console.info(`Successfully connected to session: ${session.id}`);
    return browser;
  } catch (error) {
    console.error(`Failed to connect to Hyperbrowser session ${session.id}:`, error);
    throw error;
  }
}

/**
 * Stops a Hyperbrowser session.
 * @param sessionId - The ID of the session to stop.
 * @returns {Promise<void>}
 */
export async function stopHyperbrowserSession(sessionId: string): Promise<void> {
  try {
    await hyperbrowserClient.sessions.stop(sessionId);
    console.info(`Hyperbrowser session stopped: ${sessionId}`);
  } catch (error) {
    console.error(`Failed to stop Hyperbrowser session ${sessionId}:`, error);
    // Log and continue
  }
}

/**
 * Creates a HyperAgent instance using Google Gemini as the LLM.
 * @param model - The Gemini model to use (default: "gemini-2.0-flash")
 * @returns {HyperAgent} The configured HyperAgent instance.
 */
export function createGoogleHyperAgent(model: string = "gemini-2.0-flash", outputSchema?: any): HyperAgent {
  if (!process.env.GOOGLE_AI_API_KEY) {
    throw new Error("GOOGLE_AI_API_KEY environment variable is not set.");
  }
  return new HyperAgent({
    llm: new ChatGoogleGenerativeAI({
      apiKey: process.env.GOOGLE_AI_API_KEY,
      model,
    }),
    browserProvider: "Hyperbrowser",
    ...(outputSchema ? { outputSchema } : {}),
  });
}

/**
 * Runs a browser automation task using HyperAgent and Google Gemini.
 * @param task - The browser automation task to perform.
 * @param model - The Gemini model to use (default: "gemini-2.0-flash")
 * @returns {Promise<unknown>} The output of the task.
 */
export async function runHyperAgentTask(task: string, model: string = "gemini-2.0-flash", outputSchema?: any): Promise<unknown> {
  const agent = createGoogleHyperAgent(model, outputSchema);
  try {
    const result = await agent.executeTask(task);
    return result.output;
  } catch (error) {
    console.error("Error running HyperAgent task:", error);
    throw error;
  } finally {
    await agent.closeAgent();
  }
}

/**
 * Example: Create a session with all advanced options (commented out for reference)
 *
 * // const session = await createHyperbrowserSession({
 * //   useStealth: true,
 * //   proxy: "http://username:password@proxyhost:port",
 * //   profileId: "profile-123",
 * //   extensions: ["extensionId1", "extensionId2"],
 * //   webRecording: true,
 * //   captcha: { provider: "2captcha", apiKey: "..." },
 * //   staticIp: true,
 * // });
 */

// --- Profile Management ---
/**
 * Create a new browser profile.
 */
export async function createProfile(name: string): Promise<Profile> {
  const profile = await hyperbrowserClient.profiles.create({ name });
  return profile as Profile;
}

/**
 * List all browser profiles.
 */
export async function listProfiles(): Promise<Profile[]> {
  const profiles = await hyperbrowserClient.profiles.list();
  return profiles as unknown as Profile[];
}

/**
 * Delete a browser profile by ID.
 */
export async function deleteProfile(profileId: string): Promise<void> {
  await hyperbrowserClient.profiles.delete(profileId);
}

// --- Extension Management ---
/**
 * Upload a browser extension (path to .zip or .crx).
 */
export async function uploadExtension(filePath: string): Promise<Extension> {
  const extService = hyperbrowserClient.extensions as any;
  if (typeof extService.upload === "function") {
    return await extService.upload({ filePath }) as Extension;
  } else if (typeof extService.create === "function") {
    return await extService.create({ filePath }) as Extension;
  } else if (typeof extService.add === "function") {
    return await extService.add({ filePath }) as Extension;
  }
  throw new Error("No supported extension upload method found in SDK.");
}

/**
 * List all uploaded extensions.
 */
export async function listExtensions(): Promise<Extension[]> {
  const extensions = await hyperbrowserClient.extensions.list();
  return extensions as unknown as Extension[];
}

/**
 * Delete an extension by ID.
 */
export async function deleteExtension(extensionId: string): Promise<void> {
  const extService = hyperbrowserClient.extensions as any;
  if (typeof extService.delete === "function") {
    await extService.delete(extensionId);
    return;
  } else if (typeof extService.remove === "function") {
    await extService.remove(extensionId);
    return;
  } else if (typeof extService.del === "function") {
    await extService.del(extensionId);
    return;
  }
  throw new Error("No supported extension delete method found in SDK.");
}

// --- Web Recording ---
/**
 * Download a web recording for a session.
 * Returns a Buffer or file path depending on SDK.
 */
export async function downloadWebRecording(sessionId: string): Promise<any> {
  return await hyperbrowserClient.sessions.getRecording(sessionId);
}

// --- Live View / Debug ---
/**
 * Get the WebSocket endpoint for live view/debugging.
 * You can connect with Chrome DevTools or Puppeteer.
 */
export function getLiveViewWsEndpoint(session: SessionDetail): string {
  return session.wsEndpoint;
}
