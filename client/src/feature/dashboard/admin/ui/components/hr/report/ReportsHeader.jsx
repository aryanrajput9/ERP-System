import React from "react";
import {
    CalendarDays,
    Download,
    ChevronDown,
} from "lucide-react";

function ReportsHeader() {
    return (
        <div className="flex flex-wrap items-center justify-between gap-4">

            <div>
                <h1 className="text-2xl font-bold text-slate-900">
                    Reports
                </h1>

                <p className="mt-1 text-sm text-slate-500">
                    Analytics and insights about your workforce
                </p>
            </div>

            <div className="flex items-center gap-3">

                <button className="flex h-10 items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 text-xs text-slate-600">
                    <CalendarDays size={15} />

                    01 May 2025 - 31 May 2025
                </button>

                <button className="flex h-10 items-center gap-2 rounded-lg bg-violet-600 px-4 text-xs font-medium text-white shadow-sm hover:bg-violet-700">

                    <Download size={15} />

                    Export Report

                    <ChevronDown size={14} />

                </button>

            </div>

        </div>
    );
}

export default ReportsHeader;