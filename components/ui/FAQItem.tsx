"use client";
import { tw, colors } from "@/lib/theme";

interface FAQItemProps {
    question: string;
    answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
    return (
        <details className={`group bg-[${colors.backgroundDark}] rounded-lg p-4 cursor-pointer`}>
            <summary className="flex justify-between items-center font-medium text-white list-none">
                <span>{question}</span>
                <span className="transition group-open:rotate-180">
                    <span className="material-symbols-outlined">expand_more</span>
                </span>
            </summary>
            <p className="text-gray-400 mt-3 text-sm">{answer}</p>
        </details>
    );
}
