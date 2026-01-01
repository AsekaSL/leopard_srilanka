import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#110f0b] border-t border-border-dark pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center gap-2 text-white mb-6">
                            <div className="size-6 text-primary">
                                <span className="material-symbols-outlined">pets</span>
                            </div>
                            <h2 className="text-lg font-bold">Leopard Sri Lanka</h2>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            Premier wildlife safari operator in Sri Lanka, dedicated to ethical
                            tours and unforgettable experiences.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-xl">facebook</span>
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
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">
                                    Safari Packages
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">
                                    Destinations
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">
                                    About Us
                                </Link>
                            </li>
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
                                    No 123, Safari Road,
                                    <br />
                                    Tissamaharama, Sri Lanka
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary text-sm">call</span>
                                <span>+94 77 123 4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary text-sm">mail</span>
                                <span>hello@leopardsrilanka.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Newsletter</h4>
                        <p className="text-gray-500 text-sm mb-4">
                            Subscribe for wildlife updates and seasonal offers.
                        </p>
                        <form className="flex flex-col gap-3">
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
