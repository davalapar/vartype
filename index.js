
const isInteger = typeof Number.isInteger === 'function'
  ? Number.isInteger
  : (value) => Math.floor(value) === value;

const vartype = (value, strict) => {
  if (strict === true) {
    let type = Object.prototype.toString.call(value);
    type = type.substring(8, type.length - 1).toLowerCase();
    switch (type) {
      case 'number':
        if (Number.isNaN(value) === true) {
          return 'nan';
        }
        if (Number.isFinite(value) === false) {
          return 'infinity';
        }
        if (isInteger(value)) {
          return 'integer';
        }
        if (Math.fround(value) === value) {
          return 'float';
        }
        return 'double';
      default:
        return type;
    }
  }
  const type = typeof value;
  switch (type) {
    case 'object': {
      if (value === null) {
        return 'null';
      }
      if (Array.isArray(value) === true) {
        return 'array';
      }
      return type;
    }
    case 'number':
      if (Number.isNaN(value) === true) {
        return 'nan';
      }
      if (Number.isFinite(value) === false) {
        return 'infinity';
      }
      return type;
    default:
      return type;
  }
};

module.exports = vartype;
