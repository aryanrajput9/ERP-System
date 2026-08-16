import React from 'react'
import allLeaveDataHook from '../../hooks/allLeaveDataHook';

import { useForm } from "react-hook-form";

export default function ReasonLeave({ id, setOpen }) {



    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {

        const resp = await allLeaveDataHook.rejectLeave(id, data);
        console.log(resp)

        reset();
    };
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl dark:bg-slate-800"
        >
            <h2 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                Reject Leave
            </h2>

            <p className="mb-5 text-sm text-slate-500 dark:text-slate-400">
                Please provide a reason for rejecting this leave request.
            </p>

            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                Reason
            </label>

            <textarea
                rows={4}
                placeholder="Enter rejection reason..."
                {...register("reason", {
                    required: "Reason is required",
                    minLength: {
                        value: 5,
                        message: "Reason must be at least 5 characters",
                    },
                })}
                className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-400/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            />

            {errors.reason && (
                <p className="mt-1 text-sm text-red-500">
                    {errors.reason.message}
                </p>
            )}

            <div className="mt-5 flex justify-end gap-3">
                <button
                    type="button"
                    onClick={() => {
                        reset();
                        setOpen((prev) => !prev)
                    }}

                    className="rounded-xl px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700"
                >
                    Cancel
                </button>

                <button
                    type="submit"
                    className="rounded-xl bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600"
                >
                    Reject Leave
                </button>
            </div>
        </form>
    )
}
