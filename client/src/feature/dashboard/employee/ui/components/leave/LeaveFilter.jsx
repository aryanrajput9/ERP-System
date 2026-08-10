
function LeaveFilter() {
    return (
        <div className="inline-flex items-center gap-2 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-2 shadow-sm">

            <button className="rounded-xl bg-[var(--primary)] px-4 py-2 text-sm font-medium text-[var(--text-white)] shadow-sm">
                All
            </button>

            <button className="rounded-xl px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:bg-[var(--hover-bg)]">
                Pending
            </button>

            <button className="rounded-xl px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:bg-[var(--hover-bg)]">
                Approved
            </button>

            <button className="rounded-xl px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:bg-[var(--hover-bg)]">
                Rejected
            </button>
        </div>
    );
}

export default LeaveFilter;