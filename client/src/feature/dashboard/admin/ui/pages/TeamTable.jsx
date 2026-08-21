import { MoreVertical, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import EmployeeActions from "../components/EmployeeActions";
import { useState } from "react";
import useAllEmployeeData from "../../hooks/useAllEmployeData";
import { setAllEmploye } from "../../state/adminSlice";
import EditEmployee from "../components/EditEmployee";

export default function TeamTable() {
    const { allEmploye } = useSelector((state) => state.admin);

    const [openEmployee, setOpenEmployee] = useState(null);

    // Department modal
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [department, setDepartment] = useState("");
    const [editEmployee, setEditEmployee] = useState(null);



    const dispatch = useDispatch()

    const setDepartmentFn = async (id, department) => {
        try {
            const resp =
                await useAllEmployeeData.setDepartmentHook(
                    id,
                    department
                );
            const resps = await useAllEmployeeData.getAllEmployee();

            dispatch(setAllEmploye(resps))

            // Sirf successful request ke baad close
            setSelectedEmployee(null);
            setDepartment("");
            return resp;

        } catch (error) {
            console.log(
                "Department Error:",
                error?.response?.data || error
            );
        }
    };

    const handleAssignDepartment = (employee) => {
        setOpenEmployee(null);
        setSelectedEmployee(employee);
        setDepartment(employee.department || "");
    };

    return (
        <>
            {/* TABLE */}
            <div
                className="rounded-2xl border shadow-sm"
                style={{
                    backgroundColor: "var(--card)",
                    borderColor: "var(--border)",
                }}
            >
                {/* Header */}
                <div
                    className="grid grid-cols-[2fr_1.5fr_1.2fr_1fr_1fr_80px] gap-4 border-b px-6 py-4 text-sm font-medium"
                    style={{
                        backgroundColor: "var(--surface-2)",
                        borderColor: "var(--border)",
                        color: "var(--text-muted)",
                    }}
                >
                    <p>Employee</p>
                    <p>Role</p>
                    <p>Department</p>
                    <p>Status</p>
                    <p>Joined On</p>
                    <p className="text-center">Action</p>
                </div>

                {/* Rows */}
                <div
                    className="divide-y"
                    style={{ borderColor: "var(--border)" }}
                >
                    {allEmploye.map((emp) => (
                        <div
                            key={emp.email}
                            className="relative grid grid-cols-[2fr_1.5fr_1.2fr_1fr_1fr_80px] items-center gap-4 px-6 py-4"
                        >
                            {/* Employee */}
                            <div className="flex items-center gap-3">
                                <img
                                    src={emp.profileImage}
                                    alt={emp.name}
                                    className="h-10 w-10 rounded-full object-cover"
                                />

                                <div>
                                    <p
                                        className="text-sm font-medium"
                                        style={{
                                            color: "var(--text-primary)",
                                        }}
                                    >
                                        {emp.name}
                                    </p>

                                    <p
                                        className="text-xs"
                                        style={{
                                            color: "var(--text-secondary)",
                                        }}
                                    >
                                        {emp.email}
                                    </p>
                                </div>
                            </div>

                            {/* Role */}
                            <p
                                className="text-sm"
                                style={{
                                    color: "var(--text-secondary)",
                                }}
                            >
                                {emp.role}
                            </p>

                            {/* Department */}
                            <p
                                className="text-sm"
                                style={{
                                    color: "var(--text-secondary)",
                                }}
                            >
                                {emp.department || "Not Assigned"}
                            </p>

                            {/* Status */}
                            <div>
                                <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700 dark:bg-green-500/15 dark:text-green-400">
                                    <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                                    Active
                                </span>
                            </div>

                            {/* Joined */}
                            <p
                                className="text-sm"
                                style={{
                                    color: "var(--text-secondary)",
                                }}
                            >
                                {new Date(
                                    emp.joiningDate
                                ).toLocaleDateString("en-IN", {
                                    day: "2-digit",
                                    month: "short",
                                    year: "numeric",
                                })}
                            </p>

                            {/* Action */}
                            <div className="relative z-50 flex justify-center">
                                <button
                                    onClick={() =>
                                        setOpenEmployee((prev) =>
                                            prev === emp.email
                                                ? null
                                                : emp.email
                                        )
                                    }
                                    className="rounded-lg p-2 transition"
                                    style={{
                                        color: "var(--text-muted)",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor =
                                            "var(--hover-bg)";
                                        e.currentTarget.style.color =
                                            "var(--hover-text)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor =
                                            "transparent";
                                        e.currentTarget.style.color =
                                            "var(--text-muted)";
                                    }}
                                >
                                    <MoreVertical size={18} />
                                </button>

                                {openEmployee === emp.email && (
                                    <EmployeeActions
                                        employee={emp}
                                        onClose={() =>
                                            setOpenEmployee(null)
                                        }
                                        onAssignDepartment={
                                            handleAssignDepartment
                                        }
                                        onEditEmployee={(employee) => {
                                            setOpenEmployee(null);
                                            setEditEmployee(employee);
                                        }}
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            {/* ASSIGN DEPARTMENT MODAL */}
            {selectedEmployee && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/30 backdrop-blur-sm">
                    <div
                        className="w-full max-w-sm rounded-2xl border p-5 shadow-2xl"
                        style={{
                            backgroundColor: "var(--card)",
                            borderColor: "var(--border)",
                        }}
                    >
                        {/* Header */}
                        <div className="mb-5 flex items-center justify-between">
                            <div>
                                <h2
                                    className="text-base font-semibold"
                                    style={{
                                        color: "var(--text-primary)",
                                    }}
                                >
                                    Assign Department
                                </h2>

                                <p
                                    className="mt-1 text-xs"
                                    style={{
                                        color: "var(--text-secondary)",
                                    }}
                                >
                                    {selectedEmployee.name}
                                </p>
                            </div>

                            <button
                                onClick={() => {
                                    setSelectedEmployee(null);

                                }}
                                className="rounded-lg p-2 transition hover:bg-slate-100 dark:hover:bg-slate-800"
                            >
                                <X
                                    size={18}
                                    style={{
                                        color: "var(--text-muted)",
                                    }}
                                />
                            </button>
                        </div>

                        {/* Input */}
                        <div>
                            <label
                                className="mb-2 block text-xs font-medium"
                                style={{
                                    color: "var(--text-secondary)",
                                }}
                            >
                                Department
                            </label>

                            <input
                                type="text"
                                value={department}
                                onChange={(e) =>
                                    setDepartment(e.target.value)
                                }
                                placeholder="Enter department"
                                autoFocus
                                className="w-full rounded-xl border px-3 py-2.5 text-sm outline-none transition focus:border-indigo-500"
                                style={{
                                    backgroundColor: "var(--surface-2)",
                                    borderColor: "var(--border)",
                                    color: "var(--text-primary)",
                                }}
                            />
                        </div>

                        {/* Buttons */}
                        <div className="mt-5 flex justify-end gap-2">

                            <button
                                onClick={() => {
                                    setSelectedEmployee(null);

                                }}

                                className="rounded-lg px-4 py-2 text-xs font-medium transition hover:bg-slate-100 dark:hover:bg-slate-800"
                                style={{
                                    color: "var(--text-secondary)",
                                }}
                            >
                                Cancel
                            </button>

                            <button
                                disabled={!department.trim()}
                                onClick={() =>
                                    setDepartmentFn(
                                        selectedEmployee.id,
                                        department.trim()
                                    )
                                }
                                className="rounded-lg bg-indigo-600 px-4 py-2 text-xs font-medium text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                Assign Department
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {editEmployee && (
                <EditEmployee
                    employee={editEmployee}
                    onClose={() => setEditEmployee(null)}
                    selectedEmployee={selectedEmployee}
                />
            )}
        </>
    );
}