import type { Metadata, ResolvingMetadata } from "next";
import { sanityFetch } from "@/sanity/lib/fetch";
import { trainingProgramsQuery } from "@/sanity/lib/queries";
import { resolveOpenGraphImage } from "@/sanity/lib/utils";
import TrainingPage from "./client";

type Props = {
  params: Promise<{ slug: string }>;
};

export const metadata: Metadata = {
  title: "CPR & Life Skills Training | Get Certified with Expert Instructors",
  description:
    "Join our hands-on CPR and life skills training programs. Get certified, gain confidence, and be prepared to save lives in critical moments.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.mylifeskills.org/training",
    title: "CPR & Life Skills Training | Get Certified with Expert Instructors",
    description:
      "Join our hands-on CPR and life skills training programs. Get certified, gain confidence, and be prepared to save lives in critical moments.",
    siteName: "Life Skills Training Network",
    images: ["https://lifeskills.vercel.app/lifeSkillsLogo.webp"],
  },
};

export default async function Training({ params }: Props) {
  const [data] = await Promise.all([
    sanityFetch({ query: trainingProgramsQuery }),
  ]);

  return <TrainingPage courses={data} />;
}
