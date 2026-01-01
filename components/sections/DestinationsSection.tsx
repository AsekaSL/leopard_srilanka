import DestinationCard from "../ui/DestinationCard";
import { Destination } from "@/types";

const destinations: Destination[] = [
    {
        name: "Yala",
        description: "Highest leopard density in the world.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3zacxXItBgGnn4QkDcNWU--YzFGlwACWeL13MCXaybQ7GGinyQDDVav37pbeBwrimCKKhcopiJhHGdzSsDGlemTc5p4QnYRhGQviyz8kvHuZ-Vjhb4sBl8L2V6xn__EU9UicBE36xdwNtKZcEElRWn5ijNlCLbYZSVQQ2Ivb1RYz0P5R5tiqFKx3iXoXjXYvvMhhWBFdbnVUonOXbv4cTpEy7G69GlEWJ3KfYZN-lJNG42nbuMOYM-EVg_l2eTu1SC5sYwX_PLtTP",
        season: "Feb - July",
        location: "Yala National Park",
    },
    {
        name: "Wilpattu",
        description: "Scenic lakes and sloth bears.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_LXAq1COy_zOQF_G7ot6DSTK3apbbNlCkDTXakd21rwQ1xD0_hojilV3VDUY2tUBatsPYI54CNT5X4QL8y9ag2ZFzikuJPQFocUMkMJmYAUybFStNvxoiC0Mub-3qxZtALssQh76u_TF_Hay4_fZuLvVHCQ_v3BpXnqcKmZTnCLGmmhb-leh9Nyn7xJvPKUtTk_bry1TXQM84G3ppTSvY56lPEj8383tlo2wflvuF1kz4FHz-XQ9x7028saFtKfaOghXqEIH2Tu85",
        season: "May - Sept",
        location: "Wilpattu National Park",
    },
    {
        name: "Udawalawe",
        description: "Large herds of Asian elephants.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcvhetG9vzgRN-r6k39c_bWIV5jIk3T1akXdoALCzBo3O5yXQ7UYKIlJOoEMCYc_73A-t5uhY6GcZzQo18mVWzEEQ1_A_HKB5eJiMKUZLL9cpaujLtHLDxZPSDHDhC8CgmUjzy6SgDcP716j0d1fCPxHTfJ6WDUK8UbL_um8tg8vWC_p2ZGedg2iHsKA4PUbI8pI4cfYJ1GoAMCcTMmunsFPjRV4V31dKayRRuds0gXw4bvuA2-BAQf9gaOK2uJEhwirRWgw5u7GkU",
        season: "All Year",
        location: "Udawalawe National Park",
    },
    {
        name: "Lunugamwehera",
        description: "Transitional corridor for elephants.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWaEXgTR6QoRoX3P2-LcvgsRW6jDz5mXZUV-LTX1maVM2TVXXRhACERu6L8WieKcqaI2I8Bfw6-S8kFYlcn86YOudjUfPIc3f3cv2MjfG4EqJJ3fYTIh1UMU5DoasFthxRM82Wuy1Tiup-zSBkduG04pn0SA8Wv72lWDLlkuyopznNyTPy8to5oJefAa5KybEp0q6_OblEFtMkFSNpW9zgRKFw7PglRe-ZKriYtvH8dk1DkxtvALns0nngHbw5SEirivlPks5wZMlk",
        season: "Nov - April",
        location: "Lunugamwehera National Park",
    },
];

export default function DestinationsSection() {
    return (
        <div className="bg-surface-dark py-20" id="destinations">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <span className="text-primary font-bold uppercase tracking-wider text-sm">
                            Explore Locations
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
                            Top Safari Destinations
                        </h2>
                    </div>
                    <div className="flex gap-2">
                        <button className="w-10 h-10 rounded-full border border-border-dark flex items-center justify-center hover:bg-border-dark text-white transition-colors">
                            <span className="material-symbols-outlined">arrow_back</span>
                        </button>
                        <button className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-black hover:bg-yellow-500 transition-colors">
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                    </div>
                </div>

                {/* Destinations Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {destinations.map((destination, index) => (
                        <DestinationCard key={index} destination={destination} />
                    ))}
                </div>
            </div>
        </div>
    );
}
