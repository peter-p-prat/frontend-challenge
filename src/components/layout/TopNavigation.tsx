import React from "react";

import {Icon, IconName} from "components/UI/Icon";

interface TopNavigationProps {
    title: string;
    onMenuClick?: () => void;
}

const TopNavigation: React.FC<TopNavigationProps> = ({title, onMenuClick}) => {
    return (
        <div className="layout-container flex items-center justify-between h-14">
            <h1 className="text-2xl font-bold text-white">{title}</h1>

            {onMenuClick && (
                <button
                    onClick={onMenuClick}
                    className="text-white hover:text-gray-300 transition-colors cursor-pointer"
                    aria-label="Open menu"
                >
                    <Icon name={IconName.MENU} title="Menu" />
                </button>
            )}
        </div>
    );
};

export default TopNavigation;
