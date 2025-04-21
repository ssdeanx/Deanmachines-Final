# General Code Style & Formatting
- Follow the Airbnb Style Guide for code formatting.
- Use PascalCase for React component file names (e.g., UserCard.tsx, not user-card.tsx).
- Prefer named exports for components.
- Consistent naming: camelCase for variables, SCREAMING_SNAKE_CASE for constants.

# Project Structure & Architecture
- **Use static routes** (not App Router).
- Follow Next.js patterns for static routing.
- Correctly determine when to use server vs. client components if applicable.
- Modular, feature-based folder structure for scalability.

# Styling & UI
- Use Tailwind v4.1.3 CSS for styling.
- No tailwind.config.
- Use Shadcn UI for components.
- Implement glassmorphism, micro-interactions, and SVG overlays for modern look.
- Ensure accessibility: ARIA labels, keyboard navigation, color contrast.

# Bio Mech Weav Theme
- The "Bio Mech Weav" theme fuses organic, biological aesthetics (soft curves, gradients, flowing overlays) with mechanical, high-tech motifs (precision lines, subtle metallics, neural mesh patterns).
- Use layered backgrounds, animated weaves, and glassy surfaces to evoke a sense of futuristic, living machinery.
- Prioritize visual harmony between organic and mechanistic elements—UI components should feel both alive and engineered.
- Color palette: luminous blues, cyans, silvers, and deep shadows, with accent gradients and subtle neon highlights.
- All UI/UX, icons, and micro-interactions should reinforce the Bio Mech Weav style for a unified, immersive experience.

# Data Fetching & Forms
- Use TanStack Query (react-query) for frontend data fetching.
- Use React Hook Form for form handling.
- Use Zod for validation.
- Normalize API responses and use DTOs for type safety.

# State Management & Logic
- Use React Context for app-wide state management.
- Prefer local state for isolated logic.

# Testing & Quality
- Write unit, integration, and E2E tests (Jest, Playwright, or Cypress).
- Enforce linting and type-checking (ESLint, Prettier, TypeScript).
- Automate code reviews and CI/CD with GitHub Actions or similar.
- Set up pre-commit hooks (lint-staged, husky) for code quality.

# Workflow & Automation
- Automate deployments using Netlify, Vercel, or custom CI pipelines.
- Use monorepo tools (Turborepo, Nx) for large projects if needed.

# Security & Compliance
- Never expose secrets or API keys in code or logs.
- Follow OWASP Top 10 for web security.
- Implement audit trails and RBAC for sensitive actions.

# Backend & Integrations
- Use Mastra AI for agent workflows.
- Use Supabase Auth for authentication.
- Prefer serverless functions for scalable backend logic.
- Document all APIs and webhook contracts.

# Mastra AI Integration

- The core Mastra instance is initialized in `functions/src/mastra/index.ts`, powering all AI capabilities.
- All agents, agent networks, and workflows are registered with the central Mastra instance for modular, extensible orchestration.
- Agents are centrally mapped and imported; networks are managed through the agent network registry.
- Workflows (e.g., RAG, multi-agent) are integrated for advanced automation and coordination.
- Logging is handled via a configured logger, with log level set by environment (`debug` or `info`).
- Observability is set up early using telemetry services (SigNoz, OpenTelemetry) for tracing and monitoring.
- After updating agents/networks, an updated OpenAPI spec can be generated via the Mastra CLI (`npx mastra openapi --output ./api.json`).
- All initialization status and registration details are logged for monitoring and debugging.
- Modular structure ensures easy extension with new agents, workflows, or networks.
- Use Mastra for agent-driven workflows, error handling, type safety, and scalable backend endpoints.
- See the main README for further Mastra-powered agent, tool, memory, and workflow best practices.

# Documentation & Collaboration
- Maintain up-to-date README and rules files (like .windsurfrules and ruls.md).
- Document key decisions and architectural patterns.
- Encourage knowledge sharing and code walkthroughs.

# Advanced Techniques
- Progressive enhancement: start simple, layer on advanced features.
- Observability: integrate logging, tracing, and performance monitoring (e.g., Sentry, Datadog).
- Feature flags for safe rollouts (e.g., LaunchDarkly).
- AI-driven code reviews and test generation where supported.
- Automated visual regression testing for UI consistency.
