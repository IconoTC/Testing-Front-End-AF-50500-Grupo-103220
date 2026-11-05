import { render, screen } from '@testing-library/react';
import { Card } from './card';

const CONTENT = 'Card content';
const TITLE = 'Card Title';

describe('Card Component', () => {
    test('should render the card with correct text', () => {
        render(<Card>{CONTENT}</Card>);
        const cardElement = screen.getByRole('region');
        expect(cardElement).toBeInTheDocument();
        expect(cardElement).toHaveTextContent(CONTENT);
    });

    test('should render the card with correct text and title', () => {
         render(<Card title={TITLE}>{CONTENT}</Card>);
        const cardElement = screen.getByRole('region');
        expect(cardElement).toBeInTheDocument();
        expect(cardElement).toHaveTextContent(CONTENT);
        const titleElement = screen.getByRole('heading', { name: `${TITLE}` });
        expect(titleElement).toBeInTheDocument();
    });
});
