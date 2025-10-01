import {IconName, icons} from "./icons";

interface IconProps {
    name: IconName;
    size?: number;
    title: string;
}

export const Icon: React.FC<IconProps> = ({name, size = 24, title}) => {
    if (!icons[name]) return null;

    return (
        <span role="img" aria-label={title} title={title} className={`size-[${String(size)}px]`}>
            {icons[name]}
        </span>
    );
};
