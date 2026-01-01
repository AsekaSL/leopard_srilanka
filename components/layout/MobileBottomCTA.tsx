export default function MobileBottomCTA() {
    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#181611] border-t border-border-dark p-4 z-40 flex gap-3">
            <button className="flex-1 bg-surface-dark text-white font-bold py-3 rounded-lg border border-border-dark">
                Call Now
            </button>
            <button className="flex-[2] bg-primary text-[#181611] font-bold py-3 rounded-lg">
                Book Safari
            </button>
        </div>
    );
}
