import React from "react";
import {
    CalendarDays,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    Eye,
    Filter,
    MoreVertical,
} from "lucide-react";

const leaveData = [
    {
        id: 1,
        name: "Priya Singh",
        department: "Marketing",
        initials: "PS",
        leaveType: "Annual Leave",
        from: "20 May 2025",
        to: "24 May 2025",
        days: 5,
        reason: "Family Vacation",
        status: "Approved",
    },
    {
        id: 2,
        name: "Amit Kumar",
        department: "Development",
        initials: "AK",
        leaveType: "Sick Leave",
        from: "15 May 2025",
        to: "16 May 2025",
        days: 2,
        reason: "Fever & Cold",
        status: "Approved",
    },
    {
        id: 3,
        name: "Rahul Verma",
        department: "Design",
        initials: "RV",
        leaveType: "Casual Leave",
        from: "26 May 2025",
        to: "26 May 2025",
        days: 1,
        reason: "Personal Work",
        status: "Pending",
    },
    {
        id: 4,
        name: "Neha Patel",
        department: "HR",
        initials: "NP",
        leaveType: "Annual Leave",
        from: "10 May 2025",
        to: "14 May 2025",
        days: 5,
        reason: "Trip",
        status: "Rejected",
    },
    {
        id: 5,
        name: "Sandeep Kumar",
        department: "Finance",
        initials: "SK",
        leaveType: "Sick Leave",
        from: "07 May 2025",
        to: "08 May 2025",
        days: 2,
        reason: "Migraine",
        status: "Approved",
    },
    {
        id: 6,
        name: "Vikas Sharma",
        department: "Sales",
        initials: "VS",
        leaveType: "Casual Leave",
        from: "30 May 2025",
        to: "30 May 2025",
        days: 1,
        reason: "Personal Work",
        status: "Pending",
    },
];

const leaveTypeStyle = {
    "Annual Leave": "text-blue-600",
    "Sick Leave": "text-green-600",
    "Casual Leave": "text-violet-600",
};

const statusStyle = {
    Approved: "bg-green-50 text-green-600 border-green-100",
    Pending: "bg-orange-50 text-orange-500 border-orange-100",
    Rejected: "bg-red-50 text-red-500 border-red-100",
};

function LeaveManagement() {
    return (
        <div className="w-full">
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

                {/* Tabs */}
                <div className="flex h-[64px] items-end gap-12 border-b border-gray-200 px-6">
                    {["All Requests", "Pending", "Approved", "Rejected"].map(
                        (tab, index) => (
                            <button
                                key={tab}
                                className={`relative h-full px-1 text-sm font-medium ${index === 0
                                    ? "text-violet-600"
                                    : "text-gray-700 hover:text-violet-600"
                                    }`}
                            >
                                {tab}

                                {index === 0 && (
                                    <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-violet-600" />
                                )}
                            </button>
                        )
                    )}
                </div>

                {/* Filters */}
                <div className="flex flex-wrap items-center gap-4 border-b border-gray-200 px-6 py-5">

                    {/* Date */}
                    <button className="flex h-11 min-w-[245px] items-center justify-between rounded-lg border border-gray-200 bg-white px-4 text-sm text-gray-700">
                        <div className="flex items-center gap-2">
                            <CalendarDays size={17} className="text-gray-500" />
                            <span>01 May 2025 - 31 May 2025</span>
                        </div>

                        <CalendarDays size={16} className="text-gray-400" />
                    </button>

                    {/* Department */}
                    <button className="flex h-11 min-w-[210px] items-center justify-between rounded-lg border border-gray-200 bg-white px-4 text-sm text-gray-700">
                        <span>All Departments</span>
                        <ChevronDown size={16} className="text-gray-400" />
                    </button>

                    {/* Leave Type */}
                    <button className="flex h-11 min-w-[210px] items-center justify-between rounded-lg border border-gray-200 bg-white px-4 text-sm text-gray-700">
                        <span>All Leave Types</span>
                        <ChevronDown size={16} className="text-gray-400" />
                    </button>

                    {/* Filter */}
                    <button className="ml-auto flex h-11 items-center gap-2 rounded-lg bg-violet-600 px-6 text-sm font-medium text-white shadow-sm hover:bg-violet-700">
                        <Filter size={16} />
                        Filter
                    </button>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[1000px]">
                        <thead>
                            <tr className="border-b border-gray-200 bg-gray-50/50">
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700">
                                    Employee
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700">
                                    Leave Type
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700">
                                    From
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700">
                                    To
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700">
                                    Days
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700">
                                    Reason
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700">
                                    Status
                                </th>
                                <th className="px-6 py-4 text-center text-xs font-semibold text-gray-700">
                                    Action
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {leaveData.map((item) => (
                                <tr
                                    key={item.id}
                                    className="border-b border-gray-100 transition hover:bg-gray-50/60"
                                >
                                    {/* Employee */}
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-100 text-xs font-semibold text-violet-600">
                                                {item.initials}
                                            </div>

                                            <div>
                                                <p className="whitespace-nowrap text-sm font-semibold text-gray-800">
                                                    {item.name}
                                                </p>
                                                <p className="mt-0.5 text-xs text-gray-500">
                                                    {item.department}
                                                </p>
                                            </div>
                                        </div>
                                    </td>

                                    {/* Leave */}
                                    <td className="px-6 py-4">
                                        <span
                                            className={`whitespace-nowrap text-sm font-medium ${leaveTypeStyle[item.leaveType]
                                                }`}
                                        >
                                            {item.leaveType}
                                        </span>
                                    </td>

                                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">
                                        {item.from}
                                    </td>

                                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">
                                        {item.to}
                                    </td>

                                    <td className="px-6 py-4 text-sm text-gray-700">
                                        {item.days}
                                    </td>

                                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">
                                        {item.reason}
                                    </td>

                                    {/* Status */}
                                    <td className="px-6 py-4">
                                        <span
                                            className={`inline-flex rounded-md border px-3 py-1 text-xs font-medium ${statusStyle[item.status]
                                                }`}
                                        >
                                            {item.status}
                                        </span>
                                    </td>

                                    {/* Action */}
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-center gap-2">
                                            <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:bg-gray-50 hover:text-violet-600">
                                                <Eye size={16} />
                                            </button>

                                            {(item.status === "Pending" ||
                                                item.status === "Rejected") && (
                                                    <button className="flex h-9 w-7 items-center justify-center text-gray-400 hover:text-gray-700">
                                                        <MoreVertical size={17} />
                                                    </button>
                                                )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-5">
                    <p className="text-xs text-gray-500">
                        Showing 1 to 6 of 128 requests
                    </p>

                    <div className="flex items-center gap-2">
                        <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50">
                            <ChevronLeft size={16} />
                        </button>

                        <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-600 text-sm font-medium text-white shadow-sm">
                            1
                        </button>

                        <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-sm text-gray-700 hover:bg-gray-50">
                            2
                        </button>

                        <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-sm text-gray-700 hover:bg-gray-50">
                            3
                        </button>

                        <span className="px-1 text-gray-400">...</span>

                        <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-sm text-gray-700 hover:bg-gray-50">
                            22
                        </button>

                        <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50">
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeaveManagement;