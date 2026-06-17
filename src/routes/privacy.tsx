import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — TrendyQuote" },
      { name: "description", content: "How TrendyQuote collects, uses, and protects your information." },
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
        <p className="mt-3 text-sm text-muted-foreground">Last updated: June 17, 2026</p>

        <div className="prose prose-neutral mt-10 max-w-none space-y-6 text-foreground/85">
          <p>
            This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit or interact with our website (the "Site") and the home services referral platform it operates. We are committed to protecting your privacy and being transparent about our data practices. By using the Site, you agree to the practices described in this Privacy Policy. If you do not agree with these terms, please discontinue use of the Site.
          </p>

          <h2 className="font-serif text-2xl">Information We Collect</h2>
          <p>We collect information in connection with your use of the Site in order to provide and improve our home services referral platform. The categories of information we may collect include the following.</p>
          <p><strong>Information you provide directly.</strong> When you request a quote, ask to be connected with a service professional, or otherwise interact with the Site, we may collect identifying details such as your name, mailing or service address, the type of service you are interested in, and any details you choose to share about your project or home repair needs.</p>
          <p><strong>Information collected automatically.</strong> When you browse the Site, we automatically collect certain technical information through cookies, log files, and similar technologies. This may include your IP address, browser type and version, device identifiers, operating system, referring and exit pages, the dates and times of your visits, and general click and navigation behavior on the Site.</p>
          <p><strong>Information from third parties.</strong> We may receive information about you from our network of home service professionals, marketing partners, or analytics providers in connection with the operation of the Site and the fulfillment of service requests.</p>

          <h2 className="font-serif text-2xl">How We Use Your Information</h2>
          <p>We use the information we collect for purposes that include operating, maintaining, and improving the Site; matching your service request with an appropriate home service professional in our network; communicating with you about your request, including follow-up regarding a quote or scheduled service; analyzing usage trends and Site performance; preventing fraudulent or unauthorized activity; complying with applicable law; and, where permitted, sending you promotional or informational content about services that may be of interest to you.</p>
          <p>We do not use the information we collect to make automated decisions that produce legal or similarly significant effects concerning you.</p>

          <h2 className="font-serif text-2xl">Cookies and Tracking Technologies</h2>
          <p>The Site uses cookies, web beacons, pixels, and similar tracking technologies to recognize your browser or device, remember your preferences, analyze traffic patterns, and measure the effectiveness of our content and advertising. Cookies may be categorized as strictly necessary, which are required for the Site to function; performance and analytics, which help us understand how visitors use the Site; and advertising, which are used to deliver more relevant content and measure campaign performance.</p>
          <p>Most web browsers allow you to control cookies through their settings, including blocking or deleting them. Please note that disabling certain cookies may affect the functionality of the Site. Where required by applicable law, we will obtain your consent before placing non-essential cookies on your device.</p>

          <h2 className="font-serif text-2xl">How We Share Your Information</h2>
          <p>We share information about you only as necessary to operate the Site and fulfill the purposes described in this Privacy Policy. This includes sharing your service request details with the home service professional or professionals in our network best suited to respond to your inquiry, so that they may contact you regarding your project.</p>
          <p>We may also share information with service providers who perform functions on our behalf, such as website hosting, data analytics, customer communications, and marketing support; these providers are authorized to use your information only as needed to perform services for us.</p>
          <p>We may disclose information where required to comply with a legal obligation, court order, or governmental request; to protect the rights, property, or safety of the Company, our users, or others; or in connection with a merger, acquisition, financing, or sale of business assets, in which case information may be transferred as part of that transaction.</p>
          <p>We do not sell your personal information for monetary consideration. Depending on how certain privacy laws define the term "sale" or "sharing," the disclosure of information to our network of home service professionals so that they may provide you with a quote may be considered a sale or sharing of personal information under those laws. Section 6 below describes how you can exercise control over this practice.</p>

          <h2 className="font-serif text-2xl">Data Retention</h2>
          <p>We retain personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, including to respond to your service request, maintain business records, comply with legal and regulatory obligations, resolve disputes, and enforce our agreements. When information is no longer needed for these purposes, we take reasonable steps to securely delete, destroy, or anonymize it.</p>

          <h2 className="font-serif text-2xl">Your California Privacy Rights (CCPA/CPRA)</h2>
          <p>If you are a California resident, the California Consumer Privacy Act, as amended by the California Privacy Rights Act (collectively, the "CCPA"), provides you with certain rights regarding your personal information. These rights include the right to know what categories of personal information we have collected, used, disclosed, and sold or shared about you over the preceding twelve months; the right to request deletion of personal information we have collected from you, subject to certain exceptions; the right to request correction of inaccurate personal information; the right to opt out of the sale or sharing of your personal information; the right to limit the use and disclosure of sensitive personal information; and the right to not be discriminated against for exercising any of these rights.</p>
          <p>In the preceding twelve months, we may have disclosed the following categories of personal information for a business purpose or in a manner that may be considered a sale or sharing under the CCPA: identifiers such as name and address, characteristics of protected classifications where voluntarily provided, commercial information related to your service request, and internet or other electronic network activity information such as browsing behavior on the Site. We disclose these categories to our network of home service professionals and to service providers that support the operation of the Site, as described in Section 4.</p>
          <p>To exercise your right to opt out of the sale or sharing of your personal information, or to submit any other rights request under the CCPA, you may use the request mechanism described in Section 14 of this Privacy Policy. We will verify your identity using information you have already provided to us before processing a deletion, correction, or know request, consistent with CCPA requirements. We will not discriminate against you for exercising any of your rights under the CCPA, including by denying services, charging different prices, or providing a different level of quality, except as expressly permitted by law.</p>
          <p>An authorized agent may submit a request on your behalf where permitted by law, provided we are able to verify the agent's authority to act on your behalf and your identity.</p>

          <h2 className="font-serif text-2xl">Privacy Rights for Other U.S. Residents</h2>
          <p>Residents of certain other states have similar rights to access, correct, delete, and obtain a portable copy of their personal information, as well as the right to opt out of targeted advertising, the sale of personal information, and certain forms of profiling, to the extent those rights are provided under applicable state law. Where such laws apply to you, you may exercise these rights using the contact method described in Section 14, and we will respond consistent with the requirements of the applicable law, including any required verification and response timelines.</p>

          <h2 className="font-serif text-2xl">Data Security</h2>
          <p>We maintain administrative, technical, and physical safeguards designed to protect personal information from unauthorized access, disclosure, alteration, or destruction. These measures include access controls, encryption of data in transit where applicable, and routine review of our data handling practices. While we work to protect your information, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.</p>

          <h2 className="font-serif text-2xl">Children's Privacy</h2>
          <p>The Site is intended for use by individuals who are at least eighteen years old and is not directed to children. We do not knowingly collect personal information from children under the age of thirteen. If we become aware that we have inadvertently collected personal information from a child under thirteen, we will take steps to delete such information as soon as reasonably possible.</p>

          <h2 className="font-serif text-2xl">Third-Party Links</h2>
          <p>The Site may contain links to third-party websites or services that are not owned or controlled by us, including the websites of home service professionals in our network. This Privacy Policy does not apply to those third-party sites, and we encourage you to review the privacy policies of any third-party site you visit.</p>

          <h2 className="font-serif text-2xl">Do Not Track Signals</h2>
          <p>Some browsers offer a "Do Not Track" feature that signals to websites that you do not want your online activity tracked. Because there is not yet a common industry standard for how to respond to such signals, the Site does not currently respond to Do Not Track browser signals in a uniform manner. Where required by applicable law, we will honor recognized opt-out preference signals, such as the Global Privacy Control, with respect to the sale or sharing of personal information.</p>

          <h2 className="font-serif text-2xl">Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes, we will revise the effective date at the top of this page and, where appropriate, provide additional notice. We encourage you to review this Privacy Policy periodically to stay informed about how we handle your information.</p>

          <h2 className="font-serif text-2xl">How to Submit a Privacy Request or Contact Us</h2>
          <p>If you have questions about this Privacy Policy or wish to exercise any of the rights described above, please use the contact form available on the Site's Contact page. Please provide sufficient detail in your request so that we may verify your identity and respond appropriately. We will respond to verifiable requests within the timeframe required by applicable law.</p>
        </div>
      </div>
    </section>
  );
}
