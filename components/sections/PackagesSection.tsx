import PackageCard from "../ui/PackageCard";
import { Package } from "@/types";

const packages: Package[] = [
    {
        title: "Morning Safari",
        price: 50,
        duration: "6:00 AM - 10:00 AM",
        description: "Best for bird watching and witnessing the jungle wake up.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkJ7VGLgQFYCzxBah1fQR9bMHHgkiBcmgCcJTDnTiBJA1d2NHPbvHkV48XbPYXxLW1z41wVGmEaY0JHnElL724HCw158B_gKI8P2QGbPE0mmyBm2Jja0sE9z-BayWYUmojqTEJshqrD2sx5lxiz9tsmjtiHw8Syuwg2waEi_vmO1UVjhi2huFUjnofe4sIh26iRCfzR7I4CXWdlQ00oRvEJEjQqz1cnXP3SZr1u0JW_tNBF-qPJPHLFxXeGa7WwuDwZGEorrmIJodn",
        features: [
            { icon: "schedule", text: "6:00 AM - 10:00 AM" },
            { icon: "restaurant", text: "Breakfast included" },
            { icon: "groups", text: "Shared Jeep" },
        ],
        badge: "Popular",
    },
    {
        title: "Afternoon Safari",
        price: 50,
        duration: "2:30 PM - 6:30 PM",
        description: "Ideal for leopard sightings as they become active at dusk.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8zrzjFesqbVSTKlNYD2j7wj3DgJ26cZ4LVazfthpYV0EA9juyuj-rDymGN0vnId7By7PkaLdo5V6MAZLX4jH8wwGxAlZWx_yXo3NdITg-nUjgWspXBsboHrYuHYnOVJY8MN14lJks43ZNz6kzxM-Q0gVQGQuZAjn6rt9qXbNlLvFtASTO2ybh60fz2_0CwXjcCXIzpY7Y4jaDsoqadnBCIG77hCQuXHz6RpHBeFl3E9OaerHu6jKZ67r1aqRIF1jDxrv_5eqi99oP",
        features: [
            { icon: "schedule", text: "2:30 PM - 6:30 PM" },
            { icon: "photo_camera", text: "Golden Hour" },
            { icon: "groups", text: "Shared Jeep" },
        ],
    },
    {
        title: "Full-Day Safari",
        price: 90,
        duration: "6:00 AM - 6:00 PM",
        description: "Maximize your chances with a comprehensive 12-hour tour.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAq3awyX_tXw1z-IS3cCe1rDSGXTn-GOCn5MbpvuVGCrX8zPu7y6HjocOqKkqnNVol837eKWPZ6ngh3JlkkmPysx4dj_gVQSD0f-e36snrKBHBQufUfS4YaZpbL0q5a6qLK6teDMT8z7eLXdjWeQCGI225oVnqdKpIVuWDPIEqzVEuhfyQQOHRX7bwYMYYHibXYhj-0oJcBlM2Sb7u9cUE66EZvL5QTNrdLWQX7lYWvscrH0Vz1M-coKzUk1_u8SYZsANjkGny77S9K",
        features: [
            { icon: "schedule", text: "6:00 AM - 6:00 PM" },
            { icon: "lunch_dining", text: "B'fast & Lunch included" },
            { icon: "travel_explore", text: "Deep Jungle Access" },
        ],
        badge: "Recommended",
    },
    {
        title: "Private Luxury",
        price: 150,
        duration: "Flexible",
        description: "Your own jeep, guide, and flexible timing. The ultimate experience.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBECqJX_e7sJXK87tcUDLz4CkgPciPMc5kxG4KyJE1huGRkTXJ6jtTi5Y1cp15nYDvu2n1UiTO00PekYGjixEPZCbEsCm0AKO1B4EoFh_HWVpgnmdw5zOmM0jNzmUVfXkeoRWN-VD8xVGpcTedXIFL9wGUsaYMd2DqnIkuT95jypIz9S6U6kOsSfhUSkD-g2tvgdV1cegotmxoxmOnAU9u-B99myoAcHflfImziQO3qJ3F7RC4v3TI_25YK5bfbNquZX8sxoGFcJxxF",
        features: [
            { icon: "stars", text: "Private Jeep & Guide" },
            { icon: "wine_bar", text: "Premium Catering" },
            { icon: "tune", text: "Flexible Schedule" },
        ],
        featured: true,
    },
];

export default function PackagesSection() {
    return (
        <div className="bg-surface-dark py-20 relative" id="packages">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary font-bold uppercase tracking-wider text-sm">
                        Choose Your Adventure
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
                        Curated Safari Packages
                    </h2>
                    <p className="text-gray-400">
                        Whether you're an early riser chasing the dawn or seeking a full day of
                        immersion, we have the perfect itinerary.
                    </p>
                </div>

                {/* Package Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {packages.map((pkg, index) => (
                        <PackageCard key={index} package={pkg} />
                    ))}
                </div>
            </div>
        </div>
    );
}
