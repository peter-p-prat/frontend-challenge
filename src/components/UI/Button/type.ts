import {ButtonHTMLAttributes} from "react";

import {IconName} from "components/UI/Icon";

export enum ButtonSize {
    SMALL = "sm",
    LARGE = "lg",
}

interface ButtonBaseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: ButtonSize;
    widthClassName?: string;
}

interface ButtonWhitoutLabelProps extends ButtonBaseProps {
    label?: never;
    icon: IconName;
    iconAlt: string;
    iconColorClassName: string;
}

interface ButtonWhitoutIconProps extends ButtonBaseProps {
    label: React.ReactNode;
    icon?: never;
    iconAlt?: never;
    iconColorClassName?: never;
}

interface ButtonWithIconProps extends ButtonBaseProps {
    label?: React.ReactNode;
    icon: IconName;
    iconAlt: string;
    iconColorClassName?: string;
}

export type ButtonProps = ButtonWhitoutLabelProps | ButtonWhitoutIconProps | ButtonWithIconProps;
