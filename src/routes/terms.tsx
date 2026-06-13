import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — TrendyQuote" },
      { name: "description", content: "The terms of service governing your use of the TrendyQuote website and eligibility quizzes." },
      { property: "og:title", content: "Terms & Conditions — TrendyQuote" },
      { property: "og:description", content: "Terms of use for TrendyQuote." },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-brand">Legal</span>
        <h1 className="mt-3 font-serif text-5xl leading-tight">Terms & Conditions</h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: June 13, 2026</p>

        <div className="prose prose-neutral mt-10 max-w-none space-y-6 text-foreground/85">
          <p>
            By accessing TrendyQuote you agree to the following terms. If you do not agree, please discontinue use of the site.
          </p>

          <h2 className="font-serif text-2xl">1. Informational use only</h2>
          <p>
            All content on TrendyQuote is provided for general informational purposes. It is not a substitute for advice from a licensed insurance agent. Eligibility quiz results are indicative only and do not constitute an offer of insurance.
          </p>

          <h2 className="font-serif text-2xl">2. No personal information</h2>
          <p>
            Our quizzes do not collect personal information. You should never submit personal information to TrendyQuote through forms on this website. See our <Link to="/privacy" className="text-brand underline">Privacy Policy</Link> for details.
          </p>

          <h2 className="font-serif text-2xl">3. Licensed agents</h2>
          <p>
            TrendyQuote works with licensed insurance professionals in all 50 U.S. states. Any actual policy quote, application or enrollment is handled by licensed agents and the underlying carrier, subject to the carrier's own terms.
          </p>

          <h2 className="font-serif text-2xl">4. Acceptable use</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Do not attempt to disrupt, reverse engineer, or scrape the website.</li>
            <li>Do not misrepresent yourself when speaking with our advisors.</li>
            <li>Do not use the site for any unlawful purpose.</li>
          </ul>

          <h2 className="font-serif text-2xl">5. Intellectual property</h2>
          <p>
            All branding, copy, design and imagery on this site is the property of TrendyQuote or its licensors and may not be reproduced without written permission.
          </p>

          <h2 className="font-serif text-2xl">6. Limitation of liability</h2>
          <p>
            TrendyQuote is provided "as is" without warranties of any kind. To the maximum extent permitted by law, we are not liable for any indirect or consequential damages arising from your use of the website.
          </p>

          <h2 className="font-serif text-2xl">7. Changes to these terms</h2>
          <p>
            We may revise these terms from time to time. Continued use of the site after changes are posted constitutes acceptance of the revised terms.
          </p>

          <h2 className="font-serif text-2xl">8. Contact</h2>
          <p>
            Questions about these terms? Email <a href="mailto:legal@trendyquote.com" className="text-brand underline">legal@trendyquote.com</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
