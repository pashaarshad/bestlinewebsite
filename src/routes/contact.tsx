import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Layout, PageHeader } from "@/components/site/Layout";


export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Bestline Business Funding" },
      { name: "description", content: "Get in touch with Bestline Business Funding. Call (888) 655-0685 or email info@bestlinefunding.com." },
      { property: "og:title", content: "Contact Bestline Business Funding" },
      { property: "og:description", content: "Speak with a funding specialist." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [consented, setConsented] = useState(false);

  return (
    <Layout>
      <PageHeader eyebrow="Contact" title="Contact Bestline Business Funding" subtitle="Send us a message and a Bestline funding specialist will follow up shortly." />


      <section className="py-16 bg-gradient-soft border-b border-border">
        <div className="container-page max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Send Us a Message</h2>
          <p className="mt-3 text-muted-foreground">Fill out the form and a Bestline funding specialist will follow up shortly.</p>

          {submitted ? (
            <div className="mt-8 rounded-xl border border-border bg-background p-8 shadow-card text-center">
              <h3 className="text-xl font-semibold text-foreground">Thank you!</h3>
              <p className="mt-2 text-sm text-muted-foreground">Your message has been received. A specialist will reach out soon.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="mt-8 grid gap-5 rounded-xl border border-border bg-background p-6 md:p-8 shadow-card"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-semibold text-foreground">First Name <span className="text-red-500">*</span></span>
                  <input required type="text" name="firstName" className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </label>
                <label className="block">
                  <span className="text-sm font-semibold text-foreground">Last Name <span className="text-red-500">*</span></span>
                  <input required type="text" name="lastName" className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </label>
              </div>
              <label className="block">
                <span className="text-sm font-semibold text-foreground">Email <span className="text-red-500">*</span></span>
                <input required type="email" name="email" className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-foreground">Phone <span className="text-red-500">*</span></span>
                <input required type="tel" name="phone" className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-foreground">Leave a Message <span className="text-red-500">*</span></span>
                <textarea required name="message" rows={5} className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </label>

              <label className="flex items-start gap-3">
                <input
                  required
                  type="checkbox"
                  name="consent"
                  checked={consented}
                  onChange={(e) => setConsented(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border border-input text-primary focus:ring-ring"
                />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Consent to Contact</strong><br />
                  By checking this box, I agree to receive text messages/SMS from Bestline Business Funding regarding my inquiry, account information, customer care, document requests, funding updates, and business funding-related services. Message frequency may vary. Message and data rates may apply. Carriers are not liable for delayed or undelivered messages. Consent to receive text messages is not a condition of purchase, service, or funding approval. Text HELP for help or contact us at info@bestlinefunding.com. Reply STOP to unsubscribe. Review our <Link to="/terms" className="underline hover:text-primary">Terms &amp; Conditions</Link> and <Link to="/privacy" className="underline hover:text-primary">Privacy Policy</Link>.
                </span>
              </label>

              <button type="submit" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-deep">
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
}

