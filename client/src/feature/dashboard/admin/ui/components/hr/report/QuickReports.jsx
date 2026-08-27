import React from "react";
import {
    CalendarDays,
    ClipboardList,
    WalletCards,
    Users,
    Target,
    ChevronRight,
} from "lucide-react";

const reports = [
    {
        title: "Attendance Report",
        icon: CalendarDays,
        bg: "bg-green-50",
        color: "text-green-600",
    },
    {
        title: "Leave Report",
        icon: ClipboardList,
        bg: "bg-orange-50",
        color: "text-orange-500",
    },
    {
        title: "Payroll Report",
        icon: WalletCards,
        bg: "bg-blue-50",
        color: "text-blue-600",
    },
    {
        title: "Recruitment Report",
        icon: Users,
        bg: "bg-violet-50",
        color: "text-violet-600",
    },
    {
        title: "Performance Report",
        icon: Target,
        bg: "bg-orange-50",
        color: "text-orange-500",
    },
];

function QuickReports() {
    return (
        <div className="rounded-xl border border-slate-200 bg-white p-5">

            <h2 className="text-sm font-semibold">
                Quick Reports
            </h2>

            <div className="mt-4 space-y-2">

                {reports.map((report) => {
                    const Icon = report.icon;

                    return (
                        <button
                            key={report.title}
                            className="flex w-full items-center gap-3 rounded-lg border border-slate-100 p-2.5 text-left hover:bg-slate-50"
                        >

                            <div
                                className={`flex h-8 w-8 items-center justify-center rounded-lg ${report.bg} ${report.color}`}
                            >
                                <Icon size={15} />
                            </div>

                            <span className="flex-1 text-[10px] font-medium text-slate-700">
                                {report.title}
                            </span>

                            <ChevronRight
                                size={14}
                                className="text-slate-400"
                            />

                        </button>
                    );
                })}

            </div>

        </div>
    );
}

export default QuickReports;