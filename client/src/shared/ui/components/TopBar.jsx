import { Bell, Menu, Moon, Search, Sun } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../state/Theme";
import { useEffect } from "react";
import storage from "../../hooks/locastorageHook";
import { useNavigate } from "react-router-dom";

function TopBar() {
    const { theme } = useSelector((state) => state.theme);
    const { isAuthenticated, employee } = useSelector(
        (state) => state.employee
    );

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        document.documentElement.classList.toggle(
            "dark",
            theme === "dark"
        );
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";

        dispatch(setTheme(newTheme));
        storage.set("theme", newTheme);
    };

    return (
        <header
            className="sticky top-0 z-50 border-b"
            style={{
                background: "var(--navbar)",
                borderColor: "var(--border)",
            }}
        >
            <div
                className={`mx-auto flex items-center justify-between ${isAuthenticated
                    ? "h-20 px-8"
                    : "h-16 max-w-[1400px] px-6 lg:px-8"
                    }`}
            >
                {isAuthenticated ? (
                    <>
                        {/* LEFT */}

                        <div className="w-full max-w-md">
                            <div
                                className="flex h-12 items-center rounded-full border px-4"
                                style={{
                                    background: "var(--input-bg)",
                                    borderColor: "var(--input-border)",
                                }}
                            >
                                <Search
                                    size={20}
                                    className="text-[var(--text-muted)]"
                                />

                                <input
                                    type="text"
                                    placeholder="Search employees, documents, or settings..."
                                    className="ml-3 w-full bg-transparent text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] outline-none"
                                />
                            </div>
                        </div>

                        {/* RIGHT */}

                        <div className="flex items-center gap-6">

                            <button
                                className="transition-colors"
                                style={{ color: "var(--text-secondary)" }}
                            >
                                <Bell size={22} />
                            </button>

                            <button
                                onClick={toggleTheme}
                                className="transition-colors"
                                style={{ color: "var(--text-secondary)" }}
                            >
                                {theme === "dark" ? (
                                    <Sun size={22} />
                                ) : (
                                    <Moon size={22} />
                                )}
                            </button>

                            <div
                                className="h-8 w-px"
                                style={{
                                    background: "var(--border)",
                                }}
                            />

                            <button className="flex items-center gap-3">
                                <img
                                    src={
                                        employee?.profileImage ||
                                        "https://i.pravatar.cc/150"
                                    }
                                    alt={employee?.name}
                                    className="h-11 w-11 rounded-full object-cover"
                                />

                                <span className="font-medium text-[var(--text-primary)]">
                                    {employee?.name}
                                </span>
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        {/* LEFT */}

                        <div className="flex items-center gap-4">
                            <button className="lg:hidden">
                                <Menu size={22} />
                            </button>

                            <h1
                                className="text-xl font-bold"
                                style={{ color: "var(--primary)" }}
                            >
                                Nexus ERP
                            </h1>
                        </div>

                        {/* CENTER */}

                        <nav className="hidden gap-10 lg:flex">
                            {["Solutions", "Pricing", "Resources", "Company"].map(
                                (item) => (
                                    <a
                                        key={item}
                                        href="#"
                                        className="transition-colors"
                                        style={{
                                            color: "var(--text-secondary)",
                                        }}
                                    >
                                        {item}
                                    </a>
                                )
                            )}
                        </nav>

                        {/* RIGHT */}

                        <div className="flex items-center gap-3">

                            <button
                                onClick={toggleTheme}
                                className="text-[var(--text-secondary)]"
                            >
                                {theme === "dark" ? (
                                    <Sun size={20} />
                                ) : (
                                    <Moon size={20} />
                                )}
                            </button>

                            <button
                                onClick={() => navigate("/login")}
                                className="hidden sm:block text-[var(--text-secondary)]"
                            >
                                Log In
                            </button>

                            <button
                                className="rounded-xl px-5 py-2 font-medium text-[var(--text-white)]"
                                style={{
                                    background: "var(--primary)",
                                }}
                            >
                                Get Started
                            </button>
                        </div>
                    </>
                )}
            </div>
        </header>
    );
}

export default TopBar;