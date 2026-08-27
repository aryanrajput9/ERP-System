import React from "react";
import {
    PartyPopper,
    ShieldCheck,
    BarChart3,
    Gift,
    Wrench,
} from "lucide-react";

import AnnouncementItem from "./AnnouncementItem";

const announcements = [
    {
        title: "Company Annual Day Celebration 2025",
        description:
            "We are excited to announce our Annual Day celebration on June 15, 2025. Mark your calendars and get ready for a day full of fun and recognition!",
        category: "Events",
        audience: "All Employees",
        date: "May 21, 2025",
        time: "10:30 AM",
        status: "Published",
        icon: PartyPopper,
        iconBg: "bg-green-100",
        iconColor: "text-green-600",
        dot: "bg-green-500",
        categoryBg: "bg-green-50",
        categoryColor: "text-green-600",
    },
    {
        title: "New Health Insurance Policy Update",
        description:
            "We are pleased to inform you about the enhanced health insurance policy effective from June 1, 2025.",
        category: "HR Policy",
        audience: "All Employees",
        date: "May 20, 2025",
        time: "02:15 PM",
        status: "Published",
        icon: ShieldCheck,
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
        dot: "bg-green-500",
        categoryBg: "bg-blue-50",
        categoryColor: "text-blue-600",
    },
    {
        title: "Work From Home Policy - Updated Guidelines",
        description:
            "Please review the updated Work From Home policy guidelines. These changes will help us maintain better productivity and collaboration.",
        category: "Policy Update",
        audience: "All Employees",
        date: "May 19, 2025",
        time: "11:45 AM",
        status: "Scheduled",
        icon: BarChart3,
        iconBg: "bg-orange-100",
        iconColor: "text-orange-500",
        dot: "bg-orange-400",
        categoryBg: "bg-orange-50",
        categoryColor: "text-orange-500",
    },
    {
        title: "Performance Bonus Announcement",
        description:
            "Performance bonuses for Q1 2025 will be credited on May 31, 2025. Thank you for your outstanding contributions!",
        category: "Rewards",
        audience: "All Employees",
        date: "May 18, 2025",
        time: "09:00 AM",
        status: "Published",
        icon: Gift,
        iconBg: "bg-red-100",
        iconColor: "text-red-500",
        dot: "bg-green-500",
        categoryBg: "bg-red-50",
        categoryColor: "text-red-500",
    },
    {
        title: "Office Maintenance - May 25, 2025",
        description:
            "The office will be closed on May 25, 2025 (Sunday) for scheduled maintenance activities.",
        category: "Important",
        audience: "All Employees",
        date: "May 17, 2025",
        time: "04:30 PM",
        status: "Archived",
        icon: Wrench,
        iconBg: "bg-violet-100",
        iconColor: "text-violet-600",
        dot: "bg-slate-400",
        categoryBg: "bg-red-50",
        categoryColor: "text-red-500",
    },
];

function AnnouncementList() {
    return (
        <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 bg-white">

            {announcements.map((announcement) => (
                <AnnouncementItem
                    key={announcement.title}
                    announcement={announcement}
                />
            ))}

        </div>
    );
}

export default AnnouncementList;