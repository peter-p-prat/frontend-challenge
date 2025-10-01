import React, {ReactElement} from "react";

import {useNavigationContext} from "contexts/NavigationContext";

export interface NavItem {
    id: string;
    label: string;
    icon: ReactElement;
    isActive: boolean;
    onClick: () => void;
}

const NavigationBar: React.FC = () => {
    const {items, isVisible} = useNavigationContext();

    return (
        <nav
            className={`fixed bottom-0 left-0 w-full h-(--spacing-navbar) px-6 pt-4 pb-[30px] flex justify-between z-50 transition-all duration-500 ease-in-out bg-black border-t border-teal-600 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
            }`}
            aria-label="Navigation"
        >
            {items.map((item) => (
                <button
                    key={item.id}
                    className={`relative flex flex-col items-center gap-1 w-[64px] transition-colors duration-300 touch-manipulation rounded-lg cursor-pointer focus-visible:outline-1 focus-visible:outline-teal-300
              ${item.isActive ? "nav-button-active-glow text-teal-300" : "text-zinc-600"}`}
                    onClick={item.onClick}
                >
                    {item.icon}
                    <span className="text-xs/[14px]">{item.label}</span>
                </button>
            ))}
        </nav>
    );
};

export default NavigationBar;
