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
        { name: "Service", href: "/services" },
    ];

    return (
        <footer className="bg-black py-16 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 text-center md:text-left">
                    <div className="flex flex-col space-y-4">
                        <img src="./logo.png" className="h-20 w-40" alt="" />
                        <div className="text-gray-500 text-sm font-light leading-relaxed max-w-xs">
                            <p>© 2026 lveliteconcierge.com</p>
                            <p>Created by Wixerp.com</p>
                        </div>
                    </div>

                    <nav className="flex items-center space-x-8 text-sm font-medium tracking-wide uppercase">
                        {footerLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`${isActive ? "text-[#B09C6D]" : "text-gray-400 hover:text-white"
                                        } transition-colors`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </nav>

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