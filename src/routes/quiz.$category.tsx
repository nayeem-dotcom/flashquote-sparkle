import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Lock, ShieldCheck, XCircle, Phone } from "lucide-react";
import { categories, categoryBySlug } from "@/lib/categories";

export const Route = createFileRoute("/quiz/$category")({
  beforeLoad: ({ params }) => {
    if (!categoryBySlug(params.category)) throw notFound();
  },
  head: ({ params }) => {
    const c = categoryBySlug(params.category);
    const title = c ? `${c.name} Eligibility Quiz — TrendyQuote` : "Eligibility Quiz";
    return {
      meta: [
        { title },
        { name: "description", content: "Quick eligibility quiz — no personal info required. See if you qualify in under 60 seconds." },
        { name: "robots", content: "noindex" },
      ],
    };
  },
  component: QuizPage,
});

function QuizPage() {
  const { category } = Route.useParams();
  const c = categoryBySlug(category)!;
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [done, setDone] = useState(false);

  const total = c.quiz.length;
  const current = c.quiz[step];
  const progress = ((step + (done ? 1 : 0)) / total) * 100;

  const allQualified = useMemo(
    () => Object.values(answers).every(Boolean) && Object.keys(answers).length === total,
    [answers, total],
  );

  const handleAnswer = (qualifies: boolean) => {
    const newAnswers = { ...answers, [current.id]: qualifies };
    setAnswers(newAnswers);
    if (step < total - 1) {
      setTimeout(() => setStep((s) => s + 1), 220);
    } else {
      setTimeout(() => setDone(true), 220);
    }
  };

  if (done) {
    return <Result category={c} qualified={allQualified} />;
  }

  return (
    <section className="relative overflow-hidden py-10 sm:py-16">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-soft/60 via-background to-background" />
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <Link to="/$category" params={{ category: c.slug }} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground hover:text-brand">
          ← Back to {c.short}
        </Link>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          {/* Image side */}
          <div className="relative hidden lg:block">
            <div className="sticky top-24">
              <div className="absolute -inset-3 -z-10 rounded-[32px] bg-gradient-to-br from-brand-accent/30 to-brand/30 blur-2xl" />
              <div className="relative overflow-hidden rounded-[28px] ring-1 ring-border shadow-2xl shadow-brand/10">
                <img src={c.image} alt={c.name} width={1280} height={960} className="aspect-[4/5] w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 p-6 text-brand-foreground">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest backdrop-blur">
                    <c.Icon className="size-3.5" /> {c.short}
                  </div>
                  <h3 className="mt-3 font-serif text-3xl leading-tight">{c.tagline}</h3>
                </div>
              </div>
              <p className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                <ShieldCheck className="size-3.5 text-brand" /> No name, email or phone required.
              </p>
            </div>
          </div>

          {/* Quiz card */}
          <div>
            <div className="mb-6">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                <span>Question {step + 1} of {total}</span>
                <span className="text-brand">{c.short} eligibility</span>
              </div>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-border">
                <motion.div
                  initial={false}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full rounded-full bg-gradient-to-r from-brand to-brand-accent"
                />
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[28px] bg-card p-7 ring-1 ring-border shadow-2xl shadow-brand/5 sm:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h2 className="font-serif text-2xl leading-tight sm:text-3xl">
                    {current.text}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">Tap an answer to continue.</p>
                  <div className="mt-7 grid gap-3">
                    {current.options.map((opt) => (
                      <button
                        key={opt.label}
                        onClick={() => handleAnswer(opt.qualifies)}
                        className="group flex w-full items-center justify-between gap-4 rounded-2xl border border-border bg-background p-4 text-left text-base font-medium transition-all hover:border-brand hover:bg-brand-soft hover:translate-x-1"
                      >
                        <span>{opt.label}</span>
                        <ArrowRight className="size-4 text-muted-foreground transition-all group-hover:text-brand group-hover:translate-x-1" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 flex items-center justify-between gap-3 border-t border-border pt-5">
                <button
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  disabled={step === 0}
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:bg-brand-soft hover:text-brand disabled:opacity-0"
                >
                  <ArrowLeft className="size-4" /> Back
                </button>
                <p className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Lock className="size-3.5" /> 100% anonymous
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Result({ category: c, qualified }: { category: typeof categories[number]; qualified: boolean }) {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-soft/60 via-background to-background" />
      <div className="mx-auto max-w-4xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-[32px] bg-card ring-1 ring-border shadow-2xl shadow-brand/10"
        >
          <div className="relative h-56 overflow-hidden sm:h-72">
            <img src={c.image} alt={c.name} width={1280} height={960} className="size-full object-cover" />
            <div className={`absolute inset-0 ${qualified ? "bg-gradient-to-t from-brand/85 via-brand/40" : "bg-gradient-to-t from-foreground/80 via-foreground/30"} to-transparent`} />
            <motion.span
              initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className={`absolute bottom-6 left-6 grid size-16 place-items-center rounded-full ${qualified ? "bg-brand-accent text-brand" : "bg-card text-foreground"} shadow-xl`}
            >
              {qualified ? <CheckCircle2 className="size-8" /> : <XCircle className="size-8" />}
            </motion.span>
          </div>

          <div className="p-8 sm:p-12">
            {qualified ? (
              <>
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand">
                  Congratulations
                </span>
                <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
                  You <span className="italic text-brand">qualify</span> for {c.name}.
                </h1>
                <p className="mt-4 max-w-[60ch] text-lg text-muted-foreground">
                  Based on your answers, you're a strong match for {c.short.toLowerCase()} coverage. The next step is a free, no-obligation chat with a licensed advisor — they'll walk you through real plans available in your area.
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <a
                    href="tel:+18005557868"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-4 text-base font-medium text-brand-foreground transition-transform hover:scale-[1.02]"
                  >
                    <Phone className="size-4" /> Call a licensed advisor
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-4 text-base font-medium hover:bg-brand-soft"
                  >
                    Or schedule a callback
                  </Link>
                </div>
                <div className="mt-8 grid gap-4 rounded-2xl bg-surface p-5 sm:grid-cols-3">
                  {c.benefits.map((b) => (
                    <div key={b.title}>
                      <div className="font-serif text-base text-brand">{b.title}</div>
                      <p className="mt-1 text-xs text-muted-foreground">{b.desc}</p>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <span className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-widest text-foreground/70">
                  We're sorry
                </span>
                <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
                  This plan isn't the <span className="italic text-brand">right fit</span> right now.
                </h1>
                <p className="mt-4 max-w-[60ch] text-lg text-muted-foreground">
                  Based on your answers, {c.name.toLowerCase()} likely won't be the best match today — but you may qualify for one of our other coverage types. Take a look below.
                </p>
                <div className="mt-8">
                  <Link
                    to="/quote"
                    className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-4 text-base font-medium text-brand-foreground transition-transform hover:scale-[1.02]"
                  >
                    Explore other coverage <ArrowRight className="size-4" />
                  </Link>
                </div>
                <div className="mt-10 grid gap-3 sm:grid-cols-2">
                  {categories.filter((x) => x.slug !== c.slug).slice(0, 4).map((o) => (
                    <Link
                      key={o.slug}
                      to="/quiz/$category"
                      params={{ category: o.slug }}
                      className="group flex items-center gap-4 rounded-2xl border border-border bg-background p-4 hover:border-brand/40 hover:bg-brand-soft"
                    >
                      <span className="grid size-10 place-items-center rounded-xl bg-brand-soft text-brand group-hover:bg-brand group-hover:text-brand-foreground">
                        <o.Icon className="size-5" />
                      </span>
                      <div className="min-w-0">
                        <div className="font-serif text-lg">{o.short}</div>
                        <div className="truncate text-xs text-muted-foreground">{o.tagline}</div>
                      </div>
                      <ArrowRight className="ml-auto size-4 text-muted-foreground group-hover:text-brand" />
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </motion.div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          This quiz collects zero personal information. See our <Link to="/privacy" className="underline hover:text-brand">Privacy Policy</Link>.
        </p>
      </div>
    </section>
  );
}
