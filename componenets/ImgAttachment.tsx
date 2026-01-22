"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const ImgAttachment = () => {
    return (
        <section
            className="relative w-full py-10 bg-fixed bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: 'url("https://vegasviprides.com/wp-content/uploads/2024/10/10.webp")' }}
        >
            <div className="absolute inset-0 bg-black/70"></div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">


                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-12 flex justify-center"
                >
                    <motion.div
                        animate={{
                            rotate: [0, -5, 5, -5, 5, 0]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        style={{ originY: 0 }}
                    >
                        <Link
                            href="/book"
                            className="inline-block px-12 py-5 bg-white/90 hover:bg-white text-black font-bold tracking-[0.2em] text-sm md:text-base transition-all duration-300"
                        >
                            BOOK TODAY
                        </Link>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    <p className="text-gray-200 text-lg md:text-xl lg:text-2xl leading-relaxed font-light tracking-wider">
                        Connect with LV Elite Concierge and transform your travel experience. From tailored bookings to bespoke itineraries and flawless service, we ensure every journey is luxurious, seamless, and unforgettable. Let us make your vision of perfect travel a reality.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default ImgAttachment;