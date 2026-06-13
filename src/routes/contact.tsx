import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { categories } from "@/lib/categories";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — TrendyQuote" },
      { name: "description", content: "Talk to a licensed insurance advisor. Call or email us — we reply within one business hour. No personal info required on our site." },
      { property: "og:title", content: "Contact TrendyQuote" },
      { property: "og:description", content: "Talk to a licensed insurance advisor." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <section className="relative overflow-hidden pt-20 pb-12 sm:pt-28">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-soft/60 to-background" />
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs font-semibold uppercase tracking-widest text-brand">
            Contact
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="mt-4 max-w-3xl font-serif text-5xl leading-[1.05] sm:text-6xl"
          >
            Let's <span className="italic text-brand">talk.</span>
          </motion.h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Have a question about coverage? Need help comparing plans? A licensed advisor is just one call or email away. We never ask for personal information through our website — only when you choose to speak with a real human.
          </p>
          <p className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground">
            <ShieldCheck className="size-4 text-brand" /> Your privacy is protected — see our <Link to="/privacy" className="underline hover:text-brand">Privacy Policy</Link>
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { I: Phone, t: "Call us", v: "(866) 498-7441", s: "Mon–Fri · 8am–8pm ET", href: "tel:+18664987441" },
              { I: Mail, t: "Email", v: "hello@trendyquote.com", s: "We reply within 1 hour", href: "mailto:hello@trendyquote.com" },
              { I: MapPin, t: "Headquarters", v: "Charleston, SC", s: "Licensed in all 50 states" },
              { I: Clock, t: "Hours", v: "Mon – Fri", s: "8am–8pm Eastern Time" },
            ].map((c) => {
              const Inner = (
                <>
                  <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-brand-soft text-brand">
                    <c.I className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{c.t}</div>
                    <div className="font-serif text-xl">{c.v}</div>
                    <div className="text-sm text-muted-foreground">{c.s}</div>
                  </div>
                </>
              );
              return c.href ? (
                <Reveal key={c.t}>
                  <a href={c.href} className="flex items-start gap-4 rounded-3xl bg-card p-6 ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/10 hover:ring-brand/30">
                    {Inner}
                  </a>
                </Reveal>
              ) : (
                <Reveal key={c.t}>
                  <div className="flex items-start gap-4 rounded-3xl bg-card p-6 ring-1 ring-border">{Inner}</div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <Reveal className="mb-10 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand">Or start anonymously</span>
            <h2 className="mt-3 font-serif text-4xl leading-tight">Take a 60-second eligibility quiz.</h2>
            <p className="mt-3 text-muted-foreground">No name, email or phone required. Just see if you qualify.</p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <Link
                key={c.slug}
                to="/quiz/$category"
                params={{ category: c.slug }}
                className="group flex items-center gap-4 rounded-2xl bg-card p-4 ring-1 ring-border hover:border-brand/40 hover:ring-brand/40"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand group-hover:bg-brand group-hover:text-brand-foreground">
                  <c.Icon className="size-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="font-serif text-lg">{c.short}</div>
                  <div className="truncate text-xs text-muted-foreground">{c.tagline}</div>
                </div>
                <ArrowRight className="size-4 text-muted-foreground group-hover:text-brand group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
