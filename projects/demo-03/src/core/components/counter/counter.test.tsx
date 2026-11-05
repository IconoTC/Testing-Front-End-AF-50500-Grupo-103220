import { act, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from './counter';

describe('Counter Component', () => {
    let buttonElement: HTMLElement;
    beforeEach(() => {
        render(<Counter />);
        buttonElement = screen.getByRole('button');
    });

    it('should render the button with initial count', () => {
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveTextContent('Count is 0');
    });

    test('should increment count on button click', () => {
        act(() => {
            /* fire events that update state */
            buttonElement.click();
        });
        expect(buttonElement).toHaveTextContent('Count is 1');
    });

    test('should increment count on button click (fireEvent)', () => {
        fireEvent.click(buttonElement);
        expect(buttonElement).toHaveTextContent('Count is 1');
    });

    test('should increment count on button click (userEvent)', async () => {
        await userEvent.click(buttonElement);
        expect(buttonElement).toHaveTextContent('Count is 1');
    });
});
