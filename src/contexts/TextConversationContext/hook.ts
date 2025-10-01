import {createContext, useContext} from "react";

import {TextConversationContextValue} from "./type";

export const TextConversationContext = createContext<TextConversationContextValue | undefined>(undefined);

export const useTextConversationContext = () => {
    const context = useContext(TextConversationContext);
    if (!context) {
        throw new Error("useTextConversationContext must be used within a TextConversationContextProvider");
    }
    return context;
};
