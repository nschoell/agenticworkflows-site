import Link from "next/link";
import { ChevronRight, Wrench, ClipboardList, MessageSquare } from "lucide-react";
import Layout from "../../components/Layout";

const categories = [
  {
    title: "AI Tools",
    href: "/library/tools",
    description: "A curated, honest list of AI tools worth adding to your stack in 2026 — with what each one is actually best at.",
    icon: Wrench,
    tag: "Tools",
  },
  {
    title: "Prompts",
    href: "/library/prompts",
    description: "A practical prompt library you can copy, tweak, and drop into your workflows today. No fluff, just working prompts.",
    icon: MessageSquare,
    tag: "Prompts",
  },
  {
    title: "Cheatsheets",
    href: "/library/cheatsheets",
    description: "Quick-reference guides for the most common AI workflows: agents, RAG, MCP, prompt engineering, and more.",
    icon: ClipboardList,
    tag: "Reference",
  },
];

export default function LibraryPage() {
  return (
    <Layout>
      <section className="border-b border-slate-800 bg-slate-900/30">
        <div className="container-blog py-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-400">
            Resource Library
          </p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
            AI Productivity Library
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-400">
            Practical AI tools, ready-to-use prompts, and quick-reference
            cheatsheets — organized so you can find what you need in seconds.
          </p>
        </div>
      </section>

      <section className="container-blog py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.href}
                href={cat.href}
                className="card group flex flex-col overflow-hidden"
              >
                <div className="flex items-center justify-between border-b border-slate-800 p-5">
                  <Icon size={28} className="text-brand-500" />
                  <span className="text-xs font-medium uppercase tracking-wide text-slate-500 group-hover:text-brand-400">
                    {cat.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h2 className="text-xl font-bold text-slate-100 group-hover:text-brand-400">
                    {cat.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                    {cat.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-500 group-hover:gap-2 group-hover:text-brand-400">
                    Explore <ChevronRight size={16} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="border-t border-slate-800 bg-slate-900/40">
        <div className="container-blog flex flex-col items-start gap-6 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold">Don&apos;t see what you need?</h2>
            <p className="mt-2 text-slate-400">
              We add new tools, prompts, and guides regularly. Or tell us what
              would help.
            </p>
          </div>
          <Link
            href="/contact"
            className="btn-primary shrink-0"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </Layout>
  );
}
