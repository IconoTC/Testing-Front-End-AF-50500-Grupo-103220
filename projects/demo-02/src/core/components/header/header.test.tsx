import { render, screen } from '@testing-library/react';
import { Header } from './header';

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
});
