import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, Users, Star } from "lucide-react";
import heroFamily from "@/assets/hero-family.jpg";
import { CategoryGrid } from "@/components/CategoryGrid";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TrendyQuote — Insurance that feels effortless" },
      { name: "description", content: "Compare Medicare, Health, Auto, Life, Home and Final Expense insurance from top providers. Get a personalized quote in minutes." },
      { property: "og:title", content: "TrendyQuote — Insurance that feels effortless" },
      { property: "og:description", content: "Compare insurance plans across six categories. Get a personalized quote in minutes." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const stats = [
  { value: "2M+", label: "Families covered" },
  { value: "50", label: "States licensed" },
  { value: "4.9/5", label: "Client rating" },
  { value: "98%", label: "Renewal rate" },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32">
        <div className="animate-gradient-slow absolute inset-0 -z-10 bg-gradient-to-br from-brand-soft via-background to-brand-soft/60" />
        <div className="absolute inset-x-0 top-0 -z-10 h-[600px] [mask-image:radial-gradient(60%_60%_at_50%_0%,#000_40%,transparent_100%)]">
          <div className="absolute left-1/4 top-20 size-72 rounded-full bg-brand-accent/20 blur-3xl animate-blob" />
          <div className="absolute right-1/4 top-32 size-72 rounded-full bg-brand/20 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full bg-brand/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-accent opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-brand-accent" />
              </span>
              Trusted by 2M+ families
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 font-serif text-5xl leading-[1.05] text-balance sm:text-6xl md:text-7xl"
            >
              Insurance that feels{" "}
              <span className="italic text-brand">effortless.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-7 max-w-[58ch] text-lg leading-relaxed text-muted-foreground"
            >
              Compare affordable Medicare, Health, Auto, Life, Home and Final Expense plans from the carriers families trust — without the sales pressure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center gap-5"
            >
              <Link
                to="/quote"
                className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-base font-medium text-brand-foreground ring-1 ring-brand transition-transform hover:scale-[1.02] active:scale-95"
              >
                Start free comparison
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[0,1,2,3].map((i) => (
                    <div key={i} className="size-8 rounded-full border-2 border-background bg-gradient-to-br from-brand-accent to-brand" />
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex items-center gap-0.5">
                    {[0,1,2,3,4].map((i) => <Star key={i} className="size-3.5 fill-brand-accent text-brand-accent" />)}
                  </div>
                  <span className="text-muted-foreground">Rated 4.9/5 by seniors</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-4 -z-10 rounded-[36px] bg-gradient-to-br from-brand-accent/30 to-brand/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-[32px] ring-1 ring-border shadow-2xl shadow-brand/10">
              <img
                src={heroFamily}
                alt="Family enjoying a moment together"
                width={1280}
                height={1600}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 max-w-[220px] rounded-3xl bg-card p-5 shadow-xl ring-1 ring-border"
            >
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-2xl bg-brand-soft text-brand">
                  <Shield className="size-5" />
                </span>
                <div>
                  <div className="font-serif text-2xl text-brand">$0/mo</div>
                  <div className="text-xs text-muted-foreground">Many qualify for $0 plans</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.7 }}
              className="absolute -top-6 -right-6 rounded-3xl bg-brand-accent px-5 py-4 text-brand shadow-xl"
            >
              <div className="font-serif text-2xl leading-none">2 min</div>
              <div className="text-xs font-medium">average quote time</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-10 sm:grid-cols-4 sm:px-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06} className="text-center sm:text-left">
              <div className="font-serif text-4xl text-brand">{s.value}</div>
              <div className="mt-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <Reveal className="mb-14 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand">Coverage</span>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-balance sm:text-5xl">
              Specialized coverage for every life stage.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Six dedicated insurance categories, one calm experience. Pick yours to begin.
            </p>
          </Reveal>
          <CategoryGrid />
        </div>
      </section>

      {/* How it works */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <Reveal className="mb-14 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand">How it works</span>
            <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">Three steps. No pressure.</h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { n: "01", t: "Tell us about you", d: "Share a ZIP code and a few quick details — no SSN, no commitment.", I: Users },
              { n: "02", t: "Compare side-by-side", d: "We pull live quotes from top-rated carriers and show your best fits.", I: Clock },
              { n: "03", t: "Enroll with a human", d: "A licensed advisor walks you through enrollment — only if you'd like.", I: Shield },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="rounded-3xl bg-card p-8 ring-1 ring-border">
                  <div className="flex items-center justify-between">
                    <span className="grid size-12 place-items-center rounded-2xl bg-brand-soft text-brand">
                      <s.I className="size-5" />
                    </span>
                    <span className="font-serif text-3xl text-brand/40">{s.n}</span>
                  </div>
                  <h3 className="mt-6 font-serif text-2xl">{s.t}</h3>
                  <p className="mt-2 text-muted-foreground">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-[32px] bg-brand p-10 text-brand-foreground shadow-2xl shadow-brand/20 sm:p-14">
              <div aria-hidden className="absolute -right-20 -top-20 size-72 rounded-full bg-brand-accent/30 blur-3xl animate-blob" />
              <div aria-hidden className="absolute -left-20 -bottom-20 size-72 rounded-full bg-brand-accent/20 blur-3xl animate-blob" style={{ animationDelay: "5s" }} />
              <h2 className="relative font-serif text-4xl leading-tight sm:text-5xl">Take a 60-second eligibility quiz.</h2>
              <p className="relative mt-4 max-w-[55ch] text-brand-foreground/80">
                Pick a coverage type and we'll show you if you qualify — anonymously. No name, email or phone required.
              </p>
              <Link
                to="/quote"
                className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-brand-foreground px-7 py-4 text-base font-semibold text-brand transition-transform hover:scale-[1.02] active:scale-95"
              >
                Start the quiz
                <ArrowRight className="size-4" />
              </Link>
              <div className="relative mt-6 flex items-center gap-2 text-sm text-brand-foreground/70">
                <span className="size-2 rounded-full bg-emerald-400" />
                100% anonymous · No personal info
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Trust */}
      <section className="border-t border-border py-14">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-4 px-5 text-xs font-bold uppercase tracking-widest text-muted-foreground/60 sm:px-6">
          <span>BBB Accredited A+</span><span>·</span>
          <span>HIPAA Compliant</span><span>·</span>
          <span>256-bit SSL</span><span>·</span>
          <span>Independently Licensed</span>
        </div>
      </section>
    </>
  );
}
