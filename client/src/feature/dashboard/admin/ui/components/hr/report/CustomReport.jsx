import React from "react";
import {
    BarChart3,
    Plus,
} from "lucide-react";

function CustomReport() {
    return (
        <div className="rounded-xl border border-slate-200 bg-white p-5">

            <h2 className="text-sm font-semibold">
                Custom Report
            </h2>

            <p className="mt-2 text-xs leading-5 text-slate-500">
                Create custom reports with specific filters and date ranges.
            </p>

            <div className="mt-5 flex items-center justify-center rounded-xl bg-violet-50 p-5">

                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-violet-600 shadow-sm">
                    <BarChart3 size={25} />
                </div>

            </div>

            <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-violet-200 py-2.5 text-xs font-medium text-violet-600 hover:bg-violet-50">

                <Plus size={15} />

                Create Custom Report

            </button>

        </div>
    );
}

export default CustomReport;