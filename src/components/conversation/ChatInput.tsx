import React, {useEffect, useRef, useState} from "react";

import {useTextConversationContext} from "contexts/TextConversationContext";

interface ChatInputProps {
    onSendMessage: (message: string) => Promise<void>;
}

const ChatInput: React.FC<ChatInputProps> = ({onSendMessage}) => {
    const [inputValue, setInputValue] = useState("");
    const [showErrorfeedback, setShowErrorFeedback] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const {isLoading, isStreamingMessage} = useTextConversationContext();
    const isSubmitEnabled = !isLoading && !isStreamingMessage;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (inputValue.trim() && isSubmitEnabled) {
            setInputValue("");
            await onSendMessage(inputValue);
        }
        if (!isSubmitEnabled) {
            setShowErrorFeedback(true);
        }
    };

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    useEffect(() => {
        if (isSubmitEnabled) {
            setShowErrorFeedback(false);
        }
    }, [isSubmitEnabled, showErrorfeedback, onSendMessage]);

    return (
        <form onSubmit={(e) => void handleSubmit(e)} className="layout-container flex items-center bg-black pb-6">
            <input
                ref={inputRef}
                type="text"
                name="chat-input"
                value={inputValue}
                data-disabled={showErrorfeedback}
                onChange={(e) => {
                    setInputValue(e.target.value);
                }}
                placeholder="Message..."
                className="text-input data-[disabled=true]:focus:outline-red-500"
                aria-label="Type your message"
            />
        </form>
    );
};

export default ChatInput;
