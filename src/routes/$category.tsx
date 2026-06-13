import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { categories, categoryBySlug } from "@/lib/categories";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/$category")({
  beforeLoad: ({ params }) => {
    if (!categoryBySlug(params.category)) throw notFound();
  },
  head: ({ params }) => {
    const c = categoryBySlug(params.category);
    const title = c ? `${c.name} — TrendyQuote` : "Coverage — TrendyQuote";
    const desc = c?.blurb ?? "Compare insurance plans with TrendyQuote.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: `/${params.category}` },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/${params.category}` }],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useParams();
  const c = categoryBySlug(category)!;
  const others = categories.filter((x) => x.slug !== c.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-16 pb-20 sm:pt-24">
        <div className="animate-gradient-slow absolute inset-0 -z-10 bg-gradient-to-br from-brand-soft via-background to-background" />
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <Link to="/" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground hover:text-brand">
            ← All coverage
          </Link>
          <div className="mt-6 grid items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-3 rounded-full bg-card px-4 py-2 ring-1 ring-border"
              >
                <span className="grid size-8 place-items-center rounded-full bg-brand-soft text-brand">
                  <c.Icon className="size-4" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest text-brand">{c.short}</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-6 font-serif text-5xl leading-[1.05] text-balance sm:text-6xl"
              >
                {c.name.split(" ")[0]}{" "}
                <span className="italic text-brand">{c.name.split(" ").slice(1).join(" ") || "coverage"}</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-6 max-w-[60ch] text-lg text-muted-foreground"
              >
                {c.blurb}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <Link to="/quote" search={{ type: c.slug }} className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-medium text-brand-foreground hover:scale-[1.02] transition-transform">
                  {c.cta} <ArrowRight className="size-4" />
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium hover:bg-brand-soft">
                  Talk to an advisor
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <Reveal className="mb-12 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand">Why TrendyQuote</span>
            <h2 className="mt-3 font-serif text-4xl leading-tight">What's included.</h2>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {c.benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.08}>
                <div className="h-full rounded-3xl bg-card p-7 ring-1 ring-border">
                  <span className="grid size-10 place-items-center rounded-2xl bg-brand-soft text-brand">
                    <Check className="size-5" />
                  </span>
                  <h3 className="mt-5 font-serif text-2xl">{b.title}</h3>
                  <p className="mt-2 text-muted-foreground">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process strip */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <Reveal>
            <h2 className="font-serif text-4xl">From "curious" to "covered" in 3 steps.</h2>
          </Reveal>
          <ol className="mt-10 space-y-4">
            {[
              { t: "Share a few details", d: "ZIP code, basic info, and what you'd like to protect." },
              { t: "See real quotes side-by-side", d: "We surface the most relevant carriers for your situation." },
              { t: "Enroll with help if you want it", d: "Talk to a licensed advisor — or self-enroll online, your call." },
            ].map((s, i) => (
              <Reveal key={s.t} delay={i * 0.08}>
                <li className="flex gap-5 rounded-3xl bg-card p-6 ring-1 ring-border">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand text-brand-foreground font-serif text-lg">{i + 1}</span>
                  <div className="min-w-0">
                    <div className="font-serif text-xl">{s.t}</div>
                    <p className="text-muted-foreground">{s.d}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-6">
          <Reveal className="mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand">Questions</span>
            <h2 className="mt-3 font-serif text-4xl">Frequently asked.</h2>
          </Reveal>
          <div className="space-y-3">
            {c.faq.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.06}>
                <details className="group rounded-2xl bg-card p-6 ring-1 ring-border transition-all open:shadow-lg open:shadow-brand/5">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
                    <span className="font-serif text-xl">{f.q}</span>
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand-soft text-brand transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 text-muted-foreground">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="border-t border-border bg-surface py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <Reveal className="mb-10 flex items-end justify-between gap-4">
            <h2 className="font-serif text-3xl sm:text-4xl">Explore more coverage</h2>
            <Link to="/" className="text-sm font-semibold text-brand">All categories →</Link>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((o, i) => (
              <Reveal key={o.slug} delay={i * 0.06}>
                <Link to="/$category" params={{ category: o.slug }} className="group block rounded-3xl bg-card p-6 ring-1 ring-border hover:-translate-y-1 transition-all">
                  <span className="grid size-10 place-items-center rounded-xl bg-brand-soft text-brand group-hover:bg-brand group-hover:text-brand-foreground transition-colors">
                    <o.Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 font-serif text-xl">{o.name}</h3>
                  <p className="text-sm text-muted-foreground">{o.tagline}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
