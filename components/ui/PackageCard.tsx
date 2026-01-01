import Image from "next/image";
import { Package } from "@/types";

interface PackageCardProps {
    package: Package;
}

export default function PackageCard({ package: pkg }: PackageCardProps) {
    return (
        <div
            className={`group ${pkg.featured
                    ? "bg-gradient-to-br from-[#181611] to-[#2a261a] border border-primary/30 hover:border-primary"
                    : "bg-[#181611] border border-border-dark hover:border-primary/50"
                } rounded-xl overflow-hidden transition-all duration-300 flex flex-col`}
        >
            {/* Image */}
            <div className="h-48 overflow-hidden relative">
                {pkg.badge && (
                    <div
                        className={`absolute top-3 right-3 ${pkg.badge === "Recommended"
                                ? "bg-primary text-[#181611]"
                                : "bg-black/60 backdrop-blur-sm text-white"
                            } px-2 py-1 rounded text-xs font-bold z-10`}
                    >
                        {pkg.badge}
                    </div>
                )}
                {pkg.featured && <div className="absolute inset-0 bg-black/20 z-10" />}
                <Image
                    alt={pkg.title}
                    src={pkg.image}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">{pkg.title}</h3>
                    <div className="text-right">
                        <span className="block text-2xl font-bold text-primary">
                            ${pkg.price}
                        </span>
                        <span className="text-xs text-gray-500">per person</span>
                    </div>
                </div>
                <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                    {pkg.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6 flex-grow">
                    {pkg.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3 text-sm text-gray-300">
                            <span className="material-symbols-outlined text-primary text-lg">
                                {feature.icon}
                            </span>
                            {feature.text}
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <button
                    className={`w-full py-3 rounded-lg font-semibold transition-colors ${pkg.featured
                            ? "bg-primary text-[#181611] hover:bg-yellow-500"
                            : "border border-border-dark bg-[#27241c] text-white hover:bg-primary hover:text-black hover:border-primary"
                        }`}
                >
                    {pkg.featured ? "Customize Now" : "View Details"}
                </button>
            </div>
        </div>
    );
}
