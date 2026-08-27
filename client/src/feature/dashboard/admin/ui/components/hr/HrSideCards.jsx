import Announcements from "./Announcements";
import QuickActions from "./QuickActions";
import UpcomingLeaves from "./UpcomingLeaves";

function HrSideCards() {
    return (
        <div className="space-y-4">
            <Announcements />

            <UpcomingLeaves />

            <QuickActions />
        </div>
    );
}

export default HrSideCards;