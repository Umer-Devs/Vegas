"use client";

import React from "react";
import { motion } from "framer-motion";
import { las_vegas_cta_bg } from "@/public";
import Link from "next/link";

const GetAQuote = () => {
    return (
        <section
            className="relative min-h-[500px] w-full flex items-center justify-center bg-fixed bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${las_vegas_cta_bg.src})` }}
        >
            <div className="absolute inset-0 bg-black/60 z-0" />

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-10">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-white text-4xl md:text-5xl lg:text-6xl font-serif italic"
                >
                    Get a quote!
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <Link href="/contact" className="w-full sm:w-auto">
                        <button className="w-full px-12 py-4 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/30 font-bold tracking-widest text-sm transition-all duration-300">
                            GET IN TOUCH
                        </button>
                    </Link>
                    <Link href="/contact" className="w-full sm:w-auto">
                        <button className="w-full px-12 py-4 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/30 font-bold tracking-widest text-sm transition-all duration-300">
                            BOOK A RIDE
                        </button>
                    </Link>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="text-gray-200 text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-4xl mx-auto"
                >
                    Getting a quote from LV Elite Concierge is effortless and tailored to your needs.
                    Share your travel plans, and our team will provide a personalized estimate,
                    ensuring transparency, competitive pricing, and a seamless start to your luxury journey.
                </motion.p>
            </div>
        </section>
    );
};

export default GetAQuote;
