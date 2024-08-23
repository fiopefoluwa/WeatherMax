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
                        Built by{' '}
                        <a
                            href="https://github.com/dev-xero"
                            className="hover:underline underline-offset-4 hover:text-white transition"
                        >
                            Xero
                        </a>{' '}
                        &&{' '}
                        <a
                            href="https://github.com/fiopefoluwa"
                            className="hover:underline hover:text-white transition underline-offset-4"
                        >
                            Fiope
                        </a>
                    </p>
                </section>
            </section>
        </div>
    );
}
