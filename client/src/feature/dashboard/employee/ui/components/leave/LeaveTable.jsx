import React from "react";
import { Eye, Trash2, Sun } from "lucide-react";
import { useSelector } from "react-redux";
import Spinner from "../../../../../../shared/ui/components/Spinner";

function LeaveTable({ leave }) {

    const { loading } = useSelector((state) => state.leave)

    if (loading) {
        return <Spinner />
    }


    return (
        <div className="overflow-x-auto rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-sm">
            <table className="min-w-full">
                {/* Header */}
                <thead className="border-b border-[var(--border)] bg-[var(--surface)]">
                    <tr className="text-left text-sm font-semibold text-[var(--text-secondary)]">
                        <th className="px-6 py-4">Leave Type</th>
                        <th className="px-6 py-4">Duration</th>
                        <th className="px-6 py-4">Total Days</th>
                        <th className="px-6 py-4">Reason</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4">Applied On</th>
                        <th className="px-6 py-4">Actions</th>
                    </tr>
                </thead>

                {/* Body */}
                <tbody className="divide-y divide-[var(--border)]">
                    {leave.length === 0 ? (
                        <tr>
                            <td
                                colSpan={7}
                                className="px-6 py-10 text-center text-[var(--text-secondary)]"
                            >
                                No leave requests found
                            </td>
                        </tr>
                    ) : (
                        leave.map((elem) => (
                            <tr
                                key={elem._id}
                                className="hover:bg-[var(--hover-bg)] transition-colors"
                            >
                                {/* Leave Type */}
                                <td className="px-6 py-5 text-sm font-medium text-[var(--text-primary)]">
                                    {elem.leaveType}
                                </td>

                                {/* Duration */}
                                <td className="px-6 py-5 text-sm text-[var(--text-primary)]">
                                    <div className="flex flex-col">
                                        <span>
                                            {new Date(elem.startDate).toLocaleDateString("en-IN", {
                                                day: "2-digit",
                                                month: "short",
                                                year: "numeric",
                                            })}
                                        </span>

                                        <span className="text-[var(--text-secondary)]">
                                            to{" "}
                                            {new Date(elem.endDate).toLocaleDateString("en-IN", {
                                                day: "2-digit",
                                                month: "short",
                                                year: "numeric",
                                            })}
                                        </span>
                                    </div>
                                </td>

                                {/* Total Days */}
                                <td className="px-6 py-5 text-sm font-medium text-[var(--text-primary)]">
                                    {elem.totalDays}
                                </td>

                                {/* Reason */}
                                <td className="px-6 py-5 text-sm text-[var(--text-primary)]">
                                    {elem.reason}
                                </td>

                                {/* Status */}
                                <td className="px-6 py-5">
                                    <span className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                                        {elem.status}
                                    </span>
                                </td>

                                {/* Applied On */}
                                <td className="px-6 py-5 text-sm text-[var(--text-primary)]">
                                    {new Date(elem.createdAt).toLocaleDateString("en-IN", {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric",
                                    })}
                                </td>

                                {/* Actions */}
                                <td className="px-6 py-5">
                                    <div className="flex items-center gap-2">
                                        <button className="rounded-xl border border-[var(--border)] p-2 text-[var(--text-secondary)] hover:bg-[var(--hover-bg)] hover:text-[var(--text-primary)] transition-colors">
                                            <Eye />
                                        </button>

                                        <button className="rounded-xl border border-red-200 p-2 text-red-500 hover:bg-red-50 transition-colors">
                                            <Trash2 />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default LeaveTable;