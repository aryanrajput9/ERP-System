import { Search, ChevronDown, Check, X } from "lucide-react";

const leaves = [
    {
        name: "Priya Singh",
        type: "Sick Leave",
        from: "12 Aug 2026",
        to: "13 Aug 2026",
        days: 2,
        status: "Pending",
    },
    {
        name: "Amit Sharma",
        type: "Casual Leave",
        from: "15 Aug 2026",
        to: "15 Aug 2026",
        days: 1,
        status: "Approved",
    },
    {
        name: "Rohit Kumar",
        type: "Annual Leave",
        from: "18 Aug 2026",
        to: "20 Aug 2026",
        days: 3,
        status: "Rejected",
    },
];

export default function AdminLeavePage() {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1
                    className="text-2xl font-bold"
                    style={{ color: "var(--text-primary)" }}
                >
                    Leave Management
                </h1>

                <p
                    className="text-sm"
                    style={{ color: "var(--text-secondary)" }}
                >
                    Review and manage employee leave requests.
                </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {/* Pending */}
                <div
                    className="rounded-2xl border p-5 shadow-sm"
                    style={{
                        backgroundColor: "var(--card)",
                        borderColor: "var(--border)",
                    }}
                >
                    <p
                        className="text-sm"
                        style={{ color: "var(--text-secondary)" }}
                    >
                        Pending Requests
                    </p>

                    <h3 className="mt-2 text-3xl font-bold text-orange-600">5</h3>
                </div>

                {/* Approved */}
                <div
                    className="rounded-2xl border p-5 shadow-sm"
                    style={{
                        backgroundColor: "var(--card)",
                        borderColor: "var(--border)",
                    }}
                >
                    <p
                        className="text-sm"
                        style={{ color: "var(--text-secondary)" }}
                    >
                        Approved
                    </p>

                    <h3 className="mt-2 text-3xl font-bold text-green-600">18</h3>
                </div>

                {/* Rejected */}
                <div
                    className="rounded-2xl border p-5 shadow-sm"
                    style={{
                        backgroundColor: "var(--card)",
                        borderColor: "var(--border)",
                    }}
                >
                    <p
                        className="text-sm"
                        style={{ color: "var(--text-secondary)" }}
                    >
                        Rejected
                    </p>

                    <h3 className="mt-2 text-3xl font-bold text-red-600">2</h3>
                </div>

                {/* On Leave */}
                <div
                    className="rounded-2xl border p-5 shadow-sm"
                    style={{
                        backgroundColor: "var(--card)",
                        borderColor: "var(--border)",
                    }}
                >
                    <p
                        className="text-sm"
                        style={{ color: "var(--text-secondary)" }}
                    >
                        On Leave Today
                    </p>

                    <h3 className="mt-2 text-3xl font-bold text-violet-600">3</h3>
                </div>
            </div>

            {/* Filters */}
            <div
                className="flex flex-wrap items-center gap-4 rounded-2xl border p-4 shadow-sm"
                style={{
                    backgroundColor: "var(--card)",
                    borderColor: "var(--border)",
                }}
            >
                {/* Search */}
                <div
                    className="flex min-w-[280px] flex-1 items-center gap-3 rounded-xl border px-4 py-3"
                    style={{
                        borderColor: "var(--border)",
                        backgroundColor: "var(--input-bg)",
                    }}
                >
                    <Search size={18} style={{ color: "var(--text-muted)" }} />

                    <input
                        type="text"
                        placeholder="Search employee..."
                        className="w-full bg-transparent text-sm focus:outline-none"
                        style={{ color: "var(--text-primary)" }}
                    />
                </div>

                {/* Status Filter */}
                <button
                    className="flex min-w-[160px] items-center justify-between rounded-xl border px-4 py-3 text-sm"
                    style={{
                        borderColor: "var(--border)",
                        backgroundColor: "var(--input-bg)",
                        color: "var(--text-primary)",
                    }}
                >
                    <span>All Status</span>
                    <ChevronDown size={16} style={{ color: "var(--text-muted)" }} />
                </button>
            </div>

            {/* Table */}
            <div
                className="overflow-hidden rounded-2xl border shadow-sm"
                style={{
                    backgroundColor: "var(--card)",
                    borderColor: "var(--border)",
                }}
            >
                {/* Header */}
                <div
                    className="grid grid-cols-[1.5fr_1fr_1fr_1fr_0.8fr_1fr_1.2fr] gap-4 border-b px-6 py-4 text-sm font-medium"
                    style={{
                        backgroundColor: "var(--surface-2)",
                        borderColor: "var(--border)",
                        color: "var(--text-muted)",
                    }}
                >
                    <p>Employee</p>
                    <p>Leave Type</p>
                    <p>From</p>
                    <p>To</p>
                    <p>Days</p>
                    <p>Status</p>
                    <p className="text-center">Action</p>
                </div>

                {/* Rows */}
                <div
                    className="divide-y"
                    style={{ borderColor: "var(--border)" }}
                >
                    {leaves.map((leave) => (
                        <div
                            key={leave.name + leave.from}
                            className="grid grid-cols-[1.5fr_1fr_1fr_1fr_0.8fr_1fr_1.2fr] items-center gap-4 px-6 py-4"
                        >
                            {/* Name */}
                            <p
                                className="font-medium"
                                style={{ color: "var(--text-primary)" }}
                            >
                                {leave.name}
                            </p>

                            {/* Type */}
                            <p
                                className="text-sm"
                                style={{ color: "var(--text-secondary)" }}
                            >
                                {leave.type}
                            </p>

                            {/* From */}
                            <p
                                className="text-sm"
                                style={{ color: "var(--text-secondary)" }}
                            >
                                {leave.from}
                            </p>

                            {/* To */}
                            <p
                                className="text-sm"
                                style={{ color: "var(--text-secondary)" }}
                            >
                                {leave.to}
                            </p>

                            {/* Days */}
                            <p
                                className="text-sm"
                                style={{ color: "var(--text-secondary)" }}
                            >
                                {leave.days}
                            </p>

                            {/* Status */}
                            <div>
                                <span
                                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${leave.status === "Approved"
                                        ? "bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-400"
                                        : leave.status === "Rejected"
                                            ? "bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-400"
                                            : "bg-orange-100 text-orange-700 dark:bg-orange-500/15 dark:text-orange-400"
                                        }`}
                                >
                                    {leave.status}
                                </span>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center justify-center gap-2">
                                <button className="rounded-lg bg-green-100 p-2 text-green-700 transition hover:bg-green-200 dark:bg-green-500/15 dark:text-green-400 dark:hover:bg-green-500/25">
                                    <Check size={16} />
                                </button>

                                <button className="rounded-lg bg-red-100 p-2 text-red-700 transition hover:bg-red-200 dark:bg-red-500/15 dark:text-red-400 dark:hover:bg-red-500/25">
                                    <X size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}