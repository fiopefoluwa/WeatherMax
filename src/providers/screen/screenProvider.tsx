import { ReactNode, useState } from 'react';
import SCREEN from './screens';
import { ScreenContext } from './screenContext';
import { TempUnitContext } from '../temp/tempUnitContext';
import { UNIT } from '../../lib/converter';

interface IScreenProviderProps {
    children: ReactNode;
}

const ScreenProvider = ({ children }: IScreenProviderProps) => {
    const [currentScreen, setCurrentScreen] = useState(SCREEN.MY_LOCATION);
    const [tempUnit, setTempUnit] = useState(UNIT.FAHRENHEIT);

    return (
        <ScreenContext.Provider value={{ currentScreen, setCurrentScreen }}>
            <TempUnitContext.Provider
                value={{
                    currentTempUnit: tempUnit,
                    setCurrentTempUnit: setTempUnit,
                }}
            >
                {children}
            </TempUnitContext.Provider>
        </ScreenContext.Provider>
    );
};

export default ScreenProvider;
