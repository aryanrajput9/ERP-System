import React from "react";
import { Plus } from "lucide-react";

function RecruitmentHeader() {
    return (
        <div className="flex items-center justify-between">
            <div>
                <h1 className="text-2xl font-bold text-slate-900">
                    Recruitment
                </h1>

                <p className="mt-1 text-sm text-slate-500">
                    Manage jobs, candidates and hiring process
                </p>
            </div>

            <button className="flex items-center gap-2 rounded-lg bg-violet-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-violet-700">
                <Plus size={18} />
                Post New Job
            </button>
        </div>
    );
}

export default RecruitmentHeader;