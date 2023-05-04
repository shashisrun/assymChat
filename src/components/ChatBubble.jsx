export default function ChatBubble({message, position}) {
    return (
        <>
            <div className={`chat chat-${position} ${position === "start" ? "float-right" : ""}`}>
                <div className={`chat-bubble px-8 ${position === "end" ? "chat-bubble-primary" : "chat-bubble-seconday"}`}>{message}</div>
            </div>
        </>
    )
}