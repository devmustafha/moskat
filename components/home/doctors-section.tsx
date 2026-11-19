import { ButtonLink } from "@/components/ui/button";
import { Section } from "@/components/ui/container";
import { Grid } from "@/components/ui/grid";
import { Photo } from "@/components/ui/photo";
import { SectionHeading } from "@/components/ui/section-heading";
import { doctors } from "@/lib/data/doctors";
import { formatPrice } from "@/lib/format";

export function DoctorsSection() {
  return (
    <Section id="doctors" aria-labelledby="doctors-title">
      <SectionHeading
        id="doctors-title"
        eyebrow="Video consultations"
        title={
          <>
            Meet the people <span className="text-ink-subtle">behind your care.</span>
          </>
        }
        description="Choose a specialist and book a video visit. Every fee and visit length is shown up front, before you pay."
        action={
          <ButtonLink href="/#how-it-works" variant="outline">
            How it works
          </ButtonLink>
        }
      />

      <Grid cols={4} className="mt-12 grid-cols-2 gap-x-4 gap-y-12 md:mt-16 md:gap-x-5">
        {doctors.map((doctor) => (
          <article key={doctor.slug} className="group flex flex-col">
            <div className="aspect-[4/5] overflow-hidden rounded-card bg-surface">
              <Photo
                image={doctor.photo}
                focus="faces"
                sizes="(min-width: 75rem) 22vw, 45vw"
                className="transition-transform duration-500 ease-out-soft group-hover:scale-[1.03]"
              />
            </div>

            <h3 className="mt-5 text-h4">{doctor.name}</h3>
            <p className="mt-1 text-small text-ink-muted">{doctor.specialty}</p>

            <dl className="mt-4 space-y-1 text-caption">
              <div className="flex flex-wrap gap-x-2">
                <dt className="text-ink-muted">Experience</dt>
                <dd>{doctor.yearsExperience} years</dd>
              </div>
              <div className="flex flex-wrap gap-x-2">
                <dt className="text-ink-muted">Speaks</dt>
                <dd>{doctor.languages.join(", ")}</dd>
              </div>
            </dl>

            <div className="mt-auto pt-5">
              <p className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 border-t pt-4">
                <span className="text-h3 font-normal">{formatPrice(doctor.consultationFee)}</span>
                <span className="text-caption text-ink-muted">{doctor.consultationMinutes}-min video visit</span>
              </p>
            </div>
          </article>
        ))}
      </Grid>
    </Section>
  );
}
