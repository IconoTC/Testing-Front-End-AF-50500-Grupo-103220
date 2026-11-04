import axios from 'axios';

export type User = {
    id: number;
    name: string;
    username: string;
    email: string;
};

const url = 'https://jsonplaceholder.typicode.com/users';

export const getUsersByAxios = async (): Promise<User[]> => {
    const response = await axios.get<User[]>(url);
    const users = response.data
    console.log('users', users);
    return users;
}

export const getUsersByFetch = async (): Promise<User[]> => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch users: ${response.status} ${response.statusText}`);
    }
    const users = await response.json() as User[];
    console.log('users', users);
    return users;
}
