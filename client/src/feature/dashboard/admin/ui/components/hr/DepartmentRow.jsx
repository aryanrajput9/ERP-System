import React from "react";
import {
    Eye,
    MoreVertical,
    MapPin,
} from "lucide-react";

function DepartmentRow({ department }) {
    return (
        <tr className="border-b border-slate-100 transition hover:bg-slate-50">

            {/* Department */}
            <td className="px-4 py-4">
                <div className="flex items-center gap-3">

                    <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${department.iconBg} ${department.iconColor}`}
                    >
                        <department.icon size={17} />
                    </div>

                    <div>
                        <p className="text-sm font-semibold text-slate-800">
                            {department.name}
                        </p>

                        <p className="mt-0.5 text-[11px] text-slate-500">
                            {department.code}
                        </p>
                    </div>

                </div>
            </td>

            {/* Head */}
            <td className="px-4 py-4">
                <div className="flex items-center gap-2.5">

                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-100 text-[10px] font-semibold text-violet-600">
                        {department.headAvatar}
                    </div>

                    <div>
                        <p className="text-xs font-semibold text-slate-800">
                            {department.head}
                        </p>

                        <p className="text-[10px] text-slate-500">
                            {department.headRole}
                        </p>
                    </div>

                </div>
            </td>

            {/* Employees */}
            <td className="px-4 py-4 text-sm font-medium text-slate-700">
                {department.employees}
            </td>

            {/* Location */}
            <td className="px-4 py-4">
                <div className="flex items-center gap-1.5 text-xs text-slate-600">
                    <MapPin size={14} />
                    {department.location}
                </div>
            </td>

            {/* Status */}
            <td className="px-4 py-4">
                <span
                    className={`rounded-md border px-2.5 py-1 text-[10px] font-medium ${department.status === "Active"
                        ? "border-green-200 bg-green-50 text-green-600"
                        : "border-red-200 bg-red-50 text-red-500"
                        }`}
                >
                    {department.status}
                </span>
            </td>

            {/* Actions */}
            <td className="px-4 py-4">
                <div className="flex items-center gap-2">

                    <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50">
                        <Eye size={15} />
                    </button>

                    <button className="text-slate-400">
                        <MoreVertical size={17} />
                    </button>

                </div>
            </td>

        </tr>
    );
}

export default DepartmentRow;