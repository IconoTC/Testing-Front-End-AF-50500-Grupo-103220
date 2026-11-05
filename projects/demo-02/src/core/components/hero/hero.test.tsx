import { render, screen } from '@testing-library/react';
import { Hero } from './hero';

describe('Hero', () => {
    it('should render correctly', () => {
        render(<Hero />);
        const images = screen.getAllByRole('img');
        expect(images).toHaveLength(3);
    });
});
