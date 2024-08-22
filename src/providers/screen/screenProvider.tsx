import { ReactNode, useState } from 'react';
import SCREEN from './screens';
import { ScreenContext } from './screenContext';

interface IScreenProviderProps {
    children: ReactNode;
}

const ScreenProvider = ({ children }: IScreenProviderProps) => {
    const [currentScreen, setCurrentScreen] = useState(SCREEN.MY_LOCATION);

    return (
        <ScreenContext.Provider value={{ currentScreen, setCurrentScreen }}>
            {children}
        </ScreenContext.Provider>
    );
};

export default ScreenProvider;
