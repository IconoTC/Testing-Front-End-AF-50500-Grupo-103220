import type { User, UserRegister } from '../types/user';

const url = 'http://localhost:3000/register';

export const register = async (item: UserRegister): Promise<User> => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
    });

    if(!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
};

// export class UserService {
//     url = 'http://localhost:3000/users';

//     async register(item: UserRegister): Promise<User> {
//         const response = await fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(item),
//         });
//         const data = await response.json();
//         return data;
//     }
// }
