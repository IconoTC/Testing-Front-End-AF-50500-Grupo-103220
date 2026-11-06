import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FormRegistrationC } from './FormRegistrationC';
import type { User, UserRegister } from '../../types/user';
import { register } from '../../services/user-service';
import type { Mock } from 'vitest';
vi.mock('../../services/user-service');

const mockData: UserRegister = {
    userName: 'testUser',
    email: 'test@example.com',
    passwd: 'password123',
    isOkConditions: true,
    turn: 'N',
    course: 'A',
};

const mockUser: User = {
    id: '1',
    userName: mockData.userName,
    email: mockData.email,
    turn: mockData.turn,
    course: mockData.course,
};

describe('FormRegistrationC', () => {
    beforeEach(() => {
        render(<FormRegistrationC />);
        vi.spyOn(console, 'log').mockImplementation(() => undefined);

        (register as Mock).mockResolvedValue(mockUser);
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    test('should send registration data when complete form is submitted', async () => {
        const form = screen.getByRole('form');
        expect(form).toBeInTheDocument();

        // Fill the form with mock data
        // const elements = (form as HTMLFormElement).elements;
        // const userName = elements.namedItem('userName')?
        const userNameInput = screen.getByRole('textbox', { name: /name/i });
        await userEvent.type(userNameInput, mockData.userName);
        const emailInput = screen.getByRole('textbox', { name: /email/i });
        await userEvent.type(emailInput, mockData.email);
        const passwdInput = screen.getByRole('textbox', { name: /password/i });
        await userEvent.type(passwdInput, mockData.passwd);

        const conditionsInput = screen.getByRole('checkbox', {
            name: /conditions/i,
        });
        await userEvent.click(conditionsInput);

        const turnInput = screen.getByRole('radio', { name: /noche/i });
        await userEvent.click(turnInput);

        const courseSelect = screen.getByRole('combobox', { name: /course/i });
        await userEvent.selectOptions(courseSelect, mockData.course);

        // Submit the form
        const submitButton = screen.getByRole('button', { name: /enviar/i });
        await userEvent.click(submitButton);

        expect(register).toHaveBeenCalledWith(mockData);

        // expect(console.log).toHaveBeenCalledWith(
        //     'Usuario registrado',
        //     mockUser
        // );
    });

    test('should not submit form with invalid data', async () => {
        // Submit the form
        const submitButton = screen.getByRole('button', { name: /enviar/i });
        await userEvent.click(submitButton);

        // const userName = elements.namedItem('userName')?
        const userNameInput = screen.getByRole('textbox', { name: /name/i });
        await userEvent.type(userNameInput, mockData.userName);
        const emailInput = screen.getByRole('textbox', { name: /email/i });
        await userEvent.type(emailInput, mockData.email);
        const passwdInput = screen.getByRole('textbox', { name: /password/i });
        await userEvent.type(passwdInput, mockData.passwd);

        // Check that the form was not submitted
        expect(register).not.toHaveBeenCalled();
    });
});
