import { Dispatch, SetStateAction, createContext } from "react";
import SCREEN from "./screens";

interface IScreenContext {
    currentScreen: SCREEN;
    setCurrentScreen: Dispatch<SetStateAction<SCREEN>>;
}

export const ScreenContext = createContext<IScreenContext>({
    currentScreen: SCREEN.MY_LOCATION,
    setCurrentScreen: () => {}
});