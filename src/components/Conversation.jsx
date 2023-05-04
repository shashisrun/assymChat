import React from "react";
import ChatBubble from "./ChatBubble";

export default function Conversation({ chats }) {
    const [conversations, setConversation] = React.useState([]);
    React.useEffect(() => {
        console.log(chats);
        setConversation([...chats])
    }, [chats])
    return (
        <>
            <div className="mt-4 px-4 flex flex-col overflow-y-scroll">
                {conversations.map((conversation, key) => {
                    return (
                        <div key={key}>
                            <ChatBubble message={conversation.message} position={conversation.from === "me" ? "end" : "start"} />
                        </div>
                    )
                })}
                <ChatBubble message={"mai to badhiya, app batao kaise ho ?"} position={"start"} />
            </div>
        </>
    )
}