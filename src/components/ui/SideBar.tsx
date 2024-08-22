import clsx from 'clsx';
import {
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

    return (
        <section className="w-full col-span-1">
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
        </section>
    );
}
