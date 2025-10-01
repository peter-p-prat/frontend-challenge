import React, {useEffect, useState} from "react";

import {ChatMessage, MessageSender, useTextConversationContext} from "contexts/TextConversationContext";

const STREAMING_SPEED_MS = 30;

interface MessageProps {
    message: ChatMessage;
    onStreaming?: () => void;
}

export const Message: React.FC<MessageProps> = ({message, onStreaming}) => {
    const [displayedContent, setDisplayedContent] = useState("");
    const {handleStreamingMessageEnd} = useTextConversationContext();

    useEffect(() => {
        let interval: number;
        if (message.isStreaming) {
            let index = 0;
            const content = message.content;

            interval = setInterval(() => {
                if (index < content.length) {
                    setDisplayedContent(content.slice(0, index + 1));
                    onStreaming?.();
                    index++;
                } else {
                    handleStreamingMessageEnd(message);
                    clearInterval(interval);
                }
            }, STREAMING_SPEED_MS);
        }

        setDisplayedContent(message.content);

        return () => {
            clearInterval(interval);
        };
    }, [message, handleStreamingMessageEnd, onStreaming]);

    const isUser = message.sender === MessageSender.USER;

    return (
        <div
            className={isUser ? "message-bubble-user" : "message-bubble-ai"}
            role="article"
            aria-label={`Message from ${isUser ? "you" : "Iris"}`}
            tabIndex={0}
        >
            <p className="text-sm leading-relaxed">
                {displayedContent}
                {message.isStreaming && (
                    <span className="inline-block w-1 h-4 ml-1 bg-current animate-pulse" aria-label="Message is being typed"></span>
                )}
            </p>
        </div>
        // </div>
    );
};
