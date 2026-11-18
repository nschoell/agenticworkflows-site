import Link from "next/link";
import { BrainCircuit, Zap, ArrowLeft, ArrowRight } from "lucide-react";
import Layout from "../../../components/Layout";

const areas = [
  {
    title: "Intelligent routing",
    desc: "Direct work to the right team, tool, or model automatically.",
  },
  {
    title: "Decision support",
    desc: "Surface recommendations grounded in your live operational data.",
  },
  {
    title: "Reporting automation",
    desc: "Generate status and performance summaries without manual effort.",
  },
  {
    title: "Anomaly handling",
    desc: "Detect drift and exceptions early, and trigger the right response.",
  },
];

export default function AiForOperationsPage() {
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
            <BrainCircuit className="h-4 w-4" /> Pillar
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            AI for Operations
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-400">
            Streamlining business processes through intelligent automation and
            AI-driven decision support.
          </p>
        </div>
      </section>

      <section className="container-blog py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((a) => (
            <div key={a.title} className="card">
              <h2 className="mb-2 font-semibold">{a.title}</h2>
              <p className="text-sm text-slate-400">{a.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="flex items-center gap-2 text-xl font-semibold">
              <Zap className="h-5 w-5 text-brand-400" /> Put it to work
            </h2>
            <p className="mt-2 max-w-xl text-slate-400">
              Explore concrete patterns for wiring AI into your operational
              workflows.
            </p>
          </div>
          <Link href="/archive" className="btn-primary">
            See how-tos <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
