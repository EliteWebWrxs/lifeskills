"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// const courses = [
//   {
//     id: 1,
//     title: "CPR & AED Certification",
//     description:
//       "Learn life-saving CPR techniques and automated external defibrillator use",
//     duration: "4 hours",
//     price: "$75",
//     level: "Beginner",
//     features: [
//       "Hands-on practice",
//       "AHA certification",
//       "Adult & child CPR",
//       "AED training",
//     ],
//     icon: Heart,
//     color: "text-red-500",
//   },
//   {
//     id: 2,
//     title: "First Aid Essentials",
//     description: "Comprehensive first aid training for common emergencies",
//     duration: "6 hours",
//     price: "$95",
//     level: "Beginner",
//     features: [
//       "Wound care",
//       "Choking response",
//       "Shock treatment",
//       "Emergency assessment",
//     ],
//     icon: Shield,
//     color: "text-blue-500",
//   },
//   {
//     id: 3,
//     title: "Workplace Safety Training",
//     description: "Specialized training for workplace emergency response",
//     duration: "8 hours",
//     price: "$150",
//     level: "Intermediate",
//     features: [
//       "OSHA compliance",
//       "Team coordination",
//       "Incident reporting",
//       "Risk assessment",
//     ],
//     icon: Users,
//     color: "text-green-500",
//   },
//   {
//     id: 4,
//     title: "Life Skills Development",
//     description: "Essential skills for personal and professional success",
//     duration: "12 hours",
//     price: "$200",
//     level: "All levels",
//     features: [
//       "Communication skills",
//       "Problem solving",
//       "Time management",
//       "Goal setting",
//     ],
//     icon: Star,
//     color: "text-purple-500",
//   },
// ];

const benefits = [
  "Certified instruction from qualified professionals",
  "Hands-on practice with real scenarios",
  "Small class sizes for personalized attention",
  "Flexible scheduling options",
  "Certification upon completion",
  "Ongoing support and resources",
];

export default function TrainingPage({ courses }: { courses: any }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-dangerRed to-orange-400 bg-clip-text text-transparent mb-6 pb-2">
            Training Programs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our first aid and safety courses empower you with the skills to
            handle emergencies with confidence. From treating minor injuries to
            responding to life-threatening situations, our training programs
            provide the knowledge and practical experience you need to make a
            difference. Select one of the courses listed below to register!
          </p>
        </motion.div>

        {/* Course Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {courses.map((course: any, index: any) => (
            <motion.div
              key={course._id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <div className="relative w-full aspect-[3/2]">
                  {" "}
                  {/* 3:2 example */}
                  <Image
                    src={course.imageUrl}
                    alt={course.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline">{course.level}</Badge>
                  </div>
                  <CardTitle className="text-2xl mb-2">
                    {course.title}
                  </CardTitle>
                  <p className="text-gray-600">{course.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600">
                          {course.duration}
                        </span>
                      </div>
                      <div className="text-2xl font-bold text-blue-600">
                        {course.price}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {course.features.map((feature: any, idx: any) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    asChild
                    className="w-full bg-gradient-to-l from-dangerRed to-orange-400 hover:from-dangerRed hover:to-orange-700"
                  >
                    <Link href={course.link}>Enroll Now</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-xl"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Why Choose Our Training?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today to schedule your training or learn more about our
            programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-dangerRed to-orange-400 hover:from-dangerRed hover:to-orange-700"
            >
              <Link href="https://calendly.com/d/cwqg-bb6-9st">
                Schedule Training
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
