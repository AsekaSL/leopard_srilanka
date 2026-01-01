import Image from "next/image";
import Button from "../ui/Button";

export default function FinalCTA() {
    return (
        <div className="relative py-24 md:py-32 flex items-center justify-center">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    alt="Jungle Background"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiRa1J5sAsH0I6FEJM8rrieh2UtbO0doU4MoNDmlNYgNfMb0w05xn9rOLv8pts094tnwvzlSZp5MiJGYHdyLAPzbiYsQ6ZBg4esFsMiLvzEyg0a2BuAVXdyiGKJBUx7g3Pk8Xxsi1_O0I4yIbPBD4iqi03fZOH6G3IxpvTB6CGoIRKun6S1WnCfXp6ATgHuFdqVHDB5eoig3s_eKCCgytwJ_7HsK6Fzg2ms6ZA3c8Ia0kCFH4tJy1tkTrExbWLfaOYyuHHO4YHJfPJ"
                    fill
                    className="object-cover"
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
                    <button className="bg-primary hover:bg-yellow-500 text-[#181611] text-lg font-bold py-4 px-10 rounded-lg shadow-xl transition-transform hover:-translate-y-1">
                        Book Now
                    </button>
                    <button className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white text-lg font-bold py-4 px-10 rounded-lg transition-colors">
                        Contact an Expert
                    </button>
                </div>
            </div>
        </div>
    );
}
