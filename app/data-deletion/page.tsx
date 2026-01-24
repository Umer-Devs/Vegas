"use client";

import React from 'react';
import Navbar from '@/componenets/Navbar';
import Footer from '@/componenets/Footer';
import { motion } from 'framer-motion';

const DataDeletionPage = () => {
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
                        Data <span className="text-[#B09C6D]">Deletion Instructions</span>
                    </h1>

                    <div className="space-y-8 text-gray-300 font-light leading-relaxed tracking-wide">
                        <section>
                            <h2 className="text-xl text-[#B09C6D] uppercase tracking-widest font-bold mb-4">Introduction</h2>
                            <p>
                                According to the Facebook Platform rules, we have to provide a User Data Deletion Callback URL or data deletion instructions page.
                                Hybrid Media is committed to your privacy and data protection.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl text-[#B09C6D] uppercase tracking-widest font-bold mb-4">How to Request Data Deletion</h2>
                            <p className="mb-4">
                                If you want to delete your activities for the LV Elite Concierge App, you can remove your information by following these steps:
                            </p>
                            <div className="bg-white/5 border border-white/10 p-8 rounded-lg">
                                <ol className="list-decimal pl-5 space-y-4 text-sm text-gray-300">
                                    <li>Go to your Facebook Account's "Settings & Privacy". Click "Settings".</li>
                                    <li>Look for "Apps and Websites" and you will see all of the apps and websites you linked with your Facebook.</li>
                                    <li>Search and Click "LV Elite Concierge" in the search bar.</li>
                                    <li>Scroll and click "Remove".</li>
                                    <li>Congratulations, you have successfully removed your app activities.</li>
                                </ol>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl text-[#B09C6D] uppercase tracking-widest font-bold mb-4">Manual Deletion Request</h2>
                            <p>
                                Alternatively, you can contact our support team directly to request complete deletion of your account and associated data from our servers.
                            </p>
                            <p className="mt-4">
                                <span className="text-[#B09C6D] font-bold uppercase tracking-widest text-xs">Email:</span> support@lveliteconcierge.com
                            </p>
                        </section>
                    </div>
                </motion.div>
            </main>
            <Footer />
        </div>
    );
};

export default DataDeletionPage;
