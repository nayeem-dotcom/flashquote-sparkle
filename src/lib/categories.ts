import { Heart, Stethoscope, Car, Accessibility, Home, Flower2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import medicareImg from "@/assets/cat-medicare.jpg";
import healthImg from "@/assets/cat-health.jpg";
import autoImg from "@/assets/cat-auto.jpg";
import ssdiImg from "@/assets/cat-ssdi.jpg";
import homeImg from "@/assets/cat-home.jpg";
import finalExpenseImg from "@/assets/cat-final-expense.jpg";

export type QuizOption = { label: string; qualifies: boolean };
export type QuizQuestion =
  | { id: string; kind: "choice"; text: string; options: QuizOption[] }
  | { id: string; kind: "zip"; text: string };

export type Category = {
  slug: string;
  name: string;
  short: string;
  tagline: string;
  blurb: string;
  cta: string;
  image: string;
  Icon: LucideIcon;
  programName: string;
  advocateLabel: string; // e.g. "licensed agent" or "SSDI advocate"
  benefits: { title: string; desc: string }[];
  faq: { q: string; a: string }[];
  quiz: QuizQuestion[];
};

const yes = (q = true) => ({ label: "Yes", qualifies: q });
const no = (q = false) => ({ label: "No", qualifies: q });

export const categories: Category[] = [
  {
    slug: "medicare",
    name: "Medicare",
    short: "Medicare",
    tagline: "Clarity for your retirement years.",
    blurb:
      "Navigate Parts A, B, C and D with confidence. Compare Medicare Advantage, Supplement and Part D plans side-by-side from the carriers seniors trust.",
    cta: "Check Medicare Eligibility",
    image: medicareImg,
    Icon: Heart,
    programName: "Medicare Advantage / Supplement program",
    advocateLabel: "licensed agent",
    benefits: [
      { title: "Advantage & Supplement", desc: "Side-by-side comparison of MA, Medigap and Part D plans." },
      { title: "$0-premium options", desc: "Many beneficiaries qualify for $0/mo Advantage plans." },
      { title: "Real human advisors", desc: "Speak to a real person, never a robocaller." },
    ],
    faq: [
      { q: "When can I enroll?", a: "Initial Enrollment is the seven months around your 65th birthday. Annual Election runs Oct 15 – Dec 7." },
      { q: "Does it cover prescriptions?", a: "Most Advantage plans include Part D drug coverage; Supplement plans pair with a standalone Part D." },
    ],
    quiz: [
      {
        id: "onMedicare",
        kind: "choice",
        text: "Are you on Medicare?",
        options: [yes(true), no(false)],
      },
      {
        id: "over65",
        kind: "choice",
        text: "Are you over 65 years old?",
        options: [yes(true), no(false)],
      },
      {
        id: "checked",
        kind: "choice",
        text: "Have you checked your Medicare benefits this year?",
        options: [
          { label: "No", qualifies: true },
          { label: "Yes", qualifies: true },
        ],
      },
    ],
  },
  {
    slug: "health",
    name: "Health Insurance",
    short: "ACA Health",
    tagline: "Coverage that grows with you.",
    blurb:
      "Individual and family ACA Marketplace plans that protect both your physical and financial wellbeing — from preventative checkups to major medical events.",
    cta: "Check ACA Eligibility",
    image: healthImg,
    Icon: Stethoscope,
    programName: "Affordable Care Act (Obamacare) Subsidy program",
    advocateLabel: "licensed agent",
    benefits: [
      { title: "ACA-qualified plans", desc: "Bronze, Silver, Gold and Platinum tiers with subsidy estimates." },
      { title: "Premium tax credits", desc: "Most households earning under $50k qualify for major savings." },
      { title: "HSA-compatible", desc: "Pair high-deductible plans with tax-advantaged savings." },
    ],
    faq: [
      { q: "Can I get a subsidy?", a: "Most households earning up to 400% of the federal poverty level qualify for premium tax credits." },
      { q: "Are my doctors covered?", a: "We check provider networks during the quote process — just pick your preferred clinic." },
    ],
    quiz: [
      { id: "zip", kind: "zip", text: "Enter your ZIP code" },
      {
        id: "age",
        kind: "choice",
        text: "What is your age?",
        options: [
          { label: "Under 65", qualifies: true },
          { label: "65 or older", qualifies: false },
        ],
      },
      {
        id: "income",
        kind: "choice",
        text: "What is your annual household income?",
        options: [
          { label: "No income", qualifies: false },
          { label: "Under $50,000", qualifies: true },
          { label: "Over $50,000", qualifies: false },
        ],
      },
    ],
  },
  {
    slug: "auto",
    name: "Auto Insurance",
    short: "Auto",
    tagline: "Smart coverage for every mile.",
    blurb:
      "From daily commuters to weekend classics, find liability, collision and comprehensive coverage that fits your driving life — with bundled savings.",
    cta: "Check Auto Eligibility",
    image: autoImg,
    Icon: Car,
    programName: "Auto Insurance Rate Reduction program",
    advocateLabel: "licensed agent",
    benefits: [
      { title: "Multi-car & multi-policy", desc: "Bundle home + auto for an average 12% savings." },
      { title: "Accident forgiveness", desc: "Stay protected with carriers that don't punish a first claim." },
      { title: "Roadside & rental", desc: "24/7 roadside assistance and rental reimbursement options." },
    ],
    faq: [
      { q: "What coverage do I need?", a: "Every state requires liability; we'll walk you through the limits and add-ons that make sense for you." },
      { q: "Can I switch mid-policy?", a: "Yes — most carriers refund unused premium when you switch." },
    ],
    quiz: [
      {
        id: "current",
        kind: "choice",
        text: "Do you currently have auto insurance?",
        options: [yes(true), no(false)],
      },
      {
        id: "compared",
        kind: "choice",
        text: "When was the last time you compared rates?",
        options: [
          { label: "Within the last 6 months", qualifies: true },
          { label: "6–12 months ago", qualifies: true },
          { label: "More than 1 year ago", qualifies: true },
          { label: "I can't remember", qualifies: true },
        ],
      },
      {
        id: "vehicles",
        kind: "choice",
        text: "How many vehicles are on your policy?",
        options: [
          { label: "1", qualifies: true },
          { label: "2", qualifies: true },
          { label: "3+", qualifies: true },
        ],
      },
      {
        id: "lower",
        kind: "choice",
        text: "Would you like to see if you can lower your monthly premium?",
        options: [yes(true), no(false)],
      },
    ],
  },
  {
    slug: "ssdi",
    name: "SSDI Benefits",
    short: "SSDI",
    tagline: "Disability benefits, guided.",
    blurb:
      "Social Security Disability Insurance can replace a portion of lost income when a medical condition prevents you from working. Our advocate network helps you understand if you may qualify — before you file.",
    cta: "Check SSDI Eligibility",
    image: ssdiImg,
    Icon: Accessibility,
    programName: "SSDI Disability Benefits Evaluation",
    advocateLabel: "SSDI advocate",
    benefits: [
      { title: "No-cost evaluation", desc: "Independent SSDI advocates review your case at no upfront cost." },
      { title: "Faster, cleaner filings", desc: "Most self-filed SSDI claims are denied — advocate-led filings convert at far higher rates." },
      { title: "Back-pay potential", desc: "Approved applicants often receive back-pay covering the months they waited." },
    ],
    faq: [
      { q: "Who qualifies for SSDI?", a: "Adults under retirement age who have worked recently and whose medical condition prevents substantial work for 12+ months." },
      { q: "Is this a government program?", a: "SSDI is a federal program. We connect you with private advocates and attorneys who help with the application." },
    ],
    quiz: [
      { id: "zip", kind: "zip", text: "Enter your ZIP code" },
      {
        id: "age",
        kind: "choice",
        text: "What is your age?",
        options: [
          { label: "Under 18", qualifies: false },
          { label: "18 – 49", qualifies: true },
          { label: "50 – 64", qualifies: true },
          { label: "65 or older", qualifies: false },
        ],
      },
      {
        id: "working",
        kind: "choice",
        text: "Has a medical condition kept you from working for 12+ months (or is it expected to)?",
        options: [yes(true), no(false)],
      },
      {
        id: "currently",
        kind: "choice",
        text: "Are you currently receiving SSDI benefits?",
        options: [
          { label: "No", qualifies: true },
          { label: "Yes", qualifies: false },
        ],
      },
      {
        id: "advocate",
        kind: "choice",
        text: "Would you like to speak with an SSDI advocate about your case?",
        options: [yes(true), no(false)],
      },
    ],
  },
  {
    slug: "home",
    name: "Homeowners Insurance",
    short: "Home",
    tagline: "Protection for your greatest asset.",
    blurb:
      "Comprehensive dwelling, personal property and liability coverage — with options for floods, earthquakes and high-value items most policies miss.",
    cta: "Check Home Eligibility",
    image: homeImg,
    Icon: Home,
    programName: "Homeowners Insurance Savings program",
    advocateLabel: "licensed agent",
    benefits: [
      { title: "Replacement cost", desc: "Rebuild at today's prices, not depreciated value." },
      { title: "Liability protection", desc: "Up to $1M in personal liability for slips, bites and accidents." },
      { title: "Bundle discounts", desc: "Save when you combine homeowners with auto or umbrella." },
    ],
    faq: [
      { q: "Is flood included?", a: "Standard policies exclude flooding — we'll add NFIP or private flood coverage if you need it." },
      { q: "What about renters?", a: "We also write renters policies — same providers, lower premiums." },
    ],
    quiz: [
      {
        id: "current",
        kind: "choice",
        text: "Do you currently have homeowners insurance?",
        options: [yes(true), no(false)],
      },
      {
        id: "increased",
        kind: "choice",
        text: "Has your premium increased in the past 12 months?",
        options: [
          { label: "Yes", qualifies: true },
          { label: "No", qualifies: true },
          { label: "Not sure", qualifies: true },
        ],
      },
      {
        id: "switch",
        kind: "choice",
        text: "Would you switch providers if you could save money?",
        options: [yes(true), no(false)],
      },
    ],
  },
  {
    slug: "final-expense",
    name: "Final Expense",
    short: "Final Expense",
    tagline: "Compassionate planning for loved ones.",
    blurb:
      "Whole-life burial insurance that covers funeral costs, medical bills and lingering debts — without leaving the burden to your family.",
    cta: "Check Final Expense Eligibility",
    image: finalExpenseImg,
    Icon: Flower2,
    programName: "Affordable Final Expense & Burial program",
    advocateLabel: "licensed agent",
    benefits: [
      { title: "Guaranteed acceptance", desc: "Many policies approve ages 50-85 with no health questions." },
      { title: "Locked premiums", desc: "Your monthly rate never increases, for life." },
      { title: "Fast payout", desc: "Beneficiaries typically receive funds within 24-48 hours." },
    ],
    faq: [
      { q: "How much should I get?", a: "Average funerals run $9,000-$15,000. Most clients choose $10,000-$25,000 in coverage." },
      { q: "Is a medical exam required?", a: "Most final-expense policies are simplified or guaranteed-issue — no exam." },
    ],
    quiz: [
      {
        id: "age",
        kind: "choice",
        text: "What is your age?",
        options: [
          { label: "50 – 59", qualifies: true },
          { label: "60 – 69", qualifies: true },
          { label: "70 – 79", qualifies: true },
          { label: "80 – 85", qualifies: true },
        ],
      },
      {
        id: "existing",
        kind: "choice",
        text: "Do you currently have any life insurance or final expense coverage?",
        options: [
          { label: "Yes", qualifies: true },
          { label: "No", qualifies: true },
        ],
      },
      {
        id: "income",
        kind: "choice",
        text: "What is your approximate monthly income?",
        options: [
          { label: "Under $1,500", qualifies: false },
          { label: "$1,500 – $2,500", qualifies: true },
          { label: "$2,500 – $4,000", qualifies: true },
          { label: "$4,000+", qualifies: true },
        ],
      },
      {
        id: "see",
        kind: "choice",
        text: "Would you like to see affordable coverage options for final expenses?",
        options: [yes(true), no(false)],
      },
    ],
  },
];

export const categoryBySlug = (slug: string) =>
  categories.find((c) => c.slug === slug);

export const PHONE_DISPLAY = "(866) 498-7441";
export const PHONE_TEL = "+18664987441";

export const isValidZip = (zip: string) =>
  /^\d{5}$/.test(zip.trim()) && zip.trim() !== "00000";
