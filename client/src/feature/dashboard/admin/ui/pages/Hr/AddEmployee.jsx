

import { useForm } from "react-hook-form";

import {
    User,
    BriefcaseBusiness,
    MapPin,
    LockKeyhole,
    ArrowLeft,
} from "lucide-react";

function AddEmployee() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            country: "India",
            role: "Employee",
            isActive: true,
        },
    });

    const onSubmit = (data) => {
        console.log("Employee Data:", data);
    };

    return (
        <div className="min-h-full pb-10 text-white">

            {/* HEADER */}
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <p className="mb-2 text-xs text-slate-500">
                        Employees / Add Employee
                    </p>

                    <h1 className="text-2xl font-bold">
                        Add New Employee
                    </h1>

                    <p className="mt-1 text-sm text-slate-400">
                        Create a new employee profile and assign their
                        organization details.
                    </p>
                </div>

                <button
                    type="button"
                    onClick={() => window.history.back()}
                    className="flex items-center gap-2 rounded-lg border border-slate-700 bg-[#111925] px-4 py-2.5 text-xs text-slate-300 transition hover:bg-slate-800 hover:text-white"
                >
                    <ArrowLeft size={16} />
                    Back
                </button>
            </div>


            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_300px]">

                    {/* =====================================
                        LEFT SIDE
                    ====================================== */}

                    <div className="space-y-5">

                        {/* PERSONAL INFORMATION */}

                        <section className="rounded-2xl border border-slate-800 bg-[#101622] p-5">

                            <div className="mb-5 flex items-center gap-3 border-b border-slate-800 pb-4">

                                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                                    <User size={18} />
                                </div>

                                <div>
                                    <h2 className="text-sm font-semibold">
                                        Personal Information
                                    </h2>

                                    <p className="mt-1 text-[10px] text-slate-500">
                                        Basic information about the employee
                                    </p>
                                </div>

                            </div>


                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                                {/* Employee ID */}

                                <Field
                                    label="Employee ID"
                                    error={errors.employeeId}
                                >
                                    <input
                                        {...register("employeeId", {
                                            required:
                                                "Employee ID is required",
                                        })}
                                        placeholder="EMP0019"
                                        className={inputClass}
                                    />
                                </Field>


                                {/* First Name */}

                                <Field
                                    label="First Name"
                                    required
                                    error={errors.firstName}
                                >
                                    <input
                                        {...register("firstName", {
                                            required:
                                                "First name is required",
                                        })}
                                        placeholder="Priya"
                                        className={inputClass}
                                    />
                                </Field>


                                {/* Last Name */}

                                <Field
                                    label="Last Name"
                                    required
                                    error={errors.lastName}
                                >
                                    <input
                                        {...register("lastName", {
                                            required:
                                                "Last name is required",
                                        })}
                                        placeholder="Verma"
                                        className={inputClass}
                                    />
                                </Field>


                                {/* Email */}

                                <Field
                                    label="Email Address"
                                    required
                                    error={errors.email}
                                >
                                    <input
                                        type="email"
                                        {...register("email", {
                                            required:
                                                "Email is required",
                                        })}
                                        placeholder="priya@company.com"
                                        className={inputClass}
                                    />
                                </Field>


                                {/* Phone */}

                                <Field
                                    label="Phone"
                                    required
                                    error={errors.phone}
                                >
                                    <input
                                        {...register("phone", {
                                            required:
                                                "Phone is required",
                                        })}
                                        placeholder="9823456789"
                                        className={inputClass}
                                    />
                                </Field>


                                {/* Gender */}

                                <Field
                                    label="Gender"
                                    required
                                    error={errors.gender}
                                >
                                    <select
                                        {...register("gender", {
                                            required:
                                                "Gender is required",
                                        })}
                                        className={selectClass}
                                    >
                                        <option value="">
                                            Select gender
                                        </option>

                                        <option value="Male">
                                            Male
                                        </option>

                                        <option value="Female">
                                            Female
                                        </option>

                                        <option value="Other">
                                            Other
                                        </option>
                                    </select>
                                </Field>


                                {/* DOB */}

                                <Field
                                    label="Date of Birth"
                                    error={errors.dateOfBirth}
                                >
                                    <input
                                        type="date"
                                        {...register("dateOfBirth")}
                                        className={inputClass}
                                    />
                                </Field>

                            </div>
                        </section>


                        {/* =====================================
                            EMPLOYMENT DETAILS
                        ====================================== */}

                        <section className="rounded-2xl border border-slate-800 bg-[#101622] p-5">

                            <div className="mb-5 flex items-center gap-3 border-b border-slate-800 pb-4">

                                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
                                    <BriefcaseBusiness size={18} />
                                </div>

                                <div>
                                    <h2 className="text-sm font-semibold">
                                        Employment Details
                                    </h2>

                                    <p className="mt-1 text-[10px] text-slate-500">
                                        Job role and organization details
                                    </p>
                                </div>

                            </div>


                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                                {/* Department */}

                                <Field label="Department">
                                    <select
                                        {...register("department")}
                                        className={selectClass}
                                    >
                                        <option value="">
                                            Select department
                                        </option>

                                        <option value="Engineering">
                                            Engineering
                                        </option>

                                        <option value="Design">
                                            Design
                                        </option>

                                        <option value="Marketing">
                                            Marketing
                                        </option>

                                        <option value="HR">
                                            HR
                                        </option>

                                        <option value="Finance">
                                            Finance
                                        </option>

                                        <option value="Support">
                                            Support
                                        </option>
                                    </select>
                                </Field>


                                {/* Designation */}

                                <Field label="Designation">
                                    <input
                                        {...register("designation")}
                                        placeholder="Frontend Developer"
                                        className={inputClass}
                                    />
                                </Field>


                                {/* Employment Type */}

                                <Field label="Employment Type">
                                    <select
                                        {...register("employmentType")}
                                        className={selectClass}
                                    >
                                        <option value="">
                                            Select employment type
                                        </option>

                                        <option value="Full-Time">
                                            Full-Time
                                        </option>

                                        <option value="Part-Time">
                                            Part-Time
                                        </option>

                                        <option value="Contract">
                                            Contract
                                        </option>

                                        <option value="Intern">
                                            Intern
                                        </option>
                                    </select>
                                </Field>


                                {/* Role */}

                                <Field label="Role">
                                    <select
                                        {...register("role")}
                                        className={selectClass}
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
                                    </select>
                                </Field>


                                {/* Manager */}

                                <Field label="Reporting Manager">
                                    <select
                                        {...register(
                                            "reportingManager"
                                        )}
                                        className={selectClass}
                                    >
                                        <option value="">
                                            Select manager
                                        </option>

                                        <option value="Aryan Rajput">
                                            Aryan Rajput
                                        </option>

                                        <option value="Rahul Sharma">
                                            Rahul Sharma
                                        </option>

                                        <option value="Priya Singh">
                                            Priya Singh
                                        </option>
                                    </select>
                                </Field>


                                {/* Salary */}

                                <Field label="Salary">
                                    <input
                                        type="number"
                                        {...register("salary", {
                                            valueAsNumber: true,
                                        })}
                                        placeholder="75000"
                                        className={inputClass}
                                    />
                                </Field>


                                {/* Joining Date */}

                                <Field label="Joining Date">
                                    <input
                                        type="date"
                                        {...register("joiningDate")}
                                        className={inputClass}
                                    />
                                </Field>

                            </div>
                        </section>


                        {/* =====================================
                            ACCOUNT
                        ====================================== */}

                        <section className="rounded-2xl border border-slate-800 bg-[#101622] p-5">

                            <div className="mb-5 flex items-center gap-3 border-b border-slate-800 pb-4">

                                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500/10 text-orange-400">
                                    <LockKeyhole size={18} />
                                </div>

                                <div>
                                    <h2 className="text-sm font-semibold">
                                        Account Information
                                    </h2>

                                    <p className="mt-1 text-[10px] text-slate-500">
                                        Login credentials for employee portal
                                    </p>
                                </div>

                            </div>


                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                                <Field
                                    label="Password"
                                    required
                                    error={errors.password}
                                >
                                    <input
                                        type="password"
                                        {...register("password", {
                                            required:
                                                "Password is required",
                                            minLength: {
                                                value: 6,
                                                message:
                                                    "Password must be at least 6 characters",
                                            },
                                        })}
                                        placeholder="Enter password"
                                        className={inputClass}
                                    />
                                </Field>

                            </div>

                        </section>


                        {/* =====================================
                            ADDRESS
                        ====================================== */}

                        <section className="rounded-2xl border border-slate-800 bg-[#101622] p-5">

                            <div className="mb-5 flex items-center gap-3 border-b border-slate-800 pb-4">

                                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                                    <MapPin size={18} />
                                </div>

                                <div>
                                    <h2 className="text-sm font-semibold">
                                        Address Information
                                    </h2>

                                    <p className="mt-1 text-[10px] text-slate-500">
                                        Employee residential address
                                    </p>
                                </div>

                            </div>


                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                                <div className="md:col-span-2">
                                    <Field label="Address">
                                        <input
                                            {...register("address")}
                                            placeholder="Sector 18"
                                            className={inputClass}
                                        />
                                    </Field>
                                </div>


                                <Field label="City">
                                    <input
                                        {...register("city")}
                                        placeholder="Noida"
                                        className={inputClass}
                                    />
                                </Field>


                                <Field label="State">
                                    <input
                                        {...register("state")}
                                        placeholder="Uttar Pradesh"
                                        className={inputClass}
                                    />
                                </Field>


                                <Field label="Country">
                                    <input
                                        {...register("country")}
                                        placeholder="India"
                                        className={inputClass}
                                    />
                                </Field>


                                <Field label="Pincode">
                                    <input
                                        {...register("pincode")}
                                        placeholder="201301"
                                        className={inputClass}
                                    />
                                </Field>

                            </div>

                        </section>

                    </div>


                    {/* =====================================
                        RIGHT SIDEBAR
                    ====================================== */}

                    <div className="space-y-5">

                        {/* Profile */}

                        <section className="rounded-2xl border border-slate-800 bg-[#101622] p-5">

                            <h2 className="text-sm font-semibold">
                                Profile Photo
                            </h2>

                            <div className="mt-5 flex flex-col items-center">

                                <div className="flex h-28 w-28 items-center justify-center rounded-full border border-dashed border-slate-700 bg-[#0c1420]">

                                    <User
                                        size={32}
                                        className="text-slate-600"
                                    />

                                </div>

                                <label className="mt-4 cursor-pointer text-xs font-medium text-emerald-400">
                                    Upload Photo

                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        {...register(
                                            "profileImage"
                                        )}
                                    />
                                </label>

                                <p className="mt-1 text-[10px] text-slate-600">
                                    JPG or PNG
                                </p>

                            </div>

                        </section>


                        {/* Status */}

                        <section className="rounded-2xl border border-slate-800 bg-[#101622] p-5">

                            <h2 className="text-sm font-semibold">
                                Employee Status
                            </h2>

                            <div className="mt-4 flex items-center justify-between">

                                <div>
                                    <p className="text-xs text-white">
                                        Active Account
                                    </p>

                                    <p className="mt-1 text-[10px] text-slate-500">
                                        Employee can login to portal
                                    </p>
                                </div>

                                <label className="relative cursor-pointer">

                                    <input
                                        type="checkbox"
                                        {...register("isActive")}
                                        className="peer sr-only"
                                    />

                                    <div className="h-6 w-11 rounded-full bg-slate-700 transition peer-checked:bg-emerald-400" />

                                    <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition peer-checked:translate-x-5" />

                                </label>

                            </div>

                        </section>


                        {/* Summary */}

                        <section className="rounded-2xl border border-slate-800 bg-[#101622] p-5">

                            <h2 className="text-sm font-semibold">
                                Before Creating
                            </h2>

                            <div className="mt-4 space-y-3">

                                <Summary text="Employee portal access" />

                                <Summary text="Active account" />

                                <Summary text="Organization profile" />

                                <Summary text="Attendance tracking" />

                                <Summary text="Leave management" />

                            </div>

                        </section>

                    </div>

                </div>


                {/* FOOTER */}

                <div className="mt-5 flex justify-end gap-3 border-t border-slate-800 pt-5">

                    <button
                        type="button"
                        onClick={() => window.history.back()}
                        className="rounded-lg border border-slate-700 bg-[#111925] px-5 py-2.5 text-sm text-slate-300 hover:bg-slate-800"
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className="rounded-lg bg-emerald-400 px-6 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
                    >
                        Create Employee
                    </button>

                </div>

            </form>
        </div>
    );
}


