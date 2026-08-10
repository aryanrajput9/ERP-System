export default function ProfileHeader({ user }) {
    return (
        <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-sm">
            <div className="h-40 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500" />

            <div className="relative px-6 pb-6">
                <div className="-mt-16 flex items-end gap-4">
                    <img
                        src={user.profileImage}
                        alt={user.name}
                        className="h-28 w-28 rounded-3xl border-4 border-[var(--surface)] object-cover shadow-lg"
                    />

                    <div className="pb-2">
                        <h1 className="text-2xl font-bold text-[var(--text-primary)]">
                            {user.name}
                        </h1>

                        <p className="text-[var(--text-secondary)]">
                            {user.role}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}