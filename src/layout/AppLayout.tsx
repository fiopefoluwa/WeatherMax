import { Dispatch, SetStateAction } from 'react';
import SCREEN from '../providers/screen/screens';

interface AppLayoutProps {
    screen: React.ReactNode;
    setScreen: Dispatch<SetStateAction<SCREEN>>;
}

// Default app layout: Grid
export default function AppLayout({ screen, setScreen }: AppLayoutProps) {
    return (
        <section>
            {/* SIDE BAR */}
            <main>{screen}</main>
            {/* CLICK: <button onClick={() => setScreen(SCREEN.CITIES)}>Click</button> */}
        </section>
    );
}
