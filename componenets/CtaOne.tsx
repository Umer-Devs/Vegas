"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const CtaOne = () => {
    return (
        <section className="bg-black py-20 px-6 md:px-12 overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Logo Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: -50 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="flex justify-center lg:justify-center"
                    >
                        <img
                            src="/logo.jpeg"
                            alt="LV ELITE CONCIERGE Logo"
                            className="w-full max-w-[500px] h-auto drop-shadow-[0_0_30px_rgba(212,175,55,0.2)]"
                        />
                    </motion.div>

                    {/* Text Side */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            <h2 className="text-white font-serif text-4xl md:text-6xl lg:text-7xl tracking-wider leading-tight uppercase">
                                WORLD CLASS <br />
                                <span className="text-[#B09C6D]">SERVICE</span>
                            </h2>
                        </motion.div>

                        <motion.div
                            className="pl-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        >
                            <Link
                                href="/book"
                                className="group flex items-center space-x-2 text-[#B09C6D] text-lg md:text-xl tracking-[0.2em] uppercase font-light hover:text-white transition-colors duration-300"
                            >
                                <span>Book Today</span>
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaOne;