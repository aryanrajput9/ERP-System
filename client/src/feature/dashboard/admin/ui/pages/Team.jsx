import React from "react";
import TeamStats from "../components/TeamStats";
import TeamFilters from "../components/TeamFilter";
import TeamTable from "./TeamTable";
import {
    Briefcase,
    Plus,
    UserPlus,
    Users,
    UserX,
} from "lucide-react";



function Team() {
    return (
        <div className="flex flex-col gap-6">
            {/* Top Action */}
            <div className="flex items-center justify-between">
                <div>
                    <h1
                        className="text-2xl font-bold"
                        style={{ color: "var(--text-primary)" }}
                    >
                        Team Management
                    </h1>

                    <p
                        className="text-sm"
                        style={{ color: "var(--text-secondary)" }}
                    >
                        Manage employees and track team activity.
                    </p>
                </div>

                <button
                    className="flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium shadow-sm transition"
                    style={{
                        backgroundColor: "var(--primary)",
                        color: "var(--text-white)",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.opacity = "0.92";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.opacity = "1";
                    }}
                >
                    <Plus size={18} />
                    Add Employee
                </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

                <TeamStats
                    title="Total Employees"
                    value={42}
                    change="↑ 6% vs last month"
                    icon={Users}
                    iconBg="bg-violet-100 dark:bg-violet-500/15"
                    iconColor="text-violet-600 dark:text-violet-400"
                    changeColor="text-green-600 dark:text-green-400"
                />

                <TeamStats
                    title="Active Employees"
                    value={38}
                    change="↑ 8% vs last month"
                    icon={Briefcase}
                    iconBg="bg-blue-100 dark:bg-blue-500/15"
                    iconColor="text-blue-600 dark:text-blue-400"
                    changeColor="text-green-600 dark:text-green-400"
                />

                <TeamStats
                    title="New This Month"
                    value={5}
                    change="↑ 2 vs last month"
                    icon={UserPlus}
                    iconBg="bg-green-100 dark:bg-green-500/15"
                    iconColor="text-green-600 dark:text-green-400"
                    changeColor="text-green-600 dark:text-green-400"
                />

                <TeamStats
                    title="On Leave"
                    value={3}
                    change="↓ 1 vs last month"
                    icon={UserX}
                    iconBg="bg-orange-100 dark:bg-orange-500/15"
                    iconColor="text-orange-600 dark:text-orange-400"
                    changeColor="text-red-500 dark:text-red-400"
                />

            </div>

            {/* Filters */}
            <TeamFilters />

            {/* Table */}
            <TeamTable />
        </div>
    );
}

export default Team;