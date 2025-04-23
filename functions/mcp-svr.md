# Langsmith Chain of Density

https://smith.langchain.com/hub/deanmachines-ai/chain-of-density
https://smith.langchain.com/hub/deanmachines-ai/synthetic-training-data
https://smith.langchain.com/hub/deanmachines-ai/prompt-maker
https://smith.langchain.com/hub/deanmachines-ai/superb_system_instruction_prompt
https://smith.langchain.com/hub/deanmachines-ai/model-evaluator
https://smith.langchain.com/hub/deanmachines-ai/rag-prompt
https://smith.langchain.com/hub/deanmachines-ai/react


```ts
// Set the LANGSMITH_API_KEY environment variable (create key in Settings > API Keys)

// If you are in a non-Node environment, please use the default "langchain/hub" entrypoint and omit includeModel for providers other than Google Generative AI. Aka Gemini.
import * as hub from "langchain/hub/node";

await hub.pull("deanmachines-ai/prompt-maker", {
  includeModel: true
});
```