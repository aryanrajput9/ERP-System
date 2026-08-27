import {
    CalendarDays,
    Download,
    Search,
    ChevronDown,
    UserCheck,
    UserX,
    CalendarOff,
} from "lucide-react";

function AllAttendance() {
    return (
        <div className="min-h-full bg-[#080f19] p-6 text-white">

            {/* Header */}
            <div className="mb-6 flex items-end justify-between">

                <div>
                    <p className="mb-2 text-xs text-emerald-400">
                        HR / Attendance
                    </p>

                    <h1 className="text-2xl font-bold">
                        Attendance Management
                    </h1>

                    <p className="mt-1 text-sm text-slate-400">
                        Monitor employee attendance and daily workforce status.
                    </p>
                </div>

                <div className="flex items-center gap-3">

                    <button className="flex items-center gap-2 rounded-lg border border-slate-800 bg-[#101622] px-4 py-2.5 text-xs text-slate-300">
                        <CalendarDays size={15} />
                        22 August 2026
                        <ChevronDown size={14} />
                    </button>

                    <button className="flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2.5 text-xs font-semibold text-slate-950">
                        <Download size={15} />
                        Export
                    </button>

                </div>
            </div>


            {/* Stats */}
            <div className="mb-5 grid grid-cols-4 gap-4">

                <div className="rounded-2xl border border-slate-800 bg-[#101622] p-5">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                        <UserCheck size={20} />
                    </div>

                    <p className="text-xs text-slate-500">
                        Total Employees
                    </p>

                    <h2 className="mt-2 text-2xl font-bold">
                        248
                    </h2>

                    <p className="mt-1 text-[10px] text-slate-500">
                        All employees
                    </p>
                </div>


                <div className="rounded-2xl border border-emerald-500/20 bg-[#101622] p-5">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                        <UserCheck size={20} />
                    </div>

                    <p className="text-xs text-slate-500">
                        Present Today
                    </p>

                    <h2 className="mt-2 text-2xl font-bold text-emerald-400">
                        214
                    </h2>

                    <p className="mt-1 text-[10px] text-emerald-400">
                        86.3% attendance
                    </p>
                </div>


                <div className="rounded-2xl border border-red-500/20 bg-[#101622] p-5">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                        <UserX size={20} />
                    </div>

                    <p className="text-xs text-slate-500">
                        Absent Today
                    </p>

                    <h2 className="mt-2 text-2xl font-bold text-red-400">
                        18
                    </h2>

                    <p className="mt-1 text-[10px] text-red-400">
                        7.3% of workforce
                    </p>
                </div>


                <div className="rounded-2xl border border-amber-500/20 bg-[#101622] p-5">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
                        <CalendarOff size={20} />
                    </div>

                    <p className="text-xs text-slate-500">
                        On Leave
                    </p>

                    <h2 className="mt-2 text-2xl font-bold text-amber-400">
                        16
                    </h2>

                    <p className="mt-1 text-[10px] text-amber-400">
                        6.4% of workforce
                    </p>
                </div>

            </div>


            {/* Attendance Overview + Trend */}
            <div className="mb-5 grid grid-cols-2 gap-5">

                {/* Attendance Overview */}
                <div className="rounded-2xl border border-slate-800 bg-[#101622] p-5">

                    <div className="mb-6 flex items-center justify-between">

                        <div>
                            <h2 className="text-sm font-semibold">
                                Attendance Overview
                            </h2>

                            <p className="mt-1 text-[10px] text-slate-500">
                                Today's workforce distribution
                            </p>
                        </div>

                        <button className="flex items-center gap-2 rounded-lg border border-slate-800 bg-[#0c1420] px-3 py-2 text-xs text-slate-400">
                            Today
                            <ChevronDown size={13} />
                        </button>

                    </div>


                    <div className="flex items-center justify-center gap-10">

                        {/* Donut */}
                        <div
                            className="relative h-44 w-44 rounded-full"
                            style={{
                                background:
                                    "conic-gradient(#34d399 0deg 310deg, #f87171 310deg 337deg, #fbbf24 337deg 360deg)",
                            }}
                        >

                            <div className="absolute inset-8 flex flex-col items-center justify-center rounded-full bg-[#101622]">

                                <span className="text-2xl font-bold">
                                    86.3%
                                </span>

                                <span className="mt-1 text-[10px] text-slate-500">
                                    Present
                                </span>

                            </div>

                        </div>


                        {/* Legend */}
                        <div className="w-44 space-y-5">

                            <div className="flex items-center justify-between">
                                <span className="flex items-center gap-2 text-xs text-slate-400">
                                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                                    Present
                                </span>

                                <span className="text-xs">
                                    214
                                </span>
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="flex items-center gap-2 text-xs text-slate-400">
                                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                                    Absent
                                </span>

                                <span className="text-xs">
                                    18
                                </span>
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="flex items-center gap-2 text-xs text-slate-400">
                                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                                    On Leave
                                </span>

                                <span className="text-xs">
                                    16
                                </span>
                            </div>

                        </div>

                    </div>

                </div>


                {/* Attendance Trend */}
                <div className="rounded-2xl border border-slate-800 bg-[#101622] p-5">

                    <div className="flex items-center justify-between">

                        <div>
                            <h2 className="text-sm font-semibold">
                                Attendance Trend
                            </h2>

                            <p className="mt-1 text-[10px] text-slate-500">
                                Last 7 days
                            </p>
                        </div>

                        <span className="text-sm font-semibold text-emerald-400">
                            86.3%
                        </span>

                    </div>


                    <div className="mt-8 flex h-40 items-end gap-4 border-b border-slate-800 px-3">

                        <div className="h-[68%] flex-1 rounded-t-lg bg-emerald-500/30" />
                        <div className="h-[74%] flex-1 rounded-t-lg bg-emerald-500/40" />
                        <div className="h-[71%] flex-1 rounded-t-lg bg-emerald-500/50" />
                        <div className="h-[79%] flex-1 rounded-t-lg bg-emerald-500/60" />
                        <div className="h-[77%] flex-1 rounded-t-lg bg-emerald-500/70" />
                        <div className="h-[83%] flex-1 rounded-t-lg bg-emerald-500/80" />
                        <div className="h-[86%] flex-1 rounded-t-lg bg-emerald-400" />

                    </div>


                    <div className="mt-3 flex justify-between text-[9px] text-slate-600">

                        <span>16 Aug</span>
                        <span>17 Aug</span>
                        <span>18 Aug</span>
                        <span>19 Aug</span>
                        <span>20 Aug</span>
                        <span>21 Aug</span>
                        <span>22 Aug</span>

                    </div>

                </div>

            </div>


            {/* Today's Attendance */}
            <div className="rounded-2xl border border-slate-800 bg-[#101622] p-5">

                <div className="mb-5 flex items-center justify-between">

                    <div>
                        <h2 className="text-sm font-semibold">
                            Today's Attendance
                        </h2>

                        <p className="mt-1 text-[10px] text-slate-500">
                            Employee attendance overview
                        </p>
                    </div>

                    <div className="relative">

                        <Search
                            size={14}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600"
                        />

                        <input
                            type="text"
                            placeholder="Search employee..."
                            className="h-9 w-52 rounded-lg border border-slate-800 bg-[#0c1420] pl-9 pr-3 text-[10px] text-white outline-none placeholder:text-slate-600"
                        />

                    </div>

                </div>


                <div className="overflow-hidden rounded-xl border border-slate-800">

                    <table className="w-full text-left">

                        <thead className="bg-[#0c1420]">

                            <tr>

                                <th className="px-5 py-3 text-[10px] font-medium text-slate-500">
                                    EMPLOYEE
                                </th>

                                <th className="px-5 py-3 text-[10px] font-medium text-slate-500">
                                    DEPARTMENT
                                </th>

                                <th className="px-5 py-3 text-[10px] font-medium text-slate-500">
                                    CHECK IN
                                </th>

                                <th className="px-5 py-3 text-[10px] font-medium text-slate-500">
                                    CHECK OUT
                                </th>

                                <th className="px-5 py-3 text-[10px] font-medium text-slate-500">
                                    WORK HOURS
                                </th>

                                <th className="px-5 py-3 text-[10px] font-medium text-slate-500">
                                    STATUS
                                </th>

                            </tr>

                        </thead>


                        <tbody>

                            <tr className="border-t border-slate-800">

                                <td className="px-5 py-4 text-xs font-medium">
                                    Rohit Sharma
                                </td>

                                <td className="px-5 py-4 text-[10px] text-slate-400">
                                    Engineering
                                </td>

                                <td className="px-5 py-4 text-[10px] text-slate-400">
                                    09:04 AM
                                </td>

                                <td className="px-5 py-4 text-[10px] text-slate-400">
                                    —
                                </td>

                                <td className="px-5 py-4 text-[10px] text-slate-400">
                                    07h 42m
                                </td>

                                <td className="px-5 py-4">
                                    <span className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-[9px] text-emerald-400">
                                        Present
                                    </span>
                                </td>

                            </tr>


                            <tr className="border-t border-slate-800">

                                <td className="px-5 py-4 text-xs font-medium">
                                    Priya Verma
                                </td>

                                <td className="px-5 py-4 text-[10px] text-slate-400">
                                    Design
                                </td>

                                <td className="px-5 py-4 text-[10px] text-slate-400">
                                    09:18 AM
                                </td>

                                <td className="px-5 py-4 text-[10px] text-slate-400">
                                    —
                                </td>

                                <td className="px-5 py-4 text-[10px] text-slate-400">
                                    07h 28m
                                </td>

                                <td className="px-5 py-4">
                                    <span className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-[9px] text-emerald-400">
                                        Present
                                    </span>
                                </td>

                            </tr>


                            <tr className="border-t border-slate-800">

                                <td className="px-5 py-4 text-xs font-medium">
                                    Amit Kumar
                                </td>

                                <td className="px-5 py-4 text-[10px] text-slate-400">
                                    Marketing
                                </td>

                                <td className="px-5 py-4 text-[10px] text-slate-400">
                                    —
                                </td>

                                <td className="px-5 py-4 text-[10px] text-slate-400">
                                    —
                                </td>

                                <td className="px-5 py-4 text-[10px] text-slate-400">
                                    —
                                </td>

                                <td className="px-5 py-4">
                                    <span className="rounded-full bg-red-400/10 px-2.5 py-1 text-[9px] text-red-400">
                                        Absent
                                    </span>
                                </td>

                            </tr>


                            <tr className="border-t border-slate-800">

                                <td className="px-5 py-4 text-xs font-medium">
                                    Sneha Reddy
                                </td>

                                <td className="px-5 py-4 text-[10px] text-slate-400">
                                    HR
                                </td>

                                <td className="px-5 py-4 text-[10px] text-slate-400">
                                    —
                                </td>

                                <td className="px-5 py-4 text-[10px] text-slate-400">
                                    —
                                </td>

                                <td className="px-5 py-4 text-[10px] text-slate-400">
                                    —
                                </td>

                                <td className="px-5 py-4">
                                    <span className="rounded-full bg-amber-400/10 px-2.5 py-1 text-[9px] text-amber-400">
                                        On Leave
                                    </span>
                                </td>

                            </tr>

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    );
}

export default AllAttendance;