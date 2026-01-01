import Image from "next/image";

export default function ResponsibleTourism() {
    return (
        <div className="bg-surface-dark py-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col-reverse md:flex-row gap-12 items-center">
                    {/* Image */}
                    <div className="flex-1 relative">
                        <div className="absolute top-4 -left-4 w-full h-full border-2 border-primary/30 rounded-2xl z-0" />
                        <Image
                            alt="Responsible tourism"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5b5JeMrfezKUjBkj1CYgboRJ00d_2Q7bxhHiUWGgT-0xDcks9D5eBngaClt2LlYwvmgFq37bBg4zw330sAbjhtbs_1C89oupmoS0Cv_pYuYsJ5Oj-74q1lMZXYNqJfwGnfgjuAfeW-rtV2IzaQ2zjzgk8OZPDW5kqq6xF9ZQZ3XDJZS3bzKoxDN5s6oixkPCmVHN1ddvWBgQcch2TKoEpUHuc5eRtdWSAKlFPOQHHHPCLP1DpLXrCcsMhF6IrU6Buw4xtewOrOk3s"
                            width={600}
                            height={400}
                            className="relative z-10 w-full rounded-2xl shadow-xl grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                        <span className="text-primary font-bold uppercase tracking-wider text-sm">
                            Conservation First
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
                            "Their life is in your hands."
                        </h2>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            We believe that tourism should protect, not disturb. Our drivers
                            follow strict ethical guidelines: no speeding, no overcrowding, and
                            maintaining respectful distances from animals.
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-3 text-gray-300">
                                <span className="material-symbols-outlined text-green-500">
                                    check_circle
                                </span>
                                <span>Carbon footprint offset initiatives</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <span className="material-symbols-outlined text-green-500">
                                    check_circle
                                </span>
                                <span>Supporting local conservation projects</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <span className="material-symbols-outlined text-green-500">
                                    check_circle
                                </span>
                                <span>Strict adherence to park rules</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
