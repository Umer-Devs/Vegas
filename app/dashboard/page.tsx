"use client";

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import {
    Users,
    LogOut,
    ShieldCheck,
    Mail,
    Phone,
    Activity,
    Facebook,
    ClipboardList,
    Smartphone
} from 'lucide-react';
import { motion } from 'framer-motion';

import Link from 'next/link';

const StatBlock = ({ icon: Icon, label, value, href, color = "#B09C6D" }: { icon: any, label: string, value: string | number, href: string, color?: string }) => (
    <Link href={href}>
        <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 flex flex-col justify-between relative overflow-hidden group cursor-pointer h-full"
        >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#B09C6D]/30 to-transparent"></div>
            <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-white/5 border border-white/10 rounded-none group-hover:border-[#B09C6D]/50 transition-colors">
                    <Icon size={20} style={{ color }} />
                </div>
                <Activity size={12} className="text-gray-600 opacity-50 group-hover:text-[#B09C6D] transition-colors" />
            </div>
            <div>
                <p className="text-gray-500 text-[9px] font-bold tracking-[0.3em] uppercase mb-1">{label}</p>
                <div className="flex items-center justify-between">
                    <h3 className="text-4xl font-bold text-white tracking-widest">{value}</h3>
                    <Smartphone size={14} className="text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
            </div>
        </motion.div>
    </Link>
);

export default function DashboardPage() {
    const { logout } = useAuth();
    const [loginCount, setLoginCount] = useState(0);

    useEffect(() => {
        const count = localStorage.getItem("admin_login_count") || "0";
        setLoginCount(parseInt(count));
    }, []);

    const usersData = [
        { name: 'Umer Jamil', email: 'umerjamil1211@gmail.com', phone: '+92 312 3456789', method: 'Email', status: 'Online' },
        { name: 'Hamza Khan', email: 'hamza.k@luxury.com', phone: '+92 300 1234567', method: 'Facebook', status: 'Offline' },
        { name: 'Sara Ahmed', email: 'sara.a@vegas.com', phone: '+92 321 9876543', method: 'Email', status: 'Away' },
        { name: 'Zainab Rashid', email: 'zainab.r@elite.com', phone: '+92 345 6789012', method: 'Facebook', status: 'Offline' },
        { name: 'Ali Raza', email: 'ali.raza@elite.com', phone: '+92 333 4445556', method: 'Email', status: 'Offline' },
    ];

    return (
        <div className="min-h-screen bg-black text-white relative flex flex-col pt-10 pb-20 overflow-x-hidden">
            {/* Background Decor */}
            <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
                <img
                    src="/luxury_suv_fleet.png"
                    className="absolute top-0 right-0 w-[50%] h-full object-cover opacity-[0.1]"
                    alt=""
                />
                <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#B09C6D]/10 rounded-full blur-[150px]"></div>
                <img
                    src="/luxury_interior.png"
                    className="absolute bottom-0 left-0 w-[40%] h-[60%] object-cover opacity-[0.05]"
                    alt=""
                />
                <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#B09C6D]/5 rounded-full blur-[150px]"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
            </div>

            {/* Top Bar */}
            <header className="max-w-7xl mx-auto w-full px-6 flex justify-between items-center mb-16">
                <div className="flex items-center gap-6">
                    <img src="/logo.png" alt="LV ELITE" className="h-12 w-auto" />
                    <span className="h-6 w-[1px] bg-white/10"></span>
                    <div>
                        <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-white">Elite Console</h2>
                        <p className="text-[8px] tracking-[0.2em] uppercase text-[#B09C6D]">Admin: Active</p>
                    </div>
                </div>
                <button
                    onClick={logout}
                    className="flex items-center gap-2 text-gray-500 hover:text-[#B09C6D] transition-colors uppercase text-[10px] font-bold tracking-widest border border-white/5 px-6 py-3 bg-white/[0.02] backdrop-blur-xl"
                >
                    <LogOut size={16} />
                    Sign Out
                </button>
            </header>

            <main className="max-w-7xl mx-auto w-full px-6 space-y-12">
                {/* Stats Grid - Fixed links for navigation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    <StatBlock icon={Users} label="Total Registered" value="1,248" href="/dashboard/registrations" />
                    <StatBlock icon={ClipboardList} label="Booking Form Fills" value="842" href="/dashboard/bookings" />
                    <StatBlock icon={Facebook} label="Facebook Logins" value="512" color="#1877F2" href="/dashboard/facebook" />
                    <StatBlock icon={Mail} label="Email Signups" value="736" color="#B09C6D" href="/dashboard/email" />
                </motion.div>

                {/* Main Content Area */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="grid grid-cols-1 xl:grid-cols-3 gap-10"
                >
                    {/* Left Side: Summary Card */}
                    <div className="lg:col-span-1 space-y-10">
                        <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-10 flex flex-col items-center text-center relative overflow-hidden group">
                            <img
                                src="/luxury_suv_fleet.png"
                                className="absolute inset-0 w-full h-full object-cover opacity-[0.03] transition-transform duration-1000 group-hover:scale-110"
                                alt=""
                            />
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-[#B09C6D]/10 rounded-full flex items-center justify-center mb-8 border border-[#B09C6D]/20 mx-auto">
                                    <ShieldCheck size={32} className="text-[#B09C6D]" />
                                </div>
                                <p className="text-[#B09C6D] text-[10px] tracking-[0.4em] uppercase mb-4 font-bold">Admin Session Count</p>
                                <h2 className="text-8xl font-bold text-white tracking-tighter tabular-nums mb-6">
                                    {loginCount}
                                </h2>
                                <div className="flex items-center justify-center gap-2 text-gray-400 text-[10px] tracking-[0.2em] uppercase font-bold">
                                    <Activity size={12} className="text-green-500 animate-pulse" />
                                    Security Status: Verified
                                </div>
                            </div>
                        </div>

                        {/* Quick Insights */}
                        <div className="bg-white/[0.02] border border-white/5 p-8 space-y-6">
                            <h3 className="text-white tracking-[0.2em] font-bold uppercase text-[9px] flex items-center gap-2">
                                <Activity size={12} className="text-[#B09C6D]" />
                                Registration Insight
                            </h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center group">
                                    <span className="text-[9px] text-gray-500 tracking-widest uppercase">Conversion Rate</span>
                                    <span className="text-[10px] text-white font-bold uppercase tracking-widest">67%</span>
                                </div>
                                <div className="w-full bg-white/5 h-[1px]"></div>
                                <div className="flex justify-between items-center">
                                    <span className="text-[9px] text-gray-500 tracking-widest uppercase">Retention</span>
                                    <span className="text-[10px] text-[#B09C6D] font-bold uppercase tracking-widest">84%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Detailed Table */}
                    <div className="lg:col-span-2">
                        <div className="bg-white/5 backdrop-blur-3xl border border-white/10 overflow-hidden">
                            <div className="p-10 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
                                <div>
                                    <h3 className="text-white tracking-[0.2em] font-bold uppercase text-xs">Registered Member Details</h3>
                                    <p className="text-[8px] text-[#B09C6D] tracking-[0.2em] uppercase mt-1">Full database tracking</p>
                                </div>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="bg-white/[0.05] border-b border-white/10">
                                            <th className="px-10 py-5 text-[9px] text-gray-400 tracking-[0.2em] uppercase font-bold">User Identity</th>
                                            <th className="px-10 py-5 text-[9px] text-gray-400 tracking-[0.2em] uppercase font-bold">Registration Method</th>
                                            <th className="px-10 py-5 text-[9px] text-gray-400 tracking-[0.2em] uppercase font-bold">Contact Info</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5">
                                        {usersData.map((user, i) => (
                                            <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                                                <td className="px-10 py-8">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-10 h-10 bg-[#B09C6D]/10 border border-[#B09C6D]/20 flex items-center justify-center text-[11px] font-bold text-[#B09C6D]">
                                                            {user.name.charAt(0)}
                                                        </div>
                                                        <div>
                                                            <p className="text-white text-[11px] font-bold tracking-widest uppercase group-hover:text-[#B09C6D] transition-colors">{user.name}</p>
                                                            <span className="text-[8px] px-1.5 py-0.5 bg-green-500/10 text-green-500 tracking-widest uppercase font-bold mt-1 inline-block">Member</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-10 py-8 text-center sm:text-left">
                                                    <div className="flex items-center gap-3">
                                                        {user.method === 'Facebook' ? (
                                                            <Facebook size={14} className="text-[#1877F2]" />
                                                        ) : (
                                                            <Mail size={14} className="text-[#B09C6D]" />
                                                        )}
                                                        <span className="text-[10px] font-bold tracking-widest uppercase text-white">{user.method}</span>
                                                    </div>
                                                </td>
                                                <td className="px-10 py-8">
                                                    <div className="space-y-2">
                                                        <div className="flex items-center gap-2 text-gray-400">
                                                            <Mail size={12} className="text-[#B09C6D]/60" />
                                                            <span className="text-[10px] tracking-widest lowercase group-hover:text-white transition-colors">{user.email}</span>
                                                        </div>
                                                        <div className="flex items-center gap-2 text-gray-400">
                                                            <Smartphone size={12} className="text-[#B09C6D]/60" />
                                                            <span className="text-[10px] tracking-widest">{user.phone}</span>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </main>

            <footer className="mt-auto pt-20 text-center opacity-30">
                <p className="text-[8px] text-gray-500 tracking-[0.5em] uppercase">
                    LV Elite Administration Hub • Powered by Antigravity
                </p>
            </footer>

            <style jsx global>{`
                ::selection {
                    background: #B09C6D;
                    color: black;
                }
            `}</style>
        </div>
    );
}
