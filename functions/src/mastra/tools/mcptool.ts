import { MCPConfiguration } from "@mastra/mcp";
import { Tool } from "@mastra/core/tools";
import { createLogger } from "@mastra/core/logger";
import { z } from "zod";

const logger = createLogger({ name: "mcp-tools", level: "debug" });

logger.info("Initializing MCP tools for use with agents.");

// Define a default schema for missing or invalid outputs
const DefaultOutputSchema = z.unknown().describe("Output schema was missing or invalid from MCP source, defaulted to unknown.");

/**
 * Helper to create Mastra-compatible MCP tools for use with agents.
 * Fetches tools via MCP, validates input schemas, and patches missing/invalid
 * output schemas with z.unknown() to ensure framework compatibility.
 */
export async function createMastraMcpTools(config?: {
  servers?: Record<string, any>;
  timeout?: number;
}): Promise<Record<string, Tool<any, any>>> {
  const effectiveTimeout = config?.timeout ?? 60000;
  logger.info(`[MCP] Initializing MCPConfiguration with timeout: ${effectiveTimeout}ms`);

  const mcp = new MCPConfiguration({
    servers: config?.servers ?? {
      mastra: {
        command: "npx",
        args: ["-y", "@mastra/mcp-docs-server@latest"],
      },
      docker: {
        command: "docker",
        args: [
          "run", "-i", "--rm", "alpine/socat",
          "STDIO", "TCP:host.docker.internal:8811"
        ],
      }
    },
    timeout: effectiveTimeout,
  });

  try {
    logger.info("[MCP] Calling mcp.getTools()...");
    const tools = await mcp.getTools();
    logger.info(`[MCP] Successfully retrieved ${Object.keys(tools).length} tools.`);

    // Validate input schemas and patch output schemas if necessary
    for (const toolName in tools) {
      const tool = tools[toolName];
      let inputSchemaValid = false;
      let outputSchemaPatched = false;
      let schemaError = "";

      // --- Validate Input Schema (Required) ---
      if (tool.inputSchema && tool.inputSchema instanceof z.ZodType) {
        inputSchemaValid = true;
      } else {
        // Construct specific error message
        if (!tool.inputSchema) {
          schemaError = `Tool '${toolName}' is missing required inputSchema.`;
        } else {
          schemaError = `Tool '${toolName}' has an invalid inputSchema (not a Zod schema). Type: ${typeof tool.inputSchema}`;
        }
        logger.error(`[MCP] Schema Validation Error: ${schemaError}`);
        // Stop initialization if a required input schema is invalid
        throw new Error(schemaError);
      }

      // --- Validate/Patch Output Schema ---
      // Check if outputSchema is missing or not a valid Zod schema instance
      if (!(tool.outputSchema && tool.outputSchema instanceof z.ZodType)) {
        if (!tool.outputSchema) {
           logger.warn(`[MCP] Tool '${toolName}' is missing outputSchema. Patching with z.unknown().`);
        } else {
           logger.warn(`[MCP] Tool '${toolName}' has an invalid outputSchema (not a Zod schema). Type: ${typeof tool.outputSchema}. Patching with z.unknown().`);
        }
        // Patch with the default schema to ensure framework compatibility
        tool.outputSchema = DefaultOutputSchema;
        outputSchemaPatched = true;
      }

      logger.debug(`[MCP] Tool '${toolName}': InputSchema Valid=${inputSchemaValid}, OutputSchema Patched=${outputSchemaPatched}`);
    }

    logger.info("[MCP] Finished schema validation and patching for retrieved tools.");
    return tools;

  } catch (error) {
    logger.error("[MCP] Error during tool initialization or schema validation:", error);
    // Ensure the error is re-thrown to prevent application from proceeding with incomplete tools
    throw error;
  } finally {
     // Removed explicit disconnect call
     logger.info("[MCP] Skipping explicit disconnect in finally block.");
  }
}