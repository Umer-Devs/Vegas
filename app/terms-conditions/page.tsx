"use client";

import React from 'react';
import Navbar from '@/componenets/Navbar';
import Footer from '@/componenets/Footer';
import { motion } from 'framer-motion';

const TermsConditionsPage = () => {
    return (
        <div className="bg-black min-h-screen text-white">
            <Navbar />
            <main className="max-w-4xl mx-auto px-6 py-24 md:py-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-5xl font-serif italic mb-8">
                        Terms & <span className="text-[#B09C6D]">Conditions</span>
                    </h1>

                    <div className="space-y-8 text-gray-300 font-light leading-relaxed tracking-wide">
                        <section>
                            <h2 className="text-xl text-[#B09C6D] uppercase tracking-widest font-bold mb-4">1. Agreement to Terms</h2>
                            <p>
                                These Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity, concerning your access to and use of the LV Elite Concierge website.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl text-[#B09C6D] uppercase tracking-widest font-bold mb-4">2. Intellectual Property Rights</h2>
                            <p>
                                Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site are owned or controlled by us.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl text-[#B09C6D] uppercase tracking-widest font-bold mb-4">3. User Representations</h2>
                            <p>
                                By using the Site, you represent and warrant that:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mt-4 text-sm text-gray-400">
                                <li>All registration information you submit will be true, accurate, current, and complete.</li>
                                <li>You have the legal capacity and you agree to comply with these Terms of Use.</li>
                                <li>You will not access the Site through automated or non-human means, whether through a bot, script or otherwise.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl text-[#B09C6D] uppercase tracking-widest font-bold mb-4">4. Booking and Cancellation</h2>
                            <p>
                                All bookings made through LV Elite Concierge are subject to availability and acceptance. Cancellation policies vary by service type and will be disclosed at the time of booking.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl text-[#B09C6D] uppercase tracking-widest font-bold mb-4">5. Limitation of Liability</h2>
                            <p>
                                In no event will we be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages arising from your use of the site.
                            </p>
                        </section>
                    </div>
                </motion.div>
            </main>
            <Footer />
        </div>
    );
};

export default TermsConditionsPage;
