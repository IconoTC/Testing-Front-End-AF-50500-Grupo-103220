import type { User, UserRegister } from "../types/user";
import { register } from "./user-service";

globalThis.fetch = vi.fn();

describe('User Service', () => {
    afterEach(() => {
        vi.clearAllMocks();
    });  
    
    it('should register a new user', async () => {
        const mockUser: User = {
            id: '1',
            userName: 'John Doe',
            email: 'john.doe@example.com',
            course: 'Full Stack Development',
            turn: 'Morning',
        };

         (globalThis.fetch as any).mockResolvedValueOnce({
            ok: true,
            json: async () => mockUser,
        });

        const result = await register({} as UserRegister)
        expect(result).toEqual(mockUser);
    });

    it('should throw an error if the response is not ok', async () => {
        (globalThis.fetch as any).mockResolvedValueOnce({
            ok: false,
            status: 404,
        });
        await expect(register({} as UserRegister)).rejects.toThrow('HTTP error! status: 404');
    });
});

