import { Dispatch, SetStateAction } from 'react';
import SCREEN from '../providers/screen/screens';
import Header from '../components/ui/Header';

interface AppLayoutProps {
    screen: React.ReactNode;
    setScreen: Dispatch<SetStateAction<SCREEN>>;
}

// Default app layout: Grid
export default function AppLayout({ screen, setScreen }: AppLayoutProps) {
    return (
        <div>
            <Header />
            <section className="grid grid-cols-2">
                {/* SIDE BAR */}
                <main>{screen}</main>
            </section>
        </div>
    );
}
