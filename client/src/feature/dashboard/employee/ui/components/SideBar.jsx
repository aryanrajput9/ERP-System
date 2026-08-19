import {
    LayoutDashboard,
    CalendarDays,
    CalendarX2,
    Wallet,
    User,
    Sparkles,
    Home,
    Users,
    CheckSquare,
    CalendarCheck,
    MessageCircle,
    ChartArea,
} from "lucide-react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ProfileButton from "./profile/ProfileButton";

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
    {
        title: "Chat",
        icon: ChartArea,
        path: "/dashboard/chat"
    }
];
const adminMenu = [
    {
        title: "Dashboard",
        icon: Home,
        path: "/admin",
    },
    {
        title: "Team",
        icon: Users,
        path: "/admin/team",
    },
    {
        title: "Tasks",
        icon: CheckSquare,
        path: "/admin/tasks",
    },
    {
        title: "Attendance",
        icon: CalendarDays,
        path: "/admin/attendence",
    },
    {
        title: "Leave",
        icon: CalendarCheck,
        path: "/admin/leave",
    },
    {
        title: "Chats",
        icon: MessageCircle,
        path: "/admin/chats",
    },
];

function SideBar() {

    const { employee } = useSelector((state) => state.employee)

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
                        {employee.role === "Employee" ? "Employee Portal" : "HR Portal"}
                    </p>
                </div>
            </div>

            {/* Navigation */}

            <nav className="mt-10 flex-1 space-y-2">
                {(employee.role === "Employee" ? menus : adminMenu).map((item) => {
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
                                background: isActive ? "var(--primary)" : "transparent",
                                boxShadow: isActive ? "var(--shadow-sm)" : "none",
                            })}
                            end
                        >
                            <Icon size={20} />
                            <span>{item.title}</span>
                        </NavLink>
                    );
                })}
            </nav>

            {/* Button */}

            {employee.role === "employee" ? <button
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
            </button> : <ProfileButton employee={employee.name} role={employee.role} employeImage={employee.profileImage} />}
        </aside>
    );
}

export default SideBar;