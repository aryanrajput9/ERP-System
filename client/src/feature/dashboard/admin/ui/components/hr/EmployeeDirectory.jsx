import { useState } from "react";



const departmentStyles = {
    Engineering: "bg-blue-500/15 text-blue-400",
    Design: "bg-purple-500/15 text-purple-400",
    Marketing: "bg-orange-500/15 text-orange-400",
    HR: "bg-pink-500/15 text-pink-400",
    Finance: "bg-emerald-500/15 text-emerald-400",
    Support: "bg-cyan-500/15 text-cyan-400",
};

function EmployeeDirectory({ allEmploye }) {

    const [valueDe, setValueDe] = useState("");
    const [active, setActive] = useState("")


    const onSearch = allEmploye.filter((employee) => {

        const departmentMatch = valueDe === "" ? employee : employee.department === valueDe;
        const statusMatch = active === "" ? employee : employee.isActive === (active === "true");


        return departmentMatch && statusMatch
    })




    return (
        <div className="w-full rounded-2xl border border-slate-800 bg-[#101622] shadow-xl">

            {/* ================= HEADER ================= */}
            <div className="flex items-center justify-between px-5 py-4">

                <h2 className="text-sm font-semibold text-white">
                    All Employees
                </h2>

                <button
                    onClick={() => console.log("Export employees")}
                    className="flex items-center gap-2 rounded-lg bg-emerald-400 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-emerald-300"
                >
                    <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M12 3v12" />
                        <path d="m7 10 5 5 5-5" />
                        <path d="M5 21h14" />
                    </svg>

                    Export
                </button>
            </div>

            {/* ================= FILTERS ================= */}
            <div className="flex flex-wrap gap-3 px-5 pb-4">

                {/* Search */}
                <div className="relative min-w-[220px] flex-1">
                    <svg
                        className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                    >
                        <circle cx="11" cy="11" r="7" />
                        <path d="m20 20-4-4" />
                    </svg>

                    <input

                        placeholder="Search employee by name, ID or email..."
                        className="h-10 w-full rounded-lg border border-slate-800 bg-[#0d1420] pl-9 pr-3 text-xs text-white outline-none placeholder:text-slate-600 focus:border-emerald-400/50"
                    />
                </div>

                {/* Department */}
                <select
                    value={valueDe}
                    onChange={(e) => setValueDe(e.target.value)}
                    className="h-10 min-w-[145px] rounded-lg border border-slate-800 bg-[#0d1420] px-3 text-xs text-slate-300 outline-none focus:border-emerald-400/50"
                >
                    <option value="">All Departments</option>

                    {[...new Set(allEmploye.map((employee) => employee.department))]
                        .map((department) => (
                            <option
                                key={department}
                                value={department}
                            >
                                {department}
                            </option>
                        ))}
                </select>

                {/* Status */}
                <select
                    onChange={(e) => setActive(e.target.value)}
                    value={active}
                    className="h-10 min-w-[120px] rounded-lg border border-slate-800 bg-[#0d1420] px-3 text-xs text-slate-300 outline-none focus:border-emerald-400/50"
                >
                    <option value="">All Status</option>
                    <option value="true">Active</option>
                    <option value="false">Inactive</option>
                </select>

                {/* Filters */}
                <button className="flex h-10 items-center gap-2 rounded-lg border border-slate-800 bg-[#0d1420] px-4 text-xs text-slate-300 transition hover:border-slate-700 hover:text-white">
                    <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                    >
                        <path d="M4 6h16" />
                        <path d="M7 12h10" />
                        <path d="M10 18h4" />
                    </svg>

                    Filters
                </button>
            </div>

            {/* ================= TABLE ================= */}
            <div className="overflow-x-auto">

                <div className="min-w-[850px]">

                    {/* Table Head */}
                    <div className="grid grid-cols-[35px_2fr_1fr_1.4fr_1fr_0.8fr_90px] items-center bg-[#111925] px-5 py-3 text-[10px] font-medium text-slate-400">

                        <span>
                            <input
                                type="checkbox"
                                className="h-3.5 w-3.5 accent-emerald-400"
                            />
                        </span>

                        <span>Employee</span>
                        <span>Department</span>
                        <span>Designation</span>
                        <span>Join Date</span>
                        <span>Status</span>
                        <span>Actions</span>

                    </div>

                    {/* Rows */}
                    {onSearch.map((employee) => (
                        <div
                            key={employee.id}
                            className="grid grid-cols-[35px_2fr_1fr_1.4fr_1fr_0.8fr_90px] items-center border-t border-slate-800/70 px-5 py-3 transition hover:bg-slate-800/20"
                        >

                            {/* Checkbox */}
                            <div>
                                <input
                                    type="checkbox"
                                    className="h-3.5 w-3.5 accent-emerald-400"
                                />
                            </div>

                            {/* Employee */}
                            <div className="flex items-center gap-3">

                                <img
                                    src={employee.profileImage}
                                    alt={employee.name}
                                    className="h-9 w-9 shrink-0 rounded-full object-cover ring-1 ring-slate-700"
                                />

                                <div className="min-w-0">
                                    <p className="text-xs font-semibold text-white">
                                        {employee.name}
                                    </p>

                                    <p className="text-[9px] text-slate-500 line-clamp-1">
                                        {employee.employeeId}
                                    </p>

                                    <p className="truncate text-[9px] text-slate-500">
                                        {employee.email}
                                    </p>
                                </div>

                            </div>

                            {/* Department */}
                            <div>
                                <span
                                    className={`inline-flex rounded-full px-2.5 py-1 text-[9px] font-medium ${departmentStyles[
                                        employee.department
                                    ]
                                        }`}
                                >
                                    {employee.department}
                                </span>
                            </div>

                            {/* Designation */}
                            <span className="text-[10px] text-slate-300">
                                {employee.designation || "not assign"}
                            </span>

                            {/* Join Date */}
                            <span className="text-[10px] text-slate-300">
                                {new Date(employee.joiningDate).toLocaleDateString("en-IN", {
                                    day: "2-digit",
                                    month: 'short',
                                    year: "numeric"
                                })}
                            </span>

                            {/* Status */}
                            <div>
                                <span
                                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[9px] font-medium ${employee.status === "Active"
                                        ? "bg-emerald-500/10 text-emerald-400"
                                        : "bg-red-500/10 text-red-400"
                                        }`}
                                >
                                    <span
                                        className={`h-1.5 w-1.5 rounded-full ${employee.isActive
                                            ? "bg-emerald-400"
                                            : "bg-red-400"
                                            }`}
                                    />

                                    {employee.status}
                                </span>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center gap-1.5">

                                {/* View */}
                                <button
                                    title="View employee"
                                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#151d2b] text-slate-400 transition hover:bg-slate-800 hover:text-white"
                                >
                                    <svg
                                        className="h-4 w-4"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.7"
                                    >
                                        <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
                                        <circle cx="12" cy="12" r="2.5" />
                                    </svg>
                                </button>

                                {/* Edit */}
                                <button
                                    title="Edit employee"
                                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#151d2b] text-slate-400 transition hover:bg-slate-800 hover:text-white"
                                >
                                    <svg
                                        className="h-4 w-4"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.7"
                                    >
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z" />
                                    </svg>
                                </button>

                                {/* More */}
                                <button
                                    title="More"
                                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#151d2b] text-slate-400 transition hover:bg-slate-800 hover:text-white"
                                >
                                    ⋮
                                </button>

                            </div>
                        </div>
                    ))}

                    {/* No Result */}
                    {onSearch.length === 0 && (
                        <div className="py-12 text-center text-sm text-slate-500">
                            No employees found.
                        </div>
                    )}

                </div>
            </div>

            {/* ================= FOOTER ================= */}
            <div className="flex items-center justify-between border-t border-slate-800 px-5 py-3">

                <p className="text-[10px] text-slate-500">
                    Showing 1 to {onSearch.length} of 248 employees
                </p>

                <div className="flex items-center gap-1">

                    <button className="flex h-7 w-7 items-center justify-center rounded-md text-xs text-slate-500 hover:bg-slate-800">
                        ‹
                    </button>

                    <button className="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-400 text-xs font-semibold text-slate-950">
                        1
                    </button>

                    <button className="flex h-7 w-7 items-center justify-center rounded-md text-xs text-slate-400 hover:bg-slate-800">
                        2
                    </button>

                    <button className="flex h-7 w-7 items-center justify-center rounded-md text-xs text-slate-400 hover:bg-slate-800">
                        3
                    </button>

                    <span className="px-1 text-xs text-slate-600">
                        ...
                    </span>

                    <button className="flex h-7 w-7 items-center justify-center rounded-md text-xs text-slate-400 hover:bg-slate-800">
                        36
                    </button>

                    <button className="flex h-7 w-7 items-center justify-center rounded-md text-xs text-slate-400 hover:bg-slate-800">
                        ›
                    </button>

                </div>
            </div>
        </div>
    );
}

export default EmployeeDirectory;