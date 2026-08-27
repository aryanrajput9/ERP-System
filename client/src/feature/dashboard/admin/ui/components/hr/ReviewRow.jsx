import React from "react";
import { Eye } from "lucide-react";

const stageStyles = {
    "Self Evaluation":
        "bg-violet-50 text-violet-600 border-violet-200",

    "Manager Review":
        "bg-blue-50 text-blue-600 border-blue-200",

    Calibration:
        "bg-orange-50 text-orange-500 border-orange-200",
};

function ReviewRow({ review }) {
    return (
        <tr className="border-b border-slate-100">

            <td className="px-4 py-3">
                <div className="flex items-center gap-2.5">

                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-100 text-[10px] font-semibold text-violet-600">
                        {review.avatar}
                    </div>

                    <div>
                        <p className="text-xs font-semibold text-slate-800">
                            {review.name}
                        </p>

                        <p className="text-[9px] text-slate-400">
                            {review.id}
                        </p>
                    </div>

                </div>
            </td>

            <td className="px-3 py-3 text-[10px] text-slate-600">
                {review.department}
            </td>

            <td className="px-3 py-3">

                <span
                    className={`rounded-md border px-2 py-1 text-[9px] font-medium ${stageStyles[review.stage]}`}
                >
                    {review.stage}
                </span>

            </td>

            <td className="px-3 py-3">

                <div className="flex items-center gap-2">

                    <div className="h-1.5 w-16 rounded-full bg-slate-100">

                        <div
                            className="h-full rounded-full bg-violet-500"
                            style={{
                                width: `${review.progress}%`,
                            }}
                        />

                    </div>

                    <span className="text-[9px] text-slate-500">
                        {review.progress}%
                    </span>

                </div>

            </td>

            <td
                className={`px-3 py-3 text-[10px] ${review.overdue
                    ? "font-medium text-red-500"
                    : "text-slate-600"
                    }`}
            >
                {review.dueDate}
            </td>

            <td className="px-3 py-3">

                <button className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 text-slate-500">
                    <Eye size={14} />
                </button>

            </td>

        </tr>
    );
}

export default ReviewRow;