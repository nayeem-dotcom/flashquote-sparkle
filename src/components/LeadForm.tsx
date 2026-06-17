import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Lock, ShieldCheck, Sparkles } from "lucide-react";
import { z } from "zod";

const SERVICES = [
  "Medicare",
  "ACA Health",
  "Auto Insurance",
  "Homeowners Insurance",
  "SSDI Benefits",
  "Final Expense",
  "Not sure — help me choose",
];

const schema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(60),
  lastName: z.string().trim().min(1, "Last name is required").max(60),
  email: z.string().trim().email("Enter a valid email").max(120),
  phone: z
    .string()
    .trim()
    .min(10, "Enter a valid phone")
    .max(20)
    .regex(/^[+()\-\s\d]+$/, "Digits only"),
});

type Props = {
  variant?: "card" | "inline";
  category?: string;
  title?: string;
  eyebrow?: string;
  subtitle?: string;
  showService?: boolean;
};

export function LeadForm({
  variant = "card",
  category,
  title = "Get your free quote",
  eyebrow = "No obligation · Free comparison",
  subtitle = "Fill in your details and a licensed advisor will reach out with personalized options.",
  showService = false,
}: Props) {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", service: "" });
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((s) => ({ ...s, [k]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrors({});
    if (!agreed) {
      setErrors({ agreed: "You must agree before submitting." });
      return;
    }
    const parsed = schema.safeParse(form);
    if (showService && !form.service) {
      setErrors((x) => ({ ...x, service: "Please choose a coverage type." }));
      return;
    }
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        errs[issue.path[0] as string] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  const wrap =
    variant === "card"
      ? "relative overflow-hidden rounded-[32px] bg-card p-7 ring-1 ring-border shadow-2xl shadow-brand/10 sm:p-10"
      : "relative";

  return (
    <div className={wrap} id="lead-form">
      {variant === "card" && (
        <>
          <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full bg-brand-accent/20 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute -left-24 -bottom-24 size-64 rounded-full bg-brand/15 blur-3xl" />
        </>
      )}
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="ok"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="relative text-center"
          >
            <motion.span
              initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
              className="mx-auto grid size-16 place-items-center rounded-full bg-brand-soft text-brand"
            >
              <CheckCircle2 className="size-8" />
            </motion.span>
            <h3 className="mt-5 font-serif text-3xl">Thank you, {form.firstName || "there"}.</h3>
            <p className="mt-3 text-muted-foreground">
              A licensed advisor will be in touch shortly to walk you through your {category ? <strong className="text-foreground">{category}</strong> : "coverage"} options.
            </p>
            <p className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground">
              <ShieldCheck className="size-4 text-brand" /> Your information is protected.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onSubmit={onSubmit}
            noValidate
            className="relative"
          >
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.28em] text-brand">
              <Sparkles className="size-3.5" /> {eyebrow}
            </div>
            <h3 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">{title}</h3>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">{subtitle}</p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <Field label="First name" error={errors.firstName}>
                <input
                  type="text"
                  value={form.firstName}
                  onChange={set("firstName")}
                  autoComplete="given-name"
                  placeholder="Jane"
                  className={inputCls(errors.firstName)}
                />
              </Field>
              <Field label="Last name" error={errors.lastName}>
                <input
                  type="text"
                  value={form.lastName}
                  onChange={set("lastName")}
                  autoComplete="family-name"
                  placeholder="Doe"
                  className={inputCls(errors.lastName)}
                />
              </Field>
              <Field label="Email" error={errors.email}>
                <input
                  type="email"
                  value={form.email}
                  onChange={set("email")}
                  autoComplete="email"
                  placeholder="jane@example.com"
                  className={inputCls(errors.email)}
                />
              </Field>
              <Field label="Phone" error={errors.phone}>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={set("phone")}
                  autoComplete="tel"
                  placeholder="(555) 555-1212"
                  className={inputCls(errors.phone)}
                />
              </Field>
            </div>

            <label className="mt-6 flex cursor-pointer items-start gap-3 rounded-2xl border border-border bg-background/60 p-4 transition-colors hover:border-brand/40">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => { setAgreed(e.target.checked); if (e.target.checked) setErrors((x) => ({ ...x, agreed: "" })); }}
                className="mt-1 size-5 shrink-0 cursor-pointer rounded border-border text-brand focus:ring-brand"
              />
              <span className="text-[12px] leading-relaxed text-muted-foreground">
                By clicking <strong className="text-foreground">"Submit,"</strong> I acknowledge and consent to being contacted via messaging, voice calls, and/or email by <strong className="text-foreground">Insurance Trendy Quote</strong> and its marketing partners regarding the inquiry I have submitted through this form. I understand that my contact information will be used solely for the purpose of responding to my inquiry and will be handled in accordance with Home Trendy Quote's <Link to="/privacy" className="font-semibold text-brand underline underline-offset-2">privacy policy</Link>, Partner and <Link to="/terms" className="font-semibold text-brand underline underline-offset-2">terms &amp; conditions</Link>. I also confirm that I am the authorized user of the contact information provided and give my express written consent to receive communications, including autodialed and prerecorded messages, even if my number is registered on a state or federal Do Not Call (DNC) list. I understand that my consent is not a condition of purchase, and I may opt out at any time.
              </span>
            </label>
            {errors.agreed && (
              <p className="mt-2 text-sm font-medium text-destructive">{errors.agreed}</p>
            )}

            <button
              type="submit"
              disabled={!agreed}
              className="group relative mt-6 inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-brand px-8 py-4 text-base font-semibold text-brand-foreground shadow-xl shadow-brand/25 transition-transform hover:scale-[1.01] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
            >
              Submit
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </button>
            <p className="mt-4 flex items-center justify-center gap-2 text-[11px] text-muted-foreground">
              <Lock className="size-3" /> Secure · We never sell your data.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] font-bold uppercase tracking-widest text-muted-foreground">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs font-medium text-destructive">{error}</span>}
    </label>
  );
}

function inputCls(err?: string) {
  return [
    "w-full rounded-2xl border bg-background px-4 py-3.5 text-base font-medium outline-none transition-all",
    err ? "border-destructive focus:ring-2 focus:ring-destructive/20" : "border-border focus:border-brand focus:ring-2 focus:ring-brand/20",
  ].join(" ");
}
