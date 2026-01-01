import FAQItem from "../ui/FAQItem";
import { FAQ } from "@/types";

const faqs: FAQ[] = [
    {
        question: "What is the best time to see leopards?",
        answer:
            "Leopards are most active during early morning (6 AM - 9 AM) and late afternoon (3 PM - 6 PM). However, sightings can happen at any time of day.",
    },
    {
        question: "Do you provide pick up from hotels?",
        answer:
            "Yes, we provide complimentary pickup and drop-off from hotels within a 20km radius of the park entrance.",
    },
    {
        question: "Is breakfast included?",
        answer:
            "Breakfast is included in Morning and Full-Day safaris. We provide a picnic breakfast to be enjoyed at a designated area inside the park.",
    },
];

export default function FAQSection() {
    return (
        <div className="bg-surface-dark py-16 border-y border-border-dark">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-2xl font-bold text-white mb-8 text-center">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </div>
    );
}
