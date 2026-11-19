import { Section } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { siteConfig } from "@/lib/site";

export default function HomePage() {
  return (
    <Section>
      <Eyebrow>{siteConfig.tagline}</Eyebrow>
      <h1 className="mt-6 max-w-4xl text-h1">
        Medical supplies, <span className="text-ink-subtle">delivered with care.</span>
      </h1>
      <p className="mt-6 max-w-copy text-lead text-ink-muted">
        Our online store is under construction. Check back soon.
      </p>
    </Section>
  );
}
