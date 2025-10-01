import React from "react";

import {ConversationContextProvider, ConversationCounterpart} from "contexts/ConversationContext";
import {TextConversationContextProvider} from "contexts/TextConversationContext";
import useSEO from "hooks/useSEO";

import IrisHome from "./components/IrisHome";

const Iris: React.FC = () => {
    useSEO({
        title: "Iris - AI Chat for Self-Awareness",
        description:
            "Start your journey of self-discovery with Iris, your AI-powered companion. Engage in meaningful conversations to build self-awareness, clarity, and confidence in your daily life.",
        keywords:
            "AI chat, self-awareness, personal growth, mindfulness, mental health, artificial intelligence, self-discovery, confidence building",
        ogTitle: "Iris - AI Chat for Self-Awareness",
        ogDescription:
            "Start your journey of self-discovery with Iris, your AI-powered companion for building self-awareness and confidence.",
        twitterTitle: "Iris - AI Chat for Self-Awareness",
        twitterDescription:
            "Start your journey of self-discovery with Iris, your AI-powered companion for building self-awareness and confidence.",
    });

    return (
        <ConversationContextProvider counterpart={ConversationCounterpart.IRIS}>
            <TextConversationContextProvider>
                <IrisHome />
            </TextConversationContextProvider>
        </ConversationContextProvider>
    );
};

export default Iris;
