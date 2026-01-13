"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none p-2"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </div>
            </div>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] md:hidden"
                        />

                        {/* Side Drawer */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-[#0a0a0a] border-l border-white/10 z-[110] p-10 flex flex-col md:hidden shadow-2xl"
                        >
                            <div className="flex items-center justify-between mb-12">
                                <Link href="/" onClick={() => setIsOpen(false)}>
                                    <img src="/logo.png" alt="LV ELITE CONCIERGE" className="h-16 w-auto" />
                                </Link>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-white hover:text-[#B09C6D] transition-colors p-2"
                                    aria-label="Close menu"
                                >
                                    <X size={28} />
                                </button>
                            </div>

                            <div className="flex flex-col space-y-8">
                                {navLinks.map((link) => {
                                    const isActive = pathname === link.href;
                                    return (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className={cn(
                                                "font-bold transition-colors uppercase",
                                                isActive ? "text-[#B09C6D]" : "text-white hover:text-[#B09C6D]"
                                            )}
                                        >
                                            {link.name}
                                        </Link>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;