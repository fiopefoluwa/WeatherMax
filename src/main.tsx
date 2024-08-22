import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import ScreenProvider from './providers/screen/screenProvider';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ScreenProvider>
            <App />
        </ScreenProvider>
    </StrictMode>
);
