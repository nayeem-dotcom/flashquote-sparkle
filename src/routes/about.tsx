import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Heart, ShieldCheck, Sparkles } from "lucide-react";
import team from "@/assets/team.jpg";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — TrendyQuote" },
      { name: "description", content: "We believe insurance shouldn't be a mystery. Meet the people making coverage clear, calm and honest." },
      { property: "og:title", content: "About TrendyQuote" },
      { property: "og:description", content: "Our team and mission — making insurance clear, calm and honest." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="relative overflow-hidden pt-20 pb-12 sm:pt-28">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-soft/60 to-background" />
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <motion.span
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            className="text-xs font-semibold uppercase tracking-widest text-brand"
          >
            About us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="mt-4 max-w-3xl font-serif text-5xl leading-[1.05] text-balance sm:text-6xl"
          >
            Insurance shouldn't be{" "}
            <span className="italic text-brand">a mystery.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
          >
            For over a decade, we've helped families navigate the complex landscape of insurance — combining real human expertise with powerful comparison tools.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-6 lg:grid-cols-[1fr_440px]">
          <Reveal>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                We started TrendyQuote because shopping for insurance felt like decoding a foreign language. Endless jargon, hidden fees, and pushy phone reps had become the norm.
              </p>
              <p>
                Today, we partner with 40+ A-rated carriers across Medicare, Health, Auto, Life, Home and Final Expense — and pair every quote with a licensed human ready to answer questions, never to upsell.
              </p>
              <p>
                Whether you're entering retirement and need Medicare guidance, or purchasing your first home, we're here. No sales pressure. Just clarity.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="relative">
            <div className="overflow-hidden rounded-[32px] ring-1 ring-border shadow-xl">
              <img src={team} alt="Our team" width={1024} height={1280} loading="lazy" className="aspect-[4/5] w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-3xl bg-brand-accent px-5 py-4 text-brand shadow-xl">
              <div className="font-serif text-3xl leading-none">98%</div>
              <div className="text-xs font-medium">Client retention</div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <Reveal className="mb-12 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand">Our values</span>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl">What we stand for.</h2>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { I: Heart, t: "People first", d: "Every quote is reviewed by a licensed human. No bots, no scripts." },
              { I: ShieldCheck, t: "Radically transparent", d: "We disclose carrier commissions and never sell your data." },
              { I: Sparkles, t: "Designed for clarity", d: "Plain language explanations, side-by-side comparisons, simple enrollment." },
            ].map((v, i) => (
              <Reveal key={v.t} delay={i * 0.07}>
                <div className="h-full rounded-3xl bg-card p-7 ring-1 ring-border">
                  <span className="grid size-12 place-items-center rounded-2xl bg-brand text-brand-foreground">
                    <v.I className="size-5" />
                  </span>
                  <h3 className="mt-5 font-serif text-2xl">{v.t}</h3>
                  <p className="mt-2 text-muted-foreground">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-6">
          <Reveal>
            <h2 className="font-serif text-4xl sm:text-5xl">Ready to feel covered?</h2>
            <p className="mt-4 text-lg text-muted-foreground">Start your free comparison — it takes about two minutes.</p>
            <Link to="/quote" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-medium text-brand-foreground hover:scale-[1.02] transition-transform">
              Start my quote →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
