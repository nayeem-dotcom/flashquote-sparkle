import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Lock } from "lucide-react";
import { categories } from "@/lib/categories";
import { z } from "zod";

const searchSchema = z.object({
  type: z.string().optional(),
});

export const Route = createFileRoute("/quote")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Get a Quote — TrendyQuote" },
      { name: "description", content: "Get personalized insurance quotes in under two minutes. Secure, private, and never shared." },
      { property: "og:title", content: "Get a Quote — TrendyQuote" },
      { property: "og:description", content: "Personalized insurance quotes in under two minutes." },
      { property: "og:url", content: "/quote" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/quote" }],
  }),
  component: QuotePage,
});

type FormState = {
  type: string;
  zip: string;
  age: string;
  household: string;
  budget: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

const steps = ["Coverage", "Location", "About you", "Contact"] as const;

function QuotePage() {
  const search = Route.useSearch();
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState<FormState>({
    type: search.type ?? "",
    zip: "",
    age: "",
    household: "",
    budget: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const update = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const canNext = () => {
    if (step === 0) return !!form.type;
    if (step === 1) return /^\d{5}$/.test(form.zip);
    if (step === 2) return !!form.age && !!form.household;
    if (step === 3) return !!form.firstName && !!form.email;
    return true;
  };

  const next = () => {
    if (step < steps.length - 1) setStep((s) => s + 1);
    else setDone(true);
  };

  if (done) return <Done form={form} />;

  return (
    <section className="relative overflow-hidden py-10 sm:py-16">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-soft/60 via-background to-background" />
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            <span>Step {step + 1} of {steps.length}</span>
            <span className="text-brand">{steps[step]}</span>
          </div>
          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-border">
            <motion.div
              initial={false}
              animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="h-full rounded-full bg-gradient-to-r from-brand to-brand-accent"
            />
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[32px] bg-card p-8 ring-1 ring-border shadow-2xl shadow-brand/5 sm:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {step === 0 && <Step0 value={form.type} onChange={(v) => update("type", v)} />}
              {step === 1 && <Step1 zip={form.zip} onChange={(v) => update("zip", v)} />}
              {step === 2 && <Step2 form={form} update={update} />}
              {step === 3 && <Step3 form={form} update={update} />}
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-between gap-3">
            <button
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:bg-brand-soft hover:text-brand disabled:opacity-0"
            >
              <ArrowLeft className="size-4" /> Back
            </button>
            <button
              onClick={next}
              disabled={!canNext()}
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-brand-foreground transition-all hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
            >
              {step === steps.length - 1 ? "See my quote" : "Continue"}
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>

        <p className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <Lock className="size-3.5" /> Secure 256-bit SSL · We never sell your data
        </p>
      </div>
    </section>
  );
}

function Step0({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <h2 className="font-serif text-3xl sm:text-4xl">What would you like to <span className="italic text-brand">protect?</span></h2>
      <p className="mt-3 text-muted-foreground">Pick a coverage type — we'll personalize the rest.</p>
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {categories.map((c) => {
          const active = value === c.slug;
          return (
            <button
              key={c.slug}
              onClick={() => onChange(c.slug)}
              className={`group flex items-center gap-4 rounded-2xl border p-4 text-left transition-all ${
                active ? "border-brand bg-brand-soft ring-2 ring-brand/20" : "border-border hover:border-brand/40 hover:bg-brand-soft/40"
              }`}
            >
              <span className={`grid size-11 shrink-0 place-items-center rounded-xl transition-colors ${
                active ? "bg-brand text-brand-foreground" : "bg-brand-soft text-brand"
              }`}>
                <c.Icon className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="block font-serif text-lg leading-tight">{c.short}</span>
                <span className="block truncate text-xs text-muted-foreground">{c.tagline}</span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Step1({ zip, onChange }: { zip: string; onChange: (v: string) => void }) {
  return (
    <div>
      <h2 className="font-serif text-3xl sm:text-4xl">Where do you <span className="italic text-brand">live?</span></h2>
      <p className="mt-3 text-muted-foreground">Rates vary by ZIP code — we'll pull plans from your area.</p>
      <div className="mt-8">
        <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">ZIP code</label>
        <input
          autoFocus
          inputMode="numeric"
          maxLength={5}
          placeholder="e.g. 29401"
          value={zip}
          onChange={(e) => onChange(e.target.value.replace(/\D/g, ""))}
          className="mt-2 w-full rounded-2xl border border-border bg-background px-5 py-5 font-serif text-3xl tracking-widest outline-none transition-all focus:border-brand focus:ring-4 focus:ring-brand/10"
        />
      </div>
    </div>
  );
}

function Step2({ form, update }: { form: FormState; update: <K extends keyof FormState>(k: K, v: FormState[K]) => void }) {
  return (
    <div>
      <h2 className="font-serif text-3xl sm:text-4xl">Tell us a bit <span className="italic text-brand">about you.</span></h2>
      <p className="mt-3 text-muted-foreground">Just the basics — never an SSN.</p>
      <div className="mt-8 space-y-5">
        <SelectField
          label="Age range"
          value={form.age}
          onChange={(v) => update("age", v)}
          options={["Under 30", "30–44", "45–54", "55–64", "65+"]}
        />
        <SelectField
          label="Coverage for"
          value={form.household}
          onChange={(v) => update("household", v)}
          options={["Just me", "Me + partner", "Family with kids", "Other"]}
        />
        <SelectField
          label="Monthly budget (optional)"
          value={form.budget}
          onChange={(v) => update("budget", v)}
          options={["Under $50", "$50–$150", "$150–$300", "$300+", "Not sure yet"]}
        />
      </div>
    </div>
  );
}

function Step3({ form, update }: { form: FormState; update: <K extends keyof FormState>(k: K, v: FormState[K]) => void }) {
  return (
    <div>
      <h2 className="font-serif text-3xl sm:text-4xl">Where should we <span className="italic text-brand">send it?</span></h2>
      <p className="mt-3 text-muted-foreground">We'll email your personalized quote in under two minutes.</p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Input label="First name" value={form.firstName} onChange={(v) => update("firstName", v)} />
        <Input label="Last name" value={form.lastName} onChange={(v) => update("lastName", v)} />
        <div className="sm:col-span-2">
          <Input label="Email" type="email" value={form.email} onChange={(v) => update("email", v)} />
        </div>
        <div className="sm:col-span-2">
          <Input label="Phone (optional)" type="tel" value={form.phone} onChange={(v) => update("phone", v)} />
        </div>
      </div>
    </div>
  );
}

function Input({ label, value, onChange, type = "text" }: { label: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all focus:border-brand focus:ring-4 focus:ring-brand/10"
      />
    </label>
  );
}

function SelectField({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <div>
      <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</span>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map((o) => {
          const active = value === o;
          return (
            <button
              key={o}
              type="button"
              onClick={() => onChange(o)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                active ? "border-brand bg-brand text-brand-foreground" : "border-border hover:border-brand/40 hover:bg-brand-soft"
              }`}
            >
              {o}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Done({ form }: { form: FormState }) {
  const cat = categories.find((c) => c.slug === form.type);
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-soft/60 via-background to-background" />
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[32px] bg-card p-10 text-center ring-1 ring-border shadow-2xl shadow-brand/10 sm:p-14"
        >
          <motion.span
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mx-auto grid size-20 place-items-center rounded-full bg-brand text-brand-foreground"
          >
            <CheckCircle2 className="size-9" />
          </motion.span>
          <h1 className="mt-6 font-serif text-4xl sm:text-5xl">You're <span className="italic text-brand">all set.</span></h1>
          <p className="mt-4 text-lg text-muted-foreground">
            We're matching you with {cat ? cat.name.toLowerCase() : "insurance"} plans in your area. A licensed advisor will reach out to <span className="font-semibold text-foreground">{form.email}</span> within one business hour.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="/" className="rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-brand-soft">Back to home</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
