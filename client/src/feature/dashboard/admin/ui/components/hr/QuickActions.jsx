
const quickActions = [
    {
        title: "Add Employee",
        icon: (
            <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
            >
                <circle cx="9" cy="7" r="4" />
                <path d="M3 21v-2a6 6 0 016-6h0a6 6 0 016 6v2" />
                <path d="M19 8v6" />
                <path d="M16 11h6" />
            </svg>
        ),
    },
    {
        title: "Mark Attendance",
        icon: (
            <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
            >
                <rect x="3" y="4" width="18" height="17" rx="2" />
                <path d="M8 2v4M16 2v4M3 10h18" />
                <path d="M8 15l2 2 5-5" />
            </svg>
        ),
    },
    {
        title: "Process Payroll",
        icon: (
            <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
            >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M7 9h10M7 13h6" />
                <circle cx="17" cy="14" r="2" />
            </svg>
        ),
    },
    {
        title: "Generate Report",
        icon: (
            <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
            >
                <path d="M4 20V10" />
                <path d="M10 20V4" />
                <path d="M16 20v-7" />
                <path d="M22 20H2" />
                <path d="M4 10h0M10 4h0M16 13h0" />
            </svg>
        ),
    },
];


function QuickActions() {
    return (
        <div className="rounded-2xl border border-slate-800 bg-[#101622] p-4 shadow-lg">
            <h2 className="mb-3 text-sm font-semibold text-white">
                Quick Actions
            </h2>

            <div className="grid grid-cols-2 gap-2.5">
                {quickActions.map((action) => (
                    <button
                        key={action.title}
                        className="group flex h-[70px] flex-col items-center justify-center gap-2 rounded-xl border border-slate-700/80 bg-[#151c2a] text-slate-300 transition duration-200 hover:border-emerald-400/40 hover:bg-[#192333]"
                    >
                        <span className="text-emerald-400 transition group-hover:scale-110">
                            {action.icon}
                        </span>

                        <span className="text-[10px] font-medium text-slate-200">
                            {action.title}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default QuickActions