/**
 * Central site metadata, contact details and opening hours.
 * Contact details below are placeholders (555-01xx numbers and a .example domain are reserved
 * for fiction); replace them with the hospital's real details before launch.
 */
export const siteConfig = {
  name: "Moskat",
  tagline: "Hospital & online care",
  description: "Specialist hospital care in person and online, from a team that takes time to listen.",
  locale: "en-US",
  currency: "USD",

  /** Where every "Book an online consultation" call to action points until the booking flow exists. */
  bookingHref: "/#doctors",

  contact: {
    phone: { label: "+1 (555) 010-0123", href: "tel:+15550100123" },
    emergencyPhone: { label: "+1 (555) 010-0100", href: "tel:+15550100100" },
    email: { label: "hello@moskat.example", href: "mailto:hello@moskat.example" },
    address: ["120 Riverside Avenue", "Springfield, ST 01234"],
    directionsHref: "https://www.google.com/maps/search/?api=1&query=120+Riverside+Avenue+Springfield",
  },

  hours: [
    { service: "Emergency department", times: [{ days: "Every day", hours: "Open 24 hours" }], emergency: true },
    {
      service: "Outpatient clinics",
      times: [
        { days: "Monday – Friday", hours: "8:00 am – 6:00 pm" },
        { days: "Saturday", hours: "9:00 am – 2:00 pm" },
        { days: "Sunday", hours: "Closed" },
      ],
    },
    { service: "Online consultations", times: [{ days: "Every day", hours: "7:00 am – 10:00 pm" }] },
  ],

  nav: [
    { label: "Departments", href: "/#departments" },
    { label: "Doctors", href: "/#doctors" },
    { label: "How it works", href: "/#how-it-works" },
    { label: "Visit us", href: "/#visit" },
  ],
} as const;
