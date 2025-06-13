import type { Metadata, ResolvingMetadata } from "next";
import AboutPage from "./client";

type Props = {
  params: Promise<{ slug: string }>;
};

export const metadata: Metadata = {
  title: "About Us | Dedicated to Life-Saving Skills and Community Empowerment",
  description:
    "Learn about our mission to equip everyday individuals with CPR and life-saving skills to build safer, stronger, and more prepared communities. ",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.mylifeskills.org/about-us",
    title:
      "About Us | Dedicated to Life-Saving Skills and Community Empowerment",
    description:
      "Learn about our mission to equip everyday individuals with CPR and life-saving skills to build safer, stronger, and more prepared communities. ",
    siteName: "Life Skills Training Network",
    images: ["https://lifeskills.vercel.app/lifeSkillsLogo.webp"],
  },
};

export default async function About({ params }: Props) {
  return <AboutPage />;
}
