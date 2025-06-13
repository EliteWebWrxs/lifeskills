"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Training", href: "/training" },
    { name: "Blog", href: "/posts" },
  ],
  training: [
    { name: "CPR Certification", href: "/training#cpr" },
    // { name: "First Aid", href: "/training#first-aid" },
    // { name: "Life Skills", href: "/training#life-skills" },
    // { name: "Workplace Safety", href: "/training#workplace" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    // { name: "Refund Policy", href: "/refund" },
  ],
  social: [
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "LinkedIn", href: "#", icon: Linkedin },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image
                src="./lifeSkillsLogo.webp"
                alt="Life Skills Training Network"
                width={300}
                height={300}
                className="h-32 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Professional life skills and CPR training to empower individuals
              with life-saving knowledge and essential competencies.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="h-4 w-4" />
                <a href="tel:8134330688">(813) 433-0688</a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@mylifeskills.org">
                  info@lifeskillscpr.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>
                  13194 U. S. Highway 301 S Suite 170, Riverview, FL 33578
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Training Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Training Programs</h3>
            <ul className="space-y-3">
              {navigation.training.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for training tips and updates.
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-dangerRed to-orange-400 hover:from-dangerRed hover:to-orange-700 rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Life Skills Training Network. All
              rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <item.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm">
              {navigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
