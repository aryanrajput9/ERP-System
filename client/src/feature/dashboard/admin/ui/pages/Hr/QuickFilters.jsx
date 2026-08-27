

const filters = [
    {
        name: "All Employees",
        value: 248,
        color: "bg-cyan-400",
    },
    {
        name: "Active Employees",
        value: 210,
        color: "bg-emerald-400",
    },
    {
        name: "On Leave",
        value: 14,
        color: "bg-orange-400",
    },
    {
        name: "Inactive Employees",
        value: 24,
        color: "bg-red-400",
    },
    {
        name: "New Joins (This Month)",
        value: 8,
        color: "bg-blue-500",
    },
];

function QuickFilters() {
    return (
        <div className="rounded-2xl border border-slate-800 bg-[#101622] p-4 shadow-lg">

            <h2 className="text-sm font-semibold text-white">
                Quick Filters
            </h2>

            <div className="mt-4 space-y-3">

                {filters.map((filter, index) => (
                    <button
                        key={filter.name}
                        className="flex w-full items-center justify-between text-left transition hover:translate-x-0.5"
                    >
                        <div className="flex items-center gap-2.5">

                            {index === 0 ? (
                                <svg
                                    className="h-3.5 w-3.5 text-cyan-400"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                >
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M3 21v-2a6 6 0 016-6" />
                                    <path d="M16 11h6" />
                                    <path d="M19 8v6" />
                                </svg>
                            ) : (
                                <span
                                    className={`h-2 w-2 rounded-full ${filter.color}`}
                                />
                            )}

                            <span className="text-[10px] text-slate-300">
                                {filter.name}
                            </span>
                        </div>

                        <span className="text-[10px] text-slate-400">
                            {filter.value}
                        </span>
                    </button>
                ))}

            </div>
        </div>
    );
}


export default QuickFilters