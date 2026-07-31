import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText, Upload, Search, Banknote, ArrowRight } from "lucide-react";
import { Layout, PageHeader } from "@/components/site/Layout";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works | Bestline Business Funding" },
      { name: "description", content: "A simple 4-step business funding process: apply, upload documents, review options, and get funded." },
      { property: "og:title", content: "How Bestline Funding Works" },
      { property: "og:description", content: "Apply, upload documents, review options, get funded." },
    ],
  }),
  component: HowItWorks,
});

const steps = [
  { icon: FileText, title: "Submit Application", text: "Complete a simple business funding request form with key information about your company." },
  { icon: Upload, title: "Upload Documents", text: "Provide recent business bank statements and other items that may be required for review." },
  { icon: Search, title: "Review Options", text: "Our team reviews your business profile and presents available funding options for your situation." },
  { icon: Banknote, title: "Get Funded", text: "Once approved and completed, funding can move quickly depending on the product and business profile." },
];

function HowItWorks() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Process"
        title="Simple Funding Process"
        subtitle="Bestline keeps the funding process clear and efficient — from initial review through funding."
      />
      <section className="py-16 bg-background">
        <div className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <div key={title} className="relative rounded-xl border border-border bg-card p-6 shadow-card">
              <div className="flex items-center justify-between">
                <div className="inline-flex size-12 items-center justify-center rounded-lg bg-[#A62D3D] text-white">
                  <Icon className="size-5" />
                </div>
                <span className="text-4xl font-bold text-muted">0{i + 1}</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
        <div className="container-page mt-14 rounded-2xl bg-gradient-hero p-10 md:p-12 text-center text-primary-foreground">
          <h3 className="text-2xl md:text-3xl font-bold">Ready to begin?</h3>
          <p className="mt-2 text-primary-foreground/85">Get a funding review tailored to your business in minutes.</p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-background px-6 py-3 text-sm font-semibold text-primary hover:bg-background/90"
          >
            Contact a Specialist <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
