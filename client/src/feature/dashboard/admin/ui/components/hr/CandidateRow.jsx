import React from "react";
import {
    Eye,
    MoreVertical,
} from "lucide-react";

const stageStyles = {
    Applied:
        "bg-blue-50 text-blue-600 border-blue-200",

    Shortlisted:
        "bg-green-50 text-green-600 border-green-200",

    Interview:
        "bg-orange-50 text-orange-500 border-orange-200",

    Rejected:
        "bg-red-50 text-red-500 border-red-200",
};

function CandidateRow({ candidate }) {
    return (
        <tr className="border-b border-slate-100 transition hover:bg-slate-50">

            <td className="px-5 py-4">
                <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 text-xs font-semibold text-violet-600">
                        {candidate.avatar}
                    </div>

                    <div>
                        <p className="text-sm font-semibold text-slate-800">
                            {candidate.name}
                        </p>

                        <p className="mt-0.5 text-xs text-slate-500">
                            {candidate.email}
                        </p>
                    </div>

                </div>
            </td>

            <td className="px-4 py-4 text-sm text-slate-700">
                {candidate.position}
            </td>

            <td className="px-4 py-4 text-sm text-slate-500">
                {candidate.date}
            </td>

            <td className="px-4 py-4">
                <span
                    className={`rounded-md border px-3 py-1.5 text-xs font-medium ${stageStyles[candidate.stage]}`}
                >
                    {candidate.stage}
                </span>
            </td>

            <td className="px-4 py-4">
                <div className="flex items-center gap-2">

                    <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50">
                        <Eye size={16} />
                    </button>

                    <button className="text-slate-400">
                        <MoreVertical size={18} />
                    </button>

                </div>
            </td>

        </tr>
    );
}

export default CandidateRow;