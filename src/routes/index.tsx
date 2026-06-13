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
      { name: "description", content: "Check your eligibility for Medicare, ACA Health, Auto, Home, SSDI and Final Expense — anonymously, in under 60 seconds." },
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
      {/* Hero — editorial asymmetry */}
      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28">
        <div className="animate-gradient-slow absolute inset-0 -z-10 bg-gradient-to-br from-brand-soft via-background to-brand-soft/40" />
        <div className="absolute inset-x-0 top-0 -z-10 h-[700px] [mask-image:radial-gradient(70%_60%_at_50%_0%,#000_40%,transparent_100%)]">
          <div className="absolute left-1/4 top-20 size-72 rounded-full bg-brand-accent/25 blur-3xl animate-blob" />
          <div className="absolute right-1/4 top-32 size-72 rounded-full bg-brand/20 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-12 items-center gap-8 px-5 sm:px-6">
          <div className="col-span-12 lg:col-span-7">
            <motion.span
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-brand/10 bg-brand/5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brand"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-accent opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-brand-accent" />
              </span>
              Trusted by 2M+ families
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-8 font-serif text-6xl leading-[0.88] text-balance text-brand sm:text-7xl lg:text-[112px]"
            >
              <span className="italic">Insurance that</span>
              <br />
              feels <span className="text-brand-accent">effortless.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-10 max-w-md text-lg font-light leading-relaxed text-muted-foreground"
            >
              Check your eligibility for Medicare, ACA Health, Auto, Home, SSDI and Final Expense in under 60 seconds — fully anonymous.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center gap-7"
            >
              <Link
                to="/quote"
                className="group inline-flex items-center gap-3 rounded-full bg-brand px-9 py-5 text-base font-medium text-brand-foreground shadow-2xl shadow-brand/20 transition-transform hover:scale-[1.03] active:scale-95"
              >
                Start free comparison
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[0.2, 0.4, 0.6].map((o, i) => (
                    <div key={i} className="size-12 rounded-full border-4 border-background" style={{ backgroundColor: `color-mix(in oklab, var(--brand-accent) ${o * 100}%, transparent)` }} />
                  ))}
                </div>
                <div className="text-xs font-medium text-muted-foreground">
                  <div className="mb-0.5 flex items-center gap-0.5">
                    {[0,1,2,3,4].map((i) => <Star key={i} className="size-3.5 fill-brand-accent text-brand-accent" />)}
                  </div>
                  4.9/5 by 2M+ seniors
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.15 }}
            className="relative col-span-12 mt-12 lg:col-span-5 lg:mt-0"
          >
            <div className="absolute -inset-6 -z-10 rounded-[40px] bg-gradient-to-br from-brand-accent/30 to-brand/30 blur-3xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] shadow-2xl ring-1 ring-border">
              <img
                src={heroFamily}
                alt="Family enjoying a moment together"
                width={1280}
                height={1600}
                className="size-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand/40 via-transparent to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, x: -16, rotate: 0 }} animate={{ opacity: 1, x: 0, rotate: -3 }} transition={{ duration: 0.7, delay: 0.6 }}
              whileHover={{ rotate: 0 }}
              className="absolute -bottom-10 -left-10 max-w-[260px] rounded-[2rem] border border-border bg-card p-7 shadow-2xl"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-brand-soft text-brand">
                <Shield className="size-6" />
              </span>
              <div className="mt-4 font-serif text-3xl text-brand">$0/mo</div>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">Many families qualify for $0 premium plans based on eligibility.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16, rotate: 0 }} animate={{ opacity: 1, x: 0, rotate: 6 }} transition={{ duration: 0.7, delay: 0.7 }}
              whileHover={{ rotate: 0 }}
              className="absolute -right-6 top-12 rounded-[2rem] bg-brand-accent px-7 py-5 text-brand shadow-xl"
            >
              <div className="font-serif text-3xl leading-none">2 min</div>
              <div className="mt-1 text-[10px] font-bold uppercase tracking-widest opacity-80">avg. quote time</div>
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
          <Reveal className="mb-14">
            <div className="flex flex-col items-start justify-between gap-6 border-b border-border pb-10 md:flex-row md:items-end">
              <div className="max-w-xl">
                <span className="text-xs font-semibold uppercase tracking-widest text-brand">Coverage</span>
                <h2 className="mt-3 font-serif text-5xl leading-[1.05] text-brand sm:text-6xl">
                  Specialized coverage for <span className="italic text-brand-accent">every stage of life.</span>
                </h2>
              </div>
              <p className="max-w-xs border-l border-border pl-6 text-sm italic leading-relaxed text-muted-foreground">
                Independently licensed in all 50 states. Six dedicated categories — one calm experience.
              </p>
            </div>
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
              { n: "01", t: "Take a quick quiz", d: "Pick your coverage and answer a few yes/no questions — fully anonymous.", I: Users },
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

    </>
  );
}
