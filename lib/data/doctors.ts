import type { ImageAsset } from "@/lib/images";

/** Sample doctors for the homepage. Names are fictional; photos are from Unsplash. */
export type Doctor = {
  slug: string;
  name: string;
  specialty: string;
  department: string;
  yearsExperience: number;
  languages: string[];
  /** Online consultation fee in whole units of the site currency. */
  consultationFee: number;
  /** Length of a video consultation in minutes. */
  consultationMinutes: number;
  photo: ImageAsset;
};

export const doctors: Doctor[] = [
  {
    slug: "amara-okafor",
    name: "Dr. Amara Okafor",
    specialty: "Obstetrician & gynaecologist",
    department: "womens-health",
    yearsExperience: 14,
    languages: ["English", "Igbo"],
    consultationFee: 45,
    consultationMinutes: 30,
    photo: {
      src: "https://images.unsplash.com/photo-1643297654416-05795d62e39c",
      width: 800,
      height: 1000,
      alt: "Portrait of Dr. Amara Okafor smiling, wearing a white coat and holding a stethoscope",
      credit: "Eben Kassaye on Unsplash",
    },
  },
  {
    slug: "arjun-mehta",
    name: "Dr. Arjun Mehta",
    specialty: "Consultant cardiologist",
    department: "cardiology",
    yearsExperience: 12,
    languages: ["English", "Hindi"],
    consultationFee: 55,
    consultationMinutes: 30,
    photo: {
      src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d",
      width: 800,
      height: 1000,
      alt: "Portrait of Dr. Arjun Mehta in a white coat with a stethoscope, arms crossed",
      credit: "Usman Yousaf on Unsplash",
    },
  },
  {
    slug: "elena-ruiz",
    name: "Dr. Elena Ruiz",
    specialty: "Paediatrician",
    department: "paediatrics",
    yearsExperience: 9,
    languages: ["English", "Spanish"],
    consultationFee: 40,
    consultationMinutes: 20,
    photo: {
      src: "https://images.unsplash.com/photo-1594824476967-48c8b964273f",
      width: 800,
      height: 1000,
      alt: "Portrait of Dr. Elena Ruiz smiling, wearing teal medical scrubs",
      credit: "Ocho Artex Media on Unsplash",
    },
  },
  {
    slug: "daniel-costa",
    name: "Dr. Daniel Costa",
    specialty: "Orthopaedic & sports medicine",
    department: "orthopaedics",
    yearsExperience: 11,
    languages: ["English", "Portuguese"],
    consultationFee: 50,
    consultationMinutes: 20,
    photo: {
      src: "https://images.unsplash.com/photo-1622253692010-333f2da6031d",
      width: 800,
      height: 1000,
      alt: "Portrait of Dr. Daniel Costa smiling, wearing blue scrubs with a stethoscope",
      credit: "Bruno Rodrigues on Unsplash",
    },
  },
];

/** Lowest online consultation fee, used in marketing copy ("from $40"). */
export const lowestConsultationFee = Math.min(...doctors.map((doctor) => doctor.consultationFee));

/** Shortest video consultation, used in marketing copy ("20 min"). */
export const shortestConsultation = Math.min(...doctors.map((doctor) => doctor.consultationMinutes));
