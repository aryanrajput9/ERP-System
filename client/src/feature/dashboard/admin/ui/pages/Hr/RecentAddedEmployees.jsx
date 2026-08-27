

const recentEmployees = [
    {
        name: "Karan Mehta",
        designation: "Finance Executive",
        date: "09 Aug 2026",
        avatar: "https://i.pravatar.cc/100?img=14",
    },
    {
        name: "Neha Verma",
        designation: "Support Engineer",
        date: "08 Aug 2026",
        avatar: "https://i.pravatar.cc/100?img=45",
    },
    {
        name: "Arjun Malhotra",
        designation: "Business Analyst",
        date: "07 Aug 2026",
        avatar: "https://i.pravatar.cc/100?img=13",
    },
];




function RecentAddedEmployees() {
    return (
        <div className="rounded-2xl border border-slate-800 bg-[#101622] p-4 shadow-lg">

            <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold text-white">
                    Recent Added Employees
                </h2>

                <button className="text-[10px] font-medium text-emerald-400 transition hover:text-emerald-300">
                    View All
                </button>
            </div>

            <div className="mt-3">

                {recentEmployees.map((employee, index) => (
                    <div
                        key={employee.name}
                        className={`flex items-center gap-3 py-3 ${index !== recentEmployees.length - 1
                            ? "border-b border-slate-800/70"
                            : ""
                            }`}
                    >

                        {/* Avatar */}
                        <img
                            src={employee.avatar}
                            alt={employee.name}
                            className="h-9 w-9 shrink-0 rounded-full object-cover ring-1 ring-slate-700"
                        />

                        {/* Info */}
                        <div className="min-w-0 flex-1">
                            <p className="text-xs font-semibold text-white">
                                {employee.name}
                            </p>

                            <p className="mt-0.5 text-[10px] text-slate-500">
                                {employee.designation}
                            </p>
                        </div>

                        {/* Date */}
                        <span className="whitespace-nowrap text-[10px] text-slate-400">
                            {employee.date}
                        </span>

                    </div>
                ))}

            </div>
        </div>
    );
}

export default RecentAddedEmployees