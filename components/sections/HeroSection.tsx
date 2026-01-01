import Image from "next/image";
import Button from "../ui/Button";

export default function HeroSection() {
    return (
        <div className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-16">
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#181611] z-10" />
                <Image
                    alt="Leopard close up"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxR-itjoyIm8_mh-9lX06oiCevJW5wv51z7daTUq6C2jVUkSMkUxZW3njMRCX0e90MTJsGJ0r5i3UgR8sNLSAwgTuIwcp693JHIskE79DOhvXjKpw315qPqss6l3b1y9tYstdQmwcHL0TXeMWDR2jfdlRlts5xtyEF2q0TGKUvzXBZ7VuxTI1Kt_GDCZQeCfc4ehlzPh-ukh_BqFDADKBu7VxON2QzKG_wg5Dlu7p1sSssktYYLq6__Yl4s4BzEpJGjsduj3RFpRh4"
                    fill
                    className="object-cover object-top"
                    priority
                />
            </div>


            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center gap-6 mt-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-2">
                    <span className="material-symbols-outlined text-primary text-sm">
                        workspace_premium
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-200">
                        Premium Wildlife Tours
                    </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight max-w-4xl drop-shadow-2xl">
                    Experience the Wild <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">
                        Like Never Before
                    </span>
                </h1>

                {/* Subheading */}
                <p className="text-lg md:text-xl text-gray-200 max-w-2xl font-medium drop-shadow-md">
                    Luxury Leopard Safaris in Sri Lanka. Guided, ethical, and unforgettable
                    encounters in the heart of the jungle.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto">
                    <Button variant="primary" size="lg" icon="arrow_forward">
                        Book Your Safari
                    </Button>
                    <Button variant="secondary" size="lg">
                        View Packages
                    </Button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce text-gray-400 flex flex-col items-center gap-2">
                <span className="text-xs uppercase tracking-widest opacity-70">
                    Scroll to Explore
                </span>
                <span className="material-symbols-outlined">keyboard_arrow_down</span>
            </div>
        </div>
    );
}
