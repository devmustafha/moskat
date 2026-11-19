import { siteConfig } from "@/lib/site";

export default function HomePage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
        {siteConfig.tagline}
      </p>
      <h1 className="mt-3 max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
        {siteConfig.description}
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
        Our online store is under construction. Check back soon.
      </p>
    </section>
  );
}
