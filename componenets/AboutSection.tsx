"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="bg-black py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#B09C6D]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-[#B09C6D] font-serif text-4xl md:text-5xl lg:text-6xl mb-10 tracking-wider">
            Book with LV ELITE CONCIERGE
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <p className="text-gray-200 text-lg md:text-2xl  tracking-wider leading-clamp font-light max-w-6xl mx-auto">
            LV Elite Concierge delivers elevated transportation experiences defined by elegance, comfort, and exclusivity. Every journey is thoughtfully designed to meet the highest standards of refinement, ensuring a seamless blend of style, professionalism, and discretion
          </p>
        </motion.div>
        <button className=" mt-[4%] group relative px-8 md:px-10 py-3 md:py-5 border-2 border-white text-white font-bold tracking-[0.1em] md:tracking-[0.2em] text-xs md:text-base overflow-hidden transition-all duration-300 hover:text-black hover:border-[#B09C6D]">
          <span className="relative z-10">BOOK PRIVATELY WITH US</span>
          <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        </button>

        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "100%", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
          className="h-[1px] bg-gradient-to-r from-transparent via-[#B09C6D] to-transparent mt-10 max-w-md mx-auto"
        />
      </div>
    </section>
  );
};

export default AboutSection;