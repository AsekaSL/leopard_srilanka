"use client";

import Link from "next/link";
import { NavLink } from "@/types";

const navLinks: NavLink[] = [
    { label: "Home", href: "#" },
    { label: "Packages", href: "#packages" },
    { label: "Experience", href: "#experience" },
    { label: "Destinations", href: "#destinations" },
    { label: "About", href: "#about" },
];

export default function Navbar() {
    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-[#181611]/90 backdrop-blur-md border-b border-border-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo */}
                    <div className="flex items-center gap-3 text-white cursor-pointer">
                        <div className="size-8 text-primary">
                            <span className="material-symbols-outlined text-3xl">pets</span>
                        </div>
                        <h2 className="text-white text-lg sm:text-xl font-bold tracking-tight">
                            Leopard Sri Lanka
                        </h2>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-gray-300 hover:text-primary transition-colors text-sm font-medium"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <a
                            href="tel:+94770000000"
                            className="hidden lg:flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-primary"
                        >
                            <span className="material-symbols-outlined text-[20px]">call</span>
                            <span>+94 77 123 4567</span>
                        </a>
                        <button className="bg-primary hover:bg-yellow-500 text-[#181611] text-sm font-bold py-2.5 px-5 rounded-lg transition-colors duration-200">
                            Book Safari
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
