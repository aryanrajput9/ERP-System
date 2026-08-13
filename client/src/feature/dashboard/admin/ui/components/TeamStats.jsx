export default function TeamStats({ stats }) {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => {
                const Icon = item.icon;

                return (
                    <div
                        key={item.title}
                        className="rounded-2xl border p-5 shadow-sm"
                        style={{
                            backgroundColor: "var(--card)",
                            borderColor: "var(--border)",
                        }}
                    >
                        <div className="flex items-start gap-4">
                            {/* Icon */}
                            <div className={`rounded-2xl p-3 ${item.iconBg}`}>
                                <Icon className={item.iconColor} size={24} />
                            </div>

                            {/* Content */}
                            <div>
                                <p
                                    className="text-sm"
                                    style={{ color: "var(--text-secondary)" }}
                                >
                                    {item.title}
                                </p>

                                <h3
                                    className="mt-1 text-3xl font-bold"
                                    style={{ color: "var(--text-primary)" }}
                                >
                                    {item.value}
                                </h3>

                                <p className={`mt-2 text-sm font-medium ${item.changeColor}`}>
                                    {item.change}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}