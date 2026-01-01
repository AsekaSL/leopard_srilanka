import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { packagesData } from "@/app/data/packages";
import { Metadata } from "next";

type Props = {
    params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const packageDetail = packagesData[id];

    if (!packageDetail) {
        return {
            title: "Package Not Found",
        };
    }

    return {
        title: `${packageDetail.title} | Leopard Sri Lanka`,
        description: packageDetail.subtitle,
    };
}

export default async function PackageDetailPage({ params }: Props) {
    const { id } = await params;
    const pkg = packagesData[id];

    if (!pkg) {
        notFound();
    }

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-white antialiased overflow-x-hidden">
            {/* Hero Section */}
            <div className="relative w-full h-[600px] md:h-[700px] flex items-end pb-12 md:pb-24">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-background-dark/30 via-background-dark/60 to-background-dark z-10" />
                    <Image
                        src={pkg.heroImage}
                        alt={pkg.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="relative z-10 w-full px-6 md:px-10 lg:px-40 mx-auto max-w-7xl">
                    <div className="flex flex-col gap-4 max-w-3xl">
                        <div className="flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-wider">
                            <span className="material-symbols-outlined text-[20px]">location_on</span>
                            <span>Yala National Park, Sri Lanka</span>
                        </div>
                        <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-[-0.033em]">
                            {pkg.title}
                        </h1>
                        <p className="text-gray-300 text-lg md:text-xl font-medium max-w-xl">
                            {pkg.subtitle}
                        </p>
                        <div className="flex flex-wrap gap-4 mt-6">
                            <button className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary text-background-dark text-base font-bold transition-all hover:bg-yellow-400">
                                Book This Package
                            </button>
                            <button className="flex items-center justify-center rounded-lg h-12 px-8 bg-surface-dark border border-border-dark text-white text-base font-bold hover:bg-border-dark transition-all">
                                Calculate Safari Cost
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Layout */}
            <div className="px-6 md:px-10 lg:px-40 pb-20 -mt-10 relative z-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12">
                    {/* Left Column: Details & Itinerary */}
                    <div className="flex flex-col gap-12">
                        {/* Key Features Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <FeatureBox icon="schedule" title="Duration" value={pkg.duration} />
                            <FeatureBox icon="directions_car" title="Jeep Type" value={pkg.jeepType} />
                            <FeatureBox icon="group" title="Capacity" value={pkg.capacity} />
                            <FeatureBox icon="restaurant" title="Meals" value={pkg.meals} />
                        </div>

                        {/* Description */}
                        <div className="flex flex-col gap-4">
                            <h3 className="text-2xl font-bold text-white">Experience Overview</h3>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                {pkg.description}
                            </p>
                        </div>

                        {/* Itinerary Timeline */}
                        {pkg.itinerary.length > 0 && (
                            <div className="flex flex-col gap-6">
                                <h3 className="text-2xl font-bold text-white">Itinerary Timeline</h3>
                                <div className="relative pl-4 border-l border-border-dark ml-2 space-y-8">
                                    {pkg.itinerary.map((item, index) => (
                                        <TimelineItem key={index} item={item} />
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Accordions */}
                        <div className="flex flex-col gap-4">
                            <h3 className="text-2xl font-bold text-white">Package Details</h3>

                            <DetailsAccordion title="Inclusions & Exclusions" defaultOpen>
                                <div className="grid md:grid-cols-2 gap-4 mt-2">
                                    <div>
                                        <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide">Included</h4>
                                        <ul className="space-y-2 text-sm">
                                            {pkg.inclusions.map((inc, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <span className="material-symbols-outlined text-green-500 text-sm mt-0.5">check_circle</span>
                                                    <span className="text-gray-300">{inc}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide">Excluded</h4>
                                        <ul className="space-y-2 text-sm">
                                            {pkg.exclusions.map((exc, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <span className="material-symbols-outlined text-red-400 text-sm mt-0.5">cancel</span>
                                                    <span className="text-gray-300">{exc}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </DetailsAccordion>

                            <DetailsAccordion title="Vehicle Specifications">
                                <div className="text-gray-300">
                                    <p className="text-sm mb-4">Our fleet consists of modified Toyota Hilux and Land Cruiser safari jeeps, designed for maximum visibility and comfort on rugged terrain.</p>
                                    <div className="flex gap-4 overflow-x-auto pb-2">
                                        {/* Placeholder generic jeep images since we don't have vehicle specific ones in data yet */}
                                        <div className="w-24 h-24 shrink-0 rounded-lg bg-gray-800 border border-border-dark overflow-hidden relative">
                                            <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzU8vcK5ng-o8ZuzmebE2_mT7DBsaRe-PjzagroWLN5Tq8Ocu29RL8zI0y8uVGLt3RrMXeMcB9xbJYkK6egZvcgIKGreGukYx2PWgU47oJ5MUT70VjZOWUjzXsC1la31JcpCshyHj793nMd6pjMoAVYZyfV2j0X6FUjOmFd7CjWhCGXeEowdx5aZwqvF-WW3fCwmrIgmZEUCn-C9MjxAPTwvUSTExqxKiZD48b5S7eQ8ej9UT-y0SLmGi98PpcseKm92qVXfurO3fz" alt="Jeep interior" fill className="object-cover" />
                                        </div>
                                        <div className="w-24 h-24 shrink-0 rounded-lg bg-gray-800 border border-border-dark overflow-hidden relative">
                                            <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJW3N5GTfg-aJs_w0plAA78lDIf55P4FIYwy0XE7ZMRf8oca60ilR2E8z0IIpakuQf5Vh5HyV23VDTHWlxg5vWH1SaKWe6si8Pl4bc84ooE1ve0f3GqvgP6MEpZDv1UgD75EqIJirsPYnVpSriYGD0R3Ry0uuVY5PRYo5Hxo4K1WTrT4INR5xVNtWcpeT6zqzrj6j6jSqHFIm0OW4InnBKvdpQSqkti28ImnroS8OZqNxpdK19by7FfRE0-lS167YATVcB5FJzHADY" alt="Jeep exterior" fill className="object-cover" />
                                        </div>
                                    </div>
                                </div>
                            </DetailsAccordion>
                        </div>
                    </div>

                    {/* Right Column: Sticky Pricing Card */}
                    <div className="relative">
                        <div className="sticky top-24 flex flex-col gap-6 rounded-2xl border border-border-dark bg-surface-dark/80 p-6 md:p-8 backdrop-blur-xl shadow-2xl">
                            <h3 className="text-xl font-bold text-white mb-2">Pricing Breakdown</h3>
                            <div className="space-y-4 pb-6 border-b border-border-dark">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-400">Jeep Rental (Private)</span>
                                    <span className="text-white font-medium">${pkg.price.jeep.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-400">Service Charge</span>
                                    <span className="text-white font-medium">${pkg.price.serviceFee.toFixed(2)}</span>
                                </div>
                                {pkg.price.tax > 0 && (
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-gray-400">Tax (VAT)</span>
                                        <span className="text-white font-medium">${pkg.price.tax.toFixed(2)}</span>
                                    </div>
                                )}
                                <div className="bg-background-dark/50 p-3 rounded-lg flex justify-between items-center text-sm border border-border-dark/50">
                                    <div className="flex flex-col">
                                        <span className="text-gray-400 text-xs">Park Entrance Fee</span>
                                        <span className="text-[10px] text-primary">*Payable at gate</span>
                                    </div>
                                    <span className="text-white font-medium">{pkg.price.parkFeeNote}</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-end pb-2">
                                <div className="flex flex-col">
                                    <span className="text-gray-400 text-sm">Total for Jeep</span>
                                    <span className="text-xs text-gray-500">(Excl. park fees)</span>
                                </div>
                                <span className="text-3xl font-black text-white">${pkg.price.total.toFixed(2)}</span>
                            </div>
                            <div className="flex flex-col gap-3">
                                <button className="flex w-full items-center justify-center rounded-lg h-12 bg-primary text-background-dark text-base font-bold shadow-[0_0_20px_rgba(223,175,42,0.3)] transition-all hover:shadow-[0_0_30px_rgba(223,175,42,0.5)] hover:scale-[1.02]">
                                    Book This Package
                                </button>
                                <button className="flex w-full items-center justify-center rounded-lg h-12 bg-transparent border border-border-dark text-white hover:bg-border-dark/30 text-base font-bold transition-all">
                                    Customize Trip
                                </button>
                            </div>
                            <div className="flex items-center gap-2 justify-center mt-2">
                                <span className="material-symbols-outlined text-green-500 text-sm">verified_user</span>
                                <span className="text-xs text-gray-400">Secure checkout & Instant confirmation</span>
                            </div>

                            {/* Mini Gallery in Sidebar */}
                            {pkg.gallery.length > 0 && (
                                <div className="grid grid-cols-3 gap-2 mt-4">
                                    {pkg.gallery.map((img, i) => (
                                        <div key={i} className="aspect-square rounded-md overflow-hidden bg-gray-800 relative group cursor-pointer">
                                            <Image
                                                src={img}
                                                alt={`Gallery ${i}`}
                                                fill
                                                className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Components

function FeatureBox({ icon, title, value }: { icon: string; title: string; value: string }) {
    return (
        <div className="flex flex-col gap-3 rounded-xl border border-border-dark bg-surface-dark p-5 hover:border-primary/50 transition-colors group">
            <span className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform">
                {icon}
            </span>
            <div>
                <h3 className="text-gray-400 text-xs uppercase font-bold tracking-wider">{title}</h3>
                <p className="text-white font-bold text-lg">{value}</p>
            </div>
        </div>
    );
}

function TimelineItem({ item }: { item: { time: string; title: string; description: string; icon: string } }) {
    return (
        <div className="relative pl-8 group">
            <div className="absolute -left-[21px] top-1 h-10 w-10 rounded-full bg-surface-dark border border-border-dark group-hover:border-primary transition-colors flex items-center justify-center z-10">
                <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors text-sm">
                    {item.icon}
                </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h4 className="text-lg font-bold text-white">{item.title}</h4>
                <span className="text-primary font-bold">{item.time}</span>
            </div>
            <p className="text-gray-400 text-sm mt-1">{item.description}</p>
        </div>
    );
}

function DetailsAccordion({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
    return (
        <details className="group rounded-xl border border-border-dark bg-surface-dark open:bg-surface-dark/50" open={defaultOpen}>
            <summary className="flex cursor-pointer items-center justify-between p-5 font-medium text-white transition-colors hover:text-primary list-none">
                <span className="text-lg font-bold">{title}</span>
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
            </summary>
            <div className="px-5 pb-5 pt-0">
                {children}
            </div>
        </details>
    );
}
