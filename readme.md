# has-package-lock [![Build Status](https://img.shields.io/travis/luftywiranda13/has-package-lock/master.svg?style=flat-square)](https://travis-ci.org/luftywiranda13/has-package-lock)

> Check if a `package-lock.json` is present in the working directory

Useful for tools that needs to know whether to use yarn or npm to install dependencies.

## Install

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

## License

MIT © [Lufty Wiranda](https://instagram.com/luftywiranda13)
