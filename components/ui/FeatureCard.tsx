import { Feature } from "@/types";
import { tw } from "@/lib/theme";

interface FeatureCardProps {
    feature: Feature;
    variant?: "default" | "outlined";
}

export default function FeatureCard({ feature, variant = "default" }: FeatureCardProps) {
    if (variant === "outlined") {
        return (
            <div className={`${tw.bgSurfaceDark} p-4 rounded-lg border ${tw.borderDark} flex items-start gap-3`}>
                <span className={`material-symbols-outlined ${tw.textPrimary} mt-1`}>
                    {feature.icon}
                </span>
                <div>
                    <h4 className="font-bold text-white">{feature.title}</h4>
                    <p className="text-sm text-gray-400 mt-1">{feature.description}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center gap-3 px-2">
            <span className={`material-symbols-outlined ${tw.textPrimary} text-3xl`}>
                {feature.icon}
            </span>
            <div className="flex flex-col text-center">
                <span className="font-bold text-sm md:text-base">{feature.title}</span>
                <span className="text-xs text-gray-400">{feature.description}</span>
            </div>
        </div>
    );
}
