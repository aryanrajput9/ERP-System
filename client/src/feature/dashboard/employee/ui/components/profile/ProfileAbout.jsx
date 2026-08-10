export default function ProfileAbout({ employeeId, department }) {
    return (
        <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-[var(--text-primary)]">
                Employee Details
            </h2>

            <div className="space-y-3 text-sm">
                <div>
                    <p className="text-[var(--text-secondary)]">Employee ID</p>
                    <p className="font-medium text-[var(--text-primary)]">
                        {employeeId}
                    </p>
                </div>

                <div>
                    <p className="text-[var(--text-secondary)]">Department</p>
                    <p className="font-medium text-[var(--text-primary)]">
                        {department || "Not assigned"}
                    </p>
                </div>
            </div>
        </div>
    );
}