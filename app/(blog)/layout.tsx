import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "LifeSkills CPR | Professional Training & Certification",
    template: "%s | LifeSkills CPR",
  },
  description:
    "Professional life skills and CPR training courses. Get certified with expert instruction in emergency response, first aid, and essential life competencies.",
  keywords:
    "CPR training, first aid, life skills, emergency response, certification, safety training, professional development",
  authors: [{ name: "LifeSkills CPR Training Center" }],
  creator: "LifeSkills CPR",
  publisher: "LifeSkills CPR",
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
    title: "LifeSkills CPR | Professional Training & Certification",
    description:
      "Professional life skills and CPR training courses. Get certified with expert instruction.",
    siteName: "LifeSkills CPR",
  },
  twitter: {
    card: "summary_large_image",
    title: "LifeSkills CPR | Professional Training & Certification",
    description:
      "Professional life skills and CPR training courses. Get certified with expert instruction.",
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
