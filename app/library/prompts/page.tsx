"use client";

import Link from "next/link";
import {
  Copy,
  Check,
  Code,
  FileSearch,
  GitBranch,
  Lightbulb,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import Layout from "../../../components/Layout";

type Prompt = {
  id: string;
  title: string;
  tagline: string;
  icon: LucideIcon;
  prompt: string;
};

const prompts: Prompt[] = [
  {
    id: "clarify",
    title: "The Clarifying Interrogator",
    tagline: "Forces the model to surface every ambiguity before acting.",
    icon: Lightbulb,
    prompt:
      "You are a senior engineer. Before writing any code or answer, list every assumption you are making and ask me any questions whose answers would change your output. Wait for my reply before proceeding.",
  },
  {
    id: "plan",
    title: "Plan-Execute-Self-Correct",
    tagline: "Separates planning from execution and adds a review step.",
    icon: FileSearch,
    prompt:
      "Do this in three phases. Phase 1: give me a numbered plan with the goals and risks of each step. Phase 2: execute only after I approve the plan. Phase 3: review your own work against the original goal and report anything you could not verify.",
  },
  {
    id: "code",
    title: "Explain-Then-Implement",
    tagline: "Forces reasoning before code, reducing guesswork.",
    icon: Code,
    prompt:
      "Before writing code: (1) restate the task in your own words, (2) name the data structures and edge cases, (3) only then write the implementation with brief inline comments at each non-obvious line.",
  },
  {
    id: "review",
    title: "The Adversarial Reviewer",
    tagline: "Stress-tests a design or piece of code from a skeptic's view.",
    icon: GitBranch,
    prompt:
      "Act as a hostile reviewer. Find the top 5 ways this design could fail in production — correctness, performance, security, and operations. For each, state the failure mode and the concrete fix. Then rate the overall risk from 1-10.",
  },
  {
    id: "security",
    title: "Threat-Model a Feature",
    tagline: "Turns a spec into a concrete threat model.",
    icon: ShieldCheck,
    prompt:
      "Given this feature description, produce a threat model: list the trust boundaries, enumerate at least 6 plausible attacks, rank them by likelihood and impact, and recommend the three highest-value mitigations with their cost.",
  },
];

function PromptCard({ p }: { p: Prompt }) {
  const [copied, setCopied] = useState(false);
  const Icon = p.icon;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(p.prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard may be unavailable */
    }
  };

  return (
    <article className="card overflow-hidden">
      <div className="flex items-center justify-between gap-4 border-b border-slate-800 p-5">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-500/10">
            <Icon size={18} className="text-brand-500" />
          </span>
          <div>
            <h2 className="text-base font-bold text-slate-100">{p.title}</h2>
            <p className="mt-0.5 text-sm text-slate-400">{p.tagline}</p>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="relative">
          <button
            type="button"
            onClick={copy}
            aria-label={copied ? "Copied" : "Copy prompt"}
            className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-800 hover:text-slate-100"
          >
            {copied ? (
              <Check size={16} className="text-brand-400" />
            ) : (
              <Copy size={16} />
            )}
          </button>
          <pre className="whitespace-pre-wrap break-words rounded-lg border border-slate-800 bg-slate-950/60 p-4 pr-12 text-[13px] leading-relaxed text-slate-300">
            {p.prompt}
          </pre>
        </div>
      </div>
    </article>
  );
}

export default function PromptsPage() {
  return (
    <Layout>
      <section className="border-b border-slate-800 bg-slate-900/30">
        <div className="container-blog py-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-400">
            Prompt Library
          </p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Prompts That Change Behavior
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-400">
            Not &quot;write me a poem.&quot; These are structural prompts —
            scaffolds that force models to plan, clarify, and self-correct.
          </p>
        </div>
      </section>

      <section className="container-blog py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          {prompts.map((p) => (
            <PromptCard key={p.id} p={p} />
          ))}
        </div>
      </section>

      <section className="border-t border-slate-800 bg-slate-900/40">
        <div className="container-blog flex flex-col items-start gap-6 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold">Build on these</h2>
            <p className="mt-2 text-slate-400">
              Combine prompts with the right tools and a clear workflow.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/library/tools" className="btn-primary">
              View tools
            </Link>
            <Link href="/library/cheatsheets" className="btn-ghost">
              Read the cheatsheets
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
