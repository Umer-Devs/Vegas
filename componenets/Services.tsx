"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bell, Lock, ShieldCheck, ChevronRight } from "lucide-react";
import Link from "next/link";

const serviceData = [
  {
    title: "LUXURY SERVICE",
    icon: <Bell className="w-12 h-12 text-[#B09C6D]" />,
    description: "Vegas VIP Rides offers an unparalleled luxury transportation experience in Las Vegas, featuring premium vehicles, professional chauffeurs, and personalized service. Enjoy comfort, elegance, and exclusivity as you explore the city in style.",
    linkText: "Please connect with us",
    href: "/contact"
  },
  {
    title: "PRESTIGE",
    icon: <ShieldCheck className="w-12 h-12 text-[#B09C6D]" />,
    description: "Vegas VIP Rides maintains prestigious standards through meticulous attention, professionalism, and client satisfaction. Our chauffeurs deliver a first-class experience, ensuring comfort, reliability, and discretion, making each ride an extraordinary journey.",
    linkText: "Book Today",
    href: "/book"
  },
  {
    title: "DEDICATION",
    icon: <Lock className="w-12 h-12 text-[#B09C6D]" />,
    description: "At Vegas VIP Rides, we are dedicated to exceeding client expectations through unwavering commitment to excellence. Our team ensures every detail is perfect, providing exceptional service and a luxurious experience tailored to your needs.",
    linkText: "Choose Vegas VIP Rides",
    href: "/services"
  }
];

const Services = () => {
  return (
    <section className="bg-black py-24 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-[#B09C6D] font-serif text-4xl md:text-5xl lg:text-6xl mb-8 tracking-wider"
          >
            Our Area of Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-gray-300 text-lg md:text-xl leading-relaxed font-light tracking-wide"
          >
            Vegas VIP Rides excels in luxury transportation, providing elegance, comfort, and exclusivity with
            professional chauffeurs, premium vehicles, and personalized service for memorable journeys.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {serviceData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 * index, ease: "easeOut" }}
              className="flex flex-col items-center text-center space-y-6 group"
            >
              {/* Icon Container with hover effect */}
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-[#B09C6D]/20 blur-2xl rounded-full scale-0 group-hover:scale-125 transition-transform duration-500"></div>
                <div className="relative z-10 p-4 transition-transform duration-500 group-hover:scale-110">
                  {service.icon}
                </div>
              </div>

              <h3 className="text-[#B09C6D] text-xl md:text-2xl font-serif tracking-[0.2em] uppercase">
                {service.title}
              </h3>

              <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light tracking-wide lg:px-4">
                {service.description}
              </p>

              <Link
                href={service.href}
                className="inline-flex items-center space-x-2 text-[#B09C6D] text-sm md:text-base tracking-[0.15em] uppercase hover:text-white transition-colors duration-300"
              >
                <span>{service.linkText}</span>
                <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;