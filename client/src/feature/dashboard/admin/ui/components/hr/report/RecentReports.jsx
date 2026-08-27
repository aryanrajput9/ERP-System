import React from "react";
import {
    FileText,
    Download,
} from "lucide-react";

const recentReports = [
    {
        title: "Monthly Attendance Report",
        date: "Generated on 01 Jun 2025",
    },
    {
        title: "Leave Analysis Report",
        date: "Generated on 01 Jun 2025",
    },
    {
        title: "Payroll Summary Report",
        date: "Generated on 01 Jun 2025",
    },
    {
        title: "Recruitment Pipeline Report",
        date: "Generated on 31 May 2025",
    },
    {
        title: "Performance Summary Report",
        date: "Generated on 31 May 2025",
    },
];

function RecentReports() {
    return (
        <div className="rounded-xl border border-slate-200 bg-white p-5">

            <div className="flex items-center justify-between">

                <h2 className="text-sm font-semibold">
                    Recent Reports
                </h2>

                <button className="text-[10px] font-medium text-violet-600">
                    View All
                </button>

            </div>

            <div className="mt-4 space-y-3">

                {recentReports.map((report) => (
                    <div
                        key={report.title}
                        className="flex items-center gap-3"
                    >

                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
                            <FileText size={15} />
                        </div>

                        <div className="flex-1">

                            <p className="text-[10px] font-medium text-slate-700">
                                {report.title}
                            </p>

                            <p className="mt-0.5 text-[9px] text-slate-400">
                                {report.date}
                            </p>

                        </div>

                        <button className="text-slate-400">
                            <Download size={14} />
                        </button>

                    </div>
                ))}

            </div>

        </div>
    );
}

export default RecentReports;