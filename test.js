'use strict';

const hasPackageLock = require('./');

test('output', () => {
  expect(hasPackageLock('fixtures/bar')).toBe(true);
  expect(hasPackageLock('fixtures/foo')).toBe(false);
  expect(hasPackageLock('fixtures')).toBe(false);
  expect(hasPackageLock()).toBe(false);
});
