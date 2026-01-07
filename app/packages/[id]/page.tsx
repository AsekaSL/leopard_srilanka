import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { packagesData } from "@/lib/data";
import { Metadata } from "next";
import { PackageCategory } from "@/types";
import { tw, colors } from "@/lib/theme";

type Props = {
    params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const packageDetail = packagesData[id];

    if (!packageDetail) {
        console.log(id)
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
        <div className={`${tw.bgBackgroundLight} dark:${tw.bgBackgroundDark} font-display text-white antialiased overflow-x-hidden`}>
            {/* Hero Section */}
            <div className="relative w-full h-[600px] md:h-[700px] flex items-end pb-12 md:pb-24">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#181611]/30 via-[#181611]/60 to-[#181611] z-10" />
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
                        <div className={`flex items-center gap-2 ${tw.textPrimary} text-sm font-bold uppercase tracking-wider`}>
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
                            <button className={`flex items-center justify-center rounded-lg h-12 px-8 ${tw.bgPrimary} ${tw.textDark} text-base font-bold transition-all hover:bg-yellow-400`}>
                                Book This Package
                            </button>
                            <button className={`flex items-center justify-center rounded-lg h-12 px-8 ${tw.bgSurfaceDark} border ${tw.borderDark} text-white text-base font-bold hover:bg-[#393428] transition-all`}>
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

                        {/* Table */}
                        {
                            pkg.pricingPerPerson &&
                            <div className="flex-1">
                                <div className={`${tw.bgSurfaceDark} rounded-xl overflow-hidden border ${tw.borderDark}`}>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left text-sm">
                                            <thead className="bg-black/20 text-gray-400 uppercase text-xs font-bold">
                                                <tr>

                                                    <th className="px-6 py-4">Person Type</th>
                                                    <th className="px-6 py-4">Price (from)</th>
                                                </tr>
                                            </thead>
                                            <tbody className={`divide-y divide-${tw.borderDark}`}>
                                                {
                                                    pkg.pricingPerPerson && pkg.pricingPerPerson.map((price) => (
                                                        <tr key={price.label} className="hover:bg-white/5 transition-colors">
                                                            <td className="px-6 py-4 text-gray-400">{price.label}</td>
                                                            <td className={`px-6 py-4 ${tw.textPrimary} font-bold`}>$ {price.price}</td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className={`px-6 py-4 border-t ${tw.borderDark}`} style={{ backgroundColor: `${colors.primary}05` }}>
                                        <p className="text-xs text-[#ecb213]/80 flex items-center gap-2">
                                            <span className="material-symbols-outlined text-base">info</span>
                                            Price varies based on group size. Best value for groups of 4+.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        }

                        {/* Itinerary Timeline */}
                        {pkg.itinerary.length > 0 && (
                            <div className="flex flex-col gap-6">
                                <h3 className="text-2xl font-bold text-white">Itinerary Timeline</h3>
                                <div className={`relative border-l ${tw.borderDark} ml-3 space-y-8`}>
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
                                        {
                                            pkg.gallery.map((img) => (
                                                <div key={img} className={`w-24 h-24 shrink-0 rounded-lg bg-gray-800 border ${tw.borderDark} overflow-hidden relative`}>
                                                    <Image src={img} alt="Jeep interior" fill className="object-cover" />
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </DetailsAccordion>
                        </div>


                    </div>

                    {/* Right Column: Sticky Pricing Card */}
                    <div className="relative">
                        <div className={`sticky top-24 flex flex-col gap-6 rounded-2xl border ${tw.borderDark} ${tw.bgSurfaceDark}/80 p-6 md:p-8 backdrop-blur-xl shadow-2xl`}>
                            <h3 className="text-xl font-bold text-white mb-2">Pricing Breakdown( {pkg.pricingPerPerson ? 'Per Person' : 'Per Vehicle'} )</h3>
                            <div className={`space-y-4 pb-6 border-b ${tw.borderDark}`}>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-400">{pkg.pricingPerPerson ? `Person Rental (${pkg.packageCategory === PackageCategory.PRIVATE_INCLUSIVE || pkg.packageCategory === PackageCategory.PRIVATE_JEEP_ONLY ? 'Private' : 'Shared'})` : `Jeep Rental (${pkg.packageCategory === PackageCategory.PRIVATE_INCLUSIVE || pkg.packageCategory === PackageCategory.PRIVATE_JEEP_ONLY ? 'Private' : 'Shared'})`}</span>
                                    <span className="text-white font-medium">${pkg.pricingPerPerson ? (pkg.pricingPerPerson && pkg.pricingPerPerson[0].price.toFixed(2)) : (pkg.price.jeep && pkg.price.jeep.toFixed(2))}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-400">Service Charge</span>
                                    <span className="text-white font-medium">${pkg.price.serviceFee && pkg.price.serviceFee.toFixed(2)}</span>
                                </div>
                                {/* {pkg.price.tax && pkg.price.tax > 0 && (
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-gray-400">Tax (VAT)</span>
                                        <span className="text-white font-medium">${pkg.price.tax.toFixed(2)}</span>
                                    </div>
                                )} */}
                                <div className="p-3 rounded-lg flex justify-between items-center text-sm border" style={{ backgroundColor: `${colors.backgroundDark}/50`, borderColor: `${colors.borderDark}50` }}>
                                    <div className="flex flex-col">
                                        <span className="text-gray-400 text-xs">Park Entrance Fee</span>
                                        <span className="text-[10px] text-primary">*Payable at gate</span>
                                    </div>
                                    <span className="text-white font-medium">{pkg.price.parkFeeNote}</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-end pb-2">
                                <div className="flex flex-col">
                                    <span className="text-gray-400 text-sm">Total for {pkg.pricingPerPerson ? "Per Person" : "Jeep"}</span>
                                    <span className="text-xs text-gray-500">(Excl. park fees)</span>
                                </div>
                                <span className="text-3xl font-black text-white">${pkg.pricingPerPerson ? (pkg.pricingPerPerson[0].price.toFixed(2)) : pkg.price.total && pkg.price.total.toFixed(2)}</span>
                            </div>
                            <div className="flex flex-col gap-3">
                                <Link href={`/safari-calculator/${pkg.id}`}>
                                    <button className={`flex cursor-pointer w-full items-center justify-center rounded-lg h-12 ${tw.bgPrimary} ${tw.textDark} text-base font-bold shadow-[0_0_20px_rgba(223,175,42,0.3)] transition-all hover:shadow-[0_0_30px_rgba(223,175,42,0.5)] hover:scale-[1.02]`}>
                                        Customize Trip
                                    </button>
                                </Link>
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
        <div className={`flex flex-col gap-3 rounded-xl border ${tw.borderDark} ${tw.bgSurfaceDark} p-5 hover:border-[${colors.primary}]/50 transition-colors group`}>
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
            <div className={`absolute -left-[21px] top-1 h-10 w-10 rounded-full ${tw.bgSurfaceDark} border ${tw.borderDark} ${tw.hoverBorderPrimary} transition-colors flex items-center justify-center z-10`}>
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
        <details className={`group rounded-xl border ${tw.borderDark} ${tw.bgSurfaceDark} open:${tw.bgSurfaceDark}/50`} open={defaultOpen}>
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
