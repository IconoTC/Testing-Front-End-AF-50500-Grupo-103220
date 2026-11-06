/* eslint-disable @typescript-eslint/no-unused-vars */
import './App.css';
import { Header } from './core/components/header/header';
import { Footer } from './core/components/footer/footer';
import { Spacer } from './core/components/spacer/spacer';

import type { MenuOption } from './core/types/menu.option';
import { Menu } from './core/components/menu/menu';
import { Outlet } from 'react-router';


function App() {
    const title = 'React + TS + Vite (2)';
    const menuOptions: MenuOption[] = [
        { path: '/', label: 'Home' },
        { path: '/todos', label: 'Tasks List' },
        { path: '/users', label: 'Users' },
        { path: '/about', label: 'About' },
    ];

    return (
        <>
            <Header appTitle={title}>
                <Menu menuOptions={menuOptions} />
            </Header>
            <main>
                <Outlet />
            </main>

            <Spacer />
            <Footer />
        </>
    );
}

export default App;
