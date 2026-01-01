import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import wildlifeHero from "@/public/wildlife_hero.png";

export const metadata: Metadata = {
    title: "Wildlife Guide - The Big Five & Beyond | Leopard Sri Lanka",
    description: "Discover the exotic wildlife of Yala National Park. Home to leopards, elephants, sloth bears, and diverse birdlife.",
};

export default function WildlifePage() {
    return (
        <div className="bg-background-light dark:bg-background-dark text-[#171611] dark:text-white font-display overflow-x-hidden antialiased">

            {/* Hero Section */}
            <div className="relative w-full">
                <div className="flex min-h-[600px] w-full flex-col items-center justify-center gap-6 relative">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-gradient-to-b from-[#171611]/30 via-transparent to-[#171611] z-10" />
                        <Image
                            src={wildlifeHero}
                            alt="Close up dramatic portrait of a leopard face in shadows with golden eyes"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="relative z-20 flex flex-col gap-4 text-center max-w-[800px] px-4">
                        <span className="text-primary text-sm font-bold uppercase tracking-widest">Wildlife of Yala</span>
                        <h1 className="text-white drop-shadow-lg text-5xl font-black leading-tight tracking-tight md:text-7xl">
                            The Big Five & Beyond
                        </h1>
                        <h2 className="text-gray-200 drop-shadow-md text-lg font-medium leading-normal md:text-xl max-w-2xl mx-auto">
                            Journey through Sri Lanka's untamed beauty, where ancient forests meet the Indian Ocean, home to one of the world's highest leopard densities.
                        </h2>
                    </div>
                </div>
            </div>

            {/* Sticky Category Navigation (Chips) */}
            <div className="sticky top-16 z-40 w-full border-b border-border-dark bg-[#171611]/95 backdrop-blur shadow-lg">
                <div className="flex justify-center py-4">
                    <div className="flex gap-3 px-4 overflow-x-auto no-scrollbar max-w-[1200px]">
                        <a href="#leopard" className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary px-5 cursor-pointer hover:bg-opacity-90 transition-all">
                            <p className="text-[#171611] text-sm font-bold leading-normal">Leopards</p>
                        </a>
                        <a href="#elephant" className="group flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-surface-dark border border-border-dark hover:border-primary/50 px-5 cursor-pointer transition-all">
                            <p className="text-gray-300 group-hover:text-white text-sm font-medium leading-normal">Elephants</p>
                        </a>
                        <a href="#bear" className="group flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-surface-dark border border-border-dark hover:border-primary/50 px-5 cursor-pointer transition-all">
                            <p className="text-gray-300 group-hover:text-white text-sm font-medium leading-normal">Sloth Bears</p>
                        </a>
                        <a href="#crocodile" className="group flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-surface-dark border border-border-dark hover:border-primary/50 px-5 cursor-pointer transition-all">
                            <p className="text-gray-300 group-hover:text-white text-sm font-medium leading-normal">Crocodiles</p>
                        </a>
                        <a href="#birds" className="group flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-surface-dark border border-border-dark hover:border-primary/50 px-5 cursor-pointer transition-all">
                            <p className="text-gray-300 group-hover:text-white text-sm font-medium leading-normal">Birdlife</p>
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Content Container */}
            <div className="flex flex-1 justify-center py-12 md:py-20 px-4 md:px-10">
                <div className="flex flex-col max-w-[1024px] gap-20 md:gap-32 w-full">

                    {/* Section 1: Leopard */}
                    <section id="leopard" className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16 scroll-mt-32">
                        <div className="flex flex-col gap-6 flex-1 text-left">
                            <div className="flex items-center gap-2 text-primary">
                                <span className="material-symbols-outlined text-xl">visibility</span>
                                <span className="text-xs font-bold uppercase tracking-wider">Most Sought After</span>
                            </div>
                            <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight tracking-tight">The Sri Lankan Leopard</h2>
                            <p className="text-[#b7b19e] text-base md:text-lg font-normal leading-relaxed">
                                The apex predator of the island, <em>Panthera pardus kotiya</em>. Yala National Park boasts one of the highest leopard densities in the world, offering a unique opportunity to see these elusive cats stalking through the scrub jungle or resting on rocky outcrops.
                            </p>
                            <div className="flex items-center gap-4 mt-2 p-4 rounded-lg bg-surface-dark border border-border-dark w-fit">
                                <div className="flex items-center justify-center size-10 rounded-full bg-primary/10 text-primary">
                                    <span className="material-symbols-outlined">calendar_month</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[11px] uppercase tracking-widest text-gray-400">Best Viewing</span>
                                    <span className="text-white font-bold">February - July</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 w-full">
                            <div className="aspect-[4/3] md:aspect-[3/4] lg:aspect-square w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-800 relative group">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                                <Image
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmYoDDwviriZuUteO2Bu5sGqGR1Sfd16smUEp0wu7hqp2jsPcmMKVC3KNZumzB9XXkcS7-JJAwCjddt_-nf6EUQJOslWXiBVwITtK1_igjg0GKzOLVPcnRgzI8w1tnE48nbGYdqffDPfHTZJNDEfNMwXq5oBNoACXk6PCveR3zZYVgSe6GlZICqb7W8Sb0aKVvzAeN6NFb8csHYb6OU8cC4oL2BffIc4JvrVv-9D39l3mGKu_FAnznFjgbHQa8KGPadtFCDxKPh6q0"
                                    alt="A leopard resting on a tree branch looking majestic"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Section 2: Elephant */}
                    <section id="elephant" className="flex flex-col md:flex-row items-center gap-8 md:gap-16 scroll-mt-32">
                        <div className="flex-1 w-full">
                            <div className="aspect-[4/3] md:aspect-[3/4] lg:aspect-square w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-800 relative group">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                                <Image
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPA-6KIw17bZkgZZrkk2X3Fi-uErZkPaPtiJCEW7ZhWBQvniFI50FC9jPZlLfy55SjiFP4tMU4xHfNrXL5x4jT2OEoWscGCSz6GEk6R_5h1RhRIbvbh2li0aWheBh1N8HLo-_3_mMNuvOD_05WUagAUy9oTNxebvfTOaXbHY_7wGA3z1-fXwtCxHvecnyXIVE5N_dyxX-f0Lioh2ADVuqTp41nQBMTuXrileUlVcTiAUw9YjzmdT3jtMg4pEZw68R1UfNQMYESR-NN"
                                    alt="Large elephant walking on a dirt road in national park"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 flex-1 text-left md:text-right md:items-end">
                            <div className="flex items-center gap-2 text-primary">
                                <span className="text-xs font-bold uppercase tracking-wider">Gentle Giants</span>
                                <span className="material-symbols-outlined text-xl">nature</span>
                            </div>
                            <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight tracking-tight">The Asian Elephant</h2>
                            <p className="text-[#b7b19e] text-base md:text-lg font-normal leading-relaxed">
                                Majestic giants roaming the dry zones. Witness the gathering of herds at waterholes as they bathe, play, and protect their young. These intelligent creatures are the heart of the Sri Lankan wilderness, creating paths that other animals follow.
                            </p>
                            <div className="flex items-center flex-row-reverse gap-4 mt-2 p-4 rounded-lg bg-surface-dark border border-border-dark w-fit text-right">
                                <div className="flex items-center justify-center size-10 rounded-full bg-primary/10 text-primary">
                                    <span className="material-symbols-outlined">schedule</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[11px] uppercase tracking-widest text-gray-400">Best Viewing</span>
                                    <span className="text-white font-bold">Year-round</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: Sloth Bear */}
                    <section id="bear" className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16 scroll-mt-32">
                        <div className="flex flex-col gap-6 flex-1 text-left">
                            <div className="flex items-center gap-2 text-primary">
                                <span className="material-symbols-outlined text-xl">forest</span>
                                <span className="text-xs font-bold uppercase tracking-wider">Rare & Elusive</span>
                            </div>
                            <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight tracking-tight">The Sloth Bear</h2>
                            <p className="text-[#b7b19e] text-base md:text-lg font-normal leading-relaxed">
                                With their shaggy black coats and long claws, Sloth Bears are a unique sight. They are often found feasting on Palu berries during the fruit season. Though generally shy, seeing a mother with cubs on her back is a sight to behold.
                            </p>
                            <div className="flex items-center gap-4 mt-2 p-4 rounded-lg bg-surface-dark border border-border-dark w-fit">
                                <div className="flex items-center justify-center size-10 rounded-full bg-primary/10 text-primary">
                                    <span className="material-symbols-outlined">nutrition</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[11px] uppercase tracking-widest text-gray-400">Best Viewing</span>
                                    <span className="text-white font-bold">May - June (Palu Season)</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 w-full">
                            <div className="aspect-[4/3] md:aspect-[3/4] lg:aspect-square w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-800 relative group">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                                <Image
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCS0zCTusu5fR5W1Ffs1P7lPf7PNDiV8lnF3lyzBlwMxVitLArpH0Xb8_QBHHhbFcbXWNPXIJT6fm9TBm4pd1msL32zHfcmfoZ8A5hODZh940vyR5_fuxacDIb1zwFculvsAGW2gwTmT-d37fimzPs3vGK7WK9Glc6jnQez9YPlEYaJw-9oe3Q9YjgTW6EgDLjN4ITJBZiINSz5Bwgkh-tCahjDNzMOlS9o0_Ql0FcvvXxJzt35Z4jiojAzOqoAi0zaMhxla3Aoia7p"
                                    alt="A black sloth bear walking in grassy field"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Section 4: Crocodile */}
                    <section id="crocodile" className="flex flex-col md:flex-row items-center gap-8 md:gap-16 scroll-mt-32">
                        <div className="flex-1 w-full">
                            <div className="aspect-[4/3] md:aspect-[3/4] lg:aspect-square w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-800 relative group">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                                <Image
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKJcVr-6MhRgYXSsrhvoM4Pt4LkPFf0EmietvRqMRArfu5q2xVB8nAAJVOM91aHgj4EDwPWEZMpuTB7LeBpNkiMCpsj4fch262F2xr4C0e8bYQfh3BVpLTNGhgL2TTlIwCiQ1nN98oFrM89NsdsYofQ3MacLtnU4mqqxJ_v-O2-uJG82cWAme_MTL6c5BY1GVi5DpIluU0xYeZ6_ZAfiF9T4CrWFVfZuEdvK42NX_LMqGgvzmcNA9WUoUuDHXqPXqC8Wpxd3LkIEYA"
                                    alt="A crocodile basking in the sun near water"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 flex-1 text-left md:text-right md:items-end">
                            <div className="flex items-center gap-2 text-primary">
                                <span className="text-xs font-bold uppercase tracking-wider">Ancient Reptiles</span>
                                <span className="material-symbols-outlined text-xl">water_drop</span>
                            </div>
                            <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight tracking-tight">Mugger Crocodiles</h2>
                            <p className="text-[#b7b19e] text-base md:text-lg font-normal leading-relaxed">
                                These prehistoric predators can be seen basking on the muddy banks of the park's lagoons. While they seem lethargic in the sun, they are lightning-fast ambush predators in the water, essential to the aquatic ecosystem.
                            </p>
                            <div className="flex items-center flex-row-reverse gap-4 mt-2 p-4 rounded-lg bg-surface-dark border border-border-dark w-fit text-right">
                                <div className="flex items-center justify-center size-10 rounded-full bg-primary/10 text-primary">
                                    <span className="material-symbols-outlined">wb_sunny</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[11px] uppercase tracking-widest text-gray-400">Best Viewing</span>
                                    <span className="text-white font-bold">Dry Season</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 5: Birdlife */}
                    <section id="birds" className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16 scroll-mt-32">
                        <div className="flex flex-col gap-6 flex-1 text-left">
                            <div className="flex items-center gap-2 text-primary">
                                <span className="material-symbols-outlined text-xl">flight</span>
                                <span className="text-xs font-bold uppercase tracking-wider">Avian Paradise</span>
                            </div>
                            <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight tracking-tight">Exotic Birdlife</h2>
                            <p className="text-[#b7b19e] text-base md:text-lg font-normal leading-relaxed">
                                A paradise for ornithologists, Sri Lanka hosts over 400 species. From the dancing Peacocks and the endemic Junglefowl to migratory flamingos and eagles, the skies and trees are alive with color and song.
                            </p>
                            <div className="flex items-center gap-4 mt-2 p-4 rounded-lg bg-surface-dark border border-border-dark w-fit">
                                <div className="flex items-center justify-center size-10 rounded-full bg-primary/10 text-primary">
                                    <span className="material-symbols-outlined">flutter_dash</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[11px] uppercase tracking-widest text-gray-400">Best Viewing</span>
                                    <span className="text-white font-bold">Nov - April (Migratory)</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 w-full">
                            <div className="aspect-[4/3] md:aspect-[3/4] lg:aspect-square w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-800 relative group">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                                <Image
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3kbaOXUoAmC0y2Ukh-xcC_EM8ab6hUV1umKqwMO0NTsfIsLvhC1ootZ7vkfguLe4KibIrSCz2baLjYWuEcmA7XucJrZBh_iDTxi3Jc8P123EjVFDrc_Zy4y5F_gevS7HusfLyTlNSz_L1ACDtnd7MC33fZDdMTUbxbs3NlFWuD1CKOLwpOgjLlx4nGuZUPuASYeKkk9H2I2n0AJzU3kmwzIGdsl7dA1M25c4Zvzr5duoNeIfcnf8gIboGUOb9E3bt2cKRBqYADg8T"
                                    alt="Colorful peacock displaying feathers"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                        </div>
                    </section>

                </div>
            </div>

            {/* Call to Action Footer Area */}
            <div className="w-full bg-surface-dark border-t border-border-dark py-20 px-6">
                <div className="flex flex-col items-center justify-center text-center gap-6 max-w-2xl mx-auto">
                    <h3 className="text-white text-3xl font-bold">Ready to witness the wild?</h3>
                    <p className="text-[#b7b19e] text-lg">Book your premium safari experience today and see these magnificent creatures in their natural habitat.</p>
                    <Link href="/packages" className="flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary hover:bg-yellow-500 transition-colors text-[#171611] text-base font-bold leading-normal tracking-[0.015em] mt-4">
                        Book Your Safari
                    </Link>
                </div>
            </div>
        </div>
    );
}
