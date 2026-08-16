import React, { useEffect, useState } from "react";
import TeamStats from "../components/TeamStats";
import {
    CalendarClock,
    CheckCircle2,
    ChevronDown,
    Clock3,
    Filter,
    Plus,
    Search,
    ListTodoIcon

} from "lucide-react";
import TeamTaskTable from "../components/TeamTaskTable";
import AddTaskForm from "../components/AddTaskForm";
import { useDispatch, useSelector } from "react-redux";
import taskApiDataHook from "../../hooks/allTaskDataHook";
import { setAllTask, setError } from "../../state/adminSlice";
import Spinner from "../../../../../shared/ui/components/Spinner";


function Task() {

    const [open, setOpen] = useState(false);


    const { allEmploye } = useSelector((state) => state.admin);
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchTask = async () => {

            try {
                const resp = await taskApiDataHook.getAllTask();
                dispatch(setAllTask(resp))

            } catch (error) {
                dispatch(setError(error))
            }

        };

        fetchTask()
    }, []);



    const { alltask, allTaskLoading } = useSelector((state) => state.admin);

    const TotalTask = alltask.length;
    const Complete = alltask.filter((elem) => elem.status === "Complete").length;
    const Inprogress = alltask.filter((elem) => elem.status === "Progress").length;
    const Pending = alltask.filter((elem) => elem.status === "Pending").length;

    if (allTaskLoading) {
        return <Spinner />
    }






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
                    onClick={() => setOpen((prev) => !prev)}
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
            <div className="flex justify-between w-full gap-4">

                <TeamStats
                    title="Total Tasks"
                    change="↑ 12% vs last week"
                    value={TotalTask}
                    icon={ListTodoIcon}
                    iconBg="bg-violet-100 dark:bg-violet-500/15"
                    iconColor="text-violet-600 dark:text-violet-400"
                    changeColor="text-green-600 dark:text-green-400" />

                <TeamStats
                    title="Completed"
                    change="↑ 18% vs last week"
                    value={Complete}
                    icon={CheckCircle2}
                    iconBg="bg-green-100 dark:bg-green-500/15"
                    iconColor="text-green-600 dark:text-green-400"
                    changeColor="text-green-600 dark:text-green-400" />

                <TeamStats
                    title="In Progress"
                    change="→ No change"
                    value={Inprogress}
                    icon={Clock3}
                    iconBg="bg-orange-100 dark:bg-orange-500/15"
                    iconColor="text-orange-600 dark:text-orange-400"
                    changeColor="text-gray-500 dark:text-gray-400" />

                <TeamStats
                    title="Pending"
                    change="↓ 8% vs last week"
                    value={Pending}
                    icon={CalendarClock}
                    iconBg="bg-red-100 dark:bg-red-500/15"
                    iconColor="text-red-600 dark:text-red-400"
                    changeColor="text-red-500 dark:text-red-400" />
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
            {/* Table */}
            <TeamTaskTable />

            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                    <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl">

                        {/* Close Button */}
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--text-primary)] shadow-sm transition hover:bg-[var(--hover-bg)]"
                        >
                            ✕
                        </button>

                        <AddTaskForm allEmploye={allEmploye} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Task;