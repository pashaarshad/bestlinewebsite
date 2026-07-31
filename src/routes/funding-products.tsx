import { useEffect, useState } from "react";
import { createFileRoute, Link, useLocation } from "@tanstack/react-router";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Layout, PageHeader } from "@/components/site/Layout";
import { getProductIcon } from "@/lib/product-icons";
import { getProductBadges } from "@/lib/product-details";

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export const Route = createFileRoute("/funding-products")({
  head: () => ({
    meta: [
      { title: "Funding Products | Bestline Business Funding" },
      {
        name: "description",
        content:
          "Explore Bestline's commercial finance products: revenue-based financing, SBA loans, lines of credit, term loans, equipment financing, invoice factoring and more.",
      },
      { property: "og:title", content: "Funding Products — Bestline Business Funding" },
      {
        property: "og:description",
        content: "Multiple commercial finance solutions for growing businesses.",
      },
    ],
  }),
  component: Products,
});

const products = [
  [
    "SBA Loans",
    "Government-backed financing options for qualified businesses seeking larger amounts, longer terms, and competitive structures.",
  ],
  [
    "Term Loans",
    "Structured business financing with fixed repayment terms for expansion, improvements, hiring, or operating needs.",
  ],
  [
    "Business Line of Credit",
    "Access revolving capital when needed and only use what your business requires.",
  ],
  [
    "Bridge Loans",
    "Short-term capital to help businesses cover immediate needs while waiting for SBA funding, long-term financing, or other capital events.",
  ],
  [
    "Equipment Financing",
    "Funding to purchase, lease, or upgrade business equipment while preserving working capital.",
  ],
  [
    "Invoice Factoring",
    "Turn outstanding invoices into working capital and improve cash flow while waiting for customers to pay.",
  ],
  [
    "Revenue-Based Financing",
    "Fast working capital based on business revenue and cash flow. Useful for businesses that need quick access to capital without traditional bank delays.",
  ],
  [
    "Working Capital Funding",
    "Flexible capital for payroll, inventory, marketing, expansion, cash-flow gaps, rent, vendor payments, or other business needs.",
  ],
  [
    "Micro Loans",
    "Smaller funding options for businesses that need manageable capital for specific short-term needs.",
  ],
  [
    "Startup Business Funding",
    "Funding guidance and available options for newer businesses that need capital to launch, stabilize, or grow.",
  ],
  [
    "Commercial Real Estate Loans",
    "Financing options for business property purchases, refinance, expansion, or real estate-backed business needs.",
  ],
  [
    "Business Debt Consolidation",
    "Options to review current obligations and explore more manageable repayment or refinancing structures.",
  ],
];

function Products() {
  const location = useLocation();
  const hashId = location.hash ? location.hash.replace(/^#/, "") : "";
  const [activeHash, setActiveHash] = useState<string>(hashId);

  useEffect(() => {
    setActiveHash(hashId);
    if (!hashId) return;
    const t = window.setTimeout(() => setActiveHash(""), 2500);
    return () => window.clearTimeout(t);
  }, [hashId]);

  return (
    <Layout>
      <PageHeader
        eyebrow="Funding Products"
        title="Commercial Finance Solutions for Growing Businesses"
        subtitle="Bestline offers access to a broad range of business funding products. Whether you need fast working capital, longer-term financing, or a path toward SBA options, we help identify the right direction."
      />
      <section id="products" className="py-16 bg-background scroll-mt-28">
        <div className="container-page grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map(([title, text]) => {
            const Icon = getProductIcon(title);
            const badges = getProductBadges(title);
            const id = slugify(title);
            const isActive = activeHash === id;
            return (
              <article
                key={title}
                id={id}
                className={`group flex flex-col rounded-xl border bg-card p-6 shadow-card transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-elevated scroll-mt-28 ${
                  isActive
                    ? "border-primary ring-2 ring-primary/40 shadow-elevated"
                    : "border-border"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="inline-flex size-10 items-center justify-center rounded-lg bg-[#A62D3D] text-white ring-1 ring-[#A62D3D]/30 transition group-hover:bg-[#A62D3D]/90">
                    <Icon className="size-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{title}</h3>
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
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{text}</p>
                <div className="mt-auto pt-5 flex items-center gap-4 text-sm">
                  <Link
                    to="/contact"
                    className="font-semibold text-primary hover:underline inline-flex items-center gap-1"
                  >
                    Contact Us <ArrowRight className="size-3.5" />
                  </Link>
                  <span className="text-border">•</span>
                  <Link to="/contact" className="font-semibold text-foreground hover:text-primary">
                    Ask a Question
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="py-16 bg-gradient-soft border-t border-border">
        <div className="container-page max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">What We Usually Review</h2>
          <p className="mt-3 text-muted-foreground">
            Each business is reviewed individually. Common items considered across products include:
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {[
              "Time in Business",
              "Monthly Revenue",
              "Business Bank Statements",
              "Business Industry",
              "Cash Flow",
              "Credit Profile",
              "Existing Obligations",
              "Funding Purpose",
            ].map((q) => (
              <div
                key={q}
                className="flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-3 text-sm"
              >
                <CheckCircle2 className="size-4 text-[#A62D3D] shrink-0" /> {q}
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Requirements vary by product and funding partner. Submitting information does not
            guarantee approval.
          </p>
        </div>
      </section>
    </Layout>
  );
}
