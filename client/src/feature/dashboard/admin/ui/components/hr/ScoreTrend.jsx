import React from "react";

function ScoreTrend() {
    return (
        <div>

            <h3 className="text-xs font-semibold text-slate-800">
                Score Trend
            </h3>

            <div className="relative mt-5 h-36">

                {/* Grid */}
                <div className="absolute inset-0 flex flex-col justify-between">

                    {[5, 4, 3, 2, 1].map((score) => (
                        <div
                            key={score}
                            className="flex items-center gap-3"
                        >

                            <span className="w-5 text-[9px] text-slate-400">
                                {score}.0
                            </span>

                            <div className="h-px flex-1 bg-slate-100" />

                        </div>
                    ))}

                </div>

                {/* SVG Chart */}
                <svg
                    viewBox="0 0 500 150"
                    className="absolute left-8 right-0 top-0 h-full w-[calc(100%-32px)]"
                    preserveAspectRatio="none"
                >

                    <polyline
                        points="10,98 105,82 200,94 295,72 390,60 485,48"
                        fill="none"
                        stroke="#7c3aed"
                        strokeWidth="3"
                    />

                    {[
                        [10, 98],
                        [105, 82],
                        [200, 94],
                        [295, 72],
                        [390, 60],
                        [485, 48],
                    ].map(([x, y], index) => (
                        <circle
                            key={index}
                            cx={x}
                            cy={y}
                            r="4"
                            fill="#ffffff"
                            stroke="#7c3aed"
                            strokeWidth="3"
                        />
                    ))}

                </svg>

                {/* Months */}
                <div className="absolute bottom-[-18px] left-8 right-0 flex justify-between">

                    {[
                        "Dec 2024",
                        "Jan 2025",
                        "Feb 2025",
                        "Mar 2025",
                        "Apr 2025",
                        "May 2025",
                    ].map((month) => (
                        <span
                            key={month}
                            className="text-[9px] text-slate-400"
                        >
                            {month}
                        </span>
                    ))}

                </div>

            </div>

        </div>
    );
}

export default ScoreTrend;