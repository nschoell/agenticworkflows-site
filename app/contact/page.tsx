"use client";
import { Mail, Twitter, Send } from "lucide-react";
import Layout from "../../components/Layout";

export default function ContactPage() {
  return (
    <Layout>
      <section className="border-b border-slate-800 bg-slate-900/30">
        <div className="container-blog py-16">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-400">
            Have questions about AI Productivity or our resources? Reach out to
            our team.
          </p>
        </div>
      </section>

      <section className="container-blog py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact channels */}
          <div className="flex flex-col gap-4">
            <div className="card flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10">
                <Mail className="h-5 w-5 text-brand-400" />
              </span>
              <div>
                <p className="text-sm text-slate-400">Email</p>
                <p className="font-medium">contact@example.com</p>
              </div>
            </div>
            <div className="card flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10">
                <Twitter className="h-5 w-5 text-brand-400" />
              </span>
              <div>
                <p className="text-sm text-slate-400">Twitter</p>
                <p className="font-medium">@AIProductivityBlog</p>
              </div>
            </div>
          </div>

          {/* Form (front-end only) */}
          <form
            className="card flex flex-col gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-300">
                Name
              </label>
              <input
                type="text"
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-300">
                Email
              </label>
              <input
                type="email"
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-300">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none"
                placeholder="How can we help?"
              />
            </div>
            <button type="submit" className="btn-primary">
              <Send className="h-4 w-4" /> Send message
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
