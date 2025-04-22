# Tool Fails

- "calculator", // breaks agents, TypeNames are not correct, needs fixed in zod2jsonschema
- "memory-query" // breaks agents, when used they can respond,  need to be removed from agent tools or refactored
"calculate-reward",
"define-reward-function",
"optimize-policy"
"llm-chain",
"google-search",
"exa_search",

## testing

"tickerDetails"
"tickerNews"
"tickerAggregates"
"tickerPreviousClose"
"cryptoAggregates"
"cryptoPrice",
"cryptoTickers",
"reddit_searchPosts"
"reddit_getPost"
"reddit_listSubredditPosts"
"reddit_getSubreddit"



"summarization-eval",


WARN [2025-04-22 16:20:51.789 -0400] (tool-initialization): Tool "docker_fetch" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.789 -0400] (tool-initialization): Tool "docker_add_issue_comment" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.789 -0400] (tool-initialization): Tool "docker_create_branch" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.789 -0400] (tool-initialization): Tool "docker_create_issue" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.789 -0400] (tool-initialization): Tool "docker_create_or_update_file" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.789 -0400] (tool-initialization): Tool "docker_create_pull_request" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.789 -0400] (tool-initialization): Tool "docker_create_pull_request_review" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.789 -0400] (tool-initialization): Tool "docker_create_repository" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.789 -0400] (tool-initialization): Tool "docker_fork_repository" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.789 -0400] (tool-initialization): Tool "docker_get_code_scanning_alert" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.789 -0400] (tool-initialization): Tool "docker_get_file_contents" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.789 -0400] (tool-initialization): Tool "docker_get_issue" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.789 -0400] (tool-initialization): Tool "docker_get_issue_comments" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.789 -0400] (tool-initialization): Tool "docker_get_me" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.789 -0400] (tool-initialization): Tool "docker_get_pull_request" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.789 -0400] (tool-initialization): Tool "docker_get_pull_request_comments" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.789 -0400] (tool-initialization): Tool "docker_get_pull_request_files" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.789 -0400] (tool-initialization): Tool "docker_get_pull_request_reviews" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.789 -0400] (tool-initialization): Tool "docker_get_pull_request_status" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.790 -0400] (tool-initialization): Tool "docker_list_code_scanning_alerts" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.790 -0400] (tool-initialization): Tool "docker_list_commits" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.790 -0400] (tool-initialization): Tool "docker_list_issues" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.790 -0400] (tool-initialization): Tool "docker_list_pull_requests" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.790 -0400] (tool-initialization): Tool "docker_merge_pull_request" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.790 -0400] (tool-initialization): Tool "docker_push_files" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.790 -0400] (tool-initialization): Tool "docker_search_code" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.790 -0400] (tool-initialization): Tool "docker_search_issues" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.790 -0400] (tool-initialization): Tool "docker_search_repositories" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.790 -0400] (tool-initialization): Tool "docker_search_users" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.790 -0400] (tool-initialization): Tool "docker_update_issue" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.790 -0400] (tool-initialization): Tool "docker_update_pull_request_branch" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.790 -0400] (tool-initialization): Tool "docker_list-endpoints" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.790 -0400] (tool-initialization): Tool "docker_get-endpoint" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.790 -0400] (tool-initialization): Tool "docker_get-request-body" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.790 -0400] (tool-initialization): Tool "docker_get-response-schema" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.790 -0400] (tool-initialization): Tool "docker_get-path-parameters" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.790 -0400] (tool-initialization): Tool "docker_list-components" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.790 -0400] (tool-initialization): Tool "docker_get-component" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.790 -0400] (tool-initialization): Tool "docker_list-security-schemes" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.790 -0400] (tool-initialization): Tool "docker_get-examples" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.790 -0400] (tool-initialization): Tool "docker_search-schema" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.791 -0400] (tool-initialization): Tool "docker_puppeteer_navigate" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.791 -0400] (tool-initialization): Tool "docker_puppeteer_screenshot" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.791 -0400] (tool-initialization): Tool "docker_puppeteer_click" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.791 -0400] (tool-initialization): Tool "docker_puppeteer_fill" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.791 -0400] (tool-initialization): Tool "docker_puppeteer_select" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.791 -0400] (tool-initialization): Tool "docker_puppeteer_hover" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.791 -0400] (tool-initialization): Tool "docker_puppeteer_evaluate" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.791 -0400] (tool-initialization): Tool "docker_tool-registration" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.791 -0400] (tool-initialization): Tool "docker_create_entities" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.791 -0400] (tool-initialization): Tool "docker_create_relations" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.791 -0400] (tool-initialization): Tool "docker_add_observations" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.791 -0400] (tool-initialization): Tool "docker_delete_entities" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.791 -0400] (tool-initialization): Tool "docker_delete_observations" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.791 -0400] (tool-initialization): Tool "docker_delete_relations" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.791 -0400] (tool-initialization): Tool "docker_read_graph" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.791 -0400] (tool-initialization): Tool "docker_search_nodes" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.791 -0400] (tool-initialization): Tool "docker_open_nodes" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.791 -0400] (tool-initialization): Tool "docker_get_current_time" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.791 -0400] (tool-initialization): Tool "docker_convert_time" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.791 -0400] (tool-initialization): Tool "docker_interact-with-chrome" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.791 -0400] (tool-initialization): Tool "docker_curl-manual" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.791 -0400] (tool-initialization): Tool "docker_curl" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.791 -0400] (tool-initialization): Tool "docker_start-chrome" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.791 -0400] (tool-initialization): Tool "docker_get_transcript" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.792 -0400] (tool-initialization): Tool "docker_docker" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.792 -0400] (tool-initialization): Tool "docker_obsidian_list_files_in_dir" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.792 -0400] (tool-initialization): Tool "docker_obsidian_list_files_in_vault" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.792 -0400] (tool-initialization): Tool "docker_obsidian_get_file_contents" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.792 -0400] (tool-initialization): Tool "docker_obsidian_simple_search" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.792 -0400] (tool-initialization): Tool "docker_obsidian_patch_content" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.792 -0400] (tool-initialization): Tool "docker_obsidian_append_content" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.792 -0400] (tool-initialization): Tool "docker_obsidian_delete_file" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.792 -0400] (tool-initialization): Tool "docker_obsidian_complex_search" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.792 -0400] (tool-initialization): Tool "docker_obsidian_batch_get_file_contents" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.792 -0400] (tool-initialization): Tool "docker_obsidian_get_periodic_note" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.792 -0400] (tool-initialization): Tool "docker_obsidian_get_recent_periodic_notes" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.792 -0400] (tool-initialization): Tool "docker_obsidian_get_recent_changes" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.792 -0400] (tool-initialization): Tool "docker_brave_web_search" is missing a valid Zod outputSchema (after potential patching).
WARN [2025-04-22 16:20:51.792 -0400] (tool-initialization): Tool "docker_brave_local_search" is missing a valid Zod outputSchema (after potential patching).


