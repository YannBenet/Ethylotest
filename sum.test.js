import sumModule from './sum.js';
import { expect, test } from '@jest/globals';

test('adds 1 + 2 to equal 3', () => {
  expect(sumModule.sum(1, 2)).toBe(3);
});
