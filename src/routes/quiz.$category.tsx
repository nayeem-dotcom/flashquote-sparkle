import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Lock, ShieldCheck, XCircle, Phone, Sparkles } from "lucide-react";
import { categories, categoryBySlug, isValidZip, PHONE_DISPLAY, PHONE_TEL } from "@/lib/categories";
import type { Category } from "@/lib/categories";

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
  const [zip, setZip] = useState("");
  const [zipError, setZipError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const total = c.quiz.length;
  const current = c.quiz[step];
  const progress = ((step + (done ? 1 : 0)) / total) * 100;

  const allQualified = useMemo(
    () => Object.values(answers).every(Boolean) && Object.keys(answers).length === total,
    [answers, total],
  );

  const advance = (id: string, qualifies: boolean) => {
    const newAnswers = { ...answers, [id]: qualifies };
    setAnswers(newAnswers);
    if (step < total - 1) {
      setTimeout(() => setStep((s) => s + 1), 220);
    } else {
      setTimeout(() => setDone(true), 220);
    }
  };

  const submitZip = () => {
    if (!isValidZip(zip)) {
      setZipError("Please enter a valid 5-digit U.S. ZIP code.");
      return;
    }
    setZipError(null);
    advance(current.id, true);
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
              <div className="absolute -inset-3 -z-10 rounded-[32px] bg-gradient-to-br from-brand-accent/30 to-brand/30 blur-2xl animate-pulse" />
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

                  {current.kind === "zip" ? (
                    <div className="mt-6">
                      <p className="text-sm text-muted-foreground">We use your ZIP only to confirm eligibility — never stored.</p>
                      <form
                        onSubmit={(e) => { e.preventDefault(); submitZip(); }}
                        className="mt-5 flex flex-col gap-3 sm:flex-row"
                      >
                        <input
                          inputMode="numeric"
                          autoFocus
                          maxLength={5}
                          value={zip}
                          onChange={(e) => { setZip(e.target.value.replace(/\D/g, "")); setZipError(null); }}
                          placeholder="e.g. 96001"
                          className="flex-1 rounded-2xl border border-border bg-background px-5 py-4 text-lg font-medium tracking-widest outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/20"
                        />
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand px-6 py-4 text-base font-medium text-brand-foreground transition-transform hover:scale-[1.02] active:scale-95"
                        >
                          Continue <ArrowRight className="size-4" />
                        </button>
                      </form>
                      {zipError && <p className="mt-3 text-sm font-medium text-destructive">{zipError}</p>}
                    </div>
                  ) : (
                    <>
                      <p className="mt-2 text-sm text-muted-foreground">Tap an answer to continue.</p>
                      <div className="mt-7 grid gap-3">
                        {current.options.map((opt) => (
                          <button
                            key={opt.label}
                            onClick={() => advance(current.id, opt.qualifies)}
                            className="group flex w-full items-center justify-between gap-4 rounded-2xl border border-border bg-background p-4 text-left text-base font-medium transition-all hover:border-brand hover:bg-brand-soft hover:translate-x-1"
                          >
                            <span>{opt.label}</span>
                            <ArrowRight className="size-4 text-muted-foreground transition-all group-hover:text-brand group-hover:translate-x-1" />
                          </button>
                        ))}
                      </div>
                    </>
                  )}
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

function Result({ category: c, qualified }: { category: Category; qualified: boolean }) {
  const advocateTitle = c.advocateLabel === "SSDI advocate" ? "SSDI Advocate" : "Licensed Agent";

  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-soft/60 via-background to-background" />
      {qualified && (
        <>
          <div className="pointer-events-none absolute -left-32 top-20 -z-10 size-96 rounded-full bg-brand-accent/30 blur-3xl animate-blob" />
          <div className="pointer-events-none absolute -right-32 bottom-20 -z-10 size-96 rounded-full bg-brand/30 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />
        </>
      )}
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
              initial={{ scale: 0, rotate: -45 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className={`absolute bottom-6 left-6 grid size-16 place-items-center rounded-full ${qualified ? "bg-brand-accent text-brand" : "bg-card text-foreground"} shadow-xl`}
            >
              {qualified ? <CheckCircle2 className="size-8" /> : <XCircle className="size-8" />}
            </motion.span>
          </div>

          <div className="p-8 sm:p-12">
            {qualified ? (
              <>
                <motion.span
                  initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                  className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand"
                >
                  <Sparkles className="size-3.5" /> Congratulations
                </motion.span>
                <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
                  You may be <span className="italic text-brand">eligible</span> for coverage.
                </h1>
                <p className="mt-4 max-w-[60ch] text-lg text-muted-foreground">
                  Based on your responses, you meet the initial screening criteria for our <strong className="text-foreground">{c.programName}</strong>. You're one step away from securing your savings and benefits.
                </p>

                <div className="mt-7 grid gap-3 rounded-2xl bg-surface p-5 sm:grid-cols-3">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Average Call</div>
                    <div className="mt-1 font-serif text-xl text-brand">Under 3 min</div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Cost</div>
                    <div className="mt-1 font-serif text-xl text-brand">100% Free</div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Obligation</div>
                    <div className="mt-1 font-serif text-xl text-brand">None</div>
                  </div>
                </div>

                <div className="mt-8">
                  <motion.a
                    href={`tel:${PHONE_TEL}`}
                    initial={{ scale: 0.95 }}
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                    className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-brand to-brand-accent px-8 py-6 text-lg font-semibold text-brand-foreground shadow-2xl shadow-brand/30 ring-1 ring-brand/20 transition-transform hover:scale-[1.02]"
                  >
                    <Phone className="size-5" />
                    Talk With a {advocateTitle} Now
                    <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                  </motion.a>
                  <p className="mt-3 text-center text-sm font-medium text-brand">{PHONE_DISPLAY}</p>
                  <p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground">
                    By tapping the button above, you consent to be connected with a {c.advocateLabel}.
                  </p>
                </div>
              </>
            ) : (
              <>
                <span className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-widest text-foreground/70">
                  Thank you for your time
                </span>
                <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
                  We're sorry — you don't <span className="italic text-brand">qualify</span> right now.
                </h1>
                <p className="mt-4 max-w-[60ch] text-lg text-muted-foreground">
                  Thank you for completing our questionnaire. Based on your responses, you don't meet the specific eligibility requirements for our <strong className="text-foreground">{c.programName}</strong> today.
                </p>

                <div className="mt-7 rounded-2xl bg-surface p-5">
                  <div className="font-serif text-xl">Why did this happen?</div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Our automated system screens for specific carrier criteria — strict age brackets, income limits, or current coverage status. Missing even one means we can't route you through this specific channel.
                  </p>
                </div>

                <div className="mt-7">
                  <div className="font-serif text-xl">What can you do next?</div>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    <li>• <strong className="text-foreground">Review your answers.</strong> If you misclicked, restart the quiz.</li>
                    <li>• <strong className="text-foreground">Try a different coverage type.</strong> You may qualify for another program below.</li>
                    <li>• <strong className="text-foreground">Check government resources.</strong> Some assistance programs have more flexible guidelines.</li>
                  </ul>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-4 text-base font-medium text-brand-foreground transition-transform hover:scale-[1.02]"
                  >
                    <ArrowLeft className="size-4" /> Return to homepage
                  </Link>
                  <Link
                    to="/quote"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-4 text-base font-medium hover:bg-brand-soft"
                  >
                    Try another coverage <ArrowRight className="size-4" />
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
