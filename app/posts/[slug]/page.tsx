import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import Layout from "../../../components/Layout";
import { getPosts, getPostBySlug } from "../../../lib/posts";

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const posts = getPosts();
  const index = posts.findIndex((p) => p.slug === post.slug);
  const prev = posts[index - 1];
  const next = posts[index + 1];

  return (
    <Layout>
      <article>
        <section className="border-b border-slate-800 bg-slate-900/30">
          <div className="container-blog py-16">
            <Link
              href="/archive"
              className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-slate-400 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" /> Back to archive
            </Link>
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-sm font-medium text-brand-300">
                <Tag className="h-4 w-4" /> {post.categoryLabel}
              </span>
              <span className="inline-flex items-center gap-1 text-sm text-slate-400">
                <Clock className="h-4 w-4" /> {post.readTime}
              </span>
            </div>
            <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-slate-400">
              {post.description}
            </p>
          </div>
        </section>

        <section className="container-blog py-12">
          <div
            className="prose-blog max-w-3xl"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </section>

        {/* Prev / Next navigation */}
        <nav className="container-blog pb-16">
          <div className="grid gap-4 sm:grid-cols-2">
            {prev ? (
              <Link href={`/posts/${prev.slug}`} className="card group">
                <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  ← Previous
                </span>
                <span className="mt-1 block font-medium group-hover:text-brand-300">
                  {prev.title}
                </span>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link href={`/posts/${next.slug}`} className="card group text-right">
                <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Next →
                </span>
                <span className="mt-1 block font-medium group-hover:text-brand-300">
                  {next.title}
                </span>
              </Link>
            ) : (
              <span />
            )}
          </div>
        </nav>
      </article>
    </Layout>
  );
}
