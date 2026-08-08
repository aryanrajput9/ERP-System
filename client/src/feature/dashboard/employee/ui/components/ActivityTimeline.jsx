const ActivityTimeline = ({ activities, checkInTime }) => {
    return (
        <div
            className="rounded-[var(--radius)] border bg-[var(--card)] p-8"
            style={{
                borderColor: "var(--border)",
                boxShadow: "var(--shadow-sm)",
            }}
        >
            <h2 className="mb-8 text-3xl font-bold text-[var(--text-primary)]">
                Activity Timeline
            </h2>

            <div className="relative">
                {activities.map((item, index) => (
                    <div
                        key={index}
                        className="relative flex gap-6 pb-10 last:pb-0"
                    >
                        {/* Timeline */}
                        <div className="relative flex w-8 justify-center">
                            {index !== activities.length - 1 && (
                                <span
                                    className="absolute top-6 h-full w-px"
                                    style={{ background: "var(--border)" }}
                                />
                            )}

                            <span
                                className={`z-10 mt-1 h-5 w-5 rounded-full border-2 ${item.type === "completed"
                                    ? "border-[var(--primary)] bg-[var(--primary)]"
                                    : item.type === "pending"
                                        ? "border-[var(--text-muted)] bg-[var(--background)]"
                                        : "border-[var(--border)] bg-[var(--background)]"
                                    }`}
                            />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h3
                                        className={`text-xl font-semibold ${item.disabled
                                            ? "text-[var(--text-muted)]"
                                            : "text-[var(--text-primary)]"
                                            }`}
                                    >
                                        {item.title}
                                    </h3>

                                    <p
                                        className={`mt-1 text-sm ${item.disabled
                                            ? "text-[var(--text-muted)]"
                                            : "text-[var(--text-secondary)]"
                                            }`}
                                    >
                                        {item.subtitle}
                                    </p>
                                </div>

                                <span
                                    className={`text-sm font-medium ${item.disabled
                                        ? "text-[var(--text-muted)]"
                                        : "text-[var(--text-secondary)]"
                                        }`}
                                >
                                    {item.time}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ActivityTimeline;