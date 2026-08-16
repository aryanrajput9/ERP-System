import { Calendar, MoreVertical } from "lucide-react";
import { useSelector } from "react-redux";
import Spinner from "../../../../../shared/ui/components/Spinner";



function TeamTaskTable() {

    const { alltask, allTaskLoading } = useSelector((state) => state.admin);

    if (allTaskLoading) {
        return <Spinner />
    }

    return (
        <div
            className="overflow-hidden rounded-2xl border shadow-sm"
            style={{
                backgroundColor: "var(--card)",
                borderColor: "var(--border)",
            }}
        >
            {/* Header */}
            <div
                className="grid grid-cols-[2fr_1.5fr_1fr_1fr_1fr_80px] gap-4 border-b px-6 py-4 text-sm font-medium"
                style={{
                    backgroundColor: "var(--surface-2)",
                    borderColor: "var(--border)",
                    color: "var(--text-muted)",
                }}
            >
                <p>Task</p>
                <p>Assignee</p>
                <p>Priority</p>
                <p>Status</p>
                <p>Due Date</p>
                <p className="text-center">Actions</p>
            </div>

            {/* Rows */}
            <div className="divide-y" style={{ borderColor: "var(--border)" }}>
                {alltask.map((task) => (
                    <div
                        key={task.title}
                        className="grid grid-cols-[2fr_1.5fr_1fr_1fr_1fr_80px] items-center gap-4 px-6 py-4"
                    >
                        {/* Task */}
                        <div>
                            <p
                                className="font-medium"
                                style={{ color: "var(--text-primary)" }}
                            >
                                {task.title}
                            </p>

                            <p
                                className="mt-1 text-sm line-clamp-1"
                                style={{ color: "var(--text-secondary)" }}
                            >
                                {task.description}
                            </p>
                        </div>

                        {/* Assignee */}
                        <div className="flex items-center gap-3">
                            <img
                                src={task.assignedTo.profileImage}
                                alt={task.assignee}
                                className="h-10 w-10 rounded-full object-cover"
                            />

                            <div>
                                <p
                                    className="font-medium"
                                    style={{ color: "var(--text-primary)" }}
                                >
                                    {task.assignedTo.firstName + task.assignedTo.lastName}
                                </p>

                                <p
                                    className="text-sm"
                                    style={{ color: "var(--text-secondary)" }}
                                >
                                    {task.assignedTo.role}
                                </p>
                            </div>
                        </div>

                        {/* Priority */}
                        <div>
                            <span
                                className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${task.priority === "High"
                                    ? "bg-red-100 text-red-600 dark:bg-red-500/15 dark:text-red-400"
                                    : "bg-orange-100 text-orange-600 dark:bg-orange-500/15 dark:text-orange-400"
                                    }`}
                            >
                                <span
                                    className={`h-1.5 w-1.5 rounded-full ${task.priority === "High"
                                        ? "bg-red-500"
                                        : "bg-orange-500"
                                        }`}
                                />
                                {task.priority}
                            </span>
                        </div>

                        {/* Status */}
                        <div>
                            <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600 dark:bg-blue-500/15 dark:text-blue-400">
                                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                                {task.status}
                            </span>
                        </div>

                        {/* Due Date */}
                        <div
                            className="flex items-center gap-2 text-sm"
                            style={{ color: "var(--text-secondary)" }}
                        >
                            <Calendar
                                size={16}
                                style={{ color: "var(--text-muted)" }}
                            />
                            {new Date(task.dueDate).toLocaleDateString("en-IN", {
                                day: "2-digit",
                                month: "short",
                                year: "numeric"
                            })}
                        </div>

                        {/* Actions */}
                        <div className="flex justify-center">
                            <button
                                className="rounded-lg p-2 transition"
                                style={{
                                    color: "var(--text-muted)",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = "var(--hover-bg)";
                                    e.currentTarget.style.color = "var(--hover-text)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = "transparent";
                                    e.currentTarget.style.color = "var(--text-muted)";
                                }}
                            >
                                <MoreVertical size={18} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TeamTaskTable;