import {Dispatch, ReactElement, SetStateAction} from "react";

export enum ConversationMode {
    TALK = "talk",
    TEXT = "text",
}

export enum ConversationMood {
    INITIAL = "initial",
    EVOLUTED = "evoluted",
}

export interface GlowColors {
    leftGlob: Record<string, string>;
    rightGlob: Record<string, string>;
}

export enum ConversationCounterpart {
    IRIS = "Iris",
    SAM = "Sam",
}

export interface ConversationContextProviderProps {
    children: React.ReactNode;
    counterpart: ConversationCounterpart;
}

export interface ConversationContextValue {
    mood: ConversationMood;
    conversationMode: ConversationMode | null;
    conversationComponent: ReactElement | null;
    conversationCounterpart: ConversationCounterpart;
    handleStartConversation: (mode: ConversationMode) => void;
    handleEndConversation: () => void;
    setConversationMode: Dispatch<SetStateAction<ConversationMode | null>>;
}
