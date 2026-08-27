import React from "react";

const distribution = [
    {
        label: "Outstanding",
        range: "4.5 - 5.0",
        value: "20%",
        count: 51,
        color: "bg-violet-500",
    },
    {
        label: "Exceeds Expectations",
        range: "3.5 - 4.4",
        value: "35%",
        count: 90,
        color: "bg-blue-500",
    },
    {
        label: "Meets Expectations",
        range: "2.5 - 3.4",
        value: "30%",
        count: 77,
        color: "bg-green-500",
    },
    {
        label: "Below Expectations",
        range: "1.5 - 2.4",
        value: "10%",
        count: 26,
        color: "bg-orange-400",
    },
    {
        label: "Unsatisfactory",
        range: "1.0 - 1.4",
        value: "5%",
        count: 12,
        color: "bg-red-400",
    },
];

function PerformanceDistribution() {
    return (
        <div>

            <h3 className="text-xs font-semibold text-slate-800">
                Performance Distribution
            </h3>

            <div className="mt-5 flex items-center gap-5">

                {/* Donut */}
                <div className="relative h-36 w-36 shrink-0">

                    <div
                        className="h-full w-full rounded-full"
                        style={{
                            background:
                                "conic-gradient(#8b5cf6 0deg 72deg, #3b82f6 72deg 198deg, #22c55e 198deg 306deg, #fb923c 306deg 342deg, #f87171 342deg 360deg)",
                        }}
                    />

                    <div className="absolute inset-[25px] flex flex-col items-center justify-center rounded-full bg-white">

                        <span className="text-xl font-bold text-slate-900">
                            256
                        </span>

                        <span className="text-[10px] text-slate-500">
                            Employees
                        </span>

                    </div>

                </div>

                {/* Legend */}
                <div className="space-y-2.5">

                    {distribution.map((item) => (
                        <div
                            key={item.label}
                            className="flex items-center gap-2"
                        >

                            <span
                                className={`h-2 w-2 rounded-full ${item.color}`}
                            />

                            <span className="text-[10px] text-slate-600">
                                {item.label}
                            </span>

                            <span className="text-[10px] font-medium text-slate-800">
                                {item.value}
                            </span>

                            <span className="text-[10px] text-slate-400">
                                ({item.count})
                            </span>

                        </div>
                    ))}

                </div>

            </div>

        </div>
    );
}

export default PerformanceDistribution;