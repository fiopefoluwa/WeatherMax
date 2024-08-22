import { useContext } from 'react';
import './App.css';
import { ScreenContext } from './providers/screen/screenContext';
import SCREEN from './providers/screen/screens';
import Cities from './screens/Cities';
import MyLocation from './screens/MyLocation';
import Settings from './screens/Settings';
import WorldMap from './screens/WorldMap';
import AppLayout from './layout/AppLayout';

function App() {
    const { currentScreen, setCurrentScreen } = useContext(ScreenContext);
    let screenComponent = null;

    // Handle which screen to show based on context
    switch (currentScreen) {
        case SCREEN.MY_LOCATION:
            screenComponent = <MyLocation />;
            break;

        case SCREEN.CITIES:
            screenComponent = <Cities />;
            break;

        case SCREEN.WORLD_MAP:
            screenComponent = <WorldMap />;
            break;

        default:
            screenComponent = <Settings />;
            break;
    }

    return (
        <AppLayout
            screen={screenComponent}
            setScreen={setCurrentScreen}
        />
    );
}

export default App;
