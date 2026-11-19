import { siteConfig } from "@/lib/site";

const currencyFormatter = new Intl.NumberFormat(siteConfig.locale, {
  style: "currency",
  currency: siteConfig.currency,
  maximumFractionDigits: 0,
});

/** Format a whole-unit amount in the site currency, e.g. 45 → "$45". */
export function formatPrice(amount: number) {
  return currencyFormatter.format(amount);
}
