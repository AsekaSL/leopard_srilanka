import Image from "next/image";
import { Review } from "@/types";
import { tw, colors } from "@/lib/theme";

interface ReviewCardProps {
    review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
    return (
        <div className={`${tw.bgSurfaceDark} p-8 rounded-xl border ${tw.borderDark} relative`}>
            <span className={`material-symbols-outlined text-6xl text-[${colors.borderDark}]/50 absolute top-4 right-4`}>
                format_quote
            </span>

            {/* Star Rating */}
            <div className={`flex ${tw.textPrimary} mb-4`}>
                {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined fill-current">
                        star
                    </span>
                ))}
            </div>

            {/* Review Content */}
            <p className="text-gray-300 mb-6 relative z-10">{review.content}</p>

            {/* Author */}
            <div className="flex items-center gap-4">
                <Image
                    alt={review.author}
                    src={review.avatar}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                />
                <div>
                    <h5 className="text-white font-bold text-sm">{review.author}</h5>
                    <p className="text-gray-500 text-xs">{review.country}</p>
                </div>
            </div>
        </div>
    );
}
