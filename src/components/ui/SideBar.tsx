import clsx from 'clsx';
import {
    City01Icon,
    LocationUser03Icon,
    MapsLocation01Icon,
    Settings02Icon,
} from 'hugeicons-react';
import { ReactNode } from 'react';

interface SideBarItemProps {
    text: string;
    icon: ReactNode;
    isActive: boolean;
    onClick: () => void;
}

const SideBarItem = ({ icon, text, onClick, isActive }: SideBarItemProps) => {
    return (
        <li
            onClick={onClick}
            className={clsx(
                'flex items-center gap-2 w-full py-2 my-2 cursor-pointer text-grey-050 transition-colors hover:text-white',
                isActive && '!text-primary border-l-2 border-primary pl-2'
            )}
        >
            {icon}
            <span>{text}</span>
        </li>
    );
};

export default function SideBar() {
    return (
        <section className="w-full col-span-1">
            <ul>
                <SideBarItem
                    icon={<LocationUser03Icon />}
                    text="My Location"
                    isActive={true}
                    onClick={() => alert('My location')}
                />
                <SideBarItem
                    icon={<City01Icon />}
                    text="Cities"
                    isActive={false}
                    onClick={() => alert('Cities')}
                />
                <SideBarItem
                    icon={<MapsLocation01Icon />}
                    text="World Map"
                    isActive={false}
                    onClick={() => alert('World Map')}
                />
                <SideBarItem
                    icon={<Settings02Icon />}
                    text="Settings"
                    isActive={false}
                    onClick={() => alert('Settings')}
                />
            </ul>
        </section>
    );
}
