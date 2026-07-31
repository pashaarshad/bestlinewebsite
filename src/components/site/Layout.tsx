import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-gradient-soft border-b border-border">
      <div className="container-page py-16 md:py-20 max-w-4xl">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">{eyebrow}</p>
        )}
        <h1 className="mt-3 text-4xl md:text-5xl font-bold text-foreground">{title}</h1>
        <div aria-hidden className="mt-4 h-1 w-16 rounded-full bg-[#A62D3D]" />
        {subtitle && (
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
