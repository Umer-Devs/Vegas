"use client";

import React from 'react';
import Navbar from '@/componenets/Navbar';
import Footer from '@/componenets/Footer';
import { motion } from 'framer-motion';

const PrivacyPolicyPage = () => {
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
                        Privacy <span className="text-[#B09C6D]">Policy</span>
                    </h1>

                    <div className="space-y-8 text-gray-300 font-light leading-relaxed tracking-wide">
                        <section>
                            <h2 className="text-xl text-[#B09C6D] uppercase tracking-widest font-bold mb-4">1. Introduction</h2>
                            <p>
                                At LV Elite Concierge, we are committed to protecting your personal information and your right to privacy.
                                When you visit our website and use our services, you trust us with your personal information.
                                We take your privacy very seriously.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl text-[#B09C6D] uppercase tracking-widest font-bold mb-4">2. Information We Collect</h2>
                            <p className="mb-4">We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services.</p>
                            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-400">
                                <li>Name and Contact Data (Email, Phone Number)</li>
                                <li>Credentials (Passwords, Security Information)</li>
                                <li>Payment Data (processed securely via third-party providers)</li>
                                <li>Social Media Login Data (Facebook, Google)</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl text-[#B09C6D] uppercase tracking-widest font-bold mb-4">3. How We Use Your Information</h2>
                            <p>
                                We use personal information collected via our website for a variety of business purposes described below:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mt-4 text-sm text-gray-400">
                                <li>To facilitate account creation and logon process.</li>
                                <li>To send you marketing and promotional communications.</li>
                                <li>To fulfill and manage your orders and bookings.</li>
                                <li>To request feedback and contact you about your use of our services.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl text-[#B09C6D] uppercase tracking-widest font-bold mb-4">4. Sharing Your Information</h2>
                            <p>
                                We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl text-[#B09C6D] uppercase tracking-widest font-bold mb-4">5. Contact Us</h2>
                            <p>
                                If you have questions or comments about this policy, you may contact us via our Contact Page.
                            </p>
                        </section>
                    </div>
                </motion.div>
            </main>
            <Footer />
        </div>
    );
};

export default PrivacyPolicyPage;
