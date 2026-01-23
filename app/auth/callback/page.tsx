"use client";

import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { motion } from 'framer-motion';

const AuthCallbackPage = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const { loginWithToken } = useAuth();
    const [status, setStatus] = useState('Authenticating...');

    useEffect(() => {
        const token = searchParams.get('token');
        if (token) {
            handleCallback(token);
        } else {
            setStatus('Error: No token provided');
            setTimeout(() => router.push('/login'), 3000);
        }
    }, [searchParams]);

    const handleCallback = async (token: string) => {
        const success = await loginWithToken(token);
        if (success) {
            setStatus('Authenticated! Redirecting...');
            router.push('/');
        } else {
            setStatus('Authentication failed. Please try again.');
            setTimeout(() => router.push('/login'), 3000);
        }
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-black relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#B09C6D]/10 rounded-full blur-[150px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#B09C6D]/5 rounded-full blur-[150px]"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black/90"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative z-10 text-center"
            >
                <img src="/logo.png" alt="LV ELITE" className="h-16 w-auto mx-auto mb-8 animate-pulse" />
                <h2 className="text-xl font-bold text-white tracking-[0.2em] uppercase mb-4">{status}</h2>
                <div className="w-12 h-1 bg-[#B09C6D] mx-auto"></div>
            </motion.div>
        </div>
    );
};

export default AuthCallbackPage;
