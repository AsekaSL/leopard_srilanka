import FeatureCard from "../ui/FeatureCard";
import { Feature } from "@/types";
import { tw, colors } from "@/lib/theme";

const trustFeatures: Feature[] = [
    {
        icon: "verified_user",
        title: "Local Experts",
        description: "Decades of experience",
    },
    {
        icon: "directions_car",
        title: "Luxury 4x4 Jeeps",
        description: "Premium comfort modified",
    },
    {
        icon: "payments",
        title: "Transparent Pricing",
        description: "No hidden charges",
    },
    {
        icon: "eco",
        title: "Responsible",
        description: "Certified ethical tourism",
    },
];

export default function TrustInfoStrip() {
    return (
        <div className={`${tw.bgSurfaceDark} border-y border-[#393428] py-8 relative z-20`}>
            <div className="container mx-auto px-4">
                <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x-0 md:divide-x divide-[#393428]/50`}>
                    {trustFeatures.map((feature, index) => (
                        <FeatureCard key={index} feature={feature} />
                    ))}
                </div>
            </div>
        </div>
    );
}
