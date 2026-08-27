import React from "react";
import {
    Code2,
    Users,
    Megaphone,
    CircleDollarSign,
    PenTool,
    Headphones,
    ShoppingCart,
    FileText,
} from "lucide-react";

import DepartmentRow from "./DepartmentRow";
import Pagination from "./Pagination";

const departments = [
    {
        name: "Engineering",
        code: "ENG",
        icon: Code2,
        iconBg: "bg-violet-100",
        iconColor: "text-violet-600",
        head: "Rohit Kumar",
        headAvatar: "RK",
        headRole: "Engineering Manager",
        employees: 68,
        location: "Bangalore",
        status: "Active",
    },
    {
        name: "Human Resources",
        code: "HR",
        icon: Users,
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
        head: "Neha Patel",
        headAvatar: "NP",
        headRole: "HR Manager",
        employees: 18,
        location: "Delhi",
        status: "Active",
    },
    {
        name: "Marketing",
        code: "MKT",
        icon: Megaphone,
        iconBg: "bg-green-100",
        iconColor: "text-green-600",
        head: "Amit Verma",
        headAvatar: "AV",
        headRole: "Marketing Head",
        employees: 24,
        location: "Mumbai",
        status: "Active",
    },
    {
        name: "Finance",
        code: "FIN",
        icon: CircleDollarSign,
        iconBg: "bg-orange-100",
        iconColor: "text-orange-500",
        head: "Sandeep Singh",
        headAvatar: "SS",
        headRole: "Finance Manager",
        employees: 16,
        location: "Gurgaon",
        status: "Active",
    },
    {
        name: "Design",
        code: "DSN",
        icon: PenTool,
        iconBg: "bg-violet-100",
        iconColor: "text-violet-600",
        head: "Priya Sharma",
        headAvatar: "PS",
        headRole: "Design Lead",
        employees: 12,
        location: "Bangalore",
        status: "Inactive",
    },
    {
        name: "Customer Support",
        code: "SUP",
        icon: Headphones,
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
        head: "Vikas Yadav",
        headAvatar: "VY",
        headRole: "Support Manager",
        employees: 34,
        location: "Noida",
        status: "Active",
    },
    {
        name: "Sales",
        code: "SAL",
        icon: ShoppingCart,
        iconBg: "bg-orange-100",
        iconColor: "text-orange-500",
        head: "Karan Malhotra",
        headAvatar: "KM",
        headRole: "Sales Manager",
        employees: 42,
        location: "Mumbai",
        status: "Active",
    },
    {
        name: "Administration",
        code: "ADM",
        icon: FileText,
        iconBg: "bg-red-100",
        iconColor: "text-red-500",
        head: "Anjali Mehta",
        headAvatar: "AM",
        headRole: "Admin Head",
        employees: 8,
        location: "Delhi",
        status: "Active",
    },
];

function DepartmentTable() {
    return (
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">

            <div className="border-b border-slate-200 px-5 py-4">
                <h2 className="text-sm font-semibold text-slate-900">
                    All Departments
                </h2>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full min-w-[850px]">

                    <thead>
                        <tr className="border-b border-slate-200 bg-slate-50/70 text-left">

                            <th className="px-4 py-3 text-[11px] font-semibold text-slate-600">
                                Department
                            </th>

                            <th className="px-4 py-3 text-[11px] font-semibold text-slate-600">
                                Head
                            </th>

                            <th className="px-4 py-3 text-[11px] font-semibold text-slate-600">
                                Employees
                            </th>

                            <th className="px-4 py-3 text-[11px] font-semibold text-slate-600">
                                Location
                            </th>

                            <th className="px-4 py-3 text-[11px] font-semibold text-slate-600">
                                Status
                            </th>

                            <th className="px-4 py-3 text-[11px] font-semibold text-slate-600">
                                Actions
                            </th>

                        </tr>
                    </thead>

                    <tbody>
                        {departments.map((department) => (
                            <DepartmentRow
                                key={department.code}
                                department={department}
                            />
                        ))}
                    </tbody>

                </table>
            </div>

            <Pagination />

        </div>
    );
}

export default DepartmentTable;