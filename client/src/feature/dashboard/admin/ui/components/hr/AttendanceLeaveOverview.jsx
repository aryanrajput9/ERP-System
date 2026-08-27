import { useSelector } from "react-redux";

const leaveColors = {
    Sick: "#ff4778",
    Casual: "#2196f3",
    Earned: "#8b3dff",
    Other: "#8993a7",
};

function AttendanceLeaveOverview() {
    const { allAttendanceHistory, allLeave } = useSelector(
        (state) => state.admin
    );

    // ================= ATTENDANCE DATA =================

    const attendanceData =
        allAttendanceHistory?.map((item) => ({
            date: item.date,

            day: new Date(item.date).toLocaleDateString("en-US", {
                weekday: "short",
            }),

            percentage: item.percentage,
        })) || [];


    // ================= LEAVE DATA =================

    const approvedLeaves =
        allLeave?.filter((item) => item.status === "Approved") || [];

    const leaveMap = {};

    approvedLeaves.forEach((item) => {
        const type = item.leaveType || "Other";

        if (!leaveMap[type]) {
            leaveMap[type] = 0;
        }

        leaveMap[type] += item.totalDays || 0;
    });

    const totalLeaves = Object.values(leaveMap).reduce(
        (total, value) => total + value,
        0
    );

    const leaveData = Object.entries(leaveMap).map(
        ([name, value]) => ({
            name: `${name} Leave`,
            value,
            percentage: totalLeaves
                ? `${((value / totalLeaves) * 100).toFixed(1)}%`
                : "0%",
            color: leaveColors[name] || leaveColors.Other,
        })
    );


    return (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">

            {/* ================= ATTENDANCE ================= */}

            <div className="rounded-2xl border border-slate-800 bg-[#101622] p-4 shadow-lg">

                {/* Header */}
                <div className="mb-5 flex items-center justify-between">

                    <h2 className="text-[15px] font-semibold text-white">
                        Attendance Overview
                    </h2>

                    <button className="flex items-center gap-2 rounded-lg border border-slate-800 bg-[#111925] px-3 py-2 text-xs text-slate-300 hover:bg-slate-800">

                        This Week

                        <svg
                            className="h-3 w-3"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                clipRule="evenodd"
                            />
                        </svg>

                    </button>
                </div>


                {/* Chart */}
                <div className="relative flex h-[190px]">

                    {/* Y Axis */}
                    <div className="flex w-10 shrink-0 flex-col justify-between pb-6 text-[10px] text-slate-400">
                        <span>100%</span>
                        <span>75%</span>
                        <span>50%</span>
                        <span>25%</span>
                        <span>0%</span>
                    </div>


                    {/* Scroll Area */}
                    <div className="relative flex-1 overflow-x-auto border-b border-slate-800">

                        <div className="relative flex h-full min-w-[500px] items-end gap-4">

                            {/* Horizontal Lines */}
                            <div className="pointer-events-none absolute inset-0 flex flex-col justify-between">

                                <div className="border-t border-slate-800/70" />
                                <div className="border-t border-slate-800/70" />
                                <div className="border-t border-slate-800/70" />
                                <div className="border-t border-slate-800/70" />
                                <div className="border-t border-slate-800/70" />

                            </div>


                            {/* Bars */}

                            {attendanceData.length > 0 ? (

                                attendanceData.map((item, index) => (

                                    <div
                                        key={`${item.date}-${index}`}
                                        className="relative z-10 flex h-full min-w-[40px] flex-1 flex-col items-center justify-end"
                                    >

                                        {/* Percentage */}
                                        <span className="mb-1 text-[11px] font-semibold text-slate-200">
                                            {item.percentage}%
                                        </span>


                                        {/* Bar */}
                                        <div
                                            className="w-6 rounded-t-[5px] bg-gradient-to-t from-emerald-600/40 to-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.12)] transition-all duration-300 hover:from-emerald-500/60 hover:to-emerald-300"
                                            style={{
                                                height: `${item.percentage * 0.85}px`,
                                            }}
                                        />


                                        {/* Day */}
                                        <span className="mt-2 text-[10px] text-slate-400">
                                            {item.day}
                                        </span>

                                    </div>

                                ))

                            ) : (

                                <div className="absolute inset-0 flex items-center justify-center">
                                    <p className="text-xs text-slate-500">
                                        No attendance data available
                                    </p>
                                </div>

                            )}

                        </div>

                    </div>

                </div>

            </div>


            {/* ================= LEAVE SUMMARY ================= */}

            <div className="rounded-2xl border border-slate-800 bg-[#101622] p-4 shadow-lg">

                {/* Header */}
                <div className="mb-4 flex items-center justify-between">

                    <h2 className="text-[15px] font-semibold text-white">
                        Leave Summary
                    </h2>

                    <button className="flex items-center gap-2 rounded-lg border border-slate-800 bg-[#111925] px-3 py-2 text-xs text-slate-300 hover:bg-slate-800">

                        This Month

                        <svg
                            className="h-3 w-3"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25-4.5a.75.75 0 011.08 1.04l4.25 4.5a.75.75 0 01-.02 1.06z"
                                clipRule="evenodd"
                            />
                        </svg>

                    </button>

                </div>


                {/* Content */}
                <div className="flex min-h-[180px] items-center justify-center gap-8">

                    {/* Donut */}
                    <div className="relative h-[145px] w-[145px] shrink-0">

                        <div
                            className="h-full w-full rounded-full"
                            style={{
                                background: "conic-gradient(#ff4778 0deg 180deg, #2196f3 180deg 270deg, #8b3dff 270deg 330deg, #8993a7 330deg 360deg)",
                            }}
                        />

                        <div className="absolute inset-[28px] flex flex-col items-center justify-center rounded-full bg-[#101622]">

                            <span className="text-xl font-bold text-white">
                                {totalLeaves}
                            </span>

                            <span className="text-[10px] text-slate-400">
                                Total Leaves
                            </span>

                        </div>

                    </div>


                    {/* Legend */}
                    <div className="space-y-4">

                        {leaveData.length > 0 ? (

                            leaveData.map((item) => (

                                <div
                                    key={item.name}
                                    className="flex min-w-[190px] items-center justify-between gap-5"
                                >

                                    <div className="flex items-center gap-2">

                                        <span
                                            className="h-2 w-2 rounded-full"
                                            style={{
                                                backgroundColor: item.color,
                                            }}
                                        />

                                        <span className="text-xs text-slate-300">
                                            {item.name}
                                        </span>

                                    </div>

                                    <span className="text-xs text-slate-300">
                                        {item.value} ({item.percentage})
                                    </span>

                                </div>

                            ))

                        ) : (

                            <p className="text-xs text-slate-500">
                                No leave data available
                            </p>

                        )}

                    </div>

                </div>

            </div>

        </div>
    );
}

export default AttendanceLeaveOverview;