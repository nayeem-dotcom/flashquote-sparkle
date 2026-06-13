import { Heart, Stethoscope, Car, Shield, Home, Flower2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Category = {
  slug: string;
  name: string;
  short: string;
  tagline: string;
  blurb: string;
  cta: string;
  Icon: LucideIcon;
  benefits: { title: string; desc: string }[];
  faq: { q: string; a: string }[];
};

export const categories: Category[] = [
  {
    slug: "medicare",
    name: "Medicare",
    short: "Medicare",
    tagline: "Clarity for your retirement years.",
    blurb:
      "Navigate Parts A, B, C and D with confidence. Compare Medicare Advantage, Supplement and Part D plans side-by-side from the carriers seniors trust.",
    cta: "View Medicare Plans",
    Icon: Heart,
    benefits: [
      { title: "Advantage & Supplement", desc: "Side-by-side comparison of MA, Medigap and Part D plans." },
      { title: "$0-premium options", desc: "Many beneficiaries qualify for $0/mo Advantage plans." },
      { title: "Licensed senior advisors", desc: "Speak to a real human, never a robocaller." },
    ],
    faq: [
      { q: "When can I enroll?", a: "Initial Enrollment is the seven months around your 65th birthday. Annual Election runs Oct 15 – Dec 7." },
      { q: "Does it cover prescriptions?", a: "Most Advantage plans include Part D drug coverage; Supplement plans pair with a standalone Part D." },
    ],
  },
  {
    slug: "health",
    name: "Health Insurance",
    short: "Health",
    tagline: "Coverage that grows with you.",
    blurb:
      "Individual and family plans that protect both your physical and financial wellbeing — from preventative checkups to major medical events.",
    cta: "Explore Health Plans",
    Icon: Stethoscope,
    benefits: [
      { title: "ACA-qualified plans", desc: "Bronze, Silver, Gold and Platinum tiers with subsidy estimates." },
      { title: "Short-term coverage", desc: "Bridge gaps between employers, students or new graduates." },
      { title: "HSA-compatible", desc: "Pair high-deductible plans with tax-advantaged savings." },
    ],
    faq: [
      { q: "Can I get a subsidy?", a: "Most households earning up to 400% of the federal poverty level qualify for premium tax credits." },
      { q: "Are my doctors covered?", a: "We check provider networks during the quote process — just enter your preferred clinic." },
    ],
  },
  {
    slug: "auto",
    name: "Auto Insurance",
    short: "Auto",
    tagline: "Smart coverage for every mile.",
    blurb:
      "From daily commuters to weekend classics, find liability, collision and comprehensive coverage that fits your driving life — with bundled savings.",
    cta: "Compare Auto Rates",
    Icon: Car,
    benefits: [
      { title: "Multi-car & multi-policy", desc: "Bundle home + auto for an average 12% savings." },
      { title: "Accident forgiveness", desc: "Stay protected with carriers that don't punish a first claim." },
      { title: "Roadside & rental", desc: "24/7 roadside assistance and rental reimbursement options." },
    ],
    faq: [
      { q: "What coverage do I need?", a: "Every state requires liability; we'll walk you through the limits and add-ons that make sense for you." },
      { q: "Can I switch mid-policy?", a: "Yes — most carriers refund unused premium when you switch." },
    ],
  },
  {
    slug: "life",
    name: "Life Insurance",
    short: "Life",
    tagline: "Protect what matters most.",
    blurb:
      "Term, whole and universal life policies that put your family first. Get a personalized recommendation in minutes without a medical exam in most cases.",
    cta: "Secure Life Coverage",
    Icon: Shield,
    benefits: [
      { title: "No-exam options", desc: "Up to $1M in coverage without bloodwork for qualifying applicants." },
      { title: "Term & permanent", desc: "10, 20, 30-year term plus whole-life cash-value policies." },
      { title: "Locked-in rates", desc: "Lock today's rate — younger and healthier is always cheaper." },
    ],
    faq: [
      { q: "How much do I need?", a: "A common rule is 10-15× your annual income. We'll model it based on your goals." },
      { q: "How fast is approval?", a: "Many applicants are approved in 24-72 hours with simplified underwriting." },
    ],
  },
  {
    slug: "home",
    name: "Homeowners Insurance",
    short: "Home",
    tagline: "Protection for your greatest asset.",
    blurb:
      "Comprehensive dwelling, personal property and liability coverage — with options for floods, earthquakes and high-value items most policies miss.",
    cta: "Protect My Home",
    Icon: Home,
    benefits: [
      { title: "Replacement cost", desc: "Rebuild at today's prices, not depreciated value." },
      { title: "Liability protection", desc: "Up to $1M in personal liability for slips, bites and accidents." },
      { title: "Bundle discounts", desc: "Save when you combine homeowners with auto or umbrella." },
    ],
    faq: [
      { q: "Is flood included?", a: "Standard policies exclude flooding — we'll add NFIP or private flood coverage if you need it." },
      { q: "What about renters?", a: "We also write renters policies — same providers, lower premiums." },
    ],
  },
  {
    slug: "final-expense",
    name: "Final Expense",
    short: "Final Expense",
    tagline: "Compassionate planning for loved ones.",
    blurb:
      "Whole-life burial insurance that covers funeral costs, medical bills and lingering debts — without leaving the burden to your family.",
    cta: "Learn About Final Expense",
    Icon: Flower2,
    benefits: [
      { title: "Guaranteed acceptance", desc: "Many policies approve ages 50-85 with no health questions." },
      { title: "Locked premiums", desc: "Your monthly rate never increases, for life." },
      { title: "Fast payout", desc: "Beneficiaries typically receive funds within 24-48 hours." },
    ],
    faq: [
      { q: "How much should I get?", a: "Average funerals run $9,000-$15,000. Most clients choose $10,000-$25,000 in coverage." },
      { q: "Is a medical exam required?", a: "Most final-expense policies are simplified or guaranteed-issue — no exam." },
    ],
  },
];

export const categoryBySlug = (slug: string) =>
  categories.find((c) => c.slug === slug);
