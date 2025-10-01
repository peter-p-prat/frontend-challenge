import React, {useEffect, useRef} from "react";

import LoadingIndicator from "components/conversation/LoadingIndicator";
import {Message} from "components/conversation/Message";
import {ConversationCounterpart} from "contexts/ConversationContext";
import {useTextConversationContext} from "contexts/TextConversationContext";

import ChatInput from "./ChatInput";

const TextConversation: React.FC<{counterpart: ConversationCounterpart}> = ({counterpart}) => {
    const messagesListRef = useRef<HTMLDivElement>(null);
    const {messages, isLoading, sendMessage} = useTextConversationContext();

    const scrollToBottom = () => {
        messagesListRef.current?.scroll({
            top: messagesListRef.current.scrollHeight,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        if (isLoading) {
            setTimeout(scrollToBottom, 100);
        }
    }, [isLoading]);

    return (
        <>
            <div className="border-b border-b-neutral-600">
                <div className="layout-container text-center py-4">
                    <h2 className="font-medium">Chatting with {counterpart}</h2>
                </div>
            </div>

            <div
                ref={messagesListRef}
                className="layout-container flex-1 flex flex-col gap-6 overflow-y-auto scrollbar-hidden py-6 px-4 min-h-0"
            >
                {messages.map((message) => (
                    <Message key={message.id} message={message} onStreaming={scrollToBottom} />
                ))}

                {isLoading && <LoadingIndicator />}
            </div>

            <ChatInput onSendMessage={sendMessage} />
        </>
    );
};

export default TextConversation;
