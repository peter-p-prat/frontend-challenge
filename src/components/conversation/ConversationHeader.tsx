import React from "react";

import {ConversationModeToggle} from "components/conversation/ConversationModeToggle";
import {Button, ButtonSize} from "components/UI/Button";
import {ConversationCounterpart, useConversationContext} from "contexts/ConversationContext";
import {useTextConversationContext} from "contexts/TextConversationContext";

import {BlurredDot, BlurredDotMode} from "./BlurredDot";
import {ChatCounterpartInitial} from "./ChatCounterpartInitial";

export const ConversationHeader: React.FC = () => {
    const {messages, endConversation} = useTextConversationContext();
    const {conversationCounterpart, handleEndConversation} = useConversationContext();

    const handleEndSession = () => {
        handleEndConversation();
        if (messages.length) endConversation();
    };

    return (
        <div className="border-b border-b-neutral-600">
            <div className="layout-container flex items-center justify-between py-[10px] relative">
                <ConversationModeToggle />

                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    {conversationCounterpart === ConversationCounterpart.IRIS ? (
                        <BlurredDot size={36} mode={BlurredDotMode.AI} />
                    ) : (
                        <ChatCounterpartInitial counterpart={conversationCounterpart} />
                    )}
                </div>

                <Button label="End" onClick={handleEndSession} size={ButtonSize.SMALL} widthClassName="w-18" />
            </div>
        </div>
    );
};
