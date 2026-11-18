import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "AI Productivity Blog — Work Smarter with AI",
    template: "%s | AI Productivity Blog",
  },
  description:
    "Deep dives, how-tos, and practical frameworks on AI-driven productivity, agentic workflows, and the human-in-the-loop future of work.",
  keywords: [
    "AI productivity",
    "agentic workflows",
    "no-code automation",
    "AI for operations",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
