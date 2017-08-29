'use strict';

const { existsSync } = require('fs');
const { resolve } = require('path');

const hasPackageLock = (cwd = process.cwd()) =>
  existsSync(resolve(cwd, 'package-lock.json'));

module.exports = hasPackageLock;
