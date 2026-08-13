import { Search, Send, Paperclip } from "lucide-react";

const chats = [
    {
        name: "Amit Sharma",
        role: "UI/UX Designer",
        avatar: "https://i.pravatar.cc/100?img=12",
        unread: 2,
    },
    {
        name: "Priya Singh",
        role: "Frontend Developer",
        avatar: "https://i.pravatar.cc/100?img=32",
        unread: 0,
    },
    {
        name: "Rohit Kumar",
        role: "Backend Developer",
        avatar: "https://i.pravatar.cc/100?img=15",
        unread: 1,
    },
];

export default function ChatPage() {
    return (
        <div className="h-[85vh] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="grid h-full grid-cols-[320px_1fr]">
                {/* Sidebar */}
                <div className="border-r border-gray-200">
                    <div className="border-b border-gray-200 p-4">
                        <h2 className="text-lg font-semibold text-gray-900">Team Chat</h2>

                        <div className="mt-4 flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3">
                            <Search size={18} className="text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search employee..."
                                className="w-full bg-transparent text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none"
                            />
                        </div>
                    </div>

                    <div className="divide-y divide-gray-100">
                        {chats.map((chat) => (
                            <div
                                key={chat.name}
                                className="flex cursor-pointer items-center gap-3 px-4 py-4 hover:bg-gray-50"
                            >
                                <img
                                    src={chat.avatar}
                                    alt={chat.name}
                                    className="h-11 w-11 rounded-full object-cover"
                                />

                                <div className="flex-1">
                                    <p className="font-medium text-gray-900">{chat.name}</p>
                                    <p className="text-sm text-gray-500">{chat.role}</p>
                                </div>

                                {chat.unread > 0 && (
                                    <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-violet-600 px-1 text-xs text-white">
                                        {chat.unread}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Chat Area */}
                <div className="flex h-full flex-col">
                    {/* Header */}
                    <div className="flex items-center gap-3 border-b border-gray-200 p-4">
                        <img
                            src="https://i.pravatar.cc/100?img=12"
                            alt="Amit"
                            className="h-11 w-11 rounded-full object-cover"
                        />

                        <div>
                            <p className="font-semibold text-gray-900">Amit Sharma</p>
                            <p className="text-sm text-green-600">Online</p>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 space-y-4 overflow-y-auto bg-gray-50 p-6">
                        {/* Other */}
                        <div className="flex justify-start">
                            <div className="max-w-[70%] rounded-2xl rounded-bl-md bg-white px-4 py-3 shadow-sm">
                                <p className="text-sm text-gray-800">
                                    Hi Rahul, I have completed the dashboard UI.
                                </p>
                                <p className="mt-1 text-right text-xs text-gray-400">
                                    10:30 AM
                                </p>
                            </div>
                        </div>

                        {/* Me */}
                        <div className="flex justify-end">
                            <div className="max-w-[70%] rounded-2xl rounded-br-md bg-violet-600 px-4 py-3 text-white shadow-sm">
                                <p className="text-sm">Great! Please share the final screens.</p>
                                <p className="mt-1 text-right text-xs text-violet-200">
                                    10:32 AM
                                </p>
                            </div>
                        </div>

                        {/* Other */}
                        <div className="flex justify-start">
                            <div className="max-w-[70%] rounded-2xl rounded-bl-md bg-white px-4 py-3 shadow-sm">
                                <p className="text-sm text-gray-800">
                                    Sure, I’ll upload them in a few minutes.
                                </p>
                                <p className="mt-1 text-right text-xs text-gray-400">
                                    10:33 AM
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Input */}
                    <div className="border-t border-gray-200 bg-white p-4">
                        <div className="flex items-center gap-3 rounded-2xl border border-gray-200 px-4 py-3">
                            <button className="text-gray-500 hover:text-gray-700">
                                <Paperclip size={18} />
                            </button>

                            <input
                                type="text"
                                placeholder="Type a message..."
                                className="flex-1 bg-transparent text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none"
                            />

                            <button className="rounded-xl bg-violet-600 p-2 text-white hover:bg-violet-700">
                                <Send size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}