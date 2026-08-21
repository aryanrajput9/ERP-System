import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

function EditEmployee({
    employee,
    managers = [],
    onClose,
}) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            department: "",
            designation: "",
            role: "Employee",
            reportingManager: "",
            employmentType: "",
            salary: "",
            address: "",
            city: "",
            state: "",
            country: "",
            pincode: "",
            isActive: true,
        },
    });

    console.log(employee)

    // Existing employee ka data form mein fill
    useEffect(() => {


        reset({
            firstName: employee.name || "",
            lastName: employee.lastName || "",
            email: employee.email || "",
            phone: employee.phone || "",

            department:
                employee.department?._id ||
                employee.department ||
                "",

            designation:
                employee.designation?._id ||
                employee.designation ||
                "",

            role: employee.role || "Employee",

            reportingManager:
                employee.reportingManager?._id ||
                employee.reportingManager ||
                "",

            employmentType:
                employee.employmentType || "",

            salary: employee.salary || "",

            address: employee.address || "",
            city: employee.city || "",
            state: employee.state || "",
            country: employee.country || "",
            pincode: employee.pincode || "",

            isActive: employee.isActive ?? true,
        });
    }, [employee, reset]);

    const onSubmit = async (data) => {
        console.log("Edit Employee Data:", data);

        /*
        await onSubmitEmployee(employee._id, data);
        onClose();
        */
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">

            <div className="w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl">

                {/* Header */}
                <div className="sticky top-0 z-10 flex items-center justify-between border-b bg-white px-7 py-5">

                    <div>
                        <h2 className="text-xl font-semibold text-slate-900">
                            Edit Employee
                        </h2>

                        <p className="mt-1 text-sm text-slate-500">
                            Update employee information
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="text-2xl text-slate-400 hover:text-slate-700"
                    >
                        ×
                    </button>
                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="p-7"
                >

                    {/* ================= PERSONAL ================= */}

                    <div className="mb-8">

                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-700">
                            Personal Information
                        </h3>

                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                            {/* First Name */}
                            <div>
                                <label className="mb-2 block text-sm font-medium">
                                    First Name
                                </label>

                                <input
                                    {...register("firstName", {
                                        required: "First name is required",
                                    })}
                                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500"
                                />

                                {errors.firstName && (
                                    <p className="mt-1 text-sm text-red-500">
                                        {errors.firstName.message}
                                    </p>
                                )}
                            </div>

                            {/* Last Name */}
                            <div>
                                <label className="mb-2 block text-sm font-medium">
                                    Last Name
                                </label>

                                <input
                                    {...register("lastName", {
                                        required: "Last name is required",
                                    })}
                                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500"
                                />

                                {errors.lastName && (
                                    <p className="mt-1 text-sm text-red-500">
                                        {errors.lastName.message}
                                    </p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label className="mb-2 block text-sm font-medium">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    {...register("email", {
                                        required: "Email is required",
                                    })}
                                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500"
                                />

                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-500">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="mb-2 block text-sm font-medium">
                                    Phone
                                </label>

                                <input
                                    {...register("phone")}
                                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500"
                                />
                            </div>

                        </div>
                    </div>

                    {/* ================= EMPLOYMENT ================= */}

                    <div className="mb-8">

                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-700">
                            Employment Information
                        </h3>

                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                            {/* Department */}
                            <div>
                                <label className="mb-2 block text-sm font-medium">
                                    Department
                                </label>

                                <select
                                    {...register("department", {
                                        required: "Department is required",
                                    })}
                                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-indigo-500"
                                >
                                    <option value="">
                                        Select Department
                                    </option>

                                    {employee.department}
                                </select>

                                {errors.department && (
                                    <p className="mt-1 text-sm text-red-500">
                                        {errors.department.message}
                                    </p>
                                )}
                            </div>

                            {/* Designation */}
                            <div>
                                <label className="mb-2 block text-sm font-medium">
                                    Designation
                                </label>

                                <select
                                    {...register("designation", {
                                        required: "Designation is required",
                                    })}
                                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-indigo-500"
                                >
                                    <option value="">
                                        Select Designation
                                    </option>

                                </select>

                                {errors.designation && (
                                    <p className="mt-1 text-sm text-red-500">
                                        {errors.designation.message}
                                    </p>
                                )}
                            </div>

                            {/* Role */}
                            <div>
                                <label className="mb-2 block text-sm font-medium">
                                    Role
                                </label>

                                <select
                                    {...register("role")}
                                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-indigo-500"
                                >
                                    <option value="Employee">
                                        Employee
                                    </option>

                                    <option value="Manager">
                                        Manager
                                    </option>

                                    <option value="HR">
                                        HR
                                    </option>

                                    <option value="Admin">
                                        Admin
                                    </option>
                                </select>
                            </div>

                            {/* Reporting Manager */}
                            <div>
                                <label className="mb-2 block text-sm font-medium">
                                    Reporting Manager
                                </label>

                                <select
                                    {...register("reportingManager")}
                                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-indigo-500"
                                >
                                    <option value="">
                                        Select Reporting Manager
                                    </option>

                                    {managers.map((manager) => (
                                        <option
                                            key={manager._id}
                                            value={manager._id}
                                        >
                                            {manager.firstName}{" "}
                                            {manager.lastName}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Employment Type */}
                            <div>
                                <label className="mb-2 block text-sm font-medium">
                                    Employment Type
                                </label>

                                <select
                                    {...register("employmentType")}
                                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-indigo-500"
                                >
                                    <option value="">
                                        Select Type
                                    </option>

                                    <option value="Full-Time">
                                        Full-Time
                                    </option>

                                    <option value="Part-Time">
                                        Part-Time
                                    </option>

                                    <option value="Intern">
                                        Intern
                                    </option>

                                    <option value="Contract">
                                        Contract
                                    </option>
                                </select>
                            </div>

                            {/* Salary */}
                            <div>
                                <label className="mb-2 block text-sm font-medium">
                                    Salary
                                </label>

                                <input
                                    type="number"
                                    {...register("salary", {
                                        valueAsNumber: true,
                                        min: {
                                            value: 0,
                                            message: "Salary cannot be negative",
                                        },
                                    })}
                                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500"
                                />

                                {errors.salary && (
                                    <p className="mt-1 text-sm text-red-500">
                                        {errors.salary.message}
                                    </p>
                                )}
                            </div>

                        </div>
                    </div>

                    {/* ================= ADDRESS ================= */}

                    <div className="mb-8">

                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-700">
                            Address
                        </h3>

                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                            <div className="md:col-span-2">
                                <label className="mb-2 block text-sm font-medium">
                                    Address
                                </label>

                                <textarea
                                    rows="3"
                                    {...register("address")}
                                    className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium">
                                    City
                                </label>

                                <input
                                    {...register("city")}
                                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium">
                                    State
                                </label>

                                <input
                                    {...register("state")}
                                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium">
                                    Country
                                </label>

                                <input
                                    {...register("country")}
                                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium">
                                    Pincode
                                </label>

                                <input
                                    {...register("pincode")}
                                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500"
                                />
                            </div>

                        </div>
                    </div>

                    {/* ================= STATUS ================= */}

                    <div className="mb-8">

                        <label className="mb-2 block text-sm font-medium">
                            Account Status
                        </label>

                        <select
                            {...register("isActive", {
                                setValueAs: (value) =>
                                    value === "true",
                            })}
                            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-indigo-500"
                        >
                            <option value="true">
                                Active
                            </option>

                            <option value="false">
                                Inactive
                            </option>
                        </select>

                    </div>

                    {/* ================= BUTTONS ================= */}

                    <div className="flex justify-end gap-3 border-t border-slate-200 pt-6">

                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-xl border border-slate-200 px-6 py-3 font-medium text-slate-600 hover:bg-slate-50"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="rounded-xl bg-indigo-600 px-7 py-3 font-medium text-white hover:bg-indigo-700 disabled:opacity-60"
                        >
                            {isSubmitting
                                ? "Saving..."
                                : "Save Changes"}
                        </button>

                    </div>

                </form>
            </div>
        </div>
    );
}

export default EditEmployee;