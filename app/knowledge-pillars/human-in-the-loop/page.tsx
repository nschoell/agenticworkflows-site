import Link from "next/link";
import { Users, ShieldCheck, ArrowLeft, ArrowRight } from "lucide-react";
import Layout from "../../../components/Layout";

const principles = [
  {
    title: "Oversight by design",
    desc: "Humans sit at the critical checkpoints, not as an afterthought.",
  },
  {
    title: "Trustworthy escalation",
    desc: "The agent knows when to ask, and hands off with full context.",
  },
  {
    title: "Quality & alignment",
    desc: "Feedback loops keep outputs aligned with intent and safety.",
  },
  {
    title: "Explainable action",
    desc: "Every decision is traceable so you can audit and improve.",
  },
];

export default function HumanInTheLoopPage() {
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
            <Users className="h-4 w-4" /> Pillar
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Human-in-the-Loop
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-400">
            Designing reliable AI systems where human oversight ensures safety,
            quality, and alignment.
          </p>
        </div>
      </section>

      <section className="container-blog py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p) => (
            <div key={p.title} className="card">
              <ShieldCheck className="mb-3 h-6 w-6 text-brand-400" />
              <h2 className="mb-2 font-semibold">{p.title}</h2>
              <p className="text-sm text-slate-400">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold">Where it lands in practice</h2>
            <p className="mt-2 max-w-xl text-slate-400">
              Read the trend analysis on why the most successful AI systems
              pair autonomy with human oversight.
            </p>
          </div>
          <Link href="/archive" className="btn-primary">
            Read the trend <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
