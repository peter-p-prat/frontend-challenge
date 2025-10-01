import React from "react";

import {Button} from "components/UI/Button";
import {IconName} from "components/UI/Icon";

interface MicrophoneButtonProps {
    isMuted: boolean;
    onToggle: () => void;
}

const MicrophoneButton: React.FC<MicrophoneButtonProps> = ({isMuted, onToggle}) => {
    return (
        <Button
            onClick={onToggle}
            icon={isMuted ? IconName.MICROPHONE_MUTED : IconName.MICROPHONE}
            iconAlt={isMuted ? "Muted Microphone" : "Unmuted Microphone"}
            iconColorClassName="teal-300"
            widthClassName="w-22"
        />
    );
};

export default MicrophoneButton;
