import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { categories } from "@/lib/categories";

export function CategoryGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((c, i) => (
        <motion.div
          key={c.slug}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            to="/$category"
            params={{ category: c.slug }}
            className="group relative block overflow-hidden rounded-3xl bg-card p-7 ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand/10 hover:ring-brand/30"
          >
            <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
              <c.Icon className="size-5" />
            </div>
            <h3 className="font-serif text-2xl leading-tight">{c.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.tagline}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand">
              {c.cta}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-12 -right-12 size-40 rounded-full bg-brand/5 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:bg-brand-accent/20"
            />
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
