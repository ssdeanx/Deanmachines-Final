import type { Tool } from "@mastra/core/tools";
import { BaseAgentConfig, DEFAULT_MODELS } from "./config.types";

// Optionally: import getToolsFromIds if you need dynamic tool mapping

export const masterAgentConfig: BaseAgentConfig = {
  id: "master-agent",
  name: "Master Agent",
  description: "A general-purpose test agent for experimenting with all available tools and workflows.",
  modelConfig: DEFAULT_MODELS.GOOGLE_MAIN, // Or your preferred default
  // No strict responseValidation or Zod schema!
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
    // Copy all tool IDs from researchAgentConfig for now
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
  ],
};

export type MasterAgentConfig = typeof masterAgentConfig;