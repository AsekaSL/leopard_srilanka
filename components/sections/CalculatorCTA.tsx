export default function CalculatorCTA() {
    return (
        <div className="py-20 bg-[#181611]">
            <div className="container mx-auto px-4">
                <div className="bg-gradient-to-r from-surface-dark to-[#2f2b20] border border-primary/20 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
                    {/* Decorative Blur */}
                    <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

                    {/* Content */}
                    <div className="flex-1 relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="bg-primary/20 p-2 rounded-lg text-primary">
                                <span className="material-symbols-outlined">calculate</span>
                            </span>
                            <h3 className="text-2xl font-bold text-white">Plan Your Budget</h3>
                        </div>
                        <p className="text-gray-300 text-lg mb-2">
                            Not sure about the costs? Use our interactive calculator to get an
                            instant estimate for your group.
                        </p>
                        <p className="text-gray-500 text-sm">
                            Includes park fees, jeep hire, and taxes.
                        </p>
                    </div>

                    {/* CTA Button */}
                    <div className="relative z-10">
                        <button className="bg-primary hover:bg-yellow-500 text-[#181611] font-bold text-lg py-4 px-8 rounded-xl shadow-lg hover:shadow-primary/20 transition-all flex items-center gap-3">
                            Open Safari Calculator
                            <span className="material-symbols-outlined">open_in_new</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
