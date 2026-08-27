import DepartmentOverview from "./DepartmentOverview";
import EmployeesByDepartment from "./EmployeesByDepartment";
import QuickFilters from "./QuickFilters";
import RecentAddedEmployees from "./RecentAddedEmployees";

function EmployeeSidebarWidgets({ allEmploye }) {

    return (
        <div className="space-y-4">
            <EmployeesByDepartment allEmploye={allEmploye} />

            <QuickFilters />

            <DepartmentOverview />

            <RecentAddedEmployees />
        </div>
    );
}

export default EmployeeSidebarWidgets;