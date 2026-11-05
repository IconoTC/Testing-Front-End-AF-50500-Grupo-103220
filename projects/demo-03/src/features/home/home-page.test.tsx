import { render, screen } from '@testing-library/react';
import { HomePage } from './home-page';
// import { AppContext, type AppContextType } from '../../core/context/context';


describe('Home Page', () => {
    test('should render correctly', () => {
        // render(
        //     <AppContext.Provider value={{ theme: 'light'} as AppContextType}>
        //         <HomePage />
        //     </AppContext.Provider>
        // );
        render(<HomePage />);
        const eHeaders = screen.getAllByRole('heading', { level: 2 });
        expect(eHeaders[0].textContent).toBe('Home Page');
        const eRegion = screen.getByRole('region', {
            name: 'Home Page Section',
        });
        // expect(eRegion).toHaveClass('page-light');
    });
});
