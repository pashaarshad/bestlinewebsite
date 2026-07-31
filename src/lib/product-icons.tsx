import {
  TrendingUp,
  Wallet,
  Landmark,
  RefreshCw,
  CalendarClock,
  Cog,
  FileText,
  Building2,
  Rocket,
  GitMerge,
  Coins,
  Layers,
  type LucideIcon,
} from "lucide-react";

export const productIcons: Record<string, LucideIcon> = {
  "Revenue-Based Financing": TrendingUp,
  "Working Capital Funding": Wallet,
  "SBA Loans": Landmark,
  "Business Line of Credit": RefreshCw,
  "Term Loans": CalendarClock,
  "Equipment Financing": Cog,
  "Invoice Factoring": FileText,
  "Commercial Real Estate Loans": Building2,
  "Startup Business Funding": Rocket,
  "Bridge Loans": GitMerge,
  "Micro Loans": Coins,
  "Business Debt Consolidation": Layers,
};

export function getProductIcon(title: string): LucideIcon {
  return productIcons[title] ?? TrendingUp;
}
