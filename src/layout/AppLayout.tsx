import { Dispatch, SetStateAction } from 'react';
import SCREEN from '../providers/screen/screens';
import Header from '../components/ui/Header';
import SideBar from '../components/ui/SideBar';

interface AppLayoutProps {
    screen: React.ReactNode;
    setScreen: Dispatch<SetStateAction<SCREEN>>;
}

// Default app layout: Grid
export default function AppLayout({ screen, setScreen }: AppLayoutProps) {
    return (
        <div>
            <Header />
            <section className="grid grid-cols-4">
                <SideBar />
                <main className="col-span-3 bg-card-dark border-card-border p-8 rounded-t-xl">
                    {screen}
                </main>
            </section>
        </div>
    );
}
