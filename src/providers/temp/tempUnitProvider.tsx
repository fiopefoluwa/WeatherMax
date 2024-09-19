import { ReactNode, useState } from 'react';
import { UNIT } from '../../lib/converter';
import { TempUnitContext } from './tempUnitContext';

interface ITempUnitProviderProps {
    children: ReactNode;
}

const TempUnitProvider = ({ children }: ITempUnitProviderProps) => {
    const [tempUnit, setTempUnit] = useState(UNIT.CELSIUS);

    return (
        <TempUnitContext.Provider
            value={{
                currentTempUnit: tempUnit,
                setCurrentTempUnit: setTempUnit,
            }}
        >
            {children}
        </TempUnitContext.Provider>
    );
};
