import Link from "next/link";
import { Workflow, Target, Brain, ArrowLeft, ArrowRight } from "lucide-react";
import Layout from "../../../components/Layout";

const steps = [
  {
    n: "01",
    title: "Plan",
    desc: "The agent decomposes a goal into concrete steps and selects the right tools.",
  },
  {
    n: "02",
    title: "Act",
    desc: "It executes a step — calling a tool, running code, or fetching data.",
  },
  {
    n: "03",
    title: "Observe",
    desc: "The agent reads back the result and checks it against the goal.",
  },
  {
    n: "04",
    title: "Adapt",
    desc: "It revises its plan and repeats until the task is complete or it escalates to a human.",
  },
];

export default function AgenticWorkflowsPage() {
  return (
    <Layout>
      <section className="border-b border-slate-800 bg-slate-900/30">
        <div className="container-blog py-16">
          <Link
            href="/knowledge-pillars"
            className="mb-6 mr-4 inline-flex items-center gap-1 text-sm font-medium text-slate-400 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> All pillars
          </Link>
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-sm font-medium text-brand-300">
            <Workflow className="h-4 w-4" /> Pillar
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Agentic Workflows
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-400">
            Deep dive into the mechanics of autonomous agents, multi-agent
            orchestration, and tool-use patterns.
          </p>
        </div>
      </section>

      <section className="container-blog py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="card">
              <span className="text-sm font-mono text-brand-400">{s.n}</span>
              <h2 className="mt-2 text-xl font-semibold">{s.title}</h2>
              <p className="mt-2 text-slate-400">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="flex items-center gap-2 text-xl font-semibold">
              <Brain className="h-5 w-5 text-brand-400" />
              Apply it in practice
            </h2>
            <p className="mt-2 max-w-xl text-slate-400">
              See how the plan–act–observe–adapt loop maps onto real
              productivity tasks in our deep dives.
            </p>
          </div>
          <Link href="/archive" className="btn-primary">
            Read the deep dives <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
