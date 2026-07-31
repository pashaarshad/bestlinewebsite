import { createFileRoute, Link } from "@tanstack/react-router";
import { Users, Handshake, MessageCircle, UserCheck, Eye, Heart, BookOpen, ArrowRight } from "lucide-react";
import { Layout, PageHeader } from "@/components/site/Layout";
import partnerBg from "@/assets/partner-bg.jpg";

export const Route = createFileRoute("/partner")({
  head: () => ({
    meta: [
      { title: "Partner With Bestline | Agents, Brokers & Referral Partners" },
      { name: "description", content: "Bestline works with agents, brokers, consultants and referral partners to deliver reliable business funding options to their clients." },
      { property: "og:title", content: "Partner With Bestline" },
      { property: "og:description", content: "A professional funding partner for agents, brokers, consultants, and referral partners." },
    ],
  }),
  component: Partner,
});

const cards = [
  { icon: Users, title: "Agent & Broker Support", text: "Work with a team experienced in supporting agents and brokers across commercial finance products." },
  { icon: Handshake, title: "Referral Partner Opportunities", text: "Refer business clients to Bestline and connect them with available funding options." },
  { icon: MessageCircle, title: "Fast Deal Communication", text: "Clear, timely updates on submissions so you can keep your clients informed." },
  { icon: UserCheck, title: "Dedicated Funding Specialist", text: "Partners are supported by a dedicated specialist for deal flow and questions." },
  { icon: Eye, title: "Transparent Deal Updates", text: "Visibility into where deals stand throughout the review and approval process." },
  { icon: Heart, title: "Long-Term Client Support", text: "We aim to keep your clients funded today and ready for future financing." },
  { icon: BookOpen, title: "Training & Product Guidance", text: "Guidance on products, qualifications, and how to position the right option for each client." },
];

function Partner() {
  return (
    <Layout>
      <section className="relative overflow-hidden border-b border-border">
        <img src={partnerBg} alt="" width={1600} height={900} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="relative container-page py-20 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Partner With Us</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-foreground">Partner With Bestline</h1>
          <p className="mt-5 text-lg text-muted-foreground">
            A professional funding partner for agents, brokers, consultants, and referral partners. Bestline works with business
            professionals who want to offer reliable commercial finance options to their clients.
          </p>
          <Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-deep">
            Become a Referral Partner <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

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

        <div className="container-page mt-12 rounded-2xl bg-gradient-soft border border-border p-8 md:p-10">
          <p className="text-sm text-muted-foreground">
            Bestline focuses on credible, compliant partner relationships. Compensation, structure, and submission requirements are
            discussed directly with each partner.
          </p>
        </div>
      </section>
    </Layout>
  );
}
