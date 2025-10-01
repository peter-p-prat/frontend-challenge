import React from "react";

import {BlurredDot, BlurredDotMode} from "components/conversation/BlurredDot";
import Conversation from "components/conversation/Conversation";
import TopNavigation from "components/layout/TopNavigation";
import {Button} from "components/UI/Button";
import {IconName} from "components/UI/Icon";
import {ConversationMode, useConversationContext} from "contexts/ConversationContext";

const ChatHome: React.FC = () => {
    const {conversationMode, handleStartConversation} = useConversationContext();

    const handleTalkClick = () => {
        handleStartConversation(ConversationMode.TALK);
    };

    const handleTextClick = () => {
        handleStartConversation(ConversationMode.TEXT);
    };

    if (conversationMode) {
        return <Conversation />;
    }

    return (
        <>
            <TopNavigation title="Chat" onMenuClick={() => {}} />
            <main className="layout-container h-full flex flex-col mb-22">
                <section className="flex-1 flex flex-col items-center justify-center gap-6 px-[26px] relative">
                    <BlurredDot size={82} mode={BlurredDotMode.AI} />
                    <h2 className="sr-only">Welcome to Chat</h2>
                    <p className="lg:max-w-md text-center leading-relaxed text-zinc-400">
                        Chat with Sam. The more you engage, the more you'll build self-awareness—and move through life with clarity and
                        confidence.
                    </p>
                </section>
                <section className="flex justify-center gap-4 pb-10" aria-label="Conversation options">
                    <Button
                        label="Talk"
                        onClick={handleTalkClick}
                        icon={IconName.TALK}
                        iconAlt="Start voice conversation"
                        aria-label="Start talk mode"
                    />

                    <Button
                        label="Text"
                        onClick={handleTextClick}
                        icon={IconName.TEXT}
                        iconAlt="Start text conversation"
                        aria-label="Start text mode"
                    />
                </section>
            </main>
        </>
    );
};

export default ChatHome;
