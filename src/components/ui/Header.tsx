import { useContext } from 'react';
import { ScreenContext } from '../../providers/screen/screenContext';
import TopBarIcon from '../../assets/TopBarIcon.svg';

export default function Header() {
    const { currentScreen } = useContext(ScreenContext);

    return (
        <header className="w-full p-4 flex items-center justify-center gap-2 cursor-default">
            <h1 className="flex items-center select-none">
                <img
                    src={TopBarIcon}
                    alt="top-bar-icon"
                    className="w-8 h-8 mr-2"
                />
                <span className="text-white text-xl">
                    Weather<span className="text-primary">Max</span>
                </span>
            </h1>
            <h1 className="text-xl text-grey-050">• {currentScreen}</h1>
        </header>
    );
}
