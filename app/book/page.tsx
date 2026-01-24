"use client";

import BookingRide from '@/componenets/BookingRide'
import Navbar from '@/componenets/Navbar'
import Footer from '@/componenets/Footer'
import React from 'react'
import { motion } from 'framer-motion'
import { las_vegas_cta_bg, serviceImagePage1, serviceImagePage3 } from '@/public'

const page = () => {
    const heroImage = "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1920";

    return (
        <>
            <Navbar />
            <main className=" min-h-screen">
                <section
                    className="relative h-[50vh] md:h-[85vh] flex items-center justify-center bg-center bg-cover bg-no-repeat"
                    style={{ backgroundImage: `url(${serviceImagePage3.src})` }}
                >
                    {/* <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 z-0" /> */}
                    {/* <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px] z-0" /> */}
                    <div className="relative z-10 text-center space-y-4 px-6 mt-[8%]">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-white text-4xl md:text-6xl lg:text-7xl font-serif italic tracking-tight"
                        >
                            Reserve Your Elite Ride
                        </motion.h1>
                        <p className="text-gray-300 text-sm md:text-lg max-w-2xl mx-auto font-light uppercase tracking-[0.2em]">
                            Seamless Luxury. Impeccable Timing. Unforgettable Journeys.
                        </p>
                    </div>
                </section>

                <div className=" px-4 md:px-0">
                    <BookingRide />
                </div>
            </main>
            <Footer />
        </>
    )
}

export default page;