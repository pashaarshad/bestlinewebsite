import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Zap,
  Layers,
  TrendingUp,
  ShieldCheck,
  Handshake,
  GraduationCap,
  FileText,
  Upload,
  Search,
  Banknote,
  CheckCircle2,
  FileCheck2,
  Clock,
  User,
  Folder,
  Users,
  BarChart3,
} from "lucide-react";

import whyChooseUsImg from "@/assets/why-choose-us.png";
import weOfferImg from "@/assets/we-offer.png";
import heroSectionWoman from "@/assets/hero-section.png";
import heroBg from "@/assets/hero-bg.jpg";
import { Layout } from "@/components/site/Layout";
import { getProductIcon } from "@/lib/product-icons";
import { getProductBadges } from "@/lib/product-details";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bestline Business Funding | Working Capital, SBA, Lines of Credit" },
      {
        name: "description",
        content:
          "Bestline Business Funding helps business owners access fast, flexible capital and build a long-term path toward stronger financing options. Apply in minutes.",
      },
      { property: "og:title", content: "Bestline Business Funding" },
      {
        property: "og:description",
        content:
          "Funding options up to $5,000,000 — revenue-based financing, SBA loans, lines of credit, term loans and more.",
      },
    ],
  }),
  component: Home,
});

const trustItems = [
  "Up To $5M in 1 Day",
  "Approval in 2 Hrs",
  "Aggressive Early Prepay Discounts",
  "Live Support 7 Days a Week",
];

const whyCards = [
  {
    icon: Zap,
    title: "Fast Access to Capital",
    text: "We help business owners move quickly when they need working capital, growth capital, or short-notice funding.",
    highlight: true,
  },
  {
    icon: Layers,
    title: "Multiple Funding Options",
    text: "Access several business funding solutions, from revenue-based financing to SBA loans, lines of credit, term loans, and more.",
  },
  {
    icon: TrendingUp,
    title: "Cash-Flow Based Options",
    text: "Some funding options may be based more on business revenue and cash flow than on traditional credit requirements.",
  },
  {
    icon: ShieldCheck,
    title: "No Collateral Options",
    text: "Certain programs may not require real estate or hard collateral, depending on the business profile and product selected.",
  },
  {
    icon: Handshake,
    title: "Relationship-Based Support",
    text: "Our goal is to become a long-term finance partner, not just a one-time funding source.",
  },
  {
    icon: GraduationCap,
    title: "Funding Readiness Guidance",
    text: "We help business owners understand what lenders look for so they can work toward stronger future options.",
  },
];

const products = [
  {
    title: "SBA Loans",
    text: "Government-backed financing for qualified businesses seeking longer terms.",
  },
  {
    title: "Term Loans",
    text: "Structured financing with fixed repayment terms for growth or operations.",
  },
  {
    title: "Business Line of Credit",
    text: "Revolving capital — draw only what your business needs.",
  },
  {
    title: "Bridge Loans",
    text: "Short-term capital while awaiting SBA funding or other capital events.",
  },
  {
    title: "Equipment Financing",
    text: "Purchase, lease, or upgrade equipment while preserving working capital.",
  },
  {
    title: "Invoice Factoring",
    text: "Turn outstanding invoices into working capital to improve cash flow.",
  },
  {
    title: "Revenue-Based Financing",
    text: "Fast working capital based on business revenue and cash flow.",
  },
  {
    title: "Working Capital Funding",
    text: "Flexible capital for payroll, inventory, marketing, or cash-flow gaps.",
  },
  { title: "Micro Loans", text: "Smaller funding options for specific short-term business needs." },
  { title: "Startup Business Funding", text: "Funding guidance and options for newer businesses." },
  {
    title: "Commercial Real Estate Loans",
    text: "Financing for property purchase, refinance, or expansion.",
  },
  {
    title: "Business Debt Consolidation",
    text: "Review current obligations and explore more manageable structures.",
  },
];

const steps = [
  {
    icon: FileText,
    title: "Submit Application",
    text: "Complete a simple business funding request form.",
  },
  {
    icon: Upload,
    title: "Upload Documents",
    text: "Provide basic items such as recent business bank statements.",
  },
  {
    icon: Search,
    title: "Review Options",
    text: "Our team reviews your profile and presents available options.",
  },
  {
    icon: Banknote,
    title: "Get Funded",
    text: "Once approved and completed, funding can move quickly.",
  },
];

