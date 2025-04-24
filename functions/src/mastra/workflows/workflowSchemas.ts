import { z } from "zod";

/** Input schema for dynamic workflows */
export const dynamicInputSchema = z.object({
  dynamicInput: z.string(),
});

/** Output schema for dynamic workflows */
export const dynamicOutputSchema = z.object({
  processedValue: z.string(),
});

/** Trigger schema for main workflow */
export const mainTriggerSchema = z.object({
  inputData: z.string(),
});

/** Output schema for createDynamicWorkflowStep */
export const createDynamicWorkflowStepOutputSchema = z.object({
  dynamicWorkflowResult: dynamicOutputSchema,
});

/** Intermediate schema for complex workflow step1 */
export const intermediateSchema = z.object({ intermediateResult: z.string() });

/** Final schema for complex workflow step2 */
export const finalResultSchema = z.object({ finalResult: z.string() });

/** Schema for conditional workflow branching */
export const branchingTriggerSchema = z.object({
  type: z.enum(['simple', 'complex']),
  dynamicInput: z.string(),
});

/** Schema for control-flow check step */
export const isLongSchema = z.object({ isLong: z.boolean() });

/** Schema for control-flow message steps */
export const messageSchema = z.object({ message: z.string() });

/** Schema for retry step in control-flow workflow */
export const retrySchema = z.object({ success: z.boolean() });
