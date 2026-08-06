import { Menu, Moon, Sun } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../state/Theme";
import { useEffect } from "react";
import stoarage from "../../hooks/locastorageHook";
import { useNavigate } from "react-router-dom";



function TopBar() {


    const { theme } = useSelector((state) => state.theme);
    const dispatch = useDispatch();

    const navigate = useNavigate()
    useEffect(() => {
        document.documentElement.classList.toggle(
            "dark",
            theme === "dark"
        );
    }, [theme]);
    return (
        <header className="sticky top-0 z-50 w-full border-b  border-[var(--border)]  backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 lg:px-0">

                {/* Left */}
                <div className="flex items-center gap-4">

                    {/* Mobile Menu */}
                    <button className="rounded-lg p-2 transition hover:bg-gray-100 lg:hidden">
                        <Menu size={22} />
                    </button>

                    {/* Logo */}
                    <h1 className="text-xl font-bold tracking-tight text-[var(--primary)]">
                        Nexus ERP
                    </h1>

                </div>

                {/* Center Navigation */}
                <nav className="hidden items-center gap-10 lg:flex">

                    <a
                        href="#"
                        className="text-sm font-medium  transition hover:text-[var(--hover-text)]"
                    >
                        Solutions
                    </a>

                    <a
                        href="#"
                        className="text-sm font-medium  transition hover:text-[var(--hover-text)]"
                    >
                        Pricing
                    </a>

                    <a
                        href="#"
                        className="text-sm font-medium  transition hover:text-[var(--hover-text)]"
                    >
                        Resources
                    </a>

                    <a
                        href="#"
                        className="text-sm font-medium  transition hover:text-[var(--hover-text)]"
                    >
                        Company
                    </a>

                </nav>

                {/* Right */}
                <div className="flex items-center gap-3">

                    {/* Theme Toggle */}
                    <button
                        onClick={() => {
                            const newTheme = theme === "light" ? "dark" : "light";
                            dispatch(setTheme(newTheme))
                            stoarage.set("theme", newTheme)
                        }}
                    >
                        {theme ? (
                            <Sun size={20} />
                        ) : (
                            <Moon size={20} />
                        )}
                    </button>

                    <button onClick={() => navigate("/login")} className="hidden text-sm font-medium  transition hover:text-[var(--hover-text)] sm:block">
                        Log In
                    </button>

                    <button className="rounded-sm bg-indigo-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700">
                        Get Started
                    </button>

                </div>

            </div>
        </header>
    );
}

export default TopBar;