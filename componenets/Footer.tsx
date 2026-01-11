"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-black py-16 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 text-center md:text-left">
                    {/* Left Side: Branding & Copyright */}
                    <div className="flex flex-col space-y-4">
                        <h2 className="text-[#B09C6D] font-bold text-lg tracking-widest uppercase">
                            VEGAS VIP RIDES
                        </h2>
                        <div className="text-gray-500 text-sm font-light leading-relaxed max-w-xs">
                            <p>© 2026 vegasviprides.com.</p>
                            <p>Created by Big Marketing USA BMUSA</p>
                        </div>
                    </div>

                    {/* Center: Navigation Links */}
                    <nav className="flex items-center space-x-8 text-sm font-medium tracking-wide">
                        <Link href="/" className="text-white hover:text-[#B09C6D] transition-colors">
                            Home
                        </Link>
                        <Link href="/contact" className="text-gray-400 hover:text-[#B09C6D] transition-colors">
                            Contact
                        </Link>
                        <Link href="/services" className="text-gray-400 hover:text-[#B09C6D] transition-colors">
                            Services
                        </Link>
                    </nav>

                    {/* Right Side: Social Media Icons */}
                    <div className="flex items-center space-x-6">
                        <Link href="#" className="text-gray-400 hover:text-white transition-all transform hover:scale-110">
                            <Facebook className="w-6 h-6" />
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-white transition-all transform hover:scale-110">
                            <Instagram className="w-6 h-6" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;