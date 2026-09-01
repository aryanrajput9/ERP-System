import { Search, Send, Paperclip, MoreVertical, CheckCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import useChatHook from "../../hooks/allChatHook";
import socketClient from "../../../../../app/Api/socket/socket.io-client";






export default function ChatPage() {


    const { allEmploye } = useSelector((state) => state.admin);
    const { employee } = useSelector((state) => state.employee);



    const [chats, setChats] = useState([]);
    const [messages, setMessages] = useState([]);
    const [online, setOnline] = useState("")

    const {
        register,
        handleSubmit,
        reset,
    } = useForm();



    const handleSendMessage = async (data) => {

        const input = {
            message: data.message,
            receiverId: chats[1]
        };


        const resp = await useChatHook.createChat(input);
        console.log(resp)

        setMessages((prev) => [
            ...prev,
            resp,
        ]);

        reset();
    };
    useEffect(() => {

        if (!employee.id) return;

        socketClient.connect();

        socketClient.emit("join-room", employee.id);

        const handleOnline = (msg) => {
            setOnline(msg);
        };

        const handleMessage = ({ messages, senderId }) => {
            setMessages((prev) => [
                ...prev,
                {
                    messages,
                    senderId,
                },
            ]);
        };

        socketClient.on("user-online", handleOnline);
        socketClient.on("recive-message", handleMessage);

        if (chats[1]) {
            const fetchMessages = async () => {
                try {
                    const resp = await useChatHook.getMessage(chats[1]);

                    console.log("CHAT HISTORY:", resp);
                    setMessages(resp);

                } catch (error) {
                    console.log("GET CHAT ERROR:", error);
                }
            };

            fetchMessages();
        }

        return () => {
            socketClient.off("user-online", handleOnline);
            socketClient.off("recive-message", handleMessage);

            // Chat close → socket disconnect
            socketClient.disconnect();
        };

    }, [employee.id, chats[1]]);

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
                        {allEmploye?.map((chat) => (
                            <div
                                onClick={() => setChats([chat.name, chat.id])}
                                key={chat.name}
                                className="flex cursor-pointer items-center gap-3 px-4 py-4 hover:bg-gray-50"
                            >
                                <img
                                    src={chat.profileImage}
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
                {chats.length !== 0 ? (
                    <div className="flex h-full min-h-0 flex-col bg-white">

                        {/* Header */}
                        <div className="flex shrink-0 items-center justify-between border-b border-gray-200 bg-white px-5 py-4">

                            <div className="flex items-center gap-3">

                                <div className="relative">
                                    <img
                                        src="https://i.pravatar.cc/100?img=12"
                                        alt="Amit"
                                        className="h-11 w-11 rounded-full object-cover ring-2 ring-violet-100"
                                    />

                                    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500" />
                                </div>

                                <div>
                                    <p className="font-semibold leading-5 text-gray-900">
                                        {chats[0]}
                                    </p>

                                    <div className="mt-1 flex items-center gap-1.5">
                                        <span className="h-1.5 w-1.5 rounded-full bg-green-500" />

                                        <p className="text-xs font-medium text-green-600">
                                            {online || "Offline"}
                                        </p>
                                    </div>
                                </div>

                            </div>

                            <button className="rounded-lg p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600">
                                <MoreVertical size={19} />
                            </button>

                        </div>

                        {/* Chat Body */}
                        <div className="flex min-h-0 flex-1 flex-col">

                            {/* Messages */}
                            <div className="chat-scrollbar min-h-0 flex-1 overflow-y-auto bg-[#f8fafc] px-6 py-6">

                                <div className="space-y-5">

                                    {messages?.map((item, index) => {

                                        // API response direct object
                                        // Socket response nested object
                                        const msg = item.messages ?? item;

                                        const senderId =
                                            item.senderId ?? msg.senderId;

                                        const isMine =
                                            senderId?.toString() ===
                                            employee?.id?.toString();

                                        return (
                                            <div
                                                key={msg._id ?? index}
                                                className={`flex ${isMine
                                                    ? "justify-end"
                                                    : "justify-start"
                                                    }`}
                                            >

                                                <div
                                                    className={`flex max-w-[70%] items-end gap-2 ${isMine
                                                        ? "flex-row-reverse"
                                                        : ""
                                                        }`}
                                                >

                                                    {/* Other user avatar */}
                                                    {!isMine && (
                                                        <img
                                                            src="/avatar.png"
                                                            alt=""
                                                            className="h-7 w-7 rounded-full object-cover"
                                                        />
                                                    )}

                                                    {/* Message Bubble */}
                                                    <div
                                                        className={`rounded-2xl px-4 py-3 ${isMine
                                                            ? "rounded-br-md bg-indigo-600 text-white"
                                                            : "rounded-bl-md border border-slate-200 bg-white text-slate-700"
                                                            }`}
                                                    >

                                                        <p className="text-sm leading-6">
                                                            {msg.message}
                                                        </p>

                                                        <div
                                                            className={`mt-1.5 flex items-center justify-end gap-1.5 ${isMine
                                                                ? "text-indigo-200"
                                                                : "text-slate-400"
                                                                }`}
                                                        >

                                                            <span className="text-[10px]">
                                                                {msg.createdAt
                                                                    ? new Date(
                                                                        msg.createdAt
                                                                    ).toLocaleTimeString(
                                                                        [],
                                                                        {
                                                                            hour: "2-digit",
                                                                            minute: "2-digit",
                                                                        }
                                                                    )
                                                                    : ""}
                                                            </span>

                                                            {isMine && (
                                                                <CheckCheck
                                                                    size={13}
                                                                    className={
                                                                        msg.seen
                                                                            ? "text-sky-200"
                                                                            : "text-indigo-200"
                                                                    }
                                                                />
                                                            )}

                                                        </div>

                                                    </div>

                                                </div>

                                            </div>
                                        );
                                    })}

                                </div>

                            </div>

                            {/* Message Input */}
                            <div className="shrink-0 border-t border-gray-200 bg-white px-5 py-4">

                                <form
                                    onSubmit={handleSubmit(handleSendMessage)}
                                    className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 transition focus-within:border-violet-300 focus-within:bg-white focus-within:ring-2 focus-within:ring-violet-100"
                                >

                                    <button
                                        type="button"
                                        className="rounded-lg p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
                                    >
                                        <Paperclip size={18} />
                                    </button>

                                    <input
                                        type="text"
                                        placeholder="Write a message..."
                                        {...register("message", {
                                            required: true,
                                        })}
                                        className="flex-1 bg-transparent px-1 text-sm text-gray-700 outline-none placeholder:text-gray-400"
                                    />

                                    <button
                                        type="submit"
                                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-600 text-white shadow-sm transition hover:bg-violet-700"
                                    >
                                        <Send size={17} />
                                    </button>

                                </form>

                                <p className="mt-2 px-1 text-[10px] text-gray-400">
                                    Press Enter to send
                                </p>

                            </div>

                        </div>

                    </div>
                ) : null}
            </div>
        </div>
    );
}