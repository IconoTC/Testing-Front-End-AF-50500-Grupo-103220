import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { FormRegistrationC } from "./FormRegistrationC";
import type { Register } from "../../types/register";

const mockData: Register = {
    userName: 'testUser',
    email: 'test@example.com',
    passwd: 'password123',
    isOkConditions: true,
    turn: 'N',
    course: 'A',
};
describe('FormRegistrationC', () => {

    beforeEach(() => {
        render(<FormRegistrationC />);
    });
    
    
    test('should send registration data when complete form is submitted', async () => {

        vi.spyOn(console, 'log').mockImplementation(() => {});
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
        
        const conditionsInput = screen.getByRole('checkbox', { name: /conditions/i });
        await userEvent.click(conditionsInput);
        
        const turnInput = screen.getByRole('radio', { name: /noche/i });
        await userEvent.click(turnInput);
        
        const courseSelect = screen.getByRole('combobox', { name: /course/i });
        await userEvent.selectOptions(courseSelect, mockData.course);

    
        // Submit the form
        const submitButton = screen.getByRole('button', { name: /enviar/i });
        await userEvent.click(submitButton);
    
        expect(console.log).toHaveBeenCalledWith('Usuario registrado', mockData);
    });

});