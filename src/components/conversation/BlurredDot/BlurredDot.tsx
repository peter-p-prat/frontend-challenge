import React, {useMemo} from "react";
import clsx from "clsx";

import {ConversationMood} from "contexts/ConversationContext";

import {BlurredDotMode, BlurredDotProps, dotColorsMap} from "./type";

export const BlurredDot: React.FC<BlurredDotProps> = ({size, isActive, mode = BlurredDotMode.AI, mood = ConversationMood.INITIAL, alt}) => {
    const dotColors = mode === BlurredDotMode.AI ? dotColorsMap[mode][mood] : dotColorsMap[mode];
    const svgPathUuid = useMemo(() => String(Math.floor(Math.random() * 1_000)), []);

    return (
        <svg
            width={isActive ? size * 1.9 : size}
            height={isActive ? size * 1.9 : size}
            viewBox="0 0 170 170"
            fill="none"
            aria-label={alt}
            xmlns="http://www.w3.org/2000/svg"
            className={clsx("overflow-visible block transition-all duration-500", {
                "blur-xs": size < 40,
                "blur-[8px]": size >= 40,
            })}
        >
            <g filter="url(#filter0_g_1_360)">
                <g clipPath="url(#clip0_1_360)">
                    <rect x="37" y="37" width="96" height="96" rx="48" fill={`url(#paint0_radial_1_360_${svgPathUuid})`} />
                    <g style={{mixBlendMode: "color-dodge"}} filter="url(#filter1_f_1_360)">
                        <path
                            d="M99.3718 113.317C122.549 121.655 148.588 109.809 157.531 86.8583C166.474 63.9077 154.935 38.5436 131.758 30.2058L59.1782 4.09649C36.0009 -4.24124 9.96208 7.60482 1.01899 30.5554C-7.92409 53.506 3.61509 78.8702 26.7925 87.2079L99.3718 113.317Z"
                            fill="url(#paint1_radial_1_360)"
                        />
                    </g>
                </g>
            </g>
            <defs>
                <filter
                    id="filter0_g_1_360"
                    x="0.0608673"
                    y="0.0608673"
                    width="169.878"
                    height="169.878"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feTurbulence type="fractalNoise" baseFrequency="47.916667938232422 47.916667938232422" numOctaves="3" seed="5094" />
                    <feDisplacementMap
                        in="shape"
                        scale="73.878265380859375"
                        xChannelSelector="R"
                        yChannelSelector="G"
                        result="displacedImage"
                        width="100%"
                        height="100%"
                    />
                    <feMerge result="effect1_texture_1_360">
                        <feMergeNode in="displacedImage" />
                    </feMerge>
                </filter>
                <filter
                    id="filter1_f_1_360"
                    x="-22.8784"
                    y="-19.4424"
                    width="204.307"
                    height="156.299"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="10.4348" result="effect1_foregroundBlur_1_360" />
                </filter>
                <radialGradient
                    id={`paint0_radial_1_360_${svgPathUuid}`}
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(-17 73 -73.0803 -16.8967 102 60)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor={dotColors.color1} style={{transition: "stop-color 1s ease"}} />
                    <stop offset="1" stopColor={dotColors.color2} style={{transition: "stop-color 1s ease"}} />
                </radialGradient>
                <radialGradient
                    id="paint1_radial_1_360"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(-60.408 10.5611 43.3409 45.484 119.439 57.9941)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#5DAAAE" />
                    <stop offset="1" stopColor="#484EB7" stopOpacity="0" />
                    <stop offset="1" stopColor="#9FA7FF" stopOpacity="0" />
                </radialGradient>
                <clipPath id="clip0_1_360">
                    <rect x="37" y="37" width="96" height="96" rx="48" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};
