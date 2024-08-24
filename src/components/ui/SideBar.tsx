import clsx from 'clsx';

import {
    ArrowDown01Icon,
    City01Icon,
    LocationUser03Icon,
    MapsLocation01Icon,
    Settings02Icon,
} from 'hugeicons-react';
import { ReactNode, useContext, useState } from 'react';
import { ScreenContext } from '../../providers/screen/screenContext';
import SCREEN from '../../providers/screen/screens';

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
                'flex items-center gap-2 w-full py-2 my-2 cursor-pointer text-grey-050 transition-colors hover:text-white select-none',
                isActive && '!text-primary border-l-2 border-primary pl-2'
            )}
        >
            {icon}
            <span>{text}</span>
        </li>
    );
};

export default function SideBar() {
    const { currentScreen, setCurrentScreen } = useContext(ScreenContext);
    const [activeTab, setActiveTab] = useState(currentScreen);
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section
            className={clsx(
                'w-full col-span-1 relative transition-all sm:!h-auto overflow-hidden',
                isExpanded ? 'h-[54px]' : 'h-[200px]'
            )}
        >
            <ul>
                <SideBarItem
                    icon={<LocationUser03Icon />}
                    text="My Location"
                    isActive={activeTab == SCREEN.MY_LOCATION}
                    onClick={() => {
                        setCurrentScreen(SCREEN.MY_LOCATION);
                        setActiveTab(SCREEN.MY_LOCATION);
                    }}
                />
                <SideBarItem
                    icon={<City01Icon />}
                    text="Cities"
                    isActive={activeTab == SCREEN.CITIES}
                    onClick={() => {
                        setCurrentScreen(SCREEN.CITIES);
                        setActiveTab(SCREEN.CITIES);
                    }}
                />
                <SideBarItem
                    icon={<MapsLocation01Icon />}
                    text="World Map"
                    isActive={activeTab == SCREEN.WORLD_MAP}
                    onClick={() => {
                        setCurrentScreen(SCREEN.WORLD_MAP);
                        setActiveTab(SCREEN.WORLD_MAP);
                    }}
                />
                <SideBarItem
                    icon={<Settings02Icon />}
                    text="Settings"
                    isActive={activeTab == SCREEN.SETTINGS}
                    onClick={() => {
                        setCurrentScreen(SCREEN.SETTINGS);
                        setActiveTab(SCREEN.SETTINGS);
                    }}
                />
            </ul>
            <button
                className={clsx(
                    'absolute right-0 top-[16px] cursor-pointer transition-all block sm:hidden text-grey-050 hover:text-white',
                    isExpanded ? 'rotate-180' : 'rotate-0'
                )}
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <ArrowDown01Icon size={24} />
            </button>
        </section>
    );
}
