import {createContext, useContext} from "react";

import {ConversationContextValue} from "./type";

export const ConversationContext = createContext<ConversationContextValue | undefined>(undefined);

export const useConversationContext = () => {
    const context = useContext(ConversationContext);
    if (!context) {
        throw new Error("useConversationContext must be used within a ConversationContextProvider");
    }
    return context;
};
