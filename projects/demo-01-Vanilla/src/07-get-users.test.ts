import type { Mock } from "vitest";
import { getUsersByAxios, getUsersByFetch, type User } from "./07-get-users.ts";
import axios from 'axios';

const mockUsers: User[] = [
    { id: 1, name: 'John Doe', username: 'johndoe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', username: 'janesmith', email: 'jane.smith@example.com' },
    { id: 3, name: 'Bob Johnson', username: 'bobjohnson', email: 'bob.johnson@example.com' }
];

// vi.mock('axios', () => {
//     return {
//         default: {
//             get: vi.fn(() => Promise.resolve({
//                 data: [
//                     ...mockUsers
//                 ]
//             }))
            
//         }
//     }
// });

vi.mock('axios')

describe('getUsersByAxios', () => {
    
    it('should return a list of users', async () => {
        (axios.get as Mock).mockResolvedValue({ data: mockUsers });

        vi.spyOn(console, 'log').mockImplementation(() => undefined);

        const users = await getUsersByAxios();
        expect(users).toBeInstanceOf(Array);
        expect(users.length).toBe(3);
        expect(console.log).toHaveBeenCalledWith('users', mockUsers);
    });
});



describe('getUsersByFetch', () => {


    it('should return a list of users (fetch ok)', async () => {
        // const mockFetch = vi.fn(() =>
        //     Promise.resolve({
        //         json: () => Promise.resolve(mockUsers),
        //     })
        // );
        globalThis.fetch = vi.fn();

        (globalThis.fetch as Mock).mockResolvedValue({
            ok: true,
            json: vi.fn().mockResolvedValue(mockUsers)
        } as unknown as Response);

        const users = await getUsersByFetch();
        expect(users).toBeInstanceOf(Array);
        expect(users.length).toBe(3);

    });

    it('should throw an error when fetch fails', async () => {
        (globalThis.fetch as Mock).mockResolvedValue({
            ok: false,
            status: 500,
            statusText: 'Internal Server Error',
        } as unknown as Response);

        await expect(getUsersByFetch()).rejects.toThrow('Failed to fetch users: 500 Internal Server Error');
    });
})
