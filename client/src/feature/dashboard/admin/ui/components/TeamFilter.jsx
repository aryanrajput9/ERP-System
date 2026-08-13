import { Search, ChevronDown, Filter } from "lucide-react";

export default function TeamFilters() {
    return (
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
                    placeholder="Search by name, email or role..."
                    className="w-full bg-transparent text-sm focus:outline-none"
                    style={{ color: "var(--text-primary)" }}
                />
            </div>

            {/* Department */}
            <button
                className="flex min-w-[170px] items-center justify-between rounded-xl border px-4 py-3 text-sm transition"
                style={{
                    borderColor: "var(--border)",
                    backgroundColor: "var(--input-bg)",
                    color: "var(--text-primary)",
                }}
            >
                <span>All Departments</span>
                <ChevronDown size={16} style={{ color: "var(--text-muted)" }} />
            </button>

            {/* Role */}
            <button
                className="flex min-w-[140px] items-center justify-between rounded-xl border px-4 py-3 text-sm transition"
                style={{
                    borderColor: "var(--border)",
                    backgroundColor: "var(--input-bg)",
                    color: "var(--text-primary)",
                }}
            >
                <span>All Roles</span>
                <ChevronDown size={16} style={{ color: "var(--text-muted)" }} />
            </button>

            {/* Status */}
            <button
                className="flex min-w-[140px] items-center justify-between rounded-xl border px-4 py-3 text-sm transition"
                style={{
                    borderColor: "var(--border)",
                    backgroundColor: "var(--input-bg)",
                    color: "var(--text-primary)",
                }}
            >
                <span>Status: All</span>
                <ChevronDown size={16} style={{ color: "var(--text-muted)" }} />
            </button>

            {/* Filter */}
            <button
                className="flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-medium transition"
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
    );
}