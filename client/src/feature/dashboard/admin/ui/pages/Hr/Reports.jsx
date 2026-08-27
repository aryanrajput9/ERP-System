import React from "react";
import ReportsHeader from "../../components/hr/report/ReportsHeader";
import ReportStats from "../../components/hr/report/ReportStats";
import AttendanceOverview from "../../components/hr/report/AttendanceOverview";
import AttendanceTrend from "../../components/hr/report/AttendanceTrend";
import LeaveOverview from "../../components/hr/report/LeaveOverview";
import RecruitmentFunnel from "../../components/hr/report/RecruitmentFunnel";
import PerformanceReport from "../../components/hr/report/PerformanceReport";
import PayrollSummary from "../../components/hr/report/PayrollSummary";
import PayrollByDepartment from "../../components/hr/report/PayrollByDepartment";
import EmployeeTurnover from "../../components/hr/report/EmployeeTurnover";
import QuickReports from "../../components/hr/report/QuickReports";
import RecentReports from "../../components/hr/report/RecentReports";
import CustomReport from "../../components/hr/report/CustomReport";
import LeaveAnalysis from "../../components/hr/report/LeaveAnalysis";


function Reports() {
    return (
        <div className="min-h-screen bg-[#f8f9fc] p-6">

            <ReportsHeader />

            <ReportStats />

            <div className="mt-6 grid grid-cols-1 gap-5 xl:grid-cols-[1fr_1fr_0.9fr]">

                <AttendanceOverview />

                <AttendanceTrend />

                <LeaveOverview />

            </div>

            <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3">

                <LeaveAnalysis />

                <RecruitmentFunnel />

                <PerformanceReport />

            </div>

            <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3">

                <PayrollSummary />

                <PayrollByDepartment />

                <EmployeeTurnover />

            </div>

            <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-[1fr_1fr_1fr]">

                <QuickReports />

                <RecentReports />

                <CustomReport />

            </div>

        </div>
    );
}

export default Reports;