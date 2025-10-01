export enum MessageSender {
    AI = "ai",
    USER = "user",
}

export interface ChatMessage {
    id: string;
    content: string;
    sender: MessageSender;
    isStreaming?: boolean;
}

export interface TextConversationContextProviderProps {
    children: React.ReactNode;
}

export interface TextConversationContextValue {
    messages: ChatMessage[];
    isLoading: boolean;
    isStreamingMessage: boolean;
    error: string | null;
    initializeConversation: () => Promise<void>;
    sendMessage: (message: string) => Promise<void>;
    handleStreamingMessageEnd: (message: ChatMessage) => void;
    endConversation: () => void;
    clearError: () => void;
}
