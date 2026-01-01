import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us - Leopard Sri Lanka",
    description: "Born from a passion for Yala. Experience the untamed beauty of Sri Lanka through expert-guided safaris that respect nature and deliver thrilling wildlife encounters.",
};

export default function AboutPage() {
    return (
        <div className="relative flex flex-col min-h-screen w-full">
            {/* Hero Section */}
            <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        alt="Majestic leopard resting on a tree branch"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNrlY_rcmGFgPweQGRBEKbE3o35aYPHosOorXlO6s4UY5dDwMmuxdZNUe7Vy875iiqPBIqvbaPktgKfw6_Ff0FT16KnoTVRu4BKQ8No1z1-dM2U9o7pdDn2fMYmBn2VpxyRKWUelzUkKkDhVEMg-1XORLGBrb2qZVuRPXUBLSYhhI6iiXSIDdTyF-D9i4pzXmviYk_4UmP9wENTwCZjdyXQa16mRFnO1WM6AwBSIKTxLyQzHdo1R1u6e61QSAXG-D4G_V0hvicjtfH"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-[#181611]" />
                </div>

                <div className="relative z-10 container mx-auto px-4 md:px-10 text-center flex flex-col items-center gap-6 max-w-4xl mt-20">
                    <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs md:text-sm animate-fade-in">
                        Discover The Wild
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight drop-shadow-lg">
                        In Pursuit of the<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">
                            Spotted Prince
                        </span>
                    </h1>
                    <p className="text-gray-200 text-lg md:text-xl font-light max-w-2xl leading-relaxed opacity-90">
                        Experience the untamed beauty of Yala through the eyes of experts who know every shadow of the jungle.
                    </p>
                    <div className="mt-8 flex flex-col md:flex-row gap-4">
                        <button className="bg-primary hover:bg-yellow-400 transition-colors text-background-dark font-bold py-3 px-8 rounded-lg text-sm md:text-base">
                            Start Your Journey
                        </button>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-70">
                    <span className="text-xs text-white/60 uppercase tracking-widest">Scroll</span>
                    <span className="material-symbols-outlined text-white/60">keyboard_arrow_down</span>
                </div>
            </section>

            {/* Main Content Container */}
            <main className="flex-grow container mx-auto px-4 md:px-10 lg:px-20 py-16 space-y-24">
                {/* Story Section */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="space-y-6 order-2 lg:order-1">
                        <div className="w-12 h-1 bg-primary rounded-full mb-4" />
                        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                            Born from a passion for Yala
                        </h2>
                        <div className="space-y-4 text-gray-400 leading-relaxed text-lg">
                            <p>
                                Our journey began over a decade ago with a simple mission: to reveal the secrets of the Sri Lankan wilderness without disturbing its rhythm.
                            </p>
                            <p>
                                Unlike mass tourism operators, we believe in the power of patience and the thrill of the chase. We don't just drive through the park; we track, listen, and wait, allowing the jungle to reveal itself on its own terms.
                            </p>
                        </div>
                        <button className="group flex items-center gap-2 text-primary font-bold mt-4 hover:text-white transition-colors">
                            Read Our History
                            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                        </button>
                    </div>
                    <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden order-1 lg:order-2 group">
                        <Image
                            alt="Vintage style safari jeep driving on a dirt road"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEssQYj9XFNyWLRIqucF4gADttVlJa_bDeknO1XzwxFbMr5iTnwyR5uvFPvAhsSN8qJj9Orr9H9cnm6-AqIIdIw3wmUajl1_7_kP-9zBHd3umR452UYtfInB9TmI-fW_k9MKbO37ZKp9X5v6tOyHM1V4mRa-7KMUIg5ngjDx6BSMijAQGZgHIfkW0YMWveH_HgBDAoTkhlnm9OrlZ1ls4MvGVy8OZm6YiU18cCZfbTLxHTZr6e07FVwiPkqRTbfEhog5oU6OoEtgP5"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent" />
                    </div>
                </section>

                {/* Stats Section */}
                <section className="border-y border-white/10 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
                        <div className="px-4 py-4">
                            <p className="text-5xl font-bold text-primary mb-2">15+</p>
                            <p className="text-white/60 text-sm uppercase tracking-widest font-medium">Years Experience</p>
                        </div>
                        <div className="px-4 py-4">
                            <p className="text-5xl font-bold text-primary mb-2">1,200+</p>
                            <p className="text-white/60 text-sm uppercase tracking-widest font-medium">Safaris Conducted</p>
                        </div>
                        <div className="px-4 py-4">
                            <p className="text-5xl font-bold text-primary mb-2">40+</p>
                            <p className="text-white/60 text-sm uppercase tracking-widest font-medium">Species Protected</p>
                        </div>
                    </div>
                </section>

                {/* Mission & Vision Cards */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Mission */}
                    <div className="bg-surface-dark/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors group">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                            <span className="material-symbols-outlined text-primary group-hover:text-background-dark">flag</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                        <p className="text-gray-400 leading-relaxed">
                            To provide the most authentic, respectful, and thrilling wildlife experiences in Sri Lanka, fostering a deep connection between our guests and the natural world while directly contributing to the conservation of the habitats we explore.
                        </p>
                    </div>
                    {/* Vision */}
                    <div className="bg-surface-dark/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors group">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                            <span className="material-symbols-outlined text-primary group-hover:text-background-dark">visibility</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                        <p className="text-gray-400 leading-relaxed">
                            A future where Sri Lanka's wilderness is cherished and protected, where tourism acts as a primary driver for conservation, and where the leopard remains the majestic king of the Yala jungles for generations to come.
                        </p>
                    </div>
                </section>

                {/* Local Expertise Section */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden group">
                        <Image
                            alt="Safari guide looking through binoculars"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuByZKWVZu4Yrl3ARwETZ7pSqtMC-cJcQG3MG-KRRrCL-yDfuIZaxtkSAVQOBEUXshuHNQa3Ind-YJcaXNjJHJc3ufJR2CZ9yBI4k_7vtQd5LGQHyVLYLCSdwSE6bxH058FJw0agpNNZDeGQpr5xM_Tk8Hy3tHkDQZ4cym27lV6Lbo0Op3QolcYWQmUs8NRCB8BqH67_USRzONXccrr_xNMrEccZoQq3QXwOfl43Gc2eA7uNaKZbB0jQf6cOUxpO9IiEt8BdXWf3r2ue"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent" />
                        {/* Floating Quote Card */}
                        <div className="absolute bottom-6 left-6 right-6 bg-background-dark/90 backdrop-blur p-4 rounded-lg border-l-4 border-primary">
                            <p className="text-white/90 italic text-sm">"The jungle speaks to those who know how to listen. Every broken twig tells a story."</p>
                            <p className="text-primary text-xs font-bold mt-2 uppercase tracking-wide">- Head Tracker, Nimal</p>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="w-12 h-1 bg-primary rounded-full mb-4" />
                        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                            Unmatched Local Expertise
                        </h2>
                        <div className="space-y-4 text-gray-400 leading-relaxed text-lg">
                            <p>
                                Our guides are not just drivers; they are naturalists born and raised near the parks. With decades of experience reading the jungle's signs—from alarm calls of langurs to fresh pugmarks in the sand—they ensure you see what others miss.
                            </p>
                            <p>
                                We pride ourselves on our ethical approach to tracking. We interpret animal behavior to predict movement, positioning our vehicles for the perfect viewing angle without causing distress to the wildlife.
                            </p>
                        </div>
                        <button className="group flex items-center gap-2 text-primary font-bold mt-4 hover:text-white transition-colors">
                            Meet The Team
                            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                        </button>
                    </div>
                </section>
            </main>

            {/* Responsible Tourism Section */}
            <section className="relative py-24 bg-[#1a170d]">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                <div className="container mx-auto px-4 md:px-10 lg:px-20">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-3 block">Conservation First</span>
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Guardians of the Wild</h2>
                        <p className="text-gray-400 text-lg">
                            We are visitors in their home. Our "Responsible Tourism" framework ensures that every safari contributes to the protection of Sri Lanka's precious biodiversity.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {/* Rule 1 */}
                        <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                            <span className="material-symbols-outlined text-4xl text-primary mb-4">no_flash</span>
                            <h4 className="text-xl font-bold text-white mb-2">Silent Observation</h4>
                            <p className="text-sm text-gray-400">We prohibit flash photography and loud noises to prevent stressing the animals.</p>
                        </div>
                        {/* Rule 2 */}
                        <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                            <span className="material-symbols-outlined text-4xl text-primary mb-4">distance</span>
                            <h4 className="text-xl font-bold text-white mb-2">Strict Distance</h4>
                            <p className="text-sm text-gray-400">We maintain a respectful distance, ensuring animals can behave naturally.</p>
                        </div>
                        {/* Rule 3 */}
                        <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                            <span className="material-symbols-outlined text-4xl text-primary mb-4">recycling</span>
                            <h4 className="text-xl font-bold text-white mb-2">Leave No Trace</h4>
                            <p className="text-sm text-gray-400">Our operations are plastic-free, and we ensure the park remains pristine.</p>
                        </div>
                    </div>
                    {/* Conservation Quote */}
                    <div className="relative max-w-4xl mx-auto text-center py-10">
                        <span className="material-symbols-outlined text-6xl text-white/10 absolute top-0 left-0 -translate-x-4 -translate-y-4">format_quote</span>
                        <p className="text-2xl md:text-3xl font-serif italic text-white/90 leading-relaxed">
                            "The true measure of a safari is not just what you see, but how you leave the wilderness once you are gone. We tread lightly so they may roam freely."
                        </p>
                        <span className="material-symbols-outlined text-6xl text-white/10 absolute bottom-0 right-0 translate-x-4 translate-y-4">format_quote</span>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-background-dark border-t border-white/10 py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Answer the Call?</h2>
                    <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                        Join us for an unforgettable journey into the heart of Yala. Spots are limited to ensure an exclusive experience.
                    </p>
                    <button className="bg-primary hover:bg-yellow-400 transition-colors text-background-dark font-bold text-lg py-4 px-10 rounded-lg shadow-[0_0_20px_rgba(236,178,19,0.3)]">
                        Book Your Safari Now
                    </button>
                </div>
            </section>
        </div>
    );
}
