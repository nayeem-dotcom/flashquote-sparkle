import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Clock, Lock } from "lucide-react";
import { categories } from "@/lib/categories";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Get a Quote — TrendyQuote" },
      { name: "description", content: "Pick your insurance type and take a quick anonymous eligibility quiz. No personal info required." },
      { property: "og:title", content: "Get a Quote — TrendyQuote" },
      { property: "og:description", content: "Anonymous eligibility quiz. No personal info required." },
      { property: "og:url", content: "/quote" },
    ],
    links: [{ rel: "canonical", href: "/quote" }],
  }),
  component: QuotePicker,
});

function QuotePicker() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="animate-gradient-slow absolute inset-0 -z-10 bg-gradient-to-br from-brand-soft via-background to-brand-soft/60" />
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-brand/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand"
          >
            Step 1 of 2 · Pick a coverage
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-serif text-5xl leading-[1.05] text-balance sm:text-6xl"
          >
            What would you like to{" "}
            <span className="italic text-brand">protect?</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 max-w-[55ch] text-lg text-muted-foreground"
          >
            Each quiz is a quick anonymous eligibility check — under 60 seconds, no name, email or phone required.
          </motion.p>

          <div className="mt-7 flex flex-wrap items-center gap-5 text-xs font-semibold text-muted-foreground">
            <span className="inline-flex items-center gap-2"><ShieldCheck className="size-4 text-brand" /> Anonymous</span>
            <span className="inline-flex items-center gap-2"><Clock className="size-4 text-brand" /> Under 60 seconds</span>
            <span className="inline-flex items-center gap-2"><Lock className="size-4 text-brand" /> No personal info</span>
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to="/quiz/$category"
                params={{ category: c.slug }}
                className="group relative block overflow-hidden rounded-3xl ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand/15 hover:ring-brand/40"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.name}
                    width={1280}
                    height={960}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand backdrop-blur">
                    <c.Icon className="size-3.5" /> {c.short}
                  </div>
                </div>
                <div className="bg-card p-6">
                  <h3 className="font-serif text-2xl leading-tight">{c.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.tagline}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                    Start quiz
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
