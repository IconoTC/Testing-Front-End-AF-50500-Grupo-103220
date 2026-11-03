const generateError = (): void => {
    throw new Error('This is an error');
};

describe('Errors', () => {

    test('should throw an error', () => {
        const errorMessage = 'This is an error';
        expect(() => generateError()).toThrow(errorMessage);
    });

    test('should throw an error (AAA)', () => {
        // Arrange
        const errorMessage = 'This is an error';
        // Act
        const r = () => generateError();
        // Assert
        expect(r).toThrow(errorMessage);
    });
});