/* =====================================
   REUSABLE FIELD
===================================== */

function Field({
    label,
    required = false,
    error,
    children,
}) {
    return (
        <div>
            <label className="mb-2 block text-xs font-medium text-slate-300">
                {label}

                {required && (
                    <span className="ml-1 text-red-400">
                        *
                    </span>
                )}
            </label>

            {children}

            {error && (
                <p className="mt-1 text-[10px] text-red-400">
                    {error.message}
                </p>
            )}
        </div>
    );
}


/* =====================================
   REUSABLE SUMMARY
===================================== */

function Summary({ text }) {
    return (
        <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/10 text-[10px] text-emerald-400">
                ✓
            </span>

            <span className="text-xs text-slate-400">
                {text}
            </span>
        </div>
    );
}


/* =====================================
   TAILWIND CLASSES
===================================== */

const inputClass =
    "h-11 w-full rounded-lg border border-slate-800 bg-[#0c1420] px-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-emerald-400/50 focus:ring-1 focus:ring-emerald-400/10";

const selectClass =
    "h-11 w-full rounded-lg border border-slate-800 bg-[#0c1420] px-3 text-sm text-slate-300 outline-none focus:border-emerald-400/50 focus:ring-1 focus:ring-emerald-400/10";




/* =========================================
   INPUT COMPONENT
========================================= */

