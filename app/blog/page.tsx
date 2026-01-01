import blogHero from '@/public/blog_hero.png'
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Yala National Park Blog – Latest Sightings, Stories & Guides",
    description: "Dive deeper into the wild with Yala's latest discoveries, stories, and guides. Expert insights for the modern explorer.",
};

export default function BlogPage() {
    return (
        <div className="bg-background-dark text-white font-display antialiased overflow-x-hidden">

            {/* Hero Section */}
            <section className="relative min-h-[600px] flex items-center justify-center px-4 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#181611] via-[#181611]/60 to-transparent z-10" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#181611]/30 to-transparent z-10" />
                    <Image
                        src={blogHero}
                        alt="A cinematic close-up of a leopard resting on a tree branch in Yala National Park at dusk"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="relative z-20 max-w-[960px] text-center flex flex-col items-center gap-6">
                    <span className="px-3 py-1 bg-primary/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider rounded-full backdrop-blur-sm">
                        The Official Blog
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-white drop-shadow-lg">
                        Dive Deeper into the Wild
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl">
                        Your source for Yala’s latest discoveries, stories & guides.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-4">
                        <button className="bg-primary text-[#181611] px-8 py-3 rounded-lg text-base font-bold hover:bg-[#d99a1e] transition-colors">
                            Start Exploring
                        </button>
                        <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-3 rounded-lg text-base font-medium hover:bg-white/20 transition-colors">
                            View Sightings
                        </button>
                    </div>
                </div>
            </section>

            {/* Intro Content */}
            <section className="py-16 px-6 bg-background-dark">
                <div className="max-w-[800px] mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6 text-primary">Expert Insights for the Modern Explorer</h2>
                    <p className="text-lg text-text-muted leading-relaxed font-sans text-gray-400">
                        Discover the secrets of Yala National Park through expert-written content. From understanding animal behavior to mastering safari photography, our guides are designed to enhance your journey into the wild. Whether you are a seasoned tracker or a first-time visitor, knowledge transforms a simple sighting into a lifelong memory.
                    </p>
                </div>
            </section>

            {/* Category Grid */}
            <section className="py-8 px-6 bg-background-dark">
                <div className="max-w-[1200px] mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                        {['Sightings', 'Species', 'Photography', 'Conservation', 'Stories', 'Planning', 'Culture'].map((category, index) => (
                            <div key={index} className="group flex flex-col items-center justify-center p-6 bg-surface-dark border border-border-dark rounded-xl hover:border-primary/50 hover:bg-surface-dark/80 transition-all cursor-pointer">
                                <span className="material-symbols-outlined text-primary text-3xl mb-3 group-hover:scale-110 transition-transform">
                                    {['visibility', 'pets', 'photo_camera', 'nature_people', 'auto_stories', 'map', 'temple_buddhist'][index]}
                                </span>
                                <span className="text-sm font-bold text-center text-white">{category}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured & Sightings Split */}
            <section className="py-12 px-6 bg-background-dark">
                <div className="max-w-[1200px] mx-auto grid lg:grid-cols-3 gap-8">

                    {/* Featured Posts (Left 2/3) */}
                    <div className="lg:col-span-2 flex flex-col gap-8">
                        <div className="flex items-center justify-between border-b border-border-dark pb-4">
                            <h3 className="text-2xl font-bold text-white">Featured Stories</h3>
                            <a href="#" className="text-primary text-sm font-bold hover:underline">View All</a>
                        </div>

                        {/* Large Featured Card 1 */}
                        <article className="group relative flex flex-col md:flex-row bg-surface-dark border border-border-dark rounded-xl overflow-hidden hover:shadow-lg hover:shadow-primary/5 transition-all">
                            <div className="md:w-2/5 h-64 md:h-auto overflow-hidden relative">
                                <Image
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgYiNHe38tflIypPz4SRczSuXn82XFDPEbH62ljGieQ63r_Ovx1N3Wl4Ak0Hyhcni6_zwqNIPTw0nAU1u1U7jyr7Agc09DwtErasgpjfM-sVp6fAOCpXLjIFmIf9VUhNXDSi3OjB_4tYf2-9RghxvA3vGbKLMvIivecPdDci-215Gv8TTVTQkrMZQoiijX8QL2KHOtfs-vJ2auZZskFn1Pyeso4jL7iCJMcKI8Oi72OGfgkiYF8ayCSJAsP4G9bD_6LqWZaTB_3AC5"
                                    alt="Elephant herd crossing a dirt road in Yala"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="flex-1 p-6 flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-xs font-bold text-primary uppercase tracking-wider">Conservation</span>
                                    <span className="text-xs text-gray-500">Oct 12, 2023</span>
                                </div>
                                <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors text-white">The Return of the Tuskers: A Season to Remember</h2>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-2 font-sans">
                                    Recent months have seen unprecedented sightings of iconic tuskers returning to Block 1. We explore the migratory patterns driving this return.
                                </p>
                                <div className="inline-flex items-center text-primary font-bold text-sm hover:translate-x-1 transition-transform cursor-pointer">
                                    Read Full Story <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                                </div>
                            </div>
                        </article>

                        {/* Large Featured Card 2 */}
                        <article className="group relative flex flex-col md:flex-row bg-surface-dark border border-border-dark rounded-xl overflow-hidden hover:shadow-lg hover:shadow-primary/5 transition-all">
                            <div className="md:w-2/5 h-64 md:h-auto overflow-hidden relative">
                                <Image
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuANdQRV9H8zBySObpxMqsncTk_l_mz1o0IQQpl-RSPLBkUe7RjO-NWqqJfYmE-Dy9TYPOOmIoovynNMZWqS6drh5gjYvFXFO6NJo5QgUOu4iJJ1ygN9g_bA8nHCw4BlthOYLCS-jpsh-VUXzzgTH_Qi7FfvqG4z_agBdNgNDQh-FEciGC93jfSWEKz2P-tDVJPpKnCUhVpohkkP2DreX78BZBXWO7xpR9qXdh5oieGhM1kFZqXCsbzKToPZI5ZCTGVqDJLfBu21M0-i"
                                    alt="Close up of a green bee-eater bird on a branch"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="flex-1 p-6 flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-xs font-bold text-primary uppercase tracking-wider">Photography</span>
                                    <span className="text-xs text-gray-500">Sep 28, 2023</span>
                                </div>
                                <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors text-white">Mastering Golden Hour: Capturing Yala's Birds</h2>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-2 font-sans">
                                    The light in Yala transforms dramatically between 5 PM and 6 PM. Learn how to adjust your ISO and shutter speed for perfect avian portraits.
                                </p>
                                <div className="inline-flex items-center text-primary font-bold text-sm hover:translate-x-1 transition-transform cursor-pointer">
                                    Read Full Guide <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                                </div>
                            </div>
                        </article>
                    </div>

                    {/* Latest Sightings Feed (Right 1/3) */}
                    <div className="lg:col-span-1 bg-surface-dark border border-border-dark rounded-xl p-6 h-fit sticky top-24">
                        <div className="flex items-center gap-2 mb-6 border-b border-border-dark pb-4">
                            <span className="material-symbols-outlined text-primary animate-pulse">emergency_home</span>
                            <h3 className="text-lg font-bold text-white">Live Sightings Log</h3>
                        </div>
                        <div className="relative pl-4 border-l border-border-dark space-y-8">
                            <div className="relative">
                                <div className="absolute -left-[21px] top-1 h-3 w-3 rounded-full bg-primary ring-4 ring-background-dark"></div>
                                <span className="text-xs font-bold text-primary mb-1 block">Today, 06:45 AM</span>
                                <h4 className="text-sm font-bold text-white mb-1">Leopard at Kotabendi Rock</h4>
                                <p className="text-xs text-gray-500 font-sans">Male leopard 'Lucas' spotted resting on the lower ridge. Excellent visibility.</p>
                            </div>
                            <div className="relative">
                                <div className="absolute -left-[21px] top-1 h-3 w-3 rounded-full bg-[#544b3b] ring-4 ring-background-dark"></div>
                                <span className="text-xs font-bold text-gray-500 mb-1 block">Yesterday, 04:30 PM</span>
                                <h4 className="text-sm font-bold text-white mb-1">Sloth Bear near Buttuwa</h4>
                                <p className="text-xs text-gray-500 font-sans">Mother and cub foraging for termites near the main tank bund.</p>
                            </div>
                            <div className="relative">
                                <div className="absolute -left-[21px] top-1 h-3 w-3 rounded-full bg-[#544b3b] ring-4 ring-background-dark"></div>
                                <span className="text-xs font-bold text-gray-500 mb-1 block">Oct 14, 09:15 AM</span>
                                <h4 className="text-sm font-bold text-white mb-1">Tusker 'Gemunu'</h4>
                                <p className="text-xs text-gray-500 font-sans">Sighted crossing the main road near the entrance gate. Traffic stopped briefly.</p>
                            </div>
                        </div>
                        <button className="w-full mt-6 py-2 border border-border-dark text-gray-400 text-sm rounded hover:bg-white/5 hover:text-white transition-colors">
                            View Full Log
                        </button>
                    </div>
                </div>
            </section>

            {/* Wildlife Deep Dive Grid */}
            <section className="py-12 px-6 bg-background-dark">
                <div className="max-w-[1200px] mx-auto">
                    <h3 className="text-2xl font-bold mb-8 border-l-4 border-primary pl-4 text-white">Wildlife Deep-Dives</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { name: "The Sri Lankan Leopard", desc: "The apex predator of the island. Understand their territories and behavior.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDePn-sqjTmFgAEznnzNrCBl6nEi8UB9xsgud7EHFVT3m-qEBPRqgRd9cM-oFlgpPMLM4SigMAdwbk6Aq6wsM8XV6E8iq2H0yh5V3qbfx_aejmyYvxtQOSGV6u0pP_iQoeeWFE_B0umNBRgZ_anzX-Iqbf5sVviWjkTRjytmKc3znTAM2cbutvUmVEk2EEw96gNTS7h_dQyRFBENDmdeXDS9o20drznPPS0S8qfYpgodATyQk3rLHMefy1y2J24y06TG9XuJFIgLpP5" },
                            { name: "Asian Elephants", desc: "Nomads of the scrub jungle. Tracking the gentle giants of Yala.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPEJTspNgjJgaIDmbz6S7lCx4gKQrql57drRlCCnA5MxIlP9ZqZwhTvWfBAqTMJnGqPEJGWJW2dszmVBBQ-Puc6-6EG0pOYQ0Yx5L5xpaGOvpFGE8SauAGzPgSucK1xYwtygDCy_NaVm0rhlOpkUlZS-5iNUxSB4VkU2WWVFoWKSY7DcE4iCdgLeaUYEWHds3eeoUiTbklYvsBwgkNGum52MBTrBLR1L58LujDV0nDlSRklcxFldKZy2uDa_cpufEYApsFCW_mNSSh" },
                            { name: "The Elusive Sloth Bear", desc: "Why they are harder to spot than leopards and where to look.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAb8K_1nZ85AAYkwUyERGDBtSqRQGPNU1GYW2WyQwzPhMUIptOymzPP_EtQm3p3T_WixahYQrRDn7CYBajVSUfRtxLOQ6K03KKMuAyS1paxS--c9g7w4FQfa-kJnRpDbtbOJeNcvzbEVWqY8FACC7ipDA753snHEzd24o80YzEte9lfG-Dipaidn43GP5aYkfz-irOvYUCI-rJgb6P0PAm7Zrf0U9Rp0e81j71kv_GLpIF7BSupeMoiG3h6BqFv6l2iQcqtQXMgq_0O" },
                            { name: "Reptiles & Amphibians", desc: "From mugger crocodiles to land monitors, the ancient rulers of the water.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtZzR9r0y7x7KFRcSZY7r92DghKp7sFKoInrzXOFkL7R3SCZR4SczfhamAZDiZnvtQHOv3g7w9fsd2JJ9tzmZL65x8eNmFu8-KU0E_x7k4v11Y4cvG4T6ad5w85345-gs1J4k4LVm7MTesZzZf1ZqjDiYZ3HZwjp2CBIPM5y4IW6rjy4hSywg2YdITw9Jq8uPje9IRw-zXR-0nlEZSARpKw7xI9W3H1A2C6BSO472SysuDUkpSxYIMvhCQN8bMWHGSvHpjNp2ajpzX" }
                        ].map((item, index) => (
                            <div key={index} className="group cursor-pointer">
                                <div className="overflow-hidden rounded-lg mb-4 aspect-[4/3] relative">
                                    <Image
                                        src={item.img}
                                        alt={item.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                                <h4 className="text-lg font-bold group-hover:text-primary transition-colors text-white">{item.name}</h4>
                                <p className="text-sm text-gray-500 font-sans mt-2">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Photography Section (Split) */}
            <section className="py-16 px-6 bg-[#221c10]">
                <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2 relative">
                        <div className="absolute -inset-4 bg-primary/20 rounded-xl blur-lg"></div>
                        <div className="relative rounded-lg shadow-2xl w-full h-80 overflow-hidden">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAL0ZKM1RMadjYd_wdsQmXWl0X2J1XzZYtnuJYNqyGzmdNioqwbuKzuCu2YQnknQKYwiM0LGU1ev8QPNP2bAm5BVH1sOdXvpHYh1LKtpI26oqe5EWh1B8IfiuyOyWuEX5RcgfTrH78ODJRhlthdtW4tYmcYCWMS_iGsZLVphuwyJCGHU8U-JLUISjR9pQIw_ggUNFtXQ9YqJQAWoge9CurfVXQl_5VMNmLyLj1GCQx0367HAo2Kz-_Sv_Dt9XKDk7tHHUTOgry-S5gs"
                                alt="Photographer in safari jeep"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Photography Guides</span>
                        <h2 className="text-4xl font-bold text-white mb-6">Capture the Perfect Moment</h2>
                        <p className="text-gray-400 font-sans mb-6 text-lg leading-relaxed">
                            Yala presents unique challenges for photographers: high contrast lighting, thick brush, and fast-moving subjects. Our guides cover essential camera settings, ethical wildlife photography practices, and recommended gear for the tropical environment.
                        </p>
                        <ul className="space-y-3 mb-8">
                            {['Best Lenses for Yala\'s Terrain', 'Understanding Animal Body Language', 'Optimizing for Low Light Conditions'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-white font-medium">
                                    <span className="material-symbols-outlined text-primary">check_circle</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <button className="bg-primary hover:bg-[#d99a1e] text-[#181611] px-6 py-3 rounded-lg font-bold transition-colors flex items-center gap-2">
                            View All Photography Guides
                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-16 px-6 bg-[#27231c]">
                <div className="max-w-[600px] mx-auto text-center">
                    <span className="material-symbols-outlined text-primary text-4xl mb-4">mail</span>
                    <h3 className="text-2xl font-bold mb-3 text-white">Join the Yala Community</h3>
                    <p className="text-gray-400 font-sans mb-8">
                        Get the latest sighting reports, conservation news, and exclusive safari offers delivered to your inbox.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-3">
                        <input className="flex-1 bg-surface-dark border border-border-dark rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:ring-1 focus:ring-primary focus:border-primary outline-none" placeholder="Your email address" type="email" />
                        <button className="bg-primary hover:bg-[#d99a1e] text-[#181611] font-bold px-6 py-3 rounded-lg transition-colors whitespace-nowrap" type="button">
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}
