"use client";

import type React from "react";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Calendar,
  Users,
  Heart,
  Shield,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: "(813) 433-0688",
    description: "Call us for immediate assistance",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Mail,
    title: "Email",
    details: "info@mylifeskills.org",
    description: "Send us your questions anytime",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: MapPin,
    title: "Location",
    details: "13194 U. S. Highway 301 S Suite 170",
    description: "Riverview, FL 33578",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: Clock,
    title: "Hours",
    details: "Mon-Fri: 8AM-6PM",
    description: "Sat: 9AM-4PM, Sun: Closed",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
];

const inquiryTypes = [
  { value: "general", label: "General Inquiry", icon: MessageCircle },
  { value: "training", label: "Training Information", icon: Heart },
  { value: "certification", label: "Certification Questions", icon: Shield },
  { value: "group", label: "Group Training", icon: Users },
  { value: "schedule", label: "Schedule Consultation", icon: Calendar },
];

const faqs = [
  {
    question: "How long does CPR certification last?",
    answer:
      "CPR certification is valid for 2 years from the date of completion. We offer convenient recertification courses.",
  },
  {
    question: "Do you offer group training discounts?",
    answer:
      "Yes! We provide special pricing for groups of 5 or more participants. Contact us for a custom quote.",
  },
  {
    question: "What should I bring to training?",
    answer:
      "Just bring yourself and comfortable clothing. All training materials and equipment are provided.",
  },
  {
    question: "Can I get certified online?",
    answer:
      "We offer blended learning with online theory and hands-on practical sessions for complete certification.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedMessage, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      const formDataToSubmit = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSubmit.append(key, value);
      });

      const response = await fetch("/api/email", {
        method: "POST",
        body: formDataToSubmit,
      });

      if (!response.ok) {
        throw new Error("Failed to submit the data. Please try again.");
      }

      setMessage("Thank you for contacting us. We'll respond within 24 hours.");
    } catch (error) {
      setMessage("Error sending message. Please try again");
    }

    setIsSubmitting(false);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        inquiryType: "",
        message: "",
      });
    }, 3000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-dangerRed to-orange-400 bg-clip-text text-transparent mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your training journey? We're here to help you every
            step of the way.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800">
                  Send Us a Message
                </CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600">{submittedMessage}</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="inquiryType"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Inquiry Type *
                        </label>
                        <select
                          id="inquiryType"
                          name="inquiryType"
                          required
                          value={formData.inquiryType}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="">Select inquiry type</option>
                          {inquiryTypes.map((type) => (
                            <option key={type.value} value={type.value}>
                              {type.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        className="w-full"
                        placeholder="Tell us about your training needs or ask any questions..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-dangerRed to-orange-400 hover:from-dangerRed hover:to-orange-700 py-3 text-lg font-semibold"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send className="h-5 w-5" />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -2 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-full ${info.bgColor}`}>
                        <info.icon className={`h-6 w-6 ${info.color}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">
                          {info.title}
                        </h3>
                        <p className="font-medium text-gray-900 mb-1">
                          {info.details}
                        </p>
                        <p className="text-sm text-gray-600">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find quick answers to common questions about our training programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -2 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="mt-20"
        >
          {/* <Card className="overflow-hidden shadow-xl border-0">
            <div className="grid md:grid-cols-2">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">
                  Visit Our Training Center
                </h3>
                <p className="mb-6 leading-relaxed">
                  Our state-of-the-art training facility is equipped with the
                  latest equipment and comfortable learning environments.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5" />
                    <span>123 Training Center Ave, City, ST 12345</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5" />
                    <span>Mon-Fri: 8AM-6PM, Sat: 9AM-4PM</span>
                  </div>
                </div>
                <Button
                  variant="secondary"
                  className="mt-6 bg-white text-blue-600 hover:bg-blue-50 w-fit"
                >
                  Get Directions
                </Button>
              </div>
              <div className="h-64 md:h-auto bg-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="h-12 w-12 mx-auto mb-2" />
                  <p>Interactive Map</p>
                  <p className="text-sm">Training Center Location</p>
                </div>
              </div>
            </div>
          </Card> */}
        </motion.div>

        {/* Emergency Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-12 text-center"
        >
          <Card className="bg-red-50 border-red-200 max-w-2xl mx-auto">
            <CardContent className="p-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Heart className="h-6 w-6 text-red-600" />
                <h3 className="text-xl font-bold text-red-800">
                  Emergency Training Needed?
                </h3>
              </div>
              <p className="text-red-700 mb-4">
                For urgent training needs or emergency response questions,
                contact us immediately.
              </p>
              <Link href="tel:8134330688">
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  <Phone className="h-4 w-4 mr-2" />
                  Emergency Contact: (813) 433-0688
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
