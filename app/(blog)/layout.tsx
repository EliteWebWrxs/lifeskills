import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Life Skills Training Network | Professional Training & Certification",
  description:
    "Master life saving skills with professional CPR training. Build confidence and competence to act when it matters most.",
  keywords:
    "CPR training, first aid, life skills, emergency response, certification, safety training, professional development",
  authors: [{ name: "Life Skills Training Network" }],
  creator: "Life Skills Training Network",
  publisher: "Life Skills Training Network",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.mylifeskills.org",
    title:
      "Life Skills Training Network | Professional Training & Certification",
    description:
      "Master life saving skills with professional CPR training. Build confidence and competence to act when it matters most.",
    siteName: "Life Skills Training Network",
    images: ["https://lifeskills.vercel.app/lifeSkillsLogo.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Life Skills Training Network | Professional Training & Certification",
    description:
      "Master life saving skills with professional CPR training. Build confidence and competence to act when it matters most.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="pt-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
