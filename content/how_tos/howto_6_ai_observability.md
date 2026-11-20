---
title: "How‑To: Deploy AI‑Based Log Enrichment on Edge Nodes"
---

### Overview
This guide walks engineers through adding **AI‑driven log enrichment** to edge‑deployed services, turning raw logs into contextual alerts before they hit the central observability stack.

### Prerequisites
- Edge node with **Docker** and **Ollama** installed.
- Access to a **vector store** (Weaviate, Pinecone) reachable from the edge.
- Basic familiarity with **Node.js** (or Python) scripts.

### Step‑by‑step
1. **Install Ollama** on the edge node (binary or Docker).
   ```bash
   curl -L https://ollama.com/install.sh | sh
   ollama serve &
   ```
2. **Pull the model** you’ll use for enrichment (e.g., `qwen3.8:27b-q8_0`).
   ```bash
   ollama pull qwen3.8:27b-q8_0
   ```
3. **Create an enrichment script** (Node example):
   ```js
   const { exec } = require('child_process');
   const fetch = require('node-fetch');

   async function enrich(log) {
     const prompt = `Summarize this log entry and note any security or performance concerns:\n${log}`;
     const result = await execSync(`ollama run qwen3.8:27b-q8_0 "${prompt}"`).toString();
     return result.trim();
   }
   ```
4. **Send enriched logs** to the vector store:
   ```js
   const embedding = await fetch('https://your‑vector‑store.io/embed', {method:'POST', body:JSON.stringify({text})});
   await fetch('https://your‑vector‑store.io/upsert', {method:'POST', body:JSON.stringify({id:uuid, vector:embedding})});
   ```
5. **Integrate with your log collector** (e.g., Fluent Bit) to pipe each log line through the script before forwarding.

### Validation
- Run a test log through the pipeline and verify the vector store contains an entry with a meaningful summary.
- Check your central dashboard for the new enriched alert.

### Checklist
- [ ] Ollama installed and model pulled on edge.
- [ ] Vector store endpoint reachable.
- [ ] Log collector configured to use the enrichment script.
- [ ] Dashboard shows enriched alerts.

**Bottom line:** Adding AI enrichment at the edge gives you richer context earlier, reducing downstream noise and speeding up incident response.
