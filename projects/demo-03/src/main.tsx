import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { routes } from './core/routes/routes.tsx';
import { AppContextProvider } from './core/context/provider.tsx';

const appRouter = createBrowserRouter(routes);

createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        {/* <App /> */}
        <AppContextProvider>
            <RouterProvider router={appRouter} />
        </AppContextProvider>
    </StrictMode>,
);