## working but careful one breakage when used in agents & checking traces

"format-content",
    "search-documents",
    "read-file",
    "write-file",
    "collect-feedback",
    "brave-search",
    "github_get_user_by_username",
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
    "completeness-eval",
    "content-similarity-eval",
    "answer-relevancy-eval",
    "context-precision-eval",
    "create-graph-rag",
    "graph-rag-query",
    "execute_python",
    "wikipedia_get_page_summary",
    "vector-query",
    "google-vector-query",
    "filtered-vector-query",
    "tavily-search",
    
"token-count-eval",
"completeness-eval",
"content-similarity-eval",
"answer-relevancy-eval",
"context-precision-eval",
"context-position-eval"
"tone-consistency-eval",
"keyword-coverage-eval",
"textual-difference-eval",
"faithfulness-eval",
"bias-eval",
"toxicity-eval",
"hallucination-eval",

## 100% working

    ```ts
    "read-file", // Corrected ID
    "write-file", // Corrected ID
    "tavily-search", // Specific search tool
    "brave-search", // Specific search tool
    "vector-query", // Specific vector tool
    "google-vector-query", // Specific vector tool
    "filtered-vector-query", // Specific vector tool
    "search-documents", // Specific document tool
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
    "execute_python",
    "wikipedia_get_page_summary",
    "context-precision-eval",
    "embed-document",
    ```



## Troubleshooting `zod2jsonschema` Issues

### Context

*   Using `zod2jsonschema` to define the structure of agent responses and tool inputs.
*   Specifically for agentic tools like Arxiv, Github, and E2B sandboxes.
*   JSON Schema is used as a data contract for APIs and tools.

### Troubleshooting Steps

1.  **Focus on the Data Flow:**
    *   Trace the data from the agent's response or tool input, through the `zod2jsonschema` conversion, and into the target system (e.g., Arxiv API, Github API, E2B sandbox).
    *   Identify where the data is being transformed or validated along the way.

2.  **Inspect the Generated JSON Schemas:**
    *   Examine the JSON schemas generated by `zod2jsonschema` for the problematic tools.
    *   Look for any inconsistencies, errors, or unexpected structures.
    *   Use online JSON Schema validators to check the validity of the generated schemas.

3.  **Validate Against API Requirements:**
    *   Compare the generated JSON schemas with the expected input formats of the Arxiv, Github, and E2B APIs.
    *   Ensure that the schema accurately reflects the required data types, formats, and constraints.

4.  **Isolate the Zod Schemas:**
    *   Create minimal, self-contained Zod schemas that reproduce the issues you're seeing.
    *   This will help narrow down the problem to specific schema constructs or patterns.

5.  **Test with Static Data:**
    *   Instead of relying on agent responses or tool inputs, try converting static Zod schemas to JSON Schema and validating them against the API requirements.
    *   This will eliminate any potential issues with the data itself.

6.  **Consider Custom Schema Generation:**
    *   If `zod2jsonschema` is consistently generating incorrect schemas, consider writing your own custom code to generate JSON schemas from your Zod schemas.
    *   This would give you more control over the conversion process.

7.  **Versioning and Updates:**
    *   Ensure that you're using compatible versions of `zod`, `zod2jsonschema`, and any related libraries.
    *   Check for recent updates or bug fixes that might address the issues you're seeing.

### E2B Sandbox Considerations

*   Pay close attention to how the generated JSON schemas are used to define the input and output formats of the sandbox environment.
*   Ensure that the schemas are compatible with the sandbox's data validation mechanisms.
