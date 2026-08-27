import React from "react";
import AnnouncementsHeader from "../../components/hr/announcementes/AnnouncementsHeader";
import AnnouncementStats from "../../components/hr/announcementes/AnnouncementStats";
import AnnouncementFilter from "../../components/hr/announcementes/AnnouncementFilter";
import AnnouncementList from "../../components/hr/announcementes/AnnouncementList";
import Pagination from "../../components/hr/Pagination";
import CreateAnnouncementCard from "../../components/hr/announcementes/CreateAnnouncementCard";
import QuickActions from "../../components/hr/QuickActions";
import AnnouncementStatsChart from "../../components/hr/announcementes/AnnouncementStatsChart";

function Announcements() {
    return (
        <div className="min-h-screen bg-[#f8f9fc] p-6">

            <AnnouncementsHeader />

            <AnnouncementStats />

            <div className="mt-6 grid grid-cols-1 gap-5 xl:grid-cols-[1fr_280px]">

                {/* Main */}
                <div className="min-w-0">

                    <AnnouncementFilter />

                    <AnnouncementList />

                    <Pagination />

                </div>

                {/* Sidebar */}
                <div className="space-y-5">

                    <CreateAnnouncementCard />

                    <QuickActions />

                    <AnnouncementStatsChart />

                </div>

            </div>

        </div>
    );
}

export default Announcements;