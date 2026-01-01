import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Safari Packages Overview | YalaSriLanka.co",
    description: "Browse our curated selection of safari packages in Yala National Park. From morning and afternoon drives to full-day adventures and luxury private tours.",
};

export default function PackagesPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark text-[#111811] dark:text-white font-display overflow-x-hidden">
            {/* Hero Section */}
            <section className="w-full relative h-[400px] flex items-center justify-center overflow-hidden">
                {/* Background with overlay */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#171611]/30 via-[#171611]/60 to-[#171611] z-10"></div>
                    <Image
                        alt="Dense green jungle foliage in low light"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD16ZF7chu9R4pBcM6oTwS3x2DGf0EJkzjiQijjpyOKyFCoyIAUt8-c37G3UahMRVGH-nOQWIEi1XgDQwcKDOeQHQI__zPvmKTBVUuwLC8CtCAY1JZKz6TFAb8GtfqdIcnglMwBOxr2UMztcayFHg3K-72NAtOWelPtAhIx9L6qrZqachbpsy_OSFzewx0BpnriqB7KGfJBMiDzBv9oKByPdobr8IBLiwtTCJKvi9JQ3GLIOO-VMEBaorBSqYyDHbDXk-gNdmkMEsjJ"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                </div>
                <div className="relative z-20 text-center max-w-4xl px-6 pt-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4">
                        Wilderness Awaits
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                        Curated safari packages designed to bring you face-to-face with the untamed beauty of Yala National Park.
                    </p>
                </div>
            </section>

            <div className="w-full max-w-[1440px] mx-auto px-4 md:px-10 pb-20 -mt-16 relative z-30">
                {/* Filters */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 bg-[#211d11]/90 backdrop-blur-md p-4 rounded-xl border border-[#383429] shadow-xl">
                    <div className="flex flex-wrap gap-3">
                        <button className="flex h-9 items-center gap-2 rounded-lg bg-primary px-4 text-[#171611] text-sm font-bold transition-transform active:scale-95">
                            All Packages
                        </button>
                        <button className="flex h-9 items-center gap-2 rounded-lg bg-[#383429] hover:bg-[#4a4536] px-4 text-white text-sm font-medium transition-colors group">
                            Duration
                            <span className="material-symbols-outlined text-[18px] text-gray-400 group-hover:text-white">expand_more</span>
                        </button>
                        <button className="flex h-9 items-center gap-2 rounded-lg bg-[#383429] hover:bg-[#4a4536] px-4 text-white text-sm font-medium transition-colors group">
                            Price Range
                            <span className="material-symbols-outlined text-[18px] text-gray-400 group-hover:text-white">expand_more</span>
                        </button>
                        <button className="flex h-9 items-center gap-2 rounded-lg bg-[#383429] hover:bg-[#4a4536] px-4 text-white text-sm font-medium transition-colors group">
                            Group Size
                            <span className="material-symbols-outlined text-[18px] text-gray-400 group-hover:text-white">expand_more</span>
                        </button>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                        <span>Sort by:</span>
                        <button className="flex items-center gap-1 text-white font-medium hover:text-primary transition-colors">
                            Recommended <span className="material-symbols-outlined text-[18px]">sort</span>
                        </button>
                    </div>
                </div>

                {/* Packages Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card 1: Morning Safari */}
                    <article className="glass-card group rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 relative bg-[#2a271f]/40 backdrop-blur-lg border border-white/10">
                        <div className="relative h-64 overflow-hidden">
                            <div className="absolute top-3 left-3 z-10 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                                <span className="text-xs font-bold text-white uppercase tracking-wider">Most Popular</span>
                            </div>
                            <Image
                                alt="Leopard resting on a tree branch in morning light"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdlEj50tYrTETL6Q9GgN5G6mc45Ppv8X_oA1Clj__00GGGVfoQ3lqA2MEsI_5wlxV9bloiVRbmxBWSrCvZZajpVJEvYz1WXxyCQIbUs3Ik7tQEEt4ZayG_3Pswjh8RRRd2h0EobQ4Bm0LMELllMSZA-0WJIJ6CKT5fk0YeQLvQ5DaQ6uzJITU833GHJ2KFRBJPCmWErYZ83vSriCp5Dwon7gj9_4YUHUiCuv65MqJM-SjAON-zbQXTYS3LAt758AzurEkDTjJtuvfQ"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#171611] to-transparent opacity-80"></div>
                        </div>
                        <div className="p-6 flex flex-col flex-1 relative">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">Morning Safari</h3>
                                    <div className="flex items-center text-gray-400 text-sm gap-1">
                                        <span className="material-symbols-outlined text-[16px] text-primary">location_on</span>
                                        Yala National Park
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-300 text-sm mb-6 line-clamp-2">
                                Catch the jungle waking up. The best time to spot leopards and bears as they finish their nocturnal hunts.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-3 py-1 rounded-md bg-[#383429] text-xs font-medium text-gray-200 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px] text-primary">schedule</span> 3-4 Hours
                                </span>
                                <span className="px-3 py-1 rounded-md bg-[#383429] text-xs font-medium text-gray-200 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px] text-primary">group</span> Families
                                </span>
                            </div>
                            <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
                                <div className="flex flex-col">
                                    <span className="text-xs text-gray-500 uppercase">From</span>
                                    <span className="text-xl font-bold text-white">$60 <span className="text-sm font-normal text-gray-400">/ person</span></span>
                                </div>
                                <Link href="/packages/morning-safari" className="h-10 px-5 rounded-lg border border-primary text-primary hover:bg-primary hover:text-[#171611] text-sm font-bold transition-all duration-200 flex items-center gap-2">
                                    View Details
                                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                                </Link>
                            </div>
                        </div>
                    </article>

                    {/* Card 2: Afternoon Safari */}
                    <article className="glass-card group rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 relative bg-[#2a271f]/40 backdrop-blur-lg border border-white/10">
                        <div className="relative h-64 overflow-hidden">
                            <Image
                                alt="Elephant herd walking during golden hour sunset"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDR4SzW-jw_GjgNyA9bXvr04xA0huVXaE4kmcLImhrJ-pDfvuX0P2XUSliBQ8-uay3TkRVEPI5kRN8M6PejAaBKyxT3X9xAOVtxAwHbSMYngVywX_w8Wl8-fpSNUHLuYG4YN4_no4cYdJr7GLmCdtPV1339he1AzvzYcGSRPS54DcHEM8scZBHn605KWoTvy0eXTuQ54FVken3O2mNGigLtWwuhHaPHg-XngiPc6u55VqEXL8GZ0Zkcw-VpvNc5GhPPFjNO76zx11_"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#171611] to-transparent opacity-80"></div>
                        </div>
                        <div className="p-6 flex flex-col flex-1 relative">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">Afternoon Safari</h3>
                                    <div className="flex items-center text-gray-400 text-sm gap-1">
                                        <span className="material-symbols-outlined text-[16px] text-primary">location_on</span>
                                        Yala National Park
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-300 text-sm mb-6 line-clamp-2">
                                Witness the golden hour. Perfect for photographers capturing elephants bathing and wildlife at waterholes.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-3 py-1 rounded-md bg-[#383429] text-xs font-medium text-gray-200 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px] text-primary">schedule</span> 3-4 Hours
                                </span>
                                <span className="px-3 py-1 rounded-md bg-[#383429] text-xs font-medium text-gray-200 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px] text-primary">photo_camera</span> Photography
                                </span>
                            </div>
                            <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
                                <div className="flex flex-col">
                                    <span className="text-xs text-gray-500 uppercase">From</span>
                                    <span className="text-xl font-bold text-white">$60 <span className="text-sm font-normal text-gray-400">/ person</span></span>
                                </div>
                                <Link href="/packages/afternoon-safari" className="h-10 px-5 rounded-lg border border-primary text-primary hover:bg-primary hover:text-[#171611] text-sm font-bold transition-all duration-200 flex items-center gap-2">
                                    View Details
                                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                                </Link>
                            </div>
                        </div>
                    </article>

                    {/* Card 3: Full-Day Safari */}
                    <article className="glass-card group rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 relative bg-[#2a271f]/40 backdrop-blur-lg border border-white/10">
                        <div className="relative h-64 overflow-hidden">
                            <div className="absolute top-3 left-3 z-10 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full text-[#171611]">
                                <span className="text-xs font-bold uppercase tracking-wider">Best Value</span>
                            </div>
                            <Image
                                alt="Close up of a peacock displaying feathers"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4hCsbqfpG_2gWOvxfxTVY0-g46rna3vqj0wo5h7mijntACFLe524Cr-gvQL8YCwRPW430U3KK2oo6HqusFp_qSusc9OTOQuT5W6fa9l8IUma4RzMrtPWvOSNK_7veK667N3F20iqBHK-CR6scAWlHxToGHGCiN-c-qcPJeDqH30hyChmY6ilSYLsI-_wujJYFi8kXU5wPj4o4NfMfji9mgyspxYJpMW5h7zATk-LYHG4FqOdM1hwgMFt79OnA-K2x5QB8SCucEQ37"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#171611] to-transparent opacity-80"></div>
                        </div>
                        <div className="p-6 flex flex-col flex-1 relative">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">Full-Day Safari</h3>
                                    <div className="flex items-center text-gray-400 text-sm gap-1">
                                        <span className="material-symbols-outlined text-[16px] text-primary">location_on</span>
                                        Block 1 & 2
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-300 text-sm mb-6 line-clamp-2">
                                Immerse yourself completely. A 10-hour adventure covering multiple zones with a picnic lunch in the wild.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-3 py-1 rounded-md bg-[#383429] text-xs font-medium text-gray-200 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px] text-primary">schedule</span> 10 Hours
                                </span>
                                <span className="px-3 py-1 rounded-md bg-[#383429] text-xs font-medium text-gray-200 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px] text-primary">emoji_nature</span> Enthusiasts
                                </span>
                            </div>
                            <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
                                <div className="flex flex-col">
                                    <span className="text-xs text-gray-500 uppercase">From</span>
                                    <span className="text-xl font-bold text-white">$150 <span className="text-sm font-normal text-gray-400">/ person</span></span>
                                </div>
                                <Link href="/packages/full-day-safari" className="h-10 px-5 rounded-lg border border-primary text-primary hover:bg-primary hover:text-[#171611] text-sm font-bold transition-all duration-200 flex items-center gap-2">
                                    View Details
                                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                                </Link>
                            </div>
                        </div>
                    </article>

                    {/* Card 4: Private Safari */}
                    <article className="glass-card group rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 relative bg-[#2a271f]/40 backdrop-blur-lg border border-white/10">
                        <div className="relative h-64 overflow-hidden">
                            <Image
                                alt="Private safari jeep on a dirt road in the jungle"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDb7P_JoomDKCzH0nnjkFpbJXkQ4qqKVi7nHaA9o-qsRkKDvVdstHq8iA9-FiI0CfHDz5JkGLmOdqjWGIMyLpcj4BuijcVxtsgA2U82zt16-5HUXvmcDajO9_zpO-qV7b3jjYVwmvrqj3TSl40v4MCeDOzvN-NQoLHGFbrqkBmwEfKrHebiO_EZrMi5KBkb3UitBdpE8sVzaCOSCjo8SJ_DWFei4_Pwt80EaKnn0TPW945PHSPu-QBn8NDsBejrJ3JGHpn-zvMleKEZ"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#171611] to-transparent opacity-80"></div>
                        </div>
                        <div className="p-6 flex flex-col flex-1 relative">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">Private Safari</h3>
                                    <div className="flex items-center text-gray-400 text-sm gap-1">
                                        <span className="material-symbols-outlined text-[16px] text-primary">location_on</span>
                                        Custom Routes
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-300 text-sm mb-6 line-clamp-2">
                                Exclusive jeep for your group. No strangers, just you and the wilderness. Customizable timing and routes.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-3 py-1 rounded-md bg-[#383429] text-xs font-medium text-gray-200 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px] text-primary">tune</span> Flexible
                                </span>
                                <span className="px-3 py-1 rounded-md bg-[#383429] text-xs font-medium text-gray-200 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px] text-primary">lock</span> Private
                                </span>
                            </div>
                            <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
                                <div className="flex flex-col">
                                    <span className="text-xs text-gray-500 uppercase">Price</span>
                                    <span className="text-lg font-bold text-white">Contact Us</span>
                                </div>
                                <Link href="/packages/private-safari" className="h-10 px-5 rounded-lg border border-primary text-primary hover:bg-primary hover:text-[#171611] text-sm font-bold transition-all duration-200 flex items-center gap-2">
                                    View Details
                                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                                </Link>
                            </div>
                        </div>
                    </article>

                    {/* Card 5: Luxury Safari */}
                    <article className="glass-card group rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 relative bg-[#2a271f]/40 backdrop-blur-lg border border-white/10">
                        <div className="relative h-64 overflow-hidden">
                            <div className="absolute top-3 right-3 z-10">
                                <span className="material-symbols-outlined text-primary drop-shadow-md">stars</span>
                            </div>
                            <Image
                                alt="Luxury tent setup with champagne at sunset"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPNQC3oJnyWGCVHK0gB8AT7gr-1xeObUD0B5HePfWKUkQVyovTTcHtLb4WAhw3VId9U0-6DcxtLoqGrpvKp8qHe9B_ZAKi7Ah8rK63sJhL1ilvW0HviJOFnPZ8DFxD0m8KCyzA3MXuUQow57NDuxfLoJE98piWY0AQzAk7tNWmIrKum6Xqw_4HWwcIroXVbJPeOGzKD4eTaxiKRznm5MeO15vZEs5Di6vmHuYboUMBaA4g0Lp207UEBKA_yqzhF45hGX6kmdFK7p2H"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#171611] to-transparent opacity-80"></div>
                        </div>
                        <div className="p-6 flex flex-col flex-1 relative">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">Luxury Safari</h3>
                                    <div className="flex items-center text-gray-400 text-sm gap-1">
                                        <span className="material-symbols-outlined text-[16px] text-primary">location_on</span>
                                        Premium Zones
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-300 text-sm mb-6 line-clamp-2">
                                Champagne and sunsets. A VIP experience with gourmet catering, premium vehicles, and top-tier naturalists.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-3 py-1 rounded-md bg-[#383429] text-xs font-medium text-gray-200 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px] text-primary">local_bar</span> VIP
                                </span>
                                <span className="px-3 py-1 rounded-md bg-[#383429] text-xs font-medium text-gray-200 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px] text-primary">diamond</span> Exclusive
                                </span>
                            </div>
                            <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
                                <div className="flex flex-col">
                                    <span className="text-xs text-gray-500 uppercase">Price</span>
                                    <span className="text-lg font-bold text-white">Contact Us</span>
                                </div>
                                <Link href="/packages/luxury-safari" className="h-10 px-5 rounded-lg border border-primary text-primary hover:bg-primary hover:text-[#171611] text-sm font-bold transition-all duration-200 flex items-center gap-2">
                                    View Details
                                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                                </Link>
                            </div>
                        </div>
                    </article>

                    {/* Card 6: Bird Watching */}
                    <article className="glass-card group rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 relative bg-[#2a271f]/40 backdrop-blur-lg border border-white/10">
                        <div className="relative h-64 overflow-hidden">
                            <Image
                                alt="Colorful Kingfisher bird on a branch"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxGLxYTLGmmqPE2HwWdYml97MjaogGcoxIARQD_HSats59-a0IKvNjz5E0CVELdCSI3MCOZrX6BQaNy-PDnzGBUwkfMswzg94gs9lhsanaEkiIUByV2NEsqHEkl1FTQI7pgbQSQd5wGrF3jD3S-viiYf3LWkp6jaz0N3FlmaUc98kVdHmAnD4aB-qUgxP8LziWTeUIxYWTEhpv7MLBgpyWfOe9VYf5j5aKfBBe-b1vdSO_kt7Rxpg4bpx1iUWHR8aP-kJMEXR3NLGQ"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#171611] to-transparent opacity-80"></div>
                        </div>
                        <div className="p-6 flex flex-col flex-1 relative">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">Bird Watching</h3>
                                    <div className="flex items-center text-gray-400 text-sm gap-1">
                                        <span className="material-symbols-outlined text-[16px] text-primary">location_on</span>
                                        Bundala & Yala
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-300 text-sm mb-6 line-clamp-2">
                                Explore the avian paradise. Bundala National Park is a wintering ground for migratory water birds.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-3 py-1 rounded-md bg-[#383429] text-xs font-medium text-gray-200 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px] text-primary">schedule</span> 4 Hours
                                </span>
                                <span className="px-3 py-1 rounded-md bg-[#383429] text-xs font-medium text-gray-200 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px] text-primary">flutter_dash</span> Ornithology
                                </span>
                            </div>
                            <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
                                <div className="flex flex-col">
                                    <span className="text-xs text-gray-500 uppercase">From</span>
                                    <span className="text-xl font-bold text-white">$75 <span className="text-sm font-normal text-gray-400">/ person</span></span>
                                </div>
                                <Link href="/packages/bird-watching" className="h-10 px-5 rounded-lg border border-primary text-primary hover:bg-primary hover:text-[#171611] text-sm font-bold transition-all duration-200 flex items-center gap-2">
                                    View Details
                                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                                </Link>
                            </div>
                        </div>
                    </article>
                </div>

                {/* Load More */}
                <div className="flex justify-center mt-12">
                    <button className="flex items-center gap-2 text-white font-medium hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1">
                        Load more packages
                        <span className="material-symbols-outlined">expand_more</span>
                    </button>
                </div>

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
