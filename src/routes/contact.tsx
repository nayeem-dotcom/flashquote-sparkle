import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — TrendyQuote" },
      { name: "description", content: "Talk to a licensed insurance advisor. Call, email, or send us a message — we reply within one business hour." },
      { property: "og:title", content: "Contact TrendyQuote" },
      { property: "og:description", content: "Talk to a licensed insurance advisor." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

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
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Have a question about coverage? Need help comparing plans? A licensed advisor is just a message away.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="space-y-4">
              {[
                { I: Phone, t: "Call us", v: "1-800-555-QUOTE", s: "Mon–Fri · 8am–8pm ET" },
                { I: Mail, t: "Email", v: "hello@trendyquote.com", s: "We reply within 1 business hour" },
                { I: MapPin, t: "Headquarters", v: "Charleston, SC", s: "Licensed in all 50 states" },
                { I: Clock, t: "Live chat", v: "Available now", s: "Open weekdays during business hours" },
              ].map((c) => (
                <div key={c.t} className="flex items-start gap-4 rounded-3xl bg-card p-6 ring-1 ring-border">
                  <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-brand-soft text-brand">
                    <c.I className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{c.t}</div>
                    <div className="font-serif text-xl">{c.v}</div>
                    <div className="text-sm text-muted-foreground">{c.s}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="rounded-[32px] bg-card p-8 ring-1 ring-border shadow-xl sm:p-10"
            >
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center py-10 text-center"
                >
                  <span className="grid size-16 place-items-center rounded-full bg-brand text-brand-foreground">
                    <CheckCircle2 className="size-7" />
                  </span>
                  <h3 className="mt-5 font-serif text-3xl">Message received.</h3>
                  <p className="mt-2 text-muted-foreground">A licensed advisor will reach out within one business hour.</p>
                </motion.div>
              ) : (
                <div className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="First name" name="firstName" required />
                    <Field label="Last name" name="lastName" required />
                  </div>
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone (optional)" name="phone" type="tel" />
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">How can we help?</label>
                    <textarea
                      required
                      rows={4}
                      className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all focus:border-brand focus:ring-4 focus:ring-brand/10"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-4 text-base font-medium text-brand-foreground transition-transform hover:scale-[1.01] active:scale-95"
                  >
                    Send message
                    <Send className="size-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all focus:border-brand focus:ring-4 focus:ring-brand/10"
      />
    </label>
  );
}
