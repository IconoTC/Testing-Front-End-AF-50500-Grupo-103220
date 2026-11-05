import { render, screen } from '@testing-library/react';
import { Footer } from './footer';

describe('Footer', () => {
    beforeEach(() => {
        render(<Footer />);
    });

    it('should render the footer component', () => {
        const footer = screen.getByRole('contentinfo');
        expect(footer).toBeInTheDocument();
    });

    it('should render the h2 heading with the correct text', () => {
        const heading = screen.getByRole('heading', { level: 2 });
        expect(heading).toHaveTextContent('Connect with us');
    });

    it('should render the paragraph with the correct text', () => {
        const paragraph = screen.getByText('Join the Vite community');
        expect(paragraph).toBeInTheDocument();
    });
});
