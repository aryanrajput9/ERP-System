import {
    Pencil,
    UserRoundCog,
} from "lucide-react";

export default function EmployeeActions({
    employee,
    onClose,
    onAssignDepartment,
    onEditEmployee,
}) {
    const menuItem =
        "flex w-full items-center gap-2.5 px-3 py-2.5 text-left text-xs font-medium transition-colors";

    return (
        <div
            className="
                absolute
                right-0
                top-full
                mt-2
                z-[9999]
                w-48
                overflow-hidden
                rounded-lg
                border
                shadow-lg
            "
            style={{
                backgroundColor: "var(--card)",
                borderColor: "var(--border)",
            }}
        >
            {/* Edit Employee */}
            <button
                type="button"
                onClick={() => {
                    onClose();
                    onEditEmployee(employee);
                }}
                className={`${menuItem} hover:bg-slate-50 dark:hover:bg-slate-800`}
                style={{
                    color: "var(--text-secondary)",
                }}
            >
                <Pencil size={15} strokeWidth={1.8} />
                <span>Edit Employee</span>
            </button>

            {/* Assign Department */}
            <button
                type="button"
                onClick={() => {
                    onClose();
                    onAssignDepartment(employee);
                }}
                className={`${menuItem} text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-500/10`}
            >
                <UserRoundCog size={15} strokeWidth={1.8} />
                <span>Assign Department</span>
            </button>
        </div>
    );
}