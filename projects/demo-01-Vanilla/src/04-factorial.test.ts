// TDD para la función factorial

import { factorial } from './04-factorial.ts';

describe('Given a factorial function', () => {
    describe('When it is called with a positive valid integer', () => {
        test('should return 1 for 0!', () => {
            const r = factorial(0);
            expect(r).toBe(1);
        });
        test('should return 1 for 1!', () => {
            const r = factorial(1);
            expect(r).toBe(1);
        });
        test('should return 2 for 2!', () => {
            const r = factorial(2);
            expect(r).toBe(2);
        });
        test('should return 120 for 5!', () => {
            const r = factorial(5);
            expect(r).toBe(120);
        });
    });

    describe('When it is called with a positive valid integer (using test.each)', () => {
        const cases = [
            [0, 1],
            [1, 1],
            [2, 2],
            [5, 120],
        ];

        test.each(cases)('for %i! should return %i', (input, expected) => {
            const r = factorial(input);
            expect(r).toBe(expected);
        });
    });

    describe('When it is called with a positive valid integer (using each with objects)', () => {
        const cases = [
           {input: 0, expected: 1},
           {input: 1, expected: 1},
           {input: 2, expected: 2},
           {input: 5, expected: 120},
           {input: 100, expected: 9.332621544394418e+157},
           {input: 170, expected: 7.257415615308004e+306},
        ];

        test.each(cases)('for $input! should return $expected', ({input, expected}) => {
            const r = factorial(input);
            expect(r).toBe(expected);
        });
    });


    describe('When it is called with a invalid number', () => {
        test('should throw an error for input >= 171', () => {
            expect(() => factorial(171)).toThrow('Invalid value. The result is too large to be represented as a number.');
        });

        test('should throw an error for input < 0', () => {
            expect(() => factorial(-1)).toThrow('Invalid value. A negative input is not allowed.');
        });

        test('should throw an error for non-integer input', () => {
            expect(() => factorial(2.5)).toThrow('Invalid value. A non-integer input is not allowed.');
        });
    });

});
