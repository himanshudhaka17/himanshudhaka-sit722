import test from 'node:test';
import assert from 'node:assert/strict';
import { sum } from '../src/util.js';

test('sum adds two numbers', () => {
  assert.equal(sum(1, 2), 3);
});
