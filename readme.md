# has-package-lock

> Check if a `package-lock.json` is present in the working directory

[![Package Version](https://img.shields.io/npm/v/has-package-lock.svg?style=flat-square)](https://www.npmjs.com/package/has-package-lock)
[![Downloads Status](https://img.shields.io/npm/dm/has-package-lock.svg?style=flat-square)](https://npm-stat.com/charts.html?package=has-package-lock&from=2016-04-01)
[![Build Status: Linux](https://img.shields.io/travis/luftywiranda13/has-package-lock/master.svg?style=flat-square)](https://travis-ci.org/luftywiranda13/has-package-lock)
[![Coverage Status](https://img.shields.io/codecov/c/github/luftywiranda13/has-package-lock/master.svg?style=flat-square)](https://codecov.io/gh/luftywiranda13/has-package-lock)

## Installation

```sh
npm install has-package-lock
```

## Usage

```sh
$ tree
.
├── bar
│   ├── package-lock.json
│   └── package.json
└── foo
    └── package.json
```

```js
const hasPackageLock = require('has-package-lock');

hasPackageLock('bar');
//=> true

hasPackageLock('foo');
//=> false
```

## API

### hasPackageLock([cwd])

Returns `boolean`.

#### cwd

Type: `string`<br />
Default: `process.cwd()`

Current working directory.

## Related

* [has-lockfile](https://github.com/luftywiranda13/has-lockfile) － Check which lockfile is present in the working directory
* [has-yarn](https://github.com/sindresorhus/has-yarn) － Check if a project is using Yarn
* [pkg-man](https://github.com/luftywiranda13/pkg-man) － Detect which package manager that should be used

## License

MIT &copy; [Lufty Wiranda](https://www.luftywiranda.com)
