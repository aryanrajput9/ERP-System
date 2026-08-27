import React from "react";
import { ChevronDown } from "lucide-react";

function AttendanceTrend() {
    return (
        <div className="rounded-xl border border-slate-200 bg-white p-5">

            <div className="flex items-center justify-between">

                <h2 className="text-sm font-semibold text-slate-900">
                    Attendance Trend
                </h2>

                <button className="flex items-center gap-1 rounded-lg border border-slate-200 px-3 py-1.5 text-[10px] text-slate-600">
                    Monthly
                    <ChevronDown size={12} />
                </button>

            </div>

            <div className="relative mt-6 h-40">

                <div className="absolute inset-0 flex flex-col justify-between">

                    {[100, 80, 60, 40, 20, 0].map((value) => (
                        <div
                            key={value}
                            className="flex items-center gap-2"
                        >

                            <span className="w-7 text-[9px] text-slate-400">
                                {value}%
                            </span>

                            <div className="h-px flex-1 bg-slate-100" />

                        </div>
                    ))}

                </div>

                <svg
                    viewBox="0 0 500 160"
                    className="absolute left-8 top-0 h-full w-[calc(100%-32px)]"
                    preserveAspectRatio="none"
                >

                    <polyline
                        points="10,48 105,45 200,52 295,38 390,44 485,32"
                        fill="none"
                        stroke="#7c3aed"
                        strokeWidth="3"
                    />

                    {[
                        [10, 48],
                        [105, 45],
                        [200, 52],
                        [295, 38],
                        [390, 44],
                        [485, 32],
                    ].map(([x, y], index) => (
                        <circle
                            key={index}
                            cx={x}
                            cy={y}
                            r="4"
                            fill="white"
                            stroke="#7c3aed"
                            strokeWidth="3"
                        />
                    ))}

                </svg>

            </div>

            <div className="ml-8 mt-2 flex justify-between">

                {["Dec", "Jan", "Feb", "Mar", "Apr", "May"].map(
                    (month) => (
                        <span
                            key={month}
                            className="text-[9px] text-slate-400"
                        >
                            {month}
                        </span>
                    )
                )}

            </div>

        </div>
    );
}

export default AttendanceTrend;