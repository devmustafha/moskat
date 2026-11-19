import Link from "next/link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="bg-canvas">
      <Container size="wide" className="flex h-18 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2.5 text-h4 font-medium">
          <span aria-hidden="true" className="grid size-8 place-items-center rounded-full bg-brand-600">
            <span className="size-2.5 rounded-full bg-white" />
          </span>
          {siteConfig.name}
        </Link>
        <p className="hidden text-small text-ink-muted md:block">{siteConfig.tagline}</p>
      </Container>
    </header>
  );
}
