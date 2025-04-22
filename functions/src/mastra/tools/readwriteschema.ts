import { z } from "zod";

// ===== Read File =====
export const ReadFileInputSchema = z.object({
  path: z.string().describe("Absolute or relative path of the file to read"),
  encoding: z.string().optional().default("utf8").describe("Encoding to use when reading the file"),
  startLine: z.number().optional().describe("Line to start reading from (0-indexed)"),
  endLine: z.number().optional().describe("Line to end reading at (0-indexed, inclusive)"),
});
export const ReadFileOutputSchema = z.object({
  content: z.string().describe("Content of the file"),
  metadata: z.object({
    path: z.string().describe("Absolute path to the file"),
    size: z.number().describe("Size of the file in bytes"),
    extension: z.string().describe("File extension"),
    encoding: z.string().describe("Encoding used to read the file"),
    lineCount: z.number().describe("Total number of lines in the file"),
    readLines: z.number().describe("Number of lines read"),
  }),
  success: z.boolean().describe("Whether the operation was successful"),
  error: z.string().optional().describe("Error message if the operation failed"),
});

// ===== Write File =====
export const WriteFileInputSchema = z.object({
  path: z.string().describe("Path to write the file to"),
  content: z.string().describe("Content to write to the file"),
  encoding: z.string().optional().default("utf8").describe("Encoding to use when writing the file"),
  createDirectory: z.boolean().optional().default(false).describe("Whether to create the directory if it doesn't exist"),
});
export const WriteFileOutputSchema = z.object({
  metadata: z.object({
    path: z.string(),
    size: z.number(),
    extension: z.string(),
    encoding: z.string(),
  }),
  success: z.boolean(),
  error: z.string().optional(),
});

// ===== Edit File (Search/Replace) =====
export const EditFileInputSchema = z.object({
  path: z.string().describe("Path of the file to edit"),
  search: z.string().describe("String or regex to search for"),
  replace: z.string().describe("Replacement string"),
  encoding: z.string().optional().default("utf8"),
  isRegex: z.boolean().optional().default(false),
});
export const EditFileOutputSchema = z.object({
  metadata: z.object({
    path: z.string(),
    size: z.number(),
    extension: z.string(),
    encoding: z.string(),
    edits: z.number(),
  }),
  success: z.boolean(),
  error: z.string().optional(),
});

// ===== Delete File =====
export const DeleteFileInputSchema = z.object({
  path: z.string().describe("Path of the file to delete"),
});
export const DeleteFileOutputSchema = z.object({
  path: z.string(),
  success: z.boolean(),
  error: z.string().optional(),
});

// ===== List Files =====
export const ListFilesInputSchema = z.object({
  path: z.string().describe("Directory path to list"),
  recursive: z.boolean().optional().default(false),
  filterExtension: z.string().optional(),
});
export const ListFilesOutputSchema = z.object({
  files: z.array(
    z.object({
      name: z.string(),
      path: z.string(),
      isDirectory: z.boolean(),
      extension: z.string(),
    })
  ),
  success: z.boolean(),
  error: z.string().optional(),
});

// ===== Read Knowledge File =====
export const ReadKnowledgeFileInputSchema = z.object({
  path: z.string().describe("Knowledge file path"),
  encoding: z.string().optional().default("utf8"),
});
export const ReadKnowledgeFileOutputSchema = z.object({
  content: z.string(),
  metadata: z.object({
    path: z.string(),
    size: z.number(),
    extension: z.string(),
    encoding: z.string(),
  }),
  success: z.boolean(),
  error: z.string().optional(),
});

// ===== Write Knowledge File =====
export const WriteKnowledgeFileInputSchema = z.object({
  path: z.string().describe("Knowledge file path"),
  content: z.string().describe("Content to write"),
  encoding: z.string().optional().default("utf8"),
});
export const WriteKnowledgeFileOutputSchema = z.object({
  path: z.string(),
  size: z.number(),
  extension: z.string(),
  encoding: z.string(),
  success: z.boolean(),
  error: z.string().optional(),
});

// ===== Create File =====
export const CreateFileInputSchema = z.object({
  path: z.string().describe("Path to create the file at"),
  content: z.string().describe("Content for the new file"),
  encoding: z.string().optional().default("utf8"),
  createDirectory: z.boolean().optional().default(false),
});
export const CreateFileOutputSchema = z.object({
  metadata: z.object({
    path: z.string(),
    size: z.number(),
    extension: z.string(),
    encoding: z.string(),
  }),
  success: z.boolean(),
  error: z.string().optional(),
});