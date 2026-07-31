export type ProductBadge = { label: string };

export const productBadges: Record<string, ProductBadge[]> = {
  "SBA Loans": [{ label: "Up To $20M" }, { label: "Up To 25 Years" }, { label: "From 6.5%" }],
  "Term Loans": [{ label: "Up To $10M" }, { label: "Up To 10 Years" }, { label: "From 6.99%" }],
  "Business Line of Credit": [{ label: "Up To $5M" }, { label: "Up To 15 Years" }, { label: "From 8%" }],
  "Bridge Loans": [{ label: "Up To $5M" }, { label: "Up To 24 Months" }, { label: "From 15%" }],
  "Equipment Financing": [{ label: "Up To $5M" }, { label: "Up To 10 Years" }, { label: "From 6%" }],
  "Invoice Factoring": [{ label: "Up To $5M" }, { label: "Up To 90 Days" }, { label: "From 8%–30%" }],
  "Revenue-Based Financing": [{ label: "Up To $5M" }, { label: "Up To 24 Months" }, { label: "From 15%" }],
  "Working Capital Funding": [{ label: "Up To $5M" }, { label: "Up To 10 Years" }, { label: "From 9.75%–14.75%" }],
  "Micro Loans": [{ label: "Up To $50K" }, { label: "Up To 6 Months" }, { label: "From 15%" }],
  "Startup Business Funding": [{ label: "Up To $1M" }, { label: "Up To 24 Months" }, { label: "From 13%" }],
  "Commercial Real Estate Loans": [{ label: "Competitive Market Rates" }, { label: "Multiple Programs Available" }],
  "Business Debt Consolidation": [
    { label: "Up To 80% MCA Debt Reduction" },
    { label: "6–8 Month Payoff Path" },
  ],
};

export function getProductBadges(title: string): ProductBadge[] {
  return productBadges[title] ?? [];
}
