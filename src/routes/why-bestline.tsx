import { createFileRoute, Link } from "@tanstack/react-router";
import { Zap, Layers, TrendingUp, ShieldCheck, Handshake, GraduationCap, ArrowRight } from "lucide-react";
import { Layout, PageHeader } from "@/components/site/Layout";

export const Route = createFileRoute("/why-bestline")({
  head: () => ({
    meta: [
      { title: "Why Bestline | Relationship-Based Business Funding" },
      { name: "description", content: "Why business owners and partners choose Bestline: fast capital, multiple products, cash-flow based options and long-term support." },
      { property: "og:title", content: "Why Bestline" },
      { property: "og:description", content: "A relationship-based commercial finance partner." },
    ],
  }),
  component: Why,
});

const cards = [
  { icon: Zap, title: "Fast Access to Capital", text: "We help business owners move quickly when they need working capital, growth capital, or short-notice funding." },
  { icon: Layers, title: "Multiple Funding Options", text: "Bestline offers access to several business funding solutions, from revenue-based financing to SBA loans, lines of credit, term loans, and more." },
  { icon: TrendingUp, title: "Cash-Flow Based Options", text: "Some funding options may be based more on business revenue and cash flow than on traditional credit requirements." },
  { icon: ShieldCheck, title: "No Collateral Options", text: "Certain funding programs may not require real estate or hard collateral, depending on the business profile and product selected." },
  { icon: Handshake, title: "Relationship-Based Support", text: "Our goal is to become a long-term finance partner, not just a one-time funding source." },
  { icon: GraduationCap, title: "Funding Readiness Guidance", text: "We help business owners understand what lenders and funding partners look for so they can work toward stronger future options." },
];

const industries = [
  "Restaurants & Food Service", "Retail Businesses", "Trucking & Transportation",
  "Construction & Contractors", "Medical & Healthcare Practices", "Professional Services",
  "Automotive Businesses", "E-Commerce Businesses", "Franchises",
  "Real Estate & Property Businesses", "Manufacturing", "Service-Based Businesses",
];

function Why() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Why Bestline"
        title="A Funding Partner Built Around Your Business"
        subtitle="Bestline is more than a one-time funding source. We focus on relationship-based service, clear communication, and helping business owners understand the funding options that fit their situation."
      />
      <section className="py-16 bg-background">
        <div className="container-page grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-xl border border-border bg-card p-6 shadow-card">
              <div className="inline-flex size-11 items-center justify-center rounded-lg bg-[#A62D3D] text-white">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gradient-soft border-t border-border">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Industries</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-foreground">Funding Solutions for Many Industries</h2>
            <p className="mt-4 text-muted-foreground">
              Bestline works with businesses across broad industry coverage and helps match funding options based on revenue, time in business, cash flow, and overall business profile.
            </p>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {industries.map((ind) => (
              <div key={ind} className="rounded-lg border border-border bg-background px-4 py-4 text-sm font-medium text-foreground">
                {ind}
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-deep">
              Speak With a Specialist <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
