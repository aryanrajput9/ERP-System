import React, { useEffect, useState } from "react";
import {
    Paperclip,
    Smile,
    Send,
    MoreVertical,
    Phone,
    Video,
    CheckCheck,

} from "lucide-react";
import socketClient from "../../../../../app/Api/socket/socket.io-client";
import { useSelector } from "react-redux";
import useChatHook from "../../../admin/hooks/allChatHook";

const ChatsPage = () => {
    const [message, setMessage] = useState("");

    const [messages, setMessages] = useState([]);
    const [selectId, setSelectedId] = useState("");
    const [online, setOnline] = useState("")

    console.log(selectId)

    const handleSend = async (e) => {
        e.preventDefault();

        if (!message.trim()) return;
        if (!selectId) return;

        const input = {
            receiverId: selectId,
            message: message.trim(),
        };

        try {
            const resp = await useChatHook.createChat(input);

            console.log("CREATE RESPONSE:", resp);

            setMessages((prev) => [
                ...prev,
                resp,
            ]);

            setMessage("");
        } catch (error) {
            console.log("CREATE ERROR:", error);
        }
    };

    const { employee } = useSelector((state) => state.employee)

    useEffect(() => {
        if (!employee?.id) return;

        socketClient.emit("join-room", employee.id);

        socketClient.on("user-online", (msg) => {
            setOnline(msg)
        });

        const handleMessage = ({ messages, senderId }) => {
            console.log(messages, "sokect se aya hai")
            setMessages((prev) => [
                ...prev,
                {
                    messages,
                    senderId,
                },
            ]);

            setSelectedId(senderId)
        };


        socketClient.on("recive-message", handleMessage);

        return () => {
            socketClient.off("recive-message", handleMessage);
        };
    }, [employee?.id]);


    useEffect(() => {
        if (!selectId) return;

        const fetchMessages = async () => {
            try {
                const resp = await useChatHook.getMessage(selectId);

                console.log("CHAT HISTORY:", resp);

                setMessages(resp);
            } catch (error) {
                console.log("GET CHAT ERROR:", error);
            }
        };

        fetchMessages();

    }, [selectId]);

    return (
        <div className="h-full min-h-0 w-full p-5">

            <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

                {/* ================= HEADER ================= */}
                <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">

                    <div className="flex items-center gap-3">

                        {/* Avatar */}
                        <div className="relative">
                            <img
                                src="/avatar.png"
                                alt="Rahul Kumar"
                                className="h-11 w-11 rounded-full object-cover"
                            />

                            <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-500" />
                        </div>

                        <div>
                            <h2 className="text-sm font-semibold text-slate-900">
                                Rahul Kumar
                            </h2>

                            <div className="mt-0.5 flex items-center gap-1.5">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                <span className="text-xs font-medium text-emerald-600">
                                    {online || "Offline"}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Header Actions */}
                    <div className="flex items-center gap-1">

                        <button
                            type="button"
                            className="rounded-lg p-2.5 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
                        >
                            <Phone size={18} />
                        </button>

                        <button
                            type="button"
                            className="rounded-lg p-2.5 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
                        >
                            <Video size={19} />
                        </button>

                        <button
                            type="button"
                            className="rounded-lg p-2.5 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
                        >
                            <MoreVertical size={19} />
                        </button>

                    </div>
                </div>

                {/* ================= MESSAGES ================= */}
                <div className="chat-scrollbar flex-1 overflow-y-auto bg-[#f8fafc] px-6 py-5">

                    {/* Date */}
                    <div className="mb-6 flex items-center justify-center">
                        <span className="rounded-full bg-white px-3 py-1 text-[11px] font-medium text-slate-400 shadow-sm ring-1 ring-slate-200">
                            Today
                        </span>
                    </div>
                    <div className="space-y-5">

                        {messages.map((item, index) => {

                            // Manager wala message nested hai
                            const msg = item.messages ?? item;

                            // Sender ID dono cases se
                            const senderId = item.senderId ?? msg.senderId;

                            const isMine =
                                senderId?.toString() === employee?.id?.toString();

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

                                        <div
                                            className={`rounded-2xl px-4 py-3 ${isMine
                                                ? "rounded-br-md bg-indigo-600 text-white"
                                                : "rounded-bl-md border border-slate-200 bg-white text-slate-700"
                                                }`}
                                        >

                                            {/* Message */}
                                            <p className="text-sm leading-6">
                                                {msg.message}
                                            </p>

                                            {/* Time */}
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
                                                        ).toLocaleTimeString([], {
                                                            hour: "2-digit",
                                                            minute: "2-digit",
                                                        })
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

                {/* ================= INPUT ================= */}
                <div className="border-t border-slate-200 bg-white p-4">

                    <form
                        onSubmit={handleSend}
                        className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 p-2 focus-within:border-indigo-300 focus-within:ring-2 focus-within:ring-indigo-100"
                    >

                        {/* Attachment */}
                        <button
                            type="button"
                            className="rounded-lg p-2.5 text-slate-400 transition hover:bg-white hover:text-slate-600"
                        >
                            <Paperclip size={19} />
                        </button>

                        {/* Input */}
                        <input
                            type="text"
                            value={message}
                            onChange={(e) =>
                                setMessage(e.target.value)
                            }
                            placeholder="Write a message..."
                            className="min-w-0 flex-1 bg-transparent px-2 py-2 text-sm text-slate-700 outline-none placeholder:text-slate-400"
                        />

                        {/* Emoji */}
                        <button
                            type="button"
                            className="rounded-lg p-2.5 text-slate-400 transition hover:bg-white hover:text-slate-600"
                        >
                            <Smile size={19} />
                        </button>

                        {/* Send */}
                        <button
                            type="submit"
                            disabled={!message.trim()}
                            className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-40"
                        >
                            <Send size={17} />
                        </button>

                    </form>

                    <p className="mt-2 px-1 text-[10px] text-slate-400">
                        Press Enter to send
                    </p>

                </div>

            </div>

            <style>{`
                .chat-scrollbar::-webkit-scrollbar {
                    width: 5px;
                }

                .chat-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }

                .chat-scrollbar::-webkit-scrollbar-thumb {
                    background: #cbd5e1;
                    border-radius: 999px;
                }
            `}</style>

        </div>
    );
};

export default ChatsPage;