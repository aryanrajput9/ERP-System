import { Mail, User, Building2 } from "lucide-react";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileAbout from "../components/profile/ProfileAbout";
import ContactCard from "../components/profile/ContactCard";
import StatCard from "../components/profile/StatCard";
import { useSelector } from "react-redux";

export default function ProfilePage() {
    const { employee } = useSelector((state) => state.employee);
    const { history } = useSelector((state) => state.attendance);
    const { leaves } = useSelector((state) => state.leave);

    return (
        <div className="min-h-screen bg-[var(--bg)] p-6">
            <div className="mx-auto max-w-5xl space-y-6">

                <ProfileHeader user={employee} />

                <div className="grid gap-6 lg:grid-cols-3">

                    <div className="space-y-6">
                        <ProfileAbout
                            employeeId={employee.employeeId}
                            department={employee.department}
                        />
                    </div>

                    <div className="space-y-6 lg:col-span-2">

                        <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
                            <h2 className="mb-6 text-lg font-semibold text-[var(--text-primary)]">
                                Contact Information
                            </h2>

                            <div className="grid gap-4 sm:grid-cols-2">

                                <ContactCard
                                    icon={<Mail className="h-5 w-5" />}
                                    title="Email"
                                    value={employee.email}
                                />

                                <ContactCard
                                    icon={<User className="h-5 w-5" />}
                                    title="Gender"
                                    value={employee.gender}
                                />

                                <ContactCard
                                    icon={<Building2 className="h-5 w-5" />}
                                    title="Department"
                                    value={employee.department || "Not assigned"}
                                />

                                <ContactCard
                                    icon={<User className="h-5 w-5" />}
                                    title="Role"
                                    value={employee.role}
                                />

                            </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-3">
                            <StatCard label="Leaves" value={leaves?.length || 0} />
                            <StatCard label="Attendance" value={history?.length || 0} />
                            <StatCard label="Projects" value="08" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}