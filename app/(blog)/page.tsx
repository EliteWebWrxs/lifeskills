import type { Metadata } from "next";
import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import Stats from "@/components/sections/stats";
import CTA from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Life Skills & CPR Training | Professional Certification Courses",
  description:
    "Expert life skills and CPR training courses. Get certified with hands-on instruction from qualified professionals. Emergency response training that saves lives.",
  keywords:
    "CPR training, life skills, emergency response, first aid, certification, safety training",
  openGraph: {
    title: "Life Skills & CPR Training | Professional Certification",
    description:
      "Expert life skills and CPR training courses. Get certified with hands-on instruction.",
    type: "website",
    url: "https://yoursite.com",
  },
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <Stats />
      <CTA />
    </main>
  );
}
