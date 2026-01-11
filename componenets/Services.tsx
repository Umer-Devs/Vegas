"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bell, Lock, ShieldCheck, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { logo, service1, service2, service3 } from "@/public";

const serviceData = [
  {
    title: "LUXURY SERVICE",
    icon: service1,
    description: "Experience unparalleled luxury with LV Elite Concierge, where premium vehicles, professional chauffeurs, and personalized service create elegant, comfortable, and exclusive journeys.",
    linkText: "Please connect with us",
    href: "/contact"
  },
  {
    title: "PRESTIGE",
    icon: logo,
    description: "LV Elite Concierge delivers prestige in every ride, combining professionalism, discretion, and attention to detail to ensure each journey is exceptional, refined, and unforgettable.",
    linkText: "Book Today",
    href: "/book"
  },
  {
    title: "DEDICATION",
    icon: service3,
    description: "Our dedication at LV Elite Concierge ensures every journey exceeds expectations, with flawless service, luxury vehicles, and thoughtful details crafted for an extraordinary experience.",
    linkText: "Choose LV ELITE CONCIERGE",
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
           LV Elite Concierge sets the standard in luxury transportation, offering refined elegance, superior comfort, and true exclusivity. With professional chauffeurs, premium vehicles, and personalized service, we create seamless journeys designed to be truly unforgettable
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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
                  <Image className="w-30 h-20" src={service.icon} alt={service.title} />
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