function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#F8FAFC]">
        {/* Diagonal split background for large screens */}
        <div
          className="absolute inset-y-0 right-0 hidden lg:block lg:w-[57%] xl:w-[54%] z-0"
          style={{
            clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark semi-transparent overlay to match screenshot */}
          <div className="absolute inset-0 bg-slate-900/10" />
        </div>

        <div className="container-page relative z-10 grid lg:grid-cols-[0.9fr_1.1fr] lg:gap-8 items-stretch">
          {/* LEFT: Content, vertically centered */}
          <div className="flex flex-col justify-center py-12 md:py-16 lg:py-24 lg:pr-8 relative z-10">
            {/* Eyebrow */}
            <p className="text-[13px] sm:text-[14px] font-extrabold uppercase tracking-[0.15em] text-[#16a34a] mb-4">
              LONG-TERM FINANCE PARTNER
            </p>

            {/* Title */}
            <h1 className="text-[38px] sm:text-[48px] md:text-[56px] lg:text-[62px] xl:text-[68px] font-extrabold text-[#0F172A] leading-[1.1] tracking-tight">
              Your Long-Term <br />
              <span className="text-[#A62D3D]">Finance Partner</span>
            </h1>

            {/* Green accent line */}
            <div className="w-16 h-[5px] bg-[#16a34a] mt-5 mb-7 rounded-full" />

            {/* Description */}
            <p className="text-[#475569] text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed max-w-xl mb-9">
              We're not looking to get you money just one time. Bestline is here to be your
              long-term finance partner, building a relationship that helps your business grow and
              gives you access to capital whenever you need it.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 sm:mb-16">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#16a34a] px-6 py-3.5 text-base font-bold text-white shadow-md transition hover:bg-[#15803d]"
              >
                <User className="size-5 shrink-0" strokeWidth={2.2} />
                Speak With a Specialist
                <ArrowRight className="size-4 ml-1" />
              </Link>
              <Link
                to="/funding-products"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#CBD5E1] bg-white px-6 py-3.5 text-base font-bold text-[#1F2937] shadow-sm transition hover:bg-slate-50 hover:border-slate-300"
              >
                <Folder className="size-5 shrink-0 text-[#16a34a]" strokeWidth={2.2} />
                Explore Funding Products
                <ArrowRight className="size-4 ml-1" />
              </Link>
            </div>

            {/* Bottom Row / Card */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-5 md:p-6 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05),0_8px_10px_-6px_rgba(0,0,0,0.03)] flex flex-col md:flex-row items-stretch gap-6 md:gap-4 max-w-3xl">
              <div className="flex items-center gap-4 flex-1">
                <div className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-green-50 text-[#16a34a]">
                  <ShieldCheck className="size-6" strokeWidth={1.8} />
                </div>
                <p className="text-[13px] md:text-sm font-bold text-slate-800 leading-snug">
                  Trusted by Businesses Across the U.S.
                </p>
              </div>

              <div className="hidden md:block w-px bg-slate-200 my-1 self-stretch" />

              <div className="flex items-center gap-4 flex-1">
                <div className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-green-50 text-[#16a34a]">
                  <Users className="size-6" strokeWidth={1.8} />
                </div>
                <p className="text-[13px] md:text-sm font-bold text-slate-800 leading-snug">
                  Long-Term Partnerships Built on Trust
                </p>
              </div>

              <div className="hidden md:block w-px bg-slate-200 my-1 self-stretch" />

              <div className="flex items-center gap-4 flex-1">
                <div className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-green-50 text-[#16a34a]">
                  <BarChart3 className="size-6" strokeWidth={1.8} />
                </div>
                <p className="text-[13px] md:text-sm font-bold text-slate-800 leading-snug">
                  Flexible Solutions for Sustainable Growth
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Image container with cutout and floating cards */}
          <div className="relative flex flex-col justify-end min-h-[500px] lg:min-h-0 lg:h-full z-10 mt-8 lg:mt-0">
            {/* On mobile/tablet, this background serves as the column background */}
            <div
              className="absolute inset-0 lg:hidden z-0 rounded-2xl overflow-hidden bg-cover bg-center"
              style={{
                backgroundImage: `url(${heroBg})`,
              }}
            >
              <div className="absolute inset-0 bg-slate-950/30" />
            </div>

            {/* Woman Cutout */}
            <div className="relative lg:absolute lg:left-[2%] xl:left-[6%] lg:bottom-0 z-10 w-full max-w-[420px] mx-auto lg:max-w-none lg:w-[68%] xl:w-[72%] lg:h-[95%] xl:h-[98%] flex items-end justify-center lg:justify-start">
              <img
                src={heroSectionWoman}
                alt="Bestline businesswoman specialist holding a tablet"
                className="h-[380px] sm:h-[440px] md:h-[480px] lg:h-[92%] xl:h-[95%] w-auto object-contain object-bottom select-none pointer-events-none"
              />
            </div>

            {/* Floating cards stacked on the right side */}
            <div className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3.5 w-[220px] sm:w-[245px] md:w-[270px]">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl p-4 shadow-[0_10px_20px_-3px_rgba(0,0,0,0.06),0_4px_6px_-2px_rgba(0,0,0,0.03)] border border-[#F1F5F9]/50 flex items-center gap-3 sm:gap-4 transition hover:-translate-y-0.5 hover:shadow-2xl">
                <div className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-[#A62D3D] text-white">
                  <TrendingUp className="size-5" strokeWidth={2.2} />
                </div>
                <div>
                  <p className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider leading-none">
                    Available Up To
                  </p>
                  <p className="text-[18px] sm:text-xl md:text-2xl font-black text-slate-800 mt-1 sm:mt-1.5 leading-none">
                    $20M
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl p-4 shadow-[0_10px_20px_-3px_rgba(0,0,0,0.06),0_4px_6px_-2px_rgba(0,0,0,0.03)] border border-[#F1F5F9]/50 flex items-center gap-3 sm:gap-4 transition hover:-translate-y-0.5 hover:shadow-2xl">
                <div className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-[#A62D3D] text-white">
                  <Clock className="size-5" strokeWidth={2.2} />
                </div>
                <div>
                  <p className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider leading-none">
                    Terms Up To
                  </p>
                  <p className="text-[18px] sm:text-xl md:text-2xl font-black text-slate-800 mt-1 sm:mt-1.5 leading-none">
                    25 Years
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl p-4 shadow-[0_10px_20px_-3px_rgba(0,0,0,0.06),0_4px_6px_-2px_rgba(0,0,0,0.03)] border border-[#F1F5F9]/50 flex items-center gap-3 sm:gap-4 transition hover:-translate-y-0.5 hover:shadow-2xl">
                <div className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-[#A62D3D] text-white">
                  <Zap className="size-5" strokeWidth={2.2} />
                </div>
                <div>
                  <p className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider leading-none">
                    Fast
                  </p>
                  <p className="text-[18px] sm:text-xl md:text-2xl font-black text-slate-800 mt-1 sm:mt-1.5 leading-none">
                    Approvals
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-2xl p-4 shadow-[0_10px_20px_-3px_rgba(0,0,0,0.06),0_4px_6px_-2px_rgba(0,0,0,0.03)] border border-[#F1F5F9]/50 flex items-center gap-3 sm:gap-4 transition hover:-translate-y-0.5 hover:shadow-2xl">
                <div className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-[#A62D3D] text-white">
                  <FileCheck2 className="size-5" strokeWidth={2.2} />
                </div>
                <div>
                  <p className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider leading-none">
                    Minimal
                  </p>
                  <p className="text-[18px] sm:text-xl md:text-2xl font-black text-slate-800 mt-1 sm:mt-1.5 leading-none">
                    Documentation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="relative overflow-hidden bg-[#F8FAFC] border-t border-slate-100">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] xl:grid-cols-[0.95fr_1.05fr] items-stretch">
          {/* LEFT: Image with cityscape and woman */}
          <div className="relative min-h-[420px] sm:min-h-[500px] lg:min-h-0 w-full h-full overflow-hidden">
            {/* The base image (cityscape + woman pointing glowing glass) */}
            <img
              src={whyChooseUsImg}
              alt="Why Choose Us cityscape background with specialist pointing forward"
              className="absolute inset-0 w-full h-full object-cover object-[center_20%] lg:object-center select-none"
            />
            {/* Smooth, subtle linear gradient overlay to fade image edge to match background color responsively */}
            <div className="absolute inset-x-0 bottom-0 lg:top-0 lg:bottom-auto lg:right-0 lg:inset-x-auto h-20 lg:h-full lg:w-[16%] bg-gradient-to-b lg:bg-gradient-to-r from-transparent via-[#F8FAFC]/25 to-[#F8FAFC] z-10" />
          </div>

          {/* RIGHT: Content + 3x2 cards grid */}
          <div className="flex flex-col justify-center py-12 px-6 sm:px-8 lg:py-20 lg:pl-8 lg:pr-16 relative z-10">
            <div className="max-w-2xl">
              {/* Eyebrow */}
              <p className="text-[13px] sm:text-[14px] font-extrabold uppercase tracking-[0.15em] text-[#16a34a] mb-2.5">
                WHY CHOOSE BESTLINE
              </p>

              {/* Title */}
              <h2 className="text-[30px] sm:text-[36px] md:text-[40px] font-black text-slate-800 leading-tight">
                Why Businesses Choose Bestline
              </h2>

              {/* Red Accent Bar */}
              <div className="w-14 h-1 bg-[#A62D3D] mt-3.5 mb-5 rounded-full" />

              {/* Description */}
              <p className="text-[#475569] text-[15px] sm:text-base leading-relaxed">
                A relationship-based commercial finance partner — built around how business owners
                actually access and grow capital.
              </p>
            </div>

            {/* Grid of 6 cards */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {whyCards.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="bg-white rounded-2xl p-5 border border-slate-200/50 shadow-[0_4px_15px_-3px_rgba(0,0,0,0.03)] flex flex-col justify-between transition hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-4px_rgba(0,0,0,0.06)]"
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#7A1E2C] text-white">
                        <Icon className="size-5" strokeWidth={2} />
                      </div>
                      <h3 className="text-base font-bold text-slate-800 leading-snug">{title}</h3>
                    </div>
                    <p className="mt-3 text-xs sm:text-[13px] text-slate-500 leading-relaxed">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHITE STRIP DIVIDER */}
      <div className="h-6 bg-background" aria-hidden="true" />

      {/* PRODUCTS */}
      <section className="relative py-12 md:py-16 bg-[#F8FAFC] overflow-hidden">
        {/* Flush Top-Right Image Column */}
        <div className="relative lg:absolute w-full lg:w-[46%] xl:w-[48%] h-[350px] lg:h-[60%] xl:h-[64%] lg:top-0 lg:right-0 mt-8 lg:mt-0 overflow-hidden z-0">
          <img
            src={weOfferImg}
            alt="Pointing woman presenting Bestline funding products"
            className="w-full h-full object-cover object-center select-none"
          />
          {/* Smooth linear gradient overlay to fade left side of image responsively */}
          <div className="absolute inset-y-0 left-0 w-[20%] lg:w-[25%] bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/40 to-transparent z-10" />
          {/* Smooth linear gradient overlay to fade bottom side of image responsively */}
          <div className="absolute inset-x-0 bottom-0 h-[25%] bg-gradient-to-b from-transparent via-[#F8FAFC]/50 to-[#F8FAFC] z-10" />
        </div>

        <div className="container-page relative z-10">
          <div className="grid gap-8 lg:gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            {/* LEFT: Heading + subtitle + compact highlight panel */}
            <div className="flex flex-col h-full max-w-2xl">
              {/* Eyebrow */}
              <p className="text-[13px] sm:text-[14px] font-extrabold uppercase tracking-[0.15em] text-[#16a34a] mb-2.5">
                FUNDING SOLUTIONS
              </p>

              <h2 className="text-[30px] sm:text-[36px] md:text-[40px] font-black text-slate-800 leading-tight">
                Products We Offer
              </h2>
              <div className="w-14 h-1 bg-[#A62D3D] mt-3.5 mb-5 rounded-full" />
              <p className="text-[#475569] text-[15px] sm:text-base leading-relaxed">
                Explore flexible funding options designed to help businesses access capital, improve
                cash flow, and plan for growth.
              </p>

              {/* Inline highlight row — 2x2 grid of trust badges */}
              <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2">
                {[
                  { icon: CheckCircle2, label: "90% Approval Rate", sub: "High approval success" },
                  { icon: Clock, label: "Accept Every Industry", sub: "Most industries welcome" },
                  { icon: ShieldCheck, label: "Soft Credit Pull", sub: "No hard credit impact" },
                  {
                    icon: TrendingUp,
                    label: "Credit Not An Issue",
                    sub: "Funding for all profiles",
                  },
                ].map(({ icon: Icon, label, sub }) => (
                  <div
                    key={label}
                    className="bg-white rounded-2xl p-4 border border-slate-200/50 shadow-[0_4px_12px_rgba(0,0,0,0.02)] flex items-center gap-3.5"
                  >
                    <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-[#A62D3D] text-white">
                      <Icon className="size-5" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-sm font-extrabold text-slate-800 leading-tight">{label}</p>
                      <p className="text-xs text-slate-500 mt-0.5 leading-none">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: Empty placeholder to reserve space on desktop */}
            <div className="hidden lg:block lg:h-[420px]" aria-hidden="true" />
          </div>

          {/* Sliced first 3 product cards matching the screenshot */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 3).map((p) => {
              const Icon = getProductIcon(p.title);
              const badges = getProductBadges(p.title);
              return (
                <article
                  key={p.title}
                  className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05),0_8px_10px_-6px_rgba(0,0,0,0.03)] flex flex-col justify-between h-full transition hover:-translate-y-0.5 hover:shadow-2xl"
                >
                  <div>
                    {/* Header: square icon + title */}
                    <div className="flex items-center gap-4">
                      <div className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#7A1E2C] text-white shadow-md">
                        <Icon className="size-5" strokeWidth={2} />
                      </div>
                      <h3 className="text-xl font-black text-slate-800">{p.title}</h3>
                    </div>

                    {/* Green Badges */}
                    {badges.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {badges.map((b) => (
                          <span
                            key={b.label}
                            className="inline-flex items-center rounded-full bg-[#137333] px-3 py-1 text-xs font-bold text-white"
                          >
                            {b.label}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Description */}
                    <p className="mt-4 text-sm text-slate-500 leading-relaxed">{p.text}</p>
                  </div>

                  {/* Footer links */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-sm font-bold">
                    <Link
                      to="/funding-products"
                      className="text-[#16a34a] hover:text-[#15803d] flex items-center gap-1.5"
                    >
                      Learn More
                      <span className="text-[10px] font-bold">&gt;</span>
                    </Link>
                    <div className="w-px h-4 bg-slate-200 mx-4" />
                    <Link
                      to="/contact"
                      className="text-[#1F2937] hover:text-[#A62D3D] flex items-center gap-1.5"
                    >
                      Contact Us
                      <span className="text-[10px] font-bold">&gt;</span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHITE STRIP DIVIDER */}
      <div className="h-6 bg-background" aria-hidden="true" />

      {/* HOW IT WORKS */}
      <section className="py-20 bg-gradient-soft">
        <div className="container-page">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Simple Funding Process
            </h2>
            <div aria-hidden className="mt-2.5 h-1 w-16 rounded-full bg-[#A62D3D]" />
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ icon: Icon, title, text }, i) => (
              <div key={title} className="relative rounded-xl border border-border bg-card p-6">
                <div className="flex items-center justify-between">
                  <div className="inline-flex size-11 items-center justify-center rounded-lg bg-[#A62D3D] text-white">
                    <Icon className="size-5" />
                  </div>
                  <span className="text-4xl font-bold text-muted">0{i + 1}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="container-page rounded-2xl border border-border bg-gradient-soft p-10 md:p-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Ready to explore your funding options?
          </h2>
          <div aria-hidden className="mt-2.5 h-1 w-16 rounded-full bg-[#A62D3D] mx-auto" />
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Submit a quick application and a Bestline funding specialist will review available
            options for your business.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-deep"
            >
              Contact a Specialist <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
