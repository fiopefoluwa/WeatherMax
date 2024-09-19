import { Dispatch, SetStateAction, createContext } from 'react';
import { UNIT } from '../../lib/converter';

interface ITemperatureUnit {
    currentTempUnit: UNIT;
    setCurrentTempUnit: Dispatch<SetStateAction<UNIT>>;
}

export const tempUnitContext = createContext<ITemperatureUnit>({
    currentTempUnit: UNIT.CELSIUS,
    setCurrentTempUnit: () => {}
});
