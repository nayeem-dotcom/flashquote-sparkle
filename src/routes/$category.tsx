import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, ShieldCheck } from "lucide-react";
import { categories, categoryBySlug } from "@/lib/categories";
import { Reveal } from "@/components/Reveal";
import { LeadForm } from "@/components/LeadForm";

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
        { property: "og:image", content: c?.image ?? "" },
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
      {/* Hero with form */}
      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20">
        <div className="animate-gradient-slow absolute inset-0 -z-10 bg-gradient-to-br from-brand-soft via-background to-background" />
        <div aria-hidden className="pointer-events-none absolute -right-20 top-20 -z-10 size-[480px] rounded-full bg-brand-accent/20 blur-[120px] animate-blob" />
        <div aria-hidden className="pointer-events-none absolute -left-20 top-60 -z-10 size-[420px] rounded-full bg-brand/15 blur-[120px] animate-blob" style={{ animationDelay: "4s" }} />

        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <Link to="/" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground hover:text-brand">
            ← All coverage
          </Link>

          <div className="mt-6 grid items-start gap-12 lg:grid-cols-[1.05fr_1fr]">
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
                className="mt-6 font-serif text-5xl leading-[1.02] text-balance sm:text-7xl"
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

              {/* Hero image collage */}
              <motion.div
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.25 }}
                className="relative mt-10 overflow-hidden rounded-[28px] ring-1 ring-border shadow-2xl shadow-brand/10"
              >
                <img src={c.image} alt={c.name} width={1280} height={720} className="aspect-[16/10] w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 p-6 text-brand-foreground">
                  <div className="font-serif text-3xl leading-tight">{c.tagline}</div>
                </div>
              </motion.div>

              <p className="mt-6 inline-flex items-center gap-2 text-xs text-muted-foreground">
                <ShieldCheck className="size-3.5 text-brand" /> 100% free comparison · No obligation
              </p>
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:sticky lg:top-24"
            >
              <LeadForm
                category={c.short}
                title={`Get your free ${c.short} quote`}
                eyebrow={`${c.short} · No obligation`}
                subtitle={`Fill in your details and a licensed advisor will reach out about ${c.programName}.`}
              />
            </motion.div>
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
                <div className="h-full rounded-3xl bg-card p-7 ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/10">
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

      {/* FAQ */}
      <section className="bg-surface py-20">
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

      {/* Second form CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <Reveal>
            <LeadForm
              category={c.short}
              title={`Ready to compare ${c.short} options?`}
              eyebrow="Free · Takes under a minute"
              subtitle="Send your details and a licensed advisor will follow up with tailored plans."
            />
          </Reveal>
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
                <Link to="/$category" params={{ category: o.slug }} className="group block overflow-hidden rounded-3xl ring-1 ring-border hover:-translate-y-1 transition-all">
                  <div className="relative h-40 overflow-hidden">
                    <img src={o.image} alt={o.name} width={1280} height={960} loading="lazy" className="size-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 font-serif text-2xl text-white">{o.short}</div>
                  </div>
                  <div className="bg-card p-5">
                    <p className="text-sm text-muted-foreground">{o.tagline}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
