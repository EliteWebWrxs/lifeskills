"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Heart, Clock } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "2,500+",
    label: "Students Trained",
    description: "Professionals and individuals certified",
    color: "text-blue-600",
  },
  {
    icon: Award,
    value: "15+",
    label: "Years Experience",
    description: "Decades of training expertise",
    color: "text-purple-600",
  },
  {
    icon: Heart,
    value: "10,000+",
    label: "Lives Impacted",
    description: "Through our trained graduates",
    color: "text-red-600",
  },
  {
    icon: Clock,
    value: "5,000+",
    label: "Training Hours",
    description: "Delivered across all programs",
    color: "text-green-600",
  },
];

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Our Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Making a difference through professional training and life skills
            development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <stat.icon
                    className={`h-12 w-12 ${stat.color} mx-auto mb-4`}
                  />
                  <motion.div
                    className="text-4xl font-bold text-gray-800 mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-lg font-semibold text-gray-700 mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
