import React from "react";

function EmployeeTurnover() {
    return (
        <div className="rounded-xl border border-slate-200 bg-white p-5">

            <div className="flex items-center justify-between">

                <h2 className="text-sm font-semibold">
                    Employee Turnover
                </h2>

                <button className="rounded-lg border border-slate-200 px-2.5 py-1.5 text-[10px]">
                    This Year
                </button>

            </div>

            <div className="mt-5 flex items-center gap-5">

                <div>

                    <p className="text-2xl font-bold">
                        8.6%
                    </p>

                    <p className="mt-1 text-[9px] text-slate-500">
                        Turnover Rate
                    </p>

                    <p className="mt-1 text-[9px] text-green-600">
                        ↓ 1.2% vs last year
                    </p>

                </div>

                <div className="flex-1">

                    <div className="flex h-20 items-end gap-2">

                        {[35, 48, 40, 60, 72, 52].map(
                            (height, index) => (
                                <div
                                    key={index}
                                    className="flex-1 rounded-t bg-green-400"
                                    style={{ height: `${height}%` }}
                                />
                            )
                        )}

                    </div>

                    <div className="mt-2 flex justify-between text-[8px] text-slate-400">
                        <span>Jan</span>
                        <span>Feb</span>
                        <span>Mar</span>
                        <span>Apr</span>
                        <span>May</span>
                        <span>Jun</span>
                    </div>

                </div>

            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">

                <div className="rounded-lg bg-green-50 p-3">
                    <p className="text-[9px] text-slate-500">
                        Joined
                    </p>

                    <p className="mt-1 text-lg font-bold text-green-600">
                        98
                    </p>
                </div>

                <div className="rounded-lg bg-red-50 p-3">
                    <p className="text-[9px] text-slate-500">
                        Exit
                    </p>

                    <p className="mt-1 text-lg font-bold text-red-500">
                        36
                    </p>
                </div>

            </div>

        </div>
    );
}

export default EmployeeTurnover;