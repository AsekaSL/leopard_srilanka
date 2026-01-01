import ReviewCard from "../ui/ReviewCard";
import { Review } from "@/types";

const reviews: Review[] = [
    {
        content:
            '"The guide was incredibly knowledgeable. We saw three leopards in one morning! The breakfast in the jungle was a lovely touch."',
        author: "Sarah Jenkins",
        country: "UK",
        avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBidG4KVMZV60jHkQTIOm8cCnPFPiTgnT9E5JMHOd4T4QXKkKZpKBAi02VH3SCjahf3Qr8WM4M_nj082WAm7niumcc6cJV8dLvaRKRXLM8mu8iV3GtqLlqruSuA1boCZv7RgKlLPY3z1_il0auGM-Vc36D1pf9TfdJvxe8J9rKvDoFScLw7o9Pi_VIzoni-KratlpvNk0WaWV3AIKKfDNZgxhub-DO37fvuHzZfAyuscm8FbJegc3renH0997JfdMj4R6u5YqsJ8n1q",
        rating: 5,
    },
    {
        content:
            '"Booked the full day safari. It was long but worth every minute. The jeep was very comfortable and the driver knew exactly where to go."',
        author: "David Muller",
        country: "Germany",
        avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBHkPDUacXi7sxndBYq58rIgSqFPN34GekRZJtEKleScIA3btIfZcDTSofHpSZf5Vz-09JxRpTVMmpz-jHucOheZOa30pZ-DK8NYGl2LRuJwqLG5sWdugHBbi_Pr-cJ_eeylN5rS517rAsI6VlXDknggZJn8kEywgvnOz_yfyxWu2ys4xOukPRBjFPpsDu0gV5M-dvseJLkTuxQ1lxjxLLSoeiFrwAZEh5MDOWfteAnUr2Wt9vPLBtdvZpMvbhwMvuyaeGN765xlCx",
        rating: 5,
    },
    {
        content:
            '"A truly ethical experience. They kept their distance from the animals and the guide was very respectful of nature. Highly recommended!"',
        author: "Elena Rossi",
        country: "Italy",
        avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqNzr9zFkYOxhAX6_1ULoBez-NDvVpCTwW9vnu9THwfYBPtLw4ocW0b_XTPr0zU4prmfQ9WQmd37tY3b1HtXDrGwD1EkKz2CTzdOfudB8Xx6Lr3cBe_dIIbCO2xeBYVw2KRDJgrwINmAP08iO7_KpFBVmvAOYUoNyPRcz2dhXBktTTEL6A-9_V8RDV08D7HswrO5Z6S45zNYmYnBYKBwf0YvkbgMXUycCzZmgy0n0OwmdjUdx1BKIQuxZxP57bBgRMUOi04b-OhN6a",
        rating: 5,
    },
];

export default function ReviewsSection() {
    return (
        <div className="py-20 bg-[#181611]">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        What Our Guests Say
                    </h2>
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {reviews.map((review, index) => (
                        <ReviewCard key={index} review={review} />
                    ))}
                </div>
            </div>
        </div>
    );
}
