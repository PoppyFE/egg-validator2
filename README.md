# egg-validator2

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-validator2.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-validator2
[travis-image]: https://img.shields.io/travis/eggjs/egg-validator2.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-validator2
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-validator2.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-validator2?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-validator2.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-validator2
[snyk-image]: https://snyk.io/test/npm/egg-validator2/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-validator2
[download-image]: https://img.shields.io/npm/dm/egg-validator2.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-validator2

<!--
A validate plugin for egg based on [validator](https://github.com/chriso/validator.js). Best suited for request parameter validation.
-->

## Install

```bash
$ npm i egg-validator2 --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.validator2 = {
  enable: true,
  package: 'egg-validator2',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.validator2 = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
