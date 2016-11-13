# alle-replace-transformer

[![Build Status][travis-image]][travis-url]
[![npm version][npm-image]][npm-url]
[![License][license-image]][license-url]

[travis-url]: https://travis-ci.org/tlvince/alle-replace-transformer
[travis-image]: https://img.shields.io/travis/tlvince/alle-replace-transformer.svg
[npm-url]: https://www.npmjs.com/package/alle-replace-transformer
[npm-image]: https://img.shields.io/npm/v/alle-replace-transformer.svg
[license-url]: https://opensource.org/licenses/MIT
[license-image]: https://img.shields.io/npm/l/alle-replace-transformer.svg

> String replace transformer for Alle dependencies

## Installation

```shell
npm install --save alle-replace-transformer
```

## Usage

`.allerc`:

```json
{
  "transformers": {
    "alle-replace-transformer": {
      "pattern": "some-regexp",
      "replacement": "replace"
    }
  }
}
```


## Author

© 2016 Tom Vincent <git@tlvince.com> (https://tlvince.com)

## License

Released under the [MIT license](http://tlvince.mit-license.org).
