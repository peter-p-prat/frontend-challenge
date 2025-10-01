import {createContext, useContext} from "react";

import {NavigationContextType} from "./type";

export const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const useNavigationContext = () => {
    const context = useContext(NavigationContext);
    if (!context) {
        throw new Error("useNavigationContext must be used within a NavigationContextProvider");
    }
    return context;
};
