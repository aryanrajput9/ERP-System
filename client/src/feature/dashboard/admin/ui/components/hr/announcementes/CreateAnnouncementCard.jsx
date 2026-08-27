import React from "react";
import { Plus } from "lucide-react";

function CreateAnnouncementCard() {
    return (
        <div className="rounded-xl bg-gradient-to-br from-violet-600 to-violet-700 p-5 text-white">

            <h2 className="text-base font-semibold">
                Create Announcement
            </h2>

            <p className="mt-2 text-xs leading-5 text-violet-100">
                Share important updates with your team
            </p>

            <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-white py-3 text-xs font-medium text-violet-600 transition hover:bg-violet-50">

                <Plus size={16} />

                New Announcement

            </button>

        </div>
    );
}

export default CreateAnnouncementCard;