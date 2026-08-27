import OngoingReviews from "../../components/hr/OngoingReviews";
import PerformanceCycle from "../../components/hr/PerformanceCycle";
import PerformanceHeader from "../../components/hr/PerformanceHeader";
import PerformanceOverview from "../../components/hr/PerformanceOverview";
import PerformanceStats from "../../components/hr/PerformanceStats";
import PerformanceTracking from "../../components/hr/PerformanceTracking";
import QuickActions from "../../components/hr/QuickActions";
import RecentActivities from "../../components/hr/RecentActivities";
import TeamPerformance from "../../components/hr/TeamPerformance";


function Performance() {
    return (
        <div className="min-h-screen bg-[#f8f9fc] p-6">

            <PerformanceHeader />

            <PerformanceStats />

            <div className="mt-6 grid grid-cols-1 gap-5 xl:grid-cols-[1.7fr_0.7fr]">

                <div className="space-y-5">
                    <PerformanceOverview />

                    <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.4fr_1fr]">
                        <OngoingReviews />
                        <TeamPerformance />
                    </div>
                </div>

                <div className="space-y-5">
                    <PerformanceCycle />
                    <RecentActivities />
                    <QuickActions />
                </div>

            </div>

            <PerformanceTracking />

        </div>
    );
}

export default Performance;