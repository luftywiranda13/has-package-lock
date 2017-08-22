# has-package-lock

[![npm](https://img.shields.io/npm/v/has-package-lock.svg?style=flat-square)](https://www.npmjs.com/package/has-package-lock)
[![Travis branch](https://img.shields.io/travis/luftywiranda13/has-package-lock/master.svg?style=flat-square)](https://travis-ci.org/luftywiranda13/has-package-lock)
[![npm](https://img.shields.io/npm/dm/has-package-lock.svg?style=flat-square)](https://npm-stat.com/charts.html?package=has-package-lock&from=2016-04-01)

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

Returns a `boolean`.

#### cwd

Type: `string`<br>
Default: `process.cwd()`

Current working directory.

## Related

- [has-yarn](https://github.com/sindresorhus/has-yarn) - Check if a project is using Yarn
- [has-lockfile](https://github.com/luftywiranda13/has-lockfile) - Check which lockfile is present in the working directory

## License

MIT &copy; [Lufty Wiranda](https://www.instagram.com/luftywiranda13)
