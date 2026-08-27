import React from "react";
import { ChevronDown } from "lucide-react";

const departments = [
    { name: "Engineering", approved: 18, pending: 6, rejected: 3 },
    { name: "Marketing", approved: 14, pending: 5, rejected: 2 },
    { name: "Sales", approved: 12, pending: 4, rejected: 1 },
    { name: "HR", approved: 8, pending: 3, rejected: 1 },
    { name: "Finance", approved: 6, pending: 2, rejected: 1 },
];

function LeaveAnalysis() {
    return (
        <div className="rounded-xl border border-slate-200 bg-white p-5">

            <div className="flex items-center justify-between">

                <h2 className="text-sm font-semibold">
                    Leave Analysis
                </h2>

                <button className="flex items-center gap-1 rounded-lg border border-slate-200 px-2.5 py-1.5 text-[10px]">
                    This Month
                    <ChevronDown size={11} />
                </button>

            </div>

            <div className="mt-6 space-y-4">

                {departments.map((item) => {

                    const total =
                        item.approved +
                        item.pending +
                        item.rejected;

                    const approvedWidth =
                        (item.approved / total) * 100;

                    const pendingWidth =
                        (item.pending / total) * 100;

                    return (
                        <div key={item.name}>

                            <div className="mb-1 flex justify-between">
                                <span className="text-[10px] text-slate-600">
                                    {item.name}
                                </span>

                                <span className="text-[10px] font-medium">
                                    {total}
                                </span>
                            </div>

                            <div className="flex h-2 overflow-hidden rounded-full">

                                <div
                                    className="bg-green-500"
                                    style={{
                                        width: `${approvedWidth}%`,
                                    }}
                                />

                                <div
                                    className="bg-orange-400"
                                    style={{
                                        width: `${pendingWidth}%`,
                                    }}
                                />

                                <div className="flex-1 bg-blue-500" />

                            </div>

                        </div>
                    );
                })}

            </div>

            <div className="mt-5 flex justify-center gap-4 text-[9px] text-slate-500">

                <span>
                    <i className="mr-1 inline-block h-2 w-2 rounded-full bg-green-500" />
                    Approved
                </span>

                <span>
                    <i className="mr-1 inline-block h-2 w-2 rounded-full bg-orange-400" />
                    Pending
                </span>

                <span>
                    <i className="mr-1 inline-block h-2 w-2 rounded-full bg-blue-500" />
                    Rejected
                </span>

            </div>

        </div>
    );
}

export default LeaveAnalysis;