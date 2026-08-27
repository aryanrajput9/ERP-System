import React from "react";
import {
    ChevronDown,
    Building2,
} from "lucide-react";

function AnnouncementFilter() {
    const tabs = [
        "All",
        "Published",
        "Scheduled",
        "Draft",
        "Archived",
    ];

    return (
        <div className="flex flex-wrap items-center justify-between gap-3">

            <div className="flex flex-wrap items-center gap-2">

                {tabs.map((tab, index) => (
                    <button
                        key={tab}
                        className={`rounded-lg border px-4 py-2 text-xs font-medium ${index === 0
                            ? "border-violet-600 bg-violet-600 text-white"
                            : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                            }`}
                    >
                        {tab}
                    </button>
                ))}

            </div>

            <div className="flex items-center gap-2">

                {/* Department */}
                <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-600">

                    <Building2 size={14} />

                    All Departments

                    <ChevronDown size={13} />

                </button>

                {/* Sort */}
                <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-600">

                    Sort by: Latest

                    <ChevronDown size={13} />

                </button>

            </div>

        </div>
    );
}

export default AnnouncementFilter;