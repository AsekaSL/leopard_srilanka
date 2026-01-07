import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { tw, colors } from "@/lib/theme";

export const metadata: Metadata = {
    title: "Yala National Park Safari Packages | YalaSriLanka.co",
    description: "Comprehensive guide to safari packages in Yala. Compare Private All-Inclusive, Shared Options, and Jeep-Only hires. Find the best safari tier for your budget.",
};

export default function YalaPackagesPage() {
    return (
        <div className={`${tw.bgBackgroundDark} text-white font-display antialiased ${tw.selectionBgPrimary} ${tw.selectionTextDark} scroll-smooth`}>
            {/* Hero Section */}
            <section className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 z-10" style={{ background: `linear-gradient(to bottom, ${colors.backgroundDark}30, ${colors.backgroundDark}80, ${colors.backgroundDark})` }}></div>
                    <Image
                        alt="Leopard resting on a tree branch in Yala National Park"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIE-zc_aV0U0lmAmLrsHx6P2yX524Zf2WQ6Jn8Tix093E0P9EjdEi3gykij-ggdqWDLTxJSANjpri8Qk0zQOTZicw4ugQpSawxQWY7cG7vo7Fj-trY3733gwudS6TAi2SYTnHsL3ZhWXMJUzsoCk8RQKgX_szL5GfwOl3L0sgH8C3tb7tvcAN-PtP6EjLfgXrpmaQSzVuP9OHJkdpfqJdnrbmoAQJ9Yqylil3zf1gxwZUVNyjMGOcgFiJiBKckRsMGle-miwm6Fo7b"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
                    <span className={`inline-block py-1 px-3 rounded-full ${tw.textPrimary} text-xs font-bold uppercase tracking-wider mb-6 border`} style={{ backgroundColor: `${colors.primary}20`, borderColor: `${colors.primary}20` }}>Official 2025 Packages</span>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
                        Experience <span className={tw.textPrimary}>The Wild</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
                        The world’s premier destination for Leopard & Elephant encounters. Explore our curated 2025 safari tiers designed for every traveler.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a className={`flex items-center justify-center h-12 px-8 ${tw.bgPrimary} ${tw.textDark} font-bold rounded-lg hover:bg-white transition-colors`} href="#packages">
                            View 2025 Packages
                        </a>
                        <a className="flex items-center justify-center h-12 px-8 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-lg hover:bg-white/20 transition-colors" href="#contact">
                            Contact Specialist
                        </a>
                    </div>
                </div>
            </section>

            {/* Sticky Package Nav */}
            <div className={`sticky top-16 z-40 ${tw.bgSurfaceDark} border-b ${tw.borderDark} w-full overflow-x-auto hide-scrollbar`}>
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex whitespace-nowrap min-w-full md:justify-center gap-1">
                        <a className={`px-4 py-3 text-sm font-medium ${tw.textPrimary} border-b-2 ${tw.borderPrimary}`} href="#private-all">Private All-Inclusive</a>
                        <a className="px-4 py-3 text-sm font-medium text-gray-400 hover:text-white transition-colors" href="#shared-all">Shared All-Inclusive</a>
                        <a className="px-4 py-3 text-sm font-medium text-gray-400 hover:text-white transition-colors" href="#private-jeep">Private Jeep-Only</a>
                        <a className="px-4 py-3 text-sm font-medium text-gray-400 hover:text-white transition-colors" href="#shared-jeep">Shared Jeep-Only</a>
                    </div>
                </div>
            </div>

            {/* Package Category Overview Cards */}
            <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto" id="packages">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Safari Style</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">We offer four distinct ways to explore Yala National Park, tailored to your budget and privacy preferences.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Card 1 */}
                    <a className={`group relative flex flex-col justify-end h-80 rounded-xl overflow-hidden border ${tw.borderDark} ${tw.hoverBorderPrimary} transition-colors cursor-pointer`} href="#private-all">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10"></div>
                        <Image
                            alt="Private safari jeep on a dirt road"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuATxZ5tkzTtgSGaxPpd1StmIopwhsKH3VXkFxt93zsWG_p5BhhSR-RH-LTP41AL7MUkqLN5HZXvsh3kbSRasE2MHK8PwUcwW9XY_CL4JXZ3MYHk8wYcYrGz-920CCb07M4_jVGv-RaoVMU7e9H6cr_KjqAQK335Irmhtw0z8TuW5awsPgUwYdTGpe3kzD4tDvTgj6k7L1-ldaPkH1gKb9h3giLM_B1SDlBAiFKSjqXOi7AezS-jsX_dYD9-d6V_HfFijuj3KmT2NFMq"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="relative z-20 p-6">
                            <div className={`mb-2 ${tw.textPrimary}`}>
                                <span className="material-symbols-outlined">diamond</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Private All-Inclusive</h3>
                            <p className="text-sm text-gray-300 mb-4 line-clamp-2">The ultimate luxury. Entire jeep, tickets included, hotel pickup.</p>
                            <span className={`text-xs font-bold ${tw.textPrimary} flex items-center gap-1 group-hover:gap-2 transition-all`}>
                                View Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </span>
                        </div>
                    </a>
                    {/* Card 2 */}
                    <a className={`group relative flex flex-col justify-end h-80 rounded-xl overflow-hidden border ${tw.borderDark} ${tw.hoverBorderPrimary} transition-colors cursor-pointer`} href="#shared-all">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10"></div>
                        <Image
                            alt="Group of people in safari vehicle watching elephants"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBT0q13f-PHx5NADQjFD7MIeLChdEl2kGpagF01FwUfDplzyWbpzSORWQLcdbbzRvCt7UHzg4BObUtiXoJL5aTcnHC_KX33hBGT_RfOffZDBsBh2pQoigk5MHP31F2EnruxJ_7zXeE703w2sF_GE7_Pf99g2MlCIX7ViHfst7WIFtOULiI-unL23gKfxRlil9ZCFIr1fN3GiuNgA3Hc6WVOJnI5OzZpRHciVgw2NZV_RPC6fDb3XNFFmCHelSm2gJfwMOFkqHIrBVK6"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="relative z-20 p-6">
                            <div className={`mb-2 ${tw.textPrimary}`}>
                                <span className="material-symbols-outlined">groups</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Shared All-Inclusive</h3>
                            <p className="text-sm text-gray-300 mb-4 line-clamp-2">Perfect for solo travelers. Share costs, full package included.</p>
                            <span className={`text-xs font-bold ${tw.textPrimary} flex items-center gap-1 group-hover:gap-2 transition-all`}>
                                View Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </span>
                        </div>
                    </a>
                    {/* Card 3 */}
                    <a className={`group relative flex flex-col justify-end h-80 rounded-xl overflow-hidden border ${tw.borderDark} ${tw.hoverBorderPrimary} transition-colors cursor-pointer`} href="#private-jeep">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10"></div>
                        <Image
                            alt="Rugged jeep tire on dusty ground"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUQBSOzWF9hniLPg6OCt8h-zcfUHdLKSftEnjMLCHncNMTkpitraefnLxFIu3_t3uAlbvKvXQMmM7bKZSSCwFcM2QuSoIwdN4-Cuwt86iCW8AgfplaCfJunH5nM6QBtBsjvW9YWJOgkNfxVhGZSQn6xOKFkSUoVOGU13U4yckFhfw0t8ss69rixx2c4QB1haXwqu3a_WTU23xaqhXf8yaCmLSI5osBOsstKtQ2XES3kjSnnx5w28GQ-rOvZ93ep3ttRjfSZN_s3vbp"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="relative z-20 p-6">
                            <div className={`mb-2 ${tw.textPrimary}`}>
                                <span className="material-symbols-outlined">directions_car</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Private Jeep-Only</h3>
                            <p className="text-sm text-gray-300 mb-4 line-clamp-2">Hire the vehicle only. Pay your own park entrance fees at the gate.</p>
                            <span className={`text-xs font-bold ${tw.textPrimary} flex items-center gap-1 group-hover:gap-2 transition-all`}>
                                View Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </span>
                        </div>
                    </a>
                    {/* Card 4 */}
                    <a className={`group relative flex flex-col justify-end h-80 rounded-xl overflow-hidden border ${tw.borderDark} ${tw.hoverBorderPrimary} transition-colors cursor-pointer`} href="#shared-jeep">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10"></div>
                        <Image
                            alt="Safari vehicle interior view"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6Oo9Eak51jDGIlZLH2TsV8m2Oo9j_nWho2D7SqtjeCdRglYUsDFmBCSAAwx12_8HxAbCSAJhkYxuZnqvJETR5h6Y8UyOHk834lxCe_9fKn3i9GskCpUx0V8sjL8fsfeQAvzOB5mtIgNKt-evkCXqTbvzvlWnEl9Wb71YitTr1Jc5vx42SpEBbfX99-1uV0V6YYXNXI9LAocUDz_jjQTHwGKUxODzVM9aA1SzvamZ9KfUDBDp-BtxmshiV8EuWlgtUP0MF2_EUgKCF"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="relative z-20 p-6">
                            <div className={`mb-2 ${tw.textPrimary}`}>
                                <span className="material-symbols-outlined">event_seat</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Shared Jeep-Only</h3>
                            <p className="text-sm text-gray-300 mb-4 line-clamp-2">Book a single seat in a jeep. Ideal for budget travelers.</p>
                            <span className={`text-xs font-bold ${tw.textPrimary} flex items-center gap-1 group-hover:gap-2 transition-all`}>
                                View Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </span>
                        </div>
                    </a>
                </div>
            </section>

            {/* SECTION A: Private All-Inclusive */}
            <section className="py-20 bg-surface-darker" id="private-all">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Content */}
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-4">
                                <span className={`${tw.textPrimary} p-2 rounded-lg`} style={{ backgroundColor: `${colors.primary}10` }}>
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
                                    <span className={`material-symbols-outlined ${tw.textPrimary} mt-1`}>check_circle</span>
                                    <div>
                                        <h4 className="font-bold text-white">Zero Queues</h4>
                                        <p className="text-sm text-gray-400">Tickets pre-purchased</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className={`material-symbols-outlined ${tw.textPrimary} mt-1`}>check_circle</span>
                                    <div>
                                        <h4 className="font-bold text-white">Private Guide</h4>
                                        <p className="text-sm text-gray-400">Dedicated tracker</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className={`material-symbols-outlined ${tw.textPrimary} mt-1`}>check_circle</span>
                                    <div>
                                        <h4 className="font-bold text-white">Hotel Pickup</h4>
                                        <p className="text-sm text-gray-400">From Tissamaharama area</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className={`material-symbols-outlined ${tw.textPrimary} mt-1`}>check_circle</span>
                                    <div>
                                        <h4 className="font-bold text-white">Refreshments</h4>
                                        <p className="text-sm text-gray-400">Water & fruit basket</p>
                                    </div>
                                </div>
                            </div>
                            <button className={`w-full sm:w-auto ${tw.bgPrimary} ${tw.textDark} font-bold py-3 px-8 rounded-lg hover:bg-white transition-colors`}>
                                Book Private Safari
                            </button>
                        </div>
                        {/* Table */}
                        <div className="flex-1">
                            <div className="bg-surface-dark rounded-xl overflow-hidden border border-border-dark">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left text-sm">
                                        <thead className="bg-black/20 text-gray-400 uppercase text-xs font-bold">
                                            <tr>
                                                <th className="px-6 py-4">Option</th>
                                                <th className="px-6 py-4">Duration</th>
                                                <th className="px-6 py-4">Price (from)</th>
                                            </tr>
                                        </thead>
                                        <tbody className={`divide-y ${tw.borderDark}`}>
                                            <tr className="hover:bg-white/5 transition-colors">
                                                <td className="px-6 py-4 font-medium text-white">Morning Safari</td>
                                                <td className="px-6 py-4 text-gray-400">5:00 AM - 10:00 AM</td>
                                                <td className={`px-6 py-4 ${tw.textPrimary} font-bold`}>$105</td>
                                            </tr>
                                            <tr className="hover:bg-white/5 transition-colors">
                                                <td className="px-6 py-4 font-medium text-white">Afternoon Safari</td>
                                                <td className="px-6 py-4 text-gray-400">2:00 PM - 6:30 PM</td>
                                                <td className={`px-6 py-4 ${tw.textPrimary} font-bold`}>$105</td>
                                            </tr>
                                            <tr className="hover:bg-white/5 transition-colors">
                                                <td className="px-6 py-4 font-medium text-white">Full Day Safari</td>
                                                <td className="px-6 py-4 text-gray-400">5:00 AM - 6:30 PM</td>
                                                <td className={`px-6 py-4 ${tw.textPrimary} font-bold`}>$190</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className={`px-6 py-4 border-t ${tw.borderDark}`} style={{ backgroundColor: `${colors.primary}05` }}>
                                    <p className="text-xs flex items-center gap-2" style={{ color: `${colors.primary}CC` }}>
                                        <span className="material-symbols-outlined text-base">info</span>
                                        Price varies based on group size. Best value for groups of 4+.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION B: Shared All-Inclusive */}
            <section className={`py-20 ${tw.bgBackgroundDark}`} id="shared-all">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="flex flex-col lg:flex-row-reverse gap-12">
                        {/* Content */}
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-4">
                                <span className={`${tw.textPrimary} p-2 rounded-lg`} style={{ backgroundColor: `${colors.primary}10` }}>
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
                                    <span className={`material-symbols-outlined ${tw.textPrimary} mt-1`}>savings</span>
                                    <div>
                                        <h4 className="font-bold text-white">Cost Effective</h4>
                                        <p className="text-sm text-gray-400">Split costs with others</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className={`material-symbols-outlined ${tw.textPrimary} mt-1`}>confirmation_number</span>
                                    <div>
                                        <h4 className="font-bold text-white">Tickets Included</h4>
                                        <p className="text-sm text-gray-400">No gate payment needed</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className={`material-symbols-outlined ${tw.textPrimary} mt-1`}>handshake</span>
                                    <div>
                                        <h4 className="font-bold text-white">Meet People</h4>
                                        <p className="text-sm text-gray-400">Social experience</p>
                                    </div>
                                </div>
                            </div>
                            <button className={`w-full sm:w-auto ${tw.bgSurfaceDark} border ${tw.borderPrimary} ${tw.textPrimary} font-bold py-3 px-8 rounded-lg ${tw.bgPrimaryHover} ${tw.hoverTextDark} transition-colors`}>
                                Join a Shared Safari
                            </button>
                        </div>
                        {/* Table */}
                        <div className="flex-1">
                            <div className={`${tw.bgSurfaceDark} rounded-xl overflow-hidden border ${tw.borderDark}`}>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left text-sm">
                                        <thead className="bg-black/20 text-gray-400 uppercase text-xs font-bold">
                                            <tr>
                                                <th className="px-6 py-4">Option</th>
                                                <th className="px-6 py-4">Duration</th>
                                                <th className="px-6 py-4">Price Per Person</th>
                                            </tr>
                                        </thead>
                                        <tbody className={`divide-y ${tw.borderDark}`}>
                                            <tr className="hover:bg-white/5 transition-colors">
                                                <td className="px-6 py-4 font-medium text-white">Morning Safari</td>
                                                <td className="px-6 py-4 text-gray-400">5:00 AM - 10:00 AM</td>
                                                <td className={`px-6 py-4 ${tw.textPrimary} font-bold`}>$65</td>
                                            </tr>
                                            <tr className="hover:bg-white/5 transition-colors">
                                                <td className="px-6 py-4 font-medium text-white">Afternoon Safari</td>
                                                <td className="px-6 py-4 text-gray-400">2:00 PM - 6:30 PM</td>
                                                <td className="px-6 py-4 text-primary font-bold">$65</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className={`px-6 py-4 border-t ${tw.borderDark}`} style={{ backgroundColor: `${colors.primary}05` }}>
                                    <p className="text-xs flex items-center gap-2" style={{ color: `${colors.primary}CC` }}>
                                        <span className="material-symbols-outlined text-base">warning</span>
                                        Minimum 2 people required to confirm departure.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION C & D: Jeep Only Options */}
            <section className="py-20 bg-surface-darker" id="private-jeep">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Private Jeep */}
                        <div className="flex flex-col h-full">
                            <div className="flex items-center gap-3 mb-4">
                                <span className={`${tw.textPrimary} p-2 rounded-lg`} style={{ backgroundColor: `${colors.primary}10` }}>
                                    <span className="material-symbols-outlined">directions_car</span>
                                </span>
                                <h2 className="text-2xl font-bold">Private Jeep Hire Only</h2>
                            </div>
                            <p className="text-gray-400 mb-6 text-sm flex-grow">
                                Hire the vehicle and driver. You must queue at the ticket counter and pay entrance fees separately. Ideal if you have local IDs or specific permits.
                            </p>
                            <div className={`${tw.bgSurfaceDark} rounded-lg p-6 border ${tw.borderDark} mb-6`}>
                                <div className={`flex justify-between items-center mb-3 border-b ${tw.borderDark} pb-3`}>
                                    <span className="text-white font-medium">Half Day Hire</span>
                                    <span className={`${tw.textPrimary} font-bold text-lg`}>$45 <span className="text-xs text-gray-500 font-normal">/ jeep</span></span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-white font-medium">Full Day Hire</span>
                                    <span className={`${tw.textPrimary} font-bold text-lg`}>$85 <span className="text-xs text-gray-500 font-normal">/ jeep</span></span>
                                </div>
                            </div>
                            <button className={`w-full ${tw.bgSurfaceDark} border border-gray-600 text-white font-bold py-3 px-8 rounded-lg ${tw.hoverBorderPrimary} ${tw.hoverTextPrimary} transition-colors`}>
                                Hire Private Jeep
                            </button>
                        </div>
                        {/* Shared Jeep */}
                        <div className={`flex flex-col h-full border-t lg:border-t-0 lg:border-l ${tw.borderDark} lg:pl-16 pt-12 lg:pt-0`} id="shared-jeep">
                            <div className="flex items-center gap-3 mb-4">
                                <span className={`${tw.textPrimary} p-2 rounded-lg`} style={{ backgroundColor: `${colors.primary}10` }}>
                                    <span className="material-symbols-outlined">event_seat</span>
                                </span>
                                <h2 className="text-2xl font-bold">Shared Jeep Seat Only</h2>
                            </div>
                            <p className="text-gray-400 mb-6 text-sm flex-grow">
                                Reserve a single seat in a jeep. You share the jeep cost but still need to buy your own ticket at the gate. The most budget-friendly "backpacker" option.
                            </p>
                            <div className={`${tw.bgSurfaceDark} rounded-lg p-6 border ${tw.borderDark} mb-6`}>
                                <div className={`flex justify-between items-center mb-3 border-b ${tw.borderDark} pb-3`}>
                                    <span className="text-white font-medium">Morning Seat</span>
                                    <span className={`${tw.textPrimary} font-bold text-lg`}>$12 <span className="text-xs text-gray-500 font-normal">/ person</span></span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-white font-medium">Afternoon Seat</span>
                                    <span className={`${tw.textPrimary} font-bold text-lg`}>$12 <span className="text-xs text-gray-500 font-normal">/ person</span></span>
                                </div>
                            </div>
                            <button className={`w-full ${tw.bgSurfaceDark} border border-gray-600 text-white font-bold py-3 px-8 rounded-lg ${tw.hoverBorderPrimary} ${tw.hoverTextPrimary} transition-colors`}>
                                Reserve a Seat
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gate Fee Reminder */}
            <section className={`py-12 ${tw.bgBackgroundDark}`}>
                <div className="max-w-4xl mx-auto px-4">
                    <div className="bg-red-900/10 border border-red-900/50 rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
                        <div className="bg-red-500/10 p-3 rounded-full text-red-500 shrink-0">
                            <span className="material-symbols-outlined text-3xl">payments</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">2025 Gate Fee Reminder (For Jeep-Only Packages)</h3>
                            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                If you choose a "Jeep-Only" package, you MUST pay the park entrance fee at the main gate. The current fee for foreign nationals is approximately <strong>$35-$40 USD per adult</strong> and <strong>$15-$20 USD per child</strong>.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <span className={`inline-flex items-center gap-1 px-3 py-1 rounded ${tw.bgSurfaceDark} text-xs text-gray-300 border ${tw.borderDark}`}>
                                    <span className="material-symbols-outlined text-sm">credit_card</span> Credit Cards Accepted
                                </span>
                                <span className={`inline-flex items-center gap-1 px-3 py-1 rounded ${tw.bgSurfaceDark} text-xs text-gray-300 border ${tw.borderDark}`}>
                                    <span className="material-symbols-outlined text-sm">currency_exchange</span> Pay in LKR or USD
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Which Package Should You Choose? */}
            <section className={`py-20 ${tw.bgSurfaceDark}`}>
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Which Package Fits You?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Persona 1 */}
                        <div className={`${tw.bgBackgroundDark} p-6 rounded-xl border ${tw.borderDark}`}>
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${tw.textPrimary} mb-4`} style={{ backgroundColor: `${colors.primary}20` }}>
                                <span className="material-symbols-outlined">camera_alt</span>
                            </div>
                            <h4 className="font-bold text-lg mb-2">Photographers</h4>
                            <p className="text-sm text-gray-400 mb-4">Need space for equipment and patience for the perfect shot.</p>
                            <p className={`${tw.textPrimary} text-sm font-bold`}>Rec: Private All-Inclusive</p>
                        </div>
                        {/* Persona 2 */}
                        <div className={`${tw.bgBackgroundDark} p-6 rounded-xl border ${tw.borderDark}`}>
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${tw.textPrimary} mb-4`} style={{ backgroundColor: `${colors.primary}20` }}>
                                <span className="material-symbols-outlined">family_restroom</span>
                            </div>
                            <h4 className="font-bold text-lg mb-2">Families</h4>
                            <p className="text-sm text-gray-400 mb-4">Convenience is key with kids. No waiting in lines.</p>
                            <p className={`${tw.textPrimary} text-sm font-bold`}>Rec: Private All-Inclusive</p>
                        </div>
                        {/* Persona 3 */}
                        <div className={`${tw.bgBackgroundDark} p-6 rounded-xl border ${tw.borderDark}`}>
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${tw.textPrimary} mb-4`} style={{ backgroundColor: `${colors.primary}20` }}>
                                <span className="material-symbols-outlined">backpack</span>
                            </div>
                            <h4 className="font-bold text-lg mb-2">Solo Backpackers</h4>
                            <p className="text-sm text-gray-400 mb-4">Traveling alone and watching the budget carefully.</p>
                            <p className={`${tw.textPrimary} text-sm font-bold`}>Rec: Shared All-Inclusive</p>
                        </div>
                        {/* Persona 4 */}
                        <div className={`${tw.bgBackgroundDark} p-6 rounded-xl border ${tw.borderDark}`}>
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${tw.textPrimary} mb-4`} style={{ backgroundColor: `${colors.primary}20` }}>
                                <span className="material-symbols-outlined">forest</span>
                            </div>
                            <h4 className="font-bold text-lg mb-2">Nature Purists</h4>
                            <p className="text-sm text-gray-400 mb-4">Want to spend the maximum time inside the park.</p>
                            <p className={`${tw.textPrimary} text-sm font-bold`}>Rec: Full Day Private</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust & Transparency */}
            <section className={`py-16 border-t ${tw.borderDark} ${tw.bgBackgroundDark}`}>
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="flex flex-col items-center gap-2">
                            <span className="material-symbols-outlined text-4xl text-gray-500">verified_user</span>
                            <span className="font-medium text-gray-300">No Hidden Charges</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <span className="material-symbols-outlined text-4xl text-gray-500">badge</span>
                            <span className="font-medium text-gray-300">Licensed Drivers</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <span className="material-symbols-outlined text-4xl text-gray-500">visibility</span>
                            <span className="font-medium text-gray-300">Ethical Viewing</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <span className="material-symbols-outlined text-4xl text-gray-500">support_agent</span>
                            <span className="font-medium text-gray-300">24/7 Support</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className={`py-24 ${tw.bgPrimary} ${tw.textDark} relative overflow-hidden`} id="contact">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAKc73Pfhxub34Q1gJ96PFD8ted0jn-_-suXRbG3iUsRQNsVfqZE4lhlUllyRwJg54oRt_P54GjY-v_nPXmoNLpw_PvcKPjr5kE5Da52dI5wnLqqD5KWnN_tJ-dGkQheB8T7fpvIpC9PUBgGXgst5pJKM3SdE3m--ou8OFNifuC7quJPiEgS8AAi39B67kCFHa7nymDBjtOJlqD2TshrKh0SDT7M92JA4PgeaYbdi7xA4xS8JUvIKxI1W7DDknLOLrbgrVO4Mw4Ws2t')" }}></div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Choose your safari. <br />We handle the rest.</h2>
                    <p className="text-xl font-medium mb-10 opacity-90">Ready to spot the elusive leopard? Secure your jeep today.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className={`${tw.bgBackgroundDark} text-white text-lg font-bold py-4 px-10 rounded-xl hover:bg-black transition-transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2`}>
                            <span className="material-symbols-outlined">chat</span> Book via WhatsApp
                        </button>
                        <button className={`bg-white/20 border-2 ${tw.textDark} text-lg font-bold py-4 px-10 rounded-xl hover:bg-white/30 transition-colors`} style={{ borderColor: `${colors.backgroundDark}20` }}>
                            Calculate Cost
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
