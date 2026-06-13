import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-2.5 shrink-0 group ${className}`}>
      <span className="relative grid size-10 place-items-center">
        <svg
          viewBox="0 0 40 40"
          className="size-10 transition-transform group-hover:scale-105"
          aria-hidden
        >
          <defs>
            <linearGradient id="tq-logo-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="hsl(var(--brand))" />
              <stop offset="100%" stopColor="hsl(var(--brand-accent))" />
            </linearGradient>
          </defs>
          {/* shield */}
          <path
            d="M20 2 L34 7 V20 C34 28 28 34 20 38 C12 34 6 28 6 20 V7 Z"
            fill="url(#tq-logo-grad)"
          />
          {/* leaf / checkmark hybrid */}
          <path
            d="M13 21 L18 26 L28 14"
            stroke="white"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="30" cy="11" r="2" fill="hsl(var(--brand-accent))" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-xl tracking-tight">TrendyQuote</span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Insurance · Simplified
        </span>
      </span>
    </Link>
  );
}
