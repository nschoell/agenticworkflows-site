import Link from "next/link";
import {
  BrainCircuit,
  Search,
  Cpu,
  MessageSquare,
  Network,
  Layers,
  ClipboardCheck,
} from "lucide-react";
import Layout from "../../../components/Layout";

type Cheatsheet = {
  title: string;
  icon: any;
  summary: string;
  points: string[];
};

const cheatsheets: Cheatsheet[] = [
  {
    title: "Prompt Engineering Basics",
    icon: MessageSquare,
    summary: "The core moves that make outputs reliable.",
    points: [
      "Give a clear role, task, and expected output format.",
      "State constraints and success criteria explicitly.",
      "Provide a worked example (few-shot) for consistency.",
      "Ask the model to ask clarifying questions when ambiguous.",
    ],
  },
  {
    title: "Agent Loop Anatomy",
    icon: BrainCircuit,
    summary: "What makes an agent an agent, not a chatbot.",
    points: [
      "Plan → act → observe → reflect, in a loop.",
      "Expose tools with clear names, params, and docs.",
      "Feed tool results back into context, not just text.",
      "Cap iterations and add guardrails for safety and cost.",
    ],
  },
  {
    title: "RAG in One Page",
    icon: Search,
    summary: "Grounding answers in your own documents.",
    points: [
      "Chunk documents into sensible, overlapping pieces.",
      "Embed chunks and store them in a vector database.",
      "Retrieve the top-k nearest chunks for each query.",
      "Pass retrieved context to the model with citations.",
    ],
  },
  {
    title: "MCP Mental Model",
    icon: Network,
    summary: "How the Model Context Protocol connects tools.",
    points: [
      "A host (your app/IDE) talks to MCP servers.",
      "Servers expose tools, resources, and prompts.",
      "The model calls tools via a single standard interface.",
      "One server can serve many clients — reuse, not rewrite.",
    ],
  },
  {
    title: "Choosing a Model",
    icon: Cpu,
    summary: "Matching the model to the job.",
    points: [
      "Small + fast for classification and extraction at scale.",
      "Large + reasoning for planning, code, and complex analysis.",
      "Local/open-weight when privacy or cost dominates.",
      "Re-benchmark when models change — results shift often.",
    ],
  },
  {
    title: "Output Formats That Behave",
    icon: Layers,
    summary: "Getting structured, parseable results.",
    points: [
      "Ask for JSON with an explicit schema, not 'some JSON'.",
      "Validate output and retry with the error on failure.",
      "Use strict mode / structured outputs when available.",
      "Prefer one field per concept to avoid nesting drift.",
    ],
  },
];

export default function CheatsheetsPage() {
  return (
    <Layout>
      <section className="border-b border-slate-800 bg-slate-900/30">
        <div className="container-blog py-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-400">
            Cheatsheets
          </p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Quick-Reference Guides
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-400">
            One-page references for the AI workflows you run every day. Skim
            the points, apply them, move on.
          </p>
        </div>
      </section>

      <section className="container-blog py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cheatsheets.map((sheet) => {
            const Icon = sheet.icon;
            return (
              <article key={sheet.title} className="card flex flex-col">
                <div className="flex items-center gap-3 border-b border-slate-800 p-5">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-500/10">
                    <Icon size={20} className="text-brand-500" />
                  </span>
                  <h2 className="text-base font-bold text-slate-100">
                    {sheet.title}
                  </h2>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-sm font-medium text-brand-400">
                    {sheet.summary}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {sheet.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-sm leading-relaxed text-slate-400"
                      >
                        <ClipboardCheck
                          size={15}
                          className="mt-0.5 shrink-0 text-brand-500"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-t border-slate-800 bg-slate-900/40">
        <div className="container-blog flex flex-col items-start gap-6 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold">Put these into practice</h2>
            <p className="mt-2 text-slate-400">
              Pair the guides with ready-to-use prompts and the right tools.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/library/prompts" className="btn-primary">
              Browse prompts
            </Link>
            <Link href="/library/tools" className="btn-ghost">
              View tools
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
