import OpenPositions from "../../components/hr/OpenPositions";
import RecentApplications from "../../components/hr/RecentApplications";
import RecruitmentHeader from "../../components/hr/RecruitmentHeader";
import RecruitmentStats from "../../components/hr/RecruitmentStats";


function Recruitment() {
    return (
        <div className="min-h-screen bg-[#f8f9fc] p-6">
            <RecruitmentHeader />

            <RecruitmentStats />

            <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-[1.7fr_1fr]">
                <RecentApplications />
                <OpenPositions />
            </div>

        </div>
    );
}

export default Recruitment;