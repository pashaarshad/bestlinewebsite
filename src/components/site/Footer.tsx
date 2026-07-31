import { Link } from "@tanstack/react-router";
import logo from "@/assets/bestline-logo.png";

const footerProducts = [
  "SBA Loans",
  "Term Loans",
  "Business Line of Credit",
  "Bridge Loans",
  "Equipment Financing",
  "Invoice Factoring",
  "Revenue-Based Financing",
  "Working Capital Funding",
  "Micro Loans",
  "Startup Business Funding",
  "Commercial Real Estate Loans",
  "Business Debt Consolidation",
];

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");


export function Footer() {
  return (
    <footer className="border-t border-border bg-primary-deep text-primary-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.1fr_1fr_1.4fr] items-start">
        <div className="flex flex-col items-center">
          <img
            src={logo}
            alt="Bestline Business Funding"
            width={1280}
            height={512}
            loading="lazy"
            className="h-40 md:h-48 w-auto"
          />
          <div className="relative z-10 mt-0 text-center text-base md:text-lg font-bold leading-snug text-primary-foreground max-w-xs">
            <p>Business Funding.</p>
            <p>Long-Term Support.</p>
            <p>Growth-Focused Solutions.</p>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/how-it-works" className="hover:text-white">How It Works</Link></li>
            <li><Link to="/why-bestline" className="hover:text-white">Why Bestline</Link></li>
            <li><Link to="/partner" className="hover:text-white">Partner With Us</Link></li>
            <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider">Funding Products</h4>
          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-primary-foreground/75">
            {footerProducts.map((p) => (
              <li key={p}>
                <Link to="/funding-products" hash={slugify(p)} className="hover:text-white">{p}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-3 py-6 md:flex-row md:items-center md:justify-between text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Bestline Business Funding. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
