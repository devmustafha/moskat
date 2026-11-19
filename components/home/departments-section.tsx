import { Baby, Bone, Brain, HeartPulse, type LucideIcon, Microscope, Venus, Video } from "lucide-react";
import { Section } from "@/components/ui/container";
import { IconBadge } from "@/components/ui/icon-badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { type DepartmentIcon, departments } from "@/lib/data/departments";

const icons: Record<DepartmentIcon, LucideIcon> = {
  "heart-pulse": HeartPulse,
  baby: Baby,
  venus: Venus,
  bone: Bone,
  brain: Brain,
  microscope: Microscope,
};

export function DepartmentsSection() {
  return (
    <Section id="departments" tone="surface" aria-labelledby="departments-title">
      <SectionHeading
        id="departments-title"
        title="Departments and services"
        description="From a first check-up to complex treatment, our departments work together so you don’t have to repeat your story."
      />

      {/* A directory rather than a card grid: easier to scan, and each row reads as one department. */}
      <ul className="mt-12 grid border-t border-line-strong md:mt-16 lg:grid-cols-2 lg:gap-x-16">
        {departments.map((department) => (
          <li key={department.slug} className="flex gap-5 border-b border-line-strong py-7 md:py-8">
            <IconBadge icon={icons[department.icon]} size="lg" className="bg-canvas" />
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                <h3 className="text-h3">{department.name}</h3>
                {department.onlineConsultations && (
                  <p className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-2.5 py-1 text-caption font-medium text-brand-700">
                    <Video aria-hidden="true" className="size-3.5" strokeWidth={2} />
                    Video visits
                  </p>
                )}
              </div>
              <p className="mt-2 max-w-md text-small text-ink-muted">{department.summary}</p>
              <p className="mt-3 text-caption text-ink">
                <span className="sr-only">Services: </span>
                {department.services.join(" · ")}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
