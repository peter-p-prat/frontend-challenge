import React from "react";

import {ConversationContextProvider, ConversationCounterpart} from "contexts/ConversationContext";
import {TextConversationContextProvider} from "contexts/TextConversationContext";
import useSEO from "hooks/useSEO";

import ChatHome from "./components/ChatHome";

const Chat: React.FC = () => {
    useSEO({
        title: "Chat - Iris AI Assistant",
        description:
            "Connect with Iris through our advanced chat interface. Experience meaningful conversations designed to enhance your self-awareness and personal growth journey.",
        keywords: "AI chat interface, Iris assistant, personal growth chat, self-awareness conversations, AI therapy chat",
        ogTitle: "Chat - Iris AI Assistant",
        ogDescription: "Connect with Iris through our advanced chat interface for meaningful self-awareness conversations.",
        twitterTitle: "Chat - Iris AI Assistant",
        twitterDescription: "Connect with Iris through our advanced chat interface for meaningful self-awareness conversations.",
    });

    return (
        <ConversationContextProvider counterpart={ConversationCounterpart.SAM}>
            <TextConversationContextProvider>
                <ChatHome />
            </TextConversationContextProvider>
        </ConversationContextProvider>
    );
};

export default Chat;
