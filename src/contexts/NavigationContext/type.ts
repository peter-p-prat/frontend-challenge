import {Dispatch, SetStateAction} from "react";

import {NavItem} from "components/layout/NavigationBar";

export interface NavigationContextProviderProps {
    children: React.ReactNode;
}

export interface NavigationContextType {
    items: NavItem[];
    isVisible: boolean;
    setIsVisible: Dispatch<SetStateAction<boolean>>;
}
