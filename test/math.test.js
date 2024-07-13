import assert from 'assert';
import { add, subtract } from '../src/math.js';

describe('Math Functions', () => {
    it('should add two numbers correctly', () => {
        const result = add(2, 3);
        assert.strictEqual(result, 5);
    });

    it('should subtract two numbers correctly', () => {
        const result = subtract(5, 2);
        assert.strictEqual(result, 3);
    });
});
