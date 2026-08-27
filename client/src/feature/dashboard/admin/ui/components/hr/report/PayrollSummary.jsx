import React from "react";

function PayrollSummary() {
    return (
        <div className="rounded-xl border border-slate-200 bg-white p-5">

            <div className="flex items-center justify-between">

                <h2 className="text-sm font-semibold">
                    Payroll Summary
                </h2>

                <button className="rounded-lg border border-slate-200 px-2.5 py-1.5 text-[10px]">
                    This Month
                </button>

            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">

                <div className="rounded-lg bg-slate-50 p-3">

                    <p className="text-[9px] text-slate-500">
                        Total Payroll
                    </p>

                    <p className="mt-1 text-lg font-bold">
                        ₹1,24,80,000
                    </p>

                    <p className="mt-1 text-[9px] text-green-600">
                        ↑ 7.2% last month
                    </p>

                </div>

                <div className="rounded-lg bg-slate-50 p-3">

                    <p className="text-[9px] text-slate-500">
                        Total Deductions
                    </p>

                    <p className="mt-1 text-sm font-bold">
                        ₹18,75,000
                    </p>

                </div>

                <div className="rounded-lg bg-slate-50 p-3">

                    <p className="text-[9px] text-slate-500">
                        Net Payroll
                    </p>

                    <p className="mt-1 text-sm font-bold">
                        ₹1,06,05,000
                    </p>

                </div>

                <div className="rounded-lg bg-slate-50 p-3">

                    <p className="text-[9px] text-slate-500">
                        Employees Paid
                    </p>

                    <p className="mt-1 text-sm font-bold">
                        230
                    </p>

                </div>

            </div>

            <button className="mt-5 w-full rounded-lg border border-slate-200 py-2 text-xs font-medium text-violet-600">
                View Payroll Report →
            </button>

        </div>
    );
}

export default PayrollSummary;