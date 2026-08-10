export default function StatCard({ label, value }) {
    return (
        <div className="rounded-2xl border border-[var(--border)] p-5 text-center">
            <p className="text-sm text-[var(--text-secondary)]">{label}</p>

            <p className="mt-2 text-3xl font-bold text-[var(--text-primary)]">
                {value}
            </p>
        </div>
    );
}