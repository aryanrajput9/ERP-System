import React from "react";
import {
    Search,
    SlidersHorizontal,
    Mail,
    Phone,
    MapPin,
    Building2,
    MoreVertical,
} from "lucide-react";

const employees = [
    {
        employeeId: "EMP0012",
        name: "Rohit Sharma",
        email: "rohit.sharma@company.com",
        phone: "9876543210",
        profileImage: "https://i.pravatar.cc/150?img=12",
        department: "Engineering",
        designation: "Frontend Developer",
        city: "Noida",
        state: "Uttar Pradesh",
        employmentType: "Full-Time",
        isActive: true,
    },

    {
        employeeId: "EMP0013",
        name: "Priya Verma",
        email: "priya.verma@company.com",
        phone: "9823456789",
        profileImage: "https://i.pravatar.cc/150?img=47",
        department: "Design",
        designation: "UI/UX Designer",
        city: "Noida",
        state: "Uttar Pradesh",
        employmentType: "Full-Time",
        isActive: true,
    },

    {
        employeeId: "EMP0014",
        name: "Amit Kumar",
        email: "amit.kumar@company.com",
        phone: "9812345678",
        profileImage: "https://i.pravatar.cc/150?img=11",
        department: "Marketing",
        designation: "SEO Specialist",
        city: "Delhi",
        state: "Delhi",
        employmentType: "Full-Time",
        isActive: true,
    },

    {
        employeeId: "EMP0015",
        name: "Sneha Reddy",
        email: "sneha.reddy@company.com",
        phone: "9898989898",
        profileImage: "https://i.pravatar.cc/150?img=44",
        department: "HR",
        designation: "HR Executive",
        city: "Gurgaon",
        state: "Haryana",
        employmentType: "Full-Time",
        isActive: true,
    },

    {
        employeeId: "EMP0016",
        name: "Vikram Singh",
        email: "vikram.singh@company.com",
        phone: "9871234567",
        profileImage: "https://i.pravatar.cc/150?img=13",
        department: "Engineering",
        designation: "Backend Developer",
        city: "Noida",
        state: "Uttar Pradesh",
        employmentType: "Full-Time",
        isActive: true,
    },

    {
        employeeId: "EMP0017",
        name: "Karan Mehta",
        email: "karan.mehta@company.com",
        phone: "9871112233",
        profileImage: "https://i.pravatar.cc/150?img=14",
        department: "Finance",
        designation: "Accounts Executive",
        city: "Delhi",
        state: "Delhi",
        employmentType: "Full-Time",
        isActive: false,
    },
];

const departmentColors = {
    Engineering:
        "bg-blue-500/10 text-blue-400 border-blue-500/20",

    Design:
        "bg-purple-500/10 text-purple-400 border-purple-500/20",

    Marketing:
        "bg-orange-500/10 text-orange-400 border-orange-500/20",

    HR:
        "bg-pink-500/10 text-pink-400 border-pink-500/20",

    Finance:
        "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
};

