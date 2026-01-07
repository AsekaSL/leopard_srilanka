'use client';

import Link from "next/link";
import PackageCard from "../ui/PackageCard";
import { Package, PackageCategory, PackageDetail, Tab } from "@/types";
import { useState } from "react";
import { packagesData, tabs } from "@/lib/data";
import { tw } from "@/lib/theme";

export default function PackagesSection() {

    const [activeTab, setActiveTab] = useState(PackageCategory.PRIVATE_INCLUSIVE);

    const filteredPackages: PackageDetail[] = Object.values(packagesData).filter((pkg) => pkg.packageCategory === activeTab) 

    return (
        <div className={`${tw.bgSurfaceDark} py-20 relative`} id="packages">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className={`${tw.textPrimary} font-bold uppercase tracking-wider text-sm`}>
                        Choose Your Adventure
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
                        Curated Safari Packages
                    </h2>
                    <p className="text-gray-400">
                        Whether you're an early riser chasing the dawn or seeking a full day of
                        immersion, we have the perfect itinerary.
                    </p>
                </div>
                <div className={`sticky mb-5 top-16 z-40 ${tw.bgSurfaceDark} border-b ${tw.borderDark} w-full overflow-x-auto hide-scrollbar`}>
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="flex whitespace-nowrap min-w-full md:justify-center gap-1">
                        {tabs.map((tab : Tab) => (
                            <a
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-4 py-3 text-sm font-medium transition-colors border-b-2 cursor-pointer
                                ${
                                activeTab === tab.id
                                    ? `${tw.textPrimary} ${tw.borderPrimary}`
                                    : "text-gray-400 border-transparent hover:text-white"
                                }`}
                            >
                            {tab.label}
                            </a>
                        ))}
                        </div>
                    </div>
                </div>
                {/* Package Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {filteredPackages.map((pkg, index) => (
                        <PackageCard key={index} package={pkg} />
                    ))}
                </div>
            </div>
            <div className="flex justify-center mt-12">
                <Link href='/packages'>
                    <button className={`flex items-center gap-2 text-white font-medium ${tw.hoverTextPrimary} transition-colors border-b border-transparent ${tw.hoverBorderPrimary} pb-1`}>
                        Load more packages
                        <span className="material-symbols-outlined">expand_more</span>
                    </button>
                </Link>
            </div>
        </div>
    );
}
