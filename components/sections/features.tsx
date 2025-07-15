"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Users, Award, Clock, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "CPR Certification",
    description:
      "Certified CPR training with hands-on practice and real-world scenarios.",
    color: "text-red-500",
    bgColor: "bg-red-50",
  },
  {
    icon: Shield,
    title: "First Aid Training",
    description:
      "Comprehensive first aid skills including wound care, emergency assessment, sudden illness and crisis response.",
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: Users,
    title: "Life Skills Development",
    description:
      "Essential life competencies including communication, problem-solving, and personal development.",
    color: "text-purple-500",
    bgColor: "bg-purple-50",
  },
  {
    icon: Award,
    title: "Professional Certification",
    description:
      "Receive industry-recognized certifications upon successful completion of training programs.",
    color: "text-green-500",
    bgColor: "bg-green-50",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description:
      "Choose from various training schedules including weekends, evenings, and intensive workshops.",
    color: "text-orange-500",
    bgColor: "bg-orange-50",
  },
  {
    icon: CheckCircle,
    title: "Group Training",
    description:
      "Engage in dynamic group sessions that foster collaboration, shared learning, and community support.",
    color: "text-teal-500",
    bgColor: "bg-teal-50",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Why Choose Our Training?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive, professional training programs designed to give you
            the skills and confidence you need
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${feature.bgColor} mb-6`}
                  >
                    <feature.icon className={`h-8 w-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
