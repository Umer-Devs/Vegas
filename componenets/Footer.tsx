"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
    const pathname = usePathname();

    const footerLinks = [
        { name: "Home", href: "/" },
        { name: "Contact", href: "/contact" },
        { name: "Services", href: "/services" },
    ];

    const legalLinks = [
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms & Conditions", href: "/terms-conditions" },
        { name: "Data Deletion", href: "/data-deletion" },
    ];

    return (
        <footer className="bg-black py-16 border-t border-white/5 relative z-50">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-12 lg:space-y-0">

                    {/* Logo & Copyright */}
                    <div className="flex flex-col space-y-6">
                        <img src="/logo.png" className="h-16 w-auto object-contain" alt="LV Elite" />
                        <div className="text-gray-500 text-[10px] font-light leading-relaxed tracking-widest uppercase">
                            <p>© 2026 lveliteconcierge.com</p>
                            <p className="mt-1">Created by Wixerp.com</p>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex flex-col md:flex-row gap-12 md:gap-24">
                        {/* Main Links */}
                        <div className="flex flex-col space-y-4">
                            <h4 className="text-[#B09C6D] text-[10px] font-bold tracking-[0.2em] uppercase mb-2">Explore</h4>
                            <nav className="flex flex-col space-y-3">
                                {footerLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={`text-[11px] tracking-widest uppercase transition-colors hover:text-[#B09C6D] ${pathname === link.href ? "text-white font-bold" : "text-gray-400"
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        {/* Legal Links */}
                        <div className="flex flex-col space-y-4">
                            <h4 className="text-[#B09C6D] text-[10px] font-bold tracking-[0.2em] uppercase mb-2">Legal</h4>
                            <nav className="flex flex-col space-y-3">
                                {legalLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={`text-[11px] tracking-widest uppercase transition-colors hover:text-[#B09C6D] ${pathname === link.href ? "text-white font-bold" : "text-gray-400"
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Socials */}
                    <div className="flex items-center space-x-6">
                        <Link href="#" className="text-gray-400 hover:text-[#1877F2] transition-colors transform hover:scale-110">
                            <Facebook className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-[#E4405F] transition-colors transform hover:scale-110">
                            <Instagram className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;