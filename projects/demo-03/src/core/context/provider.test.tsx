import { use } from 'react';
import { AppContext } from './contest';
import { AppContextProvider } from './provider';
import { render, screen } from '@testing-library/react';

const TestComponent: React.FC = () => {
    const { theme, language } = use(AppContext);
    return (
        <div>
            <p>{theme}</p>
            <p>{language}</p>
        </div>
    );
};

describe('AppContext Provider', () => {
    beforeEach(() => {
        render(
            <AppContextProvider>
                <TestComponent />
            </AppContextProvider>,
        );
    });

    it('should display the correct theme', () => {
        const p1 = screen.getByText('light');
        expect(p1).toBeInTheDocument();
    });

    it('should display the correct language', () => {
        const p2 = screen.getByText('es');
        expect(p2).toBeInTheDocument();
    });
});
