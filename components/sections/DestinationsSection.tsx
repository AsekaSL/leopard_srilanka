'use client'
import { destinations } from "@/lib/data";
import DestinationCard from "../ui/DestinationCard";
import { useState } from "react";
import { tw, colors } from "@/lib/theme";

export default function DestinationsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsPerView = 4;

    const handlePrev = () => {
        setCurrentIndex((prev) => Math.max(prev - cardsPerView, 0));
    };

    const handleNext = () => {
        setCurrentIndex((prev) =>
        Math.min(prev + cardsPerView, destinations.length - cardsPerView)
        );
    };

    // Slice the destinations array to show only the visible cards
    const visibleDestinations = destinations.slice(
        currentIndex,
        currentIndex + cardsPerView
    );

    return (
        // <div className="bg-surface-dark py-20" id="destinations">
        //     <div className="container mx-auto px-4">
        //         {/* Section Header */}
        //         <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        //             <div>
        //                 <span className="text-primary font-bold uppercase tracking-wider text-sm">
        //                     Explore Locations
        //                 </span>
        //                 <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
        //                     Top Safari Destinations
        //                 </h2>
        //             </div>
        //             <div className="flex gap-2">
        //                 <button className="w-10 h-10 rounded-full border border-border-dark flex items-center justify-center hover:bg-border-dark text-white transition-colors">
        //                     <span className="material-symbols-outlined">arrow_back</span>
        //                 </button>
        //                 <button className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-black hover:bg-yellow-500 transition-colors">
        //                     <span className="material-symbols-outlined">arrow_forward</span>
        //                 </button>
        //             </div>
        //         </div>

        //         {/* Destinations Grid */}
        //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        //             {destinations.map((destination, index) => (
        //                 <DestinationCard key={index} destination={destination} />
        //             ))}
        //         </div>
        //     </div>
        // </div>
       <div className={`${tw.bgSurfaceDark} py-20`} id="destinations">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className={`${tw.textPrimary} font-bold uppercase tracking-wider text-sm`}>
              Explore Locations
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
              Top Safari Destinations
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`w-10 h-10 rounded-full border ${tw.borderDark} flex items-center justify-center hover:bg-[${colors.borderDark}] text-white transition-colors disabled:opacity-50`}
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= destinations.length - cardsPerView}
              className={`w-10 h-10 rounded-full ${tw.bgPrimary} flex items-center justify-center text-black hover:bg-yellow-500 transition-colors disabled:opacity-50`}
            >
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Destinations Carousel */}
        <div className="overflow-hidden">
          <div className="flex gap-4 transition-transform duration-500">
            {visibleDestinations.map((destination, index) => (
              <div key={index} className="flex-shrink-0 w-full md:w-1/4">
                {/* Each card takes 1/4 width to show 4 per view */}
                <DestinationCard destination={destination} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
        
    );
}
