"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
import { Heart, Award, Users, Clock } from "lucide-react";
import Image from "next/image";

const certifications = [
  "American Heart Association CPR Instructor",
  // "Emergency Medical Technician (EMT)",
  "First Aid Certified Instructor",
  "Life Skills Development Specialist",
  "Workplace Safety Trainer",
];

const achievements = [
  { icon: Users, label: "Students Trained", value: "2,500+" },
  { icon: Award, label: "Years Experience", value: "15+" },
  { icon: Heart, label: "Lives Impacted", value: "10,000+" },
  { icon: Clock, label: "Training Hours", value: "5,000+" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h1
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-dangerRed to-orange-400 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              About Our Mission
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Empowering individuals with life saving skills and essential life
              competencies
            </motion.p>
          </div>

          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid md:grid-cols-2 gap-12 items-center mb-16"
          >
            <div>
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="profile pic"
                width={400}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Meet Your Instructor
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas ut faucibus nisl. Morbi semper arcu leo, ac bibendum
                ligula sodales non. Maecenas at tellus ac velit pretium
                lobortis. Praesent pretium purus eget molestie lacinia. Donec
                eget justo leo. Ut dictum felis nisl, sit amet mollis ligula
                fringilla laoreet. Nulla dignissim sapien nec nibh tempus
                tempus.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Morbi metus urna, semper vel accumsan et, pellentesque suscipit
                tellus. Etiam vehicula ex varius tempor semper. Praesent posuere
                leo mi, vitae porttitor mauris aliquet quis. Donec ut vehicula
                sem, viverra commodo nisi. Etiam orci tellus, venenatis vel ante
                et, lobortis consectetur mi. In ultrices consequat posuere. Nunc
                ultrices sapien sed quam ultrices gravida. Aenean ullamcorper
                placerat volutpat.
              </p>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-800">
                  Qualifications
                </h3>
                <div className="flex flex-col gap-2">
                  {certifications.map((cert, index) => (
                    <p key={index} className="text-sm">
                      {cert}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-0">
                  <achievement.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-800 mb-1">
                    {achievement.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {achievement.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Our Mission
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-4">
                  Life-Saving Skills
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We provide comprehensive CPR and first aid training that meets
                  the highest standards. Our courses are designed to give you
                  the confidence and competence to respond effectively in
                  emergency situations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-dangerRed mb-4">
                  Essential Life Skills
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Beyond emergency response, we teach practical life skills that
                  enhance personal development, communication, problem-solving,
                  and overall life competency for success in all areas of life.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Certification Importance Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="bg-white rounded-2xl p-8 shadow-xl mt-16"
          >
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              About Our Certifications
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed text-base">
              <p>
                Our certifications are crucial for ensuring that we perform
                effective and reliable aid during critical situations.
              </p>

              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Validate that we possess the necessary knowledge, skills, and
                  abilities to handle situations effectively.
                </li>
                <li>
                  A commitment to professional development and compliance with
                  industry best practices.
                </li>
                <li>Build trust and confidence in our capabilities.</li>
                <li>
                  Show that we meet established standards and are prepared to
                  respond to emergencies.
                </li>
                <li>
                  Enhance our ability to make sound decisions, coordinate
                  resources, and provide timely assistance.
                </li>
                <li>Create standardized responses that are more effective.</li>
              </ul>

              <p>
                In essence, emergency response certifications are vital for
                ensuring that both our team and you are prepared and protected
                during critical events.
              </p>

              <h3 className="text-xl font-semibold text-blue-700 mt-8">
                We are certified to perform:
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Adult and Pediatric First Aid/CPR/AED Services & Instruction
                </li>
                <li>Adult Mental Health First Aid Services</li>
                <li>Applied Suicide Intervention Skills Training (ASIST)</li>
                <li>Bloodborne Pathogen Support Services & Instruction</li>
                <li>
                  Recognizing Opioid Overdose and Naloxone Administration
                  Support Services & Instruction
                </li>
                <li>Life Breakthrough Coaching Services</li>
              </ul>

              <p className="font-medium mt-4 text-green-700">
                Certifications valid throughout the United States of America.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
