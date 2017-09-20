# has-package-lock

[![Package Version](https://img.shields.io/npm/v/has-package-lock.svg)](https://www.npmjs.com/package/has-package-lock)
[![Build Status: Linux](https://img.shields.io/travis/luftywiranda13/has-package-lock/master.svg)](https://travis-ci.org/luftywiranda13/has-package-lock)
[![Downloads Status](https://img.shields.io/npm/dm/has-package-lock.svg)](https://npm-stat.com/charts.html?package=has-package-lock&from=2016-04-01)

Check if a `package-lock.json` is present in the working directory

## Installation

```sh
npm install --save has-package-lock
```

## Usage

```
.
├── foo
│   └── package.json
└── bar
    ├── package.json
    └── package-lock.json
```

```js
const hasPackageLock = require('has-package-lock');

hasPackageLock('foo');
//=> false

hasPackageLock('bar');
//=> true
```

## API

### hasPackageLock([cwd]) 

Returns `boolean`.

#### cwd

Type: `string`<br />
Default: `process.cwd()`

Current working directory.

## Related

- [has-yarn](https://github.com/sindresorhus/has-yarn) - Check if a project is using Yarn
- [has-lockfile](https://github.com/luftywiranda13/has-lockfile) - Check which lockfile is present in the working directory
- [pkg-man](https://github.com/luftywiranda13/pkg-man) - Detect which package manager that should be used

## License

MIT &copy; [Lufty Wiranda](https://www.instagram.com/luftywiranda13)
