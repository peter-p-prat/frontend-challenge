import React, {useState} from "react";

import BackgroundMoodGlow from "components/conversation/BackgroundMoodGlow";
import MicrophoneButton from "components/conversation/MicrophoneButton";
import {useConversationContext} from "contexts/ConversationContext";

import {BlurredDot, BlurredDotMode} from "./BlurredDot";

const TalkConversation: React.FC = () => {
    const [isMuted, setIsMuted] = useState(false);
    const {mood} = useConversationContext();

    const handleMicrophoneToggle = () => {
        setIsMuted((prev) => !prev);
    };

    return (
        <div className="layout-container flex flex-col h-full">
            <BackgroundMoodGlow />

            <div className="flex-1 flex flex-col items-center justify-center gap-2 px-6 relative z-10">
                <BlurredDot size={88} isActive={isMuted} mode={BlurredDotMode.AI} mood={mood} alt="test" />

                <BlurredDot size={88} isActive={!isMuted} mode={BlurredDotMode.USER} />
            </div>

            <div className="px-4 pb-8 relative flex justify-start">
                <MicrophoneButton isMuted={isMuted} onToggle={handleMicrophoneToggle} />
            </div>
        </div>
    );
};

export default TalkConversation;
