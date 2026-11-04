import { fetchData, fetchDataPromise, fetchDataPromiseOk } from './05-async.ts';

// En Jest
// describe('fetchData', () => {
//     it('should fetch data successfully', () => {
//         fetchData((data) => {
//             expect(data).toBe('Fetched Data');
//             done();
//         });
//     });
// });

describe('fetchData', () => {
    it('should fetch data successfully', () => {
        // Arranger
        const fn = (data: string) => {
            expect(data).toBe('Fetched Data');
        };
        // Act
        fetchData(fn);
    });
});

describe('fetchDataPromiseOk', () => {
    it('should fetch data successfully', () => {
        // Act
        return fetchDataPromiseOk().then((data) => {
            // Assert
            expect(data).toBe('Fetched Data');
        });
    });
});

describe('fetchDataPromise (async/await)', () => {
    it('should fetch data successfully', async () => {
        // Act
        const data = await fetchDataPromise();
        // Assert
        expect(data).toBe('Fetched Data');
    });
});


describe('fetchDataPromise with error', () => {
    it('should throw an error when fetching data fails', () => {
        // Act & Assert
        fetchDataPromise(false).catch((error: Error) => {
            expect(error).toEqual(new Error('Failed to fetch data'));
            expect(error.message).toBe('Failed to fetch data');
        });
    });
});

describe('fetchDataPromise (async/await) with error', () => {
    it('should throw an error when fetching data fails', async () => {
        // Act & Assert
        await expect(fetchDataPromise(false)).rejects.toThrow('Failed to fetch data');
    });
});
