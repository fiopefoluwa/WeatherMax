import Header from '../components/ui/Header';
import SideBar from '../components/ui/SideBar';

interface AppLayoutProps {
    screen: React.ReactNode;
}

// Default app layout: Grid
export default function AppLayout({ screen }: AppLayoutProps) {
    return (
        <div>
            <Header />
            <section className="sm:grid sm:grid-cols-5 p-2 sm:p-4">
                <SideBar />
                <section className="col-span-4">
                    <main className="min-h-[400px] bg-card-dark border border-card-border p-4 sm:p-8 rounded-xl flex flex-col items-center">
                        {screen}
                    </main>
                    <p className="text-[#949AB5] text-center py-4">
                        Built by Xero && Fiope
                    </p>
                </section>
            </section>
        </div>
    );
}
