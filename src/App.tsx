import { useContext } from 'react';
import './App.css';
import { ScreenContext } from './providers/screen/screenContext';
import SCREEN from './providers/screen/screens';
import Cities from './screens/Cities';
import MyLocation from './screens/MyLocation';
import Settings from './screens/Settings';
import WorldMap from './screens/WorldMap';

function App() {
    const { currentScreen, setCurrentScreen } = useContext(ScreenContext);

    // Handle which screen to show based on context
    switch (currentScreen) {
        case SCREEN.MY_LOCATION:
            return <MyLocation />;

        case SCREEN.CITIES:
            return <Cities />;

        case SCREEN.WORLD_MAP:
            return <WorldMap />;

        default:
            return <Settings />;
    }
}

export default App;
