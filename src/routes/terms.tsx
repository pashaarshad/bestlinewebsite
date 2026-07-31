import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/site/Layout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Bestline Business Funding" },
      { name: "description", content: "Bestline Business Funding terms and conditions." },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Legal"
        title="Terms & Conditions"
        subtitle="This page is maintained by Bestline Business Funding to describe the terms governing use of this website."
      />
      <section className="py-16 bg-background">
        <div className="container-page max-w-3xl text-foreground/85 space-y-6 leading-relaxed">
          <h2 className="text-2xl font-bold text-foreground">General Acceptance</h2>
          <p>
            Any application submitted electronically shall have the same force and effect as if the application bore in inked original signature(s). The above information, together with any accompanying financial statements, schedules, or other materials, is submitted for the purpose of obtaining credit and is warranted to be true, correct, and complete.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6">US Patriot Act</h3>
          <p>
            To help the government fight the funding of terrorism and money laundering activities, Federal law requires all financial institutions to obtain, verify, and record information that identifies each person and business that seeks a business loan. What this means for you: When you apply for a loan, we will ask for your business name, address, and Tax Identification Number. We will also ask for your name, address, date of birth, and other information that will allow us to identify you. We may also ask to see your driver’s license or other identifying documents.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6">For Loan/Merchant Services</h3>
          <p>
            The Merchant and Owner(s)/Officer(s) identified in the application (individually, an “Applicant”) each represents, acknowledges and agrees that (1) all information and documents provided to Bestline Business Funding including credit card processor statements are true, accurate and complete, (2) Applicant will immediately notify Bestline Business Funding of any change in such information or financial condition, (3) Applicant authorizes Bestline Business Funding to disclose all information and documents that Bestline Business Funding may obtain including credit reports to other persons or entities (collectively, “Assignees”) that may be involved with or acquire commercial loans having daily repayment features and/or Merchant Cash Advance transactions, including without limitation the application therefor (collectively, “Transactions”) and each Assignee is authorized to use such information and documents, and share such information and documents with other Assignees, in connection with potential Transactions, (4) each Assignee will rely upon the accuracy and completeness of such information and documents, (5) Bestline Business Funding, Assignees, and each of their representatives, successors, assigns and designees (collectively, “Recipients”) are authorized to request and receive any investigative reports, credit reports, statements from creditors or financial institutions, verification of information, or any other information that a Recipient deems necessary, (6) Applicant waives and releases any claims against Recipients and any information-providers arising from any act or omission relating to the requesting, receiving or release of information, and (7) each Owner/Officer represents that he or she is authorized to sign this form on behalf of Merchant. (8) I consent to receive direct mail, faxes, text messages, and e-mails sent by Bestline Business Funding and its affiliates for the purposes of transmitting account updates, requests for information and notices, and (9) this request is for business and not for consumer purposes.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6">For Equipment Services</h3>
          <p>
            I hereby certify: (1) the information provided is true and correct, (2) you are hereby authorized to investigate all bank, credit, and trade references, and said references are hereby authorized to release any requested information to you or your nominee, (3) such authorization shall extend to obtaining personal credit profile in considering this application and subsequently for the purposes of update, renewal or extension of such credit or additional credit and for reviewing or collecting the resulting account, (4) this information may be transmitted by us to you and by you to underwriter(s) for the purpose of granting me credit, either electronically or manually, and that by submitting this application, I take full responsibility for transmission thereof, (5) I am over 18 years of age, (6) I acknowledge my rights under the Fair Credit Reporting Act, (7) I consent to receive direct mail, faxes, text messages, and e-mails sent by Bestline Business Funding and its affiliates for the purposes of transmitting account updates, requests for information and notices, and (8) this request is for business and not for consumer purposes.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6">SMS/Text Messaging Program</h3>
          <p>
            By opting in, you agree to receive SMS/text messages from Bestline Business Funding related to your inquiry, account information, customer care, document requests, funding updates, business funding options, services, and information relevant to your request.
          </p>
          <p>
            Message frequency may vary depending on your engagement with our services.
          </p>
          <p>
            Message and Data Rates: Standard message and data rates may apply depending on your mobile carrier plan.
          </p>
          <p>
            Carriers are not liable for delayed or undelivered messages.
          </p>
          <p>
            <span className="font-semibold text-foreground">Opt-Out:</span> You can opt out of receiving text messages at any time by replying STOP to any message or by contacting Bestline Business Funding directly. After opting out, you may receive a final confirmation message.
          </p>
          <p>
            <span className="font-semibold text-foreground">Help:</span> For help, reply HELP to any message or contact our support team at info@bestlinefunding.com.
          </p>
          <p>
            <span className="font-semibold text-foreground">Consent:</span> Your consent to receive text messages is not a condition of any purchase, service, or funding approval.
          </p>
          <p>
            <span className="font-semibold text-foreground">Privacy:</span> We value your privacy. For more information on how we collect, use, and protect your information, please review our Privacy Policy, including the Mobile Information and SMS Consent Privacy section.
          </p>
          <p>
            By participating in our SMS/text messaging program, you agree to these terms as part of our Terms & Conditions.
          </p>

          <p className="mt-8 text-sm text-muted-foreground">
            For questions about these Terms & Conditions, contact{" "}
            <a className="text-primary font-semibold" href="mailto:info@bestlinefunding.com">info@bestlinefunding.com</a>.
          </p>
        </div>
      </section>
    </Layout>
  );
}
