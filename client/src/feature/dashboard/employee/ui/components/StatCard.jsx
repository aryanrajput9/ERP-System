import { useSelector } from "react-redux";
import colors from "tailwindcss/colors";

const StatCard = ({
    icon,
    type,
    suffix = "",
    label,
    badge,
    color = "primary",
}) => {

    const { history } = useSelector((state) => state.attendance)

    const value = history.filter(
        (item) => item.status === type
    ).length;

    return (
        <div
            className="rounded-[var(--radius)] border bg-[var(--card)] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--card-hover)]"
            style={{
                borderColor: "var(--border)",
                boxShadow: "var(--shadow-sm)",
            }}
        >
            <div className="mb-6 flex items-start justify-between">

                <div
                    className="text-3xl"
                    style={{
                        color: colors[color],
                    }}
                >
                    {icon}
                </div>

                {badge && (
                    <span
                        className="rounded-xl px-3 py-1 text-sm font-medium"
                        style={{
                            color: colors[color],
                            background: colors[color],
                        }}
                    >
                        {badge}
                    </span>
                )}

            </div>

            <h2 className="flex items-end gap-2 text-5xl font-bold text-[var(--text-primary)]">
                {value}

                {suffix && (
                    <span className="pb-1 text-2xl font-medium text-[var(--text-secondary)]">
                        {suffix}
                    </span>
                )}
            </h2>

            <p className="mt-2 text-lg font-medium text-[var(--text-secondary)]">
                {label}
            </p>
        </div>
    );
};


export default StatCard