export default function DashboardHero() {
    const stats = [
        {
            title: "Total Payroll Processed",
            value: "$14.2M",
            color: "var(--text-primary)",
        },
        {
            title: "Active Employees",
            value: "2,481",
            color: "var(--text-primary)",
        },
        {
            title: "System Uptime",
            value: "99.99%",
            color: "var(--success)",
        },
    ];

    return (
        <section className="bg-[var(--background)] py-20">
            <div
                className="mx-auto max-w-7xl overflow-hidden rounded-[var(--radius)] border bg-[var(--card)]"
                style={{
                    borderColor: "var(--border)",
                    boxShadow: "var(--shadow-lg)",
                }}
            >
                {/* Image */}

                <div className="h-[480px] overflow-hidden">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHtQXyAMTe7Zhvm8bSV2S80Xt5sPjYopKhpn5VcVrXqw&s=10"
                        alt="ERP Dashboard"
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                </div>

                {/* Stats */}

                <div className="grid grid-cols-1 md:grid-cols-3">
                    {stats.map((item, index) => (
                        <div
                            key={item.title}
                            className="border-t p-6"
                            style={{
                                borderColor: "var(--border)",
                                borderRight:
                                    index !== stats.length - 1
                                        ? "1px solid var(--border)"
                                        : "none",
                            }}
                        >
                            <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                                {item.title}
                            </p>

                            <h2
                                className="mt-3 text-4xl font-bold"
                                style={{
                                    color: item.color,
                                }}
                            >
                                {item.value}
                            </h2>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}