import React from "react";
import { Plus } from "lucide-react";

function PerformanceHeader() {
    return (
        <div className="flex items-center justify-between">

            <div>
                <h1 className="text-2xl font-bold text-slate-900">
                    Performance
                </h1>

                <p className="mt-1 text-sm text-slate-500">
                    Track, review and improve employee performance
                </p>
            </div>

            <button className="flex items-center gap-2 rounded-lg bg-violet-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-violet-700">
                <Plus size={17} />
                Create Review Cycle
            </button>

        </div>
    );
}

export default PerformanceHeader;