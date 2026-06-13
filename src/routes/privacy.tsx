import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — TrendyQuote" },
      { name: "description", content: "How TrendyQuote handles your information. We do not collect personal data through our eligibility quizzes." },
      { property: "og:title", content: "Privacy Policy — TrendyQuote" },
      { property: "og:description", content: "Our privacy commitments." },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-brand">Legal</span>
        <h1 className="mt-3 font-serif text-5xl leading-tight">Privacy Policy</h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: June 13, 2026</p>

        <div className="prose prose-neutral mt-10 max-w-none space-y-6 text-foreground/85">
          <p>
            TrendyQuote ("we", "us") respects your privacy. This policy explains what information we do and do not collect when you visit our website or use our eligibility quizzes.
          </p>

          <h2 className="font-serif text-2xl">1. Information we do NOT collect</h2>
          <p>
            Our eligibility quizzes are <strong>fully anonymous</strong>. We do not ask for — and our quiz forms do not transmit — your name, email address, phone number, date of birth, social security number, address, or any other personally identifiable information.
          </p>

          <h2 className="font-serif text-2xl">2. Information we do collect</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong>Anonymous usage analytics:</strong> Pages visited, browser type, country-level location, and time spent on the site. This data is aggregated and cannot be used to identify you.</li>
            <li><strong>Voluntary contact:</strong> If you choose to call us or schedule a callback, the licensed advisor you speak with will collect only the information legally required to provide a real insurance quote, governed by the carrier's own privacy practices.</li>
          </ul>

          <h2 className="font-serif text-2xl">3. Cookies</h2>
          <p>
            We use a minimal set of cookies for site functionality and aggregated analytics. We do not use third-party advertising cookies on this site.
          </p>

          <h2 className="font-serif text-2xl">4. How quiz results work</h2>
          <p>
            Your quiz answers are processed entirely in your browser to display a qualified / not-qualified result. They are not stored on our servers and are not shared with any third party.
          </p>

          <h2 className="font-serif text-2xl">5. Your rights</h2>
          <p>
            Because we do not collect personally identifiable information through the website, there is no personal record for us to access, correct, or delete. If you have spoken with one of our advisors, you may request access to or deletion of that record by emailing <a href="mailto:privacy@trendyquote.com" className="text-brand underline">privacy@trendyquote.com</a>.
          </p>

          <h2 className="font-serif text-2xl">6. Changes</h2>
          <p>
            We may update this policy from time to time. Material changes will be reflected by an updated "Last updated" date at the top of this page.
          </p>

          <h2 className="font-serif text-2xl">7. Contact</h2>
          <p>
            Questions? Reach us at <a href="mailto:privacy@trendyquote.com" className="text-brand underline">privacy@trendyquote.com</a> or visit our <Link to="/contact" className="text-brand underline">Contact page</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}
