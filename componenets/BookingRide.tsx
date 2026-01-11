"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Calendar, Clock, ChevronDown } from "lucide-react";

type BookingType = "One-Way" | "Roundtrip" | "Hourly";

const BookingRide = () => {
    const [activeTab, setActiveTab] = useState<BookingType>("One-Way");

    const tabs: BookingType[] = ["One-Way", "Roundtrip", "Hourly"];

    const InputField = ({ label, placeholder, icon: Icon, type = "text" }: any) => (
        <div className="flex flex-col space-y-2 w-full">
            <label className="text-gray-400 text-xs font-light uppercase tracking-widest">{label}</label>
            <div className="relative group">
                <div className="absolute left-4 top-1/2 -track-y-1/2 -translate-y-1/2">
                    <Icon className="w-4 h-4 text-gray-500 group-focus-within:text-[#D4AF37] transition-colors" />
                </div>
                <input
                    type={type}
                    placeholder={placeholder}
                    className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-12 pr-4 text-white text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all placeholder:text-gray-600"
                />
            </div>
        </div>
    );

    const SelectField = ({ label, options, icon: Icon }: any) => (
        <div className="flex flex-col space-y-2 w-full">
            <label className="text-gray-400 text-xs font-light uppercase tracking-widest">{label}</label>
            <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <Icon className="w-4 h-4 text-gray-500 group-focus-within:text-[#D4AF37] transition-colors" />
                </div>
                <select className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-12 pr-10 text-white text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all appearance-none cursor-pointer">
                    <option value="" className="bg-black text-gray-400">Select {label.split(' ')[1] || ""}</option>
                    {options.map((opt: string) => (
                        <option key={opt} value={opt} className="bg-black text-white">{opt}</option>
                    ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                </div>
            </div>
        </div>
    );

    return (
        <section className="bg-black py-16 px-6 md:px-12 relative">
            <div className="max-w-7xl mx-auto">
                <div className="bg-[#111111] border border-white/5 rounded-2xl p-6 md:p-10 shadow-2xl">
                    {/* Tabs */}
                    <div className="flex bg-white/5 p-1 rounded-xl w-fit mb-10 overflow-hidden">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`relative px-6 md:px-10 py-3 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 ${activeTab === tab ? "text-white" : "text-gray-500 hover:text-gray-300"
                                    }`}
                            >
                                {activeTab === tab && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-[#D4AF37]/20 border border-[#D4AF37]/30 rounded-lg"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10">{tab}</span>
                            </button>
                        ))}
                    </div>

                    {/* Form Content */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-8"
                        >
                            {activeTab === "Roundtrip" ? (
                                <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                                        <InputField label="Pickup location" placeholder="Enter pickup address" icon={Search} />
                                        <InputField label="Dropoff location" placeholder="Enter dropoff address" icon={Search} />
                                        <InputField label="Pickup date" placeholder="MM/DD/YYYY" icon={Calendar} type="date" />
                                        <SelectField label="Pickup time" icon={Clock} options={["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM"]} />
                                    </div>

                                    <div className="flex items-center justify-center p-4 bg-[#D4AF37]/10 rounded-full">
                                        {/* <ArrowsUpDown className="w-6 h-6 text-[#D4AF37]" /> */}
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                                        <InputField label="Return Pickup" placeholder="Enter return pickup" icon={Search} />
                                        <InputField label="Return Dropoff" placeholder="Enter return dropoff" icon={Search} />
                                        <InputField label="Return date" placeholder="MM/DD/YYYY" icon={Calendar} type="date" />
                                        <SelectField label="Return time" icon={Clock} options={["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM"]} />
                                    </div>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-end">
                                    <InputField label="Pickup location" placeholder="Enter pickup address" icon={Search} />
                                    <InputField label="Dropoff location" placeholder="Enter dropoff address" icon={Search} />
                                    <InputField label="Pickup date" placeholder="MM/DD/YYYY" icon={Calendar} type="date" />
                                    <SelectField label="Pickup time" icon={Clock} options={["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM"]} />
                                    <div className="w-full">
                                        <button className="w-full py-3.5 bg-[#D4AF37] hover:bg-[#B8962E] text-black font-bold rounded-lg transition-all duration-300 tracking-wider">
                                            SHOW RIDES
                                        </button>
                                    </div>
                                </div>
                            )}

                            {activeTab === "Roundtrip" && (
                                <div className="pt-6">
                                    <button className="px-12 py-4 bg-[#D4AF37] hover:bg-[#B8962E] text-black font-bold rounded-lg transition-all duration-300 tracking-wider">
                                        SHOW RIDES
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default BookingRide;