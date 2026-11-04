describe('Mock example', () => {
    const fn = () => undefined;
    const fnSpied = vi.fn();

    const fnSpied2 = vi.fn().mockImplementation((a: number) => a * 2);

    it('should call the function fnSpied', () => {
        // fn()
        const r = fnSpied();
        expect(fnSpied).toHaveBeenCalled();
        expect(r).toBeUndefined();
    });

    it('should call the function fnSpied2 with argument 5 and return 10', () => {
        const r = fnSpied2(5);
        expect(fnSpied2).toHaveBeenCalledWith(5);
        expect(r).toBe(10);
    });

    test('should call the mock function with the correct arguments', () => {
        const mock = vi
            .fn()
            .mockReturnValueOnce('mocked value')
            .mockReturnValueOnce(true);
        let result = mock('arg1', 'arg2');
        expect(mock).toHaveBeenCalledWith('arg1', 'arg2');
        expect(result).toBe('mocked value');
        result = mock('arg1', 'arg2');
        expect(result).toBe(true);
        result = mock('arg1', 'arg2');
        expect(result).toBeUndefined();
    });
});
