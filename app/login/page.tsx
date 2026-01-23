"use client";

import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Facebook, Mail, Lock, ArrowRight } from 'lucide-react';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

    const handleSocialLogin = (provider: string) => {
        window.location.href = `${apiUrl}/auth/${provider}/redirect`;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        const success = await login(email, password);
        if (!success) {
            setError('Invalid credentials. Please try again or create an account.');
        }
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-black relative overflow-hidden py-20">
            {/* Background Decor */}
            <div className="absolute inset-0">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#B09C6D]/10 rounded-full blur-[150px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#B09C6D]/5 rounded-full blur-[150px]"></div>
                <img src="/luxury_suv_hero.png" className="absolute inset-0 w-full h-full object-cover opacity-[0.2]" alt="" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black/90"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative z-10 w-full max-w-md px-6"
            >
                <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-10 md:p-14 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#B09C6D]"></div>

                    <div className="text-center mb-12">
                        <img src="/logo.png" alt="LV ELITE" className="h-16 w-auto mx-auto mb-6" />
                        <h2 className="text-2xl font-bold text-white tracking-[0.2em] uppercase">Welcome Back</h2>
                        <p className="text-gray-500 text-[9px] tracking-[0.3em] uppercase mt-2">Log in to your elite profile</p>
                    </div>

                    {error && (
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] tracking-widest uppercase p-4 mb-8 text-center"
                        >
                            {error}
                        </motion.div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] text-gray-500 font-bold tracking-widest uppercase ml-1">Email Address</label>
                            <div className="relative">
                                <Mail size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B09C6D]/60" />
                                <input
                                    type="email"
                                    value={email}
                                    placeholder="your@email.com"
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full bg-white/5 border border-white/10 px-12 py-4 text-white text-xs focus:outline-none focus:border-[#B09C6D] transition-colors"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center mb-2 px-1">
                                <label className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">Password</label>
                                <button type="button" className="text-[8px] text-[#B09C6D] font-bold tracking-widest uppercase hover:text-white transition-colors">Forgot?</button>
                            </div>
                            <div className="relative">
                                <Lock size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B09C6D]/60" />
                                <input
                                    type="password"
                                    value={password}
                                    placeholder="••••••••"
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="w-full bg-white/5 border border-white/10 px-12 py-4 text-white text-xs focus:outline-none focus:border-[#B09C6D] transition-colors"
                                />
                            </div>
                        </div>

                        <button className="w-full bg-[#B09C6D] hover:bg-white text-black font-black py-4 tracking-[0.3em] uppercase text-xs transition-all duration-500 group mt-4">
                            <span className="flex items-center justify-center gap-3">
                                Sign In
                                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                            </span>
                        </button>
                    </form>

                    <div className="mt-10 pt-10 border-t border-white/5 space-y-6">
                        <button
                            onClick={() => handleSocialLogin('facebook')}
                            className="w-full bg-[#1877F2]/10 border border-[#1877F2]/20 hover:bg-[#1877F2]/20 text-white font-bold py-4 px-6 text-[10px] tracking-[0.2em] uppercase transition-all flex items-center justify-center gap-4"
                        >
                            <Facebook size={18} fill="currentColor" />
                            Continue with Facebook
                        </button>

                        <button
                            onClick={() => handleSocialLogin('google')}
                            className="w-full bg-white/[0.03] border border-white/10 hover:bg-white/10 text-white font-bold py-4 px-6 text-[10px] tracking-[0.2em] uppercase transition-all flex items-center justify-center gap-4"
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24">
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
                            Continue with Google
                        </button>

                        <p className="text-center text-gray-500 text-[10px] tracking-widest uppercase">
                            New to LV Elite? <Link href="/register" className="text-[#B09C6D] hover:text-white transition-colors font-bold ml-2">Create Account</Link>
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
