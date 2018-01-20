'use strict';

const { existsSync } = require('fs');
const { resolve } = require('path');

module.exports = (cwd = process.cwd()) => {
  const packageLock = resolve(cwd, 'package-lock.json');

  return existsSync(packageLock);
};
