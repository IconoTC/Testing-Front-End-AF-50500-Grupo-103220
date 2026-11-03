import { add } from './01-maths.ts';

describe('Given add function', () => {
    describe('When adding two numbers', () => {
        test('Then the result of adding 2 and 3 is 5', () => {
            // Arrange
            const a = 2;
            const b = 3;
            const expected = 5;
            // Act
            const r = add(a, b);        
            // Assert
            expect(r).toBe(expected);
        });
        test('Then the result of adding -2 and -3 is -5', () => {
            // Arrange
            const a = -2;
            const b = -3;
            const expected = -5;
            // Act
            const r = add(a, b);        
            // Assert
            expect(r).toBe(expected);
        });
        test('Then the result of adding 2 and -3 is -1', () => {
            // Arrange
            const a = 2;
            const b = -3;
            const expected = -1;
            // Act
            const r = add(a, b);        
            // Assert
            expect(r).toBe(expected);
        });
    });
});
