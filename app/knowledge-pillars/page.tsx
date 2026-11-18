import Link from "next/link";
import { Workflow, BrainCircuit, Users, Blocks, ArrowRight } from "lucide-react";
import Layout from "../../components/Layout";

const pillars = [
  {
    title: "Agentic Workflows",
    href: "/knowledge-pillars/agentic-workflows",
    icon: Workflow,
    desc: "Design and orchestrate autonomous AI agents that plan, act, observe, and adapt across multi-step tasks.",
  },
  {
    title: "AI for Operations",
    href: "/knowledge-pillars/ai-for-operations",
    icon: BrainCircuit,
    desc: "Use AI to automate and optimize the operational backbone: support, fulfillment, reporting, and routing.",
  },
  {
    title: "Human-in-the-Loop",
    href: "/knowledge-pillars/human-in-the-loop",
    icon: Users,
    desc: "Build systems where humans supervise, correct, and steer AI for trustworthy, high-quality outcomes.",
  },
  {
    title: "No-Code Stack",
    href: "/knowledge-pillars/no-code-stack",
    icon: Blocks,
    desc: "Assemble powerful automation and product stacks with composable, code-free tools.",
  },
];

export default function KnowledgePillarsPage() {
  return (
    <Layout>
      <section className="border-b border-slate-800 bg-slate-900/30">
        <div className="container-blog py-16">
          <h1 className="text-4xl font-extrabold tracking-tight">
            Knowledge Pillars
          </h1>
          <p className="mt-4 max-w-2xl text-slate-400">
            Four connected areas that frame everything we publish. Each pillar
            is a self-contained guide you can read top to bottom.
          </p>
        </div>
      </section>

      <section className="container-blog py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {pillars.map((p) => (
            <Link key={p.href} href={p.href} className="card group block">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10">
                  <p.icon className="h-6 w-6 text-brand-400" />
                </span>
                <h2 className="text-xl font-semibold group-hover:text-brand-300">
                  {p.title}
                </h2>
              </div>
              <p className="text-slate-400">{p.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-400">
                Read the pillar <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
