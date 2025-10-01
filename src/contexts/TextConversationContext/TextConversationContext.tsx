import {useCallback, useEffect, useMemo, useState} from "react";

import {mockDelay} from "utils/mockDelay";
import {mockStreamingResponse} from "utils/mockStreamingResponse";

import {TextConversationContext} from "./hook";
import {ChatMessage, MessageSender, TextConversationContextProviderProps} from "./type";

export const TextConversationContextProvider: React.FC<TextConversationContextProviderProps> = ({children}) => {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const isStreamingMessage = useMemo(() => messages.some((message) => message.isStreaming), [messages]);

    const initializeConversation = useCallback(async () => {
        try {
            setIsLoading(true);

            await mockDelay(1_500);

            const welcomeMessage: ChatMessage = {
                id: `${MessageSender.AI}-${String(Date.now())}`,
                content: "Hi, what would you like to chat about today?",
                sender: MessageSender.AI,
                isStreaming: true,
            };

            setMessages([welcomeMessage]);
        } catch (error_) {
            setError(error_ instanceof Error ? error_.message : "Failed to initialize conversation");
        } finally {
            setIsLoading(false);
        }
    }, []);

    const sendMessage = useCallback(
        async (messageContent: string, forceError?: boolean) => {
            if (isLoading) return;

            try {
                if (forceError) {
                    throw new Error("Forced error sending message");
                }

                setIsLoading(true);
                setError(null);

                await mockDelay(1_500);

                const timestamp = String(Date.now());

                const userMessage: ChatMessage = {
                    id: `${MessageSender.USER}-${timestamp}`,
                    content: messageContent,
                    sender: MessageSender.USER,
                };
                const aiMessage: ChatMessage = {
                    id: `${MessageSender.AI}-${timestamp}`,
                    content: mockStreamingResponse(),
                    sender: MessageSender.AI,
                    isStreaming: true,
                };

                setMessages((prevMessages) => [...prevMessages, userMessage, aiMessage]);
            } catch (error_) {
                setError(error_ instanceof Error ? error_.message : "Failed to send message");
            } finally {
                setIsLoading(false);
            }
        },
        [isLoading],
    );

    const handleStreamingMessageEnd = useCallback((message: ChatMessage) => {
        setMessages((prevMessages) => {
            const newMessagesList = prevMessages.map<ChatMessage>((m) => {
                if (m.id === message.id) {
                    return {...m, isStreaming: false};
                }
                return m;
            });
            return newMessagesList;
        });
        setError(null);
    }, []);

    const endConversation = () => {
        setMessages([]);
        setError(null);
    };

    const clearError = useCallback(() => {
        setError(null);
    }, []);

    useEffect(() => {
        void initializeConversation();
    }, [initializeConversation]);

    return (
        <TextConversationContext.Provider
            value={{
                messages,
                isLoading,
                isStreamingMessage,
                error,
                initializeConversation,
                sendMessage,
                handleStreamingMessageEnd,
                clearError,
                endConversation,
            }}
        >
            {children}
        </TextConversationContext.Provider>
    );
};
