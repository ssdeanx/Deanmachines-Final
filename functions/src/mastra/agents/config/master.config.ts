import type { Tool } from "@mastra/core/tools";
import { DEFAULT_MODELS, ModelConfig, ResponseHookOptions, BaseAgentConfig } from "./config.types";
import { z, type ZodTypeAny } from "zod";
import { VoiceConfig, VoiceProvider } from "../../voice"; // ← real import



// re-export so master.config.ts can do:
//    import { VoiceProvider } from "./config.types";
export { VoiceProvider };

/**
 * Configuration for retrieving relevant tools for the agent
 *
 * @param toolIds - Array of tool identifiers to include
 * @param allTools - Map of all available tools
 * @returns Record of tools mapped by their IDs
 * @throws {Error} When required tools are missing
 */
export function getToolsFromIds(
  toolIds: string[],
  allTools: ReadonlyMap<
    string,
    Tool<z.ZodTypeAny | undefined, z.ZodTypeAny | undefined>
  >
): Record<string, Tool<z.ZodTypeAny | undefined, z.ZodTypeAny | undefined>> {
  const tools: Record<
    string,
    Tool<z.ZodTypeAny | undefined, z.ZodTypeAny | undefined>
  > = {};
  const missingTools: string[] = [];

  for (const id of toolIds) {
    const tool = allTools.get(id);
    if (tool) {
      tools[id] = tool;
    } else {
      missingTools.push(id);
    }
  }

  if (missingTools.length > 0) {
    throw new Error(`Missing required tools: ${missingTools.join(", ")}`);
  }

  return tools;
}

// Define Zod schema for ModelConfig based on the ModelConfig type
// Assuming ModelConfig has 'provider' and 'modelId' based on DEFAULT_MODELS usage
const modelProviders = ["google", "vertex", "openai", "anthropic", "ollama"] as const; // Based on ModelProvider type definition
const ModelConfigSchema = z.object({
  provider: z.enum(modelProviders).describe("The AI model provider"),
  modelId: z.string().describe("The specific model identifier"),
  // Add other potential fields if known, e.g., apiKey, options, making them optional if appropriate
  apiKey: z.string().optional().describe("Optional API key for the provider"),
  options: z.record(z.any()).optional().describe("Optional provider-specific settings"),
});


// Define Zod schema for MasterAgentConfig
export const MasterAgentConfigSchema = z.object({
  id: z.string().describe("Unique identifier for the agent"),
  name: z.string().describe("Name of the agent"),
  description: z.string().describe("Description of the agent's purpose"),
  modelConfig: ModelConfigSchema.describe("Default model configuration for the agent"),
  instructions: z.string().describe("Instructions or guidelines for the agent"),
  toolIds: z.array(z.string()).describe("List of tool IDs available to the agent"),
  voiceConfig: z
    .object({
      provider: z.nativeEnum(VoiceProvider),
      apiKey: z.string().optional(),
      speaker: z.string().optional(),
      options: z.record(z.any()).optional(),
    })
    .optional(),
});

export const masterAgentConfig: BaseAgentConfig = {
  id: "master-agent",
  name: "Master Agent",
  description: "A test agent for all tools + voice",
  modelConfig: DEFAULT_MODELS.GOOGLE_MAIN as ModelConfig,
  instructions: `
    # MASTER AGENT ROLE
    You are a flexible, general-purpose agent designed for testing and experimentation.
    You have access to a wide range of tools and workflows. Your goal is to help the user
    explore, debug, and prototype any task or workflow in the Mastra environment.

    # GUIDELINES
    - Use any available tool as needed.
    - Be verbose in your output if it helps debugging.
    - If a tool fails, report the error and suggest next steps.
    - Output format is flexible—respond in whatever structure is most useful for the task.
    - You may return plain text, JSON, or mixed content.
    - No strict schema is enforced.
  `,
  toolIds: [
    "read-file",
    "write-file",
    "tavily-search",
    "brave-search",
    "vector-query",
    "google-vector-query",
    "filtered-vector-query",
    "search-documents",
    "github_search_repositories",
    "github_list_user_repos",
    "github_get_repo",
    "github_search_code",
    "read-knowledge-file",
    "write-knowledge-file",
    "arxiv_search",
    "bias-eval",
    "toxicity-eval",
    "hallucination-eval",
    "summarization-eval",
    "token-count-eval",
    "create-graph-rag",
    "graph-rag-query",
    "wikipedia_get_page_summary",
    "mkdir",
    "copy",
    "move",
    "list-files-with-walk",
    "list-files",
    "delete-file",
    "edit-file",
    "create-file",
    "arxiv_pdf_url",
    "arxiv_download_pdf",
    "tickerDetails",
    "tickerNews",
    "tickerAggregates",
    "tickerPreviousClose",
    "cryptoAggregates",
    "cryptoPrice",
    "cryptoTickers",
    "execute_code",
    "hyper-agent-task",
    'docker_obsidian_list_files_in_dir',
    'docker_obsidian_list_files_in_vault',
    'docker_obsidian_get_file_contents',
    'docker_obsidian_simple_search',
    'docker_obsidian_patch_content',
    'docker_obsidian_append_content',
    'docker_obsidian_delete_file',
    'docker_get_current_time',
    'docker_convert_time',
    'docker_add_observations',
    'docker_delete_entities',
    'docker_delete_observations',
    'docker_delete_relations',
    'docker_read_graph',
    'docker_search_nodes',
    'docker_open_nodes',
    'docker_create_relations',
    'docker_create_entities',
    'docker_start-chrome',
    'docker_curl',
    'docker_curl-manual',
    'docker_interact-with-chrome',
    'mcp-pandoc_convert-contents',
    'mcp-painter_drawing_generateCanvas',
    'mcp-painter_drawing_fillRectangle',
    'mcp-painter_drawing_getCanvasPng',
    'mcp-painter_drawing_getCanvasData',
    'claudedesktopcommander_execute_command',
    'claudedesktopcommander_read_output',
    'claudedesktopcommander_force_terminate',
    'claudedesktopcommander_list_sessions',
    'claudedesktopcommander_list_processes',
    'claudedesktopcommander_kill_process',
    'claudedesktopcommander_block_command',
    'claudedesktopcommander_unblock_command',
    'claudedesktopcommander_list_blocked_commands',
    'claudedesktopcommander_read_file',
    'claudedesktopcommander_read_multiple_files',
    'claudedesktopcommander_write_file',
    'claudedesktopcommander_create_directory',
    'claudedesktopcommander_list_directory',
    'claudedesktopcommander_move_file',
    'claudedesktopcommander_search_files',
    'claudedesktopcommander_get_file_info',
    'claudedesktopcommander_list_allowed_directories',
    'claudedesktopcommander_edit_block',
    'clear-thought_sequentialthinking',
    'clear-thought_mentalmodel',
    'clear-thought_debuggingapproach',
    'n8n-workflow-builder_create_workflow',
    'deepview-mcp_deepview',
    'mermaid-mcp-server_generate',
  ],
  responseValidation: undefined,             // or your hook config
  tools: undefined,                          // only if you want to override tool list
  voiceConfig: {
    provider: VoiceProvider.GOOGLE,
    apiKey: process.env.GOOGLE_API_KEY,
    speaker: "en-US-Wavenet-D",
    options: {},
  } as VoiceConfig,
};

// Validate masterAgentConfig against the schema
try {
  MasterAgentConfigSchema.parse(masterAgentConfig);
  console.log("Master agent config validated successfully."); // Optional success log
} catch (error) {
  console.error("Master agent config validation failed:", error);
  // Decide if you want to throw the error or handle it
  // throw error;
}