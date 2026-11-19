/** Sample departments for the homepage. Replace with real data when the catalogue exists. */
export type DepartmentIcon = "heart-pulse" | "baby" | "venus" | "bone" | "brain" | "microscope";

export type Department = {
  slug: string;
  name: string;
  icon: DepartmentIcon;
  summary: string;
  services: string[];
  onlineConsultations: boolean;
};

export const departments: Department[] = [
  {
    slug: "cardiology",
    name: "Cardiology",
    icon: "heart-pulse",
    summary: "Heart checks, diagnosis and long-term care for heart and blood pressure conditions.",
    services: ["ECG", "Echocardiography", "Hypertension clinic"],
    onlineConsultations: true,
  },
  {
    slug: "paediatrics",
    name: "Paediatrics",
    icon: "baby",
    summary: "Gentle, family-centred care for babies, children and teenagers.",
    services: ["Child wellness", "Vaccinations", "Newborn care"],
    onlineConsultations: true,
  },
  {
    slug: "womens-health",
    name: "Women’s health",
    icon: "venus",
    summary: "Obstetrics and gynaecology, from routine screening to pregnancy and birth.",
    services: ["Antenatal care", "Screening", "Fertility advice"],
    onlineConsultations: true,
  },
  {
    slug: "orthopaedics",
    name: "Orthopaedics",
    icon: "bone",
    summary: "Treatment and rehabilitation for bones, joints, muscles and sports injuries.",
    services: ["Joint care", "Fracture clinic", "Physiotherapy"],
    onlineConsultations: false,
  },
  {
    slug: "neurology",
    name: "Neurology",
    icon: "brain",
    summary: "Specialist assessment and care for headaches, epilepsy, stroke and nerve conditions.",
    services: ["Headache clinic", "EEG", "Stroke follow-up"],
    onlineConsultations: true,
  },
  {
    slug: "diagnostics",
    name: "Diagnostics & imaging",
    icon: "microscope",
    summary: "Fast, accurate laboratory tests and imaging, with results shared with your doctor.",
    services: ["Blood tests", "Ultrasound", "X-ray & MRI"],
    onlineConsultations: false,
  },
];
