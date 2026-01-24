"use client";

import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Facebook, Mail, Phone, Lock, ArrowRight, User } from 'lucide-react';

export default function RegisterPage() {
    const { register } = useAuth();
    const [formData, setFormData] = useState({
        username: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

    const handleSocialLogin = (provider: string) => {
        window.location.href = `${apiUrl}/auth/${provider}/redirect`;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        await register(formData.username, formData.email, formData.phone, formData.password, formData.confirmPassword);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen w-full flex bg-black relative overflow-hidden text-white">
            {/* Left Side - Image/Hero */}
            <div className="hidden lg:flex w-1/2 relative flex-col justify-between p-12 lg:p-16 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/serviceImagePage3.jpg"
                        alt="Join the Elite"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent"></div>
                </div>

                <div className="relative z-10">
                    <img src="/logo.png" alt="LV ELITE" className="h-12 w-auto mb-8" />
                </div>

                <div className="relative z-10 space-y-6 max-w-lg">
                    <h1 className="text-5xl font-serif italic tracking-tight leading-tight">
                        Begins Your <span className="text-[#B09C6D]">Legacy</span>
                    </h1>
                    <p className="text-gray-300 font-light tracking-wider leading-relaxed">
                        Join an exclusive network of travelers who demand nothing less than perfection. Your journey to exceptional luxury starts here.
                    </p>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 lg:p-24 relative">
                {/* Mobile Background */}
                <div className="absolute inset-0 lg:hidden z-0">
                    <img
                        src="/serviceImagePage3.jpg"
                        alt="Background"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-black/90"></div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-md relative z-10 space-y-8"
                >
                    <div className="text-center lg:text-left space-y-2">
                        <h2 className="text-3xl font-bold tracking-[0.1em] uppercase text-[#B09C6D]">Create Account</h2>
                        <p className="text-gray-500 text-xs tracking-[0.2em] uppercase">Enter your details to join LV Elite</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-4">
                            <div className="group space-y-2">
                                <label className="text-[10px] text-gray-500 font-bold tracking-widest uppercase ml-1 group-focus-within:text-[#B09C6D] transition-colors">Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Enter username"
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white placeholder-gray-700 focus:outline-none focus:border-[#B09C6D] transition-all text-sm"
                                />
                            </div>

                            <div className="group space-y-2">
                                <label className="text-[10px] text-gray-500 font-bold tracking-widest uppercase ml-1 group-focus-within:text-[#B09C6D] transition-colors">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="+1 (555) 000-0000"
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white placeholder-gray-700 focus:outline-none focus:border-[#B09C6D] transition-all text-sm"
                                />
                            </div>

                            <div className="group space-y-2">
                                <label className="text-[10px] text-gray-500 font-bold tracking-widest uppercase ml-1 group-focus-within:text-[#B09C6D] transition-colors">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="name@example.com"
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white placeholder-gray-700 focus:outline-none focus:border-[#B09C6D] transition-all text-sm"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="group space-y-2">
                                    <label className="text-[10px] text-gray-500 font-bold tracking-widest uppercase ml-1 group-focus-within:text-[#B09C6D] transition-colors">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="••••••••"
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white placeholder-gray-700 focus:outline-none focus:border-[#B09C6D] transition-all text-sm"
                                    />
                                </div>
                                <div className="group space-y-2">
                                    <label className="text-[10px] text-gray-500 font-bold tracking-widest uppercase ml-1 group-focus-within:text-[#B09C6D] transition-colors">Confirm</label>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        placeholder="••••••••"
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white placeholder-gray-700 focus:outline-none focus:border-[#B09C6D] transition-all text-sm"
                                    />
                                </div>
                            </div>
                        </div>

                        <button className="w-full bg-[#B09C6D] hover:bg-white text-black font-black py-4 tracking-[0.2em] uppercase text-xs transition-all duration-300 mt-6">
                            Create Account
                        </button>
                    </form>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-white/10"></div>
                        </div>
                        <div className="relative flex justify-center text-[10px] uppercase tracking-widest">
                            <span className="bg-black px-4 text-gray-600">Or sign up with</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <button
                            onClick={() => handleSocialLogin('facebook')}
                            className="flex items-center justify-center gap-3 px-4 py-3 border border-white/10 hover:bg-white/5 transition-colors group"
                        >
                            <Facebook size={16} className="text-gray-400 group-hover:text-[#1877F2] transition-colors" />
                            <span className="text-[10px] uppercase tracking-wider text-gray-400 group-hover:text-white">Facebook</span>
                        </button>
                        <button
                            onClick={() => handleSocialLogin('google')}
                            className="flex items-center justify-center gap-3 px-4 py-3 border border-white/10 hover:bg-white/5 transition-colors group"
                        >
                            <svg className="w-4 h-4 grayscale group-hover:grayscale-0 transition-all opacity-60 group-hover:opacity-100" viewBox="0 0 24 24">
                                <path
                                    fill="#4285F4"
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                />
                                <path
                                    fill="#34A853"
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                />
                                <path
                                    fill="#FBBC05"
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z"
                                />
                                <path
                                    fill="#EA4335"
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                />
                            </svg>
                            <span className="text-[10px] uppercase tracking-wider text-gray-400 group-hover:text-white">Google</span>
                        </button>
                    </div>

                    <p className="text-center text-gray-500 text-[10px] tracking-widest uppercase">
                        Already have an account?
                        <Link href="/login" className="text-[#B09C6D] hover:text-white transition-colors ml-2 border-b border-[#B09C6D]/30 hover:border-[#B09C6D] pb-0.5">
                            Log In
                        </Link>
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
