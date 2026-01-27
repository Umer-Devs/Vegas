"use client";

import React, { useEffect, useState } from 'react';
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
    Smartphone,
    Chrome,
    MapPin,
    Calendar,
    Clock
} from 'lucide-react';
import { motion } from 'framer-motion';
import api from '@/lib/api';

const categoryConfig: Record<string, any> = {
    registrations: {
        title: "Total Registered Users",
        icon: Users,
        color: "#B09C6D",
        description: "Full directory of all verified members across the platform.",
        endpoint: '/users'
    },
    bookings: {
        title: "Booking Form Submissions",
        icon: ClipboardList,
        color: "#B09C6D",
        description: "Detailed logs of concierge and ride booking inquiries.",
        endpoint: '/bookings'
    },
    facebook: {
        title: "Facebook Authentications",
        icon: Facebook,
        color: "#1877F2",
        description: "Analytics for users registered via Facebook OAuth.",
        endpoint: '/users'
    },
    google: {
        title: "Google Authentications",
        icon: Chrome,
        color: "#4285F4",
        description: "Analytics for users registered via Google OAuth.",
        endpoint: '/users'
    },
    contacts: {
        title: "Contact Queries",
        icon: Mail,
        color: "#B09C6D",
        description: "Latest inquiries and messages from potential clients.",
        endpoint: '/contacts'
    }
};

const GoogleIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z" />
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
);

