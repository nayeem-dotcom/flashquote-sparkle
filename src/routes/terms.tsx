import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — TrendyQuote" },
      { name: "description", content: "The terms of service governing your use of the TrendyQuote website and referral platform." },
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
        <h1 className="mt-3 font-serif text-5xl leading-tight">Terms &amp; Conditions</h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: June 17, 2026</p>

        <div className="prose prose-neutral mt-10 max-w-none space-y-6 text-foreground/85">
          <p>These Terms and Conditions (the "Terms") govern your access to and use of this website (the "Site") and the home services referral platform it operates. By accessing or using the Site, requesting a quote, or otherwise engaging with our services, you agree to be bound by these Terms. If you do not agree to these Terms, you should not use the Site.</p>

          <h2 className="font-serif text-2xl">Description of Service</h2>
          <p>The Site operates as a referral and matching platform that connects homeowners and other users seeking home repair, remodeling, or maintenance services with independent, third-party home service professionals who may be able to perform the requested work. We are not a contractor, repair company, or home service provider, and we do not ourselves perform plumbing, HVAC, roofing, remodeling, or any other home service work. Our role is limited to facilitating an introduction between a user and a service professional in our network.</p>

          <h2 className="font-serif text-2xl">Eligibility</h2>
          <p>You must be at least eighteen years of age and have the legal capacity to enter into a binding contract to use the Site. By using the Site, you represent and warrant that you meet these requirements and that the information you provide to us is accurate and current.</p>

          <h2 className="font-serif text-2xl">Independent Contractors; No Endorsement</h2>
          <p>Home service professionals connected to users through the Site are independent businesses and are not employees, agents, partners, or joint venturers of ours. We do not control, supervise, direct, or guarantee the work, conduct, licensing status, insurance coverage, pricing, or quality of any service professional. Any agreement for services entered into between you and a service professional is solely between you and that service professional, and we are not a party to that agreement.</p>
          <p>While we make reasonable efforts to work with service professionals who represent that they hold applicable licenses, bonding, and insurance, we do not independently verify every credential on an ongoing basis and make no guarantee, warranty, or representation regarding the qualifications, workmanship, reliability, or conduct of any service professional. You are responsible for conducting your own due diligence, including verifying licensing, insurance, references, and pricing, before engaging any service professional.</p>

          <h2 className="font-serif text-2xl">No Guarantee of Service</h2>
          <p>We do not guarantee that a service professional will be available in your area, that a quote will be provided within any particular timeframe, or that any particular outcome, price, or result will be achieved. Availability, pricing, and scheduling are determined solely by the independent service professionals in our network.</p>

          <h2 className="font-serif text-2xl">Communications Consent</h2>
          <p>By submitting a request for a quote or otherwise providing your contact information through the Site, you consent to be contacted regarding your request by us and by the service professional or professionals to whom your request is referred, using the contact details you provide. You may withdraw this consent at any time by following the unsubscribe or opt-out instructions provided in such communications, or by submitting a request through the Site's Contact page.</p>

          <h2 className="font-serif text-2xl">Acceptable Use</h2>
          <p>You agree to use the Site only for lawful purposes and in accordance with these Terms. You agree not to submit false, misleading, or fraudulent information; not to use the Site to harass, abuse, or harm another person, including any service professional; not to attempt to gain unauthorized access to the Site, its systems, or related networks; not to interfere with or disrupt the operation of the Site, including through the introduction of viruses or other harmful code; and not to use any automated means, such as bots or scrapers, to access or collect data from the Site without our prior written consent.</p>

          <h2 className="font-serif text-2xl">Intellectual Property</h2>
          <p>All content on the Site, including text, graphics, logos, images, and software, is owned by us or our licensors and is protected by applicable intellectual property laws. You may view and use the Site for your personal, non-commercial use in connection with seeking home service referrals, but you may not reproduce, distribute, modify, create derivative works from, publicly display, or otherwise exploit any content from the Site without our prior written permission.</p>

          <h2 className="font-serif text-2xl">Third-Party Links and Content</h2>
          <p>The Site may contain links to third-party websites, including the websites of service professionals, which are not owned or controlled by us. We are not responsible for the content, accuracy, policies, or practices of any third-party website, and the inclusion of any link does not imply our endorsement of the linked site.</p>

          <h2 className="font-serif text-2xl">Disclaimer of Warranties</h2>
          <p>The Site and all related services are provided on an "as is" and "as available" basis, without warranties of any kind, whether express, implied, or statutory, including, without limitation, implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement. We do not warrant that the Site will be uninterrupted, timely, secure, or error-free, or that any defects will be corrected. We make no warranty regarding the quality, safety, legality, or workmanship of any services performed by a service professional referred through the Site.</p>

          <h2 className="font-serif text-2xl">Limitation of Liability</h2>
          <p>To the fullest extent permitted by applicable law, we shall not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, including loss of profits, data, or goodwill, arising out of or in connection with your use of the Site, your interactions with any service professional, or these Terms, regardless of the legal theory under which such damages are claimed, even if we have been advised of the possibility of such damages. To the extent we are found liable for any claim arising out of or relating to your use of the Site, our aggregate liability shall not exceed the amount, if any, you paid to us directly for use of the Site in the twelve months preceding the claim.</p>
          <p>Some jurisdictions do not allow the exclusion or limitation of certain damages, so some of the above limitations may not apply to you. In such jurisdictions, our liability will be limited to the greatest extent permitted by applicable law.</p>

          <h2 className="font-serif text-2xl">Indemnification</h2>
          <p>You agree to indemnify, defend, and hold harmless the Company and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with your access to or use of the Site, your violation of these Terms, or your interactions with any service professional referred through the Site.</p>

          <h2 className="font-serif text-2xl">Dispute Resolution and Governing Law</h2>
          <p>These Terms and any dispute arising out of or relating to them or the Site shall be governed by and construed in accordance with the laws of the state in which the Company is organized, without regard to its conflict of laws principles. You agree that any dispute that cannot be resolved informally shall be subject to the exclusive jurisdiction of the state or federal courts located in that state, and you consent to the personal jurisdiction of such courts.</p>

          <h2 className="font-serif text-2xl">Termination</h2>
          <p>We reserve the right, in our sole discretion, to suspend or terminate your access to the Site at any time, without notice, for conduct that we believe violates these Terms, is harmful to other users, service professionals, or us, or for any other reason. Upon termination, the provisions of these Terms that by their nature should survive, including provisions regarding intellectual property, disclaimers, limitation of liability, and indemnification, shall continue to apply.</p>

          <h2 className="font-serif text-2xl">Changes to These Terms</h2>
          <p>We may revise these Terms from time to time. When we do, we will update the effective date at the top of this page. Your continued use of the Site following the posting of revised Terms constitutes your acceptance of those changes. We encourage you to review these Terms periodically.</p>

          <h2 className="font-serif text-2xl">Severability</h2>
          <p>If any provision of these Terms is found to be unenforceable or invalid under applicable law, that provision will be limited or eliminated to the minimum extent necessary so that the remaining provisions of these Terms will otherwise remain in full force and effect.</p>

          <h2 className="font-serif text-2xl">Entire Agreement</h2>
          <p>These Terms, together with our Privacy Policy, constitute the entire agreement between you and us regarding your use of the Site and supersede any prior agreements or understandings, whether written or oral, regarding the same subject matter.</p>

          <h2 className="font-serif text-2xl">Contact</h2>
          <p>If you have questions about these Terms, please reach out through the contact form available on the Site's Contact page.</p>
        </div>
      </div>
    </section>
  );
}
