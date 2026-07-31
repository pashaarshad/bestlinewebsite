import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Layout, PageHeader } from "@/components/site/Layout";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | Bestline Business Funding" },
      { name: "description", content: "Common questions about Bestline business funding products, timing, credit, SBA loans, partner opportunities and more." },
      { property: "og:title", content: "Bestline Business Funding FAQ" },
      { property: "og:description", content: "Answers to common business funding questions." },
    ],
  }),
  component: FAQ,
});

const faqs = [
  ["What types of funding does Bestline offer?", "Bestline offers access to several business funding options, including revenue-based financing, working capital funding, SBA loans, business lines of credit, term loans, equipment financing, invoice factoring, commercial real estate loans, bridge loans, micro loans, business debt consolidation, and credit enhancement support."],
  ["How fast can a business get funded?", "Some funding options may move quickly depending on the business profile, documents, approval process, and selected product. Timing varies by program and qualification."],
  ["Do I need perfect credit?", "No. Credit is one factor, but many funding options also review business revenue, deposits, cash flow, time in business, and overall business profile."],
  ["Does Bestline offer SBA loans?", "Yes. Bestline can help guide qualified businesses toward SBA and other longer-term funding options."],
  ["Is collateral required?", "Some options may not require hard collateral, while other products may require collateral depending on the loan type, amount, and approval structure."],
  ["Can Bestline help with future funding readiness?", "Yes. Bestline aims to support clients beyond one transaction by helping them understand funding requirements, credit profile considerations, and future financing opportunities."],
  ["Can referral partners work with Bestline?", "Yes. Bestline works with agents, brokers, referral partners, and business professionals who want to connect their clients with funding solutions."],
];

function FAQ() {
  return (
    <Layout>
      <PageHeader eyebrow="FAQ" title="Frequently Asked Questions" subtitle="Answers to common questions about Bestline funding products, qualifications, and the application process." />
      <section className="py-16 bg-background">
        <div className="container-page max-w-3xl">
          <div className="divide-y divide-border rounded-2xl border border-border bg-card">
            {faqs.map(([q, a]) => (
              <details key={q} className="group p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-foreground">
                <span>{q}</span>
                <ChevronDown className="size-5 text-[#A62D3D] transition group-open:rotate-180" />
              </summary>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-sm text-muted-foreground">Still have questions?</p>
            <Link to="/contact" className="mt-3 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-deep">
              Contact Bestline <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
