import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const contentDir = path.join(process.cwd(), "content");

export type PostCategory = "Deep Dive" | "How-To" | "Trend";

export interface Post {
  slug: string;
  title: string;
  category: PostCategory;
  categoryLabel: string;
  readTime: string;
  description: string;
  html: string;
}

/**
 * Map a content filename to a readable slug.
 */
function slugFromFile(filename: string): string {
  const base = filename.replace(/^blog1_/i, "").replace(/\.md$/i, "");
  // blog1_deep_dive_1 -> deep-dive-1, blog1_howto_2 -> howto-2
  return base
    .toLowerCase()
    .replace(/_+$/, "")
    .split("_")
    .filter(Boolean)
    .join("-");
}

interface CategoryDef {
  dir: string;
  label: string;
  category: PostCategory;
  sort: number;
}

const categories: CategoryDef[] = [
  { dir: "deep_dives", label: "Deep Dive", category: "Deep Dive", sort: 0 },
  { dir: "how_tos", label: "How-To", category: "How-To", sort: 1 },
  { dir: "trends", label: "Trend", category: "Trend", sort: 2 },
];

function readTimeWords(markdown: string): string {
  const words = markdown
    .replace(/[#*`>\[\]\-|]/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
  const mins = Math.max(1, Math.round(words / 200));
  return `${mins} min read`;
}

/**
 * Read the first Markdown H1 as the post title.
 * Used as a fallback when frontmatter has no explicit title.
 */
function titleFromHeading(markdown: string): string | null {
  const m = markdown.match(/^\s*#\s+(.+?)\s*$/m);
  return m ? m[1].replace(/[*_`]/g, "").trim() : null;
}

function extractDescription(markdown: string): string {
  const paragraphs = markdown
    .replace(/^---[\s\S]*?---/m, "")
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter((p) => p && !p.startsWith("#") && !p.startsWith(">"));
  const first = paragraphs[0] || "";
  const plain = first.replace(/[*_`]/g, "").trim();
  return plain.length > 180 ? plain.slice(0, 177) + "…" : plain;
}

let cache: Post[] | null = null;

export function getPosts(): Post[] {
  if (cache) return cache;

  const posts: Post[] = [];
  for (const cat of categories) {
    const dir = path.join(contentDir, cat.dir);
    if (!fs.existsSync(dir)) continue;
    const files = fs
      .readdirSync(dir)
      .filter((f) => f.endsWith(".md"))
      .sort();
    for (const file of files) {
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const parsed = matter(raw);
      const markdown = parsed.content;
      const slug = slugFromFile(file);
      // Guard against collisions (e.g. two numeric suffixes)
      let unique = slug;
      let i = 2;
      while (posts.some((p) => p.slug === unique)) {
        unique = `${slug}-${i++}`;
      }
      posts.push({
        slug: unique,
        title:
          (parsed.data.title as string) ||
          titleFromHeading(markdown) ||
          file.replace(/^blog1_/i, "").replace(/\.md$/i, "").replace(/_/g, " ") as string,
        category: cat.category,
        categoryLabel: cat.label,
        readTime: readTimeWords(markdown),
        description: extractDescription(markdown),
        html: String(marked.parse(markdown, { async: false })),
      });
    }
  }
  cache = posts;
  return posts;
}

export function getPostBySlug(slug: string): Post | undefined {
  return getPosts().find((p) => p.slug === slug);
}

export function getSortedPosts(): Post[] {
  return [...getPosts()].sort(
    (a, b) =>
      categories.findIndex((c) => c.category === a.category) -
      categories.findIndex((c) => c.category === b.category)
  );
}
