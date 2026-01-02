'use client'

import Dropdown from "@/components/ui/Dropdown";
import PakageArticle from "@/components/ui/PakageArticle";
import { categories, durations, packagesData, prices } from "@/lib/data";
import { Duration, PackageCategory, PriceRange } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function PackagesPage() {

    const [category ,setCategory] = useState(categories[0])
    const [duration ,setDuration] = useState(durations[0])
    const [price ,setPrice] = useState(prices[0])
    let filteredPackagesData = (duration != Duration.DURATION_ALL) ? Object.values(packagesData).filter((pck) => pck.durationCategory === duration) : Object.values(packagesData)
    filteredPackagesData = (price != PriceRange.PRICE_RANGE_ALL) ? filteredPackagesData.filter((pck) => pck.priceRange === price) : filteredPackagesData

    return (
        <div className="bg-background-light dark:bg-background-dark text-[#111811] dark:text-white font-display overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative h-[85vh] min-h-[650px] w-full flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-background-dark/30 via-background-dark/50 to-background-dark z-10"></div>
                    <Image
                        alt="Leopard resting on a tree branch in Yala National Park"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIE-zc_aV0U0lmAmLrsHx6P2yX524Zf2WQ6Jn8Tix093E0P9EjdEi3gykij-ggdqWDLTxJSANjpri8Qk0zQOTZicw4ugQpSawxQWY7cG7vo7Fj-trY3733gwudS6TAi2SYTnHsL3ZhWXMJUzsoCk8RQKgX_szL5GfwOl3L0sgH8C3tb7tvcAN-PtP6EjLfgXrpmaQSzVuP9OHJkdpfqJdnrbmoAQJ9Yqylil3zf1gxwZUVNyjMGOcgFiJiBKckRsMGle-miwm6Fo7b"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6 border border-primary/20">Official 2026 Packages</span>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
                        Experience <span className="text-primary">The Wild</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
                        The world’s premier destination for Leopard & Elephant encounters. Explore our curated 2026 safari tiers designed for every traveler.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a className="flex items-center justify-center h-12 px-8 bg-primary text-background-dark font-bold rounded-lg hover:bg-white transition-colors cursor-pointer" onClick={() => window.scrollTo({top: 500, behavior: 'smooth', })}>
                            View 2026 Packages
                        </a>
                        <a className="flex items-center justify-center h-12 px-8 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-lg hover:bg-white/20 transition-colors" href="#contact">
                            Contact Specialist
                        </a>
                    </div>
                </div>
            </section>

            <div className="w-full max-w-[1440px] mx-auto px-4 md:px-10 pb-20 -mt-16 relative z-20">

                
                {/* Filters */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 bg-[#211d11]/90 backdrop-blur-md p-4 rounded-xl border border-[#383429] shadow-xl">
                    <div className="flex flex-wrap gap-3">
                        <button className="flex h-9 items-center gap-2 rounded-lg bg-primary px-4 text-[#171611] text-sm font-bold transition-transform active:scale-95">
                            All Packages
                        </button>
                        <Dropdown selectedOption={category} setSelectedOption={setCategory} options={categories} />
                        <Dropdown selectedOption={duration} setSelectedOption={setDuration} options={durations} />
                        <Dropdown selectedOption={price} setSelectedOption={setPrice} options={prices} />
                        
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                        <span>Sort by:</span>
                        <button className="flex items-center gap-1 text-white font-medium hover:text-primary transition-colors">
                            Recommended <span className="material-symbols-outlined text-[18px]">sort</span>
                        </button>
                    </div>
                </div>

                {
                   (   (category === PackageCategory.CATEGORY_ALL || category == PackageCategory.PRIVATE_INCLUSIVE) && Object.values(filteredPackagesData).filter((pck) => pck.packageCategory === PackageCategory.PRIVATE_INCLUSIVE).length > 0) &&
                   (
                    <>
                       {/* SECTION A: Private All-Inclusive */}
                        <section className="py-10 bg-surface-darker" id="private-all">
                            <div className="max-w-7xl mx-auto px-4 md:px-8">
                                <div className="flex flex-col lg:flex-row gap-12">
                                    {/* Content */}
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="bg-primary/10 text-primary p-2 rounded-lg">
                                                <span className="material-symbols-outlined">diamond</span>
                                            </span>
                                            <h2 className="text-3xl font-bold">Private All-Inclusive</h2>
                                        </div>
                                        <p className="text-gray-400 mb-8 text-lg">
                                            Our most popular premium option. You get the entire jeep to yourself, complete with tickets purchased in advance (no queuing), hotel pickup/drop-off, and refreshments.
                                        </p>
                                        {/* Feature List */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                            <div className="flex items-start gap-3">
                                                <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                                <div>
                                                    <h4 className="font-bold text-white">Zero Queues</h4>
                                                    <p className="text-sm text-gray-400">Tickets pre-purchased</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                                <div>
                                                    <h4 className="font-bold text-white">Private Guide</h4>
                                                    <p className="text-sm text-gray-400">Dedicated tracker</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                                <div>
                                                    <h4 className="font-bold text-white">Hotel Pickup</h4>
                                                    <p className="text-sm text-gray-400">From Tissamaharama area</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                                <div>
                                                    <h4 className="font-bold text-white">Refreshments</h4>
                                                    <p className="text-sm text-gray-400">Water & fruit basket</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                {/* Packages Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {
                        Object.values(filteredPackagesData).filter((pkg) => pkg.packageCategory === PackageCategory.PRIVATE_INCLUSIVE).map((pkg) => (
                            <PakageArticle key={pkg.id} pkg={pkg} />
                        ))
                    }
                    
                </div>
                    </>
                   )
                }
                
                {
                    ((category === PackageCategory.CATEGORY_ALL || category === PackageCategory.SHARED_INCLUSIVE) && Object.values(filteredPackagesData).filter((pck) => pck.packageCategory === PackageCategory.SHARED_INCLUSIVE).length > 0) && (
                        <>
                            {/* SECTION B: Shared All-Inclusive */}
                            <section className="py-10 bg-background-dark" id="shared-all">
                                <div className="max-w-7xl mx-auto px-4 md:px-8">
                                    <div className="flex flex-col lg:flex-row-reverse gap-12">
                                        {/* Content */}
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-4">
                                                <span className="bg-primary/10 text-primary p-2 rounded-lg">
                                                    <span className="material-symbols-outlined">groups</span>
                                                </span>
                                                <h2 className="text-3xl font-bold">Shared All-Inclusive</h2>
                                            </div>
                                            <p className="text-gray-400 mb-8 text-lg">
                                                Ideal for solo travelers or couples wanting to keep costs low without the hassle. We group you with other travelers. Includes tickets and pickup from a central meeting point.
                                            </p>
                                            {/* Feature List */}
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                                <div className="flex items-start gap-3">
                                                    <span className="material-symbols-outlined text-primary mt-1">savings</span>
                                                    <div>
                                                        <h4 className="font-bold text-white">Cost Effective</h4>
                                                        <p className="text-sm text-gray-400">Split costs with others</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <span className="material-symbols-outlined text-primary mt-1">confirmation_number</span>
                                                    <div>
                                                        <h4 className="font-bold text-white">Tickets Included</h4>
                                                        <p className="text-sm text-gray-400">No gate payment needed</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <span className="material-symbols-outlined text-primary mt-1">handshake</span>
                                                    <div>
                                                        <h4 className="font-bold text-white">Meet People</h4>
                                                        <p className="text-sm text-gray-400">Social experience</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </section>
                            {/* Packages Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {
                                    Object.values(filteredPackagesData).filter((pkg) => pkg.packageCategory === PackageCategory.SHARED_INCLUSIVE).map((pkg) => (
                                        <PakageArticle key={pkg.id} pkg={pkg} />
                                    ))
                                }
                            </div>
                        </>
                    )
                }
                
                {
                    ((category === PackageCategory.CATEGORY_ALL || category === PackageCategory.PRIVATE_JEEP_ONLY) && Object.values(filteredPackagesData).filter((pck) => pck.packageCategory === PackageCategory.PRIVATE_JEEP_ONLY).length > 0) && (
                        <>
                            {/* SECTION C: Private Jeep Hire Only */}
                            <section className="py-10 bg-surface-darker" id="private-all">
                                <div className="max-w-7xl mx-auto px-4 md:px-8">
                                    <div className="flex flex-col lg:flex-row gap-12">
                                        {/* Content */}
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-4">
                                                <span className="bg-primary/10 text-primary p-2 rounded-lg">
                                                    <span className="material-symbols-outlined">directions_car</span>
                                                </span>
                                                <h2 className="text-3xl font-bold">Private Jeep Hire Only</h2>
                                            </div>
                                            <p className="text-gray-400 mb-8 text-lg">
                                                Hire the vehicle and driver. You must queue at the ticket counter and pay entrance fees separately. Ideal if you have local IDs or specific permits.
                                            </p>
                                            {/* Feature List */}
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                                <div className="flex items-start gap-3">
                                                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                                    <div>
                                                        <h4 className="font-bold text-white">Zero Queues</h4>
                                                        <p className="text-sm text-gray-400">Tickets pre-purchased</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                                    <div>
                                                        <h4 className="font-bold text-white">Private Guide</h4>
                                                        <p className="text-sm text-gray-400">Dedicated tracker</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                                    <div>
                                                        <h4 className="font-bold text-white">Hotel Pickup</h4>
                                                        <p className="text-sm text-gray-400">From Tissamaharama area</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                                    <div>
                                                        <h4 className="font-bold text-white">Refreshments</h4>
                                                        <p className="text-sm text-gray-400">Water & fruit basket</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Packages Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                                {
                                    Object.values(filteredPackagesData).filter((pkg) => pkg.packageCategory === PackageCategory.PRIVATE_JEEP_ONLY).map((pkg) => (
                                        <PakageArticle key={pkg.id} pkg={pkg} />
                                    ))
                                }
                                
                            </div>
                        </>
                    )
                }

                {
                    ((category === PackageCategory.CATEGORY_ALL || category === PackageCategory.SHARED_JEEP_ONLY) && Object.values(filteredPackagesData).filter((pck) => pck.packageCategory === PackageCategory.SHARED_JEEP_ONLY).length > 0) && (
                       <>
                            {/* SECTION D: Shared Jeep Only */}
                            <section className="py-10 bg-background-dark" id="shared-all">
                                <div className="max-w-7xl mx-auto px-4 md:px-8">
                                    <div className="flex flex-col lg:flex-row-reverse gap-12">
                                        {/* Content */}
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-4">
                                                <span className="bg-primary/10 text-primary p-2 rounded-lg">
                                                    <span className="material-symbols-outlined">event_seat</span>
                                                </span>
                                                <h2 className="text-3xl font-bold">Shared Jeep Seat Only</h2>
                                            </div>
                                            <p className="text-gray-400 mb-8 text-lg">
                                                Reserve a single seat in a jeep. You share the jeep cost but still need to buy your own ticket at the gate. The most budget-friendly "backpacker" option.
                                            </p>
                                            {/* Feature List */}
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                                <div className="flex items-start gap-3">
                                                    <span className="material-symbols-outlined text-primary mt-1">savings</span>
                                                    <div>
                                                        <h4 className="font-bold text-white">Cost Effective</h4>
                                                        <p className="text-sm text-gray-400">Split costs with others</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <span className="material-symbols-outlined text-primary mt-1">confirmation_number</span>
                                                    <div>
                                                        <h4 className="font-bold text-white">Tickets Included</h4>
                                                        <p className="text-sm text-gray-400">No gate payment needed</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <span className="material-symbols-outlined text-primary mt-1">handshake</span>
                                                    <div>
                                                        <h4 className="font-bold text-white">Meet People</h4>
                                                        <p className="text-sm text-gray-400">Social experience</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </section>
                            {/* Packages Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {
                                    Object.values(filteredPackagesData).filter((pkg) => pkg.packageCategory === PackageCategory.SHARED_JEEP_ONLY).map((pkg) => (
                                        <PakageArticle key={pkg.id} pkg={pkg} />
                                    ))
                                }
                            </div>
                       </> 
                    )
                }

                

                {/* Comparison CTA */}
                <div className="mt-20 p-8 rounded-2xl bg-surface-dark border border-[#383429] text-center">
                    <h2 className="text-2xl font-bold text-white mb-2">Not sure which package to choose?</h2>
                    <p className="text-gray-400 mb-6 max-w-2xl mx-auto">Compare our different safari tiers including Private All-Inclusive, Shared Options, and Jeep-Only hires to find the perfect fit for your budget.</p>
                    <Link href="/yala-safari-packages" className="inline-flex h-12 px-8 items-center justify-center rounded-lg bg-primary text-[#171611] text-sm font-bold hover:bg-primary/90 transition-colors">
                        Compare Safari Tiers
                    </Link>
                </div>

            </div>
        </div>
    );
}
