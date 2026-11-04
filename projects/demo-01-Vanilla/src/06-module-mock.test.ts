import type { Mock } from 'vitest';
import { fetchDataPromise, fetchDataPromiseOk } from './05-async.ts';

// vi.mock('./05-async.ts', async (importOriginal) => {
//   const actual = await importOriginal()
//   return {
//     ...actual as any,
//     fetchDataPromise: vi.fn().mockResolvedValue(23),
//   };
// });

vi.mock('./05-async.ts');

describe('Mock examples', () => {
    afterEach(() => {
        vi.clearAllMocks();
        vi.resetAllMocks();
    });

    // afterAll(() => {
    //     vi.restoreAllMocks();
    // });

    beforeEach(() => {
        (fetchDataPromise as Mock).mockResolvedValue(23);
        (fetchDataPromiseOk as Mock).mockResolvedValue('Fetched Data');
    });

    // beforeAll(() => {
    //     (fetchDataPromise as Mock).mockResolvedValue(23);
    //     (fetchDataPromiseOk as Mock).mockResolvedValue('Fetched Data');
    // });

    test('function fetchDataPromise should be called and return undefined', async () => {
        // (fetchDataPromise as Mock).mockResolvedValue(23);
        const data = await fetchDataPromise();
        expect(fetchDataPromise).toHaveBeenCalled();
        expect(data).toBe(23);
    });

    test('function fetchDataPromiseOk should be called and return undefined', async () => {
        // (fetchDataPromiseOk as Mock).mockResolvedValue('Fetched Data');
        const data = await fetchDataPromiseOk();
        expect(fetchDataPromiseOk).toHaveBeenCalled();
        expect(data).toBe('Fetched Data');
    });

    test('function fetchDataPromise should be called and rejected', async () => {
        (fetchDataPromise as Mock).mockRejectedValueOnce(
            new Error('Failed to fetch data'),
        );
        await expect(fetchDataPromise()).rejects.toThrow('Failed to fetch data');
    });
});
