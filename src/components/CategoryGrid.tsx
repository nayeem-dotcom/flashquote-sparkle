import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { categories } from "@/lib/categories";

export function CategoryGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
            className="group relative block overflow-hidden rounded-3xl ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand/15 hover:ring-brand/40"
          >
            <div className="relative h-52 overflow-hidden">
              <img
                src={c.image}
                alt={c.name}
                width={1280}
                height={960}
                loading="lazy"
                className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/15 to-transparent" />
              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand backdrop-blur">
                <c.Icon className="size-3.5" /> {c.short}
              </div>
              <div className="absolute bottom-4 left-4 right-4 font-serif text-2xl text-white">{c.name}</div>
            </div>
            <div className="bg-card p-6">
              <p className="text-sm leading-relaxed text-muted-foreground">{c.tagline}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                {c.cta}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
