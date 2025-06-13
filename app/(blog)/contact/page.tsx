import ContactPage from "./contactClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Life Skills Training Network - Get in Touch Today",
  description:
    "Have questions or ready to get started? Contact us for CPR training, certifications, or general inquiries. We're here to help you make a difference.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.mylifeskills.org/contact",
    title: "Contact Us | Life Skills Training Network - Get in Touch Today",
    description:
      "Have questions or ready to get started? Contact us for CPR training, certifications, or general inquiries. We're here to help you make a difference.",
    siteName: "Life Skills Training Network",
    images: ["https://lifeskills.vercel.app/lifeSkillsLogo.webp"],
  },
};

export default async function Contact() {
  return <ContactPage />;
}
