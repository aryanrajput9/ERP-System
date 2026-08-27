import { useForm } from "react-hook-form";
import taskApiDataHook from "../../hooks/allTaskDataHook";

export default function AddTaskForm({ allEmploye = [] }) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            priority: "Medium",
            status: "Pending",
        },
    });

    const onSubmit = async (data) => {
        const payload = {
            ...data,
            estimatedHours: Number(data.estimatedHours),
            tags: data.tags
                ? data.tags.split(",").map((tag) => tag.trim())
                : [],
        };


        const resp = await taskApiDataHook.createTask(payload)
        reset();
        return resp

    };

    return (
        <div className="min-h-screen bg-[var(--background)] p-6">
            <div
                className="mx-auto max-w-3xl rounded-[var(--radius)] border border-[var(--border)] bg-[var(--card)] p-8"
                style={{ boxShadow: "var(--shadow-lg)" }}
            >
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-[var(--text-primary)]">
                        Add New Task
                    </h1>
                    <p className="mt-2 text-sm text-[var(--text-secondary)]">
                        Create a new task and assign it to a team member.
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Title */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-[var(--text-primary)]">
                            Task Title
                        </label>
                        <input
                            type="text"
                            placeholder="Enter task title"
                            {...register("title", { required: "Title is required" })}
                            className="w-full rounded-[var(--radius)] border border-[var(--input-border)] bg-[var(--input-bg)] px-4 py-3 text-[var(--text-primary)] outline-none"
                        />
                        {errors.title && (
                            <p className="mt-1 text-sm text-red-500">{errors.title.message}</p>
                        )}
                    </div>

                    {/* Description */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-[var(--text-primary)]">
                            Description
                        </label>
                        <textarea
                            rows={5}
                            placeholder="Write task details..."
                            {...register("description", {
                                required: "Description is required",
                            })}
                            className="w-full rounded-[var(--radius)] border border-[var(--input-border)] bg-[var(--input-bg)] px-4 py-3 text-[var(--text-primary)] outline-none"
                        />
                        {errors.description && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.description.message}
                            </p>
                        )}
                    </div>

                    {/* Grid */}
                    <div className="grid gap-5 md:grid-cols-2">
                        {/* Assigned To */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-[var(--text-primary)]">
                                Assigned To
                            </label>
                            <select
                                {...register("assignedTo", {
                                    required: "Please select an employee",
                                })}
                                className="w-full rounded-[var(--radius)] border border-[var(--input-border)] bg-[var(--input-bg)] px-4 py-3 text-[var(--text-primary)] outline-none"
                            >
                                <option value="">Select employee</option>

                                {allEmploye.map((elm) => (
                                    <option key={elm.id} value={elm.id}>
                                        {elm.name}
                                    </option>
                                ))}
                            </select>

                            {errors.assignedTo && (
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.assignedTo.message}
                                </p>
                            )}
                        </div>

                        {/* Priority */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-[var(--text-primary)]">
                                Priority
                            </label>
                            <select
                                {...register("priority")}
                                className="w-full rounded-[var(--radius)] border border-[var(--input-border)] bg-[var(--input-bg)] px-4 py-3 text-[var(--text-primary)] outline-none"
                            >
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                            </select>
                        </div>

                        {/* Start Date */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-[var(--text-primary)]">
                                Start Date
                            </label>
                            <input
                                type="date"
                                {...register("startDate")}
                                className="w-full rounded-[var(--radius)] border border-[var(--input-border)] bg-[var(--input-bg)] px-4 py-3 text-[var(--text-primary)] outline-none"
                            />
                        </div>

                        {/* Due Date */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-[var(--text-primary)]">
                                Due Date
                            </label>
                            <input
                                type="date"
                                {...register("dueDate")}
                                className="w-full rounded-[var(--radius)] border border-[var(--input-border)] bg-[var(--input-bg)] px-4 py-3 text-[var(--text-primary)] outline-none"
                            />
                        </div>
                    </div>

                    {/* Status */}
                    <div>
                        <label className="mb-3 block text-sm font-medium text-[var(--text-primary)]">
                            Status
                        </label>

                        <div className="flex flex-wrap gap-3">
                            {["Pending", "In Progress", "Completed"].map((status) => (
                                <label
                                    key={status}
                                    className="flex items-center gap-2 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text-primary)]"
                                >
                                    <input
                                        type="radio"
                                        value={status}
                                        {...register("status")}
                                        className="accent-[var(--primary)]"
                                    />
                                    {status}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Estimated Hours */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-[var(--text-primary)]">
                            Estimated Hours
                        </label>
                        <input
                            type="number"
                            placeholder="e.g. 8"
                            {...register("estimatedHours")}
                            className="w-full rounded-[var(--radius)] border border-[var(--input-border)] bg-[var(--input-bg)] px-4 py-3 text-[var(--text-primary)] outline-none"
                        />
                    </div>

                    {/* Tags */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-[var(--text-primary)]">
                            Tags / Category
                        </label>
                        <input
                            type="text"
                            placeholder="Frontend, Bug, Design..."
                            {...register("tags")}
                            className="w-full rounded-[var(--radius)] border border-[var(--input-border)] bg-[var(--input-bg)] px-4 py-3 text-[var(--text-primary)] outline-none"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:justify-end">
                        <button
                            type="button"
                            onClick={() => reset()}
                            className="rounded-[var(--radius)] border border-[var(--border)] px-5 py-3 text-sm font-medium text-[var(--text-primary)] transition hover:bg-[var(--hover-bg)]"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="rounded-[var(--radius)] bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--primary-light)]"
                        >
                            Save Task
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}