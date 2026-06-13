import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`group flex shrink-0 items-center gap-2.5 ${className}`}>
      <span className="relative grid size-10 place-items-center">
        <span
          aria-hidden
          className="absolute inset-0 -z-10 rounded-[14px] bg-gradient-to-br from-brand-accent/50 to-brand/50 blur-xl opacity-60 transition-opacity duration-500 group-hover:opacity-100"
        />
        <svg
          viewBox="0 0 40 40"
          className="size-10 transition-transform duration-500 group-hover:scale-[1.06]"
          aria-hidden
        >
          <defs>
            <linearGradient id="tq-brand-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--brand)" />
              <stop offset="100%" stopColor="oklch(0.32 0.07 184)" />
            </linearGradient>
            <linearGradient id="tq-shine-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="white" stopOpacity="0.28" />
              <stop offset="60%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* shield silhouette — protection */}
          <path
            d="M20 2 L34 7 V20 C34 28.5 28 34.5 20 38 C12 34.5 6 28.5 6 20 V7 Z"
            fill="url(#tq-brand-grad)"
          />
          <path
            d="M20 2 L34 7 V20 C34 28.5 28 34.5 20 38 C12 34.5 6 28.5 6 20 V7 Z"
            fill="url(#tq-shine-grad)"
          />
          {/* monogram T inside shield — TrendyQuote */}
          <path
            d="M11.5 13 H28.5 M20 13 V28"
            stroke="white"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
          {/* accent dot above T crossbar */}
          <circle cx="28.5" cy="13" r="2" fill="var(--brand-accent)" stroke="white" strokeWidth="0.8" />
        </svg>
      </span>
      <span className="flex items-baseline gap-[3px]">
        <span className="font-serif text-[22px] leading-none tracking-tight text-foreground">
          Trendy
        </span>
        <span className="font-serif text-[22px] leading-none tracking-tight text-brand">
          Quote
        </span>
      </span>
    </Link>
  );
}
