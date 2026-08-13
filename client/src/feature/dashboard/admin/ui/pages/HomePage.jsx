import { Handshake } from "lucide-react";
import StatsCards from "../components/StatsCards";
import TasksOverview from "../components/TasksOverview";
import TeamActivity from "../components/TeamActivity";
import TeamStats from "../components/TeamStats";


function HomePage() {
    return (
        <div className="flex flex-col gap-10">
            <div className="flex items-center justify-between px-8 py-5 bg-white rounded-2xl shadow-sm">
                {/* Left */}
                <div>
                    <h2 className="flex items-center gap-2 text-2xl font-semibold text-gray-800">
                        Good Morning, Rahul <Handshake className="text-yellow-500" size={24} />
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                        Here's what’s happening with your team today.
                    </p>
                </div>


                <div>
                    <input
                        type="date"
                        defaultValue={new Date().toISOString().split("T")[0]}
                        className="px-4 py-2 border border-gray-300 rounded-xl text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                </div>

            </div>
            <StatsCards />
            <div className="flex  gap-4">
                <TasksOverview />
                <TeamActivity />

            </div>

        </div>
    )
}

export default HomePage
