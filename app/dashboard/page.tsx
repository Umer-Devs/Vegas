"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import {
    Users,
    LogOut,
    Mail,
    Phone,
    Activity,
    Facebook,
    ClipboardList,
    Smartphone,
    Chrome,
    ArrowUpRight,
    Search,
    Filter
} from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import api from '@/lib/api';

const GoogleIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z" />
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
);

const BentoItem = ({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        className={`bg-white/[0.03] backdrop-blur-xl border border-white/10 p-6 sm:p-8 relative overflow-hidden group hover:bg-white/[0.05] transition-colors ${className}`}
    >
        {children}
    </motion.div>
);

export default function DashboardPage() {
    const { user, isAdmin, logout, loading: authLoading } = useAuth();
    const router = useRouter();
    const [usersData, setUsersData] = useState<any[]>([]);
    const [bookingsData, setBookingsData] = useState<any[]>([]);
    const [contactsData, setContactsData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!authLoading && !isAdmin) {
            router.push('/');
        }
    }, [isAdmin, authLoading, router]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [usersRes, bookingsRes, contactsRes] = await Promise.all([
                    api.get('/users'),
                    api.get('/bookings'),
                    api.get('/contacts')
                ]);

                if (usersRes.data.status) setUsersData(usersRes.data.data);
                if (bookingsRes.data.status) setBookingsData(bookingsRes.data.data);
                if (contactsRes.data.status) setContactsData(contactsRes.data.data);
            } catch (err) {
                console.error("Error fetching dashboard data:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const googleCount = usersData.filter(u => u.provider?.toLowerCase() === 'google').length;
    const facebookCount = usersData.filter(u => u.provider?.toLowerCase() === 'facebook').length;

    if (loading) {
        return <div className="min-h-screen bg-black flex items-center justify-center text-[#B09C6D] tracking-widest uppercase text-xs font-bold animate-pulse">Loading Elite Console...</div>;
    }

    return (
        <div className="min-h-screen bg-black text-white relative flex flex-col pt-8 pb-20 px-6 sm:px-12 overflow-x-hidden selection:bg-[#B09C6D] selection:text-black">
            {/* Ambient Background */}
            <div className="fixed inset-0 pointer-events-none -z-10">
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#B09C6D]/10 rounded-full blur-[120px] opacity-40"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#B09C6D]/5 rounded-full blur-[100px] opacity-30"></div>
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03]"></div>
            </div>

            {/* Header */}
            <header className="flex justify-between items-center mb-16 max-w-[1600px] mx-auto w-full">
                <div className="flex items-center gap-4">
                    <Link href="/">
                        <img src="/logo.png" alt="LV ELITE" className="h-10 w-auto" />
                    </Link>
                    <div className="h-8 w-[1px] bg-white/10 hidden sm:block"></div>
                    <span className="text-[10px] tracking-[0.3em] font-bold uppercase text-gray-500 hidden sm:block">Command Center</span>
                </div>
                <div className="flex items-center gap-6">
                    <div className="hidden md:flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-[9px] tracking-widest uppercase text-gray-400">System Online</span>
                    </div>
                    <button
                        onClick={logout}
                        className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#B09C6D] hover:text-white transition-colors"
                    >
                        Sign Out
                    </button>
                </div>
            </header>

            <main className="max-w-[1600px] mx-auto w-full space-y-8">
                {/* Welcome Section */}
                <div className="mb-12">
                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-4xl md:text-5xl font-serif italic mb-2"
                    >
                        Welcome Back, <span className="text-[#B09C6D]">Admin</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-500 text-xs tracking-[0.2em] uppercase"
                    >
                        Overview of your exclusive platform activity
                    </motion.p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[160px]">

                    {/* Total User Card - Large */}
                    <BentoItem className="md:col-span-2 md:row-span-2 !p-0 flex flex-col justify-between group">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#B09C6D]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="p-8 relative z-10 h-full flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                                <div className="p-3 bg-white/10 backdrop-blur-md rounded-full">
                                    <Users size={24} className="text-[#B09C6D]" />
                                </div>
                                <ArrowUpRight className="text-gray-600 group-hover:text-white transition-colors" />
                            </div>
                            <div>
                                <h3 className="text-6xl font-bold text-white mb-2 tracking-tighter">{usersData.length}</h3>
                                <p className="text-gray-400 text-[10px] tracking-[0.2em] uppercase">Total Elite Members</p>
                            </div>
                        </div>
                        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>
                    </BentoItem>

                    {/* Bookings Card */}
                    <Link href="/dashboard/bookings" className="contents">
                        <BentoItem className="cursor-pointer border-t-[3px] border-t-white/10 hover:border-t-[#B09C6D] transition-all">
                            <div className="flex justify-between items-start mb-6">
                                <ClipboardList size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                                <span className="text-[9px] tracking-widest text-gray-600 bg-white/5 px-2 py-1 rounded">PENDING</span>
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-1">{bookingsData.length}</h3>
                            <p className="text-gray-500 text-[9px] tracking-[0.2em] uppercase">Ride Reservations</p>
                        </BentoItem>
                    </Link>

                    {/* Contacts Card */}
                    <Link href="/dashboard/contacts" className="contents">
                        <BentoItem className="cursor-pointer border-t-[3px] border-t-white/10 hover:border-t-[#B09C6D] transition-all">
                            <div className="flex justify-between items-start mb-6">
                                <Mail size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                                <span className="text-[9px] tracking-widest text-[#B09C6D] bg-[#B09C6D]/10 px-2 py-1 rounded">INBOX</span>
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-1">{contactsData.length}</h3>
                            <p className="text-gray-500 text-[9px] tracking-[0.2em] uppercase">Unread Queries</p>
                        </BentoItem>
                    </Link>

                    {/* Social Stats - Split */}
                    <BentoItem className="flex items-center justify-between !py-0">
                        <div className="flex items-center gap-4">
                            <div className="p-2 bg-[#1877F2]/10 rounded-lg">
                                <Facebook size={18} className="text-[#1877F2]" />
                            </div>
                            <div>
                                <span className="block text-xl font-bold text-white">{facebookCount}</span>
                                <span className="text-[8px] tracking-wider text-gray-500 uppercase">Facebook</span>
                            </div>
                        </div>
                    </BentoItem>

                    <BentoItem className="flex items-center justify-between !py-0">
                        <div className="flex items-center gap-4">
                            <div className="p-2 bg-white/5 rounded-lg">
                                <GoogleIcon className="w-4 h-4" />
                            </div>
                            <div>
                                <span className="block text-xl font-bold text-white">{googleCount}</span>
                                <span className="text-[8px] tracking-wider text-gray-500 uppercase">Google</span>
                            </div>
                        </div>
                    </BentoItem>

                </div>

                {/* Users Table Section */}
                <div className="mt-12">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-white tracking-widest uppercase">Member Directory</h3>
                        <button
                            onClick={() => window.location.reload()}
                            className="p-2 bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-gray-400 hover:text-white flex items-center gap-2"
                        >
                            <Activity size={14} />
                            <span className="text-[10px] tracking-widest uppercase">Refresh Data</span>
                        </button>
                    </div>

                    <div className="bg-white/[0.02] border border-white/10 backdrop-blur-sm overflow-hidden min-h-[400px]">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-white/5 bg-white/[0.02]">
                                        <th className="px-8 py-5 text-[9px] text-gray-500 tracking-[0.2em] uppercase font-bold">User Profile</th>
                                        <th className="px-8 py-5 text-[9px] text-gray-500 tracking-[0.2em] uppercase font-bold">Auth Method</th>
                                        <th className="px-8 py-5 text-[9px] text-gray-500 tracking-[0.2em] uppercase font-bold">Contact Details</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {usersData.length > 0 ? usersData.map((user, i) => (
                                        <tr key={i} className="group hover:bg-white/[0.03] transition-colors">
                                            <td className="px-8 py-6">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#B09C6D] to-black flex items-center justify-center text-[10px] font-bold text-white border border-white/10">
                                                        {user.name?.charAt(0) || 'U'}
                                                    </div>
                                                    <span className="text-sm text-white font-medium group-hover:text-[#B09C6D] transition-colors">{user.name}</span>
                                                </div>
                                            </td>
                                            <td className="px-8 py-6">
                                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/5">
                                                    {user.provider?.toLowerCase() === 'facebook' ? (
                                                        <Facebook size={10} className="text-[#1877F2]" />
                                                    ) : user.provider?.toLowerCase() === 'google' ? (
                                                        <GoogleIcon className="w-3 h-3" />
                                                    ) : (
                                                        <Mail size={10} className="text-[#B09C6D]" />
                                                    )}
                                                    <span className="text-[9px] font-bold tracking-wider uppercase text-gray-300">{user.provider || 'Email'}</span>
                                                </div>
                                            </td>
                                            <td className="px-8 py-6">
                                                <div className="flex flex-col gap-1">
                                                    <span className="text-xs text-gray-400 font-light">{user.email}</span>
                                                    {user.phone && <span className="text-[10px] text-gray-600 tracking-wider">{user.phone}</span>}
                                                </div>
                                            </td>
                                        </tr>
                                    )) : (
                                        <tr>
                                            <td colSpan={3} className="px-8 py-20 text-center text-gray-600 text-[10px] tracking-widest uppercase">
                                                No members found in the database.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
