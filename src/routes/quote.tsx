import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Clock, Lock } from "lucide-react";
import { categories } from "@/lib/categories";
import { LeadForm } from "@/components/LeadForm";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Get a Free Quote — TrendyQuote" },
      { name: "description", content: "Share your details to get a personalized insurance quote from a licensed advisor. Medicare, ACA, Auto, Home, SSDI, Final Expense." },
      { property: "og:title", content: "Get a Free Quote — TrendyQuote" },
      { property: "og:description", content: "Free, no-obligation insurance quote." },
      { property: "og:url", content: "/quote" },
    ],
    links: [{ rel: "canonical", href: "/quote" }],
  }),
  component: QuotePicker,
});

function QuotePicker() {
  return (
    <>
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="animate-gradient-slow absolute inset-0 -z-10 bg-gradient-to-br from-brand-soft via-background to-brand-soft/60" />
        <div aria-hidden className="pointer-events-none absolute -right-32 top-20 -z-10 size-[480px] rounded-full bg-brand-accent/15 blur-[140px] animate-blob" />
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 sm:px-6 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full bg-brand/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand"
            >
              Free quote · No obligation
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 font-serif text-5xl leading-[1.02] text-balance sm:text-7xl"
            >
              Coverage that <span className="italic text-brand">finds you.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-5 max-w-[55ch] text-lg text-muted-foreground"
            >
              Tell us a little about yourself and a licensed advisor will reach out with personalized options across all six coverage categories.
            </motion.p>

            <div className="mt-7 flex flex-wrap items-center gap-5 text-xs font-semibold text-muted-foreground">
              <span className="inline-flex items-center gap-2"><ShieldCheck className="size-4 text-brand" /> Licensed in 50 states</span>
              <span className="inline-flex items-center gap-2"><Clock className="size-4 text-brand" /> Under a minute</span>
              <span className="inline-flex items-center gap-2"><Lock className="size-4 text-brand" /> Secure</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          >
            <LeadForm />
          </motion.div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mb-12 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand">Coverage</span>
            <h2 className="mt-3 font-serif text-4xl leading-tight">Or pick a coverage to learn more.</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c, i) => (
              <motion.div
                key={c.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  to="/$category"
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
                      Learn more
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
