import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight text-teal-700">
          {siteConfig.name}
        </Link>
        <span className="text-sm text-slate-500">{siteConfig.tagline}</span>
      </div>
    </header>
  );
}
