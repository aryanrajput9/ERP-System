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
    Calculator,
    Clapperboard,
    ClipboardCheckIcon,
    ClipboardClock,
    ClockPlusIcon,
    ClipboardCheck,
    UsersRound,
    ChevronDown,
} from "lucide-react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ProfileButton from "./profile/ProfileButton";
import { useState } from "react";

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

const hrMenu = [

    {
        title: "DashBoard",
        icon: LayoutDashboard,
        path: "/hradmin"
    },

    {
        title: "Employees",
        icon: UsersRound,
        path: "/hradmin/employees",
        children: [
            {
                title: "All Employees",
                path: "/hradmin/employees",
            },
            {
                title: "Add Employee",
                path: "/hradmin/employees/add",
            },
            {
                title: "Employee Directory",
                path: "/hradmin/employees/directory",
            },
        ],
    },
    {
        title: "Attendance",
        icon: CalendarDays,
        path: "/hradmin/attendance"
    },
    {
        title: "Leave Management",
        icon: CalendarCheck,
        path: "/hradmin/leave"
    },
    {
        title: "Recruitment",
        icon: Calculator,
        path: "/hradmin/recruitment"
    },
    {
        title: "Departments",
        icon: Clapperboard,
        path: "/hradmin/departments"
    },

    {
        title: "Performance",
        icon: ClockPlusIcon,
        path: "/hradmin/performance"
    },
    {
        title: "Reports",
        icon: ClipboardCheckIcon,
        path: "/hrAdmin/report"
    },
    {
        title: "Announcements",
        icon: ClipboardClock,
        path: "/hrAdmin/announcements"
    }
]

function SideBar() {
    const { employee } = useSelector((state) => state.employee);

    const [openMenu, setOpenMenu] = useState(null);

    const menu =
        employee.role === "Employee"
            ? menus
            : employee.role === "Manager"
                ? adminMenu
                : hrMenu;

    return (
        <aside
            className="flex h-screen w-[280px] flex-col border-r p-6 overflow-y-auto scrollbar-thumb-gray-800"
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
                        {employee.role === "Employee"
                            ? "Employee Portal"
                            : "HR Portal"}
                    </p>
                </div>
            </div>


            {/* Navigation */}

            <nav className="mt-10 flex-1 space-y-2">

                {menu.map((item) => {
                    const Icon = item.icon;

                    // Normal menu
                    if (!item.children) {
                        return (
                            <NavLink
                                key={item.title}
                                to={item.path}
                                end
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
                    }


                    // Parent menu with children
                    const isOpen = openMenu === item.title;

                    return (
                        <div key={item.title}>

                            {/* Parent */}
                            <button
                                onClick={() =>
                                    setOpenMenu(isOpen ? null : item.title)
                                }
                                className={`group flex h-12 w-full items-center justify-between rounded-[var(--radius)] px-5 text-base font-medium transition-all duration-300 ${isOpen
                                    ? "bg-emerald-500/10 text-white"
                                    : "text-[var(--text-secondary)] hover:bg-white/5 hover:text-white"
                                    }`}
                            >
                                <div className="flex items-center gap-4">
                                    <Icon size={20} />

                                    <span>{item.title}</span>
                                </div>

                                <ChevronDown
                                    size={16}
                                    className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                                        }`}
                                />
                            </button>


                            {/* Submenu */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ${isOpen
                                    ? "max-h-40 opacity-100"
                                    : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="ml-6 mt-1 space-y-1 border-l  border-slate-700/60 pl-4">

                                    {item.children.map((child) => (
                                        <NavLink
                                            key={child.title}
                                            to={child.path}
                                            end
                                            className={({ isActive }) =>
                                                `relative flex h-10 items-center px-4 text-sm transition ${isActive
                                                    ? "font-medium text-emerald-400"
                                                    : "text-slate-400 hover:text-white"
                                                }`
                                            }
                                        >
                                            {({ isActive }) => (
                                                <>
                                                    {isActive && (
                                                        <span className="absolute -left-[17px] h-5 w-[2px] rounded-full bg-emerald-400" />
                                                    )}

                                                    <span>{child.title}</span>
                                                </>
                                            )}
                                        </NavLink>
                                    ))}

                                </div>
                            </div>

                        </div>
                    );
                })}

            </nav>


            {/* Bottom */}

            {employee.role === "Employee" ? (
                <button
                    className="rounded-[var(--radius)] py-4 font-semibold text-[var(--text-white)] transition-all duration-300 hover:scale-[1.02] "
                    style={{
                        background: "var(--primary)",
                    }}
                >
                    Apply Leave
                </button>
            ) : (
                <div className="mt-10">
                    <ProfileButton
                        employee={employee.name}
                        role={employee.role}
                        employeImage={employee.profileImage}
                    />
                </div>
            )}
        </aside>
    );
}
export default SideBar;