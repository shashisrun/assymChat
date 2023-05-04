import { Outlet, useLoaderData } from "react-router-dom";
import ChatList from "../components/ChatList";
export default function ChatPage() {
    const { contactList } = useLoaderData();
    return (
        <>
            <div className="h-screen w-screen bg-base-100">
                <div className="flex w-full h-full">
                    <div className="w-full h-full max-w-sm">
                        <ChatList contactList={contactList} />
                    </div>
                    <div className="flex h-full w-full">
                        <div className="w-full h-full">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}