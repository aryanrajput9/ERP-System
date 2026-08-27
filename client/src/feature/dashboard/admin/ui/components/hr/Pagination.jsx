import React from "react";
import {
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

function Pagination() {
    return (
        <div className="flex items-center justify-between px-5 py-4">

            <p className="text-[11px] text-slate-500">
                Showing 1 to 8 of 12 departments
            </p>

            <div className="flex items-center gap-2">

                <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-400">
                    <ChevronLeft size={15} />
                </button>

                <button className="h-8 w-8 rounded-lg bg-violet-600 text-xs text-white">
                    1
                </button>

                <button className="h-8 w-8 rounded-lg border border-slate-200 text-xs text-slate-600">
                    2
                </button>

                <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-500">
                    <ChevronRight size={15} />
                </button>

            </div>

        </div>
    );
}

export default Pagination;