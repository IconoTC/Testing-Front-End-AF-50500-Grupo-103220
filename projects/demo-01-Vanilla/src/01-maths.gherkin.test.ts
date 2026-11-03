import { add } from './01-maths.ts';

describe('Given add function', () => {
    describe('When adding two numbers', () => {
        test('Then the result of adding 2 and 3 is 5', () => {
            const r = add(2, 3);
            expect(r).toBe(5);
        });
        test('Then the result of adding -2 and -3 is -5', () => {
            const r = add(-2, -3);
            expect(r).toBe(-5);
        });
        test('Then the result of adding 2 and -3 is -1', () => {
            const r = add(2, -3);
            expect(r).toBe(-1);
        });
    });
});
