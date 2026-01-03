'use client'

import Image from "next/image";
import contactHero from "@/public/contact_hero.png";
import { durations } from "@/lib/data";
import { useState } from "react";


export default function ContactPage() {


    const [selectedDuration, setSelectedDuration] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [guestCount, setGuestCount] = useState(1);


    return (
        <div className="bg-background-light dark:bg-background-dark text-[#171611] dark:text-white font-display overflow-x-hidden antialiased">

            {/* Hero Section */}
            <div className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#211d11]/30 to-[#211d11]/90 z-10" />
                    <Image
                        src={contactHero}
                        alt="Misty jungle landscape at twilight in Sri Lanka"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-4xl mx-auto space-y-4">
                    <span className="text-primary text-sm font-bold tracking-wider uppercase">Bespoke Journeys</span>
                    <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight">
                        Contact & Booking
                    </h1>
                    <p className="text-gray-200 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
                        Curating unforgettable encounters with the wild. Reach out to design your bespoke Sri Lankan safari experience.
                    </p>
                </div>
            </div>

            {/* Content Grid Layout */}
            <div className="max-w-[1280px] mx-auto px-4 sm:px-8 xl:px-20 py-16 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

                    {/* Left Column: Contact Info */}
                    <div className="lg:col-span-5 flex flex-col gap-10">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-3xl font-bold text-[#171611] dark:text-white tracking-tight">Get in Touch</h2>
                            <p className="text-gray-600 dark:text-[#b7b19e] text-base leading-relaxed">
                                Our team of safari experts is available 24/7 to assist you with crafting your perfect itinerary.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            {/* Phone Card */}
                            <div className="group flex items-center gap-5 p-5 rounded-xl bg-white dark:bg-[#26231c] border border-gray-200 dark:border-border-dark hover:border-primary/50 transition-colors cursor-pointer shadow-sm">
                                <div className="flex items-center justify-center size-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
                                    <span className="material-symbols-outlined text-2xl">call</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-bold">Call Us</span>
                                    <span className="text-lg font-bold text-[#171611] dark:text-white">+94 11 234 5678</span>
                                </div>
                            </div>
                            {/* WhatsApp Card */}
                            <div className="group flex items-center gap-5 p-5 rounded-xl bg-white dark:bg-[#26231c] border border-gray-200 dark:border-border-dark hover:border-primary/50 transition-colors cursor-pointer shadow-sm">
                                <div className="flex items-center justify-center size-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
                                    <span className="material-symbols-outlined text-2xl">chat</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-bold">WhatsApp</span>
                                    <span className="text-lg font-bold text-[#171611] dark:text-white">Chat with an Expert</span>
                                </div>
                            </div>
                            {/* Email Card */}
                            <div className="group flex items-center gap-5 p-5 rounded-xl bg-white dark:bg-[#26231c] border border-gray-200 dark:border-border-dark hover:border-primary/50 transition-colors cursor-pointer shadow-sm">
                                <div className="flex items-center justify-center size-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
                                    <span className="material-symbols-outlined text-2xl">mail</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-bold">Email</span>
                                    <span className="text-lg font-bold text-[#171611] dark:text-white break-all">reservations@leopard.lk</span>
                                </div>
                            </div>
                        </div>
                        {/* Map Preview */}
                        <div className="relative w-full h-64 rounded-2xl overflow-hidden border border-gray-200 dark:border-border-dark mt-4 group">
                            <div className="absolute inset-0 bg-gray-800">
                                <Image
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSmN_107vcLAUjITiVg7j2inehASYZ0vyTL6DvEstauSIT5jG0bbesFkIL-0s7BIsD9IX1mrJw43kLU6Pj9moqZWdEg3NinISFvE2rmCj_z0OyeQq0M_SFDBLttZL7Lhfy3xKpvjXcSgLg7ITVDPk27J7x345_FqjSmpdPSllfk7YQHC7WI9TCk8XSUi3eouufpb30j2umlduYiVaIqDJx3B-rIQ4vUPzR5krWUa_hoGeArYpPMlDlMjtnLsgpcLxALhFCaBM6x--f"
                                    alt="Map view of Yala National Park area"
                                    fill
                                    className="object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                                <div className="flex items-center justify-between w-full">
                                    <div>
                                        <p className="text-white font-bold text-lg">Yala National Park</p>
                                        <p className="text-gray-300 text-sm">Main Lodge Entrance</p>
                                    </div>
                                    <button className="size-10 rounded-full bg-primary text-background-dark flex items-center justify-center hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined">near_me</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Inquiry Form */}
                    <div className="lg:col-span-7">
                        <div className="bg-white dark:bg-[#26231c] rounded-2xl p-8 lg:p-10 border border-gray-200 dark:border-border-dark shadow-xl">
                            <h3 className="text-2xl font-bold text-[#171611] dark:text-white mb-2">Send an Inquiry</h3>
                            <p className="text-gray-600 dark:text-[#b7b19e] text-sm mb-8">Fill out the form below and we will get back to you within 24 hours.</p>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Name */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-[#171611] dark:text-white">Full Name</label>
                                        <input onChange={(e) => setName(e.target.value)} value={name} className="w-full h-12 bg-background-light dark:bg-[#1f1c16] border border-gray-300 dark:border-[#383429] rounded-lg px-4 text-[#171611] dark:text-white placeholder-gray-400 dark:placeholder-[#6b6659] focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all" placeholder="John Doe" type="text" />
                                    </div>
                                    {/* Email */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-[#171611] dark:text-white">Email Address</label>
                                        <input onChange={(e) => setEmail(e.target.value)} value={email} className="w-full h-12 bg-background-light dark:bg-[#1f1c16] border border-gray-300 dark:border-[#383429] rounded-lg px-4 text-[#171611] dark:text-white placeholder-gray-400 dark:placeholder-[#6b6659] focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all" placeholder="john@example.com" type="email" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Country */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-[#171611] dark:text-white">Country of Residence</label>
                                        <div className="relative">
                                            <select onChange={(e) => setCountry(e.target.value)} value={country} className="w-full h-12 bg-background-light dark:bg-[#1f1c16] border border-gray-300 dark:border-[#383429] rounded-lg px-4 text-[#171611] dark:text-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary appearance-none transition-all">
                                                <option>Select Country</option>
                                                <option>United States</option>
                                                <option>United Kingdom</option>
                                                <option>Australia</option>
                                                <option>Germany</option>
                                            </select>
                                            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xl">expand_more</span>
                                        </div>
                                    </div>
                                    {/* Date */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-[#171611] dark:text-white">Planned Arrival</label>
                                        <input className="w-full h-12 bg-background-light dark:bg-[#1f1c16] border border-gray-300 dark:border-[#383429] rounded-lg px-4 text-[#171611] dark:text-white placeholder-gray-400 dark:placeholder-[#6b6659] focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all [color-scheme:dark]" type="date" />
                                    </div>
                                </div>
                                {/* Guests & Type */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-[#171611] dark:text-white">Number of Guests</label>
                                        <div className="flex items-center h-12 bg-background-light dark:bg-[#1f1c16] border border-gray-300 dark:border-[#383429] rounded-lg px-2">
                                            <button onClick={() => setGuestCount(guestCount < 1 ? 0 : guestCount - 1)} className="size-8 flex items-center justify-center text-gray-500 hover:text-primary transition-colors" type="button">
                                                <span className="material-symbols-outlined text-lg">remove</span>
                                            </button>
                                            <input className="flex-1 bg-transparent text-center text-[#171611] dark:text-white font-medium focus:outline-none" readOnly type="number" value={guestCount} onChange={(e) => setGuestCount(guestCount)} />
                                            <button onClick={() => setGuestCount(guestCount + 1)} className="size-8 flex items-center justify-center text-gray-500 hover:text-primary transition-colors" type="button">
                                                <span className="material-symbols-outlined text-lg">add</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-[#171611] dark:text-white">Safari Type</label>
                                        <div className="relative">
                                            <select onChange={(e) => setSelectedDuration(e.target.value)} value={selectedDuration} className="w-full h-12 bg-background-light dark:bg-[#1f1c16] border border-gray-300 dark:border-[#383429] rounded-lg px-4 text-[#171611] dark:text-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary appearance-none transition-all">
                                                {
                                                    durations.map((duration, i) => (
                                                        <option value={duration} key={i}>{duration}</option>
                                                    ) )
                                                }
                                            </select>
                                            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xl">expand_more</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Message */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-[#171611] dark:text-white">Special Requests</label>
                                    <textarea className="w-full bg-background-light dark:bg-[#1f1c16] border border-gray-300 dark:border-[#383429] rounded-lg p-4 text-[#171611] dark:text-white placeholder-gray-400 dark:placeholder-[#6b6659] focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary resize-none transition-all" placeholder="Tell us about your preferences..." rows={4}></textarea>
                                </div>
                                {/* Submit Button */}
                                <div className="pt-4">
                                    <button className="w-full h-14 bg-primary text-[#171611] font-bold text-base rounded-lg hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(223,175,42,0.4)] hover:shadow-[0_0_30px_rgba(223,175,42,0.6)] flex items-center justify-center gap-2" type="button">
                                        <span>Request Booking</span>
                                        <span className="material-symbols-outlined text-xl">arrow_forward</span>
                                    </button>
                                    <p className="text-center text-xs text-gray-500 mt-4">By submitting this form, you agree to our privacy policy.</p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ / Extra Section */}
            <div className="bg-white dark:bg-[#1a170e] py-16 border-t border-gray-200 dark:border-border-dark">
                <div className="max-w-[960px] mx-auto px-4 sm:px-8 xl:px-20 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#171611] dark:text-white mb-8">Frequently Asked Questions</h2>
                    <div className="grid gap-4 text-left">
                        <details className="group bg-background-light dark:bg-[#26231c] rounded-lg p-4 border border-gray-200 dark:border-border-dark open:border-primary/50 transition-colors">
                            <summary className="flex justify-between items-center font-bold cursor-pointer list-none text-[#171611] dark:text-white">
                                <span>What is the best time to visit Yala?</span>
                                <span className="transition group-open:rotate-180">
                                    <span className="material-symbols-outlined">expand_more</span>
                                </span>
                            </summary>
                            <div className="text-gray-600 dark:text-[#b7b19e] mt-3 text-sm leading-relaxed">
                                Yala is great year-round, but the best time for spotting leopards is during the dry season from February to July when animals gather around water holes.
                            </div>
                        </details>
                        <details className="group bg-background-light dark:bg-[#26231c] rounded-lg p-4 border border-gray-200 dark:border-border-dark open:border-primary/50 transition-colors">
                            <summary className="flex justify-between items-center font-bold cursor-pointer list-none text-[#171611] dark:text-white">
                                <span>Do you provide transportation from Colombo?</span>
                                <span className="transition group-open:rotate-180">
                                    <span className="material-symbols-outlined">expand_more</span>
                                </span>
                            </summary>
                            <div className="text-gray-600 dark:text-[#b7b19e] mt-3 text-sm leading-relaxed">
                                Yes, we can arrange private luxury transfers from Colombo, Galle, or the airport directly to our lodge or the park entrance.
                            </div>
                        </details>
                        <details className="group bg-background-light dark:bg-[#26231c] rounded-lg p-4 border border-gray-200 dark:border-border-dark open:border-primary/50 transition-colors">
                            <summary className="flex justify-between items-center font-bold cursor-pointer list-none text-[#171611] dark:text-white">
                                <span>Are children allowed on safaris?</span>
                                <span className="transition group-open:rotate-180">
                                    <span className="material-symbols-outlined">expand_more</span>
                                </span>
                            </summary>
                            <div className="text-gray-600 dark:text-[#b7b19e] mt-3 text-sm leading-relaxed">
                                Children are welcome! However, for their safety and comfort, we recommend children be at least 6 years old for full game drives.
                            </div>
                        </details>
                    </div>
                </div>
            </div>

            {/* Floating WhatsApp Button */}
            <a href="#" className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:bg-[#20b85c] transition-all hover:scale-105">
                <span className="material-symbols-outlined">chat</span>
                <span className="font-bold text-sm hidden sm:block">WhatsApp Us</span>
            </a>

        </div>
    );
}
