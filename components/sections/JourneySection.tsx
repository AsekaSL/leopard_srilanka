import { JourneyStep } from "@/types";

const journeySteps: JourneyStep[] = [
    {
        icon: "laptop_mac",
        title: "Book Online",
        description: "Select your package and secure your date instantly.",
    },
    {
        icon: "hotel",
        title: "Hotel Pickup",
        description: "Our luxury jeep picks you up from your hotel.",
    },
    {
        icon: "confirmation_number",
        title: "Park Entry",
        description: "We handle tickets and entry formalities swiftly.",
    },
    {
        icon: "landscape",
        title: "The Safari",
        description: "Explore the wild with our expert naturalist guide.",
    },
    {
        icon: "check_circle",
        title: "Safe Drop-off",
        description: "Return to your accommodation with memories.",
    },
];

export default function JourneySection() {
    return (
        <div className="py-20 bg-[#181611] relative overflow-hidden" id="experience">
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-primary font-bold uppercase tracking-wider text-sm">
                        How it Works
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
                        Your Safari Journey
                    </h2>
                </div>

                {/* Journey Steps */}
                <div className="relative">
                    {/* Connection Line (Desktop Only) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-border-dark -translate-y-1/2 z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                        {journeySteps.map((step, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center group relative z-10"
                            >
                                <div className={`w-16 h-16 rounded-full bg-surface-dark border-2 border-border-dark group-hover:border-primary flex items-center justify-center mb-4 transition-colors duration-300 ${index === 3 ? 'shadow-[0_0_15px_rgba(236,178,19,0.3)]' : ''}`}>
                                    <span className="material-symbols-outlined text-primary text-3xl">
                                        {step.icon}
                                    </span>
                                </div>
                                <h4 className="text-white font-bold mb-2">{step.title}</h4>
                                <p className="text-sm text-gray-400">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
