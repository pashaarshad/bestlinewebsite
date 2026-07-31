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
} from "lucide-react";

import heroWoman from "@/assets/hero-woman.png.asset.json";
import whyChooseUs from "@/assets/why-choose-us.png.asset.json";
import productsWoman from "@/assets/products-woman.png.asset.json";
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
      <section className="relative overflow-hidden bg-gradient-soft">
        <div className="container-page py-12 lg:py-20">
          {/* Top centered premium maroon statement */}
          <div className="mb-6 md:mb-8 lg:mb-10 text-center">
            <p
              className="text-[#7A1E2C] text-[34px] sm:text-[40px] md:text-[44px] lg:text-[48px] xl:text-[52px] font-extrabold uppercase tracking-[0.06em] leading-[1.05]"
              style={{
                fontFamily: '"Montserrat", "Plus Jakarta Sans", "Inter", system-ui, sans-serif',
              }}
            >
              “YOUR LONG TERM FINANCE PARTNER”
            </p>
          </div>

          <div className="grid gap-10 lg:gap-12 xl:gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center">
            {/* LEFT: Content, vertically centered */}
            <div className="flex flex-col justify-center max-w-xl xl:max-w-2xl">
              <h1 className="mt-5 md:mt-6 text-lg md:text-xl lg:text-[1.65rem] xl:text-[1.95rem] leading-[1.5] md:leading-[1.55] text-foreground">
                <span className="block mb-4 md:mb-5 text-[23px] md:text-[25px] lg:text-[32px] xl:text-[36px]">
                  We’re NOT Looking to Get You Money Just One Time...
                </span>
                <span className="block mb-4 md:mb-5 text-[23px] md:text-[25px] lg:text-[32px] xl:text-[36px]">
                  We Want to Be Your Long Term Finance Partner...
                </span>
                <span className="block mb-4 md:mb-5 text-[23px] md:text-[25px] lg:text-[32px] xl:text-[36px]">
                  And Build a Relationship With You
                </span>
                <span className="block text-[23px] md:text-[25px] lg:text-[32px] xl:text-[36px]">
                  <span className="block">So We Can Get You Money</span>
                  <span className="block">Whenever You Need It.</span>
                </span>
              </h1>
              <p className="mt-8 md:mt-10 text-left text-[16px] md:text-[17px] font-bold text-[#A62D3D] leading-snug whitespace-nowrap">
                ***We want to help you grow your business and increase your revenue
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-card transition hover:bg-primary-deep"
                >
                  Speak With a Specialist <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            {/* RIGHT: Unified image + cards module */}
            <div className="relative">
              {/* Soft shared background glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-4 rounded-[2.25rem] bg-gradient-to-br from-primary/5 via-transparent to-accent/10 blur-xl"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -top-4 -right-4 h-32 w-32 rounded-full bg-primary/10 blur-2xl"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-4 -left-4 h-28 w-28 rounded-full bg-accent/20 blur-2xl"
              />

              {/* Unified module: shared panel wrapping image + cards */}
              <div className="relative rounded-[2rem] border border-border/70 bg-background/60 backdrop-blur-sm p-3 sm:p-4 shadow-elevated">
                <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-3 sm:gap-3.5 items-stretch">
                  {/* Image card */}
                  <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#EEF3F7] to-[#F7F8FC] shadow-card border border-border/60 aspect-[4/5] sm:aspect-auto sm:min-h-[480px] flex items-end justify-center">
                    <div
                      aria-hidden
                      className="absolute -right-10 top-8 h-48 w-48 rounded-[2rem] bg-primary/10 rotate-12"
                    />
                    <div
                      aria-hidden
                      className="absolute -left-8 -bottom-10 h-36 w-36 rounded-full bg-primary-deep/15"
                    />
                    <img
                      src={heroWoman.url}
                      alt="Bestline business funding specialist reviewing options on a tablet"
                      className="relative h-full w-full object-cover object-top"
                    />
                  </div>

                  {/* Cards stack - equal spacing, matches image height */}
                  <div className="grid grid-rows-4 gap-3 sm:gap-3.5">
                    {/* Card 1 */}
                    <div className="rounded-2xl bg-background border border-border shadow-card p-4 lg:p-5 flex items-center gap-3 lg:gap-4 transition hover:-translate-y-0.5 hover:shadow-elevated hover:border-primary/30">
                      <div className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#A62D3D] text-white ring-1 ring-[#A62D3D]/30">
                        <TrendingUp className="size-5" strokeWidth={1.75} />
                      </div>
                      <p className="text-base sm:text-lg lg:text-[1.125rem] xl:text-[1.25rem] font-bold text-foreground leading-tight">
                        Available Up To $20M
                      </p>
                    </div>

                    {/* Card 2 */}
                    <div className="rounded-2xl bg-background border border-border shadow-card p-4 lg:p-5 flex items-center gap-3 lg:gap-4 transition hover:-translate-y-0.5 hover:shadow-elevated hover:border-primary/30">
                      <div className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#A62D3D] text-white ring-1 ring-[#A62D3D]/30">
                        <Clock className="size-5" strokeWidth={1.75} />
                      </div>
                      <p className="text-base sm:text-lg lg:text-[1.125rem] xl:text-[1.25rem] font-bold text-foreground leading-tight">
                        Terms Up To 25 Years
                      </p>
                    </div>

                    {/* Card 3 */}
                    <div className="rounded-2xl bg-background border border-border shadow-card p-4 lg:p-5 flex items-center gap-3 lg:gap-4 transition hover:-translate-y-0.5 hover:shadow-elevated hover:border-primary/30">
                      <div className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#A62D3D] text-white ring-1 ring-[#A62D3D]/30">
                        <Zap className="size-5" strokeWidth={1.75} />
                      </div>
                      <p className="text-base sm:text-lg lg:text-[1.125rem] xl:text-[1.25rem] font-bold text-foreground leading-tight">
                        Fast Approvals
                      </p>
                    </div>

                    {/* Card 4 */}
                    <div className="rounded-2xl bg-background border border-border shadow-card p-4 lg:p-5 flex items-center gap-3 lg:gap-4 transition hover:-translate-y-0.5 hover:shadow-elevated hover:border-primary/30">
                      <div className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#A62D3D] text-white ring-1 ring-[#A62D3D]/30">
                        <FileCheck2 className="size-5" strokeWidth={1.75} />
                      </div>
                      <p className="text-base sm:text-lg lg:text-[1.125rem] xl:text-[1.25rem] font-bold text-foreground leading-tight">
                        Minimal Documentation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-border bg-background">
        <div className="container-page py-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[18px] md:text-[19px] font-medium text-foreground">
          {trustItems.map((t, i) => (
            <div key={t} className="flex items-center gap-2.5">
              <span className="text-black">*</span>
              <span>{t}</span>
              {i < trustItems.length - 1 && (
                <span className="hidden md:inline w-px h-3.5 bg-border ml-4" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="bg-gradient-soft py-10 md:py-12">
        <div className="container-page">
          <div className="grid gap-6 lg:gap-8 lg:grid-cols-2 lg:items-stretch">
            {/* LEFT: Image */}
            <div className="relative flex flex-col">
              <div aria-hidden className="hidden lg:block invisible">
                <div className="max-w-2xl">
                  <h2 className="text-3xl md:text-4xl font-bold">Why Businesses Choose Bestline</h2>
                  <p className="mt-4">
                    A relationship-based commercial finance partner — built around how business
                    owners actually access and grow capital.
                  </p>
                </div>
                <div className="mt-6" />
              </div>
              <div className="relative flex-1">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-4 rounded-[2.25rem] bg-gradient-to-br from-primary/5 via-transparent to-accent/10 blur-xl"
                />
                <div className="relative h-full rounded-[2rem] border border-border/70 bg-background/60 backdrop-blur-sm p-3 sm:p-4 shadow-elevated">
                  <div className="relative h-full rounded-2xl overflow-hidden shadow-card border border-border/60 aspect-[4/5] lg:aspect-auto">
                    <img
                      src={whyChooseUs.url}
                      alt="Businesswoman presenting why choose Bestline"
                      className="h-full w-full object-cover object-left-top"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Content + cards */}
            <div className="flex flex-col">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Why Businesses Choose Bestline
                </h2>
                <div aria-hidden className="mt-2.5 h-1 w-16 rounded-full bg-[#A62D3D]" />
                <p className="mt-4 text-muted-foreground">
                  A relationship-based commercial finance partner — built around how business owners
                  actually access and grow capital.
                </p>
              </div>
              <div className="mt-6 flex-1 grid gap-4 sm:grid-cols-2 auto-rows-fr">
                {whyCards.map(({ icon: Icon, title, text }) => (
                  <div
                    key={title}
                    className="group flex flex-col justify-center rounded-xl border border-border bg-background px-5 py-5 shadow-card transition hover:-translate-y-0.5 hover:shadow-elevated"
                  >
                    <div className="flex items-center gap-3">
                      <div className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#A62D3D] text-white">
                        <Icon className="size-4" />
                      </div>
                      <h3 className="text-base font-semibold text-foreground leading-snug">
                        {title}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHITE STRIP DIVIDER */}
      <div className="h-6 bg-background" aria-hidden="true" />

      {/* PRODUCTS */}
      <section className="pt-4 pb-12 md:pt-5 md:pb-14 bg-gradient-soft">
        <div className="container-page">
          <div className="grid gap-6 lg:gap-10 lg:grid-cols-2 lg:items-stretch">
            {/* LEFT: Heading + subtitle + compact highlight panel */}
            <div className="flex flex-col h-full max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Products We Offer</h2>
              <div aria-hidden className="mt-2.5 h-1 w-16 rounded-full bg-[#A62D3D]" />
              <p className="mt-4 text-[15px] md:text-base text-muted-foreground leading-relaxed max-w-[520px]">
                Explore flexible funding options designed to help businesses access capital, improve
                cash flow, and plan for growth.
              </p>

              {/* Inline highlight row — circular icon + two-line label */}
              <div className="mt-5 flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
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
                  <div key={label} className="flex items-center gap-3.5 min-w-0">
                    <div className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-[#A62D3D] text-white">
                      <Icon className="size-5" strokeWidth={2} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-base md:text-lg font-bold text-foreground leading-tight">
                        {label}
                      </p>
                      <p className="text-sm md:text-[15px] text-muted-foreground leading-tight">
                        {sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: Image aligned with left content */}
            <div className="relative">
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-4 rounded-[2.25rem] bg-gradient-to-br from-primary/5 via-transparent to-accent/10 blur-xl"
              />
              <div className="relative h-full rounded-[2rem] border border-border/70 bg-background/60 backdrop-blur-sm p-3 sm:p-4 shadow-elevated">
                <div className="relative h-full rounded-2xl overflow-hidden shadow-card border border-border/60 aspect-[4/3] md:aspect-[16/10] lg:aspect-auto">
                  <img
                    src={productsWoman.url}
                    alt="Bestline funding specialist presenting business funding products"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 md:mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => {
              const Icon = getProductIcon(p.title);
              const badges = getProductBadges(p.title);
              return (
                <article
                  key={p.title}
                  className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-elevated"
                >
                  <div className="flex items-center gap-3">
                    <div className="inline-flex size-10 items-center justify-center rounded-lg bg-[#A62D3D] text-white ring-1 ring-[#A62D3D]/30 transition group-hover:bg-[#A62D3D]/90">
                      <Icon className="size-5" strokeWidth={1.75} />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{p.title}</h3>
                  </div>
                  {badges.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {badges.map((b) => (
                        <span
                          key={b.label}
                          className="inline-flex items-center whitespace-nowrap rounded-full bg-primary px-2 py-1 text-xs font-semibold text-primary-foreground"
                        >
                          {b.label}
                        </span>
                      ))}
                    </div>
                  )}
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
                  <div className="mt-auto pt-5 flex items-center gap-4 text-sm">
                    <Link
                      to="/funding-products"
                      className="font-semibold text-primary hover:underline"
                    >
                      Learn More
                    </Link>
                    <span className="text-border">•</span>
                    <Link
                      to="/contact"
                      className="font-semibold text-foreground hover:text-primary"
                    >
                      Contact Us
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
