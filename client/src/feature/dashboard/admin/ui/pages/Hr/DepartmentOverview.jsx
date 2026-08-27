

const departments = [
    {
        name: "Engineering",
        value: 98,
        percentage: "39.5%",
        color: "#3b82f6",
    },
    {
        name: "Design",
        value: 48,
        percentage: "19.4%",
        color: "#8b5cf6",
    },
    {
        name: "Marketing",
        value: 32,
        percentage: "12.9%",
        color: "#f59e0b",
    },
    {
        name: "HR",
        value: 20,
        percentage: "8.1%",
        color: "#ec4899",
    },
    {
        name: "Finance",
        value: 18,
        percentage: "7.3%",
        color: "#22c55e",
    },
    {
        name: "Support",
        value: 32,
        percentage: "12.8%",
        color: "#06b6d4",
    },
];

function DepartmentOverview() {
    return (
        <div className="rounded-2xl border border-slate-800 bg-[#101622] p-4 shadow-lg">

            <h2 className="text-sm font-semibold text-white">
                Department Overview
            </h2>

            <div className="mt-4 space-y-3">

                {departments.map((department) => {

                    const width =
                        `${(department.value / 98) * 100}%`;

                    return (
                        <div
                            key={department.name}
                            className="flex items-center gap-3"
                        >
                            <span className="w-[72px] text-[10px] text-slate-300">
                                {department.name}
                            </span>

                            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-800">
                                <div
                                    className="h-full rounded-full transition-all"
                                    style={{
                                        width,
                                        backgroundColor:
                                            department.color,
                                    }}
                                />
                            </div>

                            <span className="w-6 text-right text-[10px] text-slate-400">
                                {department.value}
                            </span>
                        </div>
                    );
                })}

            </div>
        </div>
    );
}

export default DepartmentOverview