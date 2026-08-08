import { CheckCircle2 } from "lucide-react";

export default function FeatureCard({
    variant,
    className = "",
    icon,
    title,
    description,
    image,
    list = [],
    link,
}) {
    return (
        <div
            className={`rounded-[var(--radius)] border bg-[var(--card)] p-8 ${className}`}
            style={{
                borderColor: "var(--border)",
                boxShadow: "var(--shadow-sm)",
            }}
        >
            {/* Analytics */}
            {variant === "analytics" && (
                <>
                    <div
                        className="w-fit rounded-xl p-3"
                        style={{
                            background: "var(--primary-bg)",
                            color: "var(--primary)",
                        }}
                    >
                        {icon}
                    </div>

                    <h3 className="mt-6 text-3xl font-semibold text-[var(--text-primary)]">
                        {title}
                    </h3>

                    <p className="mt-4 text-[15px] leading-8 text-[var(--text-secondary)]">
                        {description}
                    </p>

                    <div className="mt-10 overflow-hidden rounded-xl">
                        <img
                            src={image}
                            alt={title}
                            className="h-[260px] w-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                </>
            )}

            {/* Payroll */}
            {variant === "payroll" && (
                <div className="flex h-full flex-col">
                    <div
                        className="w-fit rounded-xl p-3"
                        style={{
                            background: "var(--primary-bg)",
                            color: "var(--primary)",
                        }}
                    >
                        {icon}
                    </div>

                    <h3 className="mt-6 text-3xl font-semibold text-[var(--text-primary)]">
                        {title}
                    </h3>

                    <p className="mt-4 text-[15px] leading-8 text-[var(--text-secondary)]">
                        {description}
                    </p>

                    <div className="mt-auto space-y-5 pt-12">
                        {list.map((item) => (
                            <div key={item} className="flex items-center gap-3">
                                <CheckCircle2
                                    size={18}
                                    style={{ color: "var(--success)" }}
                                />

                                <span className="text-base text-[var(--text-primary)]">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Simple */}
            {variant === "simple" && (
                <>
                    <div
                        className="w-fit rounded-xl p-3"
                        style={{
                            background: "var(--primary-bg)",
                            color: "var(--primary)",
                        }}
                    >
                        {icon}
                    </div>

                    <h3 className="mt-6 text-3xl font-semibold text-[var(--text-primary)]">
                        {title}
                    </h3>

                    <p className="mt-4 text-[15px] leading-8 text-[var(--text-secondary)]">
                        {description}
                    </p>
                </>
            )}

            {/* Time */}
            {variant === "time" && (
                <div className="flex h-full flex-col lg:flex-row">
                    <div className="flex flex-1 flex-col pr-0 lg:pr-8">
                        <div
                            className="w-fit rounded-xl p-3"
                            style={{
                                background: "var(--primary-bg)",
                                color: "var(--primary)",
                            }}
                        >
                            {icon}
                        </div>

                        <h3 className="mt-6 text-3xl font-semibold text-[var(--text-primary)]">
                            {title}
                        </h3>

                        <p className="mt-4 text-[15px] leading-8 text-[var(--text-secondary)]">
                            {description}
                        </p>

                        <button
                            className="mt-8 w-fit font-semibold transition-colors duration-300"
                            style={{
                                color: "var(--primary)",
                            }}
                        >
                            {link} →
                        </button>
                    </div>

                    <div className="mt-8 overflow-hidden rounded-xl lg:mt-0 lg:w-[42%]">
                        <img
                            src={image}
                            alt={title}
                            className="h-full min-h-[240px] w-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}