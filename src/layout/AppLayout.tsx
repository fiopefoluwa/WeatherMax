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
            <section className="grid grid-cols-4 p-4">
                <SideBar />
                <main className="min-h-[400px] col-span-3 bg-card-dark border border-card-border p-8 rounded-xl flex flex-col items-center">
                    {screen}
                </main>
            </section>
        </div>
    );
}
