"use client";

import Link from "next/link";
import { NavLink } from "@/types";
import { navLinks } from "@/lib/data";
import { useState } from "react";
import { usePathname } from 'next/navigation'
import { tw } from "@/lib/theme";



export default function Navbar() {

    const [open, setOpen] = useState(false);
    const pathname = usePathname()

    return (
        <div className={`fixed top-0 left-0 right-0 z-50 bg-[#181611]/90 backdrop-blur-md border-b border-[#393428]`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo */}
                    <Link href='/' > 
                        <div className="flex items-center gap-3 text-white cursor-pointer">
                            <div className={`size-8 ${tw.textPrimary}`}>
                                <span className="material-symbols-outlined text-3xl">pets</span>
                            </div>
                            <h2 className="text-white text-lg sm:text-xl font-bold tracking-tight">
                                Leopard Sri Lanka
                            </h2>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link: NavLink) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-gray-300 hover:${tw.textPrimary} transition-colors text-sm font-medium ${pathname === link.href ? 'text-[#ecb213]' : ''}` }
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Actions
                    <div className="flex items-center gap-4">
                        <a
                            href="tel:+94770000000"
                            className="hidden lg:flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-primary"
                        >
                            <span className="material-symbols-outlined text-[20px]">call</span>
                            <span>+94 77 123 4567</span>
                        </a>
                        <button className="bg-primary hover:bg-yellow-300 cursor-pointer text-[#181611] text-sm font-bold py-2.5 px-5 rounded-lg transition-colors duration-200">
                            Book Safari
                        </button>
                    </div> */}
                    <div className="flex items-center gap-4">
                    {/* Phone (desktop only) */}
                    <a
                        href="tel:+94770000000"
                        className={`hidden lg:flex items-center gap-2 text-sm font-medium text-gray-300 hover:${tw.textPrimary}`}
                    >
                        <span className="material-symbols-outlined text-[20px]">call</span>
                        <span>+94 77 123 4567</span>
                    </a>

                    {/* Book button (desktop) */}
                    <Link href='/packages' >
                        <button className={`hidden md:block ${tw.bgPrimary} hover:bg-yellow-300 text-[#181611] cursor-pointer text-sm font-bold py-2.5 px-5 rounded-lg transition-colors`}>
                            Book Safari
                        </button>
                    </Link>
                    {/* Hamburger (mobile) */}
                    <button
                        onClick={() => setOpen(!open)}
                        className={`md:hidden size-10 flex items-center justify-center ${tw.textPrimary}`}
                    >
                        <span className="material-symbols-outlined text-3xl">
                        {open ? "close" : "menu"}
                        </span>
                    </button>
                    </div>
                    {open && (
                    <div className={`md:hidden absolute top-full left-0 w-full bg-[#12110f] border-t ${tw.borderPrimary}/20`}>
                        <div className="flex flex-col px-6 py-4 space-y-4 items-center">
                        {navLinks.map((link: NavLink) => (
                            <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className={`text-gray-300 hover:${tw.textPrimary} text-base font-medium ${pathname === link.href ? tw.textPrimary : ''}`  }
                            >
                            {link.label}
                            </Link>
                        ))}
                        <Link href="/packages" className="w-full md:w-auto">
                            <button className={`w-full mt-4 cursor-pointer ${tw.bgPrimary} text-[#181611] font-bold py-3 rounded-lg`} onClick={() => setOpen(!open)}>
                                Book Safari
                            </button>
                        </Link>
                        
                        </div>
                    </div>
                    )}

                </div>
            </div>
        </div>
    );
}
