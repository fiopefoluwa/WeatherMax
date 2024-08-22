import { useContext } from 'react';
import './App.css';
import { ScreenContext } from './providers/screen/screenContext';
import SCREEN from './providers/screen/screens';
import CitiesFragment from './components/fragments/CitiesFragment';
import MyLocationFragment from './components/fragments/MyLocationFragment';
import SettingsFragment from './components/fragments/SettingsFragment';
import WorldMapFragment from './components/fragments/WorldMapFragment';
import AppLayout from './layout/AppLayout';

function App() {
    const { currentScreen } = useContext(ScreenContext);
    let screenComponent = null;

    // Handle which screen to show based on context
    switch (currentScreen) {
        case SCREEN.MY_LOCATION:
            screenComponent = <MyLocationFragment />;
            break;

        case SCREEN.CITIES:
            screenComponent = <CitiesFragment />;
            break;

        case SCREEN.WORLD_MAP:
            screenComponent = <WorldMapFragment />;
            break;

        default:
            screenComponent = <SettingsFragment />;
            break;
    }

    return <AppLayout screen={screenComponent} />;
}

export default App;
