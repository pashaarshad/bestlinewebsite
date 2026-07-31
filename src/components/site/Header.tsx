import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/bestline-logo-header.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/funding-products", label: "Funding Products" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/why-bestline", label: "Why Bestline" },
  { to: "/partner", label: "Partner With Us" },
  { to: "/faq", label: "FAQ" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b border-[#E5EAF0] bg-white transition-shadow",
        scrolled ? "shadow-[0_2px_8px_rgba(0,0,0,0.04)]" : "",
      ].join(" ")}
    >
      <div className="container-page flex h-20 md:h-24 items-center justify-between gap-4">
        <Link
          to="/"
          className="flex items-center gap-2 shrink-0"
          aria-label="Bestline Business Funding home"
        >
          <img
            src={logo}
            alt="Bestline Business Funding"
            width={1280}
            height={512}
            className="h-14 md:h-16 w-auto"
          />
        </Link>
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[18px] font-semibold text-foreground/85">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="whitespace-nowrap transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center justify-center rounded-md bg-primary px-4 py-2.5 text-[14px] font-semibold text-primary-foreground shadow-card transition hover:bg-primary-deep"
          >
            Contact Us
          </Link>

          <button
            className="lg:hidden inline-flex items-center justify-center rounded-md border border-border p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-[#E5EAF0] bg-white">
          <nav className="container-page flex flex-col py-4 gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-muted hover:text-primary"
                activeProps={{ className: "text-primary bg-muted" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
