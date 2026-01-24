"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { interior_cockpit, interior_seats, serviceImagePage1, serviceImagePage2 } from "@/public";

const ServiceFeatures = () => {
    return (
        <section className="bg-black text-white py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex flex-col space-y-8"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight">
                        Enjoy the best <span className="text-[#B09C6D] font-serif italic">luxury</span> <br />
                        <span className="text-[#B09C6D] font-serif italic">rides and service</span> in <br />
                        town!
                    </h2>

                    <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                        LV Elite Concierge offers the best luxury transportation in Las Vegas,
                        combining elegance, professionalism, and exceptional service for
                        unforgettable journeys.
                    </p>

                    <div className="pt-4">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block"
                        >
                            <Link href="/services">
                                <button className="px-10 py-4 bg-[#B09C6D] hover:bg-[#968453] text-black font-bold rounded-lg transition-all duration-300 tracking-wider text-sm">
                                    DISCOVER MORE
                                </button>
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>

                <div className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        whileInView={{ opacity: 0.6, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.2 }}
                        className="absolute top-0 left-0 w-[70%] h-[70%] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                    >
                        <Image
                            src={serviceImagePage1}
                            alt="Luxury SUV Interior Cockpit"
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: 50, y: 50 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.4 }}
                        className="absolute bottom-0 right-0 w-[75%] h-[75%] rounded-2xl overflow-hidden shadow-2xl border border-white/20 z-10"
                    >
                        <Image
                            src={serviceImagePage2}
                            alt="Luxury SUV Interior Seats"
                            fill
                            className="object-cover"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 1 }}
                            className="absolute inset-4 border-2 border-white/40 pointer-events-none"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100px" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.8 }}
                        className="absolute -bottom-4 -left-4 h-1 bg-[#B09C6D] z-20 hidden md:block"
                    />
                </div>
            </div>
        </section>
    );
};

export default ServiceFeatures;
