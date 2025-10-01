import {ConversationCounterpart} from "contexts/ConversationContext/type";

export const ChatCounterpartInitial: React.FC<{counterpart: ConversationCounterpart}> = ({counterpart}) => {
    return (
        <div>
            <h1 className="text-2xl font-semibold text-teal-300 m-0">{counterpart.at(0)?.toUpperCase()}</h1>
        </div>
    );
};
