import React from "react";

function LeaveOverview() {
    return (
        <div className="rounded-xl border border-slate-200 bg-white p-5">

            <h2 className="text-sm font-semibold text-slate-900">
                Leave Overview
            </h2>

            <div className="mt-5 flex items-center gap-4">

                <div className="relative h-28 w-28 shrink-0">

                    <div
                        className="h-full w-full rounded-full"
                        style={{
                            background:
                                "conic-gradient(#22c55e 0deg 252deg, #fb923c 252deg 322deg, #3b82f6 322deg 360deg)",
                        }}
                    />

                    <div className="absolute inset-[20px] flex flex-col items-center justify-center rounded-full bg-white">

                        <span className="text-xl font-bold">
                            124
                        </span>

                        <span className="text-[9px] text-slate-500">
                            Total Leaves
                        </span>

                    </div>

                </div>

                <div className="space-y-3">

                    <p className="text-[10px]">
                        <span className="mr-2 inline-block h-2 w-2 rounded-full bg-green-500" />
                        Approved
                        <span className="ml-2 font-medium">
                            87
                        </span>
                    </p>

                    <p className="text-[10px]">
                        <span className="mr-2 inline-block h-2 w-2 rounded-full bg-orange-400" />
                        Pending
                        <span className="ml-2 font-medium">
                            24
                        </span>
                    </p>

                    <p className="text-[10px]">
                        <span className="mr-2 inline-block h-2 w-2 rounded-full bg-blue-500" />
                        Rejected
                        <span className="ml-2 font-medium">
                            13
                        </span>
                    </p>

                </div>

            </div>

            <button className="mt-5 w-full rounded-lg border border-slate-200 py-2 text-xs font-medium text-violet-600">
                View Leave Report →
            </button>

        </div>
    );
}

export default LeaveOverview;