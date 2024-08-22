import {
    City01Icon,
    LocationUser03Icon,
    MapsLocation01Icon,
} from 'hugeicons-react';
import { ReactNode } from 'react';

interface SideBarItemProps {
    text: string;
    icon: ReactNode;
    isActive: boolean;
    onClick: () => void;
}

const SideBarItem = ({ icon, text, onClick }: SideBarItemProps) => {
    return (
        <li onClick={onClick} className="flex items-center gap-2 w-full">
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
                    icon={<LocationUser03Icon />}
                    text="Settings"
                    isActive={false}
                    onClick={() => alert('Settings')}
                />
            </ul>
        </section>
    );
}
