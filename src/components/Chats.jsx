import { useLoaderData, useParams } from "react-router-dom"
import Header from "./Header";
import ChatInput from "./ChatInput";
import Conversation from "./Conversation";

export default function Chats() {
    const { username } = useParams();
    const { chats } = useLoaderData();
    return (
        <>
            <div className="w-full h-full flex flex-col">
                <div className="flex-1 bg-base-300">
                    <Header title={username} />
                </div>
                <div className="w-full h-full overflow-y-auto">
                    <div className="h-full">
                        <div className="h-full">
                            <Conversation chats={chats} />
                        </div>
                    </div>
                </div>
                <div className="flex-1 pb-4 pt-2">
                    <ChatInput />
                </div>
            </div>
        </>
    )
}