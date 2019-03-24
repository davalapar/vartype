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
