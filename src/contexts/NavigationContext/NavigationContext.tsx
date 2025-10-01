import {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";

import {NavItem} from "components/layout/NavigationBar";
import {ROUTES} from "router/routes";

import {NavigationContext} from "./hook";
import {NavigationContextProviderProps} from "./type";

const icons = {
    iris: (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="currentColor">
            <g filter="url(#a)" opacity=".9">
                <path
                    fill="currentColot"
                    fillRule="evenodd"
                    d="M12.667 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm0 2.25a.75.75 0 0 0 0 1.5 4.25 4.25 0 0 1 4.25 4.25.75.75 0 0 0 1.5 0 5.75 5.75 0 0 0-5.75-5.75Z"
                    clipRule="evenodd"
                />
            </g>
            <defs>
                <filter id="a" width="32" height="32" x="-3.333" y="-4" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0.835294 0 0 0 0 0.745098 0 0 0 0.35 0" />
                    <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_407_60" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_407_60" result="shape" />
                </filter>
            </defs>
        </svg>
    ),
    chat: (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="currentColor">
            <path
                fill="currentColor"
                d="M15.333 5a7 7 0 1 1 0 14h-13v-7a7 7 0 0 1 7-7h6Zm-3 3.25a.75.75 0 0 0-.75.75v6a.75.75 0 0 0 1.5 0V9a.75.75 0 0 0-.75-.75Zm-4 2a.75.75 0 0 0-.75.75v2a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-.75-.75Zm8 0a.75.75 0 0 0-.75.75v2a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-.75-.75Z"
            />
        </svg>
    ),
    explore: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor">
            <path
                fill="currentColor"
                d="M16.34 5.07 8.55 6.91a2.24 2.24 0 0 0-1.64 1.64l-1.84 7.79a2.14 2.14 0 0 0 2.59 2.59l7.79-1.84a2.24 2.24 0 0 0 1.64-1.64l1.84-7.79a2.14 2.14 0 0 0-2.59-2.59Zm-2.75 8.52a2.25 2.25 0 1 1 0-3.18 2.26 2.26 0 0 1 0 3.18Z"
            />
        </svg>
    ),
    insights: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor">
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M12 3.75c3.624 0 6.563 2.871 6.563 6.413a6.32 6.32 0 0 1-1.893 4.506c-.53.525-.92 1.205-.92 1.952a1.13 1.13 0 0 1-1.129 1.129H9.38a1.13 1.13 0 0 1-1.129-1.129c0-.747-.39-1.427-.92-1.952a6.32 6.32 0 0 1-1.893-4.506C5.438 6.621 8.377 3.75 12 3.75ZM12 6a.75.75 0 0 0 0 1.5c1.534 0 2.813 1.285 2.813 2.915a.75.75 0 0 0 1.5 0C16.313 7.997 14.402 6 12 6Z"
                clipRule="evenodd"
            />
            <path fill="currentColor" d="M13 19.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h2Z" />
        </svg>
    ),
};
export const NavigationContextProvider: React.FC<NavigationContextProviderProps> = ({children}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isVisible, setIsVisible] = useState<boolean>(true);

    const items: NavItem[] = [
        {
            id: ROUTES.insights,
            label: "Insights",
            icon: icons.insights,
            onClick: () => void navigate(ROUTES.insights),
            isActive: location.pathname.includes(ROUTES.insights),
        },
        {
            id: ROUTES.chat,
            label: "Chat",
            icon: icons.chat,
            onClick: () => void navigate(ROUTES.chat),
            isActive: location.pathname.includes(ROUTES.chat),
        },
        {
            id: ROUTES.iris,
            label: "Iris",
            icon: icons.iris,
            onClick: () => void navigate(ROUTES.iris),
            isActive: location.pathname.includes(ROUTES.iris),
        },
        {
            id: ROUTES.explore,
            label: "Explore",
            icon: icons.explore,
            onClick: () => void navigate(ROUTES.explore),
            isActive: location.pathname.includes(ROUTES.explore),
        },
    ];

    return (
        <NavigationContext.Provider
            value={{
                items,
                isVisible,
                setIsVisible,
            }}
        >
            {children}
        </NavigationContext.Provider>
    );
};
