"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { luxury_suv_hero, luxury_suv_fleet } from "@/public";

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen lg:h-[90vh] flex items-center overflow-hidden bg-black pt-[15%] sm:pt-[6%]">
            <div
                className="absolute inset-0 bg-cover bg-bottom bg-no-repeat transition-all duration-1000"
                style={{ backgroundImage: `url(${luxury_suv_hero.src})` }}
            >
                <div className="absolute inset-0 bg-black/0 lg:bg-gradient-to-r lg:from-black/95 lg:via-black/40 lg:to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6  w-full">
                <div className="grid grid-cols-1 lg:grid-cols-5  items-center">
                    <div className="lg:col-span-3 flex flex-col items-center lg:items-start  text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="flex flex-col"
                        >
                            <h2 className="text-[#B09C6D] font-serif text-lg md:text-3xl tracking-[0.2em] mb-4 uppercase drop-shadow-lg">
                                LV ELITE CONCIERGE
                            </h2>
                            <h1 className="text-white font-bold text-4xl md:text-7xl   leading-[1.1] md:leading-[0.9] mb-4 md:mb-6 drop-shadow-2xl">
                                Signature Rides
                            </h1>
                            <p className="text-gray-200 text-sm md:text-xl lg:text-2xl tracking-[0.2em] md:tracking-[0.4em] font-light mb-8 md:mb-12 uppercase drop-shadow-md">
                                Luxury Perfected
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                        >
                            <Link href="/book">
                                <button className="group relative px-8 md:px-10 py-3 md:py-5 border-2 border-white text-white font-bold tracking-[0.1em] md:tracking-[0.2em] text-xs md:text-base overflow-hidden transition-all duration-300 hover:text-black hover:border-[#B09C6D]">
                                    <span className="relative z-10">BOOK PRIVATELY WITH US</span>
                                    <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                                </button>
                            </Link>
                        </motion.div>
                    </div>

                    <div className=" col-span-2 relative flex justify-center ">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                            className="relative mt-10 sm:mt-0"
                        >

                            <img
                                src={luxury_suv_fleet.src}
                                alt="Luxury SUV"
                                className="relative z-10 w-[80%] lg:w-full mx-auto h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] md:drop-shadow-[0_30px_60px_rgba(0,0,0,0.9)] scale-110 lg:scale-125 xl:scale-110"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>


            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        </section>
    );
};

export default Hero;
