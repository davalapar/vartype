
const { vartype, vartypeof } = require('./index');

test('undefined', () => {
  expect(vartype(undefined)).toBe('undefined');
});

test('null', () => {
  expect(vartype(null)).toBe('null');
});

test('boolean', () => {
  expect(vartype(true)).toBe('boolean');
});

test('string', () => {
  expect(vartype('a')).toBe('string');
});

test('nan', () => {
  expect(vartype(NaN)).toBe('nan');
});

test('infinity', () => {
  expect(vartype(Infinity)).toBe('infinity');
});

test('integer', () => {
  expect(vartype(123)).toBe('integer');
});

test('float', () => {
  expect(vartype(1.5)).toBe('float');
});

test('double', () => {
  expect(vartype(1.4)).toBe('double');
});

test('function', () => {
  expect(vartype(() => {})).toBe('function');
});

test('symbol', () => {
  expect(vartype(Symbol('test'))).toBe('symbol');
});

test('object', () => {
  expect(vartype({})).toBe('object');
});

test('array', () => {
  expect(vartype([])).toBe('array');
  expect(vartype(new Array(1))).toBe('array');
});

test('error', () => {
  expect(vartype(new Error('test'))).toBe('error');
});

test('promise', () => {
  const promise = new Promise(resolve => setTimeout(resolve, 5));
  expect(vartype(promise)).toBe('promise');
});

test('date', () => {
  const date = new Date();
  expect(vartype(date)).toBe('date');
});

test('regexp', () => {
  expect(vartype(/asd/)).toBe('regexp');
});

test('map', () => {
  expect(vartype(new Map())).toBe('map');
});

test('set', () => {
  expect(vartype(new Set())).toBe('set');
});

test('weakmap', () => {
  expect(vartype(new WeakMap())).toBe('weakmap');
});

test('weakset', () => {
  expect(vartype(new WeakSet())).toBe('weakset');
});

test('arraybuffer', () => {
  expect(vartype(new ArrayBuffer())).toBe('arraybuffer');
});

test('dataview', () => {
  expect(vartype(new DataView(new ArrayBuffer()))).toBe('dataview');
});

test('int8array', () => {
  expect(vartype(new Int8Array())).toBe('int8array');
});
test('uint8array', () => {
  expect(vartype(new Uint8Array())).toBe('uint8array');
});

test('user (Class-based)', () => {
  class User {}
  const alice = new User();
  expect(vartype(alice)).toBe('user');
});

test('vartypeof', () => {
  expect(vartypeof(1.4, 'string')).toBe(false);
  expect(vartypeof(1.4, 'integer', 'float', 'double')).toBe(true);
  expect(vartypeof(null, 'null')).toBe(true);
});
test('vartypeof error', () => {
  expect(() => vartypeof(null, 1)).toThrow();
});
