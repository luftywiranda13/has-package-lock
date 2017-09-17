'use strict';

const fs = require('fs');
const path = require('path');

module.exports = cwd => fs.existsSync(path.resolve(cwd || process.cwd(), 'package-lock.json'));
