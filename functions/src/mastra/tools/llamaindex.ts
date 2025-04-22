import {
  type AIFunctionLike,
  AIFunctionSet,
  asZodOrJsonSchema,
} from "@agentic/core";
import { createMastraTools } from "@agentic/mastra";;
import { FunctionTool, QueryEngineTool } from "llamaindex";
import { z } from "zod";

/* Output schema for LlamaIndex query tool */
export const LlamaIndexQueryOutputSchema = z.object({
  result: z.string(),
  sources: z.array(z.string()).optional(),
});

/**
 * Converts a set of Agentic stdlib AI functions to an array of LlamaIndex-
 * compatible tools.
 *
 * Note: The returned tools should be wrapped with `createMastraTools` from
 * @agentic/mastra when added to extraTools in index.ts like:
 * `extraTools.push(...createMastraTools(...llamaIndexArray));`
 *
 * @param aiFunctionLikeTools - Agentic functions to convert to LlamaIndex tools
 * @returns An array of LlamaIndex compatible tools
 */
export function createLlamaIndexTools(...aiFunctionLikeTools: AIFunctionLike[]) {
  const fns = new AIFunctionSet(aiFunctionLikeTools);
  return fns.map((fn) => {
    const tool = FunctionTool.from(fn.execute, {
      name: fn.spec.name,
      description: fn.spec.description,
      parameters: asZodOrJsonSchema(fn.inputSchema) as any,
    });
    // Patch output schema for specific tool names
    if (fn.spec.name === "llamaindex_query") {
      (tool as any).outputSchema = LlamaIndexQueryOutputSchema;
    }
    return tool;
  });
}

/**
 * Helper function to create Mastra-compatible LlamaIndex tools
 *
 * @param aiFunctionLikeTools - Agentic functions to convert and adapt
 * @returns An array of Mastra-compatible tools
 */
export function createMastraLlamaIndexTools(...aiFunctionLikeTools: AIFunctionLike[]) {
  return createMastraTools(...aiFunctionLikeTools);
}

/**
 * Creates a QueryEngine tool for LlamaIndex.
 * @param queryEngine - The query engine instance.
 * @param options - Optional settings like name, description, and returnDirect flag.
 * @returns A LlamaIndex QueryEngine tool.
 */
export function createLlamaIndexQueryTool(queryEngine: any, options?: { name?: string, description?: string, returnDirect?: boolean }) {
  const tool = QueryEngineTool.from_defaults(queryEngine, {
    name: options?.name ?? "llamaindex_query",
    description: options?.description ?? "A query engine tool powered by LlamaIndex.",
    returnDirect: options?.returnDirect ?? false,
  });
  tool.outputSchema = LlamaIndexQueryOutputSchema;
  return tool;
}

/**
 * Creates an OnDemandLoader tool for LlamaIndex.
 * @param loader - The data loader instance.
 * @param options - Optional settings like name and description.
 * @returns A LlamaIndex OnDemandLoader tool.
export function createLlamaIndexOnDemandLoaderTool(loader: any, options?: { name?: string, description?: string }) {
  // Access OnDemandLoaderTool from the global scope to satisfy TypeScript.
  const onDemandLoaderTool = (globalThis as any).OnDemandLoaderTool;
  return onDemandLoaderTool.from_defaults(loader, {
    name: options?.name ?? "llamaindex_ondemand_loader",
    description: options?.description ?? "An on-demand loader tool using LlamaIndex.",
  });
}

/**
 * Creates Load and Search tools for LlamaIndex from a given tool.
 * This returns an array of tools (load and search).
 * @param tool - The underlying tool.
 * @param options - Optional settings like name and description.
 * @returns An array of LlamaIndex Load and Search tools.
export function createLlamaIndexLoadAndSearchTools(tool: any, options?: { name?: string, description?: string }) {
  const loadAndSearchToolSpec = (globalThis as any).LoadAndSearchToolSpec;
  const spec = loadAndSearchToolSpec.from_defaults(tool, {
    name: options?.name,
    description: options?.description,
  });
  return spec.to_tool_list();
}
}

// Export createMastraTools for convenience
export { createMastraTools };
export