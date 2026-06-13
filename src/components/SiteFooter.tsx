import { Link } from "@tanstack/react-router";
import { categories } from "@/lib/categories";
import { Logo } from "@/components/Logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Clarity and confidence in insurance comparison. Independently licensed in all 50 states. We never ask for personal information through our website.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/70">
              <span className="rounded-full border border-border px-3 py-1">BBB A+</span>
              <span className="rounded-full border border-border px-3 py-1">256-bit SSL</span>
              <span className="rounded-full border border-border px-3 py-1">HIPAA</span>
            </div>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Coverage</div>
            <ul className="mt-4 space-y-2.5">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link to="/$category" params={{ category: c.slug }} className="text-sm text-foreground/80 hover:text-brand">
                    {c.short}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Company</div>
            <ul className="mt-4 space-y-2.5">
              <li><Link to="/about" className="text-sm text-foreground/80 hover:text-brand">About</Link></li>
              <li><Link to="/contact" className="text-sm text-foreground/80 hover:text-brand">Contact</Link></li>
              <li><Link to="/quote" className="text-sm text-foreground/80 hover:text-brand">Start Quiz</Link></li>
              <li><Link to="/privacy" className="text-sm text-foreground/80 hover:text-brand">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-foreground/80 hover:text-brand">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Get in touch</div>
            <ul className="mt-4 space-y-2.5 text-sm text-foreground/80">
              <li><a href="tel:+18005557868" className="hover:text-brand">1-800-555-QUOTE</a></li>
              <li><a href="mailto:hello@trendyquote.com" className="hover:text-brand">hello@trendyquote.com</a></li>
              <li>Mon–Fri · 8am–8pm ET</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} TrendyQuote Insurance Services. All rights reserved.</p>
          <p>For informational use only. Not insurance advice.</p>
        </div>
      </div>
    </footer>
  );
}
