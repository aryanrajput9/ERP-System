import DepartmentHeader from "../../components/hr/DepartmentHeader";
import DepartmentStats from "../../components/hr/DepartmentStats";
import DepartmentTable from "../../components/hr/DepartmentTable";
import QuickActions from "../../components/hr/QuickActions";
import RecentActivities from "../../components/hr/RecentActivities";
import DepartmentOverview from "./DepartmentOverview";


function Departments() {
    return (
        <div className="min-h-screen bg-[#f8f9fc] p-6">

            <DepartmentHeader />

            <DepartmentStats />

            <div className="mt-6 grid grid-cols-1 gap-5 xl:grid-cols-[1.7fr_0.8fr]">

                <DepartmentTable />

                <div className="space-y-5">
                    <DepartmentOverview />
                    <RecentActivities />
                    <QuickActions />
                </div>

            </div>

        </div>
    );
}

export default Departments;