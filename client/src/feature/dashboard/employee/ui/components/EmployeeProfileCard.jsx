const EmployeeProfileCard = ({
    employee
}) => {
    return (
        <div
            className="rounded-[var(--radius)] border bg-[var(--card)] p-8"
            style={{
                borderColor: "var(--border)",
                boxShadow: "var(--shadow-sm)",
            }}
        >
            {/* Profile */}
            <div className="flex flex-col items-center">
                <img
                    src={employee.profileImage}
                    alt={employee.name}
                    className="h-32 w-32 rounded-full border-4 object-cover"
                    style={{
                        borderColor: "var(--card)",
                        boxShadow: "var(--shadow-md)",
                    }}
                />

                <h2 className="mt-6 text-3xl font-bold text-[var(--text-primary)]">
                    {employee.name}
                </h2>

                <p className="mt-2 text-lg text-[var(--text-secondary)]">
                    {employee.role}
                </p>
            </div>

            {/* Details */}
            <div className="mt-8 rounded-2xl bg-[var(--background)] p-6">
                <InfoRow
                    label="Emp ID"
                    value={employee.employeeId}
                />

                <InfoRow
                    label="Department"
                    value={employee.department || "Web developer"}
                />

                <InfoRow
                    label="Role"
                    value={employee.role}
                    last
                />
            </div>
        </div>
    );
};

const InfoRow = ({ label, value, last }) => {
    return (
        <div
            className="flex items-center gap-4 py-4"
            style={{
                borderBottom: !last ? "1px solid var(--border)" : "none",
            }}
        >
            <span className="w-28 shrink-0 text-sm text-[var(--text-secondary)]">
                {label}
            </span>

            <span
                className="flex-1 truncate text-right text-sm font-semibold text-[var(--text-primary)]"
                title={value}
            >
                {value}
            </span>
        </div>
    );
};

export default EmployeeProfileCard;