/* eslint-disable @typescript-eslint/no-unused-vars */
import './App.css';
import { Header } from './core/components/header/header';
import { Hero } from './core/components/hero/hero';
import { Counter } from './core/components/counter/counter';
import { Info } from './core/components/info/info';
import { Footer } from './core/components/footer/footer';
import { Spacer } from './core/components/spacer/spacer';
import { Start } from './core/components/start/start';
import { Card } from './core/components/card/card';
import type { MenuOption } from './core/types/menu.option';
import { Menu } from './core/components/menu/menu';

function App() {
    const title = 'React + TS + Vite';
    const menuOptions: MenuOption[] = [
        { path: '/', label: 'Home' },
        { path: '/products', label: 'Products' },
        { path: '/about', label: 'About' },
    ];

    return (
        <>
            <Header appTitle={title}>
                <Menu menuOptions={menuOptions} />
            </Header>
            <section className="center" data-testId="hero-section">
                <Hero />
                <Card className={['center']}>
                    <Start />
                    <Counter />
                </Card>
            </section>

            <section className="next-steps" data-testId="info-section">
                <Info />
            </section>

            <Spacer />
            <Footer />
        </>
    );
}

export default App;
