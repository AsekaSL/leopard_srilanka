'use client'
import Image from "next/image";
import { Badge, Package, PackageDetail } from "@/types";
import { useRouter } from "next/navigation";

interface PackageCardProps {
    package: PackageDetail;
}

export default function PackageCard({ package: pkg }: PackageCardProps) {
    const router = useRouter();
    return (
        <div
            className={`group ${ pkg.badge === Badge.POPULAR
                    ? "bg-gradient-to-br from-[#181611] to-[#2a261a] border border-primary/30 hover:border-primary"
                    : "bg-[#181611] border border-border-dark hover:border-primary/50"
                } rounded-xl overflow-hidden transition-all duration-300 flex flex-col`}
        >
            {/* Image */}
            <div className="h-48 overflow-hidden relative">
                {pkg.badge && (
                    <div
                        className={`absolute top-3 right-3 
                                ${ pkg.badge === Badge.POPULAR
                                ? "bg-primary text-[#181611]"
                                : "bg-black/60 backdrop-blur-sm text-white"
                            } px-2 py-1 rounded text-xs font-bold z-10`}
                    >
                        {pkg.badge === Badge.POPULAR ? "Popular" : "Recommended"}
                    </div>
                )}
                {pkg.itinerary && <div className="absolute inset-0 bg-black/20 z-10" />}
                <Image
                    alt={pkg.title}
                    src={pkg.heroImage}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">{pkg.title.split(" ").slice(2, 4).join(" ")}</h3>
                    <div className="text-right">
                        <span className="block text-2xl font-bold text-primary">
                            ${pkg.pricingPerPerson ? `${pkg.pricingPerPerson[0].price}` : `${pkg.price.jeep}`}
                        </span>
                        <span className="text-xs text-gray-500"> {pkg.pricingPerPerson ? "per person" : "per jeep"}</span>
                    </div>
                </div>
                <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                    {pkg.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6 flex-grow">
                    {pkg.itinerary.map((itine, index) => (
                        <div key={index} className="flex items-center gap-3 text-sm text-gray-300">
                            <span className="material-symbols-outlined text-primary text-lg">
                                {itine.icon}
                            </span>
                            {itine.title}
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <button 
                    onClick={() => router.push(`/packages/${pkg.id}`)}
                    className={`w-full py-3 cursor-pointer rounded-lg font-semibold transition-colors ${pkg.itinerary
                            ? "bg-primary text-[#181611] hover:bg-yellow-500"
                            : "border border-border-dark bg-[#27241c] text-white hover:bg-primary hover:text-black hover:border-primary"
                        }`}
                >
                    {pkg.itinerary ? "Customize Now" : "View Details"}
                </button>
            </div>
        </div>
    );
}
