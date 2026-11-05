import { render, screen } from '@testing-library/react';
import { Start } from './start';

describe('Start', () => {
    it('should render correctly', () => {
        // Test implementation
        render(<Start />);
        const heading = screen.getByRole('heading', { name: /started/i });
        expect(heading).toBeInTheDocument();
    });
});
