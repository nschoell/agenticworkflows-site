import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Clock,
  Compass,
  Layers,
  Tag,
} from "lucide-react";
import Layout from "../../components/Layout";
import { getSortedPosts, type Post } from "../../lib/posts";

const categoryConfig: Record<
  Post["category"],
  { icon: typeof Layers; className: string }
> = {
  "Deep Dive": { icon: Layers, className: "text-brand-400" },
  "How-To": { icon: BrainCircuit, className: "text-brand-300" },
  Trend: { icon: Compass, className: "text-brand-500" },
};

export default function ArchivePage() {
  const posts = getSortedPosts();

  return (
    <Layout>
      <section className="border-b border-slate-800 bg-slate-900/30">
        <div className="container-blog py-16">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Post Archive
          </h1>
          <p className="mt-4 max-w-2xl text-slate-400">
            Every article, indexed by category. Deep dives, how-tos, and trend
            reports — all in one place.
          </p>
        </div>
      </section>

      <div className="container-blog space-y-16 py-16">
        {(["Deep Dive", "How-To", "Trend"] as const).map((category) => {
          const sectionPosts = posts.filter((p) => p.category === category);
          if (sectionPosts.length === 0) return null;
          const { icon: Icon, className } = categoryConfig[category];

          return (
            <section key={category}>
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 border border-slate-800">
                  <Icon className={`h-5 w-5 ${className}`} />
                </span>
                <div>
                  <h2 className="text-xl font-semibold">{category}s</h2>
                  <p className="text-sm text-slate-500">
                    {sectionPosts.length}{" "}
                    {sectionPosts.length === 1 ? "article" : "articles"}
                  </p>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {sectionPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/posts/${post.slug}`}
                    className="card group flex flex-col"
                  >
                    <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-slate-700 bg-slate-800/50 px-3 py-1 text-xs font-medium text-slate-300">
                      <Tag className={`h-3.5 w-3.5 ${className}`} />
                      {post.categoryLabel}
                    </span>
                    <h3 className="text-lg font-semibold leading-snug group-hover:text-brand-300">
                      {post.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-slate-400 line-clamp-3">
                      {post.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between border-t border-slate-800 pt-4">
                      <span className="flex items-center gap-1 text-xs text-slate-500">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readTime}
                      </span>
                      <span className="flex items-center gap-1 text-sm font-medium text-brand-400">
                        Read <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </Layout>
  );
}
