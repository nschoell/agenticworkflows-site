"use client";
import Link from "next/link";
import {
  Cpu,
  BookOpen,
  Archive,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Knowledge Pillars", href: "/knowledge-pillars" },
  { label: "Archive", href: "/archive" },
  { label: "Library", href: "/library" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur">
        <div className="container-blog flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Cpu className="h-6 w-6 text-brand-400" />
            <span className="text-lg font-bold tracking-tight">
              AI<span className="text-brand-400">Productivity</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link href="/contact" className="btn-primary">
              Subscribe
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="text-slate-300 lg:hidden"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-slate-800 bg-slate-950 px-4 py-4 lg:hidden">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-slate-300 hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="container-blog flex flex-col items-center justify-between gap-4 py-10 sm:flex-row">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-brand-400" />
            <span className="text-sm text-slate-400">
              © {new Date().getFullYear()} AI Productivity Blog. All rights reserved.
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm text-slate-400">
            <Link href="/archive" className="flex items-center gap-1 hover:text-white">
              <Archive className="h-4 w-4" /> Archive
            </Link>
            <Link href="/contact" className="flex items-center gap-1 hover:text-white">
              <Mail className="h-4 w-4" /> Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
