import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";
import { MobileMenu } from "./mobile-menu";

export function SiteHeader() {
  return (
    <header className="relative bg-canvas">
      <Container size="wide" className="flex h-18 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5 text-h4 font-medium">
          <span aria-hidden="true" className="grid size-8 place-items-center rounded-full bg-brand-600">
            <span className="size-2.5 rounded-full bg-white" />
          </span>
          {siteConfig.name}
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1 rounded-full bg-surface p-1">
            {siteConfig.nav.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="nav-link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink href={siteConfig.bookingHref} size="sm" className="hidden sm:inline-flex">
            Book an online consultation
          </ButtonLink>
          <MobileMenu links={siteConfig.nav} bookingHref={siteConfig.bookingHref} />
        </div>
      </Container>
    </header>
  );
}
