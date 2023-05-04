import React from 'react';

const ChatContext = React.createContext();

export const useChat = () => React.useContext(ChatContext);

export default function ChatProvider({ children }) {
    const [chat, setChat] = React.useState(null);

    return (
        <ChatContext.Provider value={{ chat, setChat }}>{children}</ChatContext.Provider>
    );
}