import React from "react";

import {Icon, IconName} from "components/UI/Icon";
import {ConversationMode, useConversationContext} from "contexts/ConversationContext";

export const ConversationModeToggle = (): React.ReactElement => {
    const {conversationMode, setConversationMode} = useConversationContext();

    const handleToggleMode = () => {
        setConversationMode((prevState) => {
            const newConversationMode = prevState === ConversationMode.TALK ? ConversationMode.TEXT : ConversationMode.TALK;

            return newConversationMode;
        });
    };

    return (
        <div className="flex items-center">
            <label htmlFor="hs-small-soft-switch-with-icons" className="relative inline-block w-[122px] h-9 cursor-pointer">
                <input
                    type="checkbox"
                    id="hs-small-soft-switch-with-icons"
                    className="peer sr-only"
                    checked={conversationMode === ConversationMode.TEXT}
                    readOnly
                />
                <span className="absolute inset-0 bg-zinc-900 rounded-full"></span>
                <span className="absolute top-1/2 start-1 -translate-y-1/2 w-14 h-7 bg-black rounded-full shadow-xs transition-transform duration-200 ease-in-out  peer-checked:translate-x-full"></span>

                <button
                    onClick={handleToggleMode}
                    className="w-14 h-7 absolute top-1/2 left-1 rounded-full cursor-pointer -translate-y-1/2 flex justify-center items-center size-5 text-teal-300 peer-checked:text-zinc-500 transition-colors duration-200 focus-visible:outline-1 focus-visible:outline-teal-300"
                >
                    <Icon name={IconName.TALK} title="Talk" />
                </button>

                <button
                    onClick={handleToggleMode}
                    className="w-14 h-7 absolute top-1/2 right-1 rounded-full cursor-pointer -translate-y-1/2 flex justify-center items-center size-5 text-zinc-500 peer-checked:text-teal-300 transition-colors duration-200 focus-visible:outline-1 focus-visible:outline-teal-300"
                >
                    <Icon name={IconName.TEXT} title="Text" />
                </button>
            </label>
        </div>
    );
};
