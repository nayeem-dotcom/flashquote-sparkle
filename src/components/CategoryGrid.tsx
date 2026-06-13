import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { categories } from "@/lib/categories";

const SLOTS = ["medicare", "aca", "auto", "home", "ssdi", "final-expense"] as const;

export function CategoryGrid() {
  const bySlug = Object.fromEntries(categories.map((c) => [c.slug, c]));
  const [medicare, aca, auto, home, ssdi, finalExp] = SLOTS.map((s) => bySlug[s]).filter(Boolean);

  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Medicare — anchor feature */}
      {medicare && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-12 md:col-span-8"
        >
          <Link
            to="/$category"
            params={{ category: medicare.slug }}
            className="group relative block h-[420px] md:h-[560px] overflow-hidden rounded-[2.5rem] bg-brand"
          >
            <img
              src={medicare.image}
              alt={medicare.name}
              className="absolute inset-0 size-full object-cover opacity-60 transition-transform duration-[1200ms] group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand via-brand/30 to-transparent" />
            <div className="absolute inset-x-10 bottom-10 md:inset-x-12 md:bottom-12">
              <span className="mb-5 inline-block rounded-full bg-brand-accent px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brand">
                Senior specialty
              </span>
              <h3 className="font-serif text-4xl leading-tight text-brand-foreground md:text-5xl">{medicare.name}</h3>
              <p className="mt-4 max-w-md font-light text-brand-foreground/70 md:text-lg">{medicare.blurb}</p>
              <span className="mt-8 inline-grid size-14 place-items-center rounded-full border border-white/30 text-white transition-all group-hover:bg-white group-hover:text-brand">
                <ArrowRight className="size-5" />
              </span>
            </div>
          </Link>
        </motion.div>
      )}

      {/* ACA — vertical with image bottom */}
      {aca && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-12 md:col-span-4"
        >
          <Link
            to="/$category"
            params={{ category: aca.slug }}
            className="group flex h-[420px] md:h-[560px] flex-col overflow-hidden rounded-[2.5rem] border border-border bg-card p-10 transition-colors hover:border-brand-accent"
          >
            <div className="grid size-14 place-items-center rounded-2xl bg-brand-soft text-brand">
              <aca.Icon className="size-7" />
            </div>
            <h3 className="mt-8 font-serif text-3xl text-brand md:text-4xl">{aca.name}</h3>
            <p className="mt-4 font-light leading-relaxed text-muted-foreground">{aca.tagline}</p>
            <div className="relative mt-auto h-48 overflow-hidden rounded-2xl grayscale transition-all duration-700 group-hover:grayscale-0">
              <img src={aca.image} alt={aca.name} loading="lazy" className="size-full object-cover" />
            </div>
          </Link>
        </motion.div>
      )}

      {/* Auto — light card */}
      {auto && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-12 md:col-span-4"
        >
          <Link
            to="/$category"
            params={{ category: auto.slug }}
            className="group relative flex h-[340px] flex-col justify-between overflow-hidden rounded-[2.5rem] border border-border bg-card p-9 transition-all hover:shadow-xl"
          >
            <div>
              <h3 className="font-serif text-3xl text-brand">{auto.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{auto.tagline}</p>
            </div>
            <div className="relative h-24 overflow-hidden rounded-xl opacity-90 transition-opacity group-hover:opacity-100">
              <img src={auto.image} alt={auto.name} loading="lazy" className="size-full object-cover" />
            </div>
          </Link>
        </motion.div>
      )}

      {/* Home — slate / circular image */}
      {home && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-12 md:col-span-4"
        >
          <Link
            to="/$category"
            params={{ category: home.slug }}
            className="group relative flex h-[340px] flex-col justify-between overflow-hidden rounded-[2.5rem] bg-surface p-9 transition-colors hover:bg-brand-soft"
          >
            <h3 className="relative z-10 font-serif text-3xl text-brand">{home.name}</h3>
            <div className="relative z-10">
              <p className="mb-5 text-sm text-muted-foreground">{home.tagline}</p>
              <span className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-xs font-bold text-brand shadow-sm">
                Request quote <ArrowRight className="size-3.5" />
              </span>
            </div>
            <div className="absolute -bottom-12 -right-12 size-56 overflow-hidden rounded-full ring-8 ring-card transition-transform duration-700 group-hover:scale-110">
              <img src={home.image} alt={home.name} loading="lazy" className="size-full object-cover" />
            </div>
          </Link>
        </motion.div>
      )}

      {/* SSDI — bright accent */}
      {ssdi && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-12 md:col-span-4"
        >
          <Link
            to="/$category"
            params={{ category: ssdi.slug }}
            className="group relative flex h-[340px] flex-col justify-between overflow-hidden rounded-[2.5rem] bg-brand-accent p-9"
          >
            <h3 className="font-serif text-3xl text-brand">{ssdi.name}</h3>
            <p className="text-sm font-medium text-brand/70">{ssdi.tagline}</p>
            <div className="flex items-center justify-between">
              <div className="h-1 w-12 overflow-hidden rounded-full bg-brand/20">
                <div className="h-full w-1/3 bg-brand transition-all duration-1000 group-hover:w-full" />
              </div>
              <ArrowRight className="size-7 text-brand" />
            </div>
          </Link>
        </motion.div>
      )}

      {/* Final Expense — wide closing */}
      {finalExp && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-12"
        >
          <Link
            to="/$category"
            params={{ category: finalExp.slug }}
            className="group relative grid h-[300px] grid-cols-1 overflow-hidden rounded-[2.5rem] bg-brand md:grid-cols-2"
          >
            <div className="relative flex flex-col justify-center p-10 md:p-14">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent">Peace of mind</span>
              <h3 className="mt-3 font-serif text-4xl text-brand-foreground md:text-5xl">{finalExp.name}</h3>
              <p className="mt-3 max-w-md font-light text-brand-foreground/70">{finalExp.tagline}</p>
              <span className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-bold text-brand-accent">
                {finalExp.cta} <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
            <div className="relative h-full overflow-hidden">
              <img
                src={finalExp.image}
                alt={finalExp.name}
                loading="lazy"
                className="size-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand via-brand/40 to-transparent md:bg-gradient-to-r" />
            </div>
          </Link>
        </motion.div>
      )}
    </div>
  );
}
