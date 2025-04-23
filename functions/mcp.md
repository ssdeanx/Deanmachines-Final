INFO [2025-04-22 19:41:45.896 -0400] (opentelemetry-tracing): OpenTelemetry SDK initialized
INFO [2025-04-22 19:41:45.906 -0400] (KnowledgeWorkMoENetwork): Initializing KnowledgeWorkMoENetwork (ID: knowledge-work-moe-v1)...
Configuring observability for environment: production
INFO [2025-04-22 19:41:45.950 -0400] (signoz-service): Initializing SigNoz telemetry for service: deanmachines-ai-mastra
    tracesEndpoint: "http://localhost:4318/v1/traces"
    metricsEndpoint: "http://localhost:4318/v1/metrics"
    env: "development"
INFO [2025-04-22 19:41:45.996 -0400] (DeanMachinesAI-MastraCore): Initializing Mastra instance...
(node:16576) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 SIGTERM listeners added to [process]. MaxListeners is 10. Use emitter.setMaxListeners() to increase limit
(Use `node --trace-warnings ...` to show where the warning was created)


WARN [2025-04-22 19:41:45.028 -0400] (mcp-tools): [MCP] Tool 'docker_fetch' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.028 -0400] (mcp-tools): [MCP] Tool 'docker_fetch': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.028 -0400] (mcp-tools): [MCP] Tool 'docker_add_issue_comment' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.028 -0400] (mcp-tools): [MCP] Tool 'docker_add_issue_comment': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.028 -0400] (mcp-tools): [MCP] Tool 'docker_create_branch' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.028 -0400] (mcp-tools): [MCP] Tool 'docker_create_branch': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.028 -0400] (mcp-tools): [MCP] Tool 'docker_create_issue' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.028 -0400] (mcp-tools): [MCP] Tool 'docker_create_issue': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.028 -0400] (mcp-tools): [MCP] Tool 'docker_create_or_update_file' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.028 -0400] (mcp-tools): [MCP] Tool 'docker_create_or_update_file': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.028 -0400] (mcp-tools): [MCP] Tool 'docker_create_pull_request' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.028 -0400] (mcp-tools): [MCP] Tool 'docker_create_pull_request': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.028 -0400] (mcp-tools): [MCP] Tool 'docker_create_pull_request_review' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.028 -0400] (mcp-tools): [MCP] Tool 'docker_create_pull_request_review': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.028 -0400] (mcp-tools): [MCP] Tool 'docker_create_repository' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.029 -0400] (mcp-tools): [MCP] Tool 'docker_create_repository': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.029 -0400] (mcp-tools): [MCP] Tool 'docker_fork_repository' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.029 -0400] (mcp-tools): [MCP] Tool 'docker_fork_repository': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.029 -0400] (mcp-tools): [MCP] Tool 'docker_get_code_scanning_alert' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.029 -0400] (mcp-tools): [MCP] Tool 'docker_get_code_scanning_alert': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.029 -0400] (mcp-tools): [MCP] Tool 'docker_get_file_contents' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.029 -0400] (mcp-tools): [MCP] Tool 'docker_get_file_contents': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.029 -0400] (mcp-tools): [MCP] Tool 'docker_get_issue' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.029 -0400] (mcp-tools): [MCP] Tool 'docker_get_issue': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.029 -0400] (mcp-tools): [MCP] Tool 'docker_get_issue_comments' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.029 -0400] (mcp-tools): [MCP] Tool 'docker_get_issue_comments': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.029 -0400] (mcp-tools): [MCP] Tool 'docker_get_me' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.029 -0400] (mcp-tools): [MCP] Tool 'docker_get_me': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.029 -0400] (mcp-tools): [MCP] Tool 'docker_get_pull_request' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.029 -0400] (mcp-tools): [MCP] Tool 'docker_get_pull_request': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.029 -0400] (mcp-tools): [MCP] Tool 'docker_get_pull_request_comments' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.029 -0400] (mcp-tools): [MCP] Tool 'docker_get_pull_request_comments': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.029 -0400] (mcp-tools): [MCP] Tool 'docker_get_pull_request_files' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.029 -0400] (mcp-tools): [MCP] Tool 'docker_get_pull_request_files': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.029 -0400] (mcp-tools): [MCP] Tool 'docker_get_pull_request_reviews' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.029 -0400] (mcp-tools): [MCP] Tool 'docker_get_pull_request_reviews': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.030 -0400] (mcp-tools): [MCP] Tool 'docker_get_pull_request_status' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.030 -0400] (mcp-tools): [MCP] Tool 'docker_get_pull_request_status': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.030 -0400] (mcp-tools): [MCP] Tool 'docker_list_code_scanning_alerts' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.030 -0400] (mcp-tools): [MCP] Tool 'docker_list_code_scanning_alerts': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.030 -0400] (mcp-tools): [MCP] Tool 'docker_list_commits' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.030 -0400] (mcp-tools): [MCP] Tool 'docker_list_commits': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.030 -0400] (mcp-tools): [MCP] Tool 'docker_list_issues' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.030 -0400] (mcp-tools): [MCP] Tool 'docker_list_issues': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.030 -0400] (mcp-tools): [MCP] Tool 'docker_list_pull_requests' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.030 -0400] (mcp-tools): [MCP] Tool 'docker_list_pull_requests': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.030 -0400] (mcp-tools): [MCP] Tool 'docker_merge_pull_request' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.030 -0400] (mcp-tools): [MCP] Tool 'docker_merge_pull_request': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.030 -0400] (mcp-tools): [MCP] Tool 'docker_push_files' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.030 -0400] (mcp-tools): [MCP] Tool 'docker_push_files': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.030 -0400] (mcp-tools): [MCP] Tool 'docker_search_code' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.030 -0400] (mcp-tools): [MCP] Tool 'docker_search_code': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.030 -0400] (mcp-tools): [MCP] Tool 'docker_search_issues' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.030 -0400] (mcp-tools): [MCP] Tool 'docker_search_issues': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.030 -0400] (mcp-tools): [MCP] Tool 'docker_search_repositories' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.030 -0400] (mcp-tools): [MCP] Tool 'docker_search_repositories': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.030 -0400] (mcp-tools): [MCP] Tool 'docker_search_users' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.030 -0400] (mcp-tools): [MCP] Tool 'docker_search_users': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.031 -0400] (mcp-tools): [MCP] Tool 'docker_update_issue' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.031 -0400] (mcp-tools): [MCP] Tool 'docker_update_issue': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.031 -0400] (mcp-tools): [MCP] Tool 'docker_update_pull_request_branch' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.031 -0400] (mcp-tools): [MCP] Tool 'docker_update_pull_request_branch': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.031 -0400] (mcp-tools): [MCP] Tool 'docker_list-endpoints' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.031 -0400] (mcp-tools): [MCP] Tool 'docker_list-endpoints': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.031 -0400] (mcp-tools): [MCP] Tool 'docker_get-endpoint' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.031 -0400] (mcp-tools): [MCP] Tool 'docker_get-endpoint': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.031 -0400] (mcp-tools): [MCP] Tool 'docker_get-request-body' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.031 -0400] (mcp-tools): [MCP] Tool 'docker_get-request-body': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.031 -0400] (mcp-tools): [MCP] Tool 'docker_get-response-schema' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.031 -0400] (mcp-tools): [MCP] Tool 'docker_get-response-schema': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.031 -0400] (mcp-tools): [MCP] Tool 'docker_get-path-parameters' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.031 -0400] (mcp-tools): [MCP] Tool 'docker_get-path-parameters': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.031 -0400] (mcp-tools): [MCP] Tool 'docker_list-components' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.031 -0400] (mcp-tools): [MCP] Tool 'docker_list-components': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.031 -0400] (mcp-tools): [MCP] Tool 'docker_get-component' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.031 -0400] (mcp-tools): [MCP] Tool 'docker_get-component': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.031 -0400] (mcp-tools): [MCP] Tool 'docker_list-security-schemes' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.031 -0400] (mcp-tools): [MCP] Tool 'docker_list-security-schemes': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.031 -0400] (mcp-tools): [MCP] Tool 'docker_get-examples' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.031 -0400] (mcp-tools): [MCP] Tool 'docker_get-examples': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.031 -0400] (mcp-tools): [MCP] Tool 'docker_search-schema' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.031 -0400] (mcp-tools): [MCP] Tool 'docker_search-schema': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.032 -0400] (mcp-tools): [MCP] Tool 'docker_puppeteer_navigate' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.032 -0400] (mcp-tools): [MCP] Tool 'docker_puppeteer_navigate': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.032 -0400] (mcp-tools): [MCP] Tool 'docker_puppeteer_screenshot' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.032 -0400] (mcp-tools): [MCP] Tool 'docker_puppeteer_screenshot': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.032 -0400] (mcp-tools): [MCP] Tool 'docker_puppeteer_click' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.032 -0400] (mcp-tools): [MCP] Tool 'docker_puppeteer_click': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.032 -0400] (mcp-tools): [MCP] Tool 'docker_puppeteer_fill' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.032 -0400] (mcp-tools): [MCP] Tool 'docker_puppeteer_fill': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.032 -0400] (mcp-tools): [MCP] Tool 'docker_puppeteer_select' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.032 -0400] (mcp-tools): [MCP] Tool 'docker_puppeteer_select': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.032 -0400] (mcp-tools): [MCP] Tool 'docker_puppeteer_hover' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.032 -0400] (mcp-tools): [MCP] Tool 'docker_puppeteer_hover': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.032 -0400] (mcp-tools): [MCP] Tool 'docker_puppeteer_evaluate' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.032 -0400] (mcp-tools): [MCP] Tool 'docker_puppeteer_evaluate': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.032 -0400] (mcp-tools): [MCP] Tool 'docker_tool-registration' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.032 -0400] (mcp-tools): [MCP] Tool 'docker_tool-registration': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.032 -0400] (mcp-tools): [MCP] Tool 'docker_create_entities' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.032 -0400] (mcp-tools): [MCP] Tool 'docker_create_entities': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.032 -0400] (mcp-tools): [MCP] Tool 'docker_create_relations' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.032 -0400] (mcp-tools): [MCP] Tool 'docker_create_relations': InputSchema Valid=true, OutputSchema Patched=true

