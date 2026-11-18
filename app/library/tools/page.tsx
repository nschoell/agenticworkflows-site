import Link from "next/link";
import {
  ChevronRight,
  Cpu,
  BrainCircuit,
  Blocks,
  MessageSquare,
  Bot,
  Terminal,
  Network,
  ExternalLink,
} from "lucide-react";
import Layout from "../../../components/Layout";

type Tool = {
  name: string;
  category: string;
  tagline: string;
  bestFor: string;
  website: string;
};

const tools: Tool[] = [
  {
    name: "Claude",
    category: "General Assistant",
    tagline: "Long-context reasoning, careful editing, and strong agentic tool use.",
    bestFor: "Deep document work, planning, and multi-step research.",
    website: "https://claude.ai",
  },
  {
    name: "ChatGPT",
    category: "General Assistant",
    tagline: "Broad capability, large ecosystem, and quick everyday answers.",
    bestFor: "General brainstorming, writing, and ad-hoc questions.",
    website: "https://chatgpt.com",
  },
  {
    name: "Cursor",
    category: "Coding",
    tagline: "AI-native code editor that edits whole files and runs commands.",
    bestFor: "Fast, conversational software development in a real IDE.",
    website: "https://cursor.com",
  },
  {
    name: "GitHub Copilot",
    category: "Coding",
    tagline: "Inline completions and chat directly inside your editor and terminal.",
    bestFor: "Speeding up everyday coding inside VS Code and friends.",
    website: "https://github.com/features/copilot",
  },
  {
    name: "Replit",
    category: "Coding",
    tagline: "Browser dev environment that scaffolds, runs, and ships full apps.",
    bestFor: "No-locally-setup coding and rapid app prototyping.",
    website: "https://replit.com",
  },
  {
    name: "n8n",
    category: "Automation",
    tagline: "Self-hostable workflow builder that connects apps with nodes.",
    bestFor: "Reliable, visual automation between your tools and APIs.",
    website: "https://n8n.io",
  },
  {
    name: "Make",
    category: "Automation",
    tagline: "Visual scenario builder with rich branching and data mapping.",
    bestFor: "Complex, branching automations without writing code.",
    website: "https://make.com",
  },
  {
    name: "Zapier",
    category: "Automation",
    tagline: "Huge pre-built integration catalog for two-way syncs.",
    bestFor: "Connecting two SaaS apps with minimal setup.",
    website: "https://zapier.com",
  },
  {
    name: "LangChain",
    category: "Agent Framework",
    tagline: "Composable primitives for building LLM agents and pipelines.",
    bestFor: "Custom agent logic, retrieval, and chains in code.",
    website: "https://www.langchain.com",
  },
  {
    name: "LlamaIndex",
    category: "Agent Framework",
    tagline: "Data framework focused on retrieval-augmented generation.",
    bestFor: "Grounding answers in your own documents and data.",
    website: "https://www.llamaindex.ai",
  },
  {
    name: "Pinecone",
    category: "Vector DB",
    tagline: "Managed vector database for large-scale similarity search.",
    bestFor: "Fast, hosted semantic search and RAG backends.",
    website: "https://www.pinecone.io",
  },
  {
    name: "Weaviate",
    category: "Vector DB",
    tagline: "Open-source vector DB with hybrid search and modularity.",
    bestFor: "Self-hosted semantic search with flexible filtering.",
    website: "https://weaviate.io",
  },
  {
    name: "Supabase",
    category: "Backend",
    tagline: "Open-source Postgres with auth, storage, and vector search.",
    bestFor: "A fast backend with embedded vector capabilities.",
    website: "https://supabase.com",
  },
  {
    name: "Ollama",
    category: "Local Models",
    tagline: "Run and serve open-weight models locally with a simple API.",
    bestFor: "Private, offline, or cheap local inference.",
    website: "https://ollama.com",
  },
];

const categoryIcon: Record<string, any> = {
  "General Assistant": MessageSquare,
  Coding: Terminal,
  Automation: Bot,
  "Agent Framework": BrainCircuit,
  "Vector DB": Cpu,
  Backend: Blocks,
  "Local Models": Network,
};

export default function ToolsPage() {
  return (
    <Layout>
      <section className="border-b border-slate-800 bg-slate-900/30">
        <div className="container-blog py-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-400">
            AI Tools
          </p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Curated AI Tools
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-400">
            A short, honest list of tools worth adding to your stack. Each
            entry is best described by what it&apos;s actually good at — not
            every feature it markets.
          </p>
        </div>
      </section>

      <section className="container-blog py-16">
        <ul className="grid gap-6 md:grid-cols-2">
          {tools.map((tool) => {
            const Icon = categoryIcon[tool.category] ?? Cpu;
            return (
              <li key={tool.name} className="card p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold text-slate-100">
                    <a
                      href={tool.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 hover:text-brand-400 hover:underline transition-colors"
                    >
                      {tool.name}
                      <ExternalLink size={13} className="text-slate-500" />
                    </a>
                  </h2>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400">
                    <Icon size={14} className="text-brand-500" />
                    {tool.category}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {tool.tagline}
                </p>
                <p className="mt-3 text-sm text-slate-300">
                  <span className="font-semibold text-slate-200">
                    Best for:
                  </span>{" "}
                  {tool.bestFor}
                </p>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="border-t border-slate-800 bg-slate-900/40">
        <div className="container-blog flex flex-col items-start gap-6 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold">Keep exploring the library</h2>
            <p className="mt-2 text-slate-400">
              Pair tools with ready-made prompts and quick-reference guides.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/library/prompts" className="btn-primary">
              Browse prompts
            </Link>
            <Link href="/library/cheatsheets" className="btn-ghost">
              View cheatsheets
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
