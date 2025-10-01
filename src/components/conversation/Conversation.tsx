import {ConversationHeader} from "components/conversation/ConversationHeader";
import {useConversationContext} from "contexts/ConversationContext";

const Conversation: React.FC = () => {
    const {conversationComponent} = useConversationContext();

    return (
        <div className="h-lvh flex flex-col relative">
            <ConversationHeader />

            {conversationComponent}
        </div>
    );
};

export default Conversation;
