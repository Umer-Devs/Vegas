"use client";

import React from "react";
import { motion } from "framer-motion";
import { Hexagon, Landmark, Bookmark, Building2 } from "lucide-react";

const services = [
    {
        icon: <Hexagon className="w-12 h-12" />,
        title: "PRIVATE CHARTERS",
        description: "Experience seamless luxury from the moment you land. Our private charters provide elite airport transfers and executive transportation tailored to your schedule."
    },
    {
        icon: <Landmark className="w-12 h-12" />,
        title: "PARTIES",
        description: "Celebrate in style with our premium fleet. Whether it's a bachelor party or a night on the Vegas Strip, we ensure your arrival is as legendary as the night itself."
    },
    {
        icon: <Bookmark className="w-12 h-12" />,
        title: "EVENT VIP RIDES",
        description: "Arrive at red-carpet events, galas, and corporate summits with unparalleled sophistication. Our chauffeurs deliver punctuality and prestige for every occasion."
    },
    {
        icon: <Building2 className="w-12 h-12" />,
        title: "ADDITIONAL SERVICES",
        description: "Beyond transportation, we offer personalized concierge solutions, including security details and custom sightseeing tours across the Nevada landscape."
    }
];

const OurServices = () => {
    return (
        <section className="bg-black text-white py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-[#B09C6D] text-4xl md:text-5xl font-serif italic"
                    >
                        Our services
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto leading-relaxed uppercase tracking-widest font-light"
                    >
                        Redefining modern luxury through personalized attention and impeccable service.
                        Every journey with us is a statement of elegance and excellence.
                    </motion.p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="flex flex-col items-center text-center space-y-6 group"
                        >
                            <div className="text-[#B09C6D] transition-transform duration-300 group-hover:scale-110">
                                {service.icon}
                            </div>
                            <h3 className="text-[#B09C6D] text-lg font-serif tracking-[0.2em] group-hover:text-white transition-colors duration-300">
                                {service.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed font-light">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurServices;
