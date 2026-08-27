import React from "react";

const departments = [
    {
        name: "Engineering",
        percentage: "40.5%",
        amount: "₹50,55,000",
        color: "bg-violet-500",
    },
    {
        name: "Sales",
        percentage: "22.8%",
        amount: "₹28,45,000",
        color: "bg-blue-500",
    },
    {
        name: "Marketing",
        percentage: "15.2%",
        amount: "₹18,95,000",
        color: "bg-green-500",
    },
    {
        name: "HR",
        percentage: "12.1%",
        amount: "₹15,10,000",
        color: "bg-orange-400",
    },
    {
        name: "Finance",
        percentage: "9.4%",
        amount: "₹11,75,000",
        color: "bg-red-400",
    },
];

function PayrollByDepartment() {
    return (
        <div className="rounded-xl border border-slate-200 bg-white p-5">

            <h2 className="text-sm font-semibold">
                Payroll by Department
            </h2>

            <div className="mt-5 flex items-center gap-5">

                <div className="relative h-32 w-32 shrink-0">

                    <div
                        className="h-full w-full rounded-full"
                        style={{
                            background:
                                "conic-gradient(#8b5cf6 0deg 146deg, #3b82f6 146deg 228deg, #22c55e 228deg 283deg, #fb923c 283deg 327deg, #ef4444 327deg 360deg)",
                        }}
                    />

                    <div className="absolute inset-[25px] rounded-full bg-white" />

                </div>

                <div className="flex-1 space-y-2.5">

                    {departments.map((item) => (
                        <div
                            key={item.name}
                            className="flex items-center justify-between"
                        >

                            <div className="flex items-center gap-2">

                                <span
                                    className={`h-2 w-2 rounded-full ${item.color}`}
                                />

                                <span className="text-[9px] text-slate-600">
                                    {item.name}
                                </span>

                            </div>

                            <span className="text-[9px] text-slate-500">
                                {item.percentage}
                            </span>

                            <span className="text-[9px] font-medium">
                                {item.amount}
                            </span>

                        </div>
                    ))}

                </div>

            </div>

        </div>
    );
}

export default PayrollByDepartment;