import {ConversationMood} from "contexts/ConversationContext";

export enum BlurredDotMode {
    AI = "ai",
    USER = "user",
}

interface BlurredDotBaseProps {
    size: number;
    isActive?: boolean;
    mode?: BlurredDotMode;
    mood?: ConversationMood;
    alt?: string;
}

interface BlurredDotAIProps extends BlurredDotBaseProps {
    mode: BlurredDotMode.AI;
    mood?: ConversationMood;
}

interface BlurredDotUserProps extends BlurredDotBaseProps {
    mode: BlurredDotMode.USER;
    mood?: never;
}

export type BlurredDotProps = BlurredDotAIProps | BlurredDotUserProps;

interface DotColors {
    [BlurredDotMode.USER]: Record<string, string>;
    [BlurredDotMode.AI]: Record<ConversationMood, Record<string, string>>;
}

export const dotColorsMap: DotColors = {
    [BlurredDotMode.USER]: {
        color1: "#FFF4BD",
        color2: "#FD5533",
    },
    [BlurredDotMode.AI]: {
        [ConversationMood.INITIAL]: {
            color1: "#FFF4BD",
            color2: "#FFD500",
        },
        [ConversationMood.EVOLUTED]: {
            color1: "#444CE4",
            color2: "#F257A0",
        },
    },
};
