export default function TeamStats({
    title,
    value,
    change,
    icon: Icon,
    iconBg,
    iconColor,
    changeColor,
}) {

    return (
        <div className="w-full">

            <div
                key={title}
                className="rounded-2xl border p-5 shadow-sm"
                style={{
                    backgroundColor: "var(--card)",
                    borderColor: "var(--border)",
                }}
            >
                <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={`rounded-2xl p-3 ${iconBg}`}>
                        <Icon className={iconColor} size={24} />
                    </div>

                    {/* Content */}
                    <div>
                        <p
                            className="text-sm"
                            style={{ color: "var(--text-secondary)" }}
                        >
                            {title}
                        </p>

                        <h3
                            className="mt-1 text-3xl font-bold"
                            style={{ color: "var(--text-primary)" }}
                        >
                            {value}
                        </h3>

                        <p className={`mt-2 text-sm font-medium ${changeColor}`}>
                            {change}
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}