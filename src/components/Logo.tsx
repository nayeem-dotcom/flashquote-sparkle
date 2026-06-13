import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`group flex shrink-0 items-center gap-3 ${className}`}>
      <span className="relative grid size-11 place-items-center">
        {/* glow */}
        <span
          aria-hidden
          className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-brand-accent/40 to-brand/40 blur-xl opacity-70 transition-opacity group-hover:opacity-100"
        />
        <svg
          viewBox="0 0 48 48"
          className="size-11 drop-shadow-md transition-transform duration-500 group-hover:rotate-[-6deg] group-hover:scale-105"
          aria-hidden
        >
          <defs>
            <linearGradient id="tq-logo-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--brand)" />
              <stop offset="60%" stopColor="var(--brand)" />
              <stop offset="100%" stopColor="var(--brand-accent)" />
            </linearGradient>
            <linearGradient id="tq-logo-shine" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="white" stopOpacity="0.35" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* squircle shield */}
          <path
            d="M24 3 C34 3 42 7 42 14 V26 C42 35 34 42 24 45 C14 42 6 35 6 26 V14 C6 7 14 3 24 3 Z"
            fill="url(#tq-logo-grad)"
          />
          {/* gloss */}
          <path
            d="M24 3 C30 3 36 4.5 39 7 L24 24 L9 7 C12 4.5 18 3 24 3 Z"
            fill="url(#tq-logo-shine)"
          />
          {/* upward growth lines (quote / growth) */}
          <path
            d="M13 30 L20 23 L25 28 L35 18"
            stroke="white"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="35" cy="18" r="2.3" fill="var(--brand-accent)" stroke="white" strokeWidth="1.4" />
          {/* sparkle accent */}
          <circle cx="38" cy="9" r="1.4" fill="white" opacity="0.95" />
          <circle cx="11" cy="38" r="1" fill="white" opacity="0.7" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-xl tracking-tight">
          Trendy<span className="text-brand">Quote</span>
        </span>
        <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          Insurance · Simplified
        </span>
      </span>
    </Link>
  );
}
