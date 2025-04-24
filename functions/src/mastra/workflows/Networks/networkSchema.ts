// functions/src/mastra/workflows/Networks/networkSchema.ts
/**
 * NetworkSchema
 *
 * This module defines the schema for networks.
 */

export interface NetworkSchema {
  name: string;
  model: string;
  agents: string[];
  instructions: string;
  hooks: Record<string, any>;
}