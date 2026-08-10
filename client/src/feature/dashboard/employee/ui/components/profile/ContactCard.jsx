export default function ContactCard({ icon, title, value }) {
    return (
        <div className="rounded-2xl border border-[var(--border)] p-4 hover:bg-[var(--hover-bg)]">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--hover-bg)] text-[var(--text-primary)]">
                {icon}
            </div>

            <p className="text-sm text-[var(--text-secondary)]">{title}</p>

            <p className="mt-1 text-sm font-semibold text-[var(--text-primary)] break-all">
                {value}
            </p>
        </div>
    );
}