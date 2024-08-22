import { useContext } from 'react';
import './App.css';
import { ScreenContext } from './providers/screen/screenContext';
import SCREEN from './providers/screen/screens';
// import { Homepage } from './pages/homepage';

function App() {
    const { currentScreen, setCurrentScreen } = useContext(ScreenContext);

    // Handle which screen to show based on context
    switch (currentScreen) {
        case SCREEN.MY_LOCATION:
            return <h1>My Location</h1>;

        case SCREEN.CITIES:
            return <h1>Cities</h1>;

        case SCREEN.WORLD_MAP:
            return <h1>World Map</h1>;

        default:
            return <h1>Settings</h1>;
    }
}

export default App;
