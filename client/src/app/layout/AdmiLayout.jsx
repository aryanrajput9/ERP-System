
import { Outlet } from 'react-router';
import SideBar from '../../feature/dashboard/employee/ui/components/SideBar';
import TopBar from '../../shared/ui/components/TopBar';

function AdmiLayout() {
    return (
        <div>
            <div className="flex h-screen overflow-hidden">

                {/* Sidebar */}
                <aside className="w-[280px] shrink-0 border-r bg-[var(---background)]">
                    <SideBar />
                </aside>

                {/* Right Side */}
                <div className="flex flex-1 flex-col">

                    {/* Topbar */}
                    <header className="sticky top-0 z-50 h-[70px] border-b bg-[var(--background)]">
                        <TopBar />
                    </header>

                    {/* Dashboard */}
                    <main className="flex-1 overflow-y-auto bg-[var(--background)] p-6">
                        <Outlet />
                    </main>

                </div>

            </div>

        </div>
    )
}

export default AdmiLayout
