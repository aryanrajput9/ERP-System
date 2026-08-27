import React from "react";

function AnnouncementStatsChart() {
    const categories = [
        {
            name: "General",
            value: 12,
            percentage: "43%",
            color: "bg-violet-500",
        },
        {
            name: "HR Policy",
            value: 6,
            percentage: "21%",
            color: "bg-blue-500",
        },
        {
            name: "Events",
            value: 5,
            percentage: "18%",
            color: "bg-green-500",
        },
        {
            name: "Important",
            value: 3,
            percentage: "11%",
            color: "bg-orange-400",
        },
        {
            name: "Others",
            value: 2,
            percentage: "7%",
            color: "bg-red-400",
        },
    ];

    return (
        <div className="rounded-xl border border-slate-200 bg-white p-5">

            <div className="flex items-center justify-between">

                <h2 className="text-sm font-semibold text-slate-900">
                    Announcement Stats
                </h2>

                <span className="text-[9px] text-slate-400">
                    This Month
                </span>

            </div>

            {/* Donut */}

            <div className="mt-5 flex justify-center">

                <div className="relative h-32 w-32">

                    <div
                        className="h-full w-full rounded-full"
                        style={{
                            background:
                                "conic-gradient(#8b5cf6 0deg 154deg, #3b82f6 154deg 231deg, #22c55e 231deg 296deg, #fb923c 296deg 335deg, #f87171 335deg 360deg)",
                        }}
                    />

                    <div className="absolute inset-[25px] flex flex-col items-center justify-center rounded-full bg-white">

                        <span className="text-xl font-bold text-slate-900">
                            28
                        </span>

                        <span className="text-[9px] text-slate-400">
                            Total
                        </span>

                    </div>

                </div>

            </div>

            {/* Legend */}

            <div className="mt-5 space-y-2.5">

                {categories.map((item) => (
                    <div
                        key={item.name}
                        className="flex items-center gap-2"
                    >

                        <span
                            className={`h-2 w-2 rounded-full ${item.color}`}
                        />

                        <span className="flex-1 text-[10px] text-slate-600">
                            {item.name}
                        </span>

                        <span className="text-[10px] font-medium text-slate-800">
                            {item.value}
                        </span>

                        <span className="text-[9px] text-slate-400">
                            ({item.percentage})
                        </span>

                    </div>
                ))}

            </div>

        </div>
    );
}

export default AnnouncementStatsChart;