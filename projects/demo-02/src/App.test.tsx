import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
    it('should render correctly', () => {
        // Test implementation
        render(<App />);
        //screen.debug()
        const heroSection = screen.getByTestId('hero-section');
        expect(heroSection).toBeInTheDocument();
    });
});
