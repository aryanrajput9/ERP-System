import React from "react";
import { Star, Target } from "lucide-react";

function PerformanceReport() {
    return (
        <div className="rounded-xl border border-slate-200 bg-white p-5">

            <div className="flex items-center justify-between">

                <h2 className="text-sm font-semibold">
                    Performance Overview
                </h2>

                <button className="rounded-lg border border-slate-200 px-2.5 py-1.5 text-[10px]">
                    This Month
                </button>

            </div>

            <div className="mt-5 flex items-center justify-between">

                <div>
                    <p className="text-3xl font-bold text-violet-600">
                        4.2
                        <span className="text-sm text-slate-400">
                            {" "}
                            / 5
                        </span>
                    </p>

                    <p className="mt-1 text-[10px] text-slate-500">
                        Average Score
                    </p>

                    <p className="mt-1 text-[9px] text-green-600">
                        ↑ 0.3 vs last month
                    </p>
                </div>

                <div className="flex h-24 w-36 items-end gap-2">

                    {[45, 60, 52, 67, 62, 78].map(
                        (height, index) => (
                            <div
                                key={index}
                                className="flex-1 rounded-t bg-violet-200"
                                style={{ height: `${height}%` }}
                            />
                        )
                    )}

                </div>

            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">

                <div className="rounded-lg bg-orange-50 p-3">

                    <Star
                        size={18}
                        className="text-orange-500"
                    />

                    <p className="mt-2 text-lg font-bold">
                        46
                    </p>

                    <p className="text-[9px] text-slate-500">
                        High Performers
                    </p>

                </div>

                <div className="rounded-lg bg-green-50 p-3">

                    <Target
                        size={18}
                        className="text-green-600"
                    />

                    <p className="mt-2 text-lg font-bold">
                        72%
                    </p>

                    <p className="text-[9px] text-slate-500">
                        Goals Achieved
                    </p>

                </div>

            </div>

            <button className="mt-4 w-full rounded-lg border border-slate-200 py-2 text-xs font-medium text-violet-600">
                View Performance Report →
            </button>

        </div>
    );
}

export default PerformanceReport;