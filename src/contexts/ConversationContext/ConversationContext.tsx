import {useEffect, useState} from "react";

import TalkConversation from "components/conversation/TalkConversation";
import TextConversation from "components/conversation/TextConversation";
import {useNavigationContext} from "contexts/NavigationContext";

import {ConversationContext} from "./hook";
import {ConversationContextProviderProps, ConversationCounterpart, ConversationMode, ConversationMood} from "./type";

const TIME_TO_SELFAWARENESS_EVOLUTION = 10_000;

export const ConversationContextProvider: React.FC<ConversationContextProviderProps> = ({children, counterpart}) => {
    const [conversationMode, setConversationMode] = useState<ConversationMode | null>(null);
    const [mood, setMood] = useState(ConversationMood.INITIAL);
    const {setIsVisible: setNavBarVisible} = useNavigationContext();

    const conversationComponentsMap = (counterpart: ConversationCounterpart) => ({
        [ConversationMode.TALK]: <TalkConversation />,
        [ConversationMode.TEXT]: <TextConversation counterpart={counterpart} />,
    });

    const handleStartConversation = (mode: ConversationMode) => {
        setConversationMode(mode);
        setNavBarVisible(false);
    };

    const handleEndConversation = () => {
        setConversationMode(null);
        setNavBarVisible(true);
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setMood(ConversationMood.EVOLUTED);
        }, TIME_TO_SELFAWARENESS_EVOLUTION);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return (
        <ConversationContext.Provider
            value={{
                mood,
                conversationMode,
                conversationComponent: conversationMode ? conversationComponentsMap(counterpart)[conversationMode] : null,
                conversationCounterpart: counterpart,
                handleStartConversation,
                handleEndConversation,
                setConversationMode,
            }}
        >
            {children}
        </ConversationContext.Provider>
    );
};
