import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import visitor_guide_hero from "@/public/visitor_guide_hero.png";
import { tw, colors } from "@/lib/theme";

export const metadata: Metadata = {
    title: "Visitor Guide | Leopard Sri Lanka",
    description: "Essential information for your Yala National Park safari. Best time to visit, safari timings, park rules, and what to bring.",
};

export default function VisitorGuidePage() {
    return (
        <div className={`${tw.bgBackgroundLight} ${tw.darkBgBackgroundDark} text-slate-900 dark:text-white font-display overflow-x-hidden`}>

            {/* Hero Section */}
            <div className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/30 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-black/30 z-10" />
                    <Image
                        src={visitor_guide_hero}
                        alt="Majestic leopard resting on a tree branch in dark moody lighting"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col gap-6">
                    <span className={`${tw.textPrimary} font-medium tracking-widest uppercase text-sm`}>Essential Information</span>
                    <h1 className="text-white text-5xl md:text-7xl font-black tracking-tight leading-tight">
                        Visitor Guide
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                        Prepare for the Wild. Everything you need to know for your expedition into the heart of Yala National Park.
                    </p>
                </div>
            </div>

            {/* Main Content Layout */}
            <div className="px-4 sm:px-6 lg:px-8 py-12 md:py-20 max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar / TOC (Desktop only) */}
                    <div className="hidden lg:block w-64 shrink-0">
                        <div className="sticky top-24 flex flex-col gap-2">
                            <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4 px-3">Contents</p>
                            <a className={`px-3 py-2 ${tw.textPrimary} font-medium border-l-2 ${tw.borderPrimary} rounded-r-md`} style={{ backgroundColor: `${colors.primary}05` }} href="#before-you-go">Preparation</a>
                            <a className="px-3 py-2 text-gray-400 hover:text-white transition-colors border-l-2 border-transparent hover:border-gray-700" href="#timings">Timings & Fees</a>
                            <a className="px-3 py-2 text-gray-400 hover:text-white transition-colors border-l-2 border-transparent hover:border-gray-700" href="#what-to-bring">Essentials</a>
                            <a className="px-3 py-2 text-gray-400 hover:text-white transition-colors border-l-2 border-transparent hover:border-gray-700" href="#rules">Park Regulations</a>
                        </div>
                    </div>

                    {/* Accordion Content */}
                    <div className="flex-1 min-w-0">
                        <div className="flex flex-col gap-4">

                            {/* Accordion 1: Before You Go */}
                            <div className="scroll-mt-24" id="before-you-go">
                                <InformationAccordion
                                    icon="flight_takeoff"
                                    title="Before You Go"
                                    defaultOpen={true}
                                >
                                    <div className="grid md:grid-cols-2 gap-8 text-gray-300 leading-relaxed">
                                        <div>
                                            <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                                                <span className="material-symbols-outlined text-primary text-sm">badge</span> Visa Requirements
                                            </h4>
                                            <p className="text-sm mb-4">Most visitors require an Electronic Travel Authorization (ETA) before arrival. Apply online at eta.gov.lk. Ensure your passport is valid for at least 6 months.</p>
                                            <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                                                <span className="material-symbols-outlined text-primary text-sm">vaccines</span> Health
                                            </h4>
                                            <p className="text-sm">Consult your doctor 4-6 weeks before travel. Routine vaccines are recommended. Malaria risk is low in Yala, but mosquito repellent is essential.</p>
                                        </div>
                                        <div className="bg-[#2a261a] p-4 rounded-lg border border-[#383429]">
                                            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Quick Tips</h4>
                                            <ul className="space-y-3">
                                                <li className="flex items-start gap-3 text-sm">
                                                    <span className="material-symbols-outlined text-primary text-base mt-0.5">check_circle</span>
                                                    <span>Currency: Sri Lankan Rupee (LKR). Bring cash for tips.</span>
                                                </li>
                                                <li className="flex items-start gap-3 text-sm">
                                                    <span className="material-symbols-outlined text-primary text-base mt-0.5">check_circle</span>
                                                    <span>Plugs: Type D, M, and G. Bring a universal adapter.</span>
                                                </li>
                                                <li className="flex items-start gap-3 text-sm">
                                                    <span className="material-symbols-outlined text-primary text-base mt-0.5">check_circle</span>
                                                    <span>Language: Sinhala & Tamil. English is widely spoken.</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </InformationAccordion>
                            </div>

                            {/* Accordion 2: Best Time to Visit */}
                            <InformationAccordion icon="calendar_month" title="Best Time to Visit">
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="flex-1 text-gray-300 text-sm leading-relaxed">
                                        <p className="mb-4">Yala has a hot, semi-arid environment. The best time for leopard sightings is during the dry season when animals congregate around waterholes.</p>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                                            <div className="bg-[#2a261a] p-4 rounded-lg border-l-4 border-primary">
                                                <span className="block text-white font-bold mb-1">Feb - Jun</span>
                                                <span className="text-xs text-gray-400 uppercase tracking-wide">Peak Dry Season</span>
                                                <p className="mt-2 text-xs">Highest probability of spotting leopards and sloth bears. Vegetation is sparse.</p>
                                            </div>
                                            <div className="bg-[#2a261a] p-4 rounded-lg border-l-4 border-gray-600">
                                                <span className="block text-white font-bold mb-1">Oct - Dec</span>
                                                <span className="text-xs text-gray-400 uppercase tracking-wide">Monsoon Season</span>
                                                <p className="mt-2 text-xs">Park is lush and green. Bird watching is excellent, though mammal spotting is harder.</p>
                                            </div>
                                        </div>
                                        <p className="mt-4 text-xs text-primary/80 italic">* Note: Block 1 is sometimes closed in September for maintenance.</p>
                                    </div>
                                    <div className="w-full md:w-1/3 h-48 md:h-auto rounded-lg overflow-hidden relative">
                                        <Image
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkBWYV_DUVnVelnpLh2llTfD78xlMyqMgoV32BwnBX8Bco5ZE8tKFoDw9THx--Mqaw2eBovo2zIiQEtozUV9hMrq9gBr4GDXEMZaoR0EvMNMQHBB8iveH9lfy8-RWvup2YGwWFKH9whWr9UZe6CYJ6QyOygFGpm0sGS6hbhGBzdD6YzHtpZEbJmokXPSyMoT3lxsjcPuKkACXqSG8-Gz9gwh5TRw8031c2yVFW28qp9xdvFM9kLfyhjqFcM_zMJZEo-HHthFA8aOKU"
                                            alt="Dry landscape of Yala National Park"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </InformationAccordion>

                            {/* Accordion 3: Safari Timings */}
                            <div className="scroll-mt-24" id="timings">
                                <InformationAccordion icon="schedule" title="Safari Timings">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="flex flex-col gap-4 p-5 rounded-lg border border-[#383429] bg-gradient-to-br from-[#2a261a] to-surface-dark">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h4 className="text-lg font-bold text-white">Morning Safari</h4>
                                                    <p className="text-sm text-gray-400">Best for bird watching & active predators</p>
                                                </div>
                                                <span className="material-symbols-outlined text-primary">wb_sunny</span>
                                            </div>
                                            <div className="mt-2 pt-4 border-t border-[#383429] flex justify-between items-center">
                                                <span className="text-sm text-gray-300">Park Entry</span>
                                                <span className="font-mono text-primary font-bold">6:00 AM</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-sm text-gray-300">Duration</span>
                                                <span className="font-mono text-white">3-4 Hours</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-4 p-5 rounded-lg border border-[#383429] bg-gradient-to-br from-[#2a261a] to-surface-dark">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h4 className="text-lg font-bold text-white">Evening Safari</h4>
                                                    <p className="text-sm text-gray-400">Best for leopards & sunset views</p>
                                                </div>
                                                <span className="material-symbols-outlined text-primary">nights_stay</span>
                                            </div>
                                            <div className="mt-2 pt-4 border-t border-[#383429] flex justify-between items-center">
                                                <span className="text-sm text-gray-300">Park Entry</span>
                                                <span className="font-mono text-primary font-bold">2:30 PM</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-sm text-gray-300">Duration</span>
                                                <span className="font-mono text-white">3-4 Hours</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="mt-4 text-center text-xs text-gray-500">Full day safaris are also available from 6:00 AM to 6:00 PM.</p>
                                </InformationAccordion>
                            </div>

                            {/* Accordion 4: Entrance Fees */}
                            <InformationAccordion icon="payments" title="Entrance Fees">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left text-sm text-gray-300">
                                        <thead className="text-xs uppercase bg-[#2a261a] text-primary">
                                            <tr>
                                                <th className="px-4 py-3 rounded-l-lg" scope="col">Visitor Type</th>
                                                <th className="px-4 py-3" scope="col">Adult</th>
                                                <th className="px-4 py-3 rounded-r-lg" scope="col">Child (6-12)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b border-[#383429]">
                                                <td className="px-4 py-4 font-medium text-white">Foreign National</td>
                                                <td className="px-4 py-4">$25.00 + Taxes</td>
                                                <td className="px-4 py-4">$15.00 + Taxes</td>
                                            </tr>
                                            <tr className="border-b border-[#383429]">
                                                <td className="px-4 py-4 font-medium text-white">SAARC Country National</td>
                                                <td className="px-4 py-4">$20.00 + Taxes</td>
                                                <td className="px-4 py-4">$10.00 + Taxes</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-4 font-medium text-white">Local Citizen</td>
                                                <td className="px-4 py-4">LKR 150.00</td>
                                                <td className="px-4 py-4">LKR 60.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="mt-4 text-xs text-gray-500">* Additional service charges apply for vehicles ($8-10). Prices subject to change by Wildlife Department.</p>
                            </InformationAccordion>

                            {/* Accordion 5: What to Bring */}
                            <div className="scroll-mt-24" id="what-to-bring">
                                <InformationAccordion icon="backpack" title="What to Bring">
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        <div className="p-4 bg-[#2a261a] rounded-lg flex flex-col items-center text-center gap-2">
                                            <span className="material-symbols-outlined text-primary text-3xl">checkroom</span>
                                            <span className="text-white font-semibold text-sm">Neutral Clothing</span>
                                            <span className="text-xs text-gray-400">Avoid bright colors</span>
                                        </div>
                                        <div className="p-4 bg-[#2a261a] rounded-lg flex flex-col items-center text-center gap-2">
                                            <span className="material-symbols-outlined text-primary text-3xl">photo_camera</span>
                                            <span className="text-white font-semibold text-sm">Zoom Lens</span>
                                            <span className="text-xs text-gray-400">Min 300mm recommended</span>
                                        </div>
                                        <div className="p-4 bg-[#2a261a] rounded-lg flex flex-col items-center text-center gap-2">
                                            <span className="material-symbols-outlined text-primary text-3xl">water_drop</span>
                                            <span className="text-white font-semibold text-sm">Hydration</span>
                                            <span className="text-xs text-gray-400">Reusable water bottle</span>
                                        </div>
                                        <div className="p-4 bg-[#2a261a] rounded-lg flex flex-col items-center text-center gap-2">
                                            <span className="material-symbols-outlined text-primary text-3xl">light_mode</span>
                                            <span className="text-white font-semibold text-sm">Sun Protection</span>
                                            <span className="text-xs text-gray-400">Hat, sunglasses, SPF</span>
                                        </div>
                                    </div>
                                    <div className="mt-4 p-4 rounded-lg bg-blue-900/20 border border-blue-900/30 flex gap-3">
                                        <span className="material-symbols-outlined text-blue-400">info</span>
                                        <p className="text-sm text-blue-200">Binoculars are provided by our luxury jeep service, but bringing your own personal pair is always a good idea.</p>
                                    </div>
                                </InformationAccordion>
                            </div>

                            {/* Accordion 6: Park Rules */}
                            <div className="scroll-mt-24" id="rules">
                                <InformationAccordion icon="gavel" title="Park Rules">
                                    <ul className="grid md:grid-cols-2 gap-4">
                                        <li className="flex gap-4 items-start p-3 hover:bg-white/5 rounded-lg transition-colors">
                                            <span className="material-symbols-outlined text-red-500 mt-1">no_food</span>
                                            <div>
                                                <strong className="block text-white text-sm">Do Not Feed Animals</strong>
                                                <span className="text-xs text-gray-400">Strictly prohibited to maintain natural behaviors.</span>
                                            </div>
                                        </li>
                                        <li className="flex gap-4 items-start p-3 hover:bg-white/5 rounded-lg transition-colors">
                                            <span className="material-symbols-outlined text-red-500 mt-1">directions_car</span>
                                            <div>
                                                <strong className="block text-white text-sm">Stay in Vehicle</strong>
                                                <span className="text-xs text-gray-400">Disembarking is only allowed at designated spots.</span>
                                            </div>
                                        </li>
                                        <li className="flex gap-4 items-start p-3 hover:bg-white/5 rounded-lg transition-colors">
                                            <span className="material-symbols-outlined text-red-500 mt-1">volume_off</span>
                                            <div>
                                                <strong className="block text-white text-sm">Keep Noise Low</strong>
                                                <span className="text-xs text-gray-400">Silence increases your chances of sightings.</span>
                                            </div>
                                        </li>
                                        <li className="flex gap-4 items-start p-3 hover:bg-white/5 rounded-lg transition-colors">
                                            <span className="material-symbols-outlined text-red-500 mt-1">flash_off</span>
                                            <div>
                                                <strong className="block text-white text-sm">No Flash Photography</strong>
                                                <span className="text-xs text-gray-400">Flash disturbs animals and is not allowed.</span>
                                            </div>
                                        </li>
                                    </ul>
                                </InformationAccordion>
                            </div>

                            {/* Accordion 7: Health & Safety */}
                            <InformationAccordion icon="medical_services" title="Health & Safety">
                                <p className="text-sm text-gray-300 mb-4">Your safety is our priority. Our guides are trained in first aid and emergency protocols.</p>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="bg-[#2a261a] p-4 rounded-lg border border-[#383429]">
                                        <h5 className="text-white text-sm font-bold mb-2">Nearest Hospital</h5>
                                        <p className="text-xs text-gray-400">Debarawewa Base Hospital</p>
                                        <p className="text-xs text-gray-400 mt-1">Approx. 45 mins from park entrance</p>
                                    </div>
                                    <div className="bg-[#2a261a] p-4 rounded-lg border border-[#383429]">
                                        <h5 className="text-white text-sm font-bold mb-2">Emergency Contacts</h5>
                                        <div className="flex flex-col gap-1">
                                            <div className="flex justify-between text-xs text-gray-400">
                                                <span>Tourist Police</span>
                                                <span className="text-white">1912</span>
                                            </div>
                                            <div className="flex justify-between text-xs text-gray-400">
                                                <span>Ambulance</span>
                                                <span className="text-white">1990</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </InformationAccordion>

                            {/* Accordion 8: Mobile Network Info */}
                            <InformationAccordion icon="signal_cellular_alt" title="Mobile Network Info">
                                <p className="text-sm text-gray-300 mb-4">Coverage within the park is sporadic. We recommend embracing the disconnection, but if you need to stay connected:</p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="flex-1 min-w-[140px] bg-[#2a261a] p-3 rounded-lg border border-[#383429] flex items-center justify-between">
                                        <span className="text-sm font-bold text-white">Dialog</span>
                                        <div className="flex text-primary text-[10px] gap-0.5">
                                            <span className="material-symbols-outlined text-sm">signal_cellular_alt</span>
                                            <span className="self-center">Good</span>
                                        </div>
                                    </div>
                                    <div className="flex-1 min-w-[140px] bg-[#2a261a] p-3 rounded-lg border border-[#383429] flex items-center justify-between">
                                        <span className="text-sm font-bold text-white">Mobitel</span>
                                        <div className="flex text-yellow-500/70 text-[10px] gap-0.5">
                                            <span className="material-symbols-outlined text-sm">signal_cellular_3_bar</span>
                                            <span className="self-center">Fair</span>
                                        </div>
                                    </div>
                                    <div className="flex-1 min-w-[140px] bg-[#2a261a] p-3 rounded-lg border border-[#383429] flex items-center justify-between">
                                        <span className="text-sm font-bold text-white">Hutch/Airtel</span>
                                        <div className="flex text-red-500/70 text-[10px] gap-0.5">
                                            <span className="material-symbols-outlined text-sm">signal_cellular_1_bar</span>
                                            <span className="self-center">Poor</span>
                                        </div>
                                    </div>
                                </div>
                            </InformationAccordion>

                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <section className="relative py-20 px-4">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDufO8D_NIv_GopXAhmrkgQau7tm5XKRJeZ-wUt7FkmoUSl1btiPE5qrFBG1KgkB1k9WjFDqXgJx_kvA9r-XCi1waYzwrHij2LUKXVG549dkgPeMm2uf_APLLVsV4Ovj0ehKqB2e_APGJ4pVCIGnZmlsoQV5LSEApvxWwh0iEHhOiEomkKPRN_iJKVLxA5VzJg5i1-DHeJK-d7PsrrI3v3dRJZcGBOR3rZzYLWUJbbVhCTCI5fBuWP_3-3_6WqlsIRWZUciuwF8Tfji"
                        alt="Wide shot of a safari jeep driving through Yala park at sunset"
                        fill
                        className="object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-background-dark via-background-dark/80 to-background-dark"></div>
                </div>
                <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col gap-8 items-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">Ready for your adventure?</h2>
                    <p className="text-gray-300 text-lg max-w-2xl">
                        Experience the raw beauty of Yala with our premium guided safaris. Slots fill up fast during peak season.
                    </p>
                    <Link href="/packages" className="flex min-w-[200px] cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-primary hover:bg-yellow-500 transition-all text-[#171611] text-base font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40">
                        Book Your Safari
                    </Link>
                </div>
            </section>
        </div>
    );
}

// Components

function InformationAccordion({
    icon,
    title,
    children,
    defaultOpen = false
}: {
    icon: string;
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean
}) {
    return (
        <details className="group bg-surface-dark border border-[#383429] rounded-xl overflow-hidden transition-all duration-300 open:border-primary/30" open={defaultOpen}>
            <summary className="flex cursor-pointer items-center justify-between p-6 hover:bg-[#2a261a] transition-colors select-none">
                <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <span className="material-symbols-outlined">{icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{title}</h3>
                </div>
                <span className="material-symbols-outlined text-gray-400 transition-transform duration-300 group-open:rotate-180 group-open:text-primary">expand_more</span>
            </summary>
            <div className="px-6 pb-6 pt-2 border-t border-[#383429]/50">
                {children}
            </div>
        </details>
    );
}
