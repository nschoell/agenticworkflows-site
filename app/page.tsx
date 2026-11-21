import Link from "next/link";
import {
  Rocket,
  Workflow,
  BrainCircuit,
  Users,
  Blocks,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Layout from "../components/Layout";

const pillars = [
  {
    title: "Agentic Workflows",
    href: "/knowledge-pillars/agentic-workflows",
    desc: "Design and orchestrate autonomous AI agents that plan, act, and adapt.",
    icon: Workflow,
  },
  {
    title: "AI for Operations",
    href: "/knowledge-pillars/ai-for-operations",
    desc: "Use AI to automate and optimize the operational backbone of your business.",
    icon: BrainCircuit,
  },
  {
    title: "Human-in-the-Loop",
    href: "/knowledge-pillars/human-in-the-loop",
    desc: "Build systems where humans supervise and steer AI for better outcomes.",
    icon: Users,
  },
  {
    title: "No-Code Stack",
    href: "/knowledge-pillars/no-code-stack",
    desc: "Assemble powerful automation stacks without writing code.",
    icon: Blocks,
  },
];

const latest = [
  {
    title: "Deep Dive: AI‑Driven Knowledge Management for Teams",
    category: "Deep Dive",
    href: "/posts/deep-dive-5",
    excerpt:
      "Turn fragmented docs, Slack threads, and emails into a searchable AI‑powered knowledge hub that keeps managers in the loop.",
  },
  {
    title: "How‑To: Implement Real‑Time AI‑Powered Operations Monitoring",
    category: "How-To",
    href: "/posts/howto-5-ai-observability",
    excerpt:
      "Step‑by‑step guide for engineers to build an AI‑augmented observability pipeline.",
  },
];

export default function HomePage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(79,70,229,0.25),transparent)]" />
        <div className="container-blog py-24 text-center sm:py-32">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-sm font-medium text-brand-300">
            <Sparkles className="h-4 w-4" /> Your guide to working smarter with AI
          </span>
          <h1 className="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight sm:text-6xl">
            AI Productivity,{" "}
            <span className="bg-gradient-to-r from-brand-400 to-brand-300 bg-clip-text text-transparent">
              without the guesswork
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Deep dives, how-tos, and frameworks on agentic workflows, AI-driven
            operations, and the human-in-the-loop future of work.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/archive" className="btn-primary">
              <Rocket className="h-4 w-4" /> Explore the Archive
            </Link>
            <Link href="/library" className="btn-ghost">
              Browse the Library <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Knowledge pillars */}
      <section className="container-blog py-16">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight">
            Four knowledge pillars
          </h2>
          <p className="mt-3 text-slate-400">
            Every article on this site maps to one of these areas. Start with
            the pillar that matches where you want to go.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <Link key={p.href} href={p.href} className="card group block">
              <p.icon className="mb-4 h-8 w-8 text-brand-400" />
              <h3 className="mb-2 font-semibold group-hover:text-brand-300">
                {p.title}
              </h3>
              <p className="text-sm text-slate-400">{p.desc}</p>
            </Link>
          ))}
        </div>
      </section>




      <section className="border-t border-slate-800 bg-slate-900/30">
        <div className="container-blog py-16">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                Latest from the archive
              </h2>
              <p className="mt-3 text-slate-400">
                Fresh takes on building productive AI systems.
              </p>
            </div>
            <Link
              href="/archive"
              className="hidden items-center gap-1 text-sm font-medium text-brand-400 hover:text-brand-300 sm:flex"
            >
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {latest.map((post) => (
              <Link key={post.title} href={post.href} className="card block">
                <span className="mb-3 inline-block rounded-full bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-300">
                  {post.category}
                </span>
                <h3 className="mb-2 font-semibold">{post.title}</h3>
                <p className="text-sm text-slate-400">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    {/* Recent Trend */}
    <section className="border-t border-slate-800 bg-slate-900/30">
      <div className="container-blog py-12">
        <h2 className="mb-6 text-2xl font-bold text-white">Recent Trend</h2>
        <Link href="/posts/trend-3-manager" className="card block">
          <span className="mb-3 inline-block rounded-full bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-300">Trend</span>
          <h3 className="mb-2 font-semibold">Trend Watch: AI‑Enhanced Security Monitoring (Manager Overview)</h3>
          <p className="text-sm text-slate-400">AI‑augmented security monitoring turns raw logs into actionable stories, helping managers prioritize and act faster.</p>
        </Link>
      </div>
    </section>
    {/* Full Trend Article */}
    <section className="border-t border-slate-800 bg-slate-900/30">
      <div className="container-blog py-12">
        <h2 className="mb-6 text-2xl font-bold text-white">Trend Watch: Real‑Time Operations Monitoring with Generative AI (Manager Overview)</h2>
        <p className="text-slate-400"><strong>Why it matters for managers</strong></p>
        <p className="text-slate-400">In 2026, the traditional metrics‑only monitoring stack (Prometheus + Grafana) is giving way to <strong>AI‑augmented observability</strong>. Instead of staring at a chart of CPU spikes, managers now get <strong>context‑rich alerts</strong> that explain what happened, why it happened, and what to do next – all in real time.</p>
        <h3 className="mt-4 text-lg font-semibold text-white">The business impact</h3>
        <ul className="list-disc pl-5 text-slate-400">
          <li>Faster incident response – Mean Time To Detect drops from minutes to seconds because the AI flags anomalies before thresholds are breached.</li>
          <li>Reduced noise – AI scores alerts by business impact, surfacing only the critical ones and cutting down on alert fatigue.</li>
          <li>Actionable insight – An alert might read: “CPU 95 % after recent DB schema migration; rollback pending,” giving your team a clear next step.</li>
          <li>Strategic visibility – Weekly AI‑generated ops reports summarize trends, bottlenecks, and improvement opportunities for leadership.</li>
        </ul>
        <h3 className="mt-4 text-lg font-semibold text-white">What’s new in the AI‑observability toolbox</h3>
        <ul className="list-disc pl-5 text-slate-400">
          <li>LLM‑driven summarization – Large language models (Claude 3.5, GPT‑4o, or local Ollama models) turn raw metrics into natural‑language explanations.</li>
          <li>Vector‑store correlation – Embeddings of recent events, logs, and change‑logs let the AI surface related context instantly.</li>
          <li>Feedback loop – Managers can up‑vote or down‑vote alerts, training the system to prioritize the most valuable signals.</li>
        </ul>
        <h3 className="mt-4 text-lg font-semibold text-white">Quick win checklist for a manager</h3>
        <ol className="list-decimal pl-5 text-slate-400">
          <li>Start with two data sources – Prometheus metrics + your incident ticket system (e.g., Jira).</li>
          <li>Enable a hosted vector store – Pinecone’s free tier works for a pilot.</li>
          <li>Set up a Slack webhook – route AI‑generated alerts to a dedicated <code>#ops‑alerts</code> channel.</li>
          <li>Schedule a weekly digest – let the AI produce a short ops health report for the leadership meeting.</li>
        </ol>
        <p className="mt-4 text-slate-400"><strong>Bottom line:</strong> By turning raw numbers into story‑driven insights, you give your team the context they need to act fast, reduce fire‑drills, and keep the business moving forward.</p>
      </div>
    </section>
    </Layout>
  );
}

