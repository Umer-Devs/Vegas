"use client";

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import {
    Users,
    Mail,
    Facebook,
    ClipboardList,
    ChevronLeft,
    Activity,
    LogOut,
    Search,
    Smartphone
} from 'lucide-react';
import { motion } from 'framer-motion';

const categoryConfig: Record<string, any> = {
    registrations: {
        title: "Total Registered Users",
        icon: Users,
        color: "#B09C6D",
        description: "Full directory of all verified members across the platform."
    },
    bookings: {
        title: "Booking Form Submissions",
        icon: ClipboardList,
        color: "#B09C6D",
        description: "Detailed logs of concierge and ride booking inquiries."
    },
    facebook: {
        title: "Facebook Authentications",
        icon: Facebook,
        color: "#1877F2",
        description: "Analytics for users registered via Facebook OAuth."
    },
    email: {
        title: "Standard Email Signups",
        icon: Mail,
        color: "#B09C6D",
        description: "Members who joined using direct email credentials."
    }
};

export default function DetailedCategoryPage() {
    const params = useParams();
    const router = useRouter();
    const { logout } = useAuth();
    const category = params.category as string;
    const config = categoryConfig[category] || categoryConfig.registrations;

    // Simulated filtered data
    const usersData = [
        { name: 'Umer Jamil', email: 'umerjamil1211@gmail.com', phone: '+92 312 3456789', method: 'Email', date: 'Jan 20, 2024' },
        { name: 'Hamza Khan', email: 'hamza.k@luxury.com', phone: '+92 300 1234567', method: 'Facebook', date: 'Jan 19, 2024' },
        { name: 'Sara Ahmed', email: 'sara.a@vegas.com', phone: '+92 321 9876543', method: 'Email', date: 'Jan 18, 2024' },
        { name: 'Zainab Rashid', email: 'zainab.r@elite.com', phone: '+92 345 6789012', method: 'Facebook', date: 'Jan 17, 2024' },
    ].filter(u => category === 'registrations' || u.method.toLowerCase() === category || (category === 'bookings' && u.name));

    return (
        <div className="min-h-screen bg-black text-white flex flex-col pt-10 pb-20 overflow-x-hidden">
            {/* Background Decor */}
            <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
                <img src="/luxury_suv_fleet.png" className="absolute top-0 left-0 w-full h-full object-cover opacity-[0.05]" alt="" />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
            </div>

            {/* Top Bar */}
            <header className="max-w-7xl mx-auto w-full px-6 flex justify-between items-center mb-16 pt-[8%]">
                <div className="flex items-center gap-6">
                    <button
                        onClick={() => router.push('/dashboard')}
                        className="p-3 bg-white/5 border border-white/10 hover:border-[#B09C6D] transition-colors group"
                    >
                        <ChevronLeft size={20} className="text-[#B09C6D] group-hover:-translate-x-1 transition-transform" />
                    </button>
                    <div>
                        <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-white">Back to Console</h2>
                    </div>
                </div>
                <button
                    onClick={logout}
                    className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors uppercase text-[10px] font-bold tracking-widest"
                >
                    <LogOut size={16} />
                    Sign Out
                </button>
            </header>

            <main className="max-w-7xl mx-auto w-full px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-12"
                >
                    {/* Header Details */}
                    <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-l-2 border-[#B09C6D] pl-8 py-2">
                        <div>
                            <div className="flex items-center gap-4 mb-3">
                                <config.icon size={28} style={{ color: config.color }} />
                                <span className="text-[#B09C6D] text-[10px] tracking-[0.4em] uppercase font-bold">Category Overview</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold tracking-widest uppercase mb-4">{config.title}</h1>
                            <p className="text-gray-500 text-[10px] tracking-[0.2em] uppercase max-w-xl">{config.description}</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 px-8 py-6 text-right">
                            <p className="text-[9px] text-gray-500 tracking-widest uppercase mb-1">Total Found</p>
                            <p className="text-4xl font-bold text-white tracking-tighter">{usersData.length}</p>
                        </div>
                    </div>


                    {/* Detailed Table */}
                    <div className="bg-white/5 backdrop-blur-3xl border border-white/10 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-white/[0.05] border-b border-white/10">
                                        <th className="px-10 py-6 text-[9px] text-gray-400 tracking-[0.2em] uppercase font-bold">Member Information</th>
                                        <th className="px-10 py-6 text-[9px] text-gray-400 tracking-[0.2em] uppercase font-bold text-center">Contact Method</th>
                                        <th className="px-10 py-6 text-[9px] text-gray-400 tracking-[0.2em] uppercase font-bold text-center">Registration Date</th>
                                        <th className="px-10 py-6 text-[9px] text-gray-400 tracking-[0.2em] uppercase font-bold text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {usersData.map((user, i) => (
                                        <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                                            <td className="px-10 py-8">
                                                <div className="flex items-center gap-5">
                                                    <div className="w-12 h-12 bg-black border border-white/10 flex items-center justify-center text-[12px] font-bold text-[#B09C6D] group-hover:border-[#B09C6D] transition-colors">
                                                        {user.name.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <p className="text-white text-[13px] font-bold tracking-widest uppercase">{user.name}</p>
                                                        <p className="text-gray-500 text-[10px] tracking-widest lowercase group-hover:text-gray-300 transition-colors">{user.email}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-10 py-8">
                                                <div className="flex flex-col items-center gap-2">
                                                    <div className="flex items-center gap-2">
                                                        {user.method === 'Facebook' ? <Facebook size={12} className="text-[#1877F2]" /> : <Mail size={12} className="text-[#B09C6D]" />}
                                                        <span className="text-[10px] tracking-widest uppercase font-bold">{user.method}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-gray-600">
                                                        <Smartphone size={10} />
                                                        <span className="text-[9px] tracking-widest">{user.phone}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-10 py-8 text-center">
                                                <div className="flex items-center justify-center gap-2 text-gray-400">
                                                    <Activity size={12} className="text-[#B09C6D]/50" />
                                                    <span className="text-[10px] tracking-widest uppercase">{user.date}</span>
                                                </div>
                                            </td>
                                            <td className="px-10 py-8 text-right">
                                                <button className="text-[9px] font-bold tracking-widest uppercase text-[#B09C6D] hover:text-white border-b border-transparent hover:border-white pb-1 transition-all">View Full Profile</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </motion.div>
            </main>

            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #1a1a1a;
                }
            `}</style>
        </div>
    );
}