WARN [2025-04-22 19:41:45.032 -0400] (mcp-tools): [MCP] Tool 'docker_add_observations' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.032 -0400] (mcp-tools): [MCP] Tool 'docker_add_observations': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'docker_delete_entities' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'docker_delete_entities': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'docker_delete_observations' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'docker_delete_observations': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'docker_delete_relations' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'docker_delete_relations': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'docker_read_graph' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'docker_read_graph': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'docker_search_nodes' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'docker_search_nodes': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'docker_open_nodes' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'docker_open_nodes': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'docker_get_current_time' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'docker_get_current_time': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'docker_convert_time' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'docker_convert_time': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'docker_interact-with-chrome' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'docker_interact-with-chrome': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'docker_curl-manual' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'docker_curl-manual': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'docker_curl' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'docker_curl': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'docker_start-chrome' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'docker_start-chrome': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'docker_get_transcript' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'docker_get_transcript': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'docker_docker' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'docker_docker': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'docker_obsidian_list_files_in_dir' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'docker_obsidian_list_files_in_dir': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'docker_obsidian_list_files_in_vault' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'docker_obsidian_list_files_in_vault': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'docker_obsidian_get_file_contents' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'docker_obsidian_get_file_contents': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'docker_obsidian_simple_search' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'docker_obsidian_simple_search': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'docker_obsidian_patch_content' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'docker_obsidian_patch_content': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'docker_obsidian_append_content' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'docker_obsidian_append_content': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'docker_obsidian_delete_file' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'docker_obsidian_delete_file': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'docker_obsidian_complex_search' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'docker_obsidian_complex_search': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'docker_obsidian_batch_get_file_contents' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'docker_obsidian_batch_get_file_contents': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'docker_obsidian_get_periodic_note' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'docker_obsidian_get_periodic_note': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'docker_obsidian_get_recent_periodic_notes' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'docker_obsidian_get_recent_periodic_notes': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'docker_obsidian_get_recent_changes' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'docker_obsidian_get_recent_changes': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'docker_brave_web_search' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'docker_brave_web_search': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'docker_brave_local_search' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'docker_brave_local_search': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'clear-thought_sequentialthinking' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'clear-thought_sequentialthinking': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'clear-thought_mentalmodel' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'clear-thought_mentalmodel': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'clear-thought_debuggingapproach' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'clear-thought_debuggingapproach': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'mastra_mastraBlog' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'mastra_mastraBlog': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'mastra_mastraDocs' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'mastra_mastraDocs': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'mastra_mastraExamples' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'mastra_mastraExamples': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'mastra_mastraChanges' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'mastra_mastraChanges': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'mcp-painter_drawing_generateCanvas' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'mcp-painter_drawing_generateCanvas': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'mcp-painter_drawing_fillRectangle' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'mcp-painter_drawing_fillRectangle': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'mcp-painter_drawing_getCanvasPng' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'mcp-painter_drawing_getCanvasPng': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'mcp-painter_drawing_getCanvasData' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'mcp-painter_drawing_getCanvasData': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'claudedesktopcommander_execute_command' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.033 -0400] (mcp-tools): [MCP] Tool 'claudedesktopcommander_execute_command': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.034 -0400] (mcp-tools): [MCP] Tool 'claudedesktopcommander_read_output' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.034 -0400] (mcp-tools): [MCP] Tool 'claudedesktopcommander_read_output': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.034 -0400] (mcp-tools): [MCP] Tool 'claudedesktopcommander_force_terminate' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.034 -0400] (mcp-tools): [MCP] Tool 'claudedesktopcommander_force_terminate': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.034 -0400] (mcp-tools): [MCP] Tool 'claudedesktopcommander_list_sessions' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.034 -0400] (mcp-tools): [MCP] Tool 'claudedesktopcommander_list_sessions': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.034 -0400] (mcp-tools): [MCP] Tool 'claudedesktopcommander_list_processes' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.034 -0400] (mcp-tools): [MCP] Tool 'claudedesktopcommander_list_processes': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.034 -0400] (mcp-tools): [MCP] Tool 'claudedesktopcommander_kill_process' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.034 -0400] (mcp-tools): [MCP] Tool 'claudedesktopcommander_kill_process': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.034 -0400] (mcp-tools): [MCP] Tool 'claudedesktopcommander_block_command' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.034 -0400] (mcp-tools): [MCP] Tool 'claudedesktopcommander_block_command': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.034 -0400] (mcp-tools): [MCP] Tool 'claudedesktopcommander_unblock_command' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.034 -0400] (mcp-tools): [MCP] Tool 'claudedesktopcommander_unblock_command': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.034 -0400] (mcp-tools): [MCP] Tool 'claudedesktopcommander_list_blocked_commands' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.034 -0400] (mcp-tools): [MCP] Tool 'claudedesktopcommander_list_blocked_commands': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.034 -0400] (mcp-tools): [MCP] Tool 'claudedesktopcommander_read_file' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.034 -0400] (mcp-tools): [MCP] Tool 'claudedesktopcommander_read_file': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.034 -0400] (mcp-tools): [MCP] Tool 'claudedesktopcommander_read_multiple_files' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.034 -0400] (mcp-tools): [MCP] Tool 'claudedesktopcommander_read_multiple_files': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.034 -0400] (mcp-tools): [MCP] Tool 'claudedesktopcommander_write_file' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.034 -0400] (mcp-tools): [MCP] Tool 'claudedesktopcommander_write_file': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.034 -0400] (mcp-tools): [MCP] Tool 'claudedesktopcommander_create_directory' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.034 -0400] (mcp-tools): [MCP] Tool 'claudedesktopcommander_create_directory': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.034 -0400] (mcp-tools): [MCP] Tool 'claudedesktopcommander_list_directory' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.034 -0400] (mcp-tools): [MCP] Tool 'claudedesktopcommander_list_directory': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.034 -0400] (mcp-tools): [MCP] Tool 'claudedesktopcommander_move_file' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.034 -0400] (mcp-tools): [MCP] Tool 'claudedesktopcommander_move_file': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.034 -0400] (mcp-tools): [MCP] Tool 'claudedesktopcommander_search_files' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.034 -0400] (mcp-tools): [MCP] Tool 'claudedesktopcommander_search_files': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.034 -0400] (mcp-tools): [MCP] Tool 'claudedesktopcommander_get_file_info' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.034 -0400] (mcp-tools): [MCP] Tool 'claudedesktopcommander_get_file_info': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.034 -0400] (mcp-tools): [MCP] Tool 'claudedesktopcommander_list_allowed_directories' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.034 -0400] (mcp-tools): [MCP] Tool 'claudedesktopcommander_list_allowed_directories': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.034 -0400] (mcp-tools): [MCP] Tool 'claudedesktopcommander_edit_block' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.034 -0400] (mcp-tools): [MCP] Tool 'claudedesktopcommander_edit_block': InputSchema Valid=true, OutputSchema Patched=true
WARN [2025-04-22 19:41:45.034 -0400] (mcp-tools): [MCP] Tool 'mcp-pandoc_convert-contents' is missing outputSchema. Patching with z.unknown().
DEBUG [2025-04-22 19:41:45.034 -0400] (mcp-tools): [MCP] Tool 'mcp-pandoc_convert-contents': InputSchema Valid=true, OutputSchema Patched=true
INFO [2025-04-22 19:41:45.034 -0400] (mcp-tools): [MCP] Finished schema validation and patching for retrieved tools.
INFO [2025-04-22 19:41:45.034 -0400] (mcp-tools): [MCP] Skipping explicit disconnect in finally block.