import Image from "next/image";
import Button from "../ui/Button";
import homeHero from '@/public/home_hero.png'
import Link from "next/link";
import { tw, colors } from "@/lib/theme";

export default function HeroSection() {
    return (
        <div className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-16">
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0 z-0">
                <div className={`absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[${colors.backgroundDark}] z-10`} />
                <Image
                    alt="Leopard close up"
                    src={homeHero}
                    fill
                    className="object-cover object-center"
                    priority
                />
            </div>


            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center gap-6 mt-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-2">
                    <span className={`material-symbols-outlined ${tw.textPrimary} text-sm`}>
                        workspace_premium
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-200">
                        Premium Wildlife Tours
                    </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight max-w-4xl drop-shadow-2xl">
                    Experience the Wild <br />
                    <span className={`text-transparent bg-clip-text bg-gradient-to-r from-[#ecb213] to-yellow-200`}>
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
                    <Link href='/packages' className="w-full sm:w-auto">
                        <Button variant="primary" size="lg" icon="arrow_forward" className="w-full sm:w-auto">
                            Book Your Safari
                        </Button>
                    </Link>
                    <Link href='/packages' className="w-full sm:w-auto">
                        <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                            View Packages
                        </Button>
                    </Link>
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