function EmployeeDirectoryPage() {
    return (
        <div className="min-h-full pb-8 text-white">

            {/* ================= HEADER ================= */}

            <div className="mb-6">

                <p className="mb-2 text-xs text-slate-500">
                    Employees / Employee Directory
                </p>

                <div className="flex items-end justify-between">

                    <div>
                        <h1 className="text-2xl font-bold">
                            Employee Directory
                        </h1>

                        <p className="mt-1 text-sm text-slate-400">
                            Find and view employee information
                            across your organization.
                        </p>
                    </div>

                    <div className="rounded-lg border border-slate-800 bg-[#101622] px-5 py-3">

                        <p className="text-[10px] text-slate-500">
                            Total Employees
                        </p>

                        <p className="mt-1 text-xl font-bold">
                            248
                        </p>

                    </div>

                </div>

            </div>


            {/* ================= FILTER BAR ================= */}

            <div className="mb-5 rounded-2xl border border-slate-800 bg-[#101622] p-4">

                <div className="flex gap-3">

                    {/* Search */}

                    <div className="relative flex-1">

                        <Search
                            size={16}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                        />

                        <input
                            placeholder="Search by name, ID, designation or email..."
                            className="h-11 w-full rounded-lg border border-slate-800 bg-[#0c1420] pl-10 pr-3 text-xs text-white outline-none placeholder:text-slate-600 focus:border-emerald-400/50"
                        />

                    </div>


                    {/* Department */}

                    <div className="relative">

                        <Building2
                            size={15}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                        />

                        <select
                            className="h-11 min-w-[190px] appearance-none rounded-lg border border-slate-800 bg-[#0c1420] pl-9 pr-4 text-xs text-slate-300 outline-none"
                        >
                            <option>
                                All Departments
                            </option>

                            <option>
                                Engineering
                            </option>

                            <option>
                                Design
                            </option>

                            <option>
                                Marketing
                            </option>

                            <option>
                                HR
                            </option>

                            <option>
                                Finance
                            </option>
                        </select>

                    </div>


                    {/* More Filters */}

                    <button
                        type="button"
                        className="flex h-11 items-center gap-2 rounded-lg border border-slate-800 bg-[#0c1420] px-5 text-xs text-slate-300"
                    >
                        <SlidersHorizontal size={15} />

                        More Filters
                    </button>

                </div>

            </div>


            {/* ================= EMPLOYEE CARDS ================= */}

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">

                {employees.map((employee) => (

                    <div
                        key={employee.employeeId}
                        className="rounded-2xl border border-slate-800 bg-[#101622] p-5 transition hover:border-slate-700"
                    >

                        {/* CARD HEADER */}

                        <div className="flex items-start justify-between">

                            <div className="flex items-center gap-3">

                                <div className="relative">

                                    <img
                                        src={employee.profileImage}
                                        alt={employee.name}
                                        className="h-14 w-14 rounded-full object-cover ring-2 ring-slate-800"
                                    />

                                    <span
                                        className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#101622] ${employee.isActive
                                            ? "bg-emerald-400"
                                            : "bg-red-400"
                                            }`}
                                    />

                                </div>

                                <div>

                                    <h2 className="text-sm font-semibold">
                                        {employee.name}
                                    </h2>

                                    <p className="mt-1 text-[10px] text-slate-500">
                                        {employee.employeeId}
                                    </p>

                                </div>

                            </div>

                            <button
                                type="button"
                                className="text-slate-500 hover:text-white"
                            >
                                <MoreVertical size={17} />
                            </button>

                        </div>


                        {/* DEPARTMENT */}

                        <div className="mt-4">

                            <span
                                className={`rounded-full border px-2.5 py-1 text-[9px] font-medium ${departmentColors[
                                    employee.department
                                ]
                                    }`}
                            >
                                {employee.department}
                            </span>

                        </div>


                        {/* DESIGNATION */}

                        <div className="mt-4">

                            <p className="text-xs font-medium text-slate-200">
                                {employee.designation}
                            </p>

                            <p className="mt-1 text-[10px] text-slate-500">
                                {employee.employmentType}
                            </p>

                        </div>


                        {/* CONTACT DETAILS */}

                        <div className="mt-4 space-y-2 border-t border-slate-800 pt-4">

                            <div className="flex items-center gap-2">

                                <Mail
                                    size={13}
                                    className="shrink-0 text-slate-500"
                                />

                                <span className="truncate text-[10px] text-slate-400">
                                    {employee.email}
                                </span>

                            </div>


                            <div className="flex items-center gap-2">

                                <Phone
                                    size={13}
                                    className="shrink-0 text-slate-500"
                                />

                                <span className="text-[10px] text-slate-400">
                                    {employee.phone}
                                </span>

                            </div>


                            <div className="flex items-center gap-2">

                                <MapPin
                                    size={13}
                                    className="shrink-0 text-slate-500"
                                />

                                <span className="text-[10px] text-slate-400">
                                    {employee.city},{" "}
                                    {employee.state}
                                </span>

                            </div>

                        </div>


                        {/* CARD FOOTER */}

                        <div className="mt-4 flex items-center justify-between border-t border-slate-800 pt-4">

                            <div className="flex items-center gap-2">

                                <span
                                    className={`h-1.5 w-1.5 rounded-full ${employee.isActive
                                        ? "bg-emerald-400"
                                        : "bg-red-400"
                                        }`}
                                />

                                <span
                                    className={`text-[10px] ${employee.isActive
                                        ? "text-emerald-400"
                                        : "text-red-400"
                                        }`}
                                >
                                    {employee.isActive
                                        ? "Active"
                                        : "Inactive"}
                                </span>

                            </div>


                            <button
                                type="button"
                                className="text-[10px] font-medium text-emerald-400 hover:text-emerald-300"
                            >
                                View Profile →
                            </button>

                        </div>

                    </div>

                ))}

            </div>


            {/* ================= PAGINATION UI ================= */}

            <div className="mt-6 flex items-center justify-between border-t border-slate-800 pt-5">

                <p className="text-xs text-slate-500">
                    Showing 1 to 6 of 248 employees
                </p>

                <div className="flex items-center gap-2">

                    <button
                        type="button"
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 bg-[#101622] text-xs text-slate-500"
                    >
                        ←
                    </button>

                    <button
                        type="button"
                        className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-400 text-xs font-semibold text-slate-950"
                    >
                        1
                    </button>

                    <button
                        type="button"
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 bg-[#101622] text-xs text-slate-400"
                    >
                        2
                    </button>

                    <button
                        type="button"
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 bg-[#101622] text-xs text-slate-400"
                    >
                        3
                    </button>

                    <span className="px-1 text-xs text-slate-600">
                        ...
                    </span>

                    <button
                        type="button"
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 bg-[#101622] text-xs text-slate-400"
                    >
                        →
                    </button>

                </div>

            </div>

        </div>
    );
}

export default EmployeeDirectoryPage;