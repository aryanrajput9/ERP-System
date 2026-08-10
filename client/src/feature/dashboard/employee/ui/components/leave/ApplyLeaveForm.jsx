import { Calendar, X } from "lucide-react";
import { useForm } from "react-hook-form";
import useEmployeeLeaveHook from "../../../hooks/useEmployeeLeaveHook";
import { useDispatch } from "react-redux";
import { setLeave } from "../../../state/employeeLeaveSlice";

function ApplyLeaveForm({ hide, setHide }) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const dispatch = useDispatch()

    const onSubmit = async (data) => {
        console.log(data);

        const resp = await useEmployeeLeaveHook.createLeaveHook(data)
        dispatch(setLeave(resp))


        reset();
        setHide(false);
    };

    if (!hide) return null;

    return (
        <div className="w-full max-w-2xl rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-lg">
            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-[var(--text-primary)]">
                    Apply Leave
                </h2>

                <button
                    type="button"
                    onClick={() => setHide(false)}
                    className="rounded-lg p-2 text-[var(--text-secondary)] hover:bg-[var(--hover-bg)]"
                >
                    <X size={18} />
                </button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Leave Type + Total Days */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                        <label className="mb-2 block text-sm font-medium text-[var(--text-primary)]">
                            Leave Type <span className="text-red-500">*</span>
                        </label>

                        <select
                            {...register("leaveType", {
                                required: "Leave type is required",
                            })}
                            className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none hover:border-[var(--primary)]"
                        >
                            <option value="">Select Leave Type</option>
                            <option value="Casual">Casual Leave</option>
                            <option value="Sick">Sick Leave</option>
                            <option value="Earned">Earned Leave</option>
                        </select>

                        {errors.leaveType && (
                            <p className="mt-1 text-xs text-red-500">
                                {errors.leaveType.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-[var(--text-primary)]">
                            Total Days
                        </label>

                        <input
                            type="text"
                            value="0"
                            readOnly
                            className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text-secondary)] outline-none"
                        />
                    </div>
                </div>

                {/* Start Date + End Date */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                        <label className="mb-2 block text-sm font-medium text-[var(--text-primary)]">
                            Start Date <span className="text-red-500">*</span>
                        </label>

                        <div className="relative">
                            <input
                                type="date"
                                {...register("startDate", {
                                    required: "Start date is required",
                                })}
                                className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 pr-11 text-sm text-[var(--text-primary)] outline-none hover:border-[var(--primary)]"
                            />

                            <Calendar className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--text-secondary)]" />
                        </div>

                        {errors.startDate && (
                            <p className="mt-1 text-xs text-red-500">
                                {errors.startDate.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-[var(--text-primary)]">
                            End Date <span className="text-red-500">*</span>
                        </label>

                        <div className="relative">
                            <input
                                type="date"
                                {...register("endDate", {
                                    required: "End date is required",
                                })}
                                className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 pr-11 text-sm text-[var(--text-primary)] outline-none hover:border-[var(--primary)]"
                            />

                            <Calendar className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--text-secondary)]" />
                        </div>

                        {errors.endDate && (
                            <p className="mt-1 text-xs text-red-500">
                                {errors.endDate.message}
                            </p>
                        )}
                    </div>
                </div>

                {/* Reason */}
                <div>
                    <label className="mb-2 block text-sm font-medium text-[var(--text-primary)]">
                        Reason <span className="text-red-500">*</span>
                    </label>

                    <textarea
                        rows={4}
                        placeholder="Enter reason for leave"
                        {...register("reason", {
                            required: "Reason is required",
                            minLength: {
                                value: 10,
                                message: "Reason must be at least 10 characters",
                            },
                        })}
                        className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none placeholder:text-[var(--text-secondary)] hover:border-[var(--primary)]"
                    />

                    {errors.reason && (
                        <p className="mt-1 text-xs text-red-500">
                            {errors.reason.message}
                        </p>
                    )}
                </div>

                {/* Footer */}
                <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                    <button
                        type="button"
                        onClick={() => setHide(false)}
                        className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-6 py-3 text-sm font-medium text-[var(--text-primary)] hover:bg-[var(--hover-bg)]"
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className="rounded-xl px-6 py-3 text-sm font-semibold text-[var(--text-white)] transition-all duration-200 hover:opacity-90"
                        style={{ background: "var(--primary)" }}
                    >
                        Submit Request
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ApplyLeaveForm;