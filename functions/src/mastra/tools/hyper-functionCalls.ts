import { createTool } from "@mastra/core/tools";
import { z } from "zod";
import { runHyperAgentTask } from "../services/hyperbrowser";

export const hyperAgentTool = createTool({
  id: "hyper-agent-task",
  description: "Executes a browser automation task using HyperAgent (Google Gemini LLM + Hyperbrowser cloud).",
  inputSchema: z.object({
    task: z.string().describe("The browser automation task to perform"),
  }),
  outputSchema: z.object({
    output: z.any(),
    error: z.string().optional(),
  }),
  async execute({ context }) {
    try {
      const output = await runHyperAgentTask(context.task);
      return { output };
    } catch (error) {
      return {
        output: null,
        error: error instanceof Error ? error.message : String(error),
      };
    }
  },
});
