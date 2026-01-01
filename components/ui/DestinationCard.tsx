import Image from "next/image";
import { Destination } from "@/types";

interface DestinationCardProps {
    destination: Destination;
}

export default function DestinationCard({ destination }: DestinationCardProps) {
    return (
        <div className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer">
            <Image
                alt={destination.name}
                src={destination.image}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-white mb-2">{destination.name}</h3>
                <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100">
                    <p className="text-gray-300 text-sm mb-2">{destination.description}</p>
                    <p className="text-primary text-xs font-bold uppercase">
                        Best Season: {destination.season}
                    </p>
                </div>
            </div>
        </div>
    );
}
