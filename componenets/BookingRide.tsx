"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Calendar, Clock, ChevronDown } from "lucide-react";
import { toast } from "react-hot-toast";

type BookingType = "One-Way" | "Roundtrip" | "Hourly";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

import api from "@/lib/api";
import { section } from "framer-motion/client";

const InputField = ({ label, placeholder, icon: Icon, type = "text", value, onChange, error }: any) => (
    <div className="flex flex-col space-y-2 w-full">
        <label className="text-gray-400 text-xs font-light uppercase tracking-widest">{label}</label>
        <div className="relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <Icon className="w-4 h-4 text-gray-500 group-focus-within:text-[#B09C6D] transition-colors" />
            </div>
            <input
                type={type}
                placeholder={placeholder}
                value={value || ""}
                onChange={(e) => onChange(label, e.target.value)}
                className={`w-full bg-white/5 border ${error && !value ? 'border-red-500' : 'border-white/10'} rounded-lg py-3 pl-12 pr-4 text-white text-sm focus:outline-none focus:border-[#B09C6D] focus:ring-1 focus:ring-[#B09C6D] transition-all placeholder:text-gray-600`}
            />
        </div>
    </div>
);

const SelectField = ({ label, options, icon: Icon, value, onChange, error }: any) => (
    <div className="flex flex-col space-y-2 w-full">
        <label className="text-gray-400 text-xs font-light uppercase tracking-widest">{label}</label>
        <div className="relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <Icon className="w-4 h-4 text-gray-500 group-focus-within:text-[#B09C6D] transition-colors" />
            </div>
            <select
                value={value || ""}
                onChange={(e) => onChange(label, e.target.value)}
                className={`w-full bg-white/5 border ${error && !value ? 'border-red-500' : 'border-white/10'} rounded-lg py-3 pl-12 pr-10 text-white text-sm focus:outline-none focus:border-[#B09C6D] focus:ring-1 focus:ring-[#B09C6D] transition-all appearance-none cursor-pointer`}
            >
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

const BookingRide = () => {
    const { isLoggedIn } = useAuth();
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<BookingType>("One-Way");
    const [formData, setFormData] = useState<Record<string, string>>({});
    const [error, setError] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        setError(false);
    };

    const handleBooking = async () => {
        const requiredFields = activeTab === "Roundtrip"
            ? ["Pickup Location", "Drop-off Location", "Pickup Date", "Pickup Time", "Return Pickup Location", "Return Drop-off Location", "Return Date", "Return Time"]
            : ["Pickup Location", "Drop-off Location", "Pickup Date", "Pickup Time"];

        const allFieldsFilled = requiredFields.every(field => formData[field] && formData[field].trim() !== "");

        if (!allFieldsFilled) {
            setError(true);
            return;
        }

        if (!isLoggedIn) {
            router.push('/login');
            return;
        }

        setIsSubmitting(true);
        try {
            // Map frontend fields to backend fields
            const payload = {
                type: activeTab.toLowerCase(),
                pickup_location: formData["Pickup Location"],
                dropoff_location: formData["Drop-off Location"],
                pickup_date: formData["Pickup Date"],
                pickup_time: formData["Pickup Time"],
                return_pickup_location: formData["Return Pickup Location"] || null,
                return_dropoff_location: formData["Return Drop-off Location"] || null,
                return_date: formData["Return Date"] || null,
                return_time: formData["Return Time"] || null,
            };

            const response = await api.post('/booking', payload);

            if (response.data.status) {
                toast.success(response.data.message || "Booking request submitted!");
                setFormData({});
            } else {
                const errorMsg = response.data.errors
                    ? Object.values(response.data.errors).flat().join('\n')
                    : response.data.message || "Booking failed";
                toast.error(errorMsg);
            }
        } catch (err: any) {
            console.error("Booking submission error:", err);
            toast.error("Network error. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const tabs: BookingType[] = ["One-Way", "Roundtrip", "Hourly"];

    return (
        <section className='bg-[#080705]'>
            <div className="max-w-7xl mx-auto px-4 md:px-0 py-6 ">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-6 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-sm relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-2 h-full bg-[#B09C6D]" />

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
                                        <InputField label="Pickup Location" placeholder="Enter address or airport" icon={Search} value={formData["Pickup Location"]} onChange={handleInputChange} error={error} />
                                        <InputField label="Drop-off Location" placeholder="Destination address" icon={Search} value={formData["Drop-off Location"]} onChange={handleInputChange} error={error} />
                                        <InputField label="Pickup Date" placeholder="MM/DD/YYYY" icon={Calendar} type="date" value={formData["Pickup Date"]} onChange={handleInputChange} error={error} />
                                        <SelectField label="Pickup Time" icon={Clock} options={["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM"]} value={formData["Pickup Time"]} onChange={handleInputChange} error={error} />
                                    </div>

                                    <div className="h-px bg-white/10 w-full relative">
                                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0A0A0A] px-4 text-[#B09C6D] text-[10px] font-bold tracking-[0.3em] uppercase">Return Details</span>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                        <InputField label="Return Pickup Location" placeholder="Pickup for return" icon={Search} value={formData["Return Pickup Location"]} onChange={handleInputChange} error={error} />
                                        <InputField label="Return Drop-off Location" placeholder="Dropoff for return" icon={Search} value={formData["Return Drop-off Location"]} onChange={handleInputChange} error={error} />
                                        <InputField label="Return Date" placeholder="MM/DD/YYYY" icon={Calendar} type="date" value={formData["Return Date"]} onChange={handleInputChange} error={error} />
                                        <SelectField label="Return Time" icon={Clock} options={["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM"]} value={formData["Return Time"]} onChange={handleInputChange} error={error} />
                                    </div>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 items-end">
                                    <InputField label="Pickup Location" placeholder="Enter address or airport" icon={Search} value={formData["Pickup Location"]} onChange={handleInputChange} error={error} />
                                    <InputField label="Drop-off Location" placeholder="Destination address" icon={Search} value={formData["Drop-off Location"]} onChange={handleInputChange} error={error} />
                                    <InputField label="Pickup Date" placeholder="MM/DD/YYYY" icon={Calendar} type="date" value={formData["Pickup Date"]} onChange={handleInputChange} error={error} />
                                    <SelectField label="Pickup Time" icon={Clock} options={["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM"]} value={formData["Pickup Time"]} onChange={handleInputChange} error={error} />
                                    <div className="w-full">
                                        <button
                                            onClick={handleBooking}
                                            disabled={isSubmitting}
                                            className={`w-full py-4 bg-[#B09C6D] hover:bg-white text-black font-black rounded-xl transition-all duration-500 tracking-[0.2em] text-xs uppercase shadow-[0_10px_30px_rgba(176,156,109,0.2)] hover:shadow-[0_15px_40px_rgba(176,156,109,0.4)] transform hover:-translate-y-1 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        >
                                            {isSubmitting ? "Processing..." : "Get a Quote"}
                                        </button>
                                    </div>
                                </div>
                            )}

                            {activeTab === "Roundtrip" && (
                                <div className="flex justify-end pt-4">
                                    <button
                                        onClick={handleBooking}
                                        disabled={isSubmitting}
                                        className={`px-16 py-5 bg-[#B09C6D] hover:bg-white text-black font-black rounded-xl transition-all duration-500 tracking-[0.2em] text-xs uppercase shadow-[0_10px_30px_rgba(176,156,109,0.2)] hover:shadow-[0_15px_40px_rgba(176,156,109,0.4)] transform hover:-translate-y-1 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    >
                                        {isSubmitting ? "Processing..." : "Get a Quote"}
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default BookingRide;