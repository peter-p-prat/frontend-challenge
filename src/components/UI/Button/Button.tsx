import React from "react";
import clsx from "clsx";

import {Icon} from "components/UI/Icon";

import {ButtonProps, ButtonSize} from "./type";

const sizeClasses: Record<ButtonSize, string> = {
    [ButtonSize.SMALL]: "py-3 leading-[14px]",
    [ButtonSize.LARGE]: "py-4",
};

export const Button: React.FC<ButtonProps> = ({
    label,
    disabled = false,
    onClick,
    type = "button",
    "aria-label": ariaLabel,
    icon,
    iconAlt,
    iconColorClassName,
    size = ButtonSize.LARGE,
    widthClassName,
}) => {
    return (
        <button
            className={clsx(
                `button ${sizeClasses[size]}`,
                {
                    "py-3 leading-[14px]": size === ButtonSize.SMALL,
                    "py-4": size === ButtonSize.LARGE,
                    "w-full": !widthClassName,
                },
                widthClassName,
            )}
            type={type}
            onClick={onClick}
            disabled={disabled}
            aria-label={ariaLabel}
        >
            {icon && (
                <div className={clsx({"text-white": !iconColorClassName}, iconColorClassName)}>
                    <Icon name={icon} title={iconAlt} size={24} />
                </div>
            )}
            {label && <span>{label}</span>}
        </button>
    );
};
