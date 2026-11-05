import type { RouteObject } from 'react-router';
import App from '../../App';
import { HomePage } from '../../features/home/home-page';
import { AboutPage } from '../../features/about/about-page';
import { TodoPage } from '../../features/todo/todo-page';
import { UsersPage } from '../../features/users/users-page';

export const routes: RouteObject[] = [
    {
        path: '/',
        Component: App,
        children: [
            {
                //path: '/',
                index: true,
                Component: HomePage,
            },
            {
                path: 'home',
                Component: HomePage,
            },
            {
                path: 'about',
                Component: AboutPage,                
            },
            {
                path: 'todos',
                Component: TodoPage
            },
            {
                path: 'users',
                Component: UsersPage, 
            },
            {
                path: '*',
                Component: () => <h2>404 - Not Found</h2>,
            }
        ],
    },
];
