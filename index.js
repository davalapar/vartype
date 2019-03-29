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
    case 'object': {
      if (value === null) return 'null';

      const prototype = value.__proto__ || Object.getPrototypeOf(value);

      // Because: Object.getPrototypeOf(Object.create(null)); === null
      if (prototype === null) {
        return 'object';
      }

      if (typeof prototype.constructor === 'function') {
        if (typeof prototype.constructor.name === 'string') {
          return prototype.constructor.name.toLowerCase();
        }
      }

      return 'unknown';
    }
    default:
      return 'unknown';
  }
};

const vartypeof = (value, ...types) => {
  for (let i = 0, l = types.length; i < l; i += 1) {
    if (typeof types[i] !== 'string') {
      throw TypeError(`vartypeof(value, ...types) : index "${i}" at "...types" must be a "string", received "${vartype(types[i])}"`);
    }
  }
  return types.includes(vartype(value));
};

module.exports = { vartype, vartypeof };
