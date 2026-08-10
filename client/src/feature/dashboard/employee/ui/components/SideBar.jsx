import {
    LayoutDashboard,
    CalendarDays,
    CalendarX2,
    Wallet,
    User,
    Sparkles,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const menus = [
    {
        title: "Home",
        icon: LayoutDashboard,
        path: "/dashboard/home",
    },
    {
        title: "Attendance",
        icon: CalendarDays,
        path: "/dashboard/attendance",
    },
    {
        title: "Leaves",
        icon: CalendarX2,
        path: "/dashboard/leaves",
    },
    {
        title: "Salary",
        icon: Wallet,
        path: "/dashboard/salary",
    },
    {
        title: "Profile",
        icon: User,
        path: "/dashboard/profile",
    },
];

function SideBar() {
    return (
        <aside
            className="flex h-screen w-[280px] flex-col border-r p-6"
            style={{
                background: "var(--sidebar)",
                borderColor: "var(--border)",
            }}
        >
            {/* Logo */}

            <div className="flex items-center gap-4">
                <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl text-[var(--text-white)]"
                    style={{ background: "var(--primary)" }}
                >
                    <Sparkles size={22} />
                </div>

                <div>
                    <h1
                        className="text-lg font-bold"
                        style={{ color: "var(--primary)" }}
                    >
                        Nexus Enterprise
                    </h1>

                    <p className="text-sm text-[var(--text-secondary)]">
                        Employee Portal
                    </p>
                </div>
            </div>

            {/* Navigation */}

            <nav className="mt-10 flex-1 space-y-2">
                {menus.map((item) => {
                    const Icon = item.icon;

                    return (
                        <NavLink
                            key={item.title}
                            to={item.path}
                            className={({ isActive }) =>
                                `group flex h-12 items-center gap-4 rounded-[var(--radius)] px-5 text-base font-medium transition-all duration-300 ${isActive
                                    ? "text-[var(--text-white)]"
                                    : "text-[var(--text-secondary)] hover:text-[var(--hover-text)]"
                                }`
                            }
                            style={({ isActive }) => ({
                                background: isActive
                                    ? "var(--primary)"
                                    : "transparent",
                                boxShadow: isActive
                                    ? "var(--shadow-sm)"
                                    : "none",
                            })}
                        >
                            <Icon size={20} />

                            <span>{item.title}</span>
                        </NavLink>
                    );
                })}
            </nav>

            {/* Button */}

            <button
                className="rounded-[var(--radius)] py-4 font-semibold text-[var(--text-white)] transition-all duration-300 hover:scale-[1.02]"
                style={{
                    background: "var(--primary)",
                }}
                onMouseEnter={(e) =>
                (e.currentTarget.style.background = "var(--primary-dark)")
                }
                onMouseLeave={(e) =>
                (e.currentTarget.style.background = "var(--primary)")
                }
            >
                Apply Leave
            </button>
        </aside>
    );
}

export default SideBar;