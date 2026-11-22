import { test } from 'node:test';
import assert from 'node:assert/strict';
import { saludo } from './saludo.mjs';

test('saluda', () => {
  assert.equal(saludo('Ana'), 'Hola, Ana');
});
