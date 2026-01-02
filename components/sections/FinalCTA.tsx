'use client'
import Image from "next/image";
import final_img from '@/public/assests/final_img.jpg'
import { useRouter } from "next/navigation";

export default function FinalCTA() {
    const router = useRouter();
    return (
        <div className="relative py-24 md:py-32 flex items-center justify-center">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    alt="Jungle Background"
                    src={final_img}
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-[#181611]/80 z-10" />
            </div>

            {/* Content */}
            <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                    Your Leopard Safari Adventure Starts Here
                </h2>
                <p className="text-xl text-gray-300 mb-10">
                    Limited slots available for the upcoming season. Secure your jeep today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button onClick={() => router.push('/packages')} className="bg-primary cursor-pointer hover:bg-yellow-500 text-[#181611] text-lg font-bold py-4 px-10 rounded-lg shadow-xl transition-transform hover:-translate-y-1">
                        Book Now
                    </button>
                    <button onClick={() => router.push('/contact')} className="bg-transparent cursor-pointer border-2 border-white hover:bg-white hover:text-black text-white text-lg font-bold py-4 px-10 rounded-lg transition-colors">
                        Contact an Expert
                    </button>
                </div>
            </div>
        </div>
    );
}
