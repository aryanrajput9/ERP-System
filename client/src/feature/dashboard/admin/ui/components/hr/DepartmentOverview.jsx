import React from "react";

const overview = [
    {
        name: "Engineering",
        count: 68,
        percentage: "26.6%",
        color: "bg-blue-500",
    },
    {
        name: "Sales",
        count: 42,
        percentage: "16.4%",
        color: "bg-indigo-500",
    },
    {
        name: "Support",
        count: 34,
        percentage: "13.3%",
        color: "bg-cyan-500",
    },
    {
        name: "Marketing",
        count: 24,
        percentage: "9.4%",
        color: "bg-teal-400",
    },
    {
        name: "HR",
        count: 18,
        percentage: "7.0%",
        color: "bg-slate-400",
    },
    {
        name: "Finance",
        count: 16,
        percentage: "6.3%",
        color: "bg-orange-400",
    },
    {
        name: "Design",
        count: 12,
        percentage: "4.7%",
        color: "bg-pink-400",
    },
    {
        name: "Administration",
        count: 8,
        percentage: "3.1%",
        color: "bg-red-300",
    },
];

function DepartmentOverview() {
    return (
        <div className="rounded-xl border border-slate-200 bg-white p-5">

            <h2 className="text-sm font-semibold text-slate-900">
                Department Overview
            </h2>

            <div className="mt-5 flex items-center gap-5">

                {/* Donut */}
                <div className="relative h-32 w-32 shrink-0">

                    <div
                        className="h-full w-full rounded-full"
                        style={{
                            background:
                                "conic-gradient(#3b82f6 0deg 96deg, #6366f1 96deg 155deg, #22d3ee 155deg 203deg, #2dd4bf 203deg 237deg, #94a3b8 237deg 262deg, #fb923c 262deg 285deg, #f472b6 285deg 302deg, #fca5a5 302deg 314deg, #e2e8f0 314deg 360deg)",
                        }}
                    />

                    <div className="absolute inset-[22px] flex flex-col items-center justify-center rounded-full bg-white">
                        <span className="text-xl font-bold text-slate-900">
                            256
                        </span>

                        <span className="text-[10px] text-slate-500">
                            Total
                        </span>
                    </div>

                </div>

                {/* Legend */}
                <div className="flex-1 space-y-2">

                    {overview.map((item) => (
                        <div
                            key={item.name}
                            className="flex items-center justify-between text-[10px]"
                        >
                            <div className="flex items-center gap-2">

                                <span
                                    className={`h-2 w-2 rounded-full ${item.color}`}
                                />

                                <span className="text-slate-600">
                                    {item.name}
                                </span>

                            </div>

                            <span className="text-slate-500">
                                {item.count} ({item.percentage})
                            </span>
                        </div>
                    ))}

                </div>

            </div>

        </div>
    );
}

export default DepartmentOverview;