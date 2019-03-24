
# vartype

Classify JS types with precision.

## Overview

- Intended for node & modern browsers
- Designed as an alternative for `typeof`
- Consistently returns lower-case strings
- For native data types / structures:
  - `'undefined'`
  - `'boolean'`
  - `'string'`
  - `'symbol'`
  - `'bigint'`
  - `'function'`
  - `'array'`
  - `'object'`
- For numbers:
  - `'nan'`
  - `'infinity'`
  - `'integer'`
  - `'float'`
  - `'double'`
- For errors:
  - `'error'`
  - `'evalerror'`
  - `'internalerror'`
  - `'rangeerror'`
  - `'referenceerror'`
  - `'syntaxerror'`
  - `'typeerror'`
  - `'urierror'`
- For typed-arrays:
  - `'int8array'`
  - `'int16array'`
  - `'int32array'`
  - `'uint8array'`
  - `'uint8clampedarray'`
  - `'uint16array'`
  - `'uint32array'`
  - `'float32array'`
  - `'float64array'`
- For class-based objects:
  - ie. `'user'` for `class User {}`

## Usage

```sh
yarn add vartype
```

```js
const vartype = require('vartype');

vartype(true); // 'boolean'
vartype(''); // 'string'
vartype(5); // 'integer'
vartype(1.5); // 'float'
vartype(1.4); // 'double'
vartype([]); // 'array'
vartype({}); // 'object'
vartype(() => {}); // 'function'

vartype(/asd/); // 'regexp'
vartype(new Promise(resolve => resolve())); // 'promise'
vartype(new Error('test')); // 'error'
vartype(new RangeError('test')); // 'rangerror'
vartype(new Uint8Array(1)); // 'uint8array'

class User {
  constructor(name) {
    this.name = name;
  }
}
const alice = new User('alice');
vartype(alice); // 'user'
```

## How does it work?

Short and sweet, since we're targeting modern environments.

Here's our actual source code:

```js
// index.js

const vartype = (value) => {
  switch (typeof value) {
    case 'boolean':
      return 'boolean';
    case 'string':
      return 'string';
    case 'number':
      if (Number.isNaN(value) === true) {
        return 'nan';
      }
      if (Number.isFinite(value) === false) {
        return 'infinity';
      }
      if (Math.floor(value) === value) {
        return 'integer';
      }
      if (Math.fround(value) === value) {
        return 'float';
      }
      return 'double';
    case 'undefined':
      return 'undefined';
    case 'function':
      return 'function';
    case 'symbol':
      return 'symbol';
    case 'bigint':
      return 'bigint';
    case 'object':
      if (value === null) return 'null';
      if (typeof value.constructor === 'function') {
        if (typeof value.constructor.name === 'string') {
          return value.constructor.name.toLowerCase();
        }
      }
      return 'unknown';
    default:
      return 'unknown';
  }
};

module.exports = vartype;
```

## Testing

```sh
yarn run jest
```

MIT | @davalapar