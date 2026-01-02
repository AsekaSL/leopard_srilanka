import Image from "next/image";
import FeatureCard from "../ui/FeatureCard";
import { Feature } from "@/types";
import { expertiseFeatures } from "@/lib/data";
import img from '@/public/assests/home_img_1.jpg'
import Link from "next/link";



export default function IntroductionSection() {
    return (
        <div className="py-20 md:py-24 relative overflow-hidden" id="about">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Text Content */}
                    <div className="flex-1 space-y-8">
                        <div className="space-y-4">
                            <span className="text-primary font-bold uppercase tracking-wider text-sm">
                                Our Story
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                                Masters of the Sri Lankan Wilderness
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Discover the magic of Sri Lankan wildlife with experts who know the
                                land best. We specialize in leopard-focused safaris that respect
                                nature while delivering heart-pounding encounters.
                            </p>
                            <p className="text-gray-400 text-base leading-relaxed">
                                From the dense jungles of Wilpattu to the arid plains of Yala, our
                                team of dedicated naturalists ensures every moment is educational,
                                exciting, and ethical.
                            </p>
                        </div>

                        {/* Feature Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {expertiseFeatures.map((feature : Feature, index : number) => (
                                <FeatureCard key={index} feature={feature} variant="outlined" />
                            ))}
                        </div>

                        {/* CTA Link */}
                        <Link href='/about'>
                            <button className="text-primary font-bold hover:text-white transition-colors flex items-center gap-2 group cursor-pointer">
                                Read Our Full Story
                                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                                    arrow_forward
                                </span>
                            </button>
                        </Link>
                    </div>

                    {/* Image with Quote Card */}
                    <div className="flex-1 relative w-full">
                        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
                            <Image
                                alt="Elephant in the wild"
                                src={img}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                            {/* Quote Card */}
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-black/50 backdrop-blur-md p-4 rounded-xl border border-white/10">
                                    <p className="text-white font-medium">
                                        "An encounter you'll carry with you forever."
                                    </p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <div className="flex text-primary text-sm">
                                            {[...Array(5)].map((_, i) => (
                                                <span
                                                    key={i}
                                                    className="material-symbols-outlined text-[16px] fill-current"
                                                >
                                                    star
                                                </span>
                                            ))}
                                        </div>
                                        <span className="text-xs text-gray-300">
                                            Rated 5.0 on TripAdvisor
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
