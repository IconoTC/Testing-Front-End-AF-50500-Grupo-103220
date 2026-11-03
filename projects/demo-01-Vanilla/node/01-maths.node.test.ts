import assert from 'assert';
import test, { it, describe } from 'node:test';
import { add } from './01-maths.ts';

describe('add', () => {
    it('should add two positive numbers', () => {
        const r = add(2, 3);
        assert.strictEqual(r, 5);
    });
    it('should add two negative numbers', () => {
        const r = add(-2, -3);
        assert.strictEqual(r, -5);
    });
    it('should add a positive and a negative number', () => {
        const r = add(2, -3);
        assert.strictEqual(r, -1);
    });
})
