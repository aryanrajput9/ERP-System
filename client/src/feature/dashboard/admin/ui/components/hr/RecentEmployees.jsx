import React from "react";
import { useSelector } from "react-redux";
import Spinner from "../../../../../../shared/ui/components/Spinner";

const employees = [
    {
        id: "EMP0012",
        name: "Rohit Sharma",
        position: "Frontend Developer",
        department: "Engineering",
        joinDate: "18 Aug 2026",
        avatar: "https://i.pravatar.cc/100?img=12",
    },
    {
        id: "EMP0013",
        name: "Priya Patel",
        position: "UI/UX Designer",
        department: "Design",
        joinDate: "16 Aug 2026",
        avatar: "https://i.pravatar.cc/100?img=47",
    },
    {
        id: "EMP0014",
        name: "Amit Kumar",
        position: "SEO Specialist",
        department: "Marketing",
        joinDate: "14 Aug 2026",
        avatar: "https://i.pravatar.cc/100?img=11",
    },
    {
        id: "EMP0015",
        name: "Sneha Reddy",
        position: "HR Executive",
        department: "HR",
        joinDate: "12 Aug 2026",
        avatar: "https://i.pravatar.cc/100?img=44",
    },
    {
        id: "EMP0016",
        name: "Vikram Singh",
        position: "Backend Developer",
        department: "Engineering",
        joinDate: "10 Aug 2026",
        avatar: "https://i.pravatar.cc/100?img=13",
    },
];

const departmentStyles = {
    Engineering: "bg-blue-500/15 text-blue-400",
    Design: "bg-purple-500/15 text-purple-400",
    Marketing: "bg-orange-500/15 text-orange-400",
    HR: "bg-pink-500/15 text-pink-400",
};

function RecentEmployees() {

    const { allEmploye, allEmployeLoading } = useSelector((state) => state.admin);

    if (allEmployeLoading) {
        return <Spinner />
    }

    return (
        <div className="w-full overflow-hidden rounded-2xl border border-slate-800 bg-[#101622] shadow-lg">

            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4">

                <div className="flex items-center gap-2">
                    <svg
                        className="h-5 w-5 text-slate-300"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                    >
                        <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 00-3-3.87" />
                        <path d="M16 3.13a4 4 0 010 7.75" />
                    </svg>

                    <h2 className="text-sm font-semibold text-white">
                        Recent Employees
                    </h2>
                </div>

                <div className="flex items-center gap-5">

                    <button className="hidden items-center gap-1 text-xs font-medium text-emerald-400 transition hover:text-emerald-300 sm:flex">
                        View All

                        <span className="text-base">
                            →
                        </span>
                    </button>

                    <button className="flex items-center gap-2 rounded-lg bg-emerald-400 px-3 py-2 text-xs font-semibold text-slate-950 transition hover:bg-emerald-300">
                        <span className="text-base leading-none">
                            +
                        </span>

                        Add Employee
                    </button>
                </div>
            </div>


            {/* Table */}
            <div className="overflow-x-auto">

                <div className="min-w-[750px]">

                    {/* Table Header */}
                    <div className="grid grid-cols-[2fr_1.1fr_1.5fr_1fr_0.8fr_30px] items-center bg-[#111925] px-4 py-2.5 text-[10px] font-medium text-slate-400">

                        <span>Employee</span>
                        <span>Department</span>
                        <span>Position</span>
                        <span>Join Date</span>
                        <span>Status</span>
                        <span></span>

                    </div>


                    {/* Employee Rows */}
                    {allEmploye.map((employee) => (
                        <div
                            key={employee.id}
                            className="grid grid-cols-[2fr_1.1fr_1.5fr_1fr_0.8fr_30px] items-center border-t border-slate-800/70 px-4 py-2.5 transition hover:bg-slate-800/20"
                        >

                            {/* Employee */}
                            <div className="flex items-center gap-3">

                                <img
                                    src={employee.profileImage}
                                    alt={employee.name}
                                    className="h-8 w-8 rounded-full object-cover ring-1 ring-slate-700"
                                />

                                <div>
                                    <p className="text-xs font-medium text-white">
                                        {employee.name}
                                    </p>

                                    <p className="text-[10px] text-slate-500 line-clamp-1">
                                        {employee.employeeId}
                                    </p>
                                </div>

                            </div>


                            {/* Department */}
                            <div>
                                <span
                                    className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-medium ${departmentStyles[employee.department]
                                        }`}
                                >
                                    {employee.department}
                                </span>
                            </div>


                            <span className="text-[11px] text-slate-300">
                                {employee.position || "Not assign"}
                            </span>


                            {/* Join Date */}
                            <span className="text-[11px] text-slate-300">
                                {new Date(employee.joiningDate).toLocaleDateString("en-IN", {
                                    day: "2-digit",
                                    month: "short",
                                    year: "numeric"
                                })}
                            </span>


                            {/* Status */}
                            <div>
                                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] font-medium text-emerald-400">

                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                                    {employee.isActive}

                                </span>
                            </div>


                            {/* More */}
                            <button className="flex h-7 w-7 items-center justify-center rounded-md text-lg text-slate-500 transition hover:bg-slate-800 hover:text-white">
                                ⋮
                            </button>

                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}

export default RecentEmployees;