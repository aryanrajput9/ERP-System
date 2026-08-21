import { Search, ChevronRight, Users } from "lucide-react";
import { useMemo, useState } from "react";

export default function MyTeam({ team = [] }) {
    const [search, setSearch] = useState("");

    const filteredTeam = useMemo(() => {
        const value = search.trim().toLowerCase();

        if (!value) return team;

        return team.filter((employee) => {
            const name = employee.name?.toLowerCase() || "";
            const email = employee.email?.toLowerCase() || "";
            const department =
                employee.department?.toLowerCase() || "";

            return (
                name.includes(value) ||
                email.includes(value) ||
                department.includes(value)
            );
        });
    }, [team, search]);

    return (
        <div className="space-y-6">

            {/* Header */}
            <div className="flex items-center justify-between">

                <div>
                    <h1
                        className="text-2xl font-semibold"
                        style={{
                            color: "var(--text-primary)",
                        }}
                    >
                        My Team
                    </h1>

                    <p
                        className="mt-1 text-sm"
                        style={{
                            color: "var(--text-secondary)",
                        }}
                    >
                        View and manage your team members
                    </p>
                </div>

                <div
                    className="flex items-center gap-2 rounded-xl border px-4 py-2.5"
                    style={{
                        backgroundColor: "var(--card)",
                        borderColor: "var(--border)",
                    }}
                >
                    <Users
                        size={17}
                        style={{
                            color: "var(--text-muted)",
                        }}
                    />

                    <span
                        className="text-sm font-medium"
                        style={{
                            color: "var(--text-primary)",
                        }}
                    >
                        {team.length} Members
                    </span>
                </div>

            </div>

            {/* Search */}
            <div
                className="rounded-2xl border p-4"
                style={{
                    backgroundColor: "var(--card)",
                    borderColor: "var(--border)",
                }}
            >
                <div className="relative">

                    <Search
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2"
                        style={{
                            color: "var(--text-muted)",
                        }}
                    />

                    <input
                        type="text"
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                        placeholder="Search team member..."
                        className="w-full rounded-xl border py-3 pl-11 pr-4 text-sm outline-none"
                        style={{
                            backgroundColor:
                                "var(--surface-2)",
                            borderColor: "var(--border)",
                            color: "var(--text-primary)",
                        }}
                    />

                </div>
            </div>

            {/* Team Table */}
            <div
                className="overflow-hidden rounded-2xl border"
                style={{
                    backgroundColor: "var(--card)",
                    borderColor: "var(--border)",
                }}
            >

                {/* Table Header */}
                <div
                    className="grid grid-cols-[2fr_1.3fr_1.4fr_1fr_40px] gap-4 border-b px-6 py-4 text-xs font-medium"
                    style={{
                        backgroundColor: "var(--surface-2)",
                        borderColor: "var(--border)",
                        color: "var(--text-muted)",
                    }}
                >
                    <p>Employee</p>
                    <p>Department</p>
                    <p>Designation</p>
                    <p>Status</p>
                    <p></p>
                </div>

                {/* Rows */}
                {filteredTeam.length > 0 ? (
                    filteredTeam.map((employee) => (
                        <div
                            key={employee._id}
                            className="grid grid-cols-[2fr_1.3fr_1.4fr_1fr_40px] items-center gap-4 border-b px-6 py-4 transition hover:bg-[var(--hover-bg)]"
                            style={{
                                borderColor:
                                    "var(--border)",
                            }}
                        >

                            {/* Employee */}
                            <div className="flex items-center gap-3">

                                <div
                                    className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full text-sm font-semibold"
                                    style={{
                                        backgroundColor:
                                            "var(--surface-2)",
                                        color:
                                            "var(--text-primary)",
                                    }}
                                >
                                    {employee.profileImage ? (
                                        <img
                                            src={
                                                employee.profileImage
                                            }
                                            alt={employee.name}
                                            className="h-full w-full object-cover"
                                        />
                                    ) : (
                                        employee.name
                                            ?.charAt(0)
                                            ?.toUpperCase()
                                    )}
                                </div>

                                <div>
                                    <p
                                        className="text-sm font-medium"
                                        style={{
                                            color:
                                                "var(--text-primary)",
                                        }}
                                    >
                                        {employee.name}
                                    </p>

                                    <p
                                        className="text-xs"
                                        style={{
                                            color:
                                                "var(--text-secondary)",
                                        }}
                                    >
                                        {employee.email}
                                    </p>
                                </div>

                            </div>

                            {/* Department */}
                            <p
                                className="text-sm"
                                style={{
                                    color:
                                        "var(--text-secondary)",
                                }}
                            >
                                {employee.department ||
                                    "Not Assigned"}
                            </p>

                            {/* Designation */}
                            <p
                                className="text-sm"
                                style={{
                                    color:
                                        "var(--text-secondary)",
                                }}
                            >
                                {employee.designation ||
                                    "Not Assigned"}
                            </p>

                            {/* Status */}
                            <div>
                                <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700 dark:bg-green-500/15 dark:text-green-400">
                                    <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                                    Active
                                </span>
                            </div>

                            {/* Action */}
                            <button
                                type="button"
                                className="flex justify-center rounded-lg p-2 transition hover:bg-slate-100 dark:hover:bg-slate-800"
                                style={{
                                    color:
                                        "var(--text-muted)",
                                }}
                            >
                                <ChevronRight size={18} />
                            </button>

                        </div>
                    ))
                ) : (
                    <div className="py-16 text-center">

                        <Users
                            size={35}
                            className="mx-auto mb-3"
                            style={{
                                color: "var(--text-muted)",
                            }}
                        />

                        <p
                            className="text-sm font-medium"
                            style={{
                                color:
                                    "var(--text-primary)",
                            }}
                        >
                            No team members found
                        </p>

                        <p
                            className="mt-1 text-xs"
                            style={{
                                color:
                                    "var(--text-secondary)",
                            }}
                        >
                            Employees assigned to you will
                            appear here.
                        </p>

                    </div>
                )}

            </div>
        </div>
    );
}