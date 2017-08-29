'use strict';

const hasPackageLock = require('./');

it('checks `package-lock.json`', () => {
  expect(hasPackageLock('fixtures')).toBe(false);
  expect(hasPackageLock('fixtures/bar')).toBe(true);
  expect(hasPackageLock('fixtures/foo')).toBe(false);
  expect(hasPackageLock()).toBe(false);
});
