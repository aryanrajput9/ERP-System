import React from "react";
import TeamStats from "../components/TeamStats";
import {
    CalendarClock,
    CheckCircle2,
    ChevronDown,
    Clock3,
    Filter,
    ListTodo,
    Plus,
    Search,
} from "lucide-react";
import TeamTaskTable from "../components/TeamTaskTable";

const Taskstats = [
    {
        title: "Total Tasks",
        value: 28,
        change: "↑ 12% vs last week",
        icon: ListTodo,
        iconBg: "bg-violet-100 dark:bg-violet-500/15",
        iconColor: "text-violet-600 dark:text-violet-400",
        changeColor: "text-green-600 dark:text-green-400",
    },
    {
        title: "Completed",
        value: 18,
        change: "↑ 18% vs last week",
        icon: CheckCircle2,
        iconBg: "bg-green-100 dark:bg-green-500/15",
        iconColor: "text-green-600 dark:text-green-400",
        changeColor: "text-green-600 dark:text-green-400",
    },
    {
        title: "In Progress",
        value: 6,
        change: "→ No change",
        icon: Clock3,
        iconBg: "bg-orange-100 dark:bg-orange-500/15",
        iconColor: "text-orange-600 dark:text-orange-400",
        changeColor: "text-gray-500 dark:text-gray-400",
    },
    {
        title: "Pending",
        value: 4,
        change: "↓ 8% vs last week",
        icon: CalendarClock,
        iconBg: "bg-red-100 dark:bg-red-500/15",
        iconColor: "text-red-600 dark:text-red-400",
        changeColor: "text-red-500 dark:text-red-400",
    },
];

function Task() {
    return (
        <div className="flex flex-col gap-6">
            {/* Top */}
            <div className="flex items-center justify-between">
                <div>
                    <h1
                        className="text-2xl font-bold"
                        style={{ color: "var(--text-primary)" }}
                    >
                        Task Management
                    </h1>

                    <p
                        className="text-sm"
                        style={{ color: "var(--text-secondary)" }}
                    >
                        Manage and track all team tasks.
                    </p>
                </div>

                <button
                    className="flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium shadow-sm transition"
                    style={{
                        backgroundColor: "var(--primary)",
                        color: "var(--text-white)",
                    }}
                >
                    <Plus size={18} />
                    Add Task
                </button>
            </div>

            {/* Stats */}
            <TeamStats stats={Taskstats} />

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
                    className="flex min-w-[300px] flex-1 items-center gap-3 rounded-xl border px-4 py-3"
                    style={{
                        borderColor: "var(--border)",
                        backgroundColor: "var(--input-bg)",
                    }}
                >
                    <Search size={18} style={{ color: "var(--text-muted)" }} />

                    <input
                        type="text"
                        placeholder="Search task by title, assignee or priority..."
                        className="w-full bg-transparent text-sm focus:outline-none"
                        style={{ color: "var(--text-primary)" }}
                    />
                </div>

                {/* Status */}
                <button
                    className="flex min-w-[150px] items-center justify-between rounded-xl border px-4 py-3 text-sm"
                    style={{
                        borderColor: "var(--border)",
                        backgroundColor: "var(--input-bg)",
                        color: "var(--text-primary)",
                    }}
                >
                    <span>All Status</span>
                    <ChevronDown size={16} style={{ color: "var(--text-muted)" }} />
                </button>

                {/* Priority */}
                <button
                    className="flex min-w-[150px] items-center justify-between rounded-xl border px-4 py-3 text-sm"
                    style={{
                        borderColor: "var(--border)",
                        backgroundColor: "var(--input-bg)",
                        color: "var(--text-primary)",
                    }}
                >
                    <span>All Priority</span>
                    <ChevronDown size={16} style={{ color: "var(--text-muted)" }} />
                </button>

                {/* Assignees */}
                <button
                    className="flex min-w-[170px] items-center justify-between rounded-xl border px-4 py-3 text-sm"
                    style={{
                        borderColor: "var(--border)",
                        backgroundColor: "var(--input-bg)",
                        color: "var(--text-primary)",
                    }}
                >
                    <span>All Assignees</span>
                    <ChevronDown size={16} style={{ color: "var(--text-muted)" }} />
                </button>

                {/* Filter */}
                <button
                    className="flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-medium"
                    style={{
                        borderColor: "var(--border)",
                        backgroundColor: "var(--input-bg)",
                        color: "var(--text-primary)",
                    }}
                >
                    <Filter size={16} style={{ color: "var(--text-muted)" }} />
                    Filter
                </button>
            </div>

            {/* Table */}
            <TeamTaskTable />
        </div>
    );
}

export default Task;