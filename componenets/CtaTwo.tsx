"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";

const CtaTwo = () => {
    return (
        <section className="bg-black relative overflow-hidden min-h-[500px] flex items-center">
            {/* Background Image with Gradient Overlay on the right */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute right-0 top-0 w-full lg:w-[40%] h-full bg-cover bg-right lg:bg-right bg-no-repeat opacity-60 lg:opacity-100"
                    style={{ backgroundImage: 'url("https://vegasviprides.com/wp-content/uploads/2024/10/2022-Suburban-in-Orleans.jpg")' }}
                >
                    {/* Gradient to fade the image into the black background on the left */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent"></div>
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full py-20 lg:py-0 my-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-8 flex flex-col space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            <h2 className="text-[#B09C6D] font-serif text-3xl md:text-5xl lg:text-6xl tracking-tight leading-tight">
                                Connect for Exclusive <br /> VIP Experience
                            </h2>
                            <p className="text-gray-300 text-base md:text-lg max-w-5xl font-light leading-relaxed">
                                Experience luxury with LV ELITE CONCIERGE by getting in touch today. Our exclusive VIP service
                                offers personalized attention, seamless bookings, and exceptional comfort, ensuring every
                                journey is tailored to your preferences and exceeds expectations.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <Link
                                href="/contact"
                                className="inline-block px-10 py-4 border-2 border-white text-white font-bold tracking-[0.2em] text-sm hover:bg-white hover:text-black transition-all duration-300"
                            >
                                CONTACT US
                            </Link>
                        </motion.div>

                        {/* Contact Info Footer Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-8 border-t border-white/10">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="space-y-4"
                            >
                                <h3 className="text-[#B09C6D] font-serif text-xl md:text-2xl tracking-wide">Call us now</h3>
                                <div className="space-y-2 text-gray-400 font-light tracking-wide text-sm md:text-base">
                                    <p className="flex items-center space-x-3 group cursor-pointer hover:text-white transition-colors">
                                        <Phone className="w-4 h-4 text-[#B09C6D]" />
                                        <a href="tel:+13072252444" className="text-white hover:text-[#B09C6D] transition-colors tracking-widest">702-800-9093</a>
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="space-y-4"
                            >
                                <h3 className="text-[#B09C6D] font-serif text-xl md:text-2xl tracking-wide">Get our preferred service</h3>
                                <p className="text-gray-400 font-light tracking-wide text-sm md:text-base leading-relaxed italic">
                                    "Redefining modern luxury transportation through unwavering dedication to excellence and client satisfaction."
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom transition gradient */}
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent z-10"></div>
        </section>
    );
};

export default CtaTwo;