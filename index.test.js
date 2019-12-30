
const vartype = require('./index');

test('undefined', () => {
  expect(vartype(undefined)).toBe('undefined');
  expect(vartype(undefined, true)).toBe('undefined');
});

test('null', () => {
  expect(vartype(null)).toBe('null');
  expect(vartype(null, true)).toBe('null');
});

test('boolean', () => {
  expect(vartype(true)).toBe('boolean');
  expect(vartype(true, true)).toBe('boolean');
});

test('string', () => {
  expect(vartype('a')).toBe('string');
  expect(vartype('a', true)).toBe('string');
});

test('nan', () => {
  expect(vartype(NaN)).toBe('nan');
  expect(vartype(NaN, true)).toBe('nan');
});

test('infinity', () => {
  expect(vartype(Infinity)).toBe('infinity');
  expect(vartype(Infinity, true)).toBe('infinity');
});

test('integer', () => {
  expect(vartype(123)).toBe('number');
  expect(vartype(123, true)).toBe('integer');
});

test('float', () => {
  expect(vartype(1.5)).toBe('number');
  expect(vartype(1.5, true)).toBe('float');
});

test('double', () => {
  expect(vartype(1.4)).toBe('number');
  expect(vartype(1.4, true)).toBe('double');
});

test('function', () => {
  expect(vartype(() => {})).toBe('function');
  expect(vartype(() => {}, true)).toBe('function');
});

test('symbol', () => {
  expect(vartype(Symbol('test'))).toBe('symbol');
  expect(vartype(Symbol('test'), true)).toBe('symbol');
});

test('object', () => {
  expect(vartype({})).toBe('object');
  expect(vartype({}, true)).toBe('object');
});

test('array', () => {
  expect(vartype([])).toBe('array');
  expect(vartype([], true)).toBe('array');
});

test('error', () => {
  expect(vartype(new Error('test'))).toBe('object');
  expect(vartype(new Error('test'), true)).toBe('error');
});

test('promise', () => {
  const promise = new Promise((resolve) => setTimeout(resolve, 5));
  expect(vartype(promise, true)).toBe('promise');
});

test('date', () => {
  expect(vartype(new Date(), true)).toBe('date');
});

test('regexp', () => {
  expect(vartype(/asd/, true)).toBe('regexp');
});

test('map', () => {
  expect(vartype(new Map(), true)).toBe('map');
});

test('set', () => {
  expect(vartype(new Set(), true)).toBe('set');
});

test('weakmap', () => {
  expect(vartype(new WeakMap(), true)).toBe('weakmap');
});

test('weakset', () => {
  expect(vartype(new WeakSet(), true)).toBe('weakset');
});

test('arraybuffer', () => {
  expect(vartype(new ArrayBuffer(), true)).toBe('arraybuffer');
});

test('dataview', () => {
  expect(vartype(new DataView(new ArrayBuffer()), true)).toBe('dataview');
});

test('int8array', () => {
  expect(vartype(new Int8Array(), true)).toBe('int8array');
});
test('uint8array', () => {
  expect(vartype(new Uint8Array(), true)).toBe('uint8array');
});
