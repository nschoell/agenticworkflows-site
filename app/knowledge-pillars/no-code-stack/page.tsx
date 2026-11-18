import Link from "next/link";
import { Blocks, Layers, ArrowLeft, ArrowRight } from "lucide-react";
import Layout from "../../../components/Layout";

const stack = [
  {
    title: "Composable tools",
    desc: "Snap together AI models, data sources, and actions from ready-made blocks.",
  },
  {
    title: "Production-ready",
    desc: "Build applications that scale without heavy engineering effort.",
  },
  {
    title: "Iterate fast",
    desc: "Ship, measure, and improve without a full build pipeline.",
  },
  {
    title: "Own your stack",
    desc: "Stay portable by choosing open, interoperable components.",
  },
];

export default function NoCodeStackPage() {
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
            <Blocks className="h-4 w-4" /> Pillar
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            No-Code Stack
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-400">
            Exploring the powerful combination of low-code platforms and AI to
            build production applications without heavy engineering.
          </p>
        </div>
      </section>

      <section className="container-blog py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stack.map((s) => (
            <div key={s.title} className="card">
              <h2 className="mb-2 font-semibold">{s.title}</h2>
              <p className="text-sm text-slate-400">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="flex items-center gap-2 text-xl font-semibold">
              <Layers className="h-5 w-5 text-brand-400" /> Explore the tools
            </h2>
            <p className="mt-2 max-w-xl text-slate-400">
              Browse the curated library of tools, prompts, and cheat sheets.
            </p>
          </div>
          <Link href="/library" className="btn-primary">
            Open the Library <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
