function SectionHeader({ icon, title }) {
    return (
        <div className="flex items-center justify-between px-4 pt-4">
            <div className="flex items-center gap-2">
                <span className="text-lg">{icon}</span>

                <h2 className="text-sm font-semibold text-white">
                    {title}
                </h2>
            </div>

            <button className="flex items-center gap-1 text-[11px] font-medium text-emerald-400 transition hover:text-emerald-300">
                View All
                <span className="text-sm">→</span>
            </button>
        </div>
    );
}

export default SectionHeader