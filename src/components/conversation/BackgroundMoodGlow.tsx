import React from "react";

import {ConversationMood, GlowColors, useConversationContext} from "contexts/ConversationContext";

const glowColors: Record<ConversationMood, GlowColors> = {
    [ConversationMood.INITIAL]: {
        leftGlob: {
            color1: "#fedabb",
            color2: "#fd7f50",
        },
        rightGlob: {
            color1: "#fd915d",
            color2: "#ffdd32",
        },
    },
    [ConversationMood.EVOLUTED]: {
        leftGlob: {
            color1: "#ED00DE",
            color2: "#4A0045",
        },
        rightGlob: {
            color1: "#F257A0",
            color2: "#D12233",
        },
    },
};

const BackgroundMoodGlow: React.FC = () => {
    const {mood} = useConversationContext();

    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                clipRule="evenodd"
                viewBox="0 0 393 198"
                className="fixed -bottom-[200px] overflow-visible block blur-[100px] w-[700px] animate-[spin_42s_ease-in-out_infinite]"
            >
                <defs>
                    <radialGradient
                        id="a"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientTransform="matrix(177.053 -71.4815 44.5845 110.432 37.78 105.375)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0" stopColor={glowColors[mood].rightGlob.color1} style={{transition: "stop-color 1s ease"}} />
                        <stop offset="1" stopColor={glowColors[mood].rightGlob.color2} style={{transition: "stop-color 1s ease"}} />
                    </radialGradient>
                </defs>
                <g>
                    <path
                        fill="url(#a)"
                        d="M386.25 47.17c15.921 39.433 5.541 120.107-51.236 143.03-56.777 22.923-317.615-11.914-333.535-51.347-15.92-39.433 212.186-85.667 268.964-108.59C327.22 7.341 298.453-31.976 386.25 47.17Z"
                    />
                </g>
            </svg>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                clipRule="evenodd"
                viewBox="0 0 280 405"
                className="fixed -bottom-[95%] overflow-visible block blur-[100px] w-[700px] animate-[spin_42s_ease-in-out_infinite_reverse]"
            >
                <defs>
                    <radialGradient
                        id="b"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientTransform="matrix(105.935 183.486 -114.427 66.0648 85.108 216.18)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0" stopColor={glowColors[mood].leftGlob.color1} style={{transition: "stop-color 1s ease"}} />
                        <stop offset="1" stopColor={glowColors[mood].leftGlob.color2} style={{transition: "stop-color 1s ease"}} />
                    </radialGradient>
                </defs>
                <clipPath id="a">
                    <path d="M0 0h280v405H0z" />
                </clipPath>
                <g clipPath="url(#a)">
                    <path
                        fill="url(#b)"
                        d="M260.094 359.799c-40.86 23.591-200.449 76.538-234.42 17.697C-8.297 318.656-10.392 26.67 30.468 3.08c40.86-23.59 78.077 94.225 112.049 153.066 33.972 58.84 190.944 94.946 117.577 203.653Z"
                    />
                </g>
            </svg>
        </>
    );
};

export default BackgroundMoodGlow;
