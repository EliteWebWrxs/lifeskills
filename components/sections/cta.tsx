"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-48 h-48 bg-white/5 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-white max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Save Lives?
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
            Join thousands of individuals who have gained life-saving skills and
            essential competencies. Start your training journey today.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link href="/training">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 text-lg"
              >
                View Training Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://calendly.com/d/cwqg-bb6-9st">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-blue-600 hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 text-lg"
              >
                Schedule Consultation
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
