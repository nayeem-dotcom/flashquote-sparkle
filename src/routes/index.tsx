import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Shield, Clock, Users, Star, ArrowUpRight } from "lucide-react";
import heroFamily from "@/assets/hero-family.jpg";
import imgMedicare from "@/assets/cat-medicare.jpg";
import imgHealth from "@/assets/cat-health.jpg";
import imgHome from "@/assets/cat-home.jpg";
import { CategoryGrid } from "@/components/CategoryGrid";
import { Reveal } from "@/components/Reveal";
import { LeadForm } from "@/components/LeadForm";


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

const TICKER = ["Medicare", "ACA Health", "Auto", "Home", "SSDI", "Final Expense"];

function Home() {
  return (
    <>
      {/* Hero — advanced editorial layered composition */}
      <section className="relative overflow-hidden pb-16 pt-10 sm:pb-24 sm:pt-14">
        {/* ambient background */}
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-soft/60 via-background to-background" />
        <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-[640px] [mask-image:radial-gradient(70%_55%_at_60%_20%,#000_40%,transparent_100%)]">
          <div className="absolute -left-10 top-40 size-[420px] rounded-full bg-brand-accent/20 blur-[120px] animate-blob" />
          <div className="absolute right-0 top-10 size-[420px] rounded-full bg-brand/15 blur-[120px] animate-blob" style={{ animationDelay: "5s" }} />
        </div>

        {/* faint editorial grid lines */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 mx-auto grid max-w-7xl grid-cols-12 px-5 sm:px-6">
          {Array.from({ length: 13 }).map((_, i) => (
            <div key={i} className="col-span-1 border-l border-border/40 last:border-r" />
          ))}
        </div>

        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          {/* meta row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="flex items-center justify-between border-b border-border pb-6 text-[10px] font-bold uppercase tracking-[0.28em] text-muted-foreground"
          >
            <span className="flex items-center gap-2 text-brand">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-accent" />
                <span className="relative inline-flex size-1.5 rounded-full bg-brand-accent" />
              </span>
              Vol. 06 — 2026 Edition
            </span>
            <span className="hidden sm:inline">Independently licensed · All 50 states</span>
            <span>The TrendyQuote Index</span>
          </motion.div>

          {/* main composition */}
          <div className="relative grid grid-cols-12 gap-x-6 gap-y-10 pt-10 lg:pt-16">
            {/* vertical rotated label */}
            <div aria-hidden className="pointer-events-none absolute -left-4 top-32 hidden text-[10px] font-bold uppercase tracking-[0.5em] text-muted-foreground lg:block" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
              An editorial guide to American coverage
            </div>

            {/* Headline column */}
            <div className="col-span-12 lg:col-span-7">
              <motion.h1
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.05 }}
                className="font-serif text-[64px] leading-[0.86] tracking-tight text-foreground sm:text-[88px] lg:text-[124px]"
              >
                Coverage,
                <br />
                <span className="italic text-brand">re&#8203;-imagined</span>
                <span className="text-brand-accent">.</span>
              </motion.h1>

              {/* indented intro with rule */}
              <div className="mt-10 grid grid-cols-12 items-start gap-6">
                <div className="col-span-2 hidden h-px translate-y-3 bg-foreground/40 sm:block" />
                <motion.p
                  initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                  className="col-span-12 max-w-xl text-lg leading-relaxed text-muted-foreground sm:col-span-10"
                >
                  Six categories. One calm experience. Take a 60-second anonymous quiz and instantly see if you qualify for Medicare, ACA Health, Auto, Home, SSDI or Final Expense — no name, email or phone required.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-10 flex flex-wrap items-center gap-5"
              >
                <a
                  href="#lead-form"
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-brand px-8 py-4 text-sm font-semibold text-brand-foreground shadow-xl shadow-brand/25 transition-transform hover:scale-[1.02] active:scale-95"
                >
                  <span className="relative z-10">Get my free quote</span>
                  <span className="relative z-10 grid size-7 place-items-center rounded-full bg-brand-foreground/10">
                    <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
                  </span>
                </a>
              </motion.div>


              {/* inline ratings strip */}
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-border pt-8"
              >
                <div>
                  <div className="flex items-center gap-1">
                    {[0,1,2,3,4].map((i) => <Star key={i} className="size-3.5 fill-brand-accent text-brand-accent" />)}
                    <span className="ml-1.5 text-sm font-semibold">4.9</span>
                  </div>
                  <div className="mt-0.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">2M+ reviews</div>
                </div>
                <div className="h-10 w-px bg-border" />
                <div>
                  <div className="font-serif text-2xl text-brand">60 sec</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">to find out</div>
                </div>
                <div className="h-10 w-px bg-border" />
                <div>
                  <div className="font-serif text-2xl text-brand">$0</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">personal info</div>
                </div>
              </motion.div>
            </div>

            {/* Image collage column */}
            <div className="relative col-span-12 lg:col-span-5">
              <div className="relative mx-auto aspect-[5/6] w-full max-w-md">
                {/* primary tall */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-0 top-6 z-20 h-[78%] w-[72%] overflow-hidden rounded-[28px] shadow-2xl ring-1 ring-border"
                >
                  <img src={heroFamily} alt="A family covered with confidence" className="size-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand/30 via-transparent to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full bg-background/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brand backdrop-blur">Issue 06 · Family</span>
                </motion.div>

                {/* secondary top-right */}
                <motion.div
                  initial={{ opacity: 0, y: -30, rotate: 0 }} animate={{ opacity: 1, y: 0, rotate: 5 }} transition={{ duration: 0.9, delay: 0.2 }}
                  whileHover={{ rotate: 0 }}
                  className="absolute right-0 top-0 z-30 h-40 w-44 overflow-hidden rounded-[20px] shadow-xl ring-1 ring-border sm:h-48 sm:w-52"
                >
                  <img src={imgMedicare} alt="Medicare" className="size-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand/40" />
                </motion.div>

                {/* tertiary bottom-right small */}
                <motion.div
                  initial={{ opacity: 0, y: 30, rotate: 0 }} animate={{ opacity: 1, y: 0, rotate: -6 }} transition={{ duration: 0.9, delay: 0.35 }}
                  whileHover={{ rotate: 0 }}
                  className="absolute -bottom-2 right-2 z-30 h-36 w-36 overflow-hidden rounded-[20px] shadow-xl ring-1 ring-border"
                >
                  <img src={imgHome} alt="Home" className="size-full object-cover" />
                </motion.div>

                {/* badge $0 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
                  className="absolute -left-4 bottom-8 z-40 grid size-28 place-items-center rounded-full bg-brand-accent text-brand shadow-xl ring-8 ring-background"
                >
                  <div className="text-center">
                    <div className="font-serif text-3xl leading-none">$0</div>
                    <div className="mt-1 text-[9px] font-bold uppercase tracking-widest opacity-80">premium plans</div>
                  </div>
                </motion.div>

                {/* mini health chip */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.6 }}
                  className="absolute -right-2 top-44 z-40 flex items-center gap-2 rounded-full bg-card px-3 py-2 shadow-lg ring-1 ring-border sm:top-52"
                >
                  <span className="size-8 overflow-hidden rounded-full">
                    <img src={imgHealth} alt="" className="size-full object-cover" />
                  </span>
                  <div className="pr-2 text-[11px]">
                    <div className="font-semibold">ACA approved</div>
                    <div className="text-muted-foreground">Subsidies in 60s</div>
                  </div>
                </motion.div>

                {/* decorative arc */}
                <svg aria-hidden viewBox="0 0 200 200" className="absolute inset-0 z-10 size-full -rotate-12 text-brand/15">
                  <circle cx="100" cy="100" r="98" fill="none" stroke="currentColor" strokeDasharray="3 6" />
                </svg>
              </div>
            </div>
          </div>

          {/* category ticker */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9, delay: 0.7 }}
            className="mt-20 overflow-hidden border-y border-border py-5"
          >
            <div className="flex items-center gap-12 whitespace-nowrap text-2xl text-muted-foreground sm:text-3xl">
              {[...TICKER, ...TICKER, ...TICKER].map((t, i) => (
                <span key={i} className="flex items-center gap-12">
                  <span className="font-serif italic">{t}</span>
                  <span className="text-brand-accent">✦</span>
                </span>
              ))}
            </div>
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
              { n: "01", t: "Share your details", d: "Fill in the short form — first name, last name, email and phone. That's it.", I: Users },
              { n: "02", t: "We compare plans", d: "We pull live quotes from top-rated carriers and curate your best fits.", I: Clock },
              { n: "03", t: "Talk to a human", d: "A licensed advisor reaches out to walk you through enrollment — only if you'd like.", I: Shield },

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

      {/* Lead Form CTA */}
      <section className="relative overflow-hidden py-24">
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-soft/60 via-background to-background" />
        <div aria-hidden className="pointer-events-none absolute -right-40 top-20 -z-10 size-[520px] rounded-full bg-brand-accent/15 blur-[140px] animate-blob" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand">Free quote · 1 minute</span>
            <h2 className="mt-3 font-serif text-5xl leading-[1.05] sm:text-6xl">
              Tell us a little — <span className="italic text-brand">we'll handle the rest.</span>
            </h2>
            <p className="mt-5 max-w-md text-lg text-muted-foreground">
              Share your details and a licensed advisor will reach out with personalized coverage options across Medicare, ACA Health, Auto, Home, SSDI, and Final Expense.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-foreground/80">
              <li className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-brand" /> Independent and licensed in all 50 states</li>
              <li className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-brand" /> No cost, no obligation</li>
              <li className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-brand" /> Secure — your data stays protected</li>
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <LeadForm />
          </Reveal>
        </div>
      </section>


    </>
  );
}
