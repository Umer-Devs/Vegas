"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useAuth } from "@/context/AuthContext";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const { isAdmin, logout } = useAuth();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Hide navbar on dashboard
    if (pathname === '/dashboard') return null;

    const navLinks = [
        { name: "HOME", href: "/" },
        { name: "CONTACT", href: "/contact" },
        { name: "SERVICES", href: "/services" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 w-full z-50 transition-all py-5 duration-300",
                "bg-black bg-transparent"
            )}
        >
            <div className="absolute inset-0 bg-black/45 -z-10 "></div>
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center text-white">
                {/* Logo Placeholder - The image shown had a circular gold logo */}
                <div className="flex-shrink-0">
                    <Link href="/" className="flex items-center space-x-2">
                        <img src="/logo.png" alt="LV ELITE CONCIERGE" className=" h-20 w-30 sm:h-24 sm:w-40" />
                    </Link>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-12">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-sm font-semibold tracking-widest hover:text-[#B09C6D] transition-colors uppercase",
                                    isActive ? "text-[#B09C6D]" : "text-white"
                                )}
                            >
                                {link.name}
                            </Link>
                        );
                    })}

                    {isAdmin ? (
                        <div className="flex items-center space-x-8 pl-8 border-l border-white/10">
                            <Link
                                href="/dashboard"
                                className={cn(
                                    "text-[10px] font-bold tracking-[0.2em] uppercase flex items-center gap-2 transition-colors",
                                    pathname === "/dashboard" ? "text-[#B09C6D]" : "text-white hover:text-[#B09C6D]"
                                )}
                            >
                                <ShieldCheck size={14} className="text-[#B09C6D]" />
                                Admin
                            </Link>
                            <button
                                onClick={logout}
                                className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 hover:text-white transition-colors"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <Link
                            href="/login"
                            className="bg-[#B09C6D] text-black text-[10px] font-bold tracking-[0.2em] uppercase px-8 py-2.5 hover:bg-white transition-all transform hover:scale-105"
                        >
                            Sign In
                        </Link>
                    )}
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden flex items-center gap-4">
                    {isAdmin && (
                        <Link href="/dashboard" className="text-[#B09C6D]">
                            <ShieldCheck size={24} />
                        </Link>
                    )}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none p-2"
                    >
                        {isOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </div>
            </div>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/95 z-[100] md:hidden"
                        />

                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.3 }}
                            className="fixed top-0 right-0 h-full w-full bg-black z-[110] p-10 flex flex-col md:hidden"
                        >
                            <div className="flex items-center justify-between mb-16">
                                <Link href="/" onClick={() => setIsOpen(false)}>
                                    <img src="/logo.png" alt="LV ELITE" className="h-12 w-auto" />
                                </Link>
                                <button onClick={() => setIsOpen(false)} className="text-[#B09C6D]">
                                    <X size={32} />
                                </button>
                            </div>

                            <div className="flex flex-col space-y-10">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-2xl font-bold tracking-[0.2em] uppercase text-white hover:text-[#B09C6D]"
                                    >
                                        {link.name}
                                    </Link>
                                ))}

                                <div className="pt-10 border-t border-white/10 flex flex-col space-y-8">
                                    {isAdmin ? (
                                        <>
                                            <Link
                                                href="/dashboard"
                                                onClick={() => setIsOpen(false)}
                                                className="text-2xl font-bold tracking-[0.2em] uppercase text-[#B09C6D]"
                                            >
                                                Admin Dashboard
                                            </Link>
                                            <button
                                                onClick={() => { logout(); setIsOpen(false); }}
                                                className="text-left text-2xl font-bold tracking-[0.2em] uppercase text-gray-600"
                                            >
                                                Sign Out
                                            </button>
                                        </>
                                    ) : (
                                        <Link
                                            href="/login"
                                            onClick={() => setIsOpen(false)}
                                            className="text-2xl font-bold tracking-[0.2em] uppercase text-[#B09C6D]"
                                        >
                                            Sign In
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
