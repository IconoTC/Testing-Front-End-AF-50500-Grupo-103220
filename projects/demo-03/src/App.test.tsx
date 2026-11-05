import { render, screen } from '@testing-library/react';

import App from './App';
import { createRoutesStub } from 'react-router';
import type { JSX } from 'react/jsx-runtime';

describe('App', () => {

     const Stub = createRoutesStub([
        {
            path: '/',
            Component: (): JSX.Element => <App />,
        },
    ]);
    it('should render correctly', () => {
        // Test implementation
        render(<Stub initialEntries={['/']} />);
        //screen.debug()
        const mainElement = screen.getByRole('main');
        expect(mainElement).toBeInTheDocument();
    });
});
