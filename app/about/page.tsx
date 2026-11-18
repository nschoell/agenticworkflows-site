import Link from "next/link";
import { Target, BookOpen, Users, ArrowRight } from "lucide-react";
import Layout from "../../components/Layout";

const values = [
  {
    icon: Target,
    title: "Practical over hype",
    desc: "We focus on what actually moves the needle in day-to-day work.",
  },
  {
    icon: BookOpen,
    title: "Depth and rigor",
    desc: "Frameworks and deep dives you can apply, not just read.",
  },
  {
    icon: Users,
    title: "Human-centered",
    desc: "AI is a tool in service of people — oversight and judgment stay central.",
  },
];

export default function AboutPage() {
  return (
    <Layout>
      <section className="border-b border-slate-800 bg-slate-900/30">
        <div className="container-blog py-16">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            About the AI Productivity Blog
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-400">
            Our mission is to bridge the gap between raw AI capabilities and
            practical, high-impact business workflows.
          </p>
        </div>
      </section>

      <section className="container-blog py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="card">
              <v.icon className="mb-3 h-6 w-6 text-brand-400" />
              <h2 className="mb-2 font-semibold">{v.title}</h2>
              <p className="text-sm text-slate-400">{v.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
          <p className="max-w-3xl text-lg leading-relaxed text-slate-300">
            We provide deep dives into agentic workflows, no-code automation
            stacks, and the human-in-the-loop methodologies required for
            production-ready AI.
          </p>
          <div className="mt-8">
            <Link href="/archive" className="btn-primary">
              Explore the Archive <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
