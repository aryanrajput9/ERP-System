import React from "react";
import { ChevronDown } from "lucide-react";
import PerformanceDistribution from "./PerformanceDistribution";
import ScoreTrend from "./ScoreTrend";


function PerformanceOverview() {
    return (
        <div className="rounded-xl border border-slate-200 bg-white p-5">

            <div className="flex items-center justify-between border-b border-slate-100 pb-4">

                <div>
                    <h2 className="text-sm font-semibold text-slate-900">
                        Performance Overview
                    </h2>
                </div>

                <button className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-600">
                    This Cycle
                    <ChevronDown size={14} />
                </button>

            </div>

            <div className="grid grid-cols-1 gap-6 pt-5 lg:grid-cols-[0.9fr_1.2fr]">

                <PerformanceDistribution />

                <ScoreTrend />

            </div>

        </div>
    );
}

export default PerformanceOverview;