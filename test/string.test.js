import assert from 'assert';
import { concatenate } from '../src/string.js';

describe('String Functions', () => {
    it('should concatenate two strings correctly', () => {
        const result = concatenate('Hello, ', 'World!');
        assert.strictEqual(result, 'Hello, World!');
    });
});