function Input({
    label,
    name,
    type = "text",
    value,
    onChange,
    placeholder,
    required = false,
}) {
    return (
        <div>
            <label className="mb-2 block text-xs font-medium text-slate-300">
                {label}

                {required && (
                    <span className="ml-1 text-red-400">
                        *
                    </span>
                )}
            </label>

            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className="h-11 w-full rounded-lg border border-slate-800 bg-[#0c1420] px-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-emerald-400/50"
            />
        </div>
    );
}


/* =========================================
   SELECT COMPONENT
========================================= */

function Select({
    label,
    name,
    value,
    onChange,
    options,
    placeholder,
    required = false,
}) {
    return (
        <div>
            <label className="mb-2 block text-xs font-medium text-slate-300">
                {label}

                {required && (
                    <span className="ml-1 text-red-400">
                        *
                    </span>
                )}
            </label>

            <select
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                className="h-11 w-full rounded-lg border border-slate-800 bg-[#0c1420] px-3 text-sm text-slate-300 outline-none focus:border-emerald-400/50"
            >
                {placeholder && (
                    <option value="">
                        {placeholder}
                    </option>
                )}

                {options.map((option) => (
                    <option
                        key={option}
                        value={option}
                    >
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}


/* =========================================
   SUMMARY ITEM
========================================= */

function SummaryItem({ text }) {
    return (
        <div className="flex items-center gap-2">

            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/10 text-xs text-emerald-400">
                ✓
            </span>

            <span className="text-xs text-slate-300">
                {text}
            </span>

        </div>
    );
}

export default AddEmployee;