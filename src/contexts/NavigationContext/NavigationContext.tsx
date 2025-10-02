import {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";

import {NavItem} from "components/layout/NavigationBar";
import {Icon, IconName} from "components/UI/Icon";
import {ROUTES} from "router/routes";

import {NavigationContext} from "./hook";
import {NavigationContextProviderProps} from "./type";

export const NavigationContextProvider: React.FC<NavigationContextProviderProps> = ({children}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isVisible, setIsVisible] = useState<boolean>(true);

    const items: NavItem[] = [
        {
            id: ROUTES.insights,
            label: "Insights",
            icon: <Icon name={IconName.INSIGHTS} title="Insights" size={25} />,
            onClick: () => void navigate(ROUTES.insights),
            isActive: location.pathname.includes(ROUTES.insights),
        },
        {
            id: ROUTES.chat,
            label: "Chat",
            icon: <Icon name={IconName.CHAT} title="Chat" size={25} />,
            onClick: () => void navigate(ROUTES.chat),
            isActive: location.pathname.includes(ROUTES.chat),
        },
        {
            id: ROUTES.iris,
            label: "Iris",
            icon: <Icon name={IconName.IRIS} title="Iris" size={25} />,
            onClick: () => void navigate(ROUTES.iris),
            isActive: location.pathname.includes(ROUTES.iris),
        },
        {
            id: ROUTES.explore,
            label: "Explore",
            icon: <Icon name={IconName.EXPLORE} title="Explore" size={25} />,
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
