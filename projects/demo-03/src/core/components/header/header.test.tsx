import { render, screen } from '@testing-library/react';
import { Header } from './header';
import { AppContext, type AppContextType } from '../../context/contest';

const TITLE = 'Test Title';
const CONTENT = 'Test content';

describe('Header Component', () => {
    beforeEach(() => {
        render(
            <Header appTitle={TITLE}>
                <p>{CONTENT}</p>
            </Header>,
        );
    });

    test('should render the header with correct title', () => {
        const h1Element = screen.getByRole('heading', {
            level: 1,
        });
        expect(h1Element).toBeInTheDocument();
        expect(h1Element).toHaveTextContent(TITLE);
    });

    test('should render children content', () => {
        const contentElement = screen.getByText(CONTENT);
        expect(contentElement).toBeInTheDocument();
    });

    test('should render the theme paragraph without contest', () => {
        const themeParagraph = screen.getByText(/theme/i);
        expect(themeParagraph).toBeInTheDocument();
    });

    test('should render the theme paragraph with contest', () => {
        const contextValue: AppContextType = {
            theme: 'light',
            language: 'es',
            isAuthenticated: false,
            user: null,
        };

        render(
            <AppContext.Provider value={contextValue}>
                <Header appTitle={TITLE}>
                    <p>{CONTENT}</p>
                </Header>
                ,
            </AppContext.Provider>,
        );

        const themeParagraph = screen.getByText(/light theme/i);
        expect(themeParagraph).toBeInTheDocument();
    });
});
