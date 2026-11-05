import { createMemoryRouter, RouterProvider } from 'react-router';
import { routes } from './routes';
import { render } from '@testing-library/react';
import { HomePage } from '../../features/home/home-page';
import { AboutPage } from '../../features/about/about-page';
import { TodoPage } from '../../features/todo/todo-page';
import { UsersPage } from '../../features/users/users-page';

vi.mock('../../features/home/home-page');
vi.mock('../../features/about/about-page');
vi.mock('../../features/todo/todo-page');
vi.mock('../../features/users/users-page');

describe('Routes', () => {
    it('should render the home page when path is /', () => {
        const mockRouter = createMemoryRouter(routes, {
            initialEntries: ['/'],
        });
        render(<RouterProvider router={mockRouter} />);
        expect(HomePage).toHaveBeenCalled();
        expect(mockRouter.state.location.pathname).toBe('/');
    });

    it('should render the home page when path is /home', () => {
        const mockRouter = createMemoryRouter(routes, {
            initialEntries: ['/home'],
        });
        render(<RouterProvider router={mockRouter} />);
        expect(HomePage).toHaveBeenCalled();
        expect(mockRouter.state.location.pathname).toBe('/home');
    });

    it('should render the about page when path is /about', () => {
        const mockRouter = createMemoryRouter(routes, {
            initialEntries: ['/about'],
        });
        render(<RouterProvider router={mockRouter} />);
        expect(AboutPage).toHaveBeenCalled();
        expect(mockRouter.state.location.pathname).toBe('/about');
    });

    it('should render the todos page when path is /', () => {
        const mockRouter = createMemoryRouter(routes, {
            initialEntries: ['/todos'],
        });
        render(<RouterProvider router={mockRouter} />);
        expect(TodoPage).toHaveBeenCalled();
        expect(mockRouter.state.location.pathname).toBe('/todos');
    });

    it('should render the users page when path is /', () => {
        const mockRouter = createMemoryRouter(routes, {
            initialEntries: ['/users'],
        });
        render(<RouterProvider router={mockRouter} />);
        expect(UsersPage).toHaveBeenCalled();
        expect(mockRouter.state.location.pathname).toBe('/users');
    });

    it('should render the 404 page when path is unknown', () => {
        const mockRouter = createMemoryRouter(routes, {
            initialEntries: ['/unknown'],
        });
        const { getByText } = render(<RouterProvider router={mockRouter} />);
        expect(getByText('404 - Not Found')).toBeInTheDocument();
        expect(mockRouter.state.location.pathname).toBe('/unknown');
    });
       
});
