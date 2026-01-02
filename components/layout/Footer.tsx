import { blogs, services } from "@/lib/data";
import { NavLink } from "@/types";
import Link from "next/link";

export const navLinks: NavLink[] = [
    { label: "Home", href: "/" },
    
    { label: "Wildlife", href: "/wildlife" },
    { label: "Discover", href: "/discover" },
    { label: "Packages", href: "/packages" },
    { label: "Visitor Guide", href: "/visitor-guide" },
    { label: "Blog", href: "/blog" },
    { label: "Gallery", href: "/gallery" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Destinations", href: "/destinations" },
];

export default function Footer() {
    return (
        <footer className="bg-[#110f0b] border-t border-border-dark pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-12">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center gap-2 text-white mb-6">
                            <div className="size-6 text-primary">
                                <span className="material-symbols-outlined">pets</span>
                            </div>
                            <h2 className="text-lg font-bold">Leopard Sri Lanka</h2>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            Leopard Yala is your trusted partner for an unforgettable wildlife adventure. Experience the thrill of spotting leopards, elephants, and a variety of exotic wildlife in their natural habitat. Our expert guides, with years of experience, are skilled in tracking elusive you get the most out of your Yala Safari.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-xl">people</span>
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-xl">photo_camera</span>
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-xl">alternate_email</span>
                            </Link>
                        </div>
                    </div>


                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            {
                                navLinks.map((link) => (
                                    <li key={link.label}>
                                        <Link href={link.href} className="hover:text-primary transition-colors">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Our Services</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            {
                                services.map((link) => (
                                    <li key={link.label}>
                                        <Link href={link.href} className="hover:text-primary transition-colors">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>


                    {/* Our Services */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Our Blogs</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            {
                                blogs.map((blog) => (
                                    <li key={blog.label}>
                                        <Link href={blog.href} className="hover:text-primary transition-colors">
                                            {blog.label}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary text-sm mt-0.5">
                                    location_on
                                </span>
                                <span>
                                    Address : 538A, Gagasiripura,
                                    <br />
                                     Debarawewa, Tissamaharama.
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary text-sm">call</span>
                                <span>+94 78 860 8781</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary text-sm">mail</span>
                                <span>hello@leopardyalaSrilanka.com</span>
                            </li>
                        </ul>
                        <div className="mt-5">
                            <h4 className="text-white font-bold mb-1">Newsletter</h4>
                            <p className="text-gray-500 text-sm mb-1">
                                Subscribe for wildlife updates and seasonal offers.
                            </p>
                            <form className="flex flex-col gap-2">
                                <input
                                    className="bg-[#181611] border border-border-dark text-white text-sm rounded-lg focus:ring-primary focus:border-primary p-3 w-full"
                                    placeholder="Your email address"
                                    type="email"
                                />
                                <button
                                    className="bg-primary hover:bg-yellow-500 text-[#181611] font-bold text-sm py-3 px-4 rounded-lg transition-colors"
                                    type="button"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>

                    
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-border-dark pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 text-xs">
                        © 2023 Leopard Sri Lanka. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-gray-600 text-xs">
                        <Link href="#" className="hover:text-gray-400">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="hover:text-gray-400">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
