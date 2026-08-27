import React from "react";

function AttendanceOverview() {
    return (
        <div className="rounded-xl border border-slate-200 bg-white p-5">

            <h2 className="text-sm font-semibold text-slate-900">
                Attendance Overview
            </h2>

            <div className="mt-5 flex items-center justify-center gap-5">

                {/* Donut */}
                <div className="relative h-32 w-32 shrink-0">

                    <div
                        className="h-full w-full rounded-full"
                        style={{
                            background:
                                "conic-gradient(#22c55e 0deg 339deg, #fb923c 339deg 352deg, #ef4444 352deg 360deg)",
                        }}
                    />

                    <div className="absolute inset-[22px] flex flex-col items-center justify-center rounded-full bg-white">

                        <span className="text-xl font-bold text-slate-900">
                            94.2%
                        </span>

                        <span className="text-[9px] text-slate-500">
                            Attendance Rate
                        </span>

                    </div>

                </div>

                {/* Legend */}
                <div className="space-y-3">

                    <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-green-500" />
                        <span className="text-[10px] text-slate-600">
                            Present
                        </span>
                        <span className="text-[10px] font-medium">
                            1,982
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-orange-400" />
                        <span className="text-[10px] text-slate-600">
                            Late
                        </span>
                        <span className="text-[10px] font-medium">
                            78
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-red-500" />
                        <span className="text-[10px] text-slate-600">
                            Absent
                        </span>
                        <span className="text-[10px] font-medium">
                            45
                        </span>
                    </div>

                </div>

            </div>

            <div className="mt-5 rounded-lg bg-violet-50 p-3">

                <p className="text-[10px] text-slate-500">
                    Working Days
                </p>

                <p className="mt-1 text-sm font-bold text-slate-900">
                    21
                </p>

            </div>

        </div>
    );
}

export default AttendanceOverview;