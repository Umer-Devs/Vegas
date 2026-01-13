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
                    <Icon className="w-4 h-4 text-gray-500 group-focus-within:text-[#B09C6D] transition-colors" />
                </div>
                <input
                    type={type}
                    placeholder={placeholder}
                    className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-12 pr-4 text-white text-sm focus:outline-none focus:border-[#B09C6D] focus:ring-1 focus:ring-[#B09C6D] transition-all placeholder:text-gray-600"
                />
            </div>
        </div>
    );

    const SelectField = ({ label, options, icon: Icon }: any) => (
        <div className="flex flex-col space-y-2 w-full">
            <label className="text-gray-400 text-xs font-light uppercase tracking-widest">{label}</label>
            <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <Icon className="w-4 h-4 text-gray-500 group-focus-within:text-[#B09C6D] transition-colors" />
                </div>
                <select className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-12 pr-10 text-white text-sm focus:outline-none focus:border-[#B09C6D] focus:ring-1 focus:ring-[#B09C6D] transition-all appearance-none cursor-pointer">
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
        <div className="max-w-7xl mx-auto px-4 md:px-0">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-6 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-sm relative overflow-hidden"
            >
                {/* Decorative Accent */}
                <div className="absolute top-0 left-0 w-2 h-full bg-[#B09C6D]" />

                {/* Tabs */}
                <div className="flex flex-col sm:flex-row bg-[#151515] p-1.5 rounded-2xl w-full sm:w-fit mb-12 border border-white/5">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`relative px-8 md:px-12 py-3.5 rounded-xl text-xs md:text-sm font-bold tracking-[0.15em] uppercase transition-all duration-300 ${activeTab === tab ? "text-black" : "text-gray-500 hover:text-gray-300"
                                }`}
                        >
                            {activeTab === tab && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-[#B09C6D] rounded-xl shadow-[0_0_20px_rgba(176,156,109,0.3)]"
                                    transition={{ type: "spring", bounce: 0.1, duration: 0.6 }}
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
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4 }}
                        className="space-y-10"
                    >
                        {activeTab === "Roundtrip" ? (
                            <div className="flex flex-col space-y-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                    <InputField label="Pickup location" placeholder="Enter address or airport" icon={Search} />
                                    <InputField label="Dropoff location" placeholder="Destination address" icon={Search} />
                                    <InputField label="Pickup date" placeholder="MM/DD/YYYY" icon={Calendar} type="date" />
                                    <SelectField label="Pickup time" icon={Clock} options={["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM"]} />
                                </div>

                                <div className="h-px bg-white/10 w-full relative">
                                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0A0A0A] px-4 text-[#B09C6D] text-[10px] font-bold tracking-[0.3em] uppercase">Return Details</span>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                    <InputField label="Return Pickup" placeholder="Pickup for return" icon={Search} />
                                    <InputField label="Return Dropoff" placeholder="Dropoff for return" icon={Search} />
                                    <InputField label="Return date" placeholder="MM/DD/YYYY" icon={Calendar} type="date" />
                                    <SelectField label="Return time" icon={Clock} options={["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM"]} />
                                </div>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 items-end">
                                <InputField label="Pickup location" placeholder="Enter address or airport" icon={Search} />
                                <InputField label="Dropoff location" placeholder="Destination address" icon={Search} />
                                <InputField label="Pickup date" placeholder="MM/DD/YYYY" icon={Calendar} type="date" />
                                <SelectField label="Pickup time" icon={Clock} options={["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM"]} />
                                <div className="w-full">
                                    <button className="w-full py-4 bg-[#B09C6D] hover:bg-white text-black font-black rounded-xl transition-all duration-500 tracking-[0.2em] text-xs uppercase shadow-[0_10px_30px_rgba(176,156,109,0.2)] hover:shadow-[0_15px_40px_rgba(176,156,109,0.4)] transform hover:-translate-y-1">
                                        SHOW RIDES
                                    </button>
                                </div>
                            </div>
                        )}

                        {activeTab === "Roundtrip" && (
                            <div className="flex justify-end pt-4">
                                <button className="px-16 py-5 bg-[#B09C6D] hover:bg-white text-black font-black rounded-xl transition-all duration-500 tracking-[0.2em] text-xs uppercase shadow-[0_10px_30px_rgba(176,156,109,0.2)] hover:shadow-[0_15px_40px_rgba(176,156,109,0.4)] transform hover:-translate-y-1">
                                    SHOW RIDES
                                </button>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default BookingRide;