export default function DetailedCategoryPage() {
    const params = useParams();
    const router = useRouter();
    const { logout, isAdmin, loading: authLoading } = useAuth();
    const category = params.category as string;
    const config = categoryConfig[category] || categoryConfig.registrations;

    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!authLoading && !isAdmin) {
            router.push('/');
        }
    }, [isAdmin, authLoading, router]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get(config.endpoint);
                if (response.data.status) {
                    let filteredData = response.data.data;

                    if (category === 'facebook') {
                        filteredData = filteredData.filter((u: any) => u.provider?.toLowerCase() === 'facebook');
                    } else if (category === 'google') {
                        filteredData = filteredData.filter((u: any) => u.provider?.toLowerCase() === 'google');
                    }

                    setData(filteredData);
                }
            } catch (err) {
                console.error("Error fetching category data:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [category, config.endpoint]);

    const renderTableHeaders = () => {
        if (category === 'bookings') {
            return (
                <tr className="bg-white/[0.05] border-b border-white/10">
                    <th className="px-10 py-6 text-[9px] text-gray-400 tracking-[0.2em] uppercase font-bold text-left">Order Reference</th>
                    <th className="px-10 py-6 text-[9px] text-gray-400 tracking-[0.2em] uppercase font-bold text-left">Member Email</th>
                    <th className="px-10 py-6 text-[9px] text-gray-400 tracking-[0.2em] uppercase font-bold text-left">Trip Configuration</th>
                    <th className="px-10 py-6 text-[9px] text-gray-400 tracking-[0.2em] uppercase font-bold text-left">Pickup Details</th>
                    <th className="px-10 py-6 text-[9px] text-gray-400 tracking-[0.2em] uppercase font-bold text-left">Return Details</th>
                </tr>
            );
        }

        if (category === 'contacts') {
            return (
                <tr className="bg-white/[0.05] border-b border-white/10">
                    <th className="px-10 py-6 text-[9px] text-gray-400 tracking-[0.2em] uppercase font-bold text-left">Inquiry Source</th>
                    <th className="px-10 py-6 text-[9px] text-gray-400 tracking-[0.2em] uppercase font-bold text-center">Contact Info</th>
                    <th className="px-10 py-6 text-[9px] text-gray-400 tracking-[0.2em] uppercase font-bold text-center">Submission Date</th>
                </tr>
            );
        }

        return (
            <tr className="bg-white/[0.05] border-b border-white/10">
                <th className="px-10 py-6 text-[9px] text-gray-400 tracking-[0.2em] uppercase font-bold text-left">Member Information</th>
                <th className="px-10 py-6 text-[9px] text-gray-400 tracking-[0.2em] uppercase font-bold text-center">Contact Method</th>
                <th className="px-10 py-6 text-[9px] text-gray-400 tracking-[0.2em] uppercase font-bold text-center">Registration Date</th>
            </tr>
        );
    };

    const renderRow = (item: any, i: number) => {
        if (category === 'bookings') {
            return (
                <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                    <td className="px-10 py-8">
                        <div className="flex flex-col gap-2">
                            <span className="text-[11px] font-bold text-[#B09C6D] tracking-wider">
                                {item.order_number || `#{item.id}`}
                            </span>
                            <span className="text-[9px] text-gray-500 font-medium">REF ID: {item.id}</span>
                        </div>
                    </td>
                    <td className="px-10 py-8">
                        <div className="flex flex-col gap-1">
                            <span className="text-white text-[10px] font-bold tracking-widest lowercase group-hover:text-[#B09C6D] transition-colors">
                                {item.user_email || item.email || 'N/A'}
                            </span>
                            <span className="text-[8px] text-gray-600 tracking-widest uppercase">Requester</span>
                        </div>
                    </td>
                    <td className="px-10 py-8">
                        <div className="flex flex-col gap-2">
                            <span className="px-3 py-1 bg-[#B09C6D]/10 border border-[#B09C6D]/20 text-[#B09C6D] text-[9px] font-bold tracking-widest uppercase w-fit">
                                {item.type}
                            </span>
                        </div>
                    </td>
                    <td className="px-10 py-8">
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 text-white">
                                <MapPin size={10} className="text-[#B09C6D]" />
                                <span className="text-[10px] font-bold tracking-widest uppercase">{item.pickup_location}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-400">
                                <Activity size={10} className="opacity-30" />
                                <span className="text-[10px] tracking-widest uppercase">{item.dropoff_location}</span>
                            </div>
                            <div className="flex items-center gap-4 mt-2">
                                <div className="flex items-center gap-1.5 text-gray-500">
                                    <Calendar size={10} />
                                    <span className="text-[9px] tracking-widest">{item.pickup_date}</span>
                                </div>
                                <div className="flex items-center gap-1.5 text-gray-500">
                                    <Clock size={10} />
                                    <span className="text-[9px] tracking-widest">{item.pickup_time}</span>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td className="px-10 py-8">
                        {item.return_pickup_location || item.return_date ? (
                            <div className="space-y-3">
                                {item.return_pickup_location && (
                                    <div className="flex items-center gap-2 text-white/70">
                                        <MapPin size={10} className="text-[#B09C6D]/50" />
                                        <span className="text-[10px] font-bold tracking-widest uppercase">{item.return_pickup_location}</span>
                                    </div>
                                )}
                                {item.return_dropoff_location && (
                                    <div className="flex items-center gap-2 text-gray-500">
                                        <Activity size={10} className="opacity-20" />
                                        <span className="text-[10px] tracking-widest uppercase">{item.return_dropoff_location}</span>
                                    </div>
                                )}
                                <div className="flex items-center gap-4 mt-2">
                                    {item.return_date && (
                                        <div className="flex items-center gap-1.5 text-gray-600">
                                            <Calendar size={10} />
                                            <span className="text-[9px] tracking-widest">{item.return_date}</span>
                                        </div>
                                    )}
                                    {item.return_time && (
                                        <div className="flex items-center gap-1.5 text-gray-600">
                                            <Clock size={10} />
                                            <span className="text-[9px] tracking-widest">{item.return_time}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ) : (
                            <span className="text-[8px] text-gray-700 tracking-[0.3em] uppercase italic">One-Way Journey</span>
                        )}
                    </td>
                </tr>
            );
        }

        if (category === 'contacts') {
            return (
                <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                    <td className="px-10 py-8">
                        <div className="flex items-center gap-5">
                            <div className="w-12 h-12 bg-black border border-white/10 flex items-center justify-center text-[12px] font-bold text-[#B09C6D] group-hover:border-[#B09C6D] transition-colors">
                                {item.first_name?.charAt(0)}
                            </div>
                            <div>
                                <p className="text-white text-[13px] font-bold tracking-widest uppercase">{item.first_name} {item.last_name}</p>
                                <p className="text-gray-500 text-[10px] tracking-widest lowercase group-hover:text-gray-300 transition-colors">{item.email}</p>
                            </div>
                        </div>
                    </td>
                    <td className="px-10 py-8">
                        <div className="flex flex-col items-center gap-2 text-gray-600">
                            <div className="flex items-center gap-2">
                                <Smartphone size={12} />
                                <span className="text-[10px] tracking-widest text-white font-bold">{item.phone}</span>
                            </div>
                        </div>
                    </td>
                    <td className="px-10 py-8 text-center uppercase tracking-widest text-[10px] text-gray-400">
                        {new Date(item.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </td>
                </tr>
            );
        }

        return (
            <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                <td className="px-10 py-8">
                    <div className="flex items-center gap-5">
                        <div className="w-12 h-12 bg-black border border-white/10 flex items-center justify-center text-[12px] font-bold text-[#B09C6D] group-hover:border-[#B09C6D] transition-colors">
                            {item.name?.charAt(0)}
                        </div>
                        <div>
                            <p className="text-white text-[13px] font-bold tracking-widest uppercase">{item.name}</p>
                            <p className="text-gray-500 text-[10px] tracking-widest lowercase group-hover:text-gray-300 transition-colors">{item.email}</p>
                        </div>
                    </div>
                </td>
                <td className="px-10 py-8">
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex items-center gap-2">
                            {item.provider?.toLowerCase() === 'facebook' ? (
                                <Facebook size={12} className="text-[#1877F2]" />
                            ) : item.provider?.toLowerCase() === 'google' ? (
                                <GoogleIcon className="w-3 h-3" />
                            ) : (
                                <Mail size={12} className="text-[#B09C6D]" />
                            )}
                            <span className="text-[10px] tracking-widest uppercase font-bold">{item.provider || 'Email'}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <Smartphone size={10} />
                            <span className="text-[9px] tracking-widest">{item.phone || 'N/A'}</span>
                        </div>
                    </div>
                </td>
                <td className="px-10 py-8 text-center text-[10px] tracking-widest uppercase text-gray-400">
                    {item.created_at ? new Date(item.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'N/A'}
                </td>
            </tr>
        );
    };

    if (loading) {
        return <div className="min-h-screen bg-black flex items-center justify-center text-[#B09C6D]">Loading Intelligence...</div>;
    }

    return (
        <div className="min-h-screen bg-black text-white flex flex-col pt-10 pb-20 overflow-x-hidden">
            <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
                <img src="/luxury_suv_fleet.png" className="absolute top-0 left-0 w-full h-full object-cover opacity-[0.05]" alt="" />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
            </div>

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
                    <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-l-2 border-[#B09C6D] pl-8 py-2">
                        <div>
                            <div className="flex items-center gap-4 mb-3">
                                {category === 'google' ? <GoogleIcon className="w-7 h-7" /> : <config.icon size={28} style={{ color: config.color }} />}
                                <span className="text-[#B09C6D] text-[10px] tracking-[0.4em] uppercase font-bold">Category Overview</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold tracking-widest uppercase mb-4">{config.title}</h1>
                            <p className="text-gray-500 text-[10px] tracking-[0.2em] uppercase max-w-xl">{config.description}</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 px-8 py-6 text-right">
                            <p className="text-[9px] text-gray-500 tracking-widest uppercase mb-1">Total Found</p>
                            <p className="text-4xl font-bold text-white tracking-tighter">{data.length}</p>
                        </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur-3xl border border-white/10 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    {renderTableHeaders()}
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {data.length > 0 ? data.map((item, i) => renderRow(item, i)) : (
                                        <tr>
                                            <td colSpan={3} className="px-10 py-20 text-center text-gray-600 text-[10px] tracking-widest uppercase">
                                                No intelligence data found for this category
                                            </td>
                                        </tr>
                                    )}
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

