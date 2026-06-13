import { Heart, Stethoscope, Car, Shield, Home, Flower2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import medicareImg from "@/assets/cat-medicare.jpg";
import healthImg from "@/assets/cat-health.jpg";
import autoImg from "@/assets/cat-auto.jpg";
import lifeImg from "@/assets/cat-life.jpg";
import homeImg from "@/assets/cat-home.jpg";
import finalExpenseImg from "@/assets/cat-final-expense.jpg";

export type QuizOption = { label: string; qualifies: boolean };
export type QuizQuestion = { id: string; text: string; options: QuizOption[] };

export type Category = {
  slug: string;
  name: string;
  short: string;
  tagline: string;
  blurb: string;
  cta: string;
  image: string;
  Icon: LucideIcon;
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
    benefits: [
      { title: "Advantage & Supplement", desc: "Side-by-side comparison of MA, Medigap and Part D plans." },
      { title: "$0-premium options", desc: "Many beneficiaries qualify for $0/mo Advantage plans." },
      { title: "Licensed senior advisors", desc: "Speak to a real human, never a robocaller." },
    ],
    faq: [
      { q: "When can I enroll?", a: "Initial Enrollment is the seven months around your 65th birthday. Annual Election runs Oct 15 – Dec 7." },
      { q: "Does it cover prescriptions?", a: "Most Advantage plans include Part D drug coverage; Supplement plans pair with a standalone Part D." },
    ],
    quiz: [
      {
        id: "age",
        text: "Are you age 64 or older (or eligible due to disability)?",
        options: [yes(true), no(false)],
      },
      {
        id: "residency",
        text: "Are you a U.S. citizen or legal resident for 5+ years?",
        options: [yes(true), no(false)],
      },
      {
        id: "partAB",
        text: "Are you enrolled in (or eligible for) Medicare Parts A & B?",
        options: [yes(true), { label: "Not sure", qualifies: true }, no(true)],
      },
      {
        id: "intent",
        text: "Are you looking to enroll or switch plans in the next 90 days?",
        options: [yes(true), { label: "Just exploring", qualifies: true }, no(false)],
      },
    ],
  },
  {
    slug: "health",
    name: "Health Insurance",
    short: "Health",
    tagline: "Coverage that grows with you.",
    blurb:
      "Individual and family plans that protect both your physical and financial wellbeing — from preventative checkups to major medical events.",
    cta: "Check Health Eligibility",
    image: healthImg,
    Icon: Stethoscope,
    benefits: [
      { title: "ACA-qualified plans", desc: "Bronze, Silver, Gold and Platinum tiers with subsidy estimates." },
      { title: "Short-term coverage", desc: "Bridge gaps between employers, students or new graduates." },
      { title: "HSA-compatible", desc: "Pair high-deductible plans with tax-advantaged savings." },
    ],
    faq: [
      { q: "Can I get a subsidy?", a: "Most households earning up to 400% of the federal poverty level qualify for premium tax credits." },
      { q: "Are my doctors covered?", a: "We check provider networks during the quote process — just pick your preferred clinic." },
    ],
    quiz: [
      {
        id: "age",
        text: "Are you between 18 and 64 years old?",
        options: [yes(true), no(false)],
      },
      {
        id: "residency",
        text: "Are you a U.S. resident?",
        options: [yes(true), no(false)],
      },
      {
        id: "employer",
        text: "Do you currently have employer-provided health insurance?",
        options: [yes(true), no(true)],
      },
      {
        id: "household",
        text: "Who are you looking to cover?",
        options: [
          { label: "Just me", qualifies: true },
          { label: "Me + partner", qualifies: true },
          { label: "Family with children", qualifies: true },
        ],
      },
      {
        id: "intent",
        text: "Looking to compare plans in the next 60 days?",
        options: [yes(true), { label: "Just researching", qualifies: true }, no(false)],
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
        id: "owns",
        text: "Do you own or lease a vehicle?",
        options: [yes(true), no(false)],
      },
      {
        id: "license",
        text: "Do you have a valid U.S. driver's license?",
        options: [yes(true), no(false)],
      },
      {
        id: "dui",
        text: "Any DUI or major violation in the last 3 years?",
        options: [no(true), yes(false)],
      },
      {
        id: "vehicles",
        text: "How many vehicles in your household?",
        options: [
          { label: "1", qualifies: true },
          { label: "2", qualifies: true },
          { label: "3+", qualifies: true },
        ],
      },
      {
        id: "intent",
        text: "Looking to switch or compare auto policies soon?",
        options: [yes(true), { label: "Just exploring", qualifies: true }, no(false)],
      },
    ],
  },
  {
    slug: "life",
    name: "Life Insurance",
    short: "Life",
    tagline: "Protect what matters most.",
    blurb:
      "Term, whole and universal life policies that put your family first. Get a personalized recommendation in minutes without a medical exam in most cases.",
    cta: "Check Life Eligibility",
    image: lifeImg,
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
    quiz: [
      {
        id: "age",
        text: "Are you between 18 and 75 years old?",
        options: [yes(true), no(false)],
      },
      {
        id: "residency",
        text: "Are you a U.S. citizen or legal resident?",
        options: [yes(true), no(false)],
      },
      {
        id: "health",
        text: "Have you been diagnosed with a terminal illness in the last 12 months?",
        options: [no(true), yes(false)],
      },
      {
        id: "tobacco",
        text: "Have you used tobacco products in the last 12 months?",
        options: [no(true), yes(true)],
      },
      {
        id: "coverage",
        text: "How much coverage are you considering?",
        options: [
          { label: "Under $100k", qualifies: true },
          { label: "$100k – $500k", qualifies: true },
          { label: "$500k+", qualifies: true },
        ],
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
        id: "owns",
        text: "Do you own your home (or are you closing soon)?",
        options: [yes(true), no(false)],
      },
      {
        id: "primary",
        text: "Is this your primary residence?",
        options: [yes(true), { label: "Secondary / vacation", qualifies: true }, no(true)],
      },
      {
        id: "claims",
        text: "Any open or unresolved claims on the property?",
        options: [no(true), yes(false)],
      },
      {
        id: "type",
        text: "What type of home?",
        options: [
          { label: "Single-family", qualifies: true },
          { label: "Condo / townhouse", qualifies: true },
          { label: "Mobile / manufactured", qualifies: true },
        ],
      },
      {
        id: "intent",
        text: "Looking to start or switch a policy in the next 60 days?",
        options: [yes(true), { label: "Just comparing", qualifies: true }, no(false)],
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
        text: "Are you between 50 and 85 years old?",
        options: [yes(true), no(false)],
      },
      {
        id: "residency",
        text: "Are you a U.S. citizen or legal resident?",
        options: [yes(true), no(false)],
      },
      {
        id: "terminal",
        text: "Have you been diagnosed with a terminal illness in the last 12 months?",
        options: [no(true), yes(false)],
      },
      {
        id: "coverage",
        text: "How much coverage are you considering?",
        options: [
          { label: "$5k – $10k", qualifies: true },
          { label: "$10k – $25k", qualifies: true },
          { label: "$25k+", qualifies: true },
        ],
      },
      {
        id: "purpose",
        text: "What's most important to you?",
        options: [
          { label: "Funeral costs", qualifies: true },
          { label: "Leaving a legacy", qualifies: true },
          { label: "Final medical bills", qualifies: true },
        ],
      },
    ],
  },
];

export const categoryBySlug = (slug: string) =>
  categories.find((c) => c.slug === slug);
