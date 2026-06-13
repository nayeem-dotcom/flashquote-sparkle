import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { categories } from "@/lib/categories";
import { Logo } from "@/components/Logo";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [solOpen, setSolOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-7 md:flex">
          <div
            className="relative"
            onMouseEnter={() => setSolOpen(true)}
            onMouseLeave={() => setSolOpen(false)}
          >
            <button className="text-sm font-medium text-foreground/70 hover:text-brand">
              Coverage
            </button>
            <AnimatePresence>
              {solOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-1/2 top-full -translate-x-1/2 pt-3"
                >
                  <div className="grid w-[460px] grid-cols-2 gap-1 rounded-2xl border border-border bg-card p-2 shadow-xl">
                    {categories.map((c) => (
                      <Link
                        key={c.slug}
                        to="/$category"
                        params={{ category: c.slug }}
                        className="group flex items-start gap-3 rounded-xl p-3 hover:bg-brand-soft"
                      >
                        <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand group-hover:bg-brand group-hover:text-brand-foreground">
                          <c.Icon className="size-4" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold">{c.short}</span>
                          <span className="block truncate text-xs text-muted-foreground">{c.tagline}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {navLinks.slice(1).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-foreground/70 hover:text-brand"
              activeProps={{ className: "text-brand" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/quote"
            className="hidden rounded-full bg-brand px-5 py-2 text-sm font-medium text-brand-foreground ring-1 ring-brand transition-transform hover:scale-[1.03] active:scale-95 sm:inline-flex"
          >
            Start Quiz
          </Link>
          <button
            className="grid size-10 place-items-center rounded-full border border-border md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-border md:hidden"
          >
            <div className="space-y-1 px-5 py-4">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2 text-base font-medium hover:bg-brand-soft"
                >
                  {l.label}
                </Link>
              ))}
              <div className="pt-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Coverage</div>
              {categories.map((c) => (
                <Link
                  key={c.slug}
                  to="/$category"
                  params={{ category: c.slug }}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-3 py-2 hover:bg-brand-soft"
                >
                  <c.Icon className="size-4 text-brand" />
                  <span className="text-sm">{c.short}</span>
                </Link>
              ))}
              <Link
                to="/quote"
                onClick={() => setOpen(false)}
                className="mt-3 block rounded-full bg-brand px-5 py-3 text-center text-sm font-medium text-brand-foreground"
              >
                Start Quiz
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